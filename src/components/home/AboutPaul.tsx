// src/components/home/AboutPaul.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useRef } from "react";
import { Leaf, Hammer, Ruler, Handshake } from "lucide-react";

const POINTS = [
  {
    icon: Leaf,
    title: "Nachhaltig denken",
    text: "Material bewusst wählen, langlebig bauen.",
    dir: "north" as const,
    window: [0.18, 0.38] as [number, number],
    nudge: { x: -40, y: -130 },
  },
  {
    icon: Hammer,
    title: "Saubere Ausführung",
    text: "Präzise, zuverlässig, ohne Schnickschnack.",
    dir: "east" as const,
    window: [0.35, 0.55] as [number, number],
    nudge: { x: -20, y: -60 },
  },
  {
    icon: Ruler,
    title: "Pragmatische Planung",
    text: "Klare Abläufe, kurze Wege, realistische Angebote.",
    dir: "south" as const,
    window: [0.52, 0.72] as [number, number],
    nudge: { x: -40, y: -10 },
  },
  {
    icon: Handshake,
    title: "Auf Augenhöhe",
    text: "Ehrliche Beratung, direkte Kommunikation – von Anfang bis Ende.",
    dir: "west" as const,
    window: [0.68, 0.88] as [number, number],
    nudge: { x: -140, y: -60 },
  },
];

