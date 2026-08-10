export type OriginEntry = {
  code: string;
  country: string;
  cut: string;
  quality: string;
  note: string;
  image: string;
};

export const origins: OriginEntry[] = [
  {
    code: "US",
    country: "USA",
    cut: "Prime Tomahawk & Striploin",
    quality: "USDA Prime, top 2% of graded beef",
    note: "Corn-finished in Nebraska for dense, consistent marbling.",
    image: "/images/origin-usa.jpg",
  },
  {
    code: "AR",
    country: "Argentina",
    cut: "Bife de Chorizo & Vacío",
    quality: "Pasture-raised, asado-grade",
    note: "Grass-fed on the Pampas, cooked the way it's always been — over open wood fire.",
    image: "/images/origin-argentina.jpg",
  },
  {
    code: "JP",
    country: "Japan",
    cut: "A5 Wagyu",
    quality: "BMS 10-12, the highest marbling grade",
    note: "Miyazaki prefecture, individually certified by lineage.",
    image: "/images/origin-japan.jpg",
  },
  {
    code: "IE",
    country: "Ireland",
    cut: "Porterhouse & Fillet",
    quality: "Grass-fed, 35-day dry-aged",
    note: "Galway pastures, aged in-house in our on-site cold room.",
    image: "/images/origin-ireland.jpg",
  },
];
