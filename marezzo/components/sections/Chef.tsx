"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Media from "@/components/ui/Media";
import Reveal from "@/components/ui/Reveal";
import { chef } from "@/lib/restaurant-data";

export default function Chef() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const topY = useTransform(scrollYProgress, [0, 1], [60, -140]);
  const bottomY = useTransform(scrollYProgress, [0, 1], [-60, 140]);

  return (
    <section ref={ref} className="relative flex h-[130vh] items-center justify-center overflow-hidden bg-char-950">
      <div className="absolute inset-x-6 inset-y-16 md:inset-x-24 md:inset-y-24">
        <Media src="/images/chef-portrait.jpg" alt={`${chef.firstName} ${chef.lastName}, Executive Chef at Marezzo`} className="h-full w-full grayscale-[15%]" />
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
        <Reveal className="max-w-md text-center">
          <p className="eyebrow mb-4 justify-center">{chef.title}</p>
          <p className="text-sm leading-relaxed text-linen-200 md:text-base">{chef.bio}</p>
        </Reveal>
      </div>
    </section>
  );
}
