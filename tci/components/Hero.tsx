"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=2070&q=80"
        alt="Tennisplatz Iserlohn"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F14]/90 via-[#0A1F14]/70 to-[#0A1F14]/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F14]/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-8 h-px bg-[#2D7A4F]" />
            <span
              className="text-green-300 text-xs tracking-widest font-medium uppercase"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Iserlohn · Gegründet 1960
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-white leading-tight mb-6"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              fontWeight: 400,
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Wo Tennis zur{" "}
            <em className="text-[#7ECFA0] not-italic">Leidenschaft</em>
            <br />
            wird.
          </motion.h1>

          {/* Subline */}
          <motion.p
            className="text-white/70 text-lg leading-relaxed mb-10 max-w-lg"
            style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            Direkt am Seilersee — 13 Außenplätze, 2 Hallenplätze und eine
            Gemeinschaft, die Tennis lebt. Willkommen beim TCI.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <a
              href="#mitgliedschaft"
              className="inline-flex items-center justify-center gap-2 bg-[#2D7A4F] text-white font-medium px-8 py-4 rounded-full hover:bg-[#3A9660] transition-all duration-300 hover:shadow-lg hover:shadow-green-900/30 text-sm tracking-wide"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Mitglied werden
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#plaetze"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 text-sm tracking-wide backdrop-blur-sm"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Plätze entdecken
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <span
          className="text-white/40 text-xs tracking-widest uppercase"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Scroll
        </span>
        <motion.div
          className="w-px h-10 bg-white/20"
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
