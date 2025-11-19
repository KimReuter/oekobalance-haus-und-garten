"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

const features = [
  "Ökologisch & materialbewusst",
  "Schnelle & zuverlässige Umsetzung",
  "Handwerk auf Augenhöhe",
  "Individuelle Lösungen statt 08/15",
];

type FeatureItemProps = {
  label: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
};

function FeatureItem({ label, index, total, progress }: FeatureItemProps) {
  const start = index / total;
  const end = (index + 1) / total;

  const textOpacity = useTransform(progress, [start, end], [0, 1]);
  const textY = useTransform(progress, [start, end], [30, 0]);
  const dotScale = useTransform(progress, [start, end], [1, 1.25]);

  return (
    <li className="relative flex items-start gap-4">
      {/* Punkt */}
      <motion.span
        className="mt-1 h-4 w-4 md:h-5 md:w-5 rounded-full bg-brand-primary"
        style={{ scale: dotScale }}
      />

      {/* Text */}
      <motion.p
        className="text-base md:text-lg text-slate-800 leading-snug md:leading-relaxed"
        style={{ opacity: textOpacity, y: textY }}
      >
        {label}
      </motion.p>
    </li>
  );
}

export default function WhySection() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Headline / Text Animation
  const H_IN_START = 0.04, H_IN_END = 0.14;
  const P_IN_START = 0.1, P_IN_END = 0.22;
  const OUT_START = 0.9;

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
    <section ref={ref} className="relative h-[320vh]">
      <div className="sticky top-0 h-screen grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-12 lg:px-20 items-center">
        {/* links: Text */}
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
            klaren Fokus auf <strong>Nachhaltigkeit</strong>. Das Ergebnis:
            langlebige Lösungen mit natürlichen Materialien und sauberer
            Ausführung.
          </motion.p>
        </div>

        {/* rechts: Timeline */}
        <div className="relative pl-8 md:pl-12 py-8">
          <div className="pointer-events-none absolute left-3 md:left-4 top-0 bottom-0 w-px bg-brand-primary/40" />

          <ul className="space-y-8 md:space-y-14">
            {features.map((label, index) => (
              <FeatureItem
                key={label}
                label={label}
                index={index}
                total={features.length}
                progress={scrollYProgress}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}