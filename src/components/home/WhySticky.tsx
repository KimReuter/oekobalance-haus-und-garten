// src/components/home/WhySticky.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const PANELS = [
  {
    title: "Baggerarbeiten",
    img: "/bagger-2.jpg",
    text: "Vom Aushub bis zum Fundament – die Basis für jedes Projekt.",
  },
  {
    title: "Naturstein & Wege",
    img: "/gartenweg-2.jpg",
    text: "Haltbare Mauern und Wege, die Gelände in Form bringen.",
  },
  {
    title: "Terrassen & Gärten",
    img: "/gartenbau-2.jpg",
    text: "Individuelle Außenbereiche, die Haus & Natur verbinden.",
  },
  {
    title: "Innenausbau",
    img: "/tiny-2.jpg",
    text: "Dachboden, Wintergarten oder Raumteiler – mit Liebe zum Detail.",
  },
];

// ── Pick how the caption moves: "horizontal" | "vertical-left" | "vertical-right"
const LINE_MODE: "horizontal" | "vertical-left" | "vertical-right" = "horizontal";

// For horizontal caption, choose vertical placement: "center" | "bottom"
const H_POS: "center" | "bottom" = "bottom";

export default function WhySticky() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Section height = pacing (nur für Desktop relevant)
  const SECTION_CLASS = "relative h-[600vh] md:h-[700vh]";

  // Crossfade timing
  const SEG = 1 / PANELS.length; // each panel's slice
  const PAD = SEG * 0.15;        // inner fade padding

  // ── Left column scroll-in/out (eyebrow → headline → subline)
  const OUT_AT = 0.9;

  const eStart = 0.04, eEnd = 0.14; // eyebrow from left
  const hStart = 0.10, hEnd = 0.22; // headline from right
  const sStart = 0.18, sEnd = 0.30; // subline from left

  const eX = useTransform(
    scrollYProgress,
    [eStart, (eStart + eEnd) / 2, OUT_AT, 1],
    ["-48px", "0px", "0px", "-48px"],
  );
  const eO = useTransform(
    scrollYProgress,
    [eStart, eEnd, OUT_AT, 1],
    [0, 1, 1, 0],
  );

  const hX = useTransform(
    scrollYProgress,
    [hStart, (hStart + hEnd) / 2, OUT_AT, 1],
    ["48px", "0px", "0px", "48px"],
  );
  const hO = useTransform(
    scrollYProgress,
    [hStart, hEnd, OUT_AT, 1],
    [0, 1, 1, 0],
  );

  const sX = useTransform(
    scrollYProgress,
    [sStart, (sStart + sEnd) / 2, OUT_AT, 1],
    ["-48px", "0px", "0px", "-48px"],
  );
  const sO = useTransform(
    scrollYProgress,
    [sStart, sEnd, OUT_AT, 1],
    [0, 1, 1, 0],
  );

  return (
    <section className="relative">
      {/* ░░ MOBILE VARIANTE ░░ */}
      <div className="md:hidden">
        {/* Intro-Text mit leichtem Fade-in */}
        <motion.div
          className="mx-auto max-w-6xl px-6 pt-12 pb-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <p className="text-xs uppercase tracking-[0.18em] text-brand-primary">
            Vom Plan zur Umsetzung
          </p>
          <h3 className="mt-2 text-2xl font-extrabold text-slate-900">
            Handwerk ohne Umwege
          </h3>
          <p className="mt-3 text-base text-slate-700">
            Ein Ansprechpartner, klare Abläufe, Ergebnisse die passen.
          </p>
        </motion.div>

        {/* Panels als Cards: Bild oben, Text darunter – mit „Reinschweben“ */}
        <div className="mt-10 px-6 pb-12 space-y-8">
          {PANELS.map((p, i) => (
            <motion.article
              key={p.title}
              className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm"
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.45,
                delay: i * 0.08,
                ease: "easeOut",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative w-full aspect-[4/3]">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>
              <div className="px-4 py-4">
                <h4 className="text-base font-semibold text-slate-900">
                  {p.title}
                </h4>
                <p className="mt-1 text-sm text-slate-700">{p.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* ░░ DESKTOP VARIANTE – dein bisheriges Sticky-Setup ░░ */}
      <section
        ref={ref}
        className={`${SECTION_CLASS} hidden md:block`}
      >
        <div className="sticky top-0 h-screen grid grid-cols-1 md:grid-cols-2 items-center">
          {/* LEFT: Texte mit Scroll-Binding */}
          <div className="px-8">
            <motion.p
              className="text-sm uppercase tracking-wider text-brand-primary"
              style={{ x: eX, opacity: eO }}
            >
              Vom Plan zur Umsetzung
            </motion.p>

            <motion.h3
              className="mt-2 text-4xl md:text-5xl font-extrabold text-slate-900"
              style={{ x: hX, opacity: hO }}
            >
              Handwerk ohne Umwege
            </motion.h3>

            <motion.p
              className="mt-4 text-lg text-slate-700 max-w-prose"
              style={{ x: sX, opacity: sO }}
            >
              Ein Ansprechpartner, klare Abläufe, Ergebnisse die passen.
            </motion.p>
          </div>

          {/* RIGHT: fullscreen panels + moving caption */}
          <div className="relative h-screen w-full overflow-hidden">
            {PANELS.map((p, i) => {
              const start = i * SEG;
              const end = (i + 1) * SEG;

              const opacity = useTransform(
                scrollYProgress,
                [start, start + PAD, end - PAD, end],
                [0, 1, 1, 0],
              );
              const scale = useTransform(
                scrollYProgress,
                [start, start + PAD, end - PAD, end],
                [1.015, 1.015, 1.06, 1.06],
              );

              // local progress 0..1 for this panel
              const local = useTransform(
                scrollYProgress,
                [start, end],
                [0, 1],
              );

              // Caption travel (depends on LINE_MODE)
              const xTravel =
                LINE_MODE === "horizontal"
                  ? useTransform(local, [0, 1], ["120%", "-120%"])
                  : useTransform(local, [0, 1], ["0%", "0%"]); // fixed in x for vertical

              const yTravel =
                LINE_MODE === "horizontal"
                  ? useTransform(local, [0, 1], ["0%", "0%"]) // fixed in y for horizontal
                  : useTransform(local, [0, 1], ["120%", "-120%"]);

              // slight fade at segment edges
              const lineOpacity = useTransform(
                local,
                [0.0, 0.05, 0.95, 1.0],
                [0, 1, 1, 0],
              );

              return (
                <motion.div
                  key={i}
                  className="absolute inset-0 h-full w-full"
                  style={{ opacity }}
                >
                  <motion.div
                    className="absolute inset-0 will-change-transform"
                    style={{ scale }}
                  >
                    <img
                      src={p.img}
                      alt={p.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/35" />
                  </motion.div>

                  {/* ── MOVING CAPTION */}
                  {LINE_MODE === "horizontal" ? (
                    <motion.div
                      aria-hidden
                      className={`absolute inset-x-0 ${H_POS === "center"
                          ? "top-1/2 -translate-y-1/2"
                          : "bottom-0"
                        } 
                              overflow-hidden pointer-events-none pb-4 md:pb-6 
                              pb-[env(safe-area-inset-bottom)]`}
                      style={{ opacity: lineOpacity }}
                    >
                      <motion.div
                        style={{ x: xTravel }}
                        transition={{ type: "tween" }}
                        className="whitespace-nowrap px-6 text-white text-lg md:text-2xl lg:text-3xl font-semibold
                               [text-shadow:0_1px_2px_rgba(0,0,0,0.6)]"
                      >
                        <span className="opacity-90">{p.title}</span>
                        <span className="mx-3 opacity-60">—</span>
                        <span className="font-normal opacity-90">
                          {p.text}
                        </span>
                      </motion.div>
                    </motion.div>
                  ) : (
                    <motion.div
                      aria-hidden
                      className="absolute left-0 right-0 bottom-0 overflow-hidden pointer-events-none"
                      style={{ opacity: lineOpacity, y: yTravel }}
                    >
                      <motion.div
                        style={{ x: xTravel }}
                        transition={{ type: "tween" }}
                        className="
                          whitespace-nowrap
                          px-4
                          text-white
                          text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold
                          [text-shadow:0_2px_6px_rgba(0,0,0,0.7)]
                          tracking-tight
                        "
                      >
                        <span className="opacity-95">{p.title}</span>
                        <span className="mx-4 opacity-70">—</span>
                        <span className="font-light opacity-90">
                          {p.text}
                        </span>
                      </motion.div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
}