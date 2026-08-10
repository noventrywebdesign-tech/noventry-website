export type CellarHighlight = { category: string; label: string };
export type Pairing = { occasion: string; recommendation: string };

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

export const pairings: Pairing[] = [
  { occasion: "Zum Ribeye", recommendation: "Ein Barolo hält der mineralischen Kruste stand, ohne die Röstaromen zu überdecken." },
  { occasion: "Zum Wagyu", recommendation: "Ein leichterer Burgund lässt die Marmorierung führen, statt mit ihr zu konkurrieren." },
  { occasion: "Zum Tomahawk", recommendation: "Ein kräftiger Napa Cabernet für einen Cut, der selbst kräftig genug ist, ihm standzuhalten." },
  { occasion: "Nach dem Dinner", recommendation: "Ein Single Malt am offenen Feuer — die Sommelière wählt je nach Jahrgang der Kohle." },
];
