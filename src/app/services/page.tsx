// src/app/services/page.jsx

import Image from "next/image";
import Link from "next/link";
import ButtonLink from "@/components/ui/ButtonLink";
import { Hammer, Ruler, Paintbrush, Wrench, Drill, CheckCircle2, Timer, TreePine } from "lucide-react";
import PageHero from "@/components/common/PageHero";
import { motion, cubicBezier } from "framer-motion";
import FlowProcess from "./FlowProcess";
import FinalCta from "@/components/home/FinalCta";

export const metadata = {
  title: "Leistungen – Ökobalance Haus & Garten",
  description: "Gartenbau, Terrassen, Pflege, Roh- & Innenausbau – nachhaltig und verlässlich.",
};

const SERVICES = [
  {
    icon: <TreePine className="h-6 w-6" />,
    title: "Außenflächen & Garten",
    text: "Wege, Beete, Terrassen, Entwässerung – langlebig geplant und gebaut.",
    href: "/contact",
    image: "/svc-terrasse.jpg",
  },
  {
    icon: <Paintbrush className="h-6 w-6" />,
    title: "Ausbau & Oberflächen",
    text: "Roh- & Innenausbau, Trockenbau, Boden, Putz, Anstrich – sauber & terminsicher.",
    href: "/contact",
    image: "/svc-innenausbau.jpg",
  },
  {
    icon: <Wrench className="h-6 w-6" />,
    title: "Montagen & Reparaturen",
    text: "Zäune, Carports, Sichtschutz, Hochbeete und kleine Instandsetzungen.",
    href: "/contact",
    image: "/svc-montage.jpg",
  },
];


export default function ServicesPage() {
  return (
    <main className="text-slate-800">
      {/* HERO */}
      <PageHero
        imageSrc="/services-hero.jpg"
        title="Aus einer Hand. Sauber & zuverlässig."
        subtitle="Von Außenflächen bis Innenausbau – wir planen mit, packen an und liefern ordentlich ab."
        navTrigger="start"

      />

      {/* LEISTUNGSKACHELN */}
      <section className="mx-auto max-w-6xl px-6 mt-10 md:mt-14 pt-16 pb-8 md:pt-20 md:pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="group rounded-2xl border border-slate-200 overflow-hidden bg-white text-center flex flex-col"
            >
              {/* Bild */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>

              {/* Inhalt */}
              <div className="p-5 flex flex-col items-center justify-between flex-1">
                <div>
                  <div className="text-brand-primary mx-auto inline-flex">{s.icon}</div>
                  <h3 className="mt-3 font-semibold text-lg">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{s.text}</p>
                </div>

                <div className="mt-4">
                  <Link
                    href={s.href}
                    className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold transform-gpu transition-transform duration-150 hover:scale-[1.03] no-underline"
                  >
                    Angebot anfragen
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <FinalCta />
    </main>
  );
}