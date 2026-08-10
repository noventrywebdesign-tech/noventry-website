"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform, type MotionValue } from "framer-motion";
import Media from "@/components/ui/Media";
import { journeySteps } from "@/lib/journey-data";
import { layerRange } from "@/lib/layer-transform";

const TOTAL = journeySteps.length;
const ZONE = 0.05;

// Photos crossfade continuously off raw scroll progress (two overlapping
// photos always blend cleanly), while the step number/title/text swap on a
// *discrete* active index via AnimatePresence — stacking N continuous text
// curves reliably produces a visible double-exposed-text overlap mid-
// transition, see feedback_nextjs_motion_ssr_gotchas point 8.
function StepImage({ index, progress }: { index: number; progress: MotionValue<number> }) {
  const { range, output } = layerRange(index, TOTAL, ZONE);
  const opacity = useTransform(progress, range, output);
  const step = journeySteps[index];

  return (
    <motion.div style={{ opacity }} className="absolute inset-0">
      <Media src={step.image} alt={step.title} className="h-full w-full" />
      <div className="cinematic-overlay" />
    </motion.div>
  );
}

function StepDot({ index, progress }: { index: number; progress: MotionValue<number> }) {
  const segStart = index / TOTAL;
  const segEnd = (index + 1) / TOTAL;
  const scaleX = useTransform(progress, [segStart, segEnd], [0, 1]);
  return (
    <span className="h-1 flex-1 origin-left bg-linen-50/15">
      <motion.span className="block h-full origin-left bg-copper-400" style={{ scaleX }} />
    </span>
  );
}

// Isolated on purpose: this is the *only* component that calls setState off
// scroll position, so it's the only one that re-renders as the user scrolls.
// Earlier this state (and its useMotionValueEvent) lived directly in Journey,
// which meant every scroll-driven re-render also re-invoked useTransform on
// every sibling StepImage/StepDot — each call creates a *new* derived
// MotionValue, and the orphaned previous one stops updating but keeps
// whatever opacity it last held, so a far-off step's image could get stuck
// visibly showing at a stale ~0.25 opacity instead of clamping to 0. Confirmed
// via a computed-style probe (an index-0 layer reporting opacity 0.26 while
// step 4 was active, long after its own fade-out window had passed).
// Keeping the frequently-changing state in its own leaf component means
// Journey itself — and therefore StepImage/StepDot — never re-renders due to
// scroll, so their useTransform calls run exactly once each.
function JourneyStepText({ progress }: { progress: MotionValue<number> }) {
  const [active, setActive] = useState(0);

  useMotionValueEvent(progress, "change", (v) => {
    const idx = Math.min(TOTAL - 1, Math.max(0, Math.floor(v * TOTAL)));
    setActive((prev) => (prev === idx ? prev : idx));
  });

  const step = journeySteps[active];

  return (
    <div className="min-h-[220px]">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={step.index}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-display text-7xl leading-none text-copper-400 md:text-8xl">{step.index}</p>
          <h3 className="mt-4 font-display text-3xl text-linen-50 md:text-4xl">{step.title}</h3>
          <p className="mt-5 max-w-sm text-base leading-relaxed text-linen-300">{step.text}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section ref={ref} className="relative h-[500vh] bg-char-950">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0">
          {journeySteps.map((step, i) => (
            <StepImage key={step.index} index={i} progress={scrollYProgress} />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-char-950 via-char-950/55 to-transparent" />
        </div>

        <div className="relative z-10 flex h-full flex-col justify-center px-6 md:px-16">
          <p className="eyebrow mb-8">04 / Vom Ursprung bis zum Teller</p>
          <JourneyStepText progress={scrollYProgress} />
        </div>

        <div className="absolute inset-x-6 bottom-8 z-10 flex gap-1.5 md:inset-x-16">
          {journeySteps.map((step, i) => (
            <StepDot key={step.index} index={i} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}
