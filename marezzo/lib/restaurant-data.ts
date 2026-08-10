export const restaurant = {
  name: "Marezzo",
  legalName: "Marezzo London",
  claim: "Wo Marmor auf Feuer trifft.",
  kicker: "SIGNATURE CUTS · OFFENES FEUER · GROSSE WEINE",
  phone: "020 7946 0891",
  phoneHref: "tel:+442079460891",
  email: "reservierung@marezzo-london.com",
  address: {
    street: "22 Ashcombe Row",
    postalCode: "W1K 4PL",
    city: "Mayfair, London",
    country: "United Kingdom",
  },
  instagram: {
    handle: "@marezzo.london",
    url: "https://www.instagram.com/",
  },
  privateDiningName: "The Ember Room",
} as const;

export const openingHours = [
  { day: "Montag", hours: "17:00 – 23:00" },
  { day: "Dienstag", hours: "17:00 – 23:00" },
  { day: "Mittwoch", hours: "17:00 – 23:00" },
  { day: "Donnerstag", hours: "17:00 – 23:00" },
  { day: "Freitag", hours: "17:00 – 00:00" },
  { day: "Samstag", hours: "17:00 – 00:00" },
  { day: "Sonntag", hours: "17:00 – 22:00" },
] as const;

// JS getDay(): 0 = Sonntag ... 6 = Samstag
export const openingHoursByJsDay = [
  openingHours[6],
  openingHours[0],
  openingHours[1],
  openingHours[2],
  openingHours[3],
  openingHours[4],
  openingHours[5],
] as const;

export const chef = {
  firstName: "Darius",
  lastName: "Voss",
  title: "Executive Chef",
  // Kurzfassung — für Vorschauen/Meta. Die vollständige, in Etappen erzählte
  // Biografie liegt in chefStory (siehe unten) und wird von components/sections/Chef.tsx gerendert.
  bio: "Ausgebildet über offener Kohle in baskischen Asadors, gründete Darius Voss MAREZZO auf einer einzigen Überzeugung: Feuer ist kein Werkzeug, sondern die eigentliche Zutat.",
} as const;

export type ChefChapter = { label: string; text: string };

export const chefStory: ChefChapter[] = [
  {
    label: "Der Anfang",
    text: "Mit vierzehn stand Darius Voss zum ersten Mal an einem offenen Feuer — nicht in einer Ausbildungsküche, sondern im Asador seines Onkels an der baskischen Atlantikküste, wo Fleisch ausschließlich über Kohle gegart wurde und niemand ein Rezept besaß, das man hätte aufschreiben können.",
  },
  {
    label: "Die Umwege",
    text: "Es folgten Stationen in London, Kopenhagen und São Paulo — Küchen, die ihm Technik und Präzision beibrachten. Doch je weiter ihn seine Ausbildung von der offenen Flamme wegführte, desto klarer wurde, wonach er eigentlich suchte: zurück zum Feuer, zurück zur Ehrlichkeit eines baskischen Grills.",
  },
  {
    label: "MAREZZO",
    text: "2019 begann er, MAREZZO zu planen — ein Steakhouse ohne Gas, ohne Abkürzungen, ohne Umwege. Sein Ansatz ist reduktiv, nicht additiv: Wo andere Köche ergänzen, nimmt Voss weg, bis nur noch übrig bleibt, was ein Cut wirklich braucht.",
  },
];
