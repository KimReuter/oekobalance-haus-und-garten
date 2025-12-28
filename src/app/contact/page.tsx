// src/app/contact/page.tsx
"use client";

import { Phone, Mail, Clock } from "lucide-react";
import PageHero from "@/components/common/PageHero";
import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Honeypot (muss leer bleiben)
  const [website, setWebsite] = useState("");

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("Bitte Name, E-Mail und Nachricht ausfüllen.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, website }), // 👈 Honeypot mitsenden
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus(data?.error ?? "Senden fehlgeschlagen.");
        setLoading(false);
        return;
      }

      setStatus("Gesendet ✅ Wir melden uns zeitnah.");
      setName(""); setEmail(""); setMessage(""); setWebsite("");

      // Analytics Event
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("contact_submit_success"));
        // optional GA4:
        // // @ts-ignore
        // window.gtag?.("event", "contact_submit_success", { method: "contact_page" });
      }

      setLoading(false);
    } catch {
      setLoading(false);
      setStatus("Netzwerkfehler – bitte später erneut versuchen.");
    }
  }

  return (
    <main className="text-slate-800">
      <PageHero
        imageSrc="/contact.jpg"
        title="Kontakt aufnehmen"
        subtitle="Kurze Frage? Projektidee? Wir sind für dich da."
        navTrigger="start"
      />

      {/* Kontaktinfos */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
          {[
            { icon: Phone, title: "Telefon", text: "+49 152 34570076", href: "tel:+4915234570076" },
            { icon: Mail, title: "E-Mail", text: "info@oekobalance.de", href: "mailto:info@oekobalance.de" },
            { icon: Clock, title: "Öffnungszeiten", text: "Mo–Fr: 08:00–18:00 · Sa: nach Vereinbarung" },
          ].map((c) => (
            <div key={c.title} className="group flex flex-col items-center gap-4">
              <c.icon className="h-14 w-14 text-brand-primary transform-gpu transition-transform duration-200 group-hover:scale-110" />
              <h3 className="font-semibold text-lg">{c.title}</h3>
              {c.href ? (
                <a href={c.href} className="text-sm text-slate-600 hover:text-brand-primary no-underline">
                  {c.text}
                </a>
              ) : (
                <p className="text-sm text-slate-600 group-hover:text-brand-primary transition-colors">
                  {c.text}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Formular */}
      <section>
        <div className="mx-auto max-w-3xl px-6 pt-6 pb-14">
          <h2 className="text-xl md:text-2xl font-extrabold text-center">Schreib uns direkt</h2>

          <form onSubmit={handleSubmit} className="mt-8 grid gap-6">
            {/* Honeypot: unsichtbar, nicht entfernen */}
            <div className="hidden">
              <label htmlFor="website">Website</label>
              <input
                id="website"
                name="website"
                type="text"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                autoComplete="off"
                tabIndex={-1}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input
                  className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/30"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">E-Mail</label>
                <input
                  type="email"
                  className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/30"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Nachricht</label>
              <textarea
                rows={5}
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/30"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            {status && <p className="text-sm text-slate-700 text-center">{status}</p>}

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 bg-brand-primary text-white font-semibold transform-gpu transition-transform duration-150 hover:scale-[1.03] disabled:opacity-60"
              >
                {loading ? "Sende…" : "Absenden 🚀"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}