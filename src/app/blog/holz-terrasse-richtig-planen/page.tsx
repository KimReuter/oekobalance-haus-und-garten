import PageHero from "@/components/common/PageHero";

export const metadata = {
  title: "Holzterrasse nachhaltig planen – Ökobalance Blog",
  description:
    "Ausführlicher Praxisleitfaden: nachhaltige Holzarten, robuste Unterkonstruktion, Entwässerung, Pflege, typische Fehler und echte Erfahrungswerte aus dem Handwerk.",
};

export default function PostHolzTerrasse() {
  return (
    <main className="text-slate-800">
      <PageHero
        imageSrc="/blog-holzterrasse.jpg"
        title="Holzterrasse nachhaltig planen"
        subtitle="Von der Holzart bis zur Entwässerung – ein ehrlicher Einblick in langlebige Terrassen."
        navTrigger="start"
      />

      <article className="mx-auto max-w-3xl px-6 py-12 md:py-16 leading-relaxed text-slate-700">

        {/* Einleitung */}
        <p>
          Eine Holzterrasse ist viel mehr als ein Stück Holz hinter dem Haus.
          Sie ist ein Ort, an dem man gemeinsam isst, Zeit im Freien verbringt oder abends in Ruhe ein Getränk genießt.
          Damit diese Fläche wirklich über viele Jahre hält, lohnt es sich, ein paar Punkte im Vorfeld genauer anzuschauen.
        </p>

        <p className="mt-4">
          Aus unserer Erfahrung in Projekten der letzten Jahre gibt es vor allem drei Dinge,
          die über die Lebensdauer entscheiden:
          <strong> die Holzqualität, eine saubere Unterkonstruktion und eine realistische Erwartung an Pflege.</strong>
          Viele Terrassen scheitern nicht an der Witterung, sondern an kleinen Planungsfehlern,
          die man schon am Anfang vermeiden kann.
        </p>

        <p className="mt-4">
          Dieser Leitfaden fasst zusammen, worauf wir bei Ökobalance achten, wie wir vorgehen und
          welche typischen Probleme wir bei älteren Terrassen immer wieder vorfinden.
        </p>

        {/* Abschnitt 1 */}
        <h2 className="mt-12 text-xl font-bold">
          1. Die richtige Holzart – was wirklich langfristig funktioniert
        </h2>

        <p className="mt-4">
          Viele Kundinnen und Kunden fragen zu Beginn: „Welches Holz hält am längsten?“
          Die ehrliche Antwort: Das langlebigste Holz ist immer das, das zur Umgebung,
          Nutzung und Pflegebereitschaft passt.
        </p>

        <p className="mt-4">
          Wir setzen grundsätzlich auf Hölzer aus Europa – nicht aus Tropenregionen.
          Das hat zwei Gründe: kürzere Transportwege und eine deutlich bessere ökologische Bilanz.
          Außerdem sind moderne thermisch behandelte Hölzer heute so stabil,
          dass sie viele Tropenhölzer problemlos ersetzen.
        </p>

        <h3 className="mt-6 text-lg font-semibold">Unsere Praxis-Erfahrungen mit Holzarten</h3>

        <ul className="mt-3 list-disc list-inside space-y-3">
          <li>
            <strong>Douglasie:</strong> sehr gutes Preis-Leistungs-Verhältnis.
            Viele denken, Douglasie sei „weich“ – stimmt nicht. Wenn sie gut getrocknet ist,
            hält sie sehr solide, besonders als Terrassendiele in Nord- oder Ostlagen.
          </li>

          <li>
            <strong>Lärche:</strong> eines der härtesten heimischen Nadelhölzer.
            Perfekt für Terrassen, die auch mal stärkere Belastung aushalten müssen.
            Sie bekommt eine schöne silbergraue Patina, wenn man sie nicht ölt.
          </li>

          <li>
            <strong>Thermokiefer / Thermoesche:</strong> unsere Top-Empfehlung,
            wenn der Fokus auf Langlebigkeit liegt. Die thermische Behandlung macht das Holz extrem formstabil.
            Es reißt weniger, verzieht sich kaum und ist sehr widerstandsfähig gegenüber Feuchtigkeit.
          </li>
        </ul>

        <p className="mt-4">
          Wenn Kund:innen eine Terrasse aus Tropenholz wünschen, erklären wir transparent,
          dass diese Hölzer zwar langlebig sind, aber ökologisch einen fragwürdigen Weg hinter sich haben.
          Neun von zehn entscheiden sich danach freiwillig für europäische Alternativen.
        </p>

        {/* Abschnitt 2 */}
        <h2 className="mt-12 text-xl font-bold">
          2. Unterkonstruktion – der häufigste Fehler, den wir sehen
        </h2>

        <p className="mt-4">
          Die Unterkonstruktion ist der Punkt, den man später nicht mehr sieht – und deswegen
          wird hier leider auch am häufigsten geschlampt. Die meisten Schäden an alten Terrassen
          gehen nicht vom sichtbaren Holz aus, sondern von einem nassen, schlecht hinterlüfteten Unterbau.
        </p>

        <h3 className="mt-6 text-lg font-semibold">Was wir IMMER einplanen:</h3>

        <ul className="mt-3 list-disc list-inside space-y-3">
          <li>
            <strong>Mindestens 2 % Gefälle</strong> vom Haus weg.  
            Ohne Gefälle bleibt Wasser stehen – und Wasser ist der größte Feind des Holzes.
          </li>

          <li>
            <strong>Hinterlüftung</strong> an allen Seiten.  
            Holz, das dauerhaft feucht ist, verliert an Härte und wird schnell fleckig.
          </li>

          <li>
            <strong>Hochwertige Auflagepunkte:</strong> Betonplatten, Gummigranulatpads oder Terrassenlager.  
            Niemals direkt auf Erde, niemals auf Mulch, niemals einfach auf Splitt.
          </li>

          <li>
            <strong>Unterkonstruktion aus Hartholz oder Aluminium</strong>, nicht aus einfachem Konstruktionsholz.  
            Konstruktionsholz ist nicht für dauerhafte Bodennähe gemacht.
          </li>
        </ul>

        <h3 className="mt-6 text-lg font-semibold">Typische Probleme, die wir bei Sanierungen sehen:</h3>

        <ul className="mt-3 list-disc list-inside space-y-3">
          <li>
            Die Dielen liegen direkt auf der Unterkonstruktion → Schimmelstellen und schwarze Flecken.
          </li>
          <li>
            Wasser läuft Richtung Haus statt davon weg.
          </li>
          <li>
            Unterkonstruktion aus unbehandeltem Holz → innerhalb von 3–5 Jahren durchgefault.
          </li>
          <li>
            Zu große Spannweiten → Dielen wölben sich und federn durch.
          </li>
        </ul>

        <p className="mt-4">
          Wir planen jede Terrasse nach Standort, Gefälle, Schattenwurf und Nutzung.
          Wer zum Beispiel eine große Lounge mit schweren Möbeln plant,
          braucht eine stabilere Unterkonstruktion als jemand, der nur eine kleine Frühstücksfläche nutzt.
        </p>

        {/* Abschnitt 3 */}
        <h2 className="mt-12 text-xl font-bold">3. Pflege – realistisch, einfach und jahreszeitabhängig</h2>

        <p className="mt-4">
          Viele denken, dass Holzterrassen viel Arbeit machen.  
          Unsere Erfahrung: Wenn der Unterbau stimmt und das Holz gut gewählt wurde,
          hält sich die Pflege absolut im Rahmen.
        </p>

        <h3 className="mt-6 text-lg font-semibold">Unsere Empfehlung für private Terrassen:</h3>

        <ul className="mt-3 list-disc list-inside space-y-3">
          <li>
            <strong>Frühling:</strong> gründlich reinigen, dabei keine aggressiven Reiniger nutzen.
          </li>
          <li>
            <strong>Sommer:</strong> bei Bedarf nachölen (vor allem stark besonnte Terrassen).
          </li>
          <li>
            <strong>Herbst:</strong> Laub entfernen, damit die Terrasse trocken bleibt.
          </li>
        </ul>

        <p className="mt-4">
          Wer nicht jährlich ölt, muss sich keine Sorgen machen:
          Das Öl dient vor allem der Optik und dem UV-Schutz.  
          Die Haltbarkeit wird durch regelmäßiges Reinigen stärker beeinflusst als durch Öl.
        </p>

        <h3 className="mt-6 text-lg font-semibold">Und wenn man mal ein Jahr vergisst?</h3>

        <p className="mt-3">
          Kein Problem. Terrassen altern äußerlich schneller als sie technisch abbauen.
          Wichtig ist nur: kein stehendes Wasser, keine dauerhaften Schatten-Algen-Bereiche
          (z. B. direkt unter großen Kübeln).
        </p>

        {/* Abschnitt 4 */}
        <h2 className="mt-12 text-xl font-bold">4. Was eine nachhaltige Terrasse kostet</h2>

        <p className="mt-4">
          Eine realistische Einschätzung hilft bei der Planung.  
          Natürlich unterscheiden sich Projekte stark, aber folgende Erfahrungswerte
          aus den letzten drei Jahren stimmen in 80 % der Fälle erstaunlich gut:
        </p>

        <ul className="mt-3 list-disc list-inside space-y-3">
          <li>
            <strong>Douglasie / Lärche:</strong> ca. 120–180 €/m² inkl. Unterkonstruktion
          </li>
          <li>
            <strong>Thermoholz:</strong> ca. 180–260 €/m²
          </li>
          <li>
            <strong>Premium-Thermoesche:</strong> 260–320 €/m²
          </li>
        </ul>

        <p className="mt-4">
          Ein entscheidender Faktor ist dabei immer der Untergrund:
          je ebener und besser vorbereitet, desto günstiger wird das Projekt.
        </p>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl px-6 py-3 bg-brand-primary text-white font-semibold tracking-tight transform-gpu transition-transform duration-150 hover:scale-[1.03] no-underline"
          >
            Projektidee oder Fragen?
          </a>
        </div>
      </article>
    </main>
  );
}