"use client";

import Media from "@/components/ui/Media";
import Reveal from "@/components/ui/Reveal";
import { useReservation } from "@/components/Reservation";
import { restaurant } from "@/lib/restaurant-data";

const FEATURES = ["Business dinners", "Birthdays & anniversaries", "Corporate events", "Full-room buyouts, up to 24 guests"];

export default function PrivateDining() {
  const { open } = useReservation();

  return (
    <section id="private-dining" className="relative scroll-mt-20 bg-char-900 px-6 py-24 md:px-16 md:py-32">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-16 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Reveal>
            <p className="eyebrow mb-6">08 / Private Dining</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl leading-[1.05] text-linen-50 md:text-6xl">
              {restaurant.privateDiningName}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-linen-300">
              A closed room off the main dining floor, its own coal grill visible through glass, built for the
              evenings that call for privacy without losing the theatre of the fire.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <ul className="mt-8 space-y-3 border-t border-slate-500/25 pt-6">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-linen-200">
                  <span className="h-1 w-1 rounded-full bg-copper-400" />
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.4}>
            <button onClick={open} className="btn-sear mt-10 inline-flex items-center bg-sear-500 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-linen-50">
              Plan Your Evening
            </button>
          </Reveal>
        </div>

        <div className="relative">
          <div className="relative h-[55vh] overflow-hidden md:h-[65vh]">
            <Media src="/images/private-dining.jpg" alt="The Ember Room, Marezzo's private dining space" className="h-full w-full" />
            <div className="cinematic-overlay" />
          </div>
          <div className="absolute -bottom-10 -left-6 hidden h-40 w-56 overflow-hidden border-4 border-char-900 shadow-2xl md:block">
            <Media src="/images/interior-bar.jpg" alt="Detail of the bar at Marezzo" className="h-full w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
