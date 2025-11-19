// src/app/datensicherheit/page.jsx
import PageHero from "@/components/common/PageHero";
import { ShieldCheck, Lock, Network, Server, FileLock2, BellRing, KeyRound, Database, ClipboardCheck } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Datensicherheit – Ökobalance Haus & Garten",
  description:
    "So schützen wir Daten: technische und organisatorische Maßnahmen, Verschlüsselung, Zugriffskontrollen, Backups und Vorfallsmanagement.",
};

export default function DataSecurityPage() {
  return (
    <main className="text-slate-800">
      {/* HERO mit Parallax */}
      <PageHero
        imageSrc="/privacy-hero.jpg"
        title="Datensicherheit"
        subtitle="Verantwortungsvoll, transparent und nach aktuellem Stand der Technik."
        navTrigger="start"   // <- hier von "edge" auf "start" ändern
      />

      {/* Intro */}
      <section className="mx-auto max-w-6xl px-6 py-10 md:py-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-slate-700">
            Der Schutz personenbezogener Daten hat für uns einen hohen Stellenwert. Wir setzen
            auf klare Prozesse, aktuelle Sicherheitsstandards und ein „Privacy by Default“-Vorgehen,
            damit Daten nur so lange und in dem Umfang verarbeitet werden, wie es wirklich nötig ist.
          </p>
        </div>
      </section>

      {/* Grundsätze */}
      <section className="mx-auto max-w-6xl px-6 pb-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center">
          Unsere Sicherheitsgrundsätze
        </h2>

        <div className="mt-6 md:mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <ShieldCheck className="h-6 w-6" />,
              title: "Stand der Technik",
              text: "Wir orientieren uns an bewährten Verfahren und aktualisieren Maßnahmen fortlaufend.",
            },
            {
              icon: <ClipboardCheck className="h-6 w-6" />,
              title: "Datensparsamkeit",
              text: "Wir erheben nur, was erforderlich ist – so wenig wie möglich, so viel wie nötig.",
            },
            {
              icon: <FileLock2 className="h-6 w-6" />,
              title: "Zweckbindung",
              text: "Daten nutzen wir ausschließlich für den vorgesehenen und kommunizierten Zweck.",
            },
          ].map((c) => (
            <article
              key={c.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center flex flex-col items-center"
            >
              <div className="text-brand-primary">{c.icon}</div>

              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {c.title}
              </h3>

              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {c.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Technische & organisatorische Maßnahmen (TOM) */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10 md:py-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center">
            Technische & organisatorische Maßnahmen
          </h2>

          <div className="mt-6 md:mt-8 grid gap-8 lg:grid-cols-2">
            {/* Verschlüsselung */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-3">
                <Lock className="h-5 w-5 text-brand-primary" />
                <h3 className="text-lg font-semibold text-slate-900">
                  Verschlüsselung
                </h3>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 leading-relaxed list-disc list-inside">
                <li>Transportverschlüsselung (HTTPS/TLS) für Website und Formulare.</li>
                <li>Sichere Passwörter, wo möglich zusätzlich 2-Faktor-Authentifizierung.</li>
              </ul>
            </div>

            {/* Zugriffskontrollen */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-3">
                <KeyRound className="h-5 w-5 text-brand-primary" />
                <h3 className="text-lg font-semibold text-slate-900">
                  Zugriffskontrollen
                </h3>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 leading-relaxed list-disc list-inside">
                <li>„Need-to-know“-Prinzip: Zugriff nur für befugte Personen.</li>
                <li>Regelmäßige Prüfung und Entzug nicht mehr benötigter Zugänge.</li>
              </ul>
            </div>

            {/* Speicherung & Backups */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-3">
                <Server className="h-5 w-5 text-brand-primary" />
                <h3 className="text-lg font-semibold text-slate-900">
                  Speicherung & Backups
                </h3>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 leading-relaxed list-disc list-inside">
                <li>Hosting bei seriösen Anbietern mit zeitnahen Sicherheitsupdates.</li>
                <li>Regelmäßige Datensicherungen und Wiederherstellungstests.</li>
              </ul>
            </div>

            {/* Netzwerksicherheit */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-3">
                <Network className="h-5 w-5 text-brand-primary" />
                <h3 className="text-lg font-semibold text-slate-900">
                  Netzwerksicherheit
                </h3>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 leading-relaxed list-disc list-inside">
                <li>Firewall-/Filter-Mechanismen beim Hoster; Minimierung externer Abhängigkeiten.</li>
                <li>Trennung von Test- und Produktivumgebungen, wo sinnvoll.</li>
              </ul>
            </div>

            {/* Drittanbieter */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-3">
                <Database className="h-5 w-5 text-brand-primary" />
                <h3 className="text-lg font-semibold text-slate-900">
                  Drittanbieter
                </h3>
              </div>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Wenn wir externe Dienste einsetzen (z. B. Hosting, E-Mail, Analyse), wählen wir diese sorgfältig aus.
                Verträge zur Auftragsverarbeitung (AVV) und geeignete Garantien (z. B. EU-Standardvertragsklauseln)
                werden – sofern erforderlich – abgeschlossen.
              </p>
            </div>

            {/* Vorfallsmanagement */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex items-center gap-3">
                <BellRing className="h-5 w-5 text-brand-primary" />
                <h3 className="text-lg font-semibold text-slate-900">
                  Vorfallsmanagement
                </h3>
              </div>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Sicherheitsrelevante Ereignisse analysieren wir zügig, leiten Sofortmaßnahmen ein und dokumentieren diese.
                Sofern gesetzlich erforderlich, informieren wir die zuständige Aufsichtsbehörde und betroffene Personen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ihre Verantwortung */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10 md:py-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center">Ihre Verantwortung</h2>
          <div className="mx-auto max-w-3xl mt-4 text-center text-slate-700">
            <p className="">
              Auch Nutzerinnen und Nutzer tragen zum Schutz bei: Geben Sie Daten nur weiter, wenn nötig,
              verwenden Sie starke, einzigartige Passwörter und halten Sie Ihre Systeme aktuell.
            </p>
          </div>
        </div>
      </section>

      {/* Änderungen & Kontakt */}
      <section className="mx-auto max-w-6xl px-6 py-10 md:py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center">
            <h3 className="font-semibold flex items-center justify-center gap-3">
              <ShieldCheck className="h-5 w-5 text-brand-primary" />
              Änderungen dieser Seite
            </h3>

            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Wir überprüfen unsere Maßnahmen regelmäßig. Bei wesentlichen Anpassungen aktualisieren wir diese Seite.
              Letzte Aktualisierung: {new Date().toLocaleDateString("de-DE")}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold flex items-center justify-center gap-3">
              <Lock className="h-5 w-5 text-brand-primary" />
              Fragen zur Datensicherheit
            </h3>
            <p className="mt-3 text-sm text-center text-slate-600">
              Du hast Fragen zu unseren Sicherheitsmaßnahmen oder möchtest ein mögliches Problem melden?
              Wir helfen gern weiter.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center rounded-xl py-3 bg-brand-primary text-white font-semibold tracking-wide transform-gpu transition-transform duration-150 hover:scale-[1.03]"
              >
                Kontakt aufnehmen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}