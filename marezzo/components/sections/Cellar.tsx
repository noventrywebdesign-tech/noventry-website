"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Media from "@/components/ui/Media";
import Reveal from "@/components/ui/Reveal";
import TextReveal from "@/components/ui/TextReveal";
import { cellarHighlights, cutPairings, digestifs } from "@/lib/cellar-data";

function CutSelector() {
  const [active, setActive] = useState(0);
  const current = cutPairings[active];

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
      <ul className="border-t border-linen-50/15">
        {cutPairings.map((p, i) => (
          <li key={p.cut} className="border-b border-linen-50/15">
            <button
              data-cursor="ENTDECKEN"
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              className="flex w-full items-center justify-between py-5 text-left transition-colors"
            >
              <span className={`font-display text-3xl transition-colors md:text-5xl ${active === i ? "text-linen-50" : "text-linen-50/30"}`}>
                {p.cut}
              </span>
              <span className={`h-1.5 w-1.5 rounded-full transition-colors ${active === i ? "bg-copper-400" : "bg-transparent"}`} />
            </button>
          </li>
        ))}
      </ul>

      <div className="relative h-[42vh] overflow-hidden md:h-[52vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.cut}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Media src={current.image} alt={`${current.bottle}, empfohlen zum ${current.cut}`} className="h-full w-full" />
            <div className="midnight-overlay" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-copper-400">{current.region}</p>
              <p className="mt-2 font-accent text-2xl italic text-linen-50">{current.bottle}</p>
              <p className="mt-2 max-w-sm text-sm text-linen-300">{current.recommendation}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function Cellar() {
  return (
    <section id="keller" className="relative scroll-mt-20 overflow-hidden bg-midnight-950 px-6 py-24 md:px-16 md:py-36">
      <div className="pointer-events-none absolute inset-0 opacity-40" style={{ background: "radial-gradient(ellipse 60% 45% at 85% 15%, rgba(214,138,82,0.10), transparent 60%)" }} />

      <div className="relative mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-10">
        <div>
          <Reveal>
            <p className="eyebrow mb-6">06 / Nach dem Feuer</p>
          </Reveal>
          <TextReveal as="h2" text="Der Keller." className="font-display text-5xl leading-[1.02] text-linen-50 md:text-8xl" />
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-linen-300">
              Eine kuratierte Weinauswahl, speziell abgestimmt auf kräftige Röstaromen, Rauch und Fett — vierhundert
              Positionen, alte und neue Welt, dazu eine Sommelière, die immer erst fragt, was auf dem Teller steht,
              bevor sie empfiehlt, was ins Glas kommt.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <a
              href="/speisekarte#wein"
              className="mt-8 inline-flex items-center border border-linen-50/25 px-7 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-linen-50 transition-colors hover:border-copper-400"
            >
              Zur Weinkarte
            </a>
          </Reveal>
        </div>

        <div className="relative grid h-[68vh] grid-cols-2 grid-rows-2 gap-4 md:h-[75vh]">
          <div className="relative row-span-2 overflow-hidden">
            <Media src="/images/wine-cellar.jpg" alt="Der dunkle Weinkeller von MAREZZO" className="h-full w-full" />
            <div className="midnight-overlay" />
          </div>
          <div className="relative mt-10 overflow-hidden">
            <Media src="/images/wine-pour.jpg" alt="Ein Wein aus der Kellerkarte wird eingeschenkt" className="h-full w-full" />
            <div className="midnight-overlay" />
          </div>
          <div className="relative overflow-hidden">
            <Media src="/images/whiskey-glass.jpg" alt="Ein Whisky pur an der Bar von MAREZZO" className="h-full w-full" />
            <div className="midnight-overlay" />
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-24 max-w-[1600px] border-t border-linen-50/10 pt-16">
        <Reveal>
          <p className="mb-6 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-linen-400">Digitale Weinberatung</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h3 className="max-w-2xl font-display text-3xl leading-[1.1] text-linen-50 md:text-5xl">
            Der richtige Wein beginnt mit dem Cut.
          </h3>
        </Reveal>
        <div className="mt-12">
          <CutSelector />
        </div>
      </div>

      <div className="relative mx-auto mt-20 grid max-w-[1600px] grid-cols-1 gap-14 border-t border-linen-50/10 pt-16 md:grid-cols-2 md:gap-10">
        <div>
          <Reveal>
            <p className="mb-6 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-linen-400">Ausgewählte Flaschen</p>
          </Reveal>
          <ul className="divide-y divide-linen-50/10 border-t border-linen-50/10">
            {cellarHighlights.map((h, i) => (
              <Reveal key={h.category} as="li" delay={i * 0.03}>
                <div className="flex items-baseline justify-between gap-6 py-3.5">
                  <span className="text-sm uppercase tracking-[0.1em] text-copper-400/90">{h.category}</span>
                  <span className="font-accent text-lg italic text-linen-100">{h.label}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <div>
          <Reveal>
            <p className="mb-6 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-linen-400">Nach dem Essen</p>
          </Reveal>
          <ul className="divide-y divide-linen-50/10 border-t border-linen-50/10">
            {digestifs.map((d, i) => (
              <Reveal key={d.name} as="li" delay={i * 0.03}>
                <div className="flex items-baseline justify-between gap-6 py-3.5">
                  <span className="font-accent text-lg italic text-linen-100">{d.name}</span>
                  <span className="text-right text-sm text-linen-400">{d.note}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
