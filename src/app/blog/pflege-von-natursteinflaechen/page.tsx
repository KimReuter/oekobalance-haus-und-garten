import PageHero from "@/components/common/PageHero";

export const metadata = {
  title: "Pflege von Natursteinflächen – Ökobalance Blog",
  description:
    "Wie du Natursteinwege, Einfahrten und Terrassen langfristig schön hältst: Reinigung, Imprägnierung, typische Fehler und echte Erfahrungswerte.",
};

export default function PostNaturstein() {
  return (
    <main className="text-slate-800">
      <PageHero
        imageSrc="/blog-naturstein.jpg"
        title="Pflege von Natursteinflächen"
        subtitle="Reinigung, Schutz und langfristige Pflege – verständlich erklärt und praxiserprobt."
        navTrigger="start"
      />

      <article className="mx-auto max-w-3xl px-6 py-12 md:py-16 leading-relaxed text-slate-700">

        {/* Einleitung */}
        <p>
          Naturstein ist eines der dauerhaftesten Materialien im Außenbereich.
          Gleichzeitig gehört er zu den Baustoffen, die am häufigsten falsch gepflegt werden.
          Wir erleben immer wieder: Schon kleine Fehler bei der Reinigung können dauerhafte
          Flecken oder Aufrauungen verursachen. Das gilt besonders für empfindliche Steine wie
          Sandstein oder Kalkstein – aber auch robuste Granitflächen profitieren von einer
          richtigen Pflege.
        </p>

        <p className="mt-4">
          In diesem ausführlichen Leitfaden fassen wir zusammen, was sich in unserer täglichen
          Arbeit bewährt hat, welche Mittel im Baumarkt eher schaden als helfen und wie du mit
          überschaubarem Aufwand Naturstein viele Jahre schön hältst.
        </p>

        {/* Abschnitt 1 */}
        <h2 className="mt-12 text-xl font-bold">
          1. Die häufigsten Verschmutzungen – und was wirklich dagegen hilft
        </h2>

        <p className="mt-4">
          Naturstein ist nicht gleich Naturstein. Ein Granitpflaster reagiert anders auf
          Verschmutzung als ein poröser Sandstein. Umso wichtiger ist es, den Schmutz richtig
          einzuschätzen. Hier die häufigsten Fälle aus unseren Projekten:
        </p>

        <ul className="mt-3 list-disc list-inside space-y-3">
          <li>
            <strong>Moos & grüne Beläge:</strong> entstehen durch Feuchtigkeit und wenig Sonne.  
            Lösung: pH-neutrale Steinreiniger oder schonende Bürsten, keinesfalls Chlorprodukte.
          </li>

          <li>
            <strong>Ölflecken (Auto, Grill, Fahrradkette):</strong> eines der schwierigsten Themen.  
            Lösung: Öl- und Fettlöser speziell für Stein. Bei frischen Flecken helfen
            Bindemittel oder Katzenstreu, NIE Wasser.
          </li>

          <li>
            <strong>Rostflecken:</strong> entstehen durch metallische Möbel, Spielgeräte oder Blumenkübel.  
            Lösung: Rostentferner auf Oxalsäure-Basis – aber nur für säureresistente Steine wie Granit!
          </li>

          <li>
            <strong>Laubflecken:</strong> besonders unter Bäumen.  
            Lösung: milde Steinseife + Bürste. Bleiben sie lange drauf, ziehen sie tiefer ein.
          </li>
        </ul>

        <p className="mt-4">
          Wir verwenden bei Ökobalance ausschließlich Reinigungsmittel, die ausdrücklich für
          Naturstein freigegeben sind. Der häufigste Fehler ist der Griff zu „Terrassenreiniger“
          aus dem Baumarkt – die sind oft stark alkalisch oder sauer und greifen die Oberfläche an.
        </p>

        {/* Abschnitt 2 */}
        <h2 className="mt-12 text-xl font-bold">
          2. Hochdruckreiniger – wann erlaubt und wann gefährlich?
        </h2>

        <p className="mt-4">
          Ein Thema, das häufiger Diskussionen auslöst als jedes andere: Darf man Naturstein mit
          einem Hochdruckreiniger reinigen? Die ehrliche Antwort: Es kommt extrem auf Stein und
          Düse an.
        </p>

        <h3 className="mt-6 text-lg font-semibold">Sicher ist der Einsatz nur, wenn …</h3>

        <ul className="mt-3 list-disc list-inside space-y-3">
          <li>du einen harten, dichten Stein wie Granit oder Basalt hast,</li>
          <li>eine Flachstrahldüse benutzt (KEIN Rotationsstrahl!),</li>
          <li>mindestens 20–30 cm Abstand hältst,</li>
          <li>und die Fugen stabil sind.</li>
        </ul>

        <p className="mt-4">
          Bei Sandstein, Kalkstein oder anderen weichen Gesteinen ist ein Hochdruckreiniger fast
          immer tabu. Der Strahl rauht die Oberfläche auf, macht sie anfälliger für Feuchtigkeit
          und lässt sie langfristig schneller verschmutzen.
        </p>

        <h3 className="mt-6 text-lg font-semibold">
          Wie wir in der Praxis reinigen:
        </h3>

        <p className="mt-3">
          In 80 % der Fälle verwenden wir eine Bürste, warmes Wasser und pH-neutrale Steinseife.
          Bei stark verschmutzten Flächen arbeiten wir mit Schrubbern und langsamem Druckaufbau –
          niemals direkt mit voller Leistung.
        </p>

        {/* Abschnitt 3 */}
        <h2 className="mt-12 text-xl font-bold">3. Imprägnierung – sinnvoll oder unnötig?</h2>

        <p className="mt-4">
          Viele denken, dass eine Imprägnierung Naturstein „versiegelt“. Das ist nicht korrekt.
          Eine gute Imprägnierung ist dampfdiffusionsoffen, lässt den Stein also „atmen“,
          schützt aber vor Feuchtigkeit, Öl und Schmutz.
        </p>

        <h3 className="mt-6 text-lg font-semibold">Wann wir eine Imprägnierung empfehlen:</h3>

        <ul className="mt-3 list-disc list-inside space-y-3">
          <li>bei hellen Steinen (fleckanfälliger),</li>
          <li>bei Grillplätzen & Sitzbereichen,</li>
          <li>bei Terrassen unter Bäumen,</li>
          <li>bei porösen Steinen wie Sandstein.</li>
        </ul>

        <p className="mt-4">
          Bei dunklen Granitflächen ist eine Imprägnierung häufig nicht zwingend – sie erleichtert
          aber die Reinigung deutlich, besonders bei öligen Flecken.
        </p>

        <h3 className="mt-6 text-lg font-semibold">Wie lange hält so etwas?</h3>

        <p className="mt-3">
          Realistisch 2–5 Jahre, abhängig von Nutzung, Witterung und Reinigungsgewohnheiten.
          Man erkennt das Nachlassen daran, dass Wasser nicht mehr perlt, sondern einzieht.
        </p>

        {/* Abschnitt 4 */}
        <h2 className="mt-12 text-xl font-bold">
          4. Typische Fehler – und warum sie später teuer werden
        </h2>

        <ul className="mt-4 list-disc list-inside space-y-3">
          <li>
            <strong>„Kraftreiniger“ aus dem Baumarkt verwendet:</strong> führen zu Ausblühungen,
            Verfärbungen, Ausbleichen und rauen Oberflächen.
          </li>
          <li>
            <strong>Rotordüse im Hochdruckreiniger:</strong> fräst die Oberfläche auf –
            bei Sandstein irreparabel.
          </li>
          <li>
            <strong>Ölflecken mit Wasser behandeln:</strong> Öl und Wasser vermischen sich nicht,
            der Fleck wird größer.
          </li>
          <li>
            <strong>Imprägnierung ohne vorherige Tiefenreinigung:</strong> schließt Schmutz ein
            und macht ihn permanent.
          </li>
        </ul>

        <p className="mt-4">
          Die häufigste Ursache für spätere Probleme ist allerdings Staunässe rund um die Fläche.
          Wenn Fugen permanent nass sind oder Wasser nicht richtig abläuft, verschmutzt Naturstein
          deutlich schneller – selbst, wenn er hochwertig ist.
        </p>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl px-6 py-3 bg-brand-primary text-white font-semibold tracking-tight transform-gpu transition-transform duration-150 hover:scale-[1.03] no-underline"
          >
            Fragen zu Reinigung oder Sanierung?
          </a>
        </div>

      </article>
    </main>
  );
}