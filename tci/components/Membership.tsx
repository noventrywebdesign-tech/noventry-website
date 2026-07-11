"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const plans = [
  {
    name: "Junior",
    subtitle: "Bis 18 Jahre",
    price: "Auf Anfrage",
    priceNote: "",
    features: [
      "Alle Außenplätze",
      "Jugend-Trainingsprogramm",
      "Teilnahme an Jugendturnieren",
      "Gemeinschaftsevents",
    ],
    cta: "Anfragen",
    highlight: false,
  },
  {
    name: "Aktiv",
    subtitle: "Erwachsene",
    price: "Auf Anfrage",
    priceNote: "",
    features: [
      "13 Außenplätze",
      "2 Hallenplätze",
      "Teilnahme an Vereinsturnieren",
      "Mannschaftsspiel möglich",
      "Restaurant-Vergünstigungen",
      "Online-Buchungssystem",
    ],
    cta: "Mitglied werden",
    highlight: true,
  },
  {
    name: "Familie",
    subtitle: "2 Erwachsene + Kinder",
    price: "Auf Anfrage",
    priceNote: "",
    features: [
      "Alle Außen- & Hallenplätze",
      "Kinder- & Jugendtraining",
      "Familien-Turniere",
      "Gemeinschaftsevents",
      "Restaurant-Vergünstigungen",
    ],
    cta: "Anfragen",
    highlight: false,
  },
];

export default function Membership() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="mitgliedschaft" className="py-28 bg-white" ref={ref}>
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
              Mitgliedschaft
            </span>
            <div className="w-8 h-px bg-[#2D7A4F]" />
          </div>
          <h2
            className="text-[#0f1a14] mb-4"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
            }}
          >
            Werde Teil{" "}
            <em className="text-[#2D7A4F] not-italic font-light">unserer Familie</em>
          </h2>
          <p
            className="text-[#6B7280] max-w-lg mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-inter)", fontWeight: 300, fontSize: "0.95rem" }}
          >
            Für jeden das passende Angebot — ob Einsteiger, Profi oder Familie.
            Kontaktiere uns für genaue Beitragsinformationen.
          </p>
        </motion.div>

        {/* Plans */}
        <div className="grid lg:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.highlight
                  ? "bg-[#1A4A2E] text-white shadow-2xl shadow-green-900/20 lg:-mt-4 lg:mb-4"
                  : "bg-[#F8F6F1] text-[#0f1a14]"
              }`}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span
                    className="bg-[#2D7A4F] text-white text-[10px] tracking-widest px-4 py-1 rounded-full font-medium"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    BELIEBT
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`mb-1 ${plan.highlight ? "text-white" : "text-[#0f1a14]"}`}
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1.8rem",
                    fontWeight: 500,
                  }}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-xs tracking-wide ${plan.highlight ? "text-green-300" : "text-[#9CA3AF]"}`}
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {plan.subtitle}
                </p>
              </div>

              <div className="mb-6 pb-6 border-b border-current/10">
                <p
                  className={`font-light ${plan.highlight ? "text-green-200" : "text-[#2D7A4F]"}`}
                  style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.6rem" }}
                >
                  {plan.price}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div
                      className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.highlight ? "bg-[#2D7A4F]" : "bg-[#D6F0E3]"
                      }`}
                    >
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke={plan.highlight ? "#fff" : "#2D7A4F"} strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span
                      className={`text-sm ${plan.highlight ? "text-green-100" : "text-[#374151]"}`}
                      style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#kontakt"
                className={`w-full flex items-center justify-center py-3.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                  plan.highlight
                    ? "bg-white text-[#1A4A2E] hover:bg-green-50"
                    : "bg-[#2D7A4F] text-white hover:bg-[#1E5C38]"
                }`}
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
