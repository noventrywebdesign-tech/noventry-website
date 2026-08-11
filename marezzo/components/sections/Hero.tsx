"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Media from "@/components/ui/Media";
import TextReveal from "@/components/ui/TextReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { useReservation } from "@/components/Reservation";
import { restaurant } from "@/lib/restaurant-data";

const INTRO_KEY = "marezzo-intro-seen";

export default function Hero() {
  // "pending" and "intro" render the hero in its hidden initial state, so
  // there is nothing to flash before the effect below decides which path to
  // take — real content only animates in once phase becomes "content".
  const [phase, setPhase] = useState<"pending" | "intro" | "content">("pending");
  const { open } = useReservation();

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = sessionStorage.getItem(INTRO_KEY);
    if (seen || reduced) {
      setPhase("content");
      return;
    }
    setPhase("intro");
    sessionStorage.setItem(INTRO_KEY, "1");
    const timer = setTimeout(() => setPhase("content"), 3600);
    return () => clearTimeout(timer);
  }, []);

  const showIntro = phase === "intro";
  const ready = phase === "content";

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-char-950">
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center overflow-hidden bg-char-950"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Beat 1 — a single ember in the dark */}
            <motion.div
              className="ember-glow absolute h-24 w-24"
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{ duration: 1.3, times: [0, 0.3, 0.75, 1], ease: "easeInOut" }}
            />

            {/* Beat 2 — the coal bed catches, fullscreen */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: [0, 1, 1, 0], scale: 1 }}
              transition={{ opacity: { duration: 1.7, delay: 1.0, times: [0, 0.3, 0.75, 1] }, scale: { duration: 2.2, delay: 1.0, ease: [0.16, 1, 0.3, 1] } }}
            >
              <Media src="/images/philosophy-detail.jpg" alt="" className="h-full w-full" />
              <div className="absolute inset-0 bg-char-950/40" />
            </motion.div>

            {/* Beat 3 — wordmark */}
            <motion.div
              className="relative z-10 flex flex-col items-center"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-display text-4xl tracking-[0.1em] text-linen-50 md:text-5xl">MAREZZO</p>
              <motion.div
                className="sear-rule mt-5 h-px w-32"
                style={{ transformOrigin: "center" }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, delay: 2.7, ease: [0.16, 1, 0.3, 1] }}
              />
              <p className="mt-5 text-[0.65rem] font-medium uppercase tracking-[0.32em] text-linen-400">{restaurant.kicker}</p>
            </motion.div>

            <button
              onClick={() => setPhase("content")}
              className="absolute bottom-8 right-8 z-20 text-[0.65rem] uppercase tracking-[0.24em] text-linen-400 transition-colors hover:text-linen-50"
            >
              Überspringen
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0">
        <Media
          videoSrc="/videos/hero.mp4"
          mobileVideoSrc="/videos/hero-mobile.mp4"
          poster="/images/hero-poster.jpg"
          alt="Steak über offener Flamme bei MAREZZO"
          priority
          className="h-full w-full"
        />
        <div className="cinematic-overlay" />
        <div className="vignette grain absolute inset-0" />
      </div>

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-6 pb-16 pt-32 md:px-10 md:pb-20">
        <div className="mx-auto w-full max-w-[1600px]">
          <motion.p
            className="eyebrow mb-6"
            initial={{ opacity: 0, y: 12 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {restaurant.kicker}
          </motion.p>

          <h1 className="font-display text-[15vw] leading-[0.88] tracking-tight text-linen-50 md:text-[8.5vw]">
            {ready && (
              <>
                <TextReveal as="span" text="ZEIT UND" delay={0.35} className="block" />
                <TextReveal as="span" text="FEUER." delay={0.6} className="block italic text-copper-400" />
              </>
            )}
          </h1>

          <div className="mt-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <motion.p
              className="max-w-sm font-accent text-xl italic text-linen-200 md:text-2xl"
              initial={{ opacity: 0, y: 16 }}
              animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.3, duration: 0.9 }}
            >
              Ein Steakhouse am offenen Feuer, mitten in Mayfair.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.45, duration: 0.9 }}
            >
              <MagneticButton>
                <button data-cursor="RESERVIEREN" onClick={open} className="btn-sear inline-flex items-center bg-sear-500 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-linen-50">
                  Tisch reservieren
                </button>
              </MagneticButton>
              <MagneticButton>
                <a href="/speisekarte" className="inline-flex items-center border border-linen-50/30 px-7 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-linen-50 transition-colors hover:border-copper-400">
                  Speisekarte entdecken
                </a>
              </MagneticButton>
            </motion.div>
          </div>

          <motion.p
            className="mt-10 text-xs uppercase tracking-[0.2em] text-linen-400"
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1 } : {}}
            transition={{ delay: 1.7, duration: 0.8 }}
          >
            {restaurant.address.street} · {restaurant.address.city}
          </motion.p>
        </div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="h-10 w-px bg-linen-50/30" />
        <span className="text-[0.6rem] uppercase tracking-[0.2em] text-linen-400">Scrollen</span>
      </motion.div>
    </section>
  );
}
