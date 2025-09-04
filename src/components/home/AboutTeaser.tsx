import Image from "next/image";
import ButtonLink from "@/components/ui/ButtonLink";

export default function AboutTeaser() {
  return (
    <div className="grid gap-8 md:grid-cols-12 md:items-center">
      <div className="md:col-span-4">
        <div className="relative aspect-square overflow-hidden rounded-2xl shadow-sm">
          <Image
            src="/paul.jpg"
            alt="Paul – Gründer von Ökobalance Haus & Garten"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="md:col-span-8">
        <h2 className="text-2xl md:text-3xl font-bold">Über Paul</h2>
        <p className="mt-4 text-lg">
          Orgelbau, Handpan-Herstellung, Autowerkstatt, Gala-Bau, Gartenpflege,
          Dachspenglerei, Roh- & Innenausbau – Paul vereint vielfältige Praxis
          mit Macher-Mindset, Tempo und Verlässlichkeit.
        </p>
        <ButtonLink href="/about" variant="secondary">
          Mehr über Paul
        </ButtonLink>
      </div>
    </div>
  );
}