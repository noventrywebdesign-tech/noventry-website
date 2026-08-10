import type { Metadata } from "next";
import Media from "@/components/ui/Media";
import MenuItemRow from "@/components/ui/MenuItemRow";
import { menu } from "@/lib/menu-data";
import { restaurant } from "@/lib/restaurant-data";

export const metadata: Metadata = {
  title: "Speisekarte",
  description: "Dry-aged britisches Rind, japanisches A5-Wagyu und ein vierhundert Positionen starker Weinkeller — die vollständige Speisekarte von MAREZZO.",
};

export default function MenuPage() {
  return (
    <>
      <section className="relative flex h-[52vh] min-h-[420px] items-end overflow-hidden bg-char-950">
        <div className="absolute inset-0">
          <Media src="/images/menu-starter.jpg" alt="Eine Vorspeise bei MAREZZO" className="h-full w-full" priority />
          <div className="cinematic-overlay" />
          <div className="vignette absolute inset-0" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-14 pt-32 md:px-16">
          <p className="eyebrow mb-6">{restaurant.name}</p>
          <h1 className="font-display text-6xl text-linen-50 md:text-8xl">Die Speisekarte</h1>
        </div>
      </section>

      <div className="sticky top-[64px] z-30 border-y border-slate-500/25 bg-char-950/90 backdrop-blur-md md:top-[76px]">
        <nav className="no-scrollbar mx-auto flex max-w-[1600px] gap-8 overflow-x-auto px-6 py-4 md:px-16">
          {menu.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="shrink-0 text-xs font-medium uppercase tracking-[0.16em] text-linen-300 transition-colors hover:text-copper-400"
            >
              {cat.label}
            </a>
          ))}
        </nav>
      </div>

      <MenuCategoryGroup categories={menu.slice(0, 5)} startIndex={0} />

      <div className="relative h-[42vh] min-h-[300px] overflow-hidden">
        <Media src="/images/sear-crust.jpg" alt="Die Kruste eines dry-aged Cuts, frisch von der Kohle" className="h-full w-full" />
        <div className="cinematic-overlay" />
        <p className="absolute inset-x-0 bottom-8 text-center font-accent text-xl italic text-linen-100 md:text-2xl">
          &bdquo;Die Kruste verrät alles, was man wissen muss.&ldquo;
        </p>
      </div>

      <MenuCategoryGroup categories={menu.slice(5, 9)} startIndex={5} />

      <div className="relative h-[42vh] min-h-[300px] overflow-hidden">
        <Media src="/images/whiskey-bottles.jpg" alt="Das Digestif-Regal an der Bar von MAREZZO" className="h-full w-full" />
        <div className="cinematic-overlay" />
        <p className="absolute inset-x-0 bottom-8 text-center font-accent text-xl italic text-linen-100 md:text-2xl">
          &bdquo;Was im Glas ist, sollte immer antworten, was auf dem Teller steht.&ldquo;
        </p>
      </div>

      <MenuCategoryGroup categories={menu.slice(9)} startIndex={9} />

      <p className="mx-auto max-w-4xl px-6 pb-20 pt-4 text-center text-xs text-linen-400/70 md:px-0">
        Ein Servicezuschlag von 12,5 % wird auf die Rechnung aufgeschlagen. Bitte informieren Sie Ihren Service
        vorab über Allergien und Unverträglichkeiten.
      </p>
    </>
  );
}

function MenuCategoryGroup({ categories, startIndex }: { categories: typeof menu; startIndex: number }) {
  return (
    <div className="mx-auto max-w-4xl px-6 md:px-0">
      {categories.map((cat, i) => (
        <section key={cat.id} id={cat.id} className="scroll-mt-40 border-b border-slate-500/20 py-14 first:pt-14">
          <div className="flex items-baseline justify-between gap-6">
            <h2 className="font-display text-3xl text-linen-50 md:text-4xl">{cat.label}</h2>
            <span className="tnum text-sm text-linen-400/60">{String(startIndex + i + 1).padStart(2, "0")}</span>
          </div>
          {cat.intro && <p className="mt-3 max-w-md text-sm italic text-linen-400">{cat.intro}</p>}
          <ul className="mt-6 divide-y divide-slate-500/15">
            {cat.items.map((item) => (
              <MenuItemRow key={item.name} item={item} />
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
