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
    id: "starters",
    label: "Starters",
    items: [
      { name: "Bone Marrow & Grilled Sourdough", description: "Roasted marrow, parsley gremolata, Maldon salt", price: "£16" },
      { name: "Beef Tartare, Smoked Egg Yolk", description: "Hand-cut fillet, charred shallot, rye crisp", price: "£18" },
      { name: "Seared Scallops, Nduja Butter", description: "Orkney scallops, brown butter, chilli oil", price: "£22" },
      { name: "Burrata, Charred Heritage Tomato", description: "Basil oil, aged balsamic, sourdough", price: "£15" },
      { name: "Foie Gras Torchon, Smoked Cherry", description: "Brioche, port reduction", price: "£19" },
      { name: "Tuna Tartare, Ponzu & Avocado", description: "Yellowfin, sesame, wasabi crème", price: "£17" },
    ],
  },
  {
    id: "dry-aged",
    label: "Dry Aged",
    intro: "Aged in-house, six weeks minimum, in our on-site cold room.",
    items: [
      { name: "Dry-Aged Ribeye", tag: "350g · 45-day · Yorkshire", price: "£58" },
      { name: "Dry-Aged Sirloin", tag: "300g · 60-day · Cumbria", price: "£64" },
      { name: "Dry-Aged T-Bone", tag: "700g · 40-day · Aberdeenshire", price: "£89" },
      { name: "Dry-Aged Bavette", tag: "280g · 30-day · Yorkshire", price: "£42" },
    ],
  },
  {
    id: "wagyu",
    label: "Wagyu",
    intro: "A5-graded and Australian crossbred, sliced and served to marbling, not habit.",
    items: [
      { name: "A5 Wagyu Striploin", tag: "150g · BMS 10-12 · Miyazaki", price: "£98" },
      { name: "A5 Wagyu Sando", description: "Toasted milk bread, black garlic mayo", price: "£28" },
      { name: "Wagyu Tartare", description: "Hand-cut, quail yolk, shaved black truffle", price: "£32" },
      { name: "Australian Wagyu Ribeye", tag: "300g · MB8", price: "£68" },
    ],
  },
  {
    id: "steak-classics",
    label: "Steak Classics",
    items: [
      { name: "Fillet", tag: "250g · Yorkshire grass-fed", price: "£48" },
      { name: "Sirloin", tag: "300g", price: "£42" },
      { name: "Rump", tag: "300g · 21-day aged", price: "£34" },
      { name: "Onglet (Hanger)", tag: "300g · butcher's cut", price: "£36" },
      { name: "Chateaubriand for Two", tag: "600g · carved tableside", price: "£110" },
    ],
  },
  {
    id: "seafood",
    label: "Seafood",
    items: [
      { name: "Whole Grilled Lobster", description: "Chargrilled, garlic butter", price: "£54" },
      { name: "Grilled Halibut", description: "Brown butter, capers", price: "£36" },
      { name: "Charred Octopus", description: "Smoked paprika, potato", price: "£24" },
      { name: "King Prawns a la Plancha", description: "Chilli, lemon, garlic", price: "£26" },
    ],
  },
  {
    id: "sides",
    label: "Sides",
    items: [
      { name: "Truffle & Parmesan Fries", price: "£9" },
      { name: "Creamed Spinach", price: "£8" },
      { name: "Charred Hispi Cabbage, Anchovy Butter", price: "£9" },
      { name: "Triple-Cooked Chips", price: "£7" },
      { name: "Grilled Corn, Chipotle Butter", price: "£8" },
      { name: "Wild Mushrooms, Garlic & Thyme", price: "£10" },
    ],
  },
  {
    id: "sauces",
    label: "Sauces",
    items: [
      { name: "Peppercorn", price: "£4" },
      { name: "Café de Paris Butter", price: "£4" },
      { name: "Bone Marrow Jus", price: "£5" },
      { name: "Chimichurri", price: "£4" },
      { name: "Béarnaise", price: "£4" },
      { name: "Smoked Bourbon BBQ", price: "£4" },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    items: [
      { name: "Dark Chocolate & Espresso Tart", price: "£12" },
      { name: "Burnt Basque Cheesecake", price: "£11" },
      { name: "Sticky Toffee, Salted Caramel", price: "£11" },
      { name: "Whiskey-Soaked Baba", price: "£13" },
      { name: "Cheese Board", description: "Quince, oat crackers", price: "£16" },
    ],
  },
  {
    id: "wine",
    label: "Wine",
    intro: "A 400-bin cellar list — the full pour is in the Cellar room downstairs.",
    items: [
      { name: "Rioja Reserva, Bodegas Muga", description: "Spain · 2018", price: "£62" },
      { name: "Barolo, Vietti", description: "Italy · 2017", price: "£98" },
      { name: "Napa Cabernet Sauvignon, Caymus", description: "USA · 2020", price: "£115" },
      { name: "Malbec, Catena Zapata", description: "Argentina · 2019", price: "£54" },
      { name: "Chablis Premier Cru, William Fèvre", description: "France · 2020", price: "£68" },
      { name: "Champagne, Bollinger Special Cuvée", description: "France · NV", price: "£95" },
    ],
  },
  {
    id: "whiskey",
    label: "Whiskey",
    items: [
      { name: "Macallan 18", description: "Speyside · 25ml", price: "£38" },
      { name: "Redbreast 21", description: "Irish Pot Still · 25ml", price: "£34" },
      { name: "Yamazaki 12", description: "Japan · 25ml", price: "£30" },
      { name: "Woodford Reserve Double Oaked", description: "Kentucky · 25ml", price: "£16" },
    ],
  },
];
