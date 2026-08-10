export type SignatureCut = {
  index: string;
  name: string;
  weight: string;
  aging: string;
  origin: string;
  doneness: string;
  price: string;
  description: string;
  image: string;
};

export const signatureCuts: SignatureCut[] = [
  {
    index: "01",
    name: "Dry Aged Ribeye",
    weight: "350 g",
    aging: "45 Tage gereift",
    origin: "Yorkshire, England",
    doneness: "Empfehlung: Medium Rare",
    price: "58 £",
    description:
      "Kräftige Marmorierung, intensive Röstaromen und eine ausgeprägte mineralische Note aus 45 Tagen Trockenreifung. Über englischer Eichenkohle gegrillt und vor dem Anschnitt mehrere Minuten ruhen gelassen.",
    image: "/images/cut-ribeye.jpg",
  },
  {
    index: "02",
    name: "USDA Prime Tomahawk",
    weight: "1000 g",
    aging: "28 Tage gereift",
    origin: "Nebraska, USA",
    doneness: "Empfehlung: Medium",
    price: "128 £",
    description:
      "Mit Knochen serviert und tableside tranchiert — großzügig mit gerösteter Knochenmarkbutter bestrichen. Gedacht zum Teilen, nicht zum Aufteilen.",
    image: "/images/cut-tomahawk.jpg",
  },
  {
    index: "03",
    name: "Japanese A5 Wagyu",
    weight: "100 g",
    aging: "Frisch, 7 Tage eisgereift",
    origin: "Kagoshima, Japan",
    doneness: "Empfehlung: Rare",
    price: "72 £",
    description:
      "A5-graded und hauchdünn geschnitten — die Marmorierung übernimmt fast die gesamte Arbeit, ein kurzer Kontakt mit der Glut genügt.",
    image: "/images/cut-wagyu.jpg",
  },
  {
    index: "04",
    name: "Porterhouse",
    weight: "800 g",
    aging: "35 Tage trockengereift",
    origin: "Galway, Irland",
    doneness: "Empfehlung: Medium",
    price: "96 £",
    description:
      "Zwei Cuts, ein Knochen — Roastbeef und Filet aus reiner Weidehaltung, am Tisch aufgeschnitten und geteilt.",
    image: "/images/cut-porterhouse.jpg",
  },
];
