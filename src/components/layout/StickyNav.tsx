// src/components/layout/StickyNav.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import ContactDialog from "../ui/ContactDialog";

type Props = {
  afterScroll?: "white" | "brown";
  threshold?: number;
  heroSelector?: string;
};

export default function StickyNav({
  afterScroll = "brown",
  threshold = 64,
  heroSelector = "[data-hero], #hero, #page-hero",
}: Props) {
  const pathname = usePathname();
  const [hasHero, setHasHero] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Hero erkennen & beim Routenwechsel Mobile-Menü schließen
  useEffect(() => {
    const el = document.querySelector(heroSelector);
    const pageHasHero = !!el;
    setHasHero(pageHasHero);

    // Seiten ohne Hero: direkt als "scrolled" starten
    setScrolled(!pageHasHero);
    setMobileOpen(false);
  }, [pathname, heroSelector]);

  // Scroll-Logik
  useEffect(() => {
    if (!hasHero) return;

    const heroEl = document.querySelector(heroSelector) as HTMLElement | null;
    if (!heroEl) return;

    // 👇 NEU: Home erzwingen wir "start" (scrollY>0 reicht)
    const triggerMode =
      pathname === "/"
        ? "start"
        : heroEl.getAttribute("data-nav-trigger") || "edge";

    const w =
      typeof window !== "undefined"
        ? (window as Window & typeof globalThis)
        : undefined;

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
        {
          root: null,
          rootMargin: `-${threshold}px 0px 0px 0px`,
          threshold: 0,
        }
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
  }, [hasHero, heroSelector, threshold, pathname]);
  //                              👆 pathname hinzufügen

  const filledBg =
    afterScroll === "white" ? "bg-white" : "bg-brand-primary-light";

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/company", label: "Unternehmen" },
    { href: "/services", label: "Leistungen" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/sustainability", label: "Nachhaltigkeit" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Kontakt" },
  ];

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 w-full z-[99999] transition-colors duration-200",
          mobileOpen
            ? "bg-brand-primary-light"
            : pathname === "/"
              ? scrolled
                ? "bg-brand-primary-light border-b border-black/5 shadow-sm"
                : "bg-transparent"
              : scrolled
                ? `${filledBg} border-b border-black/5 shadow-sm`
                : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
          <Link
            href="/"
            className={clsx(
              "text-lg font-extrabold tracking-tight",
              "text-white" // Logo immer weiß, passt zu hellbraun & Hero
            )}
          >
            <span className="md:hidden">Ökobalance</span>
            <span className="hidden md:inline">{siteConfig.name}</span>
          </Link>

          {/* Desktop-Navigation + CTA */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-6">
              {navItems.map((item) => {
                const active = isActive(item.href);
                const baseColor = "text-white";

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={clsx(
                      "relative text-sm font-medium no-underline transform-gpu subpixel-antialiased",
                      "transition-transform duration-150 ease-out",
                      active ? "text-brand-primary" : baseColor,
                      active
                        ? "hover:scale-100 active:scale-100"
                        : "hover:text-white hover:scale-[1.04] active:scale-[0.98]"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <button
              type="button"
              onClick={() => setContactOpen(true)}
              className={clsx(
                "inline-flex items-center justify-center rounded-xl px-6 py-3",
                "text-base font-semibold tracking-tight leading-[1] antialiased no-underline",
                "transform-gpu will-change-transform origin-center transition-transform duration-150 ease-out hover:scale-[1.03] active:scale-[0.99]",
                "bg-brand-primary text-white",
                "border border-transparent shadow-none"
              )}
            >
              Projekt starten 🚀
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className={clsx(
              "inline-flex items-center justify-center md:hidden",
              "rounded-lg p-2 z-[100000]",
              "text-white"
            )}
            aria-label={mobileOpen ? "Navigation schließen" : "Navigation öffnen"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile-Dropdown – immer hellbraun */}
        {mobileOpen && (
          <div className="md:hidden border-t border-black/5 bg-brand-primary-light">
            <nav className="mx-auto max-w-6xl px-4 py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-base font-medium no-underline text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <ContactDialog open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}