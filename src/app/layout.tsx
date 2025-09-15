// src/app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import Footer from "@/components/layout/Footer";
import LenisProvider from "@/components/providers/LenisProvider";
import StickyNav from "@/components/layout/StickyNav";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <body className="min-h-screen flex flex-col">
        {/* Header NICHT in Lenis packen */}
        <StickyNav afterScroll="white" threshold={40} />

        <LenisProvider>
          <main className="flex-1">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}