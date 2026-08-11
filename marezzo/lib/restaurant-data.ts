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
  quote: "Feuer ist keine Technik. Es ist eine Zutat.",
  // Kurzfassung — für Vorschauen/Meta. Die vollständige Geschichte liegt in
  // chefStory (siehe unten) und wird von components/sections/Chef.tsx gerendert.
  bio: "Ausgebildet über offener Kohle in baskischen Asadors, gründete Darius Voss MAREZZO auf einer einzigen Überzeugung: Feuer ist kein Werkzeug, sondern die eigentliche Zutat.",
} as const;

export type ChefChapter = { index: string; label: string; text: string };

// Drei kurze Kapitel statt einer Textwand — siehe components/sections/Chef.tsx.
// Fiktive Biografie: Herkunftsregion (Baskenland) ist bewusst real als Kontext,
// konkrete Restaurants oder Auszeichnungen werden absichtlich nicht erfunden,
// um nichts Irreführendes zu behaupten.
export const chefStory: ChefChapter[] = [
  {
    index: "01",
    label: "Das Handwerk",
    text: "Kein Rezept, keine Waage, kein Thermometer. Nur Erfahrung — und die Fähigkeit, eine Flamme zu lesen wie andere ein Buch.",
  },
  {
    index: "02",
    label: "Das Feuer",
    text: "Kein Gas, keine Abkürzung. Nur Holz und Kohle, mit der Geduld, eine Flamme so lange zu beobachten, bis sie tut, was ein Cut braucht.",
  },
  {
    index: "03",
    label: "MAREZZO",
    text: "2019 begann er, MAREZZO zu planen. Ein Steakhouse, das nur drei Dinge konsequent zu Ende denkt: Herkunft, Reifung, Feuer.",
  },
];
