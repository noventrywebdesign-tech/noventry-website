"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform, type MotionValue } from "framer-motion";
import Media from "@/components/ui/Media";
import Reveal from "@/components/ui/Reveal";
import TextReveal from "@/components/ui/TextReveal";
import Counter from "@/components/ui/Counter";
import { agingCheckpoints } from "@/lib/aging-data";

// Isolated leaf component on purpose (see components/sections/Journey.tsx's
// JourneyStepText comment) — this is the only piece of the counter that calls
// setState off scroll position.
function AgingCounter({ progress }: { progress: MotionValue<number> }) {
  const [day, setDay] = useState(1);
  const rawDay = useTransform(progress, [0, 1], [1, 45]);

  useMotionValueEvent(rawDay, "change", (v) => {
    const rounded = Math.round(v);
    setDay((prev) => (prev === rounded ? prev : rounded));
  });

  let activeIdx = 0;
  agingCheckpoints.forEach((cp, i) => {
    if (cp.day <= day) activeIdx = i;
  });
  const checkpoint = agingCheckpoints[activeIdx];

  return (
    <div className="flex flex-col items-center text-center">
      <p className="font-display leading-none text-linen-50" style={{ fontSize: "min(30vw, 260px)" }}>
        {String(day).padStart(2, "0")}
      </p>
      <p className="-mt-2 text-xs uppercase tracking-[0.4em] text-copper-400 md:text-sm">Tage Reifung</p>

      <div className="mt-10 min-h-[92px] max-w-sm md:mt-14">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={checkpoint.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-linen-100">{checkpoint.label}</p>
            <p className="mt-3 text-sm leading-relaxed text-linen-400">{checkpoint.text}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function Aging() {
  const counterRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: counterRef, offset: ["start start", "end end"] });

  return (
    // No overflow-hidden here on purpose — it's an ancestor of the counter's
    // sticky div below, and `overflow` other than `visible` on *any* ancestor
    // (not just the immediate parent) silently breaks position:sticky. Confirmed
    // via a getBoundingClientRect probe across scroll steps: the sticky div's
    // computed style really did say `position: sticky`, but its top just
    // decreased 1:1 with scrollY instead of pinning at 0 — i.e. it was never
    // actually sticking, only scrolling normally, leaving ~1800px of dead
    // empty space where the pinned counter should have stayed visible.
    <section className="relative bg-char-900">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative flex flex-col justify-center px-6 py-24 md:px-16 md:py-32">
          <Reveal>
            <p className="eyebrow mb-6">Die Reifekammer</p>
          </Reveal>
          <TextReveal
            as="h2"
            text="45 Tage. Keine Abkürzung."
            className="font-display text-4xl leading-[1.05] text-linen-50 md:text-6xl"
          />
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-linen-300">
              Dry Aging ist kein Trend, sondern Physik. Bei konstant 1 bis 3 Grad und rund 80 Prozent
              Luftfeuchtigkeit verliert ein Cut über Wochen kontrolliert Wasser — das Aroma konzentriert sich,
              körpereigene Enzyme beginnen, die Muskelfasern zu zersetzen und das Fleisch spürbar zarter zu machen.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-linen-300">
              Permanente Luftzirkulation verhindert unkontrollierten Schimmel, während sich außen eine feste,
              dunkle Kruste bildet — die wir vor dem Anschnitt großzügig entfernen. Ein Gewichtsverlust, den wir
              bewusst in Kauf nehmen, weil das Ergebnis darunter jede verlorene Woche wert ist.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-slate-500/25 pt-8">
              <div>
                <p className="font-display text-4xl text-linen-100">1–3°</p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-[0.16em] text-linen-400">Temperatur</p>
              </div>
              <div>
                <p className="font-display text-4xl text-linen-100">
                  <Counter to={80} suffix="%" />
                </p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-[0.16em] text-linen-400">Luftfeuchte</p>
              </div>
              <div>
                <p className="font-display text-4xl text-linen-100">
                  <Counter to={60} suffix="d" />
                </p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-[0.16em] text-linen-400">Max. Reifezeit</p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="relative h-[50vh] md:h-auto">
          <Media src="/images/salt-pour.jpg" alt="Salz und Präzision in der Reifekammer von MAREZZO" className="h-full w-full grayscale-[35%] contrast-125" />
          <div className="midnight-overlay" />
          <div className="pointer-events-none absolute inset-0 bg-char-900/25" />
        </div>
      </div>

      {/* The scroll payoff: the room's whole point told through one number
         climbing to 45 — deliberately typographic and near-empty rather than
         another image panel, for contrast against the image-heavy sections
         around it. */}
      <div ref={counterRef} className="relative h-[350vh] bg-char-950">
        <div className="grain sticky top-0 flex h-screen items-center justify-center overflow-hidden px-6">
          <div className="pointer-events-none absolute inset-0 opacity-70" style={{ background: "radial-gradient(ellipse 55% 45% at 50% 45%, rgba(92,84,80,0.14), transparent 70%)" }} />
          <AgingCounter progress={scrollYProgress} />
        </div>
      </div>
    </section>
  );
}
