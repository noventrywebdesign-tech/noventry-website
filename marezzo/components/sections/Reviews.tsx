"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Media from "@/components/ui/Media";
import { reviews } from "@/lib/reviews-data";

export default function Reviews() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % reviews.length), 7000);
    return () => clearInterval(id);
  }, []);

  const current = reviews[index];

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-char-950 px-6 py-24 md:px-16">
      <div className="absolute inset-0">
        <Media src="/images/reviews-bg.jpg" alt="" className="h-full w-full opacity-40" />
        <div className="cinematic-overlay grain" />
      </div>

      <p
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[58%] select-none font-display text-linen-50/[0.06]"
        style={{ fontSize: "min(48vw, 620px)", lineHeight: 1 }}
      >
        &rdquo;
      </p>

      <div className="relative z-10 mx-auto w-full max-w-3xl text-center">
        <p className="eyebrow mb-10 justify-center">09 / In ihren Worten</p>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-6 flex justify-center gap-1 text-copper-400">
              {Array.from({ length: current.rating }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <p className="font-accent text-2xl italic leading-relaxed text-linen-50 md:text-4xl">
              &ldquo;{current.quote}&rdquo;
            </p>
            <p className="mt-8 text-sm uppercase tracking-[0.14em] text-copper-400">{current.author}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.14em] text-linen-400">{current.context}</p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-12 flex justify-center gap-2">
          {reviews.map((r, i) => (
            <button
              key={r.author}
              onClick={() => setIndex(i)}
              aria-label={`Bewertung von ${r.author} anzeigen`}
              className={`h-1.5 w-1.5 rounded-full transition-all ${i === index ? "w-6 bg-copper-400" : "bg-linen-50/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
