"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const features = [
  "Ökologisch & materialbewusst",
  "Schnelle & zuverlässige Umsetzung",
  "Handwerk auf Augenhöhe",
  "Individuelle Lösungen statt 08/15",
];



export default function WhySection() {

    const [active, setActive] = useState(0);                           
  const listRef = useRef<HTMLUListElement>(null);                   
  const inView = useInView(listRef, { amount: 0.3 }); 

  useEffect(() => {                                                  
    if (!inView) return;                                            
    const PULSE_MS = 1600;                                          
    const id = setInterval(() => {
      setActive((i) => (i + 1) % features.length);
    }, PULSE_MS);
    return () => clearInterval(id);
  }, [inView]); 

  return (
    <section className="min-h-[100svh] grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-12 lg:px-20 items-center">
      {/* Text-Block */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Warum Ökobalance?</h2>
        <p className="text-lg text-slate-700 leading-relaxed">
          Ich verbinde <strong>Garten- und Landschaftsbau</strong>,{" "}
          <strong>Hausbau</strong> und <strong>Innenausbau</strong> mit einem klaren Fokus auf{" "}
          <strong>Nachhaltigkeit</strong>. <br />
          Das Ergebnis: langlebige Lösungen mit natürlichen Materialien und saubere Ausführung.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative pl-12 py-8">
        {/* Vertikale Linie */}
        <div className="absolute left-15 top-[-24px] bottom-[-24px] w-[2px] bg-brand-primary/40"></div>

        <motion.ul
        ref={listRef}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
          className="space-y-14"
        >
          {features.map((f, i) => (
            <motion.li
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: ["easeOut"] } },
              }}
              className="relative flex items-center gap-4"
            >

              <motion.span 
              className="absolute -left-0 h-6 w-6 rounded-full bg-brand-primary"
              animate={
                active === i
                  ? { scale: [1, 1.25, 1] }  
                  : { scale: 1 }                       
              }
              transition={
                active === i
                  ? { duration: 1.2, ease: ["easeInOut"] }          
                  : { duration: 0.2 }                             
              }
              />
              <p className="ml-10 text-lg text-slate-800">{f}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}