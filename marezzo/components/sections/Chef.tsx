"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import Media from "@/components/ui/Media";
import { chef, chefStory } from "@/lib/restaurant-data";

const TOTAL = chefStory.length;

function ChapterText({ index }: { index: number }) {
  const chapter = chefStory[index];
  return (
    <motion.div
      key={chapter.label}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -14 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-md text-center"
    >
      <p className="eyebrow mb-4 justify-center">{chapter.label}</p>
      <p className="text-sm leading-relaxed text-linen-200 md:text-base">{chapter.text}</p>
    </motion.div>
  );
}

export default function Chef() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [active, setActive] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(TOTAL - 1, Math.max(0, Math.floor(v * TOTAL)));
    setActive((prev) => (prev === idx ? prev : idx));
  });

  const topY = useTransform(scrollYProgress, [0, 1], [40, -100]);
  const bottomY = useTransform(scrollYProgress, [0, 1], [-40, 100]);

  return (
    <section ref={ref} className="relative h-[560vh] bg-char-950">
      <div className="grain sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-x-6 inset-y-16 md:inset-x-24 md:inset-y-24">
          <Media src="/images/chef-portrait.jpg" alt={`${chef.firstName} ${chef.lastName}, Executive Chef bei MAREZZO`} className="h-full w-full grayscale-[15%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-char-950/70 via-transparent to-char-950/40" />
        </div>

        <motion.p
          style={{ y: topY }}
          className="pointer-events-none absolute top-8 z-10 select-none font-display text-[16vw] leading-none tracking-tight text-linen-50 mix-blend-difference md:top-4 md:text-[9vw]"
        >
          {chef.firstName}
        </motion.p>
        <motion.p
          style={{ y: bottomY }}
          className="pointer-events-none absolute bottom-8 z-10 select-none font-display text-[16vw] leading-none tracking-tight text-linen-50 mix-blend-difference md:bottom-4 md:text-[9vw]"
        >
          {chef.lastName}
        </motion.p>

        <div className="absolute inset-x-0 bottom-24 z-10 flex justify-center px-6 md:bottom-16">
          <AnimatePresence mode="wait" initial={false}>
            <ChapterText key={active} index={active} />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
