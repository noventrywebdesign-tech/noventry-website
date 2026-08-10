"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Media from "@/components/ui/Media";
import Reveal from "@/components/ui/Reveal";
import { origins } from "@/lib/origin-data";

const FACT_ROWS: { key: keyof (typeof origins)[number]; label: string }[] = [
  { key: "region", label: "Region" },
  { key: "breed", label: "Rasse" },
  { key: "feed", label: "Fütterung" },
  { key: "cuts", label: "Cuts" },
  { key: "doneness", label: "Gargrad" },
];

export default function Origin() {
  const [active, setActive] = useState(0);
  const current = origins[active];

  return (
    <section id="herkunft" className="relative scroll-mt-20 bg-char-900 px-6 py-24 md:px-16 md:py-32">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <p className="eyebrow mb-6">05 / Herkunft</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="max-w-2xl font-display text-4xl leading-[1.05] text-linen-50 md:text-6xl">
            Vier Länder. Ein Standard.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <ul className="border-t border-slate-500/25">
              {origins.map((o, i) => (
                <li key={o.code} className="border-b border-slate-500/25">
                  <button
                    data-cursor="ENTDECKEN"
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    className="flex w-full items-center justify-between py-6 text-left transition-colors"
                  >
                    <span
                      className={`font-display text-4xl transition-colors md:text-6xl ${
                        active === i ? "text-linen-50" : "text-linen-50/30"
                      }`}
                    >
                      {o.country}
                    </span>
                    <span className={`text-xs uppercase tracking-[0.2em] transition-colors ${active === i ? "text-copper-400" : "text-linen-400/40"}`}>
                      {o.code}
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            <AnimatePresence mode="wait">
              <motion.dl
                key={current.code}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-8 divide-y divide-slate-500/15"
              >
                {FACT_ROWS.map((row) => (
                  <div key={row.label} className="flex items-baseline justify-between gap-6 py-2.5">
                    <dt className="text-xs uppercase tracking-[0.14em] text-linen-400">{row.label}</dt>
                    <dd className="text-right text-sm text-linen-100">{current[row.key]}</dd>
                  </div>
                ))}
              </motion.dl>
            </AnimatePresence>
          </div>

          <div className="relative h-[50vh] overflow-hidden md:h-[65vh]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.code}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Media src={current.image} alt={current.country} className="h-full w-full" />
                <div className="cinematic-overlay" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <p className="text-sm font-medium uppercase tracking-[0.14em] text-copper-400">{current.marbling}</p>
                  <p className="mt-2 max-w-sm text-lg text-linen-50">{current.taste}</p>
                  <p className="mt-2 max-w-sm text-sm text-linen-300">{current.note}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