export default function AboutPaul() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Desktop-Animationen wie bisher
  const E_IN: [number, number] = [0.04, 0.16];
  const H_IN: [number, number] = [0.12, 0.28];
  const S_IN: [number, number] = [0.22, 0.40];

  const eX = useTransform(scrollYProgress, E_IN, ["-48px", "0px"]);
  const eO = useTransform(scrollYProgress, E_IN, [0, 1]);

  const hX = useTransform(scrollYProgress, H_IN, ["48px", "0px"]);
  const hO = useTransform(scrollYProgress, H_IN, [0, 1]);

  const sX = useTransform(scrollYProgress, S_IN, ["-48px", "0px"]);
  const sO = useTransform(scrollYProgress, S_IN, [0, 1]);

  const circleT = useTransform(scrollYProgress, [0.12, 0.88], [0, 1]);
  const R = 140;
  const CIRC = 2 * Math.PI * R;

  const ctaO = useTransform(scrollYProgress, [0.78, 0.90], [0, 1]);
  const ctaY = useTransform(scrollYProgress, [0.78, 0.90], [16, 0]);

  return (
    <section ref={ref} className="relative isolate">
      {/* Hintergrundbild + Overlay – gilt für beide Breakpoints */}
      <div className="absolute inset-0">
        <Image
          src="/paul.jpg"
          alt="Paul bei der Arbeit"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* MOBILE: vereinfachtes Layout */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:hidden text-white">
        <p className="text-sm tracking-wider uppercase text-brand-primary-light">
          Wer steckt dahinter?
        </p>
        <h2 className="mt-3 text-3xl text-white/90 font-extrabold leading-tight">
          Paul – Handwerker mit Herz &amp; Verstand
        </h2>
        <p className="mt-4 text-white/90">
          Funktional, ästhetisch und nachhaltig bauen – mit einem klaren Blick
          fürs Wesentliche.
        </p>

        {/* Vier Punkte als 2×2-Grid */}
        <div className="mt-8 grid grid-cols-1 xs:grid-cols-2 gap-5">
          {POINTS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl bg-black/25 border border-white/10 px-4 py-4 backdrop-blur-[2px]"
            >
              <Icon className="h-6 w-6 text-white/90" />
              <div className="mt-2 text-sm font-semibold leading-tight">
                {title}
              </div>
              <div className="mt-1 text-xs leading-snug text-white/85">
                {text}
              </div>
            </div>
          ))}
        </div>

        {/* CTAs untereinander */}
        <div className="mt-8 flex flex-col gap-3">
          <Link
            href="/about"
            className="inline-flex w-full items-center justify-center rounded-xl px-6 py-3
                       font-semibold tracking-tight no-underline 
                       bg-brand-primary text-white shadow-[0_4px_12px_rgba(0,0,0,0.25)]"
          >
            Paul kennenlernen
          </Link>
          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center rounded-xl px-6 py-3
                       font-semibold tracking-tight no-underline 
                       border border-brand-primary text-brand-primary bg-white/95
                       backdrop-blur-sm shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
          >
            Projekt anfragen
          </Link>
        </div>
      </div>

      {/* DESKTOP: dein bestehendes Sticky-/Circle-Layout unverändert, nur auf md+ */}
      <div className="hidden md:block h-[240vh] relative z-10">
        <div className="sticky top-0 h-screen">
          {/* Sticky Content 1:1 aus deinem bisherigen Code */}
          <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
            {/* Linke Spalte */}
            <div className="relative flex items-center">
              <div className="px-16 max-w-xl">
                <motion.p
                  className="text-sm tracking-wider uppercase text-brand-primary-light"
                  style={{ x: eX, opacity: eO }}
                  transition={{ type: "tween", duration: 0.5 }}
                >
                  Wer steckt dahinter?
                </motion.p>

                <motion.h2
                  className="mt-3 text-4xl font-extrabold leading-tight text-white"
                  style={{ x: hX, opacity: hO }}
                  transition={{ type: "tween", duration: 0.6 }}
                >
                  Paul – Handwerker mit Herz &amp; Verstand
                </motion.h2>

                <motion.p
                  className="mt-6 text-white/90"
                  style={{ x: sX, opacity: sO }}
                  transition={{ type: "tween", duration: 0.6 }}
                >
                  Funktional, ästhetisch und nachhaltig bauen – mit einem klaren
                  Blick fürs Wesentliche.
                </motion.p>

                {/* CTA */}
                <motion.div
                  className="mt-8 flex gap-3"
                  style={{ opacity: ctaO, y: ctaY }}
                >
                  <motion.a
                    href="/about"
                    className="inline-flex w-56 items-center justify-center rounded-xl px-6 py-3
                               font-semibold tracking-tight no-underline 
                               bg-brand-primary text-white shadow-[0_4px_12px_rgba(0,0,0,0.25)] 
                               transition-colors"
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    Paul kennenlernen
                  </motion.a>

                  <motion.a
                    href="/contact"
                    className="inline-flex w-56 items-center justify-center rounded-xl px-6 py-3
                               font-semibold tracking-tight no-underline 
                               border border-brand-primary text-brand-primary bg-white/95
                               backdrop-blur-sm shadow-[0_4px_12px_rgba(0,0,0,0.15)] 
                               transition-colors"
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    Projekt anfragen
                  </motion.a>
                </motion.div>
              </div>
            </div>

            {/* Rechte Spalte: Kreis + Punkte */}
            <div className="relative flex items-center justify-center">
              <div
                className="relative"
                style={
                  {
                    ["--r" as any]: "min(18vh, 220px)",
                  } as React.CSSProperties
                }
              >
                <svg
                  width="420"
                  height="420"
                  viewBox="0 0 420 420"
                  className="block"
                >
                  <motion.circle
                    cx="210"
                    cy="210"
                    r={R}
                    fill="none"
                    stroke="rgba(255,255,255,0.85)"
                    strokeWidth="2.5"
                    strokeDasharray={CIRC}
                    style={{
                      strokeDashoffset: useTransform(
                        circleT,
                        [0, 1],
                        [CIRC, 0],
                      ),
                    }}
                    transform="rotate(-90 210 210)"
                  />
                </svg>

                <div
                  className="pointer-events-none absolute left-1/2 top-1/2"
                  style={
                    {
                      ["--r" as any]: "clamp(120px, 18vh, 220px)",
                      ["--label" as any]: "clamp(20px, 2.5vh, 32px)",
                    } as React.CSSProperties
                  }
                >
                  {POINTS.map(
                    ({ icon: Icon, title, text, dir, window, nudge }) => {
                      const nx = nudge?.x ?? 0;
                      const ny = nudge?.y ?? 0;
                      const [s, e] = window;
                      const o = useTransform(scrollYProgress, [s, e], [0, 1]);
                      const y = useTransform(
                        scrollYProgress,
                        [s, e],
                        [12, 0],
                      );

                      const circlePos: Record<
                        typeof dir,
                        React.CSSProperties
                      > = {
                        north: {
                          top: "calc(50% - var(--r))",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                        },
                        east: {
                          top: "50%",
                          left: "calc(50% + var(--r))",
                          transform: "translate(-50%, -50%)",
                        },
                        south: {
                          top: "calc(50% + var(--r))",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                        },
                        west: {
                          top: "50%",
                          left: "calc(50% - var(--r))",
                          transform: "translate(-50%, -50%)",
                        },
                      };

                      const labelOffset: Record<
                        typeof dir,
                        React.CSSProperties
                      > = {
                        north: {
                          transform:
                            "translateY(calc(-1 * var(--label) - 6px))",
                        },
                        east: {
                          transform: "translateX(calc(var(--label) + 4px))",
                        },
                        south: {
                          transform: "translateY(calc(var(--label) + 6px))",
                        },
                        west: {
                          transform:
                            "translateX(calc(-1 * var(--label) - 4px))",
                        },
                      };

                      return (
                        <motion.div
                          key={title}
                          className="absolute"
                          style={{ ...circlePos[dir], opacity: o, y }}
                        >
                          <div
                            className="flex flex-col items-center text-center text-white max-w-[18rem] backdrop-blur-[1.5px] [text-shadow:0_1px_2px_rgba(0,0,0,0.45)]"
                            style={{
                              ...labelOffset[dir],
                              transform: `${
                                (labelOffset[dir] as any).transform ?? ""
                              } translate(${nx}px, ${ny}px)`,
                            }}
                          >
                            <Icon className="h-6 w-6 text-white/90" />
                            <div className="mt-1 text-[0.95rem] font-semibold leading-tight">
                              {title}
                            </div>
                            <div className="mt-0.5 text-[0.8rem] leading-snug text-white/85">
                              {text}
                            </div>
                          </div>
                        </motion.div>
                      );
                    },
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}