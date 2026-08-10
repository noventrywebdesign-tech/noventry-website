"use client";

import Media from "@/components/ui/Media";
import Reveal from "@/components/ui/Reveal";
import TextReveal from "@/components/ui/TextReveal";
import Counter from "@/components/ui/Counter";

export default function Philosophy() {
  return (
    <section id="story" className="relative scroll-mt-20 bg-char-950">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-[60vh] md:sticky md:top-0 md:h-screen">
          <Media videoSrc="/videos/philosophy-fire.mp4" poster="/images/philosophy-poster.jpg" alt="Coal bed and open flame at Marezzo" className="h-full w-full" />
          <div className="cinematic-overlay" />
        </div>

        <div className="relative flex flex-col justify-center px-6 py-24 md:px-16 md:py-32">
          <Reveal>
            <p className="eyebrow mb-6">01 / Philosophy</p>
          </Reveal>

          <TextReveal
            as="h2"
            text="Fire is our first ingredient."
            className="font-display text-4xl leading-[1.05] tracking-tight text-linen-50 md:text-6xl"
          />

          <Reveal delay={0.2}>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-linen-300">
              No gas. No shortcuts. Every cut at Marezzo answers to oak and applewood coal, tended by hand through
              every service — the same way it&rsquo;s been done for a thousand years, because nothing since has
              done it better.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-linen-300">
              What the flame doesn&rsquo;t finish, time does. Six weeks in our cold room, a mineral crust, a
              flavour that gas and steel can&rsquo;t reach.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-slate-500/25 pt-8">
              <div>
                <p className="font-display text-4xl text-copper-400">
                  <Counter to={45} suffix="d" />
                </p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-[0.16em] text-linen-400">Dry Aged</p>
              </div>
              <div>
                <p className="font-display text-4xl text-copper-400">
                  <Counter to={600} suffix="°" />
                </p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-[0.16em] text-linen-400">Coal Bed</p>
              </div>
              <div>
                <p className="font-display text-4xl text-copper-400">
                  <Counter to={4} />
                </p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-[0.16em] text-linen-400">Origins</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
