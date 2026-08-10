import type { Metadata } from "next";
import { Libre_Caslon_Display, Libre_Caslon_Text, Archivo } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import { ReservationProvider } from "@/components/Reservation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { restaurant, openingHours } from "@/lib/restaurant-data";

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
  robots: { index: true, follow: true },
};

// Schema.org's dayOfWeek vocabulary is fixed English URIs regardless of
// site locale — this maps the (now German) openingHours.day labels to it.
const SCHEMA_DAY: Record<string, string> = {
  Montag: "Monday",
  Dienstag: "Tuesday",
  Mittwoch: "Wednesday",
  Donnerstag: "Thursday",
  Freitag: "Friday",
  Samstag: "Saturday",
  Sonntag: "Sunday",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: restaurant.name,
    servesCuisine: ["Steakhouse", "Grill"],
    url: "https://www.marezzo-london.com",
    telephone: restaurant.phone,
    priceRange: "£££",
    address: {
      "@type": "PostalAddress",
      streetAddress: restaurant.address.street,
      addressLocality: "London",
      postalCode: restaurant.address.postalCode,
      addressCountry: "GB",
    },
    openingHoursSpecification: openingHours.map(({ day, hours }) => {
      const [opens, closes] = hours.split(" – ");
      return { "@type": "OpeningHoursSpecification", dayOfWeek: `https://schema.org/${SCHEMA_DAY[day]}`, opens, closes };
    }),
    sameAs: [restaurant.instagram.url],
  };

  return (
    <html lang="de">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${caslonDisplay.variable} ${caslonText.variable} ${archivo.variable} font-body bg-char-950 text-linen-50 antialiased cursor-none-desktop`}>
        <SmoothScrollProvider>
          <ReservationProvider>
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
