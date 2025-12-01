// src/app/nachhaltigkeit/page.jsx
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/common/PageHero";
import { Leaf, Recycle, MapPin, Droplets, Truck, Factory, Award, Hammer, ShieldCheck, Clock } from "lucide-react";
import ProcessCircle from "./ProcessCircle";
import { motion } from "framer-motion";
import Saeulen from "./Saeulen";


export const metadata = {
  title: "Nachhaltigkeit – Ökobalance Haus & Garten",
  description:
    "Wie wir nachhaltig arbeiten: Materialwahl, regionale Partner, Abfalltrennung, CO₂-Reduktion und langlebige Lösungen.",
};

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 16,
    clipPath: "inset(20% 0% 20% 0% round 16px)",
  },
  show: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0% 0% 0% 0% round 16px)",
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function SustainabilityPage() {
  return (
    <main className="text-slate-800">
      {/* PARALLAX HERO */}
      <PageHero
        imageSrc="/sustainability.jpg"               // dein Bild unter /public
        title="Nachhaltig denken. Nachhaltig bauen."
        subtitle="Langlebige Lösungen, faire Materialien, kurze Wege – damit Projekte heute und morgen Freude machen."
        navTrigger="start"                           // Header füllt sich, wenn der Hero „durch“ ist
      // heightClass="h-[44svh] md:h-[56svh]"     // optional: Höhe feinjustieren
      />

      {/* 3 Säulen */}
      <Saeulen />



      {/* Materialien – Beispielkacheln */}
      <section className="mx-auto max-w-6xl px-6 pt-6 md:pt-8 pb-6 md:pb-16 bg-white">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center">Bevorzugte Materialien</h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { src: "/material-holz.jpg", title: "Zertifiziertes Holz", text: "FSC/PEFC – langlebig gepflegt, passend für Terrassen & Sichtschutz." },
            { src: "/material-stein.jpg", title: "Natur- & Recyclingstein", text: "Regional, robust, pflegeleicht – kurze Wege, gutes Klima." },
            { src: "/material-putz.jpg", title: "Emissionsarme Innenmaterialien", text: "Bei Putz, Farbe, Boden: Produkte mit niedrigen VOCs bevorzugt." },
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



      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold">Lass uns nachhaltig planen</h2>
          <p className="mt-3">
            Kurzer Austausch – wir schlagen dir passende, langlebige Lösungen vor.
          </p>

          <div className="mt-8 mb-4 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3
    bg-brand-primary text-white font-semibold tracking-tight
    transform-gpu transition-transform duration-150
    hover:scale-[1.03]"
            >
              Projekt starten 🌱
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}