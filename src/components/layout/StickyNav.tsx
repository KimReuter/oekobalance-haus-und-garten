// src/components/layout/StickyNav.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/siteConfig";
import ButtonLink from "@/components/ui/ButtonLink";
import clsx from "clsx";

type Props = { afterScroll?: "white" | "brown"; threshold?: number };

export default function StickyNav({ afterScroll = "white", threshold = 24 }: Props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop || 0;
      setScrolled(y > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  const filledBg =
    afterScroll === "white"
      ? "bg-white/95 supports-[backdrop-filter]:bg-white/75 supports-[backdrop-filter]:backdrop-blur"
      : "bg-brand-primary-light/95 supports-[backdrop-filter]:bg-brand-primary-light/80 supports-[backdrop-filter]:backdrop-blur";

  return (
    <header
  className={clsx(
    // fester Overlay-Header ganz oben, volle Breite
    "fixed top-0 left-0 right-0 w-full z-[99999] transition-all duration-300 relative",

    // oben: transparent + zarter Verlauf
    !scrolled &&
      'bg-transparent ' +
      'before:content-[""] before:absolute before:inset-0 before:h-16 ' +
      'before:bg-gradient-to-b before:from-black/35 before:to-transparent ' +
      'before:pointer-events-none before:z-0',

    // nach Scroll: gefüllter Hintergrund
    scrolled && `${filledBg} border-b border-black/5 shadow-sm`
  )}
>
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between relative z-10">
        <Link
          href="/"
          className={clsx(
            "text-lg font-extrabold tracking-tight",
            scrolled ? "text-brand-primary" : "text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]"
          )}
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {[
            { href: "/", label: "Home" },
            { href: "/company", label: "Unternehmen" },
            { href: "/services", label: "Leistungen" },
            { href: "/portfolio", label: "Portfolio" },
            { href: "/jobs", label: "Jobs" },
            { href: "/contact", label: "Kontakt" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "text-sm font-medium transition-colors",
                scrolled
                  ? "text-neutral-800 hover:text-brand-primary"
                  : "text-white/90 hover:text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <ButtonLink
          href="/contact"
          className={clsx(
            "rounded-full px-4 h-9 transition-all",
            scrolled
              ? "bg-brand-primary text-white hover:opacity-90"
              : "bg-white/10 text-white hover:bg-white/20 border border-white/30"
          )}
        >
          Los geht’s 🔨
        </ButtonLink>
      </div>
    </header>
  );
}