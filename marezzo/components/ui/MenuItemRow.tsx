import type { MenuItem } from "@/lib/menu-data";

export default function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <li className="flex items-baseline gap-3 py-4">
      <div className="min-w-0">
        <div className="flex items-baseline gap-3">
          <span className="font-accent text-lg italic text-linen-50 md:text-xl">{item.name}</span>
        </div>
        {item.tag && <p className="mt-1 text-xs uppercase tracking-[0.12em] text-copper-400">{item.tag}</p>}
        {item.description && <p className="mt-1 text-sm text-linen-400">{item.description}</p>}
      </div>
      <span className="dot-leader" />
      <span className="tnum shrink-0 font-display text-lg text-linen-50">{item.price}</span>
    </li>
  );
}
