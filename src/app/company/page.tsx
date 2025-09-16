// src/app/company/page.jsx
import Image from "next/image";
import Link from "next/link";
import { Leaf, ShieldCheck, Hammer, Timer, Users, Award } from "lucide-react";

export const metadata = {
  title: "Unternehmen – Ökobalance Haus & Garten",
  description: "Wer wir sind, wofür wir stehen und wie wir arbeiten.",
};

export default function CompanyPage() {
  return (
    <main className="text-slate-800">
      {/* HERO */}
      <section
        id="page-hero"
        data-hero
        className="relative overflow-hidden"
      >
        <div className="relative h-[48svh] md:h-[56svh]">
          <Image
            src="/company-hero.jpg" // <- dein Bild hier
            alt="Ökobalance Team bei der Arbeit"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className="relative z-10 h-full grid place-content-center px-6 text-center">
            <p className="text-brand-primary-light text-sm uppercase tracking-widest font-medium">
              Ökobalance Haus & Garten
            </p>
            <h1 className="mt-2 text-3xl md:text-5xl font-extrabold text-white">
              Handwerk mit Haltung.
            </h1>
            <p className="mt-4 max-w-2xl text-white/90 mx-auto">
              Nachhaltig, pünktlich und lösungsorientiert – seit {new Date().getFullYear() - 2013} Jahren.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION / WERTE */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold">
              Unsere Mission
            </h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Wir verbinden solide Handwerksarbeit mit nachhaltigen Methoden.
              Unser Ziel: langlebige Ergebnisse, klare Absprachen und ein freundlicher Umgang
              – auf der Baustelle und darüber hinaus.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-4">
              <li className="flex items-start gap-3">
                <Leaf className="h-5 w-5 text-brand-primary shrink-0" />
                <span>Materialwahl mit Sinn – ressourcenschonend & hochwertig</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-brand-primary shrink-0" />
                <span>Saubere Ausführung & Gewährleistung</span>
              </li>
              <li className="flex items-start gap-3">
                <Timer className="h-5 w-5 text-brand-primary shrink-0" />
                <span>Verlässliche Termine & ehrliche Kommunikation</span>
              </li>
              <li className="flex items-start gap-3">
                <Hammer className="h-5 w-5 text-brand-primary shrink-0" />
                <span>Erfahrung aus Praxis – kein Schnickschnack</span>
              </li>
            </ul>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
            <Image
              src="/company-work.jpg" // <- ersetzen
              alt="Team bei der Arbeit"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* WARUM WIR / USPs */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h3 className="text-xl md:text-2xl font-extrabold">Warum wir</h3>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <ShieldCheck className="h-6 w-6" />, title: "Fest zugesagt", text: "Klare Termine & Absprachen." },
              { icon: <Hammer className="h-6 w-6" />, title: "Saubere Arbeit", text: "Sorgfältig, ordentlich, langlebig." },
              { icon: <Users className="h-6 w-6" />, title: "Direkter Draht", text: "Kurze Wege, schnelle Entscheidungen." },
              { icon: <Award className="h-6 w-6" />, title: "Erfahrung", text: `${new Date().getFullYear() - 2013}+ Jahre Praxis.` },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="text-brand-primary">{item.icon}</div>
                <h4 className="mt-3 font-semibold">{item.title}</h4>
                <p className="mt-2 text-sm text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h3 className="text-xl md:text-2xl font-extrabold">Unser Weg</h3>
        <ol className="mt-8 relative border-s-2 border-slate-200 pl-6 space-y-8">
          {[
            { year: "2013", text: "Gründung & erste Projekte im Garten- und Landschaftsbau." },
            { year: "2017", text: "Ausbau Roh- & Innenausbau – ein Team, ein Anspruch." },
            { year: "2021", text: "Über 100 zufriedene Kund:innen in der Region." },
            { year: "Heute", text: "Ganzheitliche Lösungen für Haus & Garten – nachhaltig gedacht." },
          ].map((i) => (
            <li key={i.year} className="relative">
              <span className="absolute -left-[22px] top-1.5 h-4 w-4 rounded-full bg-brand-primary" />
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-brand-primary">{i.year}</span>
                <p className="text-slate-700">{i.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* TEAM (optional Bilder) */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h3 className="text-xl md:text-2xl font-extrabold">Team</h3>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Paul Beispiel", role: "Bauleitung", img: "/team-paul.jpg" },
              { name: "Mira Beispiel", role: "Gartenbau", img: "/team-mira.jpg" },
              { name: "Jan Beispiel", role: "Innenausbau", img: "/team-jan.jpg" },
            ].map((p) => (
              <div key={p.name} className="rounded-2xl border border-slate-200 bg-white p-5 flex items-center gap-4">
                <div className="h-14 w-14 rounded-full overflow-hidden bg-slate-100 shrink-0">
                  <Image src={p.img} alt={p.name} width={56} height={56} className="h-full w-full object-cover" />
                </div>
                <div>
                  <p className="font-semibold">{p.name}</p>
                  <p className="text-sm text-slate-600">{p.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZERTIFIKATE / PARTNER */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h3 className="text-xl md:text-2xl font-extrabold">Zertifikate & Partner</h3>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
          {["/logo-1.svg", "/logo-2.svg", "/logo-3.svg", "/logo-4.svg"].map((src) => (
            <div key={src} className="h-12 opacity-70 hover:opacity-100 transition-opacity">
              <Image src={src} alt="Partner" width={180} height={48} className="h-full w-auto object-contain" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-primary-light">
        <div className="mx-auto max-w-6xl px-6 py-14 text-center">
          <h3 className="text-2xl md:text-3xl font-extrabold text-white">Lass uns dein Projekt starten</h3>
          <p className="mt-3 text-white/90">Kurzes Gespräch, klare Einschätzung – kostenlos & unverbindlich.</p>
          <div className="mt-6 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 bg-white text-brand-primary font-semibold transform-gpu transition-transform duration-150 hover:scale-[1.03]"
            >
              Projekt starten 🚀
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}