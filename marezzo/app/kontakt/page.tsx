import type { Metadata } from "next";
import Media from "@/components/ui/Media";
import { restaurant, openingHours } from "@/lib/restaurant-data";
import { policies } from "@/lib/policies-data";
import ContactActions from "@/components/ContactActions";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Besuchen Sie MAREZZO in Mayfair, London — Adresse, Telefon und Öffnungszeiten.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative flex h-[48vh] min-h-[380px] items-end overflow-hidden bg-char-950">
        <div className="absolute inset-0">
          <Media src="/images/interior-wide.jpg" alt="Der Gastraum bei MAREZZO" className="h-full w-full" priority />
          <div className="cinematic-overlay" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-14 pt-32 md:px-16">
          <p className="eyebrow mb-6">{restaurant.name}</p>
          <h1 className="font-display text-6xl text-linen-50 md:text-8xl">Besuchen Sie uns</h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1600px] grid-cols-1 gap-16 px-6 py-20 md:grid-cols-2 md:px-16">
        <div>
          <p className="eyebrow mb-6">Adresse</p>
          <p className="max-w-xs text-2xl text-linen-100">
            {restaurant.address.street}
            <br />
            {restaurant.address.city}
            <br />
            {restaurant.address.postalCode}
          </p>

          <p className="eyebrow mb-6 mt-12">Kontakt</p>
          <a href={restaurant.phoneHref} className="block text-2xl text-copper-400 hover:text-sear-400">
            {restaurant.phone}
          </a>
          <a href={`mailto:${restaurant.email}`} className="mt-2 block text-base text-linen-300 hover:text-copper-400">
            {restaurant.email}
          </a>

          <p className="eyebrow mb-6 mt-12">Öffnungszeiten</p>
          <ul className="max-w-sm divide-y divide-slate-500/20 border-t border-slate-500/20">
            {openingHours.map((h) => (
              <li key={h.day} className="flex justify-between py-3 text-sm text-linen-200">
                <span>{h.day}</span>
                <span className="tnum text-linen-400">{h.hours}</span>
              </li>
            ))}
          </ul>

          <ContactActions />
        </div>

        {/* Stilisierte, nicht-wörtliche Kartengrafik — MAREZZO ist ein fiktives
           Showcase-Restaurant, daher wird kein echtes Karten-Embed für die
           Adresse verwendet. */}
        <div className="relative h-[50vh] min-h-[360px] overflow-hidden border border-slate-500/25 bg-char-900 md:h-auto">
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(220,208,191,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(220,208,191,0.12) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 55% 45% at 50% 45%, rgba(209,80,46,0.14), transparent 65%)" }} />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[60%]">
            <div className="ember-glow h-16 w-16 animate-glow-pulse" />
            <div className="relative flex h-4 w-4 items-center justify-center rounded-full bg-sear-500">
              <span className="absolute h-8 w-8 animate-ping rounded-full bg-sear-500/40" />
            </div>
          </div>
          <div className="absolute bottom-6 left-6 right-6 border-t border-slate-500/25 pt-4">
            <p className="text-xs uppercase tracking-[0.16em] text-linen-400">
              {restaurant.address.street} · {restaurant.address.city}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] border-t border-slate-500/20 px-6 py-20 md:px-16">
        <p className="eyebrow mb-10">Gut zu wissen</p>
        <div className="grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {policies.map((p) => (
            <div key={p.label}>
              <p className="font-display text-lg text-linen-50">{p.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-linen-400">{p.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
