// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// --- Simple in-memory rate limit (ok für Start) ---
type Bucket = { count: number; resetAt: number };
const buckets = new Map<string, Bucket>();

function rateLimit(ip: string, limit = 5, windowMs = 10 * 60 * 1000) {
  const now = Date.now();
  const b = buckets.get(ip);

  if (!b || now > b.resetAt) {
    buckets.set(ip, { count: 1, resetAt: now + windowMs });
    return { ok: true, remaining: limit - 1 };
  }

  if (b.count >= limit) return { ok: false, remaining: 0 };

  b.count += 1;
  buckets.set(ip, b);
  return { ok: true, remaining: limit - b.count };
}

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    const rl = rateLimit(ip);
    if (!rl.ok) {
      return NextResponse.json(
        { error: "Zu viele Anfragen. Bitte in ein paar Minuten erneut versuchen." },
        { status: 429 }
      );
    }

    const body = await req.json().catch(() => ({}));
    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const message = String(body?.message ?? "").trim();

    // Honeypot: wenn gefüllt → still „ok“ zurückgeben (Spam nicht triggern)
    const website = String(body?.website ?? "").trim();
    if (website) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Bitte Name, E-Mail und Nachricht ausfüllen." }, { status: 400 });
    }

    const receiver = process.env.CONTACT_RECEIVER_EMAIL!;
    const fromEmail = process.env.CONTACT_FROM_EMAIL!;
    const fromName = process.env.CONTACT_FROM_NAME || "Ökobalance Haus & Garten";

    // 1) Mail an Paul / Receiver
    await resend.emails.send({
      from: `${fromName} <${fromEmail}>`,
      to: [receiver],
      replyTo: email, // 👈 direkt antwortbar
      subject: `Neue Anfrage über Website – ${name}`,
      text:
        `Neue Kontaktanfrage:\n\n` +
        `Name: ${name}\n` +
        `E-Mail: ${email}\n\n` +
        `Nachricht:\n${message}\n`,
    });

    // 2) Bestätigung an Absender (optional schaltbar)
    const confirmEnabled = (process.env.CONTACT_CONFIRM_EMAIL_ENABLED ?? "true") === "true";
    if (confirmEnabled) {
      await resend.emails.send({
        from: `${fromName} <${fromEmail}>`,
        to: [email],
        subject: "Wir haben deine Anfrage erhalten ✅",
        text:
          `Hallo ${name},\n\n` +
          `vielen Dank für deine Nachricht. Wir melden uns zeitnah.\n\n` +
          `Deine Nachricht:\n${message}\n\n` +
          `Viele Grüße\n${fromName}`,
      });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: "Serverfehler – bitte später erneut versuchen." }, { status: 500 });
  }
}