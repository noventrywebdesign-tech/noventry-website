"use client";

import Media from "@/components/ui/Media";
import Reveal from "@/components/ui/Reveal";
import TextReveal from "@/components/ui/TextReveal";
import Counter from "@/components/ui/Counter";

export default function Aging() {
  return (
    <section className="relative overflow-hidden bg-char-900">
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
    </section>
  );
}
