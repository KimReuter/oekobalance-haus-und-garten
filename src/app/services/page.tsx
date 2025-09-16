// src/app/services/page.jsx
import Image from "next/image";
import Link from "next/link";
import { Hammer, Ruler, Trees, Paintbrush, Wrench, Drill, CheckCircle2, Timer } from "lucide-react";

export const metadata = {
  title: "Leistungen – Ökobalance Haus & Garten",
  description: "Gartenbau, Terrassen, Pflege, Roh- & Innenausbau – nachhaltig und verlässlich.",
};

const SERVICES = [
  {
    icon: <Trees className="h-6 w-6" />,
    title: "Garten- & Landschaftsbau",
    text: "Wege, Beete, Pflanzungen – langlebig und pflegeleicht umgesetzt.",
    href: "/contact",
    image: "/svc-galabau.jpg",
  },
  {
    icon: <Hammer className="h-6 w-6" />,
    title: "Terrassen & Außenflächen",
    text: "Terrassen aus Holz/Stein, Untergrundaufbau, Entwässerung – alles aus einer Hand.",
    href: "/contact",
    image: "/svc-terrasse.jpg",
  },
  {
    icon: <Ruler className="h-6 w-6" />,
    title: "Rohbau & Innenausbau",
    text: "Wände, Decken, Trockenbau – sauber, zügig, terminsicher.",
    href: "/contact",
    image: "/svc-innenausbau.jpg",
  },
  {
    icon: <Paintbrush className="h-6 w-6" />,
    title: "Oberflächen & Gestaltung",
    text: "Boden, Putz, Anstrich – robust und passend zu deinem Stil.",
    href: "/contact",
    image: "/svc-oberflaechen.jpg",
  },
  {
    icon: <Wrench className="h-6 w-6" />,
    title: "Kleine Reparaturen",
    text: "Schnelle Hilfe bei kleineren Schäden – unkompliziert & fair.",
    href: "/contact",
    image: "/svc-repair.jpg",
  },
  {
    icon: <Drill className="h-6 w-6" />,
    title: "Montagen",
    text: "Zäune, Carports, Hochbeete, Sichtschutz – präzise montiert.",
    href: "/contact",
    image: "/svc-montage.jpg",
  },
];

export default function ServicesPage() {
  return (
    <main className="text-slate-800">
      {/* HERO – sorgt für transparente Nav oben */}
      <section id="page-hero" data-hero className="relative overflow-hidden">
        <div className="relative h-[44svh] md:h-[56svh]">
          <Image
            src="/services-hero.jpg" // <- ersetze durch dein Bild/Video-Poster
            alt="Leistungen von Ökobalance"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className="relative z-10 h-full grid place-content-center px-6 text-center">
            <p className="text-brand-primary-light text-sm uppercase tracking-widest font-medium">
              Leistungen
            </p>
            <h1 className="mt-2 text-3xl md:text-5xl font-extrabold text-white">
              Aus einer Hand. Sauber & zuverlässig.
            </h1>
            <p className="mt-4 max-w-2xl text-white/90 mx-auto">
              Von Außenflächen bis Innenausbau – wir planen mit, packen an und liefern ordentlich ab.
            </p>
          </div>
        </div>
      </section>

      {/* LEISTUNGSKACHELN */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <article key={s.title} className="group rounded-2xl border border-slate-200 overflow-hidden bg-white">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={s.image} alt={s.title} fill className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
              </div>
              <div className="p-5">
                <div className="text-brand-primary">{s.icon}</div>
                <h3 className="mt-3 font-semibold text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.text}</p>
                <div className="mt-4">
                  <Link
                    href={s.href}
                    className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-brand-primary text-white font-medium transform-gpu transition-transform duration-150 hover:scale-[1.03]"
                  >
                    Angebot anfragen
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ABLAUF / PROZESS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-xl md:text-2xl font-extrabold">So läuft’s mit uns</h2>
          <ol className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Timer className="h-6 w-6" />, title: "1. Kontakt", text: "Kurz schildern, was ansteht – wir melden uns fix." },
              { icon: <Ruler className="h-6 w-6" />, title: "2. Vor-Ort-Termin", text: "Wir schauen uns alles an und beraten ehrlich." },
              { icon: <CheckCircle2 className="h-6 w-6" />, title: "3. Angebot", text: "Transparent & fair – auf Wunsch Festpreis." },
              { icon: <Hammer className="h-6 w-6" />, title: "4. Umsetzung", text: "Sauber, pünktlich, mit Blick fürs Detail." },
            ].map((step) => (
              <li key={step.title} className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="text-brand-primary">{step.icon}</div>
                <h3 className="mt-3 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* REFERENZEN / BEISPIELE (kleines Grid) */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 className="text-xl md:text-2xl font-extrabold">Einblicke in Projekte</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {["/ref-1.jpg", "/ref-2.jpg", "/ref-3.jpg", "/ref-4.jpg", "/ref-5.jpg", "/ref-6.jpg"].map((src) => (
            <div key={src} className="relative aspect-square rounded-2xl overflow-hidden">
              <Image src={src} alt="Projektbeispiel" fill className="object-cover" />
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/portfolio" className="text-brand-primary font-medium underline underline-offset-4">
            Mehr Referenzen ansehen
          </Link>
        </div>
      </section>

      {/* FAQ kurz */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-xl md:text-2xl font-extrabold">Häufige Fragen</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {[
              { q: "Wie schnell bekommt man einen Termin?", a: "Oft innerhalb weniger Tage – je nach Umfang. Wir melden uns schnell zurück." },
              { q: "Macht ihr auch kleine Aufträge?", a: "Ja. Wir helfen gern bei kleinen Reparaturen und Montagen." },
              { q: "Gibt es Festpreise?", a: "Ja, wenn Umfang & Zustand klar sind. Sonst arbeiten wir transparent nach Aufwand." },
              { q: "Wie nachhaltig arbeitet ihr?", a: "Materialwahl mit Sinn, langlebige Lösungen, verantwortungsvoller Umgang mit Ressourcen." },
            ].map((f) => (
              <div key={f.q} className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="font-semibold">{f.q}</p>
                <p className="mt-2 text-sm text-slate-600">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-primary-light">
        <div className="mx-auto max-w-6xl px-6 py-14 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">Projekt starten?</h2>
          <p className="mt-3 text-white/90">Schreib uns kurz, was ansteht – wir melden uns fix.</p>
          <div className="mt-6 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 bg-white text-brand-primary font-semibold transform-gpu transition-transform duration-150 hover:scale-[1.03]"
            >
              Angebot anfragen 🚀
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}