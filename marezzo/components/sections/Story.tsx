"use client";

import Media from "@/components/ui/Media";
import Reveal from "@/components/ui/Reveal";
import TextReveal from "@/components/ui/TextReveal";
import { storyChapters } from "@/lib/story-data";

export default function Story() {
  return (
    <section id="geschichte" className="relative scroll-mt-20 bg-char-950">
      <div className="px-6 pt-24 md:px-16 md:pt-32">
        <Reveal>
          <p className="eyebrow mb-6">01 / Unsere Geschichte</p>
        </Reveal>
        <TextReveal
          as="h2"
          text="Alles beginnt mit Feuer."
          className="max-w-3xl font-display text-4xl leading-[1.05] text-linen-50 md:text-6xl"
        />
      </div>

      <div className="mt-16 md:mt-24">
        {storyChapters.map((chapter, i) => {
          const imageFirst = i % 2 === 1;
          return (
            <div key={chapter.label} className="grid grid-cols-1 border-t border-slate-500/20 md:grid-cols-2">
              <div className={`relative h-[50vh] md:h-[70vh] ${imageFirst ? "md:order-2" : "md:order-1"}`}>
                <Media src={chapter.image} alt={chapter.heading} className="h-full w-full" />
                <div className="cinematic-overlay" />
              </div>
              <div className={`flex flex-col justify-center px-6 py-16 md:px-16 md:py-0 ${imageFirst ? "md:order-1" : "md:order-2"}`}>
                <Reveal>
                  <p className="eyebrow mb-6">{chapter.label}</p>
                  <h3 className="font-display text-3xl leading-[1.1] text-linen-50 md:text-4xl">{chapter.heading}</h3>
                  <p className="mt-6 max-w-md text-lg leading-relaxed text-linen-300">{chapter.text}</p>
                </Reveal>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
