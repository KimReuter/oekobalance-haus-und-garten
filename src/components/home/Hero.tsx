// src/components/home/Hero.tsx
"use client";

import Image from "next/image";
import ButtonLink from "../ui/ButtonLink";
import { siteConfig } from "@/lib/siteConfig";
import { motion, type Variants } from "framer-motion";

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
  return (
    <section className="relative isolate min-h-[100svh]">
      {/* Hintergrundbild */}
      <Image
        src="/hero.jpg"
        alt=""
        fill
        priority
        className="object-cover object-center"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Inhalt */}
      <motion.div
        className="relative z-10 grid min-h-[100svh] place-content-center px-4 text-center"
        variants={container}
        initial="hidden"
        animate="show"
        // optional: nur einmal animieren, wenn sichtbar
        // viewport={{ once: true, amount: 0.6 }}
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

        <motion.div
          className="mt-8 flex justify-center gap-3 flex-wrap"
          variants={fadeUp}
        >
          <ButtonLink href="/contact" variant="primary" className="w-40">
            Kontaktseite
          </ButtonLink>
          <ButtonLink href="/services" variant="secondary" className="w-40">
            Leistungen
          </ButtonLink>
        </motion.div>

    

       
      </motion.div>
    </section>
  );
}