"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useReservation } from "@/components/Reservation";
import { restaurant, openingHours } from "@/lib/restaurant-data";
import MagneticButton from "@/components/ui/MagneticButton";

const LINKS = [
  { label: "Geschichte", href: "/#geschichte" },
  { label: "Speisekarte", href: "/speisekarte" },
  { label: "Das Feuer", href: "/#feuer" },
  { label: "Galerie", href: "/#galerie" },
  { label: "Private Dining", href: "/#private-dining" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { open } = useReservation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-char-950/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10">
          <a href="/" className="font-display text-xl tracking-[0.18em] text-linen-50">
            MAREZZO
          </a>

          <nav className="hidden items-center gap-9 lg:flex">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative text-[0.72rem] font-medium uppercase tracking-[0.16em] text-linen-200 transition-colors hover:text-linen-50"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-copper-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <MagneticButton className="hidden sm:inline-block">
              <button
                onClick={open}
                className="btn-sear bg-sear-500 px-6 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-linen-50"
              >
                Reservieren
              </button>
            </MagneticButton>
            <button
              aria-label="Menü öffnen"
              onClick={() => setMenuOpen(true)}
              className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] lg:hidden"
            >
              <span className="h-px w-6 bg-linen-50" />
              <span className="h-px w-6 bg-linen-50" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[95] overflow-hidden bg-char-950"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <video
              src="/videos/fire-section.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover opacity-20"
            />
            <div className="cinematic-overlay grain" />

            <div className="relative z-10 flex h-full flex-col justify-between overflow-y-auto px-8 py-10">
              <div className="flex items-center justify-between">
                <a href="/" onClick={() => setMenuOpen(false)} className="font-display text-xl tracking-[0.18em] text-linen-50">
                  MAREZZO
                </a>
                <button aria-label="Menü schließen" onClick={() => setMenuOpen(false)} className="text-xs uppercase tracking-[0.2em] text-linen-200">
                  Schließen ✕
                </button>
              </div>

              <nav className="flex flex-col gap-1 py-8">
                {LINKS.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="border-b border-linen-50/10 py-4 font-display text-4xl text-linen-50"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <div>
                <div className="flex flex-col gap-1.5 border-t border-linen-50/10 pb-6 pt-6 text-xs text-linen-400">
                  <span>{restaurant.address.street} · {restaurant.address.city}</span>
                  <span className="tnum">{openingHours[0].hours} · Mo–So</span>
                  <a href={restaurant.instagram.url} target="_blank" rel="noopener noreferrer" className="text-copper-400">
                    {restaurant.instagram.handle}
                  </a>
                </div>
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    open();
                  }}
                  className="btn-sear w-full bg-sear-500 px-7 py-4 text-center text-xs font-semibold uppercase tracking-[0.22em] text-linen-50"
                >
                  Tisch reservieren
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
