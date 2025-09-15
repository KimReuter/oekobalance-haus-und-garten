// src/components/home/FinalCta.tsx
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionProps } from "framer-motion";
import ButtonLink from "../ui/ButtonLink";
import { siteConfig } from "@/lib/siteConfig";

const steps = [
  { title: "Kennenlernen", text: "Kurz abstimmen, Ziel klären." },
  { title: "Planung & Angebot", text: "Fixpreis und Timing transparent." },
  { title: "Umsetzung", text: "Zuverlässig, sauber, termingerecht." },
];

export default function FinalCta() {
  const ref = useRef<HTMLElement>(null);

  // sanftes Scale/Fade beim Reinscrollen
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.98, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

  // Stagger Helper
  const item = (delay = 0): MotionProps => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut", delay },
    viewport: { once: true, amount: 0.4 },
  });

  return (
    <section
      ref={ref}
      className="relative bg-brand-light-soft py-24 md:py-32 text-center"
      aria-label="Final Call to Action"
    >
      <motion.div style={{ scale, opacity }} className="mx-auto max-w-6xl px-6 md:px-10">
        {/* Heading */}
        <motion.h2
          {...item(0)}
          className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900"
        >
          Bereit, dein Projekt zu starten?
        </motion.h2>

        <motion.p {...item(0.08)} className="mt-3 text-lg text-slate-700">
          In drei klaren Schritten zum Ergebnis.
        </motion.p>

        {/* Steps + Pfeile */}
        <div className="mt-14">
          {/* Auf Desktop: 1fr | auto | 1fr | auto | 1fr  → Pfeile stehen in eigenen Spalten */}
          <div className="grid gap-6 md:grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch">
            {/* Card 1 */}
            <StepCard index={1} title="Kennenlernen" text="Kurz abstimmen, Ziel klären." />

            {/* Pfeil 1 → 2 (nur Desktop) */}
            <div className="hidden md:flex items-center justify-center px-2">
              <ArrowRightSmall />
            </div>

            {/* Card 2 */}
            <StepCard index={2} title="Planung & Angebot" text="Fixpreis und Timing transparent." />

            {/* Pfeil 2 → 3 (nur Desktop) */}
            <div className="hidden md:flex items-center justify-center px-2">
              <ArrowRightSmall />
            </div>

            {/* Card 3 */}
            <StepCard index={3} title="Umsetzung" text="Zuverlässig, sauber, termingerecht." />
          </div>
        </div>

        {/* Buttons – identisch zu OneStopTeaser */}
        <motion.div
          {...item(0.6)}
          className="mt-18 flex justify-center gap-6 flex-wrap"
        >
          <motion.a
            href="/contact"
            className="inline-flex w-56 items-center justify-center rounded-xl px-6 py-3
               font-semibold tracking-tight no-underline 
               bg-brand-primary text-white shadow-[0_4px_12px_rgba(0,0,0,0.25)] 
               transition-colors"
            whileHover={{ scale: 1.03, boxShadow: "0 8px 24px rgba(0,0,0,0.35)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            Projekt anfragen
          </motion.a>

          <motion.a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            className="inline-flex w-56 items-center justify-center rounded-xl px-6 py-3
               font-semibold tracking-tight no-underline 
               border border-brand-primary text-brand-primary bg-white
               shadow-[0_4px_12px_rgba(0,0,0,0.15)] 
               transition-colors"
            whileHover={{ scale: 1.03, boxShadow: "0 8px 24px rgba(0,0,0,0.25)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* Kleine, zurückhaltende Pfeil-Icons im Braunstil */
function ArrowRightSmall() {
  return (
    <svg width="36" height="20" viewBox="0 0 36 20" className="text-brand-primary/50">
      <path d="M0 10h28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M22 4l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowDownSmall() {
  return (
    <svg width="20" height="36" viewBox="0 0 20 36" className="text-brand-primary/50">
      <path d="M10 0v28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M4 22l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StepCard({ index, title, text }: { index: number; title: string; text: string }) {
  return (
    <div className="relative">
      <div
        className="h-full rounded-2xl border border-brand-primary/20 bg-white p-6 md:p-7 shadow-sm
                   flex flex-col items-center justify-center text-center"
      >
        <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full
                        bg-brand-primary/10 text-brand-primary font-bold">
          {index}
        </div>
        <h3 className="text-lg md:text-xl font-bold text-brand-primary">{title}</h3>
        <p className="mt-2 text-slate-700">{text}</p>
      </div>

      {/* Mobile-Pfeil unter der Card (nur bei 1 & 2) */}
      {index < 3 && (
        <div className="mt-4 flex justify-center md:hidden">
          <ArrowDownSmall />
        </div>
      )}
    </div>
  );
}