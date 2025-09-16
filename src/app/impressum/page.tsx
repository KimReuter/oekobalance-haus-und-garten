export const metadata = {
  title: "Impressum – Ökobalance Haus & Garten",
  description: "Impressum gemäß § 5 TMG für Ökobalance Haus & Garten",
};

export default function ImpressumPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 text-slate-800">
      <h1 className="text-3xl font-extrabold mb-8">Impressum</h1>

      <section className="space-y-4">
        <p><strong>Angaben gemäß § 5 TMG</strong></p>

        <p>
          <strong>Ökobalance Haus & Garten</strong><br />
          Paul Enterlein<br />
          Kirchstraße 4<br />
          07926 Gefell<br />
          Deutschland
        </p>

        <p>
          <strong>Kontakt</strong><br />
          Telefon: 015234570076<br />
          E-Mail: info@oekobalance.de
        </p>

        <p>
          <strong>Umsatzsteuer-ID</strong><br />
          Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: DE123456789
        </p>

        <p>
          <strong>Registereintrag</strong><br />
          Eingetragen im Handelsregister.<br />
          Registergericht: Musterstadt<br />
          Registernummer: HRB 12345
        </p>
      </section>

      <hr className="my-8 border-slate-300" />

      <section className="space-y-4 text-sm leading-relaxed">
        <h2 className="text-lg font-semibold">Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf
          diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis
          10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
          übermittelte oder gespeicherte fremde Informationen zu überwachen oder
          nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>

        <h2 className="text-lg font-semibold">Haftung für Links</h2>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte
          wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte
          auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist
          stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
        </p>

        <h2 className="text-lg font-semibold">Urheberrecht</h2>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen
          des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen
          Autors bzw. Erstellers.
        </p>
      </section>
    </main>
  );
}