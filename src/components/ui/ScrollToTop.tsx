// src/components/ui/ScrollToTop.tsx
"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import clsx from "clsx";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Nach oben scrollen"
      className={clsx(
        "fixed bottom-6 right-6 z-[9999]",
        "hidden md:inline-flex",   // 👈 WICHTIG: nur auf Desktop sichtbar
        "items-center justify-center rounded-full",
        "bg-brand-primary/80 hover:bg-brand-primary text-white",
        "shadow-lg transition-all duration-200",
        "w-12 h-12",
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      )}
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
}