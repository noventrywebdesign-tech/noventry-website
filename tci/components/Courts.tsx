"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const courts = [
  {
    type: "Außenplätze",
    count: 13,
    description:
      "Gepflegte Sand- und Hartplätze direkt am Seilersee mit wunderschönem Naturblick und bester Spielqualität.",
    image:
      "https://images.unsplash.com/photo-1556056504-5c7696c4c28d?auto=format&fit=crop&w=800&q=80",
    features: ["Sandplätze", "Flutlicht", "Sonnenterrasse", "Online-Buchung"],
    tag: "OUTDOOR",
  },
  {
    type: "Hallenplätze",
    count: 2,
    description:
      "Moderne Hallenplätze für das ganzjährige Training — unabhängig vom Wetter spielen und sich verbessern.",
    image:
      "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80",
    features: ["Ganzjährig", "Klimatisiert", "Online-Buchung", "Professionelles Licht"],
    tag: "INDOOR",
  },
];

export default function Courts() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="plaetze" className="py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#2D7A4F]" />
            <span
              className="text-[#2D7A4F] text-xs tracking-widest uppercase font-medium"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Unsere Anlagen
            </span>
            <div className="w-8 h-px bg-[#2D7A4F]" />
          </div>
          <h2
            className="text-[#0f1a14]"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
            }}
          >
            Erstklassige Plätze,{" "}
            <em className="text-[#2D7A4F] not-italic font-light">zu jeder Jahreszeit</em>
          </h2>
        </motion.div>

        {/* Court Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {courts.map((court, i) => (
            <motion.div
              key={court.type}
              className="group relative rounded-2xl overflow-hidden bg-[#0A1F14] aspect-[4/3] cursor-default"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              {/* Background Image */}
              <Image
                src={court.image}
                alt={court.type}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F14]/95 via-[#0A1F14]/50 to-[#0A1F14]/10" />

              {/* Tag */}
              <div className="absolute top-6 left-6">
                <span
                  className="text-[10px] tracking-widest bg-[#2D7A4F] text-white px-3 py-1 rounded-full font-medium"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {court.tag}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-end gap-3 mb-3">
                  <span
                    className="text-white leading-none"
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "clamp(3rem, 5vw, 4rem)",
                      fontWeight: 300,
                    }}
                  >
                    {court.count}
                  </span>
                  <span
                    className="text-green-300 text-lg mb-2 font-light"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {court.type}
                  </span>
                </div>

                <p
                  className="text-white/60 text-sm leading-relaxed mb-5"
                  style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
                >
                  {court.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {court.features.map((f) => (
                    <span
                      key={f}
                      className="text-[11px] tracking-wide bg-white/10 text-white/80 px-3 py-1 rounded-full border border-white/10"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Booking CTA */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href="https://www.tc-iserlohn.de"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#2D7A4F] text-[#2D7A4F] text-sm font-medium px-8 py-3 rounded-full hover:bg-[#2D7A4F] hover:text-white transition-all duration-300 tracking-wide"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Platz online buchen
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
