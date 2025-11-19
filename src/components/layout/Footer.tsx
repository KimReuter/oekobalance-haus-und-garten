// src/components/layout/Footer.tsx
"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import ButtonLink from "@/components/ui/ButtonLink";

export default function Footer() {
  return (
    <footer className="bg-brand-primary-light text-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-14">
        {/* Grid: 4 Spalten auf Desktop, 2 auf Tablet, 1 auf Mobile */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* 1) Logo/Intro + Social */}
          <div>
            {/* Wenn du ein Logo hast, hier als Bild/Typo einfügen */}
            <p className="text-xl font-extrabold tracking-tight text-brand-primary">
              {siteConfig.name}
            </p>
            <p className="mt-3 text-sm text-brand-primary leading-relaxed">
              {siteConfig.intro}
            </p>

            {/* Socials (optional) */}
            <div className="mt-4 flex items-center gap-4">
              {siteConfig.socials?.facebook && (
                <a
                  href={siteConfig.socials.facebook}
                  className="text-brand-primary hover:text-white no-underline"
                  aria-label="Facebook"
                >
                  FB
                </a>
              )}
              {siteConfig.socials?.instagram && (
                <a
                  href={siteConfig.socials.instagram}
                  className="text-brand-primary hover:text-white no-underline"
                  aria-label="Instagram"
                >
                  IG
                </a>
              )}
            </div>
          </div>

          {/* 2) Adresse/Kontakt */}
          <div>
            <p className="text-sm font-semibold tracking-wide text-brand-primary uppercase">
              Adresse
            </p>
            <address className="not-italic mt-3 text-sm text-brand-primary leading-relaxed">
              {siteConfig.name}
              <br />
              {siteConfig.addressLine1}
              <br />
              {siteConfig.addressLine2}
              <br />
              {siteConfig.country}
            </address>

            <ul className="mt-4 space-y-1 text-sm">
              <li>
                <span className="text-brand-primary">Telefon: </span>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-brand-primary underline-offset-4 hover:underline"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <span className="text-brand-primary">E-Mail: </span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-brand-primary underline-offset-4 hover:underline"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>

          {/* 3) Menü */}
          <nav aria-label="Menü">
            <p className="text-sm font-semibold tracking-wide text-brand-primary uppercase">
              Menü
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-brand-primary hover:text-white underline-offset-4 hover:underline"
                >
                  Start
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-brand-primary hover:text-white underline-offset-4 hover:underline"
                >
                  Leistungen
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-brand-primary hover:text-white underline-offset-4 hover:underline"
                >
                  Galerie
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-brand-primary hover:text-white underline-offset-4 hover:underline"
                >
                  Kontakt
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="/impressum"
                  className="text-brand-primary hover:text-white underline-offset-4 hover:underline"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-brand-primary hover:text-white underline-offset-4 hover:underline"
                >
                  Datenschutzerklärung
                </Link>
              </li>
            </ul>
          </nav>

          {/* 4) Anfrage-CTA */}
          <div>
            <p className="text-sm font-semibold tracking-wide text-brand-primary uppercase">
              Anfrage
            </p>
            <p className="mt-3 text-sm text-brand-primary leading-relaxed">
              Du möchtest dein Projekt professionell umsetzen lassen?
              Sprich direkt mit uns. Wir freuen uns auf deine Anfrage.
            </p>

            <div className="mt-5">
              <ButtonLink href="/contact" variant="secondary" className="w-48">
                Anfrage stellen
              </ButtonLink>
            </div>
          </div>
        </div>

        {/* Linie + Copyright */}
        <div className="mt-10 border-t border-brand-primary pt-6 text-xs text-brand-primary flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Alle Rechte vorbehalten.
          </p>
          <p>
            {siteConfig.vatId ? `USt-IdNr.: ${siteConfig.vatId}` : "Handwerk mit Herz – nachhaltig gedacht."}
          </p>
        </div>
      </div>
    </footer>
  );
}