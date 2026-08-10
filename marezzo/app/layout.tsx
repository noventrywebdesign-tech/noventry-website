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
    default: `${restaurant.name} — Open-Fire Steakhouse in Mayfair, London`,
    template: `%s — ${restaurant.name}`,
  },
  description:
    "Marezzo is an open-fire steakhouse in Mayfair, London — dry-aged British beef, Japanese A5 wagyu, and a 400-bin cellar list. A concept showcase by Noventry Webdesign.",
  keywords: [
    "steakhouse Mayfair",
    "steakhouse London",
    "dry aged steak London",
    "wagyu London",
    "fine dining Mayfair",
    "private dining London",
    "Marezzo",
  ],
  openGraph: {
    title: `${restaurant.name} — Open-Fire Steakhouse in Mayfair, London`,
    description: "Dry-aged British beef, Japanese A5 wagyu, and a 400-bin cellar list — cooked over open coal.",
    url: "https://www.marezzo-london.com",
    siteName: restaurant.name,
    locale: "en_GB",
    type: "website",
  },
  robots: { index: true, follow: true },
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
      return { "@type": "OpeningHoursSpecification", dayOfWeek: `https://schema.org/${day}`, opens, closes };
    }),
    sameAs: [restaurant.instagram.url],
  };

  return (
    <html lang="en">
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
