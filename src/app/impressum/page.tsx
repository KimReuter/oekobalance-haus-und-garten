import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum – Ökobalance Haus & Garten",
  description: "Rechtliche Angaben zum Anbieter.",
};

export default function ImpressumPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Impressum</h1>
      <p>Hier folgen die rechtlichen Angaben.</p>
    </main>
  );
}
