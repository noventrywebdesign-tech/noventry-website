"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="ueber-uns" className="py-28 bg-[#F8F6F1]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#2D7A4F]" />
              <span
                className="text-[#2D7A4F] text-xs tracking-widest uppercase font-medium"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Über uns
              </span>
            </div>

            <h2
              className="text-[#0f1a14] mb-6 leading-tight"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
                fontWeight: 400,
              }}
            >
              Mehr als ein Verein —<br />
              <em className="text-[#2D7A4F] not-italic font-light">eine Gemeinschaft</em>
            </h2>

            <div
              className="space-y-4 text-[#374151] leading-relaxed"
              style={{ fontFamily: "var(--font-inter)", fontWeight: 300 }}
            >
              <p>
                Seit über 60 Jahren ist der Tennisclub Iserlohn e.V. fest im Herzen
                der Stadt verwurzelt. Direkt am idyllischen Seilersee gelegen, bietet
                unser Club nicht nur erstklassige Tennisanlagen, sondern auch ein
                Zuhause für alle, die den Sport lieben.
              </p>
              <p>
                Mit 13 gepflegten Außenplätzen und 2 modernen Hallenplätzen bieten wir
                das ganze Jahr über optimale Bedingungen. Unsere Mannschaften spielen
                bis in die Regionalliga — ein Zeugnis für die Qualität unserer Spieler
                und unseres Trainings.
              </p>
              <p>
                Die Anlage mit der Sonnenterrasse und dem Restaurant{" "}
                <strong className="text-[#2D7A4F] font-medium">Pane e Vino</strong>{" "}
                macht den TCI zu mehr als einem Sportplatz — es ist ein Ort zum Wohlfühlen.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-6">
              {[
                { icon: "📍", text: "Am Seilersee, Iserlohn" },
                { icon: "🏆", text: "Regionalliga-Mannschaft" },
                { icon: "🍽️", text: "Restaurant Pane e Vino" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2">
                  <span className="text-base">{item.icon}</span>
                  <span
                    className="text-sm text-[#374151]"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1599586120429-48281b6f0ece?auto=format&fit=crop&w=1000&q=80"
                alt="Tennisanlage TCI Iserlohn"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F14]/40 to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-5 shadow-xl border border-green-100">
              <p
                className="text-4xl font-light text-[#2D7A4F] leading-none mb-1"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                1960
              </p>
              <p
                className="text-xs tracking-widest text-[#6B7280] uppercase"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Gegründet
              </p>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full border-2 border-[#A3D977]/40" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
