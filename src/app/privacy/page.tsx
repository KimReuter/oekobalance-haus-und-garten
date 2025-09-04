import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz – Ökobalance Haus & Garten",
  description: "Informationen zum Datenschutz.",
};

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Datenschutz</h1>
      <p>Hier folgen die Datenschutz-Informationen.</p>
    </main>
  );
}
