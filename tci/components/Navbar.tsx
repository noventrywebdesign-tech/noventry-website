"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Plätze", href: "#plaetze" },
  { label: "Training", href: "#training" },
  { label: "Mitgliedschaft", href: "#mitgliedschaft" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-green-100"
            : "bg-transparent"
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[#2D7A4F] flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm tracking-wide" style={{ fontFamily: "var(--font-inter)" }}>
                TCI
              </span>
            </div>
            <div className="hidden sm:block">
              <p
                className={`text-sm font-semibold tracking-wider transition-colors ${
                  scrolled ? "text-[#0f1a14]" : "text-white"
                }`}
                style={{ fontFamily: "var(--font-inter)" }}
              >
                TENNISCLUB
              </p>
              <p
                className={`text-xs tracking-widest transition-colors ${
                  scrolled ? "text-[#2D7A4F]" : "text-green-300"
                }`}
                style={{ fontFamily: "var(--font-inter)" }}
              >
                ISERLOHN
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide font-medium transition-colors hover:text-[#2D7A4F] ${
                  scrolled ? "text-[#374151]" : "text-white/90"
                }`}
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#mitgliedschaft"
              className="hidden lg:inline-flex items-center gap-2 bg-[#2D7A4F] text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-[#1E5C38] transition-colors tracking-wide"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Mitglied werden
            </a>

            {/* Hamburger */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menü"
            >
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  scrolled ? "bg-[#0f1a14]" : "bg-white"
                } ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  scrolled ? "bg-[#0f1a14]" : "bg-white"
                } ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  scrolled ? "bg-[#0f1a14]" : "bg-white"
                } ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#0A1F14] flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-white text-3xl font-light tracking-wide hover:text-green-300 transition-colors"
                style={{ fontFamily: "var(--font-cormorant)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#mitgliedschaft"
              className="mt-4 bg-[#2D7A4F] text-white px-10 py-3 rounded-full text-sm tracking-widest font-medium hover:bg-[#3A9660] transition-colors"
              style={{ fontFamily: "var(--font-inter)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.07 }}
              onClick={() => setMenuOpen(false)}
            >
              Mitglied werden
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
