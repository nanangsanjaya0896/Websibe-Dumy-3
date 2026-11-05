import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { DM_Sans, Lora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { NavBar, StickyBookBar } from "@/components/chrome";
import { Footer } from "@/components/footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700"],
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmsans",
  weight: ["400", "500", "600", "700"],
});
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arktisservice.id"),
  title: {
    default: "ARKTIS — Servis AC Profesional Langsung di Rumah",
    template: "%s",
  },
  description:
    "Servis AC bersertifikat di Jabodetabek, Bandung, Surabaya, Semarang. Harga jelas, garansi 30 hari, teknisi rapi. Pesan hari ini.",
  openGraph: {
    siteName: "ARKTIS HOME SERVICE",
    locale: "id_ID",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a1628",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id" className={`${jakarta.variable} ${dmSans.variable} ${lora.variable}`}>
      <body className="bg-paper text-charcoal antialiased">
        <NavBar />
        <main>{children}</main>
        <Footer />
        <StickyBookBar />
      </body>
    </html>
  );
}
