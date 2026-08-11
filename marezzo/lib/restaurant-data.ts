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

// Sechs Etappen, in Etappen erzählt — siehe components/sections/Chef.tsx.
// Fiktive Biografie: Städte als Kontext sind bewusst real (London, Kopenhagen,
// São Paulo), konkrete Restaurants oder Auszeichnungen werden absichtlich
// nicht erfunden, um nichts Irreführendes zu behaupten.
export const chefStory: ChefChapter[] = [
  {
    label: "Der Anfang",
    text: "Darius Voss wuchs in der Küche seiner Großmutter auf, nicht in einer Ausbildung. Mit vierzehn stand er zum ersten Mal selbst am Herd — nicht aus Berufung, sondern weil in der Familie niemand sonst Zeit hatte. Was als Notwendigkeit begann, wurde innerhalb weniger Jahre zur einzigen Frage, die ihn wirklich interessierte.",
  },
  {
    label: "Das Feuer",
    text: "Die eigentliche Prägung kam später, an einem offenen Grill an der baskischen Atlantikküste. Kein Rezept, keine Waage, kein Thermometer — nur Erfahrung, Wind und die Fähigkeit, eine Flamme zu lesen wie andere ein Buch. Von diesem Moment an interessierte ihn Technik nur noch dort, wo sie dem Feuer diente.",
  },
  {
    label: "Baskenland",
    text: "Mehrere Jahre arbeitete er in kleinen Asadors entlang der baskischen Küste — Betrieben, die außerhalb der Region kaum jemand kennt und die genau deshalb ehrlich blieben. Hier lernte er, dass die Qualität eines Cuts nicht in der Zubereitung entsteht, sondern lange vorher: bei Auswahl, Reifung und Respekt vor dem Tier.",
  },
  {
    label: "Die Reise",
    text: "Es folgten Jahre in Küchen in London, Kopenhagen und São Paulo — unterschiedliche Philosophien, unterschiedliche Techniken, unterschiedliche Vorstellungen von Präzision. Jede Station gab ihm ein weiteres Werkzeug. Keine ersetzte, was er im Baskenland gelernt hatte.",
  },
  {
    label: "Die Erkenntnis",
    text: "Je mehr Technik er beherrschte, desto weniger davon setzte er tatsächlich ein. Am Ende blieb eine einzige Erkenntnis: Die besten Köche fügen nicht hinzu, sie nehmen weg — bis nur noch übrig bleibt, was ein Cut wirklich braucht, um zu zeigen, was er ist.",
  },
  {
    label: "MAREZZO",
    text: "2019 begann er, MAREZZO zu planen — ein Steakhouse ohne Gas, ohne Abkürzungen, ohne Umwege. Sein Ansatz blieb reduktiv, nicht additiv: Herkunft, Reifung und Feuer sollten die einzigen Zutaten sein, die am Ende wirklich zählen.",
  },
];
