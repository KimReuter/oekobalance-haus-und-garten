import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Unvollständige Daten" }, { status: 400 });
    }

    await resend.emails.send({
      from: `${process.env.CONTACT_FROM_NAME} <${process.env.CONTACT_FROM_EMAIL}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL!,
      replyTo: email,
      subject: `Neue Anfrage von ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Nachricht:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "E-Mail konnte nicht gesendet werden" }, { status: 500 });
  }
}