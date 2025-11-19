// src/components/ui/FloatingContactButton.tsx
"use client";

import { useState } from "react";
import { Rocket } from "lucide-react";
import ContactDialog from "./ContactDialog";

export default function FloatingContactButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* nur Mobile */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Projekt starten"
        className="
          fixed right-4 bottom-6 z-[99998]
          inline-flex h-12 w-12 items-center justify-center
          rounded-full bg-brand-primary text-white
          shadow-[0_10px_24px_rgba(0,0,0,0.30)]
          transform-gpu transition-transform duration-150
          hover:scale-[1.05] active:scale-[0.97]
          md:hidden
        "
      >
        <Rocket className="h-5 w-5" />
      </button>

      <ContactDialog open={open} onClose={() => setOpen(false)} />
    </>
  );
}