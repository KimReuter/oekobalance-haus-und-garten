// src/components/home/ReferencesSplit.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

type RefItem = {
  quote: string;
  name: string;
  detail?: string;
  photo: string;
};

const ITEMS: RefItem[] = [
  {
    quote: "Schnell, sauber, zuverlässig – und obendrein nachhaltig gedacht.",
    name: "M. Schneider",
    detail: "Steinterrasse · Bad Elster",
    photo: "/gartenweg-1.jpg",
  },
  {
    quote: "Unsere Hochbeete sind ein Traum – super umgesetzt.",
    name: "F. Weber",
    detail: "Gewächshaus & Hochbeete · Reichenbach",
    photo: "/natursteinmauer-1.jpg",
  },
  {
    quote: "Endlich jemand, der mitdenkt und nicht nur abarbeitet.",
    name: "A. Richter",
    detail: "Natursteinwege & Hangabfang · Thiergarten",
    photo: "/gartenweg-2.jpg",
  },
];

const DURATION = 10_000; // 10s pro Slide

export default function ReferencesSplit() {
  const shellRef = useRef<HTMLDivElement>(null);
  const inView = useInView(shellRef, { amount: 0.6, once: false });
  const prefersReduced = useReducedMotion();

  // Parallax fürs Background-Bild
  const { scrollYProgress } = useScroll({
    target: shellRef,
    offset: ["start end", "end start"],
  });
  const yImg = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);

  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (prefersReduced) return;
    if (!inView || hover) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % ITEMS.length), DURATION);
    return () => clearInterval(id);
  }, [inView, hover, prefersReduced]);

  const current = ITEMS[index];
  const progressKey = useMemo(
    () => `p-${index}-${inView}-${hover}-${prefersReduced}`,
    [index, inView, hover, prefersReduced]
  );

  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + ITEMS.length) % ITEMS.length);

  return (
    <section className="relative bg-brand-primary-xlight overflow-x-clip">
      {/* Marquee-Banner oben (maskiert, ohne Block dahinter) */}
      <div className="pointer-events-none absolute inset-x-0 top-6 md:top-10 z-30"
        style={{ height: "clamp(72px, 14vw, 180px)" }}>
        <div className="absolute inset-0 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
          <div
            className="flex w-max items-center gap-16 will-change-transform animate-marquee"
            style={{ ["--marquee-speed" as any]: "11s" }}
          >
            <span className="leading-[0.95] py-2 text-[clamp(28px,8vw,96px)] font-extrabold tracking-wide text-brand-primary-light">
              KUNDENFEEDBACK
            </span>
            <span aria-hidden className="leading-[0.95] py-2 text-[clamp(28px,8vw,96px)] font-extrabold tracking-wide text-brand-primary-light">
              KUNDENFEEDBACK
            </span>
            <span aria-hidden className="leading-[0.95] py-2 text-[clamp(28px,8vw,96px)] font-extrabold tracking-wide text-brand-primary-light">
              KUNDENFEEDBACK
            </span>
          </div>
        </div>
      </div>



      {/* Sticky Frame mit Vollbild-Hintergrund */}
      <div
        ref={shellRef}
        className="relative h-[160vh]"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") go(1);
          if (e.key === "ArrowLeft") go(-1);
        }}
        tabIndex={0}
        aria-label="Referenzen"
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* FULL-BG IMAGE + Overlay */}
          <div className="absolute inset-0 -z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={`bg-${index}`}
                // statt "absolute inset-0":
                className="absolute inset-x-0 -top-[8%] -bottom-[8%] will-change-transform"
                style={{ y: yImg }}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.01 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Image src={current.photo} alt="" fill priority className="object-cover" />
                <div className="absolute inset-0 bg-black/35" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* leichte obere/untere Blenden für „Hervorziehen“-Gefühl */}
          <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/40 to-transparent" />
          <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />

          {/* Inhalt */}
          <div className="relative mx-auto h-full max-w-6xl px-4 py-16 pt-[clamp(64px,12vw,160px)]">
            {/* Pfeil-Buttons (über Inhalt, bündig mit max-w-6xl) */}
            <div className="pointer-events-none absolute inset-0">
              <div className="mx-auto h-full max-w-6xl px-4 relative">
                <motion.button
                  type="button"
                  aria-label="Vorherige Referenz"
                  onClick={() => go(-1)}
                  className="pointer-events-auto absolute left-0 top-1/2 -translate-y-1/2 -ml-32
                             inline-flex h-11 w-11 items-center justify-center rounded-full
                             bg-brand-primary text-white shadow-[0_6px_18px_rgba(0,0,0,0.25)]
                             focus:outline-none focus:ring-2 focus:ring-brand-primary/40
                             transition-[transform,box-shadow]"
                  whileHover={{ scale: 1.06, boxShadow: "0 10px 28px rgba(0,0,0,0.32)" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                >
                  <ArrowLeft className="h-5 w-5" />
                </motion.button>

                <motion.button
                  type="button"
                  aria-label="Nächste Referenz"
                  onClick={() => go(1)}
                  className="pointer-events-auto absolute right-0 top-1/2 -translate-y-1/2 -mr-32
                             inline-flex h-11 w-11 items-center justify-center rounded-full
                             bg-brand-primary text-white shadow-[0_6px_18px_rgba(0,0,0,0.25)]
                             focus:outline-none focus:ring-2 focus:ring-brand-primary/40
                             transition-[transform,box-shadow]"
                  whileHover={{ scale: 1.06, boxShadow: "0 10px 28px rgba(0,0,0,0.32)" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
              </div>
            </div>

            {/* LEFT: Zitat & Meta (hell auf dunklem BG) */}
            <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-4 text-center">
              <AnimatePresence mode="wait">
                <motion.figure
                  key={`t-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="max-w-2xl"
                >
                  <blockquote className="text-2xl md:text-4xl font-semibold leading-snug text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
                    “{current.quote}”
                  </blockquote>
                  <figcaption className="mt-4 text-white/90 [text-shadow:0_1px_1px_rgba(0,0,0,0.45)]">
                    <span className="font-medium">{current.name}</span>
                    {current.detail ? <> · <span>{current.detail}</span></> : null}
                  </figcaption>

                  <motion.a
                    href="/references"
                    className="mt-8 inline-flex w-56 items-center justify-center rounded-xl px-6 py-3
                   font-semibold tracking-tight no-underline 
                   bg-brand-primary text-white shadow-[0_4px_12px_rgba(0,0,0,0.35)] 
                   transition-colors"
                    whileHover={{ scale: 1.03, boxShadow: "0 8px 24px rgba(0,0,0,0.45)" }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    Weitere Referenzen
                  </motion.a>
                </motion.figure>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}