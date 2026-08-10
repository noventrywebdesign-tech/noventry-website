"use client";

import Media from "@/components/ui/Media";
import Reveal from "@/components/ui/Reveal";
import TextReveal from "@/components/ui/TextReveal";

export default function Cellar() {
  return (
    <section className="relative overflow-hidden bg-midnight-950 px-6 py-24 md:px-16 md:py-36">
      <div className="pointer-events-none absolute inset-0 opacity-40" style={{ background: "radial-gradient(ellipse 60% 45% at 85% 15%, rgba(214,138,82,0.10), transparent 60%)" }} />

      <div className="relative mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-10">
        <div>
          <Reveal>
            <p className="eyebrow mb-6">04 / After the Fire</p>
          </Reveal>
          <TextReveal as="h2" text="The Cellar." className="font-display text-5xl leading-[1.02] text-linen-50 md:text-8xl" />
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-linen-300">
              A four-hundred-bin list, chosen to answer smoke and char rather than compete with it — Old World
              reds, single-cask whiskey, and a sommelier who will always ask what&rsquo;s on your plate before
              she recommends what&rsquo;s in your glass.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <a
              href="/menu#wine"
              className="mt-8 inline-flex items-center border border-linen-50/25 px-7 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-linen-50 transition-colors hover:border-copper-400"
            >
              View the Cellar List
            </a>
          </Reveal>
        </div>

        <div className="relative grid h-[68vh] grid-cols-2 grid-rows-2 gap-4 md:h-[75vh]">
          <div className="relative row-span-2 overflow-hidden">
            <Media src="/images/wine-cellar.jpg" alt="Marezzo's dark wine cellar" className="h-full w-full" />
            <div className="midnight-overlay" />
          </div>
          <div className="relative mt-10 overflow-hidden">
            <Media src="/images/wine-pour.jpg" alt="A pour from the cellar list" className="h-full w-full" />
            <div className="midnight-overlay" />
          </div>
          <div className="relative overflow-hidden">
            <Media src="/images/whiskey-glass.jpg" alt="A whiskey, neat, at Marezzo's bar" className="h-full w-full" />
            <div className="midnight-overlay" />
          </div>
        </div>
      </div>
    </section>
  );
}
