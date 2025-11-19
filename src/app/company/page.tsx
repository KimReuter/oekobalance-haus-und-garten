// src/app/company/page.jsx
import Image from "next/image";
import Link from "next/link";
import { Leaf, ShieldCheck, Hammer, Timer, Users, Award } from "lucide-react";
import PageHero from "@/components/common/PageHero";
import WhySection from "@/components/home/WhySection";
import AboutPaul from "@/components/home/AboutPaul";

export const metadata = {
  title: "Unternehmen – Ökobalance Haus & Garten",
  description: "Wer wir sind, wofür wir stehen und wie wir arbeiten.",
};

export default function CompanyPage() {
  const years = new Date().getFullYear() - 2013;

  return (
    <main className="text-slate-800">
      {/* HERO */}
      <PageHero
        imageSrc="/company-hero-.jpg"
        title="Handwerk mit Haltung."
        subtitle={`Nachhaltig, pünktlich und lösungsorientiert – seit ${years} Jahren.`}
        navTrigger="start"
        // optional: Höhe feinjustieren (wie auf anderen Seiten)
        heightClass="h-[48svh] md:h-[56svh]"
      />

      {/* MISSION / WERTE */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT COLUMN */}
          <div className="flex flex-col">
            <h2 className="text-2xl md:text-3xl font-extrabold order-1">
              Unsere Mission
            </h2>

            <p className="mt-4 text-slate-700 leading-relaxed order-1">
              Wir verbinden solide Handwerksarbeit mit nachhaltigen Methoden.
              Unser Ziel: langlebige Ergebnisse, klare Absprachen und ein freundlicher Umgang –
              auf der Baustelle und darüber hinaus.
            </p>

            {/* IMAGE – only visible on mobile */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm mt-8 order-2 md:hidden">
              <Image
                src="/company-work.jpg"
                alt="Team bei der Arbeit"
                fill
                className="object-cover"
              />
            </div>

            {/* VALUES LIST */}
            <ul className="mt-8 grid sm:grid-cols-2 gap-8 text-center order-3">
              <li className="flex flex-col items-center">
                <Leaf className="h-6 w-6 text-brand-primary mb-3" />
                <span>Materialwahl mit Sinn – ressourcenschonend & hochwertig</span>
              </li>
              <li className="flex flex-col items-center">
                <ShieldCheck className="h-6 w-6 text-brand-primary mb-3" />
                <span>Saubere Ausführung & Gewährleistung</span>
              </li>
              <li className="flex flex-col items-center">
                <Timer className="h-6 w-6 text-brand-primary mb-3" />
                <span>Verlässliche Termine & ehrliche Kommunikation</span>
              </li>
              <li className="flex flex-col items-center">
                <Hammer className="h-6 w-6 text-brand-primary mb-3" />
                <span>Erfahrung aus Praxis – kein Schnickschnack</span>
              </li>
            </ul>
          </div>

          {/* RIGHT COLUMN – Only desktop */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hidden md:block">
            <Image
              src="/company-work.jpg"
              alt="Team bei der Arbeit"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <AboutPaul />

      <WhySection />

    </main>
  );
}