import "./globals.css";         
import type { ReactNode } from "react";

export const metadata = {
  title: "Ökobalance Haus & Garten",
  description: "Nachhaltige Lösungen für Haus & Garten.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}