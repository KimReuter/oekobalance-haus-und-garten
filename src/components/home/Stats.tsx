// src/components/home/Stats.tsx
"use client";

import { useRef } from "react";
import CountUp from "@/components/ui/CountUp";
import { useInView, motion } from "framer-motion"; // npm i framer-motion
import { Hammer, Users, CheckCircle, Ruler } from "lucide-react"; // npm i lucide-react

const stats = [
  {
    icon: Hammer,
    label: "Jahre Erfahrung",
    to: 12,         // <- anpassen
    suffix: "",     // z.B. "+" oder "k"
  },
  {
    icon: Users,
    label: "Zufriedene Kund:innen",
    to: 180,        // <- anpassen
    suffix: "+",
  },
  {
    icon: CheckCircle,
    label: "Abgeschlossene Projekte",
    to: 240,        // <- anpassen
    suffix: "+",
  },
  {
    icon: Ruler,
    label: "laufende Projekte",
    to: 6,          // <- anpassen
    suffix: "",
  },
];

export default function Stats() {
  const ref = useRef<HTMLUListElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section className="bg-brand-primary-light text-white">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold">
          Warum Kund:innen uns vertrauen
        </h2>

        <motion.ul
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map(({ icon: Icon, label, to, suffix }) => (
            <li key={label} className="text-center">
              <div className="flex justify-center">
                <Icon className="h-14 w-14 text-brand-primary" aria-hidden="true" />
              </div>

              <div className="mt-6 text-6xl md:text-7xl font-extrabold leading-none tabular-nums">
                <CountUp to={to} duration={1600} inView={inView} />{suffix}
              </div>

              <p className="mt-3 text-sm uppercase tracking-wider text-white">
                {label}
              </p>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}