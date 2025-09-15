// src/utils/SplitWords.tsx
"use client";

import { motion } from "framer-motion";
import type { Variants, TargetAndTransition } from "framer-motion";

export default function SplitWords({ text, className = "" }: { text: string; className?: string }) {
  const words = text.split(" ");

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 14 },
    show: (i: number): TargetAndTransition => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.02 * i,
        duration: 0.5,
        // wichtig: als konstantes Tupel typisieren
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  return (
    <h2 className={`flex flex-wrap gap-x-2 ${className}`}>
      {words.map((w, i) => (
        <motion.span
          key={`${w}-${i}`}
          custom={i}
          variants={wordVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
        >
          {w}
        </motion.span>
      ))}
    </h2>
  );
}