import { Phone, Mail, Clock } from "lucide-react";
import PageHero from "@/components/common/PageHero";

export const metadata = {
  title: "Kontakt – Ökobalance Haus & Garten",
  description: "Schreib uns oder ruf an – wir freuen uns auf deine Anfrage.",
};

export default function ContactPage() {
  return (
    <main className="text-slate-800">
      {/* HERO mit Parallax; navTrigger="start" damit deine Nav sofort beim Scrollen braun wird */}
      <PageHero
        imageSrc="/contact.jpg"
        title="Kontakt aufnehmen"
        subtitle="Kurze Frage? Projektidee? Wir sind für dich da."
        navTrigger="start"
      />

      {/* KONTAKT-INFOS + ÖFFNUNGSZEITEN */}
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

      {/* FORMULAR (hell, ohne bg) */}
      {/* FORMULAR – ohne grauen Hintergrund */}
      <section>
        <div className="mx-auto max-w-3xl px-6 py-14">
          <h2 className="text-xl md:text-2xl font-extrabold text-center">Schreib uns direkt</h2>
          <form className="mt-8 grid gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/30"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">E-Mail</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/30"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700">Nachricht</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/30"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 bg-brand-primary text-white font-semibold transform-gpu transition-transform duration-150 hover:scale-[1.03]"
              >
                Absenden 🚀
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

