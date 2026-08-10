export type MenuItem = {
  name: string;
  description?: string;
  tag?: string;
  price: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  intro?: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "vorspeisen",
    label: "Vorspeisen",
    items: [
      { name: "Knochenmark & geröstetes Sauerteigbrot", description: "Petersilien-Gremolata, Maldon-Salz", price: "16 £" },
      { name: "Jakobsmuscheln, Nduja-Butter", description: "Orkney-Jakobsmuscheln, braune Butter, Chiliöl", price: "22 £" },
      { name: "Burrata, geflämmte Rispentomate", description: "Basilikumöl, gereifter Balsamico, Sauerteig", price: "15 £" },
      { name: "Foie Gras Torchon, geräucherte Kirsche", description: "Brioche, Portwein-Reduktion", price: "19 £" },
      { name: "Thunfisch-Tatar, Ponzu & Avocado", description: "Gelbflossenthun, Sesam, Wasabi-Crème", price: "17 £" },
    ],
  },
  {
    id: "roh-gereift",
    label: "Roh & Gereift",
    intro: "Für alle, die den Effekt der Reifung pur erleben wollen — ganz ohne Feuer.",
    items: [
      { name: "Rindertatar vom Filet, geräuchertes Eigelb", description: "Handgeschnitten, gerösteter Schalotten, Roggen-Cracker", price: "18 £" },
      { name: "Carpaccio vom 45-Tage-Ribeye", description: "Hauchdünn geschnitten, Parmesan, Rucola, Trüffelöl", price: "21 £" },
      { name: "Wagyu-Tatar, Wachteleigelb", description: "Handgeschnitten, schwarzer Trüffel gehobelt", price: "32 £" },
    ],
  },
  {
    id: "signature-cuts",
    label: "Signature Cuts",
    intro: "Unsere vier Aushängeschilder — ausführlich vorgestellt weiter oben auf dieser Seite.",
    items: [
      { name: "Dry Aged Ribeye", tag: "350 g · 45 Tage · Yorkshire · Medium Rare", price: "58 £" },
      { name: "USDA Prime Tomahawk", tag: "1000 g · 28 Tage · Nebraska · Medium", price: "128 £" },
      { name: "Japanese A5 Wagyu", tag: "100 g · Kagoshima · Rare", price: "72 £" },
      { name: "Porterhouse", tag: "800 g · 35 Tage · Galway · Medium", price: "96 £" },
    ],
  },
  {
    id: "dry-aged",
    label: "Dry Aged",
    intro: "Im hauseigenen Reiferaum gereift — mindestens sechs Wochen, ohne Ausnahme.",
    items: [
      { name: "Dry Aged Sirloin", tag: "300 g · 60 Tage · Cumbria · Medium", price: "64 £" },
      { name: "Dry Aged T-Bone", tag: "700 g · 40 Tage · Aberdeenshire · Medium", price: "89 £" },
      { name: "Dry Aged Bavette", tag: "280 g · 30 Tage · Yorkshire · Medium Rare", price: "42 £" },
    ],
  },
  {
    id: "wagyu",
    label: "Wagyu",
    intro: "A5-graded und australisches Kreuzungs-Wagyu, geschnitten nach Marmorierung, nicht nach Gewohnheit.",
    items: [
      { name: "A5 Wagyu Striploin", tag: "150 g · BMS 10–12 · Kagoshima · Rare", price: "98 £" },
      { name: "Wagyu-Sando", description: "Getoastetes Milchbrot, Knoblauch-Mayo mit schwarzem Knoblauch", price: "28 £" },
      { name: "Australisches Wagyu-Ribeye", tag: "300 g · MB8 · Medium Rare", price: "68 £" },
    ],
  },
  {
    id: "aus-dem-feuer",
    label: "Aus dem Feuer",
    items: [
      { name: "Filet", tag: "250 g · Weiderind, Yorkshire · Medium Rare", price: "48 £" },
      { name: "Rumpsteak", tag: "300 g", price: "42 £" },
      { name: "Hüftsteak", tag: "300 g · 21 Tage gereift", price: "34 £" },
      { name: "Onglet (Nierenzapfen)", tag: "300 g · Metzger-Cut", price: "36 £" },
      { name: "Chateaubriand für zwei", tag: "600 g · tableside tranchiert", price: "110 £" },
    ],
  },
  {
    id: "meer",
    label: "Meer",
    items: [
      { name: "Ganzer gegrillter Hummer", description: "Vom offenen Feuer, Knoblauchbutter", price: "54 £" },
      { name: "Gegrillter Steinbutt", description: "Braune Butter, Kapern", price: "36 £" },
      { name: "Gegrillter Oktopus", description: "Geräuchertes Paprikapulver, Kartoffel", price: "24 £" },
      { name: "Riesengarnelen a la Plancha", description: "Chili, Zitrone, Knoblauch", price: "26 £" },
    ],
  },
  {
    id: "beilagen",
    label: "Beilagen",
    items: [
      { name: "Trüffel-Parmesan-Fries", price: "9 £" },
      { name: "Blattspinat in Sahne", price: "8 £" },
      { name: "Geflämmter Spitzkohl, Sardellenbutter", price: "9 £" },
      { name: "Dreifach frittierte Kartoffeln", price: "7 £" },
      { name: "Gegrillter Mais, Chipotle-Butter", price: "8 £" },
      { name: "Waldpilze, Knoblauch & Thymian", price: "10 £" },
    ],
  },
  {
    id: "saucen",
    label: "Saucen",
    items: [
      { name: "Pfeffersauce", price: "4 £" },
      { name: "Café-de-Paris-Butter", price: "4 £" },
      { name: "Knochenmark-Jus", price: "5 £" },
      { name: "Chimichurri", price: "4 £" },
      { name: "Béarnaise", price: "4 £" },
      { name: "Bourbon-BBQ, geräuchert", price: "4 £" },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    items: [
      { name: "Zartbitterschokoladen-Tarte mit Espresso", price: "12 £" },
      { name: "Baskischer Cheesecake", price: "11 £" },
      { name: "Sticky Toffee Pudding, gesalzenes Karamell", price: "11 £" },
      { name: "Whisky-Baba", price: "13 £" },
      { name: "Käseauswahl", description: "Quitte, Hafercracker", price: "16 £" },
    ],
  },
  {
    id: "wein",
    label: "Wein",
    intro: "Ein Auszug aus dem Keller — die vollständige Karte liegt am Tisch.",
    items: [
      { name: "Champagner, Bollinger Special Cuvée", description: "Frankreich · o. J.", price: "95 £" },
      { name: "Bordeaux, Château Léoville-Barton", description: "Frankreich · 2016", price: "145 £" },
      { name: "Burgund, Gevrey-Chambertin", description: "Frankreich · 2018", price: "165 £" },
      { name: "Barolo, Vietti", description: "Italien · 2017", price: "98 £" },
      { name: "Rioja Reserva, Bodegas Muga", description: "Spanien · 2018", price: "62 £" },
      { name: "Napa Valley Cabernet Sauvignon, Caymus", description: "USA · 2020", price: "115 £" },
      { name: "Chablis Premier Cru, William Fèvre", description: "Frankreich · 2020", price: "68 £" },
    ],
  },
  {
    id: "digestifs",
    label: "Digestifs",
    items: [
      { name: "Macallan 18", description: "Speyside · 25 ml", price: "38 £" },
      { name: "Redbreast 21", description: "Irish Pot Still · 25 ml", price: "34 £" },
      { name: "Yamazaki 12", description: "Japan · 25 ml", price: "30 £" },
      { name: "Woodford Reserve Double Oaked", description: "Kentucky · 25 ml", price: "16 £" },
      { name: "Hennessy XO", description: "Cognac · 25 ml", price: "32 £" },
      { name: "Grappa di Barolo", description: "Italien · 25 ml", price: "14 £" },
    ],
  },
];
