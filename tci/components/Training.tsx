"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const courses = [
  {
    title: "Tennis-Schnupperkurs",
    tag: "EINSTEIGER",
    price: "75",
    period: "/ Kurs",
    image:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=800&q=80",
    description:
      "Lerne Tennis von Grund auf in entspannter Atmosphäre. Wöchentliches Gruppentraining mit erfahrenen Trainern — der perfekte Einstieg in unseren Club.",
    features: [
      "Mittwochs ab 19:00 Uhr",
      "Gruppentraining",
      "8 Außenplätze inklusive",
      "Keine Vorkenntnisse nötig",
    ],
    cta: "Jetzt anmelden",
    highlight: false,
  },
  {
    title: "Tennis-Camp",
    tag: "INTENSIV",
    price: "60",
    period: "/ Tag",
    image:
      "https://images.unsplash.com/photo-1474033600978-4ccfc04b0c41?auto=format&fit=crop&w=800&q=80",
    description:
      "Intensives Training für alle Spielstärken. Voller Tag auf dem Platz mit professioneller Begleitung — Snacks & Getränke inklusive.",
    features: [
      "Ganztages-Training",
      "Alle Spielstärken",
      "Snacks & Getränke inkl.",
      "Professionelle Coaches",
    ],
    cta: "Zum Camp anmelden",
    highlight: true,
  },
];

export default function Training() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="training" className="py-28 bg-[#F0FAF5]" ref={ref}>
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
              Training & Kurse
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
            Lerne, verbessere dich,{" "}
            <em className="text-[#2D7A4F] not-italic font-light">begeistere andere</em>
          </h2>
        </motion.div>

        {/* Course Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              className={`rounded-2xl overflow-hidden border ${
                course.highlight
                  ? "border-[#2D7A4F] shadow-xl shadow-green-900/10"
                  : "border-gray-100"
              } bg-white`}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span
                    className={`text-[10px] tracking-widest px-3 py-1 rounded-full font-medium ${
                      course.highlight
                        ? "bg-[#2D7A4F] text-white"
                        : "bg-white/20 text-white backdrop-blur-sm border border-white/20"
                    }`}
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {course.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3
                    className="text-[#0f1a14]"
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "1.75rem",
                      fontWeight: 500,
                    }}
                  >
                    {course.title}
                  </h3>
                  <div className="text-right flex-shrink-0 ml-4">
                    <span
                      className="text-[#2D7A4F] font-light leading-none"
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        fontSize: "2.2rem",
                      }}
                    >
                      {course.price} €
                    </span>
                    <p
                      className="text-xs text-[#9CA3AF] tracking-wide"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {course.period}
                    </p>
                  </div>
                </div>

                <p
                  className="text-[#374151] text-sm leading-relaxed mb-6"
                  style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
                >
                  {course.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {course.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-[#D6F0E3] flex items-center justify-center flex-shrink-0">
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#2D7A4F" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span
                        className="text-sm text-[#374151]"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#kontakt"
                  className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                    course.highlight
                      ? "bg-[#2D7A4F] text-white hover:bg-[#1E5C38]"
                      : "border border-[#2D7A4F] text-[#2D7A4F] hover:bg-[#2D7A4F] hover:text-white"
                  }`}
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {course.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
