"use client";
import { motion, type Easing } from "framer-motion";
import { Timer, Ruler, CheckCircle2, Hammer } from "lucide-react";

const easeOutExpo: Easing = [0.22, 1, 0.36, 1];

// gewünschte Abspiel-Reihenfolge: 2. von links, 3. von rechts, 1. von links, 4. von rechts
const order: number[] = [1, 2, 0, 3]; // Indizes 0..3

export default function FlowProcess() {
  const steps = [
    { icon: <Timer className="h-6 w-6" />, title: "1. Kontakt", text: "Kurz schildern, was ansteht – wir melden uns fix." },
    { icon: <Ruler className="h-6 w-6" />, title: "2. Vor-Ort-Termin", text: "Wir schauen uns bei Bedarf alles an und beraten ehrlich." },
    { icon: <CheckCircle2 className="h-6 w-6" />, title: "3. Angebot", text: "Transparent & fair – auf Wunsch Festpreis." },
    { icon: <Hammer className="h-6 w-6" />, title: "4. Umsetzung", text: "Sauber, pünktlich, mit Blick fürs Detail." },
  ];

  const baseDelay = 0.12; // Startversatz
  const stepDelay = 0.35; // Abstand zwischen Items (langsamer)

  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-14">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-xl md:text-2xl font-extrabold"
        >
          So läuft’s mit uns
        </motion.h2>

        <ol className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const order: number[] = [1, 2, 0, 3];            // gewünschte Reihenfolge
            const slot = order.indexOf(i);
            const baseDelay = 0.12;
            const stepDelay = 0.35;
            const delay = baseDelay + slot * stepDelay;
            const dir = i <= 1 ? -28 : 28;

            return (
              <motion.li
                key={step.title}
                // nur Scroll-in hier:
                initial={{ opacity: 0, y: 14, x: dir }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, ease: easeOutExpo, delay }}
                className="rounded-2xl"
              >
                {/* Hover kommt auf eine eigene Ebene mit eigener kurzer Transition */}
                <motion.div
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ duration: 0.18, ease: easeOutExpo, delay: 0 }} // <— schnell, kein Delay
                  className="will-change-transform rounded-2xl border border-slate-200 bg-white p-5 text-center
                   transition-[box-shadow] duration-200 hover:shadow-[0_10px_24px_rgba(0,0,0,0.08)]"
                >
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: easeOutExpo, delay: delay + 0.05 }}
                    className="mx-auto mb-2 grid h-12 w-12 place-items-center rounded-full
                     bg-brand-primary/10 text-brand-primary ring-1 ring-brand-primary/15"
                  >
                    {step.icon}
                  </motion.div>

                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{step.text}</p>
                </motion.div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}