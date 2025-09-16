// src/components/layout/StickyNav.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { siteConfig } from "@/lib/siteConfig";
import ContactDialog from "../ui/ContactDialog";

type Props = {
  /** Farbe nach Scroll */
  afterScroll?: "white" | "brown";
  /** Schwelle ab wann "scrolled" (px) */
  threshold?: number;
  /** CSS-Selector, der einen Hero identifiziert */
  heroSelector?: string;
};

export default function StickyNav({
  afterScroll = "brown",                    // <- wie gewünscht: brauner Header nach Scroll
  threshold = 64,
  heroSelector = "[data-hero], #hero, #page-hero",
}: Props) {
  const pathname = usePathname();
  const [hasHero, setHasHero] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  // Re-evaluate on route change
  useEffect(() => {
    const el = document.querySelector(heroSelector);
    const pageHasHero = !!el;
    setHasHero(pageHasHero);
    setScrolled(!pageHasHero); // ohne Hero gleich "scrolled" starten (Impressum/Datenschutz)
  }, [pathname, heroSelector]);

  // Scroll / Intersection nur, wenn Hero vorhanden
  useEffect(() => {
    if (!hasHero) return;

    const heroEl = document.querySelector(heroSelector) as HTMLElement | null;
    if (!heroEl) return;

    const triggerMode = heroEl.getAttribute("data-nav-trigger") || "edge";

    // immer lokales Alias mit DOM-Typ anlegen
    const w = typeof window !== "undefined" ? (window as Window & typeof globalThis) : undefined;

    if (triggerMode === "start") {
      const onScroll = () => setScrolled((w?.scrollY ?? 0) > 0);
      onScroll();
      if (w) {
        w.addEventListener("scroll", onScroll, { passive: true });
        return () => w.removeEventListener("scroll", onScroll);
      }
      return;
    }

    if ("IntersectionObserver" in (globalThis as any) && heroEl) {
      const obs = new IntersectionObserver(
        ([entry]) => setScrolled(!entry.isIntersecting),
        { root: null, rootMargin: `-${threshold}px 0px 0px 0px`, threshold: 0 }
      );
      obs.observe(heroEl);
      return () => obs.disconnect();
    }

    const onScroll = () => setScrolled((w?.scrollY ?? 0) > threshold);
    onScroll();
    if (w) {
      w.addEventListener("scroll", onScroll, { passive: true });
      return () => w.removeEventListener("scroll", onScroll);
    }
  }, [hasHero, heroSelector, threshold]);

  const filledBg =
    afterScroll === "white" ? "bg-white" : "bg-brand-primary-light";


  const isActive = (href: string) => {
    // Startseite exakt, sonst Prefix-Match (auch für Unterseiten wie /services/xyz)
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 w-full z-[99999] transition-colors duration-200",
          scrolled ? `${filledBg} border-b border-black/5 shadow-sm` : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className={clsx(
              "text-lg font-extrabold tracking-tight",
              scrolled
                ? afterScroll === "brown" ? "text-white" : "text-brand-primary"
                : "text-white"
            )}
          >
            {siteConfig.name}
          </Link>

          {/* Links */}
          <nav className="hidden md:flex items-center gap-6">
            {[
              { href: "/", label: "Home" },
              { href: "/company", label: "Unternehmen" },
              { href: "/services", label: "Leistungen" },
              { href: "/portfolio", label: "Portfolio" },
              { href: "/sustainability", label: "Nachhaltigkeit" },
              { href: "/blog", label: "Blog" },
              { href: "/contact", label: "Kontakt" },
            ].map((item) => {
              const active = isActive(item.href);
              const baseColor = !scrolled
                ? "text-white/90"
                : afterScroll === "brown"
                  ? "text-white"
                  : "text-neutral-800";

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={clsx(
                    "relative text-sm font-medium no-underline transform-gpu",
                    "transition-[color,transform] duration-150 ease-out",

                    // entweder aktiv ODER Basisfarbe — niemals beides
                    active ? "text-brand-primary" : baseColor,

                    // Hover-Logik
                    active
                      ? "hover:scale-100 active:scale-100" // aktiver Link: keine Bewegung, Farbe bleibt
                      : "hover:text-brand-primary hover:scale-[1.04] active:scale-[0.98]"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA – wieder da, stabil, ohne Wobble */}
          <button
            type="button"
            onClick={() => setContactOpen(true)}
            className={clsx(
              "inline-flex items-center justify-center rounded-xl px-6 py-3",
              "text-base font-semibold tracking-tight leading-[1] antialiased no-underline",
              "transform-gpu will-change-transform origin-center transition-transform duration-150 ease-out hover:scale-[1.03] active:scale-[0.99]",
              !scrolled
                ? "bg-brand-primary text-white"
                : afterScroll === "brown"
                  ? "bg-white text-brand-primary"
                  : "bg-brand-primary text-white",
              "border border-transparent shadow-none"
            )}
          >
            Projekt starten 🚀
          </button>
        </div>
      </header>

      {/* Dialog wirklich rendern */}
      <ContactDialog open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}