"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform, type MotionValue } from "framer-motion";
import Media from "@/components/ui/Media";
import { layerRange } from "@/lib/layer-transform";

const FRAMES = [
  { src: "/images/interior-bar.jpg", alt: "Die Bar bei MAREZZO", caption: "Treten Sie ein." },
  { src: "/images/interior-wide.jpg", alt: "Der Hauptraum bei MAREZZO", caption: null },
  { src: "/images/smoke-grill.jpg", alt: "Die offene Feuerküche bei MAREZZO", caption: null },
  { src: "/images/interior-table.jpg", alt: "Ein Tisch, eingedeckt bei Kerzenlicht", caption: null },
  { src: "/images/table-detail.jpg", alt: "Glas und Kerzenlicht, Detail eines gedeckten Tisches", caption: "Lassen Sie den Abend beginnen." },
];
const TOTAL = FRAMES.length;
const ZONE = 0.06;

function Frame({ index, progress }: { index: number; progress: MotionValue<number> }) {
  const { range, output } = layerRange(index, TOTAL, ZONE);
  const opacity = useTransform(progress, range, output);
  const segStart = index / TOTAL;
  const segEnd = (index + 1) / TOTAL;
  const scale = useTransform(progress, [segStart, segEnd], [1, 1.16]);
  const frame = FRAMES[index];

  return (
    <motion.div style={{ opacity }} className="absolute inset-0">
      <motion.div style={{ scale }} className="h-full w-full">
        <Media src={frame.src} alt={frame.alt} className="h-full w-full" />
      </motion.div>
      <div className="cinematic-overlay" />
    </motion.div>
  );
}

// Isolated on purpose (same reasoning as Journey.tsx's JourneyStepText): the
// only piece of the sequence with scroll-driven setState, so the crossfading
// Frame layers above never re-render / re-invoke useTransform as the user scrolls.
function Caption({ progress }: { progress: MotionValue<number> }) {
  const [active, setActive] = useState(0);
  useMotionValueEvent(progress, "change", (v) => {
    const idx = Math.min(TOTAL - 1, Math.max(0, Math.floor(v * TOTAL)));
    setActive((prev) => (prev === idx ? prev : idx));
  });

  const caption = FRAMES[active].caption;

  return (
    <div className="pointer-events-none absolute inset-x-6 bottom-16 z-10 text-center md:bottom-20">
      <AnimatePresence mode="wait">
        {caption && (
          <motion.p
            key={caption}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl italic text-linen-50 md:text-6xl"
          >
            {caption}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Interior() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section ref={ref} className="relative h-[420vh] bg-char-950">
      <div className="sticky top-0 h-screen overflow-hidden">
        {FRAMES.map((f, i) => (
          <Frame key={f.src} index={i} progress={scrollYProgress} />
        ))}
        <div className="absolute left-6 top-8 z-10 md:left-16 md:top-10">
          <p className="eyebrow">Digital eintreten</p>
        </div>
        <Caption progress={scrollYProgress} />
      </div>
    </section>
  );
}
