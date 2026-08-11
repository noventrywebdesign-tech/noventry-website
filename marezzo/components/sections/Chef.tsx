"use client";

import Media from "@/components/ui/Media";
import Reveal from "@/components/ui/Reveal";
import TextReveal from "@/components/ui/TextReveal";
import { chef, chefStory } from "@/lib/restaurant-data";

// Rebuilt for legibility: the previous version ran the chef's name as giant
// mix-blend-difference type directly over the portrait, which read as
// striking but made the story genuinely hard to read (text competing with
// the portrait's own detail for contrast). Text now lives in its own solid
// column next to a sticky portrait — same "portrait stays put, story scrolls
// past" idea as components/sections/Philosophy.tsx, just never overlapping
// the image itself, so contrast is never in question.
export default function Chef() {
  return (
    <section className="relative bg-char-950">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-[70vh] md:sticky md:top-0 md:h-screen">
          <Media src="/images/chef-portrait.jpg" alt={`${chef.firstName} ${chef.lastName}, Executive Chef bei MAREZZO`} className="h-full w-full" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-char-950/70 via-transparent to-transparent" />
        </div>

        <div className="relative flex flex-col justify-center px-6 py-24 md:px-16 md:py-32">
          <Reveal>
            <p className="eyebrow mb-6">{chef.title}</p>
          </Reveal>

          <TextReveal
            as="h2"
            text={`${chef.firstName} ${chef.lastName}`}
            className="font-display text-5xl leading-[1.02] text-linen-50 md:text-7xl"
          />

          <Reveal delay={0.15}>
            <p className="mt-8 max-w-md font-accent text-2xl italic leading-snug text-copper-400 md:text-3xl">
              „{chef.quote}&ldquo;
            </p>
          </Reveal>

          <div className="mt-16 max-w-md space-y-12 border-t border-linen-50/10 pt-12">
            {chefStory.map((chapter, i) => (
              <Reveal key={chapter.label} delay={0.1 + i * 0.08}>
                <p className="eyebrow mb-3">{chapter.index} / {chapter.label}</p>
                <p className="text-lg leading-[1.65] text-linen-50">{chapter.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
