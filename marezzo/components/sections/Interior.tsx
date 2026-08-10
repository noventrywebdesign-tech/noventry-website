"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import Media from "@/components/ui/Media";
import { layerRange } from "@/lib/layer-transform";

const FRAMES = [
  { src: "/images/interior-wide.jpg", alt: "Der Hauptraum bei MAREZZO" },
  { src: "/images/interior-table.jpg", alt: "Ein Tisch, eingedeckt bei Kerzenlicht" },
  { src: "/images/interior-bar.jpg", alt: "Die Bar bei MAREZZO" },
];
const TOTAL = FRAMES.length;
const ZONE = 0.08;

function Frame({ src, alt, index, progress }: { src: string; alt: string; index: number; progress: MotionValue<number> }) {
  const { range, output } = layerRange(index, TOTAL, ZONE);
  const opacity = useTransform(progress, range, output);
  const segStart = index / TOTAL;
  const segEnd = (index + 1) / TOTAL;
  const scale = useTransform(progress, [segStart, segEnd], [1, 1.18]);

  return (
    <motion.div style={{ opacity }} className="absolute inset-0">
      <motion.div style={{ scale }} className="h-full w-full">
        <Media src={src} alt={alt} className="h-full w-full" />
      </motion.div>
      <div className="cinematic-overlay" />
    </motion.div>
  );
}

export default function Interior() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section ref={ref} className="relative h-[300vh] bg-char-950">
      <div className="sticky top-0 h-screen overflow-hidden">
        {FRAMES.map((f, i) => (
          <Frame key={f.src} src={f.src} alt={f.alt} index={i} progress={scrollYProgress} />
        ))}
        <div className="absolute left-6 top-8 z-10 md:left-16 md:top-10">
          <p className="eyebrow">09 / Ein Schritt hinein</p>
        </div>
      </div>
    </section>
  );
}
