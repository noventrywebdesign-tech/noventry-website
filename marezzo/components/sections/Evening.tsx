"use client";

import Media from "@/components/ui/Media";
import Reveal from "@/components/ui/Reveal";
import TextReveal from "@/components/ui/TextReveal";
import { eveningMoments } from "@/lib/evening-data";

export default function Evening() {
  return (
    <section className="relative bg-char-950 px-6 py-24 md:px-16 md:py-32">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-16 md:grid-cols-2 md:gap-10">
        <div>
          <Reveal>
            <p className="eyebrow mb-6">08 / Ein Abend am Feuer</p>
          </Reveal>
          <TextReveal as="h2" text="Mehr als ein Steak." className="font-display text-4xl leading-[1.05] text-linen-50 md:text-6xl" />

          <div className="mt-14 divide-y divide-slate-500/20 border-t border-slate-500/20">
            {eveningMoments.map((m, i) => (
              <Reveal key={m.label} delay={i * 0.04}>
                <div className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-8">
                  <p className="w-40 shrink-0 font-display text-lg text-copper-400">{m.label}</p>
                  <p className="text-base leading-relaxed text-linen-300">{m.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="relative grid grid-rows-2 gap-4">
          <div className="relative h-[32vh] overflow-hidden md:h-[38vh]">
            <Media src="/images/fire-tools.jpg" alt="Die offene Feuerküche bei MAREZZO" className="h-full w-full" />
            <div className="cinematic-overlay" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-[26vh] overflow-hidden md:h-[30vh]">
              <Media src="/images/interior-bar.jpg" alt="Die Bar bei MAREZZO" className="h-full w-full" />
              <div className="cinematic-overlay" />
            </div>
            <div className="relative h-[26vh] overflow-hidden md:h-[30vh]">
              <Media src="/images/menu-dessert.jpg" alt="Dessert zum Ausklang des Abends" className="h-full w-full" />
              <div className="cinematic-overlay" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
