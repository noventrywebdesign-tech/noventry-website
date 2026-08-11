import type { Metadata } from "next";
import { Libre_Caslon_Display, Libre_Caslon_Text, Archivo } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import { ReservationProvider } from "@/components/Reservation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import PageTransition from "@/components/PageTransition";
import { restaurant } from "@/lib/restaurant-data";

const caslonDisplay = Libre_Caslon_Display({
  variable: "--font-caslon-display",
  subsets: ["latin"],
  weight: "400",
});

const caslonText = Libre_Caslon_Text({
  variable: "--font-caslon-text",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.marezzo-london.com"),
  title: {
    default: `${restaurant.name} — Steakhouse am offenen Feuer in Mayfair, London`,
    template: `%s — ${restaurant.name}`,
  },
  description:
    "MAREZZO ist ein Steakhouse am offenen Feuer in Mayfair, London — dry-aged britisches Rind, japanisches A5-Wagyu und ein vierhundert Positionen starker Weinkeller. Ein Konzeptprojekt von Noventry Webdesign.",
  keywords: [
    "Steakhouse Mayfair",
    "Steakhouse London",
    "Dry Aged Steak London",
    "Wagyu London",
    "Fine Dining Mayfair",
    "Private Dining London",
    "Marezzo",
  ],
  openGraph: {
    title: `${restaurant.name} — Steakhouse am offenen Feuer in Mayfair, London`,
    description: "Dry-aged britisches Rind, japanisches A5-Wagyu und ein vierhundert Positionen starker Weinkeller — gegart über offener Kohle.",
    url: "https://www.marezzo-london.com",
    siteName: restaurant.name,
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${restaurant.name} — Steakhouse am offenen Feuer in Mayfair, London`,
    description: "Dry-aged britisches Rind, japanisches A5-Wagyu und ein vierhundert Positionen starker Weinkeller — gegart über offener Kohle.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // MAREZZO doesn't exist — no Restaurant/LocalBusiness structured data here on
  // purpose, since that vocabulary (address, phone, opening hours as facts
  // about a real place) would tell search engines this is a real business.
  // A plain WebSite entry is safe: it describes the page, not a physical premise.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: restaurant.name,
    description: "Ein fiktives Showcase-Projekt von Noventry Webdesign — kein real existierendes Restaurant.",
    url: "https://www.marezzo-london.com",
  };

  return (
    <html lang="de">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${caslonDisplay.variable} ${caslonText.variable} ${archivo.variable} font-body bg-char-950 text-linen-50 antialiased cursor-none-desktop`}>
        <SmoothScrollProvider>
          <ReservationProvider>
            <PageTransition />
            <ScrollProgress />
            <CustomCursor />
            <Navbar />
            {children}
            <Footer />
          </ReservationProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
