"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Parallax-Header für Unterseiten
 * Props:
 * - imageSrc: string (Pfad unter /public)
 * - title: string
 * - subtitle?: string
 * - heightClass?: string (z.B. "h-[36svh] md:h-[44svh]")
 * - navTrigger?: "start" | "edge" (steuert deinen StickyNav)
 */
export default function PageHero({
  imageSrc,
  title,
  subtitle,
  heightClass = "h-[36svh] md:h-[44svh]",
  navTrigger = "edge",
}) {
  const ref = useRef(null);

  // Parallax Werte
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const yFg = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.2]);

  return (
    <section
      ref={ref}
      id="page-hero"
      data-hero
      data-nav-trigger={navTrigger}
      className="relative overflow-hidden"
    >
      <div className={`relative ${heightClass}`}>
        {/* Background (parallax) */}
        <motion.div
          aria-hidden
          className="absolute inset-0"
          style={{ y: yBg, scale: bgScale }}
        >
          <Image
            src={imageSrc}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/35" />
        </motion.div>

        {/* Foreground/Text (leicht gegenläufig) */}
        <motion.div
          className="relative z-10 h-full grid place-content-center px-6 text-center"
          style={{ y: yFg }}
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-white/90 mx-auto">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}