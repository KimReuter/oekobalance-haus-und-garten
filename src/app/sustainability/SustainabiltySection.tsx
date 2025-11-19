import { MapPin, Recycle } from "lucide-react";

export default function SustainabilitySection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-20 text-center">
      <h2 className="text-2xl md:text-3xl font-extrabold">
        Nachhaltig aus Überzeugung
      </h2>

      <p className="mt-3 max-w-2xl mx-auto text-slate-700">
        Bewusst handeln, lokal denken und Verantwortung übernehmen – das ist
        unser Ansatz für nachhaltiges Handwerk.
      </p>

      <div className="mt-10 grid md:grid-cols-2 gap-10">
        {/* Block 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="h-12 w-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-4">
            <MapPin className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-semibold text-brand-primary mb-2">
            Kurze Wege, starke Region
          </h3>
          <p className="text-slate-700 max-w-sm mx-auto text-center">
            Wir setzen auf regionale Partner und kurze Transportwege – das spart
            CO₂, stärkt die Wirtschaft und hält Projekte flexibel.
          </p>
        </div>

        {/* Block 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="h-12 w-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-4">
            <Recycle className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-semibold text-brand-primary mb-2">
            Abfalltrennung & Recycling
          </h3>
          <p className="text-slate-700 max-w-sm mx-auto text-center">
            Von Baustoffen bis Verpackungen: Wir trennen, recyceln und vermeiden
            Abfälle konsequent – für nachhaltige Ergebnisse.
          </p>
        </div>
      </div>
    </section>
  );
}