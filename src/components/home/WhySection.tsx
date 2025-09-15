"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const features = [
  "Ökologisch & materialbewusst",
  "Schnelle & zuverlässige Umsetzung",
  "Handwerk auf Augenhöhe",
  "Individuelle Lösungen statt 08/15",
];

export default function WhySection() {
  const ref = useRef<HTMLDivElement>(null);

  // gesamter Abschnitt scroll-gebunden
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // -------- LINKS: Headline & Paragraph scroll-gesteuert --------
  // Zeitfenster (Anteile der Section); gern feinjustieren
  const H_IN_START = 0.04, H_IN_END = 0.14;      // Headline rein (von links)
  const P_IN_START = 0.10, P_IN_END = 0.22;      // Paragraph rein (von rechts)
  const OUT_START  = 0.90;                       // ab hier beide wieder ausblenden

  // Headline: x + opacity (einblenden -> halten -> ausblenden)
  const hX = useTransform(
    scrollYProgress,
    [H_IN_START, (H_IN_START + H_IN_END) / 2, OUT_START, 1],
    ["-48px", "0px", "0px", "-48px"]
  );
  const hO = useTransform(
    scrollYProgress,
    [H_IN_START, H_IN_END, OUT_START, 1],
    [0, 1, 1, 0]
  );

  // Paragraph: x + opacity (einblenden -> halten -> ausblenden)
  const pX = useTransform(
    scrollYProgress,
    [P_IN_START, (P_IN_START + P_IN_END) / 2, OUT_START, 1],
    ["48px", "0px", "0px", "48px"]
  );
  const pO = useTransform(
    scrollYProgress,
    [P_IN_START, P_IN_END, OUT_START, 1],
    [0, 1, 1, 0]
  );

  return (
    <section ref={ref} className="relative h-[400vh]">
      <div className="sticky top-0 grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-12 lg:px-20 h-screen items-center">
        {/* -------- LINKER TEXTBLOCK (scroll-gesteuert) -------- */}
        <div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ x: hX, opacity: hO }}
          >
            Warum Ökobalance?
          </motion.h2>

          <motion.p
            className="text-lg text-slate-700 leading-relaxed"
            style={{ x: pX, opacity: pO }}
          >
            Wir verbinden <strong>Garten- und Landschaftsbau</strong>,{" "}
            <strong>Hausbau</strong> und <strong>Innenausbau</strong> mit einem
            klaren Fokus auf <strong>Nachhaltigkeit</strong>. <br />
            Das Ergebnis: langlebige Lösungen mit natürlichen Materialien und
            sauberer Ausführung.
          </motion.p>
        </div>

        {/* -------- RECHTS: Timeline (deine bestehende Logik) -------- */}
        <div className="relative pl-12 py-8">
          <div className="absolute left-15 top-[-24px] bottom-[-24px] w-[2px] bg-brand-primary/40" />
          <ul className="space-y-14">
            {features.map((f, i) => {
              const start = i / features.length;
              const end   = (i + 1) / features.length;
              const textOpacity = useTransform(scrollYProgress, [start, end], [0, 1]);
              const textY       = useTransform(scrollYProgress, [start, end], [30, 0]);
              const scale       = useTransform(scrollYProgress, [start, end], [1, 1.25]);

              return (
                <li key={i} className="relative flex items-center gap-4">
                  <motion.span
                    className="absolute -left-0 h-6 w-6 rounded-full bg-brand-primary"
                    style={{ scale, opacity: 1 }} // Punkt immer deckend, nur puls
                    transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.2, ease: "easeInOut" }}
                  />
                  <motion.p className="ml-10 text-lg text-slate-800" style={{ opacity: textOpacity, y: textY }}>
                    {f}
                  </motion.p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}