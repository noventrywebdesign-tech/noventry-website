"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import Media from "@/components/ui/Media";

const LINES = ["Kein Gas.", "Keine Abkürzung.", "Nur Feuer."];

function FireLine({ line, index, progress }: { line: string; index: number; progress: MotionValue<number> }) {
  const start = 0.12 + index * 0.22;
  const end = start + 0.16;
  const opacity = useTransform(progress, [start, end], [0, 1]);
  const y = useTransform(progress, [start, end], [28, 0]);
  return (
    <motion.h2 style={{ opacity, y }} className="font-display text-5xl uppercase tracking-tight text-linen-50 md:text-8xl">
      {line}
    </motion.h2>
  );
}

export default function TheFire() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
  const brightness = useTransform(scrollYProgress, [0, 0.5, 1], [0.55, 1, 0.75]);
  const filter = useTransform(brightness, (b) => `brightness(${b})`);

  return (
    <section id="feuer" ref={ref} className="relative h-[220vh] bg-char-950">
      <div className="grain sticky top-0 h-screen overflow-hidden">
        <motion.div style={{ scale, filter }} className="absolute inset-0">
          <Media videoSrc="/videos/fire-section.mp4" poster="/images/fire-poster.jpg" alt="Offene Flamme bei MAREZZO" className="h-full w-full" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-char-950/70 via-transparent to-char-950/30" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center gap-2 px-6 text-center md:gap-4">
          {LINES.map((line, i) => (
            <FireLine key={line} line={line} index={i} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}
