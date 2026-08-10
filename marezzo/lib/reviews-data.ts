export type Review = {
  quote: string;
  author: string;
  context: string;
  rating: number;
};

// Fiktive Gäste, keine realen Publikationen oder Personen — MAREZZO ist ein
// fiktives Showcase-Projekt, siehe Footer-Hinweis. Bewusst fünf verschiedene
// Themen (Steak, Service, Atmosphäre, Wein, Private Dining), keine
// austauschbaren Dubletten.
export const reviews: Review[] = [
  {
    quote: "Die Kruste beim Ribeye ist mineralisch, fast rauchig, aber nie verbrannt. So bekommt man dry-aged Fleisch selten auf den Teller.",
    author: "Moritz Lindgren",
    context: "Stammgast seit der Eröffnung",
    rating: 5,
  },
  {
    quote: "Unser Kellner wusste mehr über unseren Tomahawk als wir — Herkunft, Reifezeit, sogar die Holzart. Kein auswendig gelernter Text, echtes Wissen.",
    author: "Sophie Arnold",
    context: "Geschäftsessen im Dezember",
    rating: 5,
  },
  {
    quote: "Man betritt den Raum und hört das Feuer, bevor man es sieht. Kaum ein Restaurant in London inszeniert das so zurückhaltend und trotzdem so wirkungsvoll.",
    author: "Elias Brandt",
    context: "Erster Besuch",
    rating: 5,
  },
  {
    quote: "Die Sommelière hat unseren Wagyu mit einem Rioja kombiniert, auf den wir nie gekommen wären — und der genau richtig war. Allein die Weinkarte ist einen Abend wert.",
    author: "Katharina Reimann",
    context: "Private Weinverkostung",
    rating: 5,
  },
  {
    quote: "Wir haben unseren Hochzeitstag im Ember Room gefeiert. Der eigene Grill hinter Glas, der persönliche Service — es fühlte sich an wie ein eigenes kleines Restaurant.",
    author: "Julia & Tom Ehrenberg",
    context: "Hochzeitstag, Ember Room",
    rating: 5,
  },
];
