import type { Metadata } from "next";
import Media from "@/components/ui/Media";
import MenuItemRow from "@/components/ui/MenuItemRow";
import { menu } from "@/lib/menu-data";
import { restaurant } from "@/lib/restaurant-data";

export const metadata: Metadata = {
  title: "Menu",
  description: "Dry-aged British beef, Japanese A5 wagyu, and a 400-bin cellar list — the full Marezzo menu.",
};

export default function MenuPage() {
  return (
    <>
      <section className="relative flex h-[52vh] min-h-[420px] items-end overflow-hidden bg-char-950">
        <div className="absolute inset-0">
          <Media src="/images/menu-starter.jpg" alt="A starter plate at Marezzo" className="h-full w-full" priority />
          <div className="cinematic-overlay" />
          <div className="vignette absolute inset-0" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-14 pt-32 md:px-16">
          <p className="eyebrow mb-6">{restaurant.name}</p>
          <h1 className="font-display text-6xl text-linen-50 md:text-8xl">The Menu</h1>
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

      <MenuCategoryGroup categories={menu.slice(0, 3)} startIndex={0} />

      <div className="relative h-[42vh] min-h-[300px] overflow-hidden">
        <Media src="/images/sear-crust.jpg" alt="The crust on a dry-aged cut, fresh off the coal" className="h-full w-full" />
        <div className="cinematic-overlay" />
        <p className="absolute inset-x-0 bottom-8 text-center font-accent text-xl italic text-linen-100 md:text-2xl">
          &ldquo;The crust tells you everything you need to know.&rdquo;
        </p>
      </div>

      <MenuCategoryGroup categories={menu.slice(3, 8)} startIndex={3} />

      <div className="relative h-[42vh] min-h-[300px] overflow-hidden">
        <Media src="/images/whiskey-bottles.jpg" alt="The whiskey shelf at Marezzo's bar" className="h-full w-full" />
        <div className="cinematic-overlay" />
        <p className="absolute inset-x-0 bottom-8 text-center font-accent text-xl italic text-linen-100 md:text-2xl">
          &ldquo;What&rsquo;s in your glass should answer what&rsquo;s on your plate.&rdquo;
        </p>
      </div>

      <MenuCategoryGroup categories={menu.slice(8)} startIndex={8} />

      <p className="mx-auto max-w-4xl px-6 pb-20 pt-4 text-center text-xs text-linen-400/70 md:px-0">
        A discretionary service charge of 12.5% is added to your bill. Please inform your server of any
        allergies before ordering.
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
