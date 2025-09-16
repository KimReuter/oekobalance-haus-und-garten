// src/components/ui/ScrollToTop.tsx
"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // npm i lucide-react
import clsx from "clsx";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 200); // ab 200px sichtbar
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollTop}
      aria-label="Nach oben scrollen"
      className={clsx(
        "fixed bottom-6 right-6 z-[9999]",
        "inline-flex items-center justify-center rounded-full",
        "bg-brand-primary/80 hover:bg-brand-primary text-white",
        "shadow-lg transition-all duration-200",
        "w-12 h-12",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      )}
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
}