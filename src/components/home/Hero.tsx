// src/components/home/Hero.tsx
"use client";

import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delayChildren: 0.1, staggerChildren: 0.15 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: ["easeOut"] },
  },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const yFg = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const bGScale = useTransform(scrollYProgress, [0, 1], [1.12, 1.2])

  return (
    <section
      id="hero"
      ref={ref}
      className="relative isolate min-h-[100svh] overflow-hidden">
      {/* Hintergrundbild */}
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ y: yBg, scale: bGScale }}
      >
        <Image
          src="/hero.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Inhalt */}
      <motion.div
        className="relative z-10 grid min-h-[100svh] place-content-center px-4 text-center"
        variants={container}
        initial="hidden"
        animate="show"
        style={{ y: yFg }}
      >
        <motion.p
          className="text-sm font-medium tracking-wider uppercase text-brand-primary-light"
          variants={fadeUp}
        >
          {siteConfig.name}
        </motion.p>

        <motion.h1
          className="mt-3 text-4xl md:text-6xl font-extrabold leading-tight text-white"
          variants={fadeUp}
        >
          Nachhaltige Lösungen für
          <br />
          Haus & Garten
        </motion.h1>

        <motion.p
          className="mt-5 mx-auto max-w-2xl text-lg md:text-xl text-white/90"
          variants={fadeUp}
        >
          Terrassen- &amp; Gartenpflege sowie Roh- und Innenausbau:{" "}
          <strong>Hier wird&apos;s gut.</strong>
        </motion.p>

        <motion.div className="mt-8 flex justify-center gap-4 flex-wrap" variants={fadeUp}>
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
            Kontaktseite
          </motion.a>

          <motion.a
            href="/services"
            className="inline-flex w-56 items-center justify-center rounded-xl px-6 py-3
               font-semibold tracking-tight no-underline 
               border border-brand-primary text-brand-primary bg-white
               shadow-[0_4px_12px_rgba(0,0,0,0.15)] 
               transition-colors"
            whileHover={{ scale: 1.03, boxShadow: "0 8px 24px rgba(0,0,0,0.25)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            Leistungen
          </motion.a>
        </motion.div>

      </motion.div>
    </section>
  );
}