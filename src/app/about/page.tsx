import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über Paul – Ökobalance Haus & Garten",
  description:
    "Paul ist Gründer von Ökobalance Haus & Garten. Mit Erfahrung in Gala-Bau, Hausbau, Innenausbau und einem Macher-Mindset verbindet er handwerkliches Können mit nachhaltigen Werten.",
};

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Über mich</h1>

      <p className="mb-4">
        Hi, ich bin <strong>Paul</strong> – der Kopf und die Hände hinter{" "}
        <strong>Ökobalance Haus & Garten</strong>.
      </p>

      <p className="mb-4">
        Schon früh habe ich gelernt, mit Holz, Metall und Werkzeugen kreativ
        umzugehen – ursprünglich sogar im <strong>Orgelbau</strong>. Von dort
        führte mich mein Weg über viele Stationen: Handpan-Bau, Autowerkstatt,
        Garten- und Landschaftsbau, Gartenpflege, Dachspenglerei bis hin zu Roh-
        und Innenausbau.
      </p>

      <p className="mb-4">
        Das Ergebnis? Ein bunter Werkzeugkasten an{" "}
        <strong>Erfahrung, Wissen und Können</strong>, den ich heute für meine
        Kund:innen einsetze.
      </p>

      <p className="mb-4">
        Ich habe mich selbstständig gemacht, weil ich{" "}
        <strong>Abwechslung liebe</strong>, <strong>selbstbestimmt arbeiten</strong> möchte
        und überzeugt bin, dass nachhaltige Lösungen für Haus und Garten die
        Zukunft sind.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Was mich ausmacht</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Superschnell &amp; lösungsorientiert</strong> – wo andere sagen
          „das geht nicht“, fange ich erst an.
        </li>
        <li>
          <strong>Zuverlässig &amp; positiv</strong> – man kann sich auf mich
          verlassen.
        </li>
        <li>
          <strong>Kreativ &amp; naturverbunden</strong> – draußen fühle ich mich
          zu Hause, sei es beim Arbeiten, Klettern, Snowboarden oder jetzt auch
          beim Gleitschirmfliegen.
        </li>
      </ul>

      <p className="mt-6">
        Und wenn ich nicht gerade für meine Kund:innen im Einsatz bin, bin ich
        Papa von zwei wunderbaren Kindern – immer für einen Spaß zu haben und
        mit voller Energie dabei.
      </p>
    </main>
  );
}