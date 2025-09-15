// src/components/home/OneStopTeaser.tsx
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionProps } from "framer-motion";
import { Wallet, Handshake, UserCheck, Puzzle } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export default function OneStopTeaser() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Zeitfenster
  const E_IN: number[] = [0.0, 0.3];
  const H_IN: number[] = [0.3, 0.6];
  const S_IN: number[] = [0.6, 0.9];

  const eX = useTransform(scrollYProgress, E_IN, ["-20vw", "0vw"]);
  const eO = useTransform(scrollYProgress, E_IN, [0, 1]);

  const hX = useTransform(scrollYProgress, H_IN, ["20vw", "0vw"]);
  const hO = useTransform(scrollYProgress, H_IN, [0, 1]);

  const sX = useTransform(scrollYProgress, S_IN, ["-20vw", "0vw"]);
  const sO = useTransform(scrollYProgress, S_IN, [0, 1]);

  // Einblendung der Cards & CTA (erscheinen nach dem Text)
  const cardsO = useTransform(scrollYProgress, [0.79, 0.96], [0, 1]);
  const cardsY = useTransform(scrollYProgress, [0.79, 0.96], [28, 0]);

  // Stagger-Helper für Reveal-Animationen
  const item = (delay = 0): MotionProps => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut", delay },
    viewport: { once: true, amount: 0.4 },
  });

  return (
    <section ref={ref} className="relative bg-gradient-to-b from-white to-brand-light-soft/40">
      {/* Scrollbereich für Animation */}
      <div className="relative h-[300vh] md:h-[240vh]">
        {/* Sticky Container */}
        <div className="sticky top-0 h-screen flex items-center">
          <div className="mx-auto max-w-6xl w-full px-4 pt-12 md:pt-16 pb-12 md:pb-16">
            {/* Text */}
            <div className="mx-auto max-w-4xl text-center space-y-8 md:space-y-10">
              <motion.p className="text-sm tracking-wider uppercase text-brand-primary" style={{ x: eX, opacity: eO }}>
                Alles aus einer Hand
              </motion.p>

              <motion.h2 className="text-3xl md:text-4xl font-extrabold text-slate-900" style={{ x: hX, opacity: hO }}>
                Handwerk ohne Umwege –<br />ein Ansprechpartner, klare Abläufe
              </motion.h2>

              <motion.p className="text-lg text-slate-700 leading-relaxed" style={{ x: sX, opacity: sO }}>
                Wir planen und setzen Außen<span className="whitespace-nowrap">-</span> und Innenarbeiten zusammenhängend um.
                <br />
                Das spart Zeit, Nerven und Geld – und sorgt dafür, dass am Ende alles wirklich zusammenpasst.
              </motion.p>
            </div>

            {/* Benefits + CTA JETZT IM STICKY-CONTAINER */}

            <motion.div className="mt-16 md:mt-30" style={{ opacity: cardsO, y: cardsY }}>
              <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    // Mitte zuerst
                    title: "Fixpreise möglich",
                    text: (
                      <>
                        Transparent, realistisch –<br />
                        ohne versteckte Aufschläge.
                      </>
                    ),
                    icon: <Wallet className="h-10 w-10 text-brand-primary" />,
                    side: "right",   // kommt von rechts rein
                    order: 1,        // 1. erscheinen
                  },
                  {
                    // dann links
                    title: "Ein Ansprechpartner",
                    text: (
                      <>Kein Koordinieren von 3–5 Gewerken.<br />
                        Ein Ablauf, eine Verantwortung.
                      </>
                    ),
                    icon: <UserCheck className="h-10 w-10 text-brand-primary" />,
                    side: "left",    // kommt von links rein
                    order: 2,        // 2. erscheinen
                  },
                  {
                    // dann rechts
                    title: "Individuelle Lösungen",
                    text: "Von der Baggergrube bis zum Dachausbau: Wir finden Wege.",
                    icon: <Puzzle className="h-10 w-10 text-brand-primary" />,
                    side: "right",   // wieder von rechts
                    order: 3,        // 3. erscheinen
                  },
                ].map((item) => {
                  // Zeitfenster je nach order strecken (langsamer = längere Spanne)
                  const span: Record<number, [number, number]> = {
                    1: [0.82, 0.88], // Mitte
                    2: [0.88, 0.94], // links
                    3: [0.94, 1.00], // rechts
                  };
                  const [start, end] = span[item.order];

                  const o = useTransform(scrollYProgress, [start, end], [0, 1]);
                  const y = useTransform(scrollYProgress, [start, end], [16, 0]);
                  const x0 = item.side === "left" ? "-48px" : "48px";
                  const x = useTransform(scrollYProgress, [start, end], [x0, "0px"]);

                  return (
                    <motion.li
                      key={item.title}
                      className="group rounded-2xl border border-slate-200 bg-white p-6
                     transition will-change-transform hover:shadow-xl hover:scale-[1.02]"
                      style={{ opacity: o, y, x }}
                    >
                      <div className="flex justify-center">{item.icon}</div>
                      <h3 className="mt-4 text-center text-lg font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-center text-slate-700">{item.text}</p>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Buttons – identisch zu OneStopTeaser */}
              <motion.div
                {...item(0.6)}
                className="mt-10 flex justify-center gap-6 flex-wrap"
              >
                <motion.a
                  href="/contact"
                  className="inline-flex w-56 items-center justify-center rounded-xl px-6 py-3
               font-semibold tracking-tight no-underline 
               bg-brand-primary text-white shadow-[0_4px_12px_rgba(0,0,0,0.25)] 
               transition-colors"
                  whileHover={{ scale: 1.03, boxShadow: "0 8px 24px rgba(0,0,0,0.35)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  Projekt anfragen
                </motion.a>

                <motion.a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  className="inline-flex w-56 items-center justify-center rounded-xl px-6 py-3
               font-semibold tracking-tight no-underline 
               border border-brand-primary text-brand-primary bg-white
               shadow-[0_4px_12px_rgba(0,0,0,0.15)] 
               transition-colors"
                  whileHover={{ scale: 1.03, boxShadow: "0 8px 24px rgba(0,0,0,0.25)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}