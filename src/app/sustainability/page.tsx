// src/app/nachhaltigkeit/page.jsx
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/common/PageHero";
import { Leaf, Recycle, Droplets, Truck, Factory, Award, Hammer, ShieldCheck, Clock } from "lucide-react";

export const metadata = {
  title: "Nachhaltigkeit – Ökobalance Haus & Garten",
  description:
    "Wie wir nachhaltig arbeiten: Materialwahl, regionale Partner, Abfalltrennung, CO₂-Reduktion und langlebige Lösungen.",
};

export default function SustainabilityPage() {
  return (
    <main className="text-slate-800">
      {/* PARALLAX HERO */}
      <PageHero
        imageSrc="/sustainability.jpg"               // dein Bild unter /public
        title="Nachhaltig denken. Nachhaltig bauen."
        subtitle="Langlebige Lösungen, faire Materialien, kurze Wege – damit Projekte heute und morgen Freude machen."
        navTrigger="edge"                           // Header füllt sich, wenn der Hero „durch“ ist
      // heightClass="h-[44svh] md:h-[56svh]"     // optional: Höhe feinjustieren
      />

      {/* 3 Säulen */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center">Unsere 3 Säulen</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Leaf className="h-6 w-6" />,
              title: "Materialwahl mit Sinn",
              text: "Bevorzugt regionale, zertifizierte oder recycelte Stoffe; langlebig statt billig.",
            },
            {
              icon: <Recycle className="h-6 w-6" />,
              title: "Saubere Entsorgung",
              text: "Getrennte Abfälle, fachgerechte Entsorgung und Wiederverwendung wo möglich.",
            },
            {
              icon: <Truck className="h-6 w-6" />,
              title: "Kurze Wege",
              text: "Regionale Partner, gebündelte Fahrten, effiziente Logistik – spart CO₂ und Zeit.",
            },
          ].map((c) => (
            <article key={c.title} className="rounded-2xl border border-slate-200 bg-white p-5 flex flex-col items-center text-center">
              <div className="text-brand-primary">{c.icon}</div>
              <h3 className="mt-3 font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{c.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Praxis: So arbeiten wir */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center">So setzen wir das um</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Hammer className="h-6 w-6" />,
                title: "Langlebigkeit zuerst",
                text: "Solide Untergründe, korrekte Schichten, robuste Oberflächen – weniger Reparaturen.",
              },
              {
                icon: <Droplets className="h-6 w-6" />,
                title: "Wasser im Blick",
                text: "Versickerungsfreundliche Flächen & saubere Entwässerung – gut für Garten & Grundwasser.",
              },
              {
                icon: <Factory className="h-6 w-6" />,
                title: "Sinnvolle Produkte",
                text: "Wenn möglich: FSC/PEFC-Holz, Recycling-Baustoffe, emissionsarme Systeme.",
              },
              {
                icon: <ShieldCheck className="h-6 w-6" />,
                title: "Sicher & sauber",
                text: "Ordentliche Baustellen, staubarm arbeiten, Schutz für Pflanzen & Nachbarschaft.",
              },
            ].map((s) => (
              <div key={s.title} className="rounded-2xl border border-slate-200 bg-white p-5 text-center flex flex-col items-center">
                <div className="text-brand-primary">{s.icon}</div>
                <h3 className="mt-3 font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materialien – Beispielkacheln */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20 bg-brand-primary-light">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center">Bevorzugte Materialien</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { src: "/mat-holz.jpg", title: "Zertifiziertes Holz", text: "FSC/PEFC – langlebig gepflegt, passend für Terrassen & Sichtschutz." },
            { src: "/mat-stein.jpg", title: "Natur- & Recyclingstein", text: "Regional, robust, pflegeleicht – kurze Wege, gutes Klima." },
            { src: "/mat-boden.jpg", title: "Emissionsarme Innenmaterialien", text: "Bei Putz, Farbe, Boden: Produkte mit niedrigen VOCs bevorzugt." },
          ].map((m) => (
            <article key={m.title} className="group rounded-2xl border border-slate-200 overflow-hidden bg-white">
              <div className="relative aspect-[4/3]">
                <Image src={m.src} alt={m.title} fill className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold">{m.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{m.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Regionale Partner / kurze Wege */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center">Kurze Wege, starke Region</h2>
          <p className="mt-3 text-slate-700 max-w-3xl">
            Wir bündeln Fahrten, arbeiten wenn möglich mit regionalen Lieferanten
            und stimmen Termine so ab, dass Leerfahrten vermieden werden.
          </p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
            {["/logo-1.svg", "/logo-2.svg", "/logo-3.svg", "/logo-4.svg"].map((src) => (
              <div key={src} className="h-12 opacity-60 hover:opacity-100 transition-opacity">
                <Image src={src} alt="Partner-Logo (Platzhalter)" width={180} height={48} className="h-full w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Abfall & Kreislauf */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
          <div>
            <h2 className="text-xl md:text-2xl font-extrabold">Abfalltrennung & Recycling</h2>
            <p className="mt-3 text-slate-700">
              Auf jeder Baustelle trennen wir Holz, Grün, Bauschutt und Mischabfälle.
              Wiederverwendbares Material (z. B. Steine/Erde) prüfen wir auf sinnvolle Zweitnutzung.
              Der Rest geht sauber über zertifizierte Entsorger.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-4">
              <li className="flex items-start gap-3">
                <Recycle className="h-5 w-5 text-brand-primary shrink-0" />
                <span>Getrennte Container/BigBags je nach Projekt</span>
              </li>
              <li className="flex items-start gap-3">
                <Award className="h-5 w-5 text-brand-primary shrink-0" />
                <span>Dokumentation & transparente Nachweise auf Wunsch</span>
              </li>
            </ul>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image src="/sustain-recycle.jpg" alt="Getrennte Materialien und saubere Baustelle" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-primary-light">
        <div className="mx-auto max-w-6xl px-6 py-14 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">Lass uns nachhaltig planen</h2>
          <p className="mt-3 text-white/90">
            Kurzer Austausch – wir schlagen dir passende, langlebige Lösungen vor.
          </p>
          <div className="mt-6 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 bg-white text-brand-primary font-semibold transform-gpu transition-transform duration-150 hover:scale-[1.03]"
            >
              Projekt starten 🌱
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}