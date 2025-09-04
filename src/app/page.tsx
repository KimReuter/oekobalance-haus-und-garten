// src/app/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Hero from "@/components/home/Hero";
import FeatureList from "@/components/home/FeatureList";
import ServiceCard from "@/components/home/ServiceCard";
import GalleryGrid from "@/components/home/GalleryGrid";
import AboutTeaser from "@/components/home/AboutTeaser";
import FinalCta from "@/components/home/FinalCta";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import WhySection from "@/components/home/WhySection";

export const metadata: Metadata = {
  title: "Ökobalance Haus & Garten – Nachhaltige Lösungen für Haus & Garten",
  description:
    "Ökologische Garten- und Hausarbeiten: Gala-Bau (z. B. Terrassen), Gartenpflege, Roh- & Innenausbau. Schnell, zuverlässig und nachhaltig – mit Herz fürs Handwerk.",
};

export default function HomePage() {
  return (
    <main className="text-slate-800">
      {/* HERO */}
      <Hero />

      {/* INTRO + FEATURES */}
      <WhySection />

      {/* SERVICES TEASER */}
      <Section bg="bg-brand-light">
        <Container>
          <SectionHeading title="Leistungen" linkText="Alle Leistungen" linkHref="/services" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              title="Gala-Bau & Terrassen"
              desc="Naturstein, Holz & Pflaster – dauerhaft, ästhetisch, fachgerecht."
              img="/services-terrasse.jpg"
              alt="Terrassenbau aus Holz und Naturstein"
              href="/services"
            />
            <ServiceCard
              title="Gartenpflege"
              desc="Pflege, Schnitt & ökologische Aufwertung – saisonal & nachhaltig."
              img="/services-gartenpflege.jpg"
              alt="Gepflegter Garten mit Hecken und Beeten"
              href="/services"
            />
            <ServiceCard
              title="Roh- & Innenausbau"
              desc="Vom Mithelfen bis zur kompletten Umsetzung – präzise & sauber."
              img="/services-innenausbau.jpg"
              alt="Innenausbau mit Holz und Trockenbau"
              href="/services"
            />
          </div>
        </Container>
      </Section>

      {/* GALLERY TEASER */}
      <Section>
        <Container>
          <SectionHeading title="Projekte & Galerie" linkText="Zur Galerie" linkHref="/gallery" />
          <GalleryGrid />
        </Container>
      </Section>

      {/* ABOUT TEASER */}
      <Section bg="bg-brand-primary-light">
        <Container>
          <AboutTeaser />
        </Container>
      </Section>

      {/* TESTIMONIALS */}
      <Section bg="bg-brand-light-soft">
        <Container>
          <SectionHeading title="Das sagen Kund:innen" linkText="Weitere Referenzen" linkHref="/references" />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Quote
              quote="Schnell, sauber, zuverlässig – und obendrein nachhaltig gedacht."
              name="M. Schneider"
            />
            <Quote
              quote="Unsere Holzterrasse ist ein Traum – super umgesetzt."
              name="F. Weber"
            />
            <Quote
              quote="Endlich jemand, der mitdenkt und nicht nur abarbeitet."
              name="A. Richter"
            />
          </div>
        </Container>
      </Section>

      {/* FINAL CTA */}
      <FinalCta />
    </main>
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