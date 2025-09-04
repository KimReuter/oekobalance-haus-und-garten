import "./globals.css";         
import type { ReactNode } from "react";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Ökobalance Haus & Garten",
  description: "Nachhaltige Lösungen für Haus & Garten.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <body className="min-h-screen flex flex-col">
        <main className="flex-1">{children}</main>
        <Footer />
        </body>
    </html>
  );
}