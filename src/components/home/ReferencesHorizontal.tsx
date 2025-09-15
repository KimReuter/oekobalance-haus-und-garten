// components/sections/ReferencesHorizontal.tsx
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const PROJECTS = [
  { img: "/ref-1.jpg", t: "Thermoschiefer-Terrasse" },
  { img: "/ref-2.jpg", t: "Kopfsteinwege & Hangabfang" },
  { img: "/ref-3.jpg", t: "Gartenhaus-Ausbau (100m²)" },
  { img: "/ref-4.jpg", t: "Gabionen + Hochbeete" },
];

export default function ReferencesHorizontal() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(PROJECTS.length - 1) * 100}%`]);

  return (
    <section ref={ref} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div className="flex h-full" style={{ x }}>
          {PROJECTS.map((p, i) => (
            <div key={i} className="min-w-full grid place-items-center p-8">
              <div className="max-w-4xl w-full rounded-3xl overflow-hidden shadow-xl relative">
                <img src={p.img} alt="" className="h-[60vh] w-full object-cover" />
                <div className="absolute bottom-4 left-4 text-white text-lg font-semibold drop-shadow">{p.t}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}