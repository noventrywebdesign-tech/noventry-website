export type CellarHighlight = { category: string; label: string };

// Ein kuratierter Auszug für die Homepage — die vollständige Weinkarte liegt
// im "Wein"/"Digestifs"-Abschnitt der Speisekarte (lib/menu-data.ts).
export const cellarHighlights: CellarHighlight[] = [
  { category: "Champagner", label: "Bollinger Special Cuvée" },
  { category: "Bordeaux", label: "Château Léoville-Barton" },
  { category: "Burgund", label: "Gevrey-Chambertin" },
  { category: "Barolo", label: "Vietti" },
  { category: "Rioja", label: "Bodegas Muga Reserva" },
  { category: "Napa Valley", label: "Caymus Cabernet Sauvignon" },
  { category: "Single Malt Scotch", label: "Macallan 18" },
  { category: "Japanese Whisky", label: "Yamazaki 12" },
  { category: "Bourbon", label: "Woodford Reserve" },
];

export type CutPairing = {
  cut: string;
  bottle: string;
  region: string;
  recommendation: string;
  image: string;
};

// The interactive "which wine goes with which cut" selector — see
// components/sections/Cellar.tsx's CutSelector.
export const cutPairings: CutPairing[] = [
  {
    cut: "Ribeye",
    bottle: "Château Léoville-Barton",
    region: "Bordeaux, Frankreich",
    recommendation: "Ein kräftiger Bordeaux hält der mineralischen Kruste stand, ohne die Röstaromen zu überdecken.",
    image: "/images/wine-cellar.jpg",
  },
  {
    cut: "Wagyu",
    bottle: "Gevrey-Chambertin",
    region: "Burgund, Frankreich",
    recommendation: "Ein eleganter Burgunder lässt die Marmorierung führen, statt mit ihr zu konkurrieren.",
    image: "/images/wine-pour.jpg",
  },
  {
    cut: "Tomahawk",
    bottle: "Caymus Cabernet Sauvignon",
    region: "Napa Valley, USA",
    recommendation: "Ein kräftiger Napa Cabernet für einen Cut, der selbst kräftig genug ist, ihm standzuhalten.",
    image: "/images/wine-cellar.jpg",
  },
  {
    cut: "Filet",
    bottle: "Vietti Barolo",
    region: "Piemont, Italien",
    recommendation: "Ein eleganter Barolo passt sich der Feinheit des Filets an, statt sie zu überdecken.",
    image: "/images/wine-pour.jpg",
  },
];

export type Digestif = { name: string; note: string };

export const digestifs: Digestif[] = [
  { name: "Single Malt Scotch", note: "Rauchig, torfig — ein Echo der Kohle" },
  { name: "Japanese Whisky", note: "Präzise, fein, fast meditativ" },
  { name: "Armagnac", note: "Erdig, mit Wärme statt Schärfe" },
  { name: "Cognac", note: "Elegant, ein ruhiger Ausklang" },
];
