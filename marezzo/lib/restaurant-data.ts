export const restaurant = {
  name: "Marezzo",
  legalName: "Marezzo London",
  claim: "Where Marble Meets Fire.",
  kicker: "PRIME CUTS · OPEN FIRE · RARE VINTAGES",
  phone: "020 7946 0891",
  phoneHref: "tel:+442079460891",
  email: "reservations@marezzo-london.com",
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
  { day: "Monday", hours: "17:00 – 23:00" },
  { day: "Tuesday", hours: "17:00 – 23:00" },
  { day: "Wednesday", hours: "17:00 – 23:00" },
  { day: "Thursday", hours: "17:00 – 23:00" },
  { day: "Friday", hours: "17:00 – 00:00" },
  { day: "Saturday", hours: "17:00 – 00:00" },
  { day: "Sunday", hours: "17:00 – 22:00" },
] as const;

// JS getDay(): 0 = Sunday ... 6 = Saturday
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
  bio: "Trained over open coal in Basque asadors before commanding fine-dining kitchens across three continents, Darius Voss built Marezzo around a single conviction: fire, not technique, is the finest seasoning. Every cut here answers to flame, patience, and nothing else.",
} as const;
