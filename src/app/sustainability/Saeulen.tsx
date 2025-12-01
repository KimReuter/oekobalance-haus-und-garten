"use client";

import { motion, cubicBezier, type Variants } from "framer-motion";
import { Leaf, Recycle, Truck } from "lucide-react";

const easeOutExpo = cubicBezier(0.22, 1, 0.36, 1);

const container: Variants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
};

const item: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: easeOutExpo },
    },
};

export default function Saeulen() {
    const data = [
        {
            icon: <Leaf className="h-6 w-6" />,
            title: "Materialwahl mit Sinn",
            text:
                "Bevorzugt regionale, zertifizierte oder recycelte Stoffe; langlebig statt billig.",
        },
        {
            icon: <Recycle className="h-6 w-6" />,
            title: "Saubere Entsorgung",
            text:
                "Getrennte Abfälle, fachgerechte Entsorgung und Wiederverwendung wo möglich.",
        },
        {
            icon: <Truck className="h-6 w-6" />,
            title: "Kurze Wege",
            text:
                "Regionale Partner, gebündelte Fahrten, effiziente Logistik – spart CO₂ und Zeit.",
        },
    ];

    return (
        <section className="mx-auto max-w-6xl px-6 py-16 pb-8 md:py-20">
            <motion.h2
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: easeOutExpo }}
                viewport={{ once: true, amount: 0.5 }}
                className="text-2xl md:text-3xl font-extrabold text-center"
            >
                Unsere 3 Säulen
            </motion.h2>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {data.map((c) => (
                    <motion.button
                        key={c.title}
                        type="button"
                        variants={item}
                        whileHover={{ y: -4, boxShadow: "0 10px 24px rgba(0,0,0,0.10)" }}
                        whileTap={{ scale: 0.99 }}
                        className="
    group w-full text-left
    rounded-2xl border border-slate-200 bg-white p-6
    hover:border-slate-300
    focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/40
  "
                    >
                        <div className="mx-auto mb-3 grid h-12 w-12 place-items-center
                  rounded-full bg-brand-primary/10 text-brand-primary
                  ring-1 ring-brand-primary/20">
                            {c.icon}
                        </div>

                        <h3 className="text-center font-semibold">{c.title}</h3>
                        <p className="mt-2 text-center text-sm text-slate-600">{c.text}</p>
                    </motion.button>
                ))}
            </motion.div>
        </section>
    );
}