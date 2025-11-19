import PageHero from "@/components/common/PageHero";

export const metadata = {
  title: "Regenwasser clever nutzen – Ökobalance Blog",
  description:
    "Wie du Regenwasser für Garten, Terrasse und Haushalt sinnvoll einsetzt. Praxisleitfaden zu Tonnen, Zisternen, Versickerung und Bewässerungssystemen.",
};

export default function PostRegenwasser() {
  return (
    <main className="text-slate-800">
      <PageHero
        imageSrc="/blog-regenwasser.jpg"
        title="Regenwasser clever nutzen"
        subtitle="Praktische Lösungen für Garten, Terrasse und Bewässerung."
        navTrigger="start"
      />

      <article className="mx-auto max-w-3xl px-6 py-12 md:py-16 leading-relaxed text-slate-700">

        {/* Einleitung */}
        <p>
          Regenwasser ist eine der einfachsten Möglichkeiten, Ressourcen zu sparen – und gleichzeitig
          Garten und Pflanzen etwas Gutes zu tun. Viele wissen nicht, wie viel Potenzial wirklich
          auf dem eigenen Dach liegt: Selbst ein kleines Einfamilienhaus sammelt im Jahr mehrere
          Zehntausend Liter Regenwasser.
        </p>

        <p className="mt-4">
          In unserem Alltag sehen wir oft sehr einfache Lösungen, die erstaunlich gut funktionieren,
          aber auch komplexere Systeme, die langfristig Wasser und Kosten sparen. Dieser Leitfaden
          zeigt, was realistisch machbar ist, welche Systeme Sinn ergeben und welche Fehler man
          unbedingt vermeiden sollte.
        </p>

        {/* Abschnitt 1 */}
        <h2 className="mt-12 text-xl font-bold">
          1. Wie viel Regenwasser fällt eigentlich an?
        </h2>

        <p className="mt-4">
          Viele unterschätzen die Menge. Grobe Faustregel:
        </p>

        <p className="mt-3 font-semibold text-slate-900">
          👉 1 m² Dachfläche sammelt pro Jahr ca. 600–800 Liter Regenwasser (je nach Region).
        </p>

        <p className="mt-4">
          Ein Dach mit 100 m² Fläche liefert also rund <strong>60.000 bis 80.000 Liter</strong>.
          Selbst wenn man nur einen kleinen Teil nutzt, lohnt sich das extrem.
        </p>

        {/* Abschnitt 2 */}
        <h2 className="mt-12 text-xl font-bold">
          2. Regentonnen – einfach, günstig und oft völlig ausreichend
        </h2>

        <p className="mt-4">
          Die klassische Regentonne ist nach wie vor eine der effizientesten Lösungen – besonders
          für kleinere Grundstücke. Moderne Tonnen sind frostbeständiger, lassen sich an die Dachrinne
          anschließen und mit Deckel gegen Mücken schützen.
        </p>

        <h3 className="mt-6 text-lg font-semibold">Unsere Erfahrung aus Projekten:</h3>

        <ul className="mt-3 list-disc list-inside space-y-3">
          <li>300–500 Liter reichen für kleine Gärten absolut aus.</li>
          <li>Mit zwei Tonnen (verbunden durch Schlauch) erreicht man fast Zisternen-Niveau.</li>
          <li>Tonnen sollten stabil stehen – am besten auf einer Betonplatte oder Pflaster.</li>
          <li>Direkter Sonnenschutz verhindert Algenbildung.</li>
        </ul>

        <p className="mt-4">
          Wer häufiger gießt oder viele Hochbeete hat, profitiert jedoch langfristig von größeren
          Speicherlösungen.
        </p>

        {/* Abschnitt 3 */}
        <h2 className="mt-12 text-xl font-bold">
          3. Zisternen – wenn man Regenwasser langfristig speichern möchte
        </h2>

        <p className="mt-4">
          Eine Zisterne funktioniert im Prinzip wie eine große, unterirdische Regentonne.
          Sie ist ideal, wenn man:
        </p>

        <ul className="mt-3 list-disc list-inside space-y-3">
          <li>einen großen Garten bewässern möchte,</li>
          <li>viele Kübelpflanzen oder Gemüsebeete hat,</li>
          <li>oder Regenwasser für Toilette/Waschmaschine nutzen will.</li>
        </ul>

        <h3 className="mt-6 text-lg font-semibold">Welche Größe ist sinnvoll?</h3>

        <p className="mt-3">
          Für typische Einfamilienhäuser empfehlen wir:
        </p>

        <ul className="mt-3 list-disc list-inside space-y-3">
          <li><strong>3.000–4.000 Liter:</strong> genügt für Gartenbewässerung.</li>
          <li><strong>5.000–7.000 Liter:</strong> ideal für größere Gärten.</li>
          <li><strong>8.000+ Liter:</strong> wenn Regenwasser zusätzlich im Haushalt genutzt wird.</li>
        </ul>

        <p className="mt-4">
          Moderne Zisternen sind wartungsarm, benötigen aber einen Filter vor dem Zulauf.
          Ohne Filter setzen sich organische Stoffe ab und verursachen Geruch oder Verstopfung.
        </p>

        {/* Abschnitt 4 */}
        <h2 className="mt-12 text-xl font-bold">
          4. Bewässerungssysteme – Tropfrohre, Versickerung & automatische Steuerung
        </h2>

        <p className="mt-4">
          Wer Regenwasser effizient nutzt, sollte auch die Bewässerung optimieren.
          Die meisten verschätzen sich stark: Mit der Gießkanne werden oft 60–70 % des Wassers
          dort verteilt, wo es gar nicht gebraucht wird.
        </p>

        <h3 className="mt-6 text-lg font-semibold">
          Systeme, die sich in unseren Projekten bewährt haben:
        </h3>

        <ul className="mt-3 list-disc list-inside space-y-3">
          <li>
            <strong>Tropfrohre:</strong> geben Wasser direkt an die Wurzelzone ab – ideal für
            Beete und Hecken.
          </li>
          <li>
            <strong>Perlschläuche:</strong> gute Lösung für Gemüsebeete und Rabatten.
          </li>
          <li>
            <strong>Automatische Steuerungen:</strong> sparen Zeit und verhindern Überwässerung.
            Besonders sinnvoll bei Zisternen, da man besser planen kann.
          </li>
        </ul>

        <p className="mt-4">
          Ein durchdachtes Bewässerungssystem spart nicht nur Wasser,
          sondern sorgt auch für gesündere Pflanzen, weil die Erde gleichmäßig feucht bleibt.
        </p>

        {/* Abschnitt 5 */}
        <h2 className="mt-12 text-xl font-bold">
          5. Häufige Fehler – und wie man sie vermeidet
        </h2>

        <ul className="mt-4 list-disc list-inside space-y-3">
          <li>
            <strong>Regentonne ohne Deckel:</strong> zieht Mücken an und heizt sich auf.
          </li>
          <li>
            <strong>Fehlende Überlaufsteuerung:</strong> Wasser läuft einfach ins Fundament oder an die Fassade.
          </li>
          <li>
            <strong>Zu kleine Zisterne:</strong> schon nach zwei Wochen Sommer leer.
          </li>
          <li>
            <strong>Tropfrohre ohne Filter:</strong> setzen sich schnell zu.
          </li>
          <li>
            <strong>Regenwasser ungefiltert ins Haus leiten:</strong> sehr unhygienisch.
          </li>
        </ul>

        <p className="mt-4">
          Die häufigsten Probleme entstehen durch fehlende Planung oder falsche Kombinationen.
          Gerade bei Zisternen lohnt sich ein kurzer Austausch, bevor man investiert –
          viele Hersteller geben auf dem Papier perfekte Werte an, die in der Praxis unrealistisch sind.
        </p>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl px-6 py-3 bg-brand-primary text-white font-semibold tracking-tight transform-gpu transition-transform duration-150 hover:scale-[1.03] no-underline"
          >
            Du planst eine Lösung für Regenwasser?
          </a>
        </div>
      </article>
    </main>
  );
}