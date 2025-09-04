// src/components/home/FinalCta.tsx
import ButtonLink from "../ui/ButtonLink";
import { siteConfig } from "@/lib/siteConfig";

export default function FinalCta() {
  return (
    <section className="text-center py-20 bg-brand-light-soft">
      <h2 className="text-3xl md:text-4xl font-extrabold">Bereit, dein Projekt zu starten?</h2>
      <p className="mt-4 text-lg">Klare Absprachen und zügige Umsetzung.</p>

      <div className="mt-8 flex justify-center gap-3 flex-wrap">
        <ButtonLink href="/contact" variant="primary" className="w-40">
          Kontaktseite
        </ButtonLink>

        <a
          href={`https://wa.me/${siteConfig.whatsapp}`}
          className="btn btn-secondary w-40"
        >
          WhatsApp
        </a>
      </div>
    </section>
  );
}