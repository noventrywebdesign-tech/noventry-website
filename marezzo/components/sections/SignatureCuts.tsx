"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform, type MotionValue } from "framer-motion";
import Media from "@/components/ui/Media";
import { signatureCuts } from "@/lib/cuts-data";

const TOTAL = signatureCuts.length;
const ZONE = 0.07;

// Photos crossfade continuously off the raw scroll progress — two overlapping
// photos always blend cleanly, so a smooth per-index opacity curve works.
function CutImage({ index, progress }: { index: number; progress: MotionValue<number> }) {
  const segStart = index / TOTAL;
  const segEnd = (index + 1) / TOTAL;
  const isFirst = index === 0;
  const isLast = index === TOTAL - 1;
  // Duplicate boundary values are fine for useTransform (still non-decreasing);
  // the first/last layer just skips its fade so it's visible at the very edge
  // of the scroll range instead of fading from/to nothing.
  const range = [segStart, segStart + ZONE, segEnd - ZONE, segEnd];
  const opacity = useTransform(progress, range, [isFirst ? 1 : 0, 1, 1, isLast ? 1 : 0]);
  const scale = useTransform(progress, range, [1.04, 1, 1, 1.04]);
  const cut = signatureCuts[index];

  return (
    <motion.div style={{ opacity, scale }} className="absolute inset-0">
      <Media src={cut.image} alt={cut.name} className="h-full w-full" />
      <div className="cinematic-overlay" />
    </motion.div>
  );
}

// Text, by contrast, is driven by a *discrete* active-index state rather than
// a continuous scroll-linked opacity curve. Two continuous per-index text
// curves both centered on the same boundary point are numerically supposed
// to be non-overlapping, but in practice a full block of copy (unlike a
// photo) reads as garbled double-exposed text for any measurable overlap
// window at all — including the brief mid-transition instant a static
// screenshot (or a paused scroll) can land on. Collapsing to "exactly one
// active index, swapped via a fast, self-contained AnimatePresence
// transition" removes the possibility entirely instead of tuning zone widths.
function CutText({ index }: { index: number }) {
  const cut = signatureCuts[index];
  return (
    <motion.div
      key={cut.name}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex flex-col justify-center px-6 py-12 md:px-16"
    >
      <p className="font-display text-[9rem] leading-none text-linen-50/[0.07] md:text-[13rem]">{cut.index}</p>
      <div className="-mt-16 md:-mt-24">
        <p className="eyebrow mb-4">{cut.origin}</p>
        <h3 className="font-display text-4xl text-linen-50 md:text-5xl">{cut.name}</h3>
        <p className="mt-3 text-sm uppercase tracking-[0.14em] text-copper-400">
          {cut.weight} · {cut.aging}
        </p>
        <p className="mt-5 max-w-sm text-base leading-relaxed text-linen-300">{cut.description}</p>
        <p className="mt-6 font-display text-3xl text-linen-50">{cut.price}</p>
      </div>
    </motion.div>
  );
}

function CutDot({ index, progress }: { index: number; progress: MotionValue<number> }) {
  const segStart = index / TOTAL;
  const segEnd = (index + 1) / TOTAL;
  const scaleX = useTransform(progress, [segStart, segEnd], [0, 1]);
  return (
    <span className="h-1 w-8 origin-left bg-linen-50/20">
      <motion.span className="block h-full origin-left bg-copper-400" style={{ scaleX }} />
    </span>
  );
}

export default function SignatureCuts() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(TOTAL - 1, Math.max(0, Math.floor(v * TOTAL)));
    setActiveIndex((prev) => (prev === idx ? prev : idx));
  });

  return (
    <section ref={ref} className="relative h-[400vh] bg-char-950">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute left-6 top-8 z-10 md:left-16 md:top-10">
          <p className="eyebrow">02 / Signature Cuts</p>
        </div>

        <div className="grid h-full grid-cols-1 md:grid-cols-2">
          <div className="relative order-2 md:order-1">
            <AnimatePresence mode="wait" initial={false}>
              <CutText key={activeIndex} index={activeIndex} />
            </AnimatePresence>
          </div>
          <div className="relative order-1 h-[45vh] overflow-hidden md:order-2 md:h-full">
            {signatureCuts.map((cut, i) => (
              <CutImage key={cut.name} index={i} progress={scrollYProgress} />
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex justify-center gap-2 pb-8">
          {signatureCuts.map((cut, i) => (
            <CutDot key={cut.index} index={i} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}
