// src/app/sustainability/ProcessCircle.tsx
"use client";

import type { ReactNode, CSSProperties } from "react";
import { Hammer, Droplets, Factory, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

type Step = { icon: ReactNode; title: string; text: string };

type Props = {
  steps?: Step[];
  size?: number;  // Durchmesser in px
  dur?: number;   // Sek. pro Segment (Tempo)
  totalDuration?: number;  // Alternative: Dauer für alle 4 Segmente zusammen
  padX?: number;  // horizontaler Card-Abstand
  padY?: number;  // vertikaler   Card-Abstand
  arcGapDeg?: number; // Lücke vor/after Card (Grad)
};

const defaultSteps: Step[] = [
  { icon: <Hammer className="h-6 w-6 text-brand-primary" />, title: "Langlebigkeit zuerst", text: "Solide Untergründe, korrekte Schichten, robuste Oberflächen – weniger Reparaturen." },
  { icon: <Factory className="h-6 w-6 text-brand-primary" />, title: "Sinnvolle Produkte", text: "Wenn möglich: FSC/PEFC-Holz, Recycling-Baustoffe, emissionsarme Systeme." },
  { icon: <ShieldCheck className="h-6 w-6 text-brand-primary" />, title: "Sicher & sauber", text: "Ordentliche Baustellen, staubarm arbeiten, Schutz für Pflanzen & Nachbarschaft." },
  { icon: <Droplets className="h-6 w-6 text-brand-primary" />, title: "Wasser im Blick", text: "Versickerungsfreundliche Flächen & saubere Entwässerung – gut für Garten & Grundwasser." },
];

// ——— SVG-Arc Helfer ———
function deg2rad(deg: number) {
  return (deg * Math.PI) / 180;
}
function polar(cx: number, cy: number, r: number, angDeg: number) {
  const a = deg2rad(angDeg);
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
}
function arcPath(
  cx: number,
  cy: number,
  r: number,
  startDeg: number,
  endDeg: number,
  sweepFlag = 1 // 1 = Uhrzeigersinn
) {
  const largeArc = Math.abs(endDeg - startDeg) > 180 ? 1 : 0;
  const s = polar(cx, cy, r, startDeg);
  const e = polar(cx, cy, r, endDeg);
  return `M ${s.x} ${s.y} A ${r} ${r} 0 ${largeArc} ${sweepFlag} ${e.x} ${e.y}`;
}

export default function ProcessCircle({
  steps = defaultSteps,
  size = 520,
  dur = 1.2,
  totalDuration,
  padX = 70,
  padY = 30,
  arcGapDeg = 22,
}: Props) {
  // Card-Positionen (weiter nach außen via padX/padY)
  const sTop: CSSProperties = { left: "50%", top: 0, transform: `translate(-50%, -${padY}px)` };
  const sRight: CSSProperties = { right: 0, top: "50%", transform: `translate(${padX}px, -50%)` };
  const sBottom: CSSProperties = { left: "50%", bottom: 0, transform: `translate(-50%, ${padY}px)` };
  const sLeft: CSSProperties = { left: 0, top: "50%", transform: `translate(-${padX}px, -50%)` };

  // Kreisgeometrie
  const cx = size / 2;
  const cy = size / 2;
  const r = (size / 2) - 32;      // Radius (32px Innenabstand)
  const segDur = totalDuration ? totalDuration / 4 : dur;
  const g = arcGapDeg;

  // vier Bogen-Segmente, je mit Card-Lücke
  const arcs = [
    { start: -90 + g, end: 0 - g }, // oben → rechts
    { start: 0 + g, end: 90 - g }, // rechts → unten
    { start: 90 + g, end: 180 - g }, // unten → links
    { start: 180 + g, end: 270 - g }, // links → oben
  ];

  const n = arcs.length;          // 4
  const T = n * segDur;          // komplette Zykluslänge
  const lead = 1;                // Card soll 1s VOR dem Bogen pulsen

  // Hilfsfunktion: Delay im Bereich [0, T)
  const delayCard = (i: number) => {
    const d = i * segDur - lead;
    return ((d % T) + T) % T;    // echtes Modulo (kein clamp)
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-24">So setzen wir das um</h2>

      <div className="relative mx-auto mt-16" style={{ width: size, height: size }}>
        {/* SVG: Bögen HINTER den Cards */}
        <svg
          className="absolute inset-0 z-0 pointer-events-none"
          width={size}
          height={size}
          aria-hidden
        >
          {arcs.map((a, i) => (
            <motion.path
              key={i}
              d={arcPath(cx, cy, r, a.start, a.end, 1)}
              fill="none"
              stroke="currentColor"
              className="text-brand-primary"
              strokeWidth={3}
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1], opacity: [0, 1, 1, 0] }}
              transition={{
                duration: segDur,
                times: [0, 0.85, 0.95, 1],
                delay: i * segDur,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: (arcs.length - 1) * segDur,
                ease: "linear",
              }}
            />
          ))}
        </svg>

        {/* Cards VOR dem SVG */}
        <div className="absolute w-60 z-10" style={sTop}>
          <motion.div
            className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden will-change-transform"
            animate={{ scale: [1, 1.06, 1], boxShadow: ["0 0 0 rgba(0,0,0,0)", "0 10px 24px rgba(0,0,0,0.12)", "0 0 0 rgba(0,0,0,0)"] }}
            transition={{ duration: segDur, delay: delayCard(0), repeat: Infinity, repeatType: "loop", repeatDelay: T - segDur, times: [0, 0.5, 1], ease: "easeInOut" }}
          >
            <Card {...steps[0]} />
          </motion.div>
        </div>

        <div className="absolute w-60 z-10" style={sRight}>
          <motion.div
            className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden will-change-transform"
            animate={{ scale: [1, 1.06, 1], boxShadow: ["0 0 0 rgba(0,0,0,0)", "0 10px 24px rgba(0,0,0,0.12)", "0 0 0 rgba(0,0,0,0)"] }}
            transition={{ duration: segDur, delay: delayCard(1), repeat: Infinity, repeatType: "loop", repeatDelay: T - segDur, times: [0, 0.5, 1], ease: "easeInOut" }}
          >
            <Card {...steps[1]} />
          </motion.div>
        </div>

        <div className="absolute w-60 z-10" style={sBottom}>
          <motion.div
            className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden will-change-transform"
            animate={{ scale: [1, 1.06, 1], boxShadow: ["0 0 0 rgba(0,0,0,0)", "0 10px 24px rgba(0,0,0,0.12)", "0 0 0 rgba(0,0,0,0)"] }}
            transition={{ duration: segDur, delay: delayCard(2), repeat: Infinity, repeatType: "loop", repeatDelay: T - segDur, times: [0, 0.5, 1], ease: "easeInOut" }}
          >
            <Card {...steps[2]} />
          </motion.div>
        </div>

        <div className="absolute w-60 z-10" style={sLeft}>
          <motion.div
            className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden will-change-transform"
            animate={{ scale: [1, 1.06, 1], boxShadow: ["0 0 0 rgba(0,0,0,0)", "0 10px 24px rgba(0,0,0,0.12)", "0 0 0 rgba(0,0,0,0)"] }}
            transition={{ duration: segDur, delay: delayCard(3), repeat: Infinity, repeatType: "loop", repeatDelay: T - segDur, times: [0, 0.5, 1], ease: "easeInOut" }}
          >
            <Card {...steps[3]} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Card({ icon, title, text }: Step) {
  return (
    <div className="p-5 text-center">
      <div className="flex justify-center">{icon}</div>
      <h3 className="mt-3 font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{text}</p>
    </div>
  );
}