// src/components/home/FinalCta.tsx
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";

// Eases & Variants
const easeOutExpo = [0.22, 1, 0.36, 1] as const;

const stepsContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.5, delayChildren: 0.15 },
  },
};

const stepItem = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: easeOutExpo },
  },
};

export default function FinalCta() {
  const ref = useRef<HTMLElement>(null);

  // sanftes Scale/Fade beim Reinscrollen
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.98, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

  return (
    <section ref={ref} className="relative py-24 md:py-32 text-center" aria-label="Final Call to Action">
      <motion.div style={{ scale, opacity }} className="mx-auto max-w-6xl px-6 md:px-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900"
        >
          Bereit, dein Projekt zu starten?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.08 }}
          viewport={{ once: true, amount: 0.5 }}
          className="mt-3 text-lg text-slate-700"
        >
          In drei klaren Schritten zum Ergebnis.
        </motion.p>

        {/* Steps + Pfeile */}
        <div className="mt-14">
          {/* Grid als Motion-Container für Stagger */}
          <motion.div
            variants={stepsContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid gap-6 md:grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch"
          >
            {/* Card 1 */}
            <StepCard index={1} title="Kennenlernen" text="Kurz abstimmen, Ziel klären." />
            <div className="hidden md:flex items-center justify-center px-2"><ArrowRightSmall /></div>
            {/* Card 2 */}
            <StepCard index={2} title="Planung & Angebot" text="Fixpreis und Timing transparent." />
            <div className="hidden md:flex items-center justify-center px-2"><ArrowRightSmall /></div>
            {/* Card 3 */}
            <StepCard index={3} title="Umsetzung" text="Zuverlässig, sauber, termingerecht." />
          </motion.div>
        </div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
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
            transition={{ duration: 0.25 }}
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
            transition={{ duration: 0.25 }}
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

/** StepCard mit Motion: Stagger-Einflug + Hover-Scale */
function StepCard({ index, title, text }: { index: number; title: string; text: string }) {
  return (
    <motion.div variants={stepItem} whileHover={{ scale: 1.03 }} transition={{ duration: 0.25 }}>
      <div className="h-full rounded-2xl border border-brand-primary/20 bg-white p-6 md:p-7 shadow-sm
                      flex flex-col items-center justify-center text-center">
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
    </motion.div>
  );
}