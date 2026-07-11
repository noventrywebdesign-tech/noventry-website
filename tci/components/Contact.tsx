"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const contactInfo = [
  {
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: "Adresse",
    value: "Seilerblick 24\n58636 Iserlohn",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: "Telefon",
    value: "02371 23366",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: "E-Mail",
    value: "info@tc-iserlohn.de",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Öffnungszeiten",
    value: "Mo–So: 15:00 – 23:00 Uhr",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="kontakt" className="py-28 bg-[#0A1F14]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#2D7A4F]" />
              <span
                className="text-[#7ECFA0] text-xs tracking-widest uppercase font-medium"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Kontakt
              </span>
            </div>
            <h2
              className="text-white mb-6 leading-tight"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
              }}
            >
              Wir freuen uns{" "}
              <em className="text-[#7ECFA0] not-italic font-light">auf dich</em>
            </h2>
            <p
              className="text-white/50 text-sm leading-relaxed mb-12"
              style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
            >
              Fragen zur Mitgliedschaft, Platz-Buchung oder unserem Kursangebot?
              Komm einfach vorbei oder schreib uns — wir melden uns schnell zurück.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#1A4A2E] flex items-center justify-center flex-shrink-0 text-[#7ECFA0]">
                    {item.icon}
                  </div>
                  <div>
                    <p
                      className="text-[#7ECFA0] text-xs tracking-widest uppercase mb-1"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="text-white/80 text-sm whitespace-pre-line"
                      style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
                    >
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {submitted ? (
              <div className="bg-[#1A4A2E] rounded-2xl p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-[#2D7A4F] flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3
                  className="text-white text-2xl mb-2"
                  style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
                >
                  Vielen Dank!
                </h3>
                <p
                  className="text-white/50 text-sm"
                  style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
                >
                  Wir melden uns so schnell wie möglich bei dir.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#1A4A2E] rounded-2xl p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-[#7ECFA0] text-xs tracking-widest uppercase mb-2"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      Vorname
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Max"
                      className="w-full bg-[#0A1F14] border border-white/10 text-white placeholder-white/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2D7A4F] transition-colors"
                      style={{ fontFamily: "var(--font-inter)" }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-[#7ECFA0] text-xs tracking-widest uppercase mb-2"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      Nachname
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Mustermann"
                      className="w-full bg-[#0A1F14] border border-white/10 text-white placeholder-white/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2D7A4F] transition-colors"
                      style={{ fontFamily: "var(--font-inter)" }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-[#7ECFA0] text-xs tracking-widest uppercase mb-2"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    E-Mail
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="max@example.de"
                    className="w-full bg-[#0A1F14] border border-white/10 text-white placeholder-white/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2D7A4F] transition-colors"
                    style={{ fontFamily: "var(--font-inter)" }}
                  />
                </div>

                <div>
                  <label
                    className="block text-[#7ECFA0] text-xs tracking-widest uppercase mb-2"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Interesse
                  </label>
                  <select
                    className="w-full bg-[#0A1F14] border border-white/10 text-white/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2D7A4F] transition-colors appearance-none"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    <option value="">Bitte wählen…</option>
                    <option>Mitgliedschaft</option>
                    <option>Schnupperkurs</option>
                    <option>Tennis-Camp</option>
                    <option>Platz-Buchung</option>
                    <option>Sonstiges</option>
                  </select>
                </div>

                <div>
                  <label
                    className="block text-[#7ECFA0] text-xs tracking-widest uppercase mb-2"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    Nachricht
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Deine Nachricht…"
                    className="w-full bg-[#0A1F14] border border-white/10 text-white placeholder-white/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#2D7A4F] transition-colors resize-none"
                    style={{ fontFamily: "var(--font-inter)" }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#2D7A4F] text-white py-4 rounded-full text-sm font-medium tracking-wide hover:bg-[#3A9660] transition-all duration-300 hover:shadow-lg hover:shadow-green-900/30"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Nachricht senden
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
