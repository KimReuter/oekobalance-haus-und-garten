// src/app/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Hero from "@/components/home/Hero";
import FeatureList from "@/components/home/FeatureList";
import GalleryGrid from "@/components/home/GalleryGrid";
import AboutPaul from "@/components/home/AboutPaul";
import FinalCta from "@/app/services/FinalCta";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import WhySection from "@/components/home/WhySection";
import Stats from "@/components/home/Stats";
import OneStopTeaser from "@/components/home/OneStopTeaser";
import ReferencesCarousel from "@/components/home/ReferencesCarousel";
import ServicesPinned from "@/components/home/ServicesPinned";
import WhySticky from "@/components/home/WhySticky";
import SplitWords from "./utils/SplitWords";
import StickyNav from "@/components/layout/StickyNav";

export const metadata: Metadata = {
  title: "Ökobalance Haus & Garten – Nachhaltige Lösungen für Haus & Garten",
  description:
    "Ökologische Garten- und Hausarbeiten: Gala-Bau (z. B. Terrassen), Gartenpflege, Roh- & Innenausbau. Schnell, zuverlässig und nachhaltig – mit Herz fürs Handwerk.",
};

export default function HomePage() {
  return (
    <>
          <StickyNav afterScroll="white" />

    <main className="text-slate-800">
      {/* HERO */}
      <Hero />

      {/* INTRO + FEATURES */}
      <WhySticky />

      {/* <OneStopTeaser /> */}
      <OneStopTeaser />

      { /* Stats */}
      <Stats />
    </main>
    </>
    
  );
}

/** kleine lokale Komponente, damit kein extra Import nötig ist */
function Quote({ quote, name }: { quote: string; name: string }) {
  return (
    <figure className="rounded-2xl border border-brand-secondary/20 bg-white p-5">
      <blockquote className="text-slate-700">“{quote}”</blockquote>
      <figcaption className="mt-3 text-sm font-medium text-slate-900">– {name}</figcaption>
    </figure>
  );
}