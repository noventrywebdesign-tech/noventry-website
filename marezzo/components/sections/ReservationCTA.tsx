"use client";

import Media from "@/components/ui/Media";
import TextReveal from "@/components/ui/TextReveal";
import Reveal from "@/components/ui/Reveal";
import { useReservation } from "@/components/Reservation";
import { restaurant } from "@/lib/restaurant-data";

export default function ReservationCTA() {
  const { open } = useReservation();

  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-char-950">
      <div className="absolute inset-0">
        <Media src="/images/interior-wide.jpg" alt="Der Gastraum bei MAREZZO" className="h-full w-full animate-drift-slow" />
        <div className="cinematic-overlay" />
        <div className="vignette absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="eyebrow mb-8 justify-center">Reservierung</p>
        </Reveal>
        <TextReveal
          as="h2"
          text="Ihr Tisch wartet."
          className="font-display text-5xl leading-[1.02] text-linen-50 md:text-8xl"
        />
        <Reveal delay={0.25}>
          <p className="mx-auto mt-8 max-w-md text-lg text-linen-300">
            Mayfair, sieben Abende die Woche — an der Bar auch spontan, doch das Feuer lohnt eine Reservierung.
          </p>
        </Reveal>
        <Reveal delay={0.35}>
          <button
            data-cursor="RESERVIEREN"
            onClick={open}
            className="btn-sear mt-10 inline-flex items-center bg-sear-500 px-9 py-4 text-xs font-semibold uppercase tracking-[0.24em] text-linen-50"
          >
            Tisch reservieren
          </button>
          <p className="mt-6 text-xs uppercase tracking-[0.16em] text-linen-400">
            Oder anrufen: {restaurant.phone}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
