// src/components/ui/CountUp.tsx
"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  from?: number;     // Startwert
  to: number;        // Zielwert
  duration?: number; // Dauer in ms (z.B. 1500)
  inView?: boolean;  // Animation nur starten, wenn sichtbar
  decimals?: number; // Dezimalstellen
};

export default function CountUp({
  from = 0,
  to,
  duration = 1500,
  inView = true,
  decimals = 0,
}: Props) {
  const [value, setValue] = useState(from);
  const raf = useRef<number | null>(null);
  const start = useRef<number | null>(null);

  useEffect(() => {
    if (!inView) return; // nicht starten, wenn noch nicht sichtbar
    // prefers-reduced-motion respektieren:
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced || duration === 0) {
      setValue(to);
      return;
    }

    const step = (ts: number) => {
      if (start.current === null) start.current = ts;
      const progress = Math.min((ts - start.current) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = from + (to - from) * eased;
      setValue(current);
      if (progress < 1) {
        raf.current = requestAnimationFrame(step);
      }
    };

    raf.current = requestAnimationFrame(step);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      start.current = null;
    };
  }, [from, to, duration, inView]);

  return <span>{value.toFixed(decimals)}</span>;
}