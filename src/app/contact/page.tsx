import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt – Ökobalance Haus & Garten",
  description: "Kontaktieren Sie uns für Anfragen und Angebote.",
};

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Kontakt</h1>
      <p>Schreiben Sie uns eine E-Mail oder rufen Sie an.</p>
    </main>
  );
}
