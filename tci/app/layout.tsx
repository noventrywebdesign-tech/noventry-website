import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TCI – Tennisclub Iserlohn",
  description:
    "Willkommen beim Tennisclub Iserlohn e.V. – 13 Außenplätze, 2 Hallenplätze, direkt am Seilersee. Wo Tennis zur Leidenschaft wird.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${cormorant.variable} ${inter.variable}`}
    >
      <body className="min-h-screen bg-white text-[#0f1a14]">{children}</body>
    </html>
  );
}
