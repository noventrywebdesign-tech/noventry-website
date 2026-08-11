"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Media from "@/components/ui/Media";
import TextReveal from "@/components/ui/TextReveal";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { useReservation } from "@/components/Reservation";
import { restaurant } from "@/lib/restaurant-data";

export default function ReservationCTA() {
  const { open } = useReservation();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 40%"] });
  const darken = useTransform(scrollYProgress, [0, 1], [0, 0.55]);

  return (
    <section ref={ref} className="relative flex min-h-[95vh] items-center justify-center overflow-hidden bg-char-950">
      <div className="absolute inset-0">
        <Media src="/images/interior-wide.jpg" alt="Der Gastraum bei MAREZZO, spät am Abend" className="h-full w-full animate-drift-slow" />
        <div className="cinematic-overlay grain" />
        <div className="vignette absolute inset-0" />
        <motion.div className="pointer-events-none absolute inset-0 bg-char-950" style={{ opacity: darken }} />
      </div>

      <div className="ember-glow absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 animate-glow-pulse opacity-60" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="eyebrow mb-8 justify-center">Reservierung</p>
        </Reveal>
        <TextReveal
          as="h2"
          text="Das Feuer wartet."
          className="font-display text-5xl leading-[1.02] text-linen-50 md:text-8xl"
        />
        <Reveal delay={0.25}>
          <p className="mx-auto mt-8 max-w-md text-lg text-linen-300">
            Mayfair, sieben Abende die Woche — an der Bar auch spontan, doch Ihr Tisch am Feuer lohnt eine
            Reservierung.
          </p>
        </Reveal>
        <Reveal delay={0.35}>
          <MagneticButton>
            <button
              data-cursor="RESERVIEREN"
              onClick={open}
              className="btn-sear mt-10 inline-flex items-center bg-sear-500 px-9 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-linen-50"
            >
              Tisch anfragen
            </button>
          </MagneticButton>
          <p className="mt-6 text-xs uppercase tracking-[0.16em] text-linen-400">
            Oder anrufen: {restaurant.phone}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
