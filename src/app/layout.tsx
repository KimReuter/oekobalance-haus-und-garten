// src/app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import Footer from "@/components/layout/Footer";
import LenisProvider from "@/components/providers/LenisProvider";
import StickyNav from "@/components/layout/StickyNav";
import ScrollToTop from "@/components/ui/ScrollToTop";
import FloatingContactButton from "@/components/ui/FloatingContactButton";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <body className="min-h-screen flex flex-col">
        {/* Header NICHT in Lenis packen */}
        <StickyNav afterScroll="brown" threshold={40} />

        <LenisProvider>
          <main className="flex-1">{children}</main>
          <Footer />
        </LenisProvider>

        <ScrollToTop />

        <FloatingContactButton />
      </body>
    </html>
  );
}