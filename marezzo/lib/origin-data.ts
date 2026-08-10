export type OriginEntry = {
  code: string;
  country: string;
  region: string;
  breed: string;
  feed: string;
  marbling: string;
  taste: string;
  texture: string;
  cuts: string;
  specialty: string;
  doneness: string;
  note: string;
  image: string;
};

export const origins: OriginEntry[] = [
  {
    code: "US",
    country: "USA",
    region: "Nebraska, Corn Belt",
    breed: "Angus-Kreuzungen",
    feed: "über 120 Tage Getreide-Endmast",
    marbling: "USDA Prime, oberste 2 % aller Gradings",
    taste: "buttrig, kräftig, leicht süßlich durch den hohen Maisanteil",
    texture: "dicht marmoriert, sehr zart",
    cuts: "Tomahawk, Striploin",
    specialty: "konstante Qualität durch strenge, tägliche Gradings",
    doneness: "Medium",
    note: "Die Endmast mit Getreide ist es, die dem amerikanischen Beef seine dichte, gleichmäßige Marmorierung gibt — der Grund, warum unser Tomahawk von hier kommt.",
    image: "/images/origin-usa.jpg",
  },
  {
    code: "AR",
    country: "Argentinien",
    region: "Die Pampas",
    breed: "Aberdeen Angus, weidegeboren",
    feed: "ganzjährige, reine Weidehaltung",
    marbling: "fein, weniger intensiv als bei Getreidemast",
    taste: "erdig, mineralisch, ausgeprägtes Rindfleischaroma",
    texture: "fest, mit deutlichem Biss",
    cuts: "Bife de Chorizo, Vacío",
    specialty: "traditionelles Asado-Grillen über Quebracho-Holz",
    doneness: "Medium bis Medium Well",
    note: "Reine Weidehaltung bedeutet weniger Fett, aber mehr Charakter — argentinisches Beef schmeckt nach dem Tier, nicht nach dem Trog.",
    image: "/images/origin-argentina.jpg",
  },
  {
    code: "JP",
    country: "Japan",
    region: "Kagoshima",
    breed: "Japanese Black (Kuroge Washu)",
    feed: "über 30 Monate, individuell abgestimmte Fütterung",
    marbling: "A5, BMS 10–12 — die höchste Marmorierungsstufe",
    taste: "extrem mild, buttrig, schmilzt beim Kauen",
    texture: "außergewöhnlich zart, feinste Fettmaserung",
    cuts: "dünn geschnittenes Striploin, Wagyu-Sando",
    specialty: "kleine Portionen, da der Fettgehalt größere überfordern würde",
    doneness: "Rare, kurz angesengt",
    note: "Japanisches Wagyu wird bei uns bewusst anders behandelt als ein klassisches Ribeye: hauchdünn geschnitten, kurz über die Glut, in kleinen Portionen serviert — alles andere würde die Marmorierung erschlagen statt zeigen.",
    image: "/images/origin-japan.jpg",
  },
  {
    code: "IE",
    country: "Irland",
    region: "Galway, Atlantikküste",
    breed: "Hereford und Angus, weidegeboren",
    feed: "reine Weidehaltung im feuchten Atlantikklima",
    marbling: "moderat, mit ausgeprägtem Fettrand",
    taste: "klar, grasig-frisch, weniger süß als Getreidemast",
    texture: "fest, mit gutem Biss",
    cuts: "Porterhouse, Filet",
    specialty: "35 Tage Reifung in unserer hauseigenen Reifekammer",
    doneness: "Medium",
    note: "Das feuchte Atlantikklima lässt die Weiden das ganze Jahr über wachsen — irisches Weiderind hat dadurch ein klareres, weniger süßes Aroma als getreidegemästetes Beef.",
    image: "/images/origin-ireland.jpg",
  },
];
