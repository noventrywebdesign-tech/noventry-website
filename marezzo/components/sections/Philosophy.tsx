"use client";

import Media from "@/components/ui/Media";
import Reveal from "@/components/ui/Reveal";
import TextReveal from "@/components/ui/TextReveal";
import Counter from "@/components/ui/Counter";

const CHAPTERS = [
  { label: "Feuer", text: "Holz und Kohle statt Gas — Temperaturen über 600 °C erzeugen eine Kruste, die sich nicht simulieren lässt." },
  { label: "Zeit", text: "Reifung vor dem Feuer, Ruhe danach. Kein Cut verlässt die Küche früher, als er es verdient." },
  { label: "Herkunft", text: "Vier Länder, ein Standard: Marmorierung, Rasse und Aufzucht entscheiden — nicht der Preis." },
  { label: "Handwerk", text: "Jedes Steak braucht eine andere Behandlung. Dicke, Fettanteil und Rasse bestimmen Hitze und Zeit." },
];

export default function Philosophy() {
  return (
    <section id="philosophie" className="relative scroll-mt-20 bg-char-950">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-[60vh] md:sticky md:top-0 md:h-screen">
          <Media videoSrc="/videos/philosophy-fire.mp4" poster="/images/philosophy-poster.jpg" alt="Kohlebett und offene Flamme bei MAREZZO" className="h-full w-full" />
          <div className="cinematic-overlay" />
        </div>

        <div className="relative flex flex-col justify-center px-6 py-24 md:px-16 md:py-32">
          <Reveal>
            <p className="eyebrow mb-6">02 / Philosophie</p>
          </Reveal>

          <TextReveal
            as="h2"
            text="Feuer ist unsere erste Zutat."
            className="font-display text-4xl leading-[1.05] tracking-tight text-linen-50 md:text-6xl"
          />

          <Reveal delay={0.2}>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-linen-300">
              Kein Gas, keine Abkürzung. Jeder Cut bei MAREZZO antwortet auf Eichen- und Apfelholzkohle, von Hand
              bewacht durch den gesamten Service — Rauch verändert den Geschmack messbar, deshalb wählen wir das
              Holz so bewusst wie den Cut selbst.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 grid max-w-md grid-cols-2 gap-x-6 gap-y-7 border-t border-slate-500/25 pt-8">
              {CHAPTERS.map((c) => (
                <div key={c.label}>
                  <p className="font-display text-lg text-copper-400">{c.label}</p>
                  <p className="mt-2 text-sm leading-relaxed text-linen-300">{c.text}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-slate-500/25 pt-8">
              <div>
                <p className="font-display text-4xl text-copper-400">
                  <Counter to={45} suffix="d" />
                </p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-[0.16em] text-linen-400">Dry Aged</p>
              </div>
              <div>
                <p className="font-display text-4xl text-copper-400">
                  <Counter to={600} suffix="°" />
                </p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-[0.16em] text-linen-400">Kohlebett</p>
              </div>
              <div>
                <p className="font-display text-4xl text-copper-400">
                  <Counter to={4} />
                </p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-[0.16em] text-linen-400">Herkunftsländer</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
