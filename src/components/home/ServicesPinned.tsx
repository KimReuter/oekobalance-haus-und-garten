// components/sections/ServicesPinned.tsx
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const GROUPS = [
  {
    title: "Außenanlagen",
    items: [
      { t: "Terrassen (Holz/Stein)", img: "/svc-terrasse.jpg" },
      { t: "Wege & Pflaster", img: "/svc-wege.jpg" },
      { t: "Hochbeete / Gabionen / Mauern", img: "/svc-mauern.jpg" },
      { t: "Baggerarbeiten & Erdarbeiten", img: "/svc-bagger.jpg" },
    ],
  },
  {
    title: "Holz & Bau",
    items: [
      { t: "Gartenhäuser / Anbauten", img: "/svc-gartenhaus.jpg" },
      { t: "Carports / Pergolen", img: "/svc-pergola.jpg" },
      { t: "Dach / Spenglerarbeiten*", img: "/svc-dach.jpg" }, // *optional Hinweis zum Schein
    ],
  },
  {
    title: "Innenausbau",
    items: [
      { t: "Dämmung & Trockenbau", img: "/svc-trockenbau.jpg" },
      { t: "Boden / Holzarbeiten", img: "/svc-boden.jpg" },
      { t: "Raumlösungen nach Maß", img: "/svc-raum.jpg" },
    ],
  },
];

export default function ServicesPinned() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  return (
    <section ref={ref} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-8">
        <div>
          <p className="text-sm uppercase tracking-wider text-brand-primary">Leistungen</p>
          <h3 className="mt-2 text-4xl md:text-5xl font-extrabold">Draußen & Drinnen – aus einer Hand</h3>
          <p className="mt-4 text-lg text-slate-700">Von der Grube bis zur fertigen Terrasse. Vom Rohbau bis zum Raumfinish.</p>
        </div>
        <div className="relative h-[70vh] rounded-3xl overflow-hidden">
          {GROUPS.map((g, gi) => {
            const start = gi / GROUPS.length;
            const end = (gi + 1) / GROUPS.length;
            const visibility = useTransform(scrollYProgress, [start, end], [0, 1]);
            return (
              <motion.div key={gi} className="absolute inset-0 p-6 grid grid-cols-2 gap-4" style={{ opacity: visibility }}>
                {g.items.map((it, ii) => (
                  <div key={ii} className="relative rounded-2xl overflow-hidden group">
                    <img src={it.img} alt="" className="h-full w-full object-cover transition scale-100 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10" />
                    <div className="absolute bottom-4 left-4 right-4 text-white font-medium">{it.t}</div>
                  </div>
                ))}
                <div className="absolute top-4 left-4 text-sm bg-white/70 backdrop-blur px-3 py-1 rounded-full">
                  {g.title}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}