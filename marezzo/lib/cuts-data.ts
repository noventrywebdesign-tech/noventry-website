export type SignatureCut = {
  index: string;
  name: string;
  weight: string;
  aging: string;
  origin: string;
  price: string;
  description: string;
  image: string;
};

export const signatureCuts: SignatureCut[] = [
  {
    index: "01",
    name: "Dry-Aged Ribeye",
    weight: "350g",
    aging: "45-day dry-aged",
    origin: "Yorkshire, England",
    price: "£58",
    description: "Deep marbling, a mineral crust from six weeks in our aging room, finished over English oak coal.",
    image: "/images/cut-ribeye.jpg",
  },
  {
    index: "02",
    name: "USDA Prime Tomahawk",
    weight: "1000g",
    aging: "28-day aged",
    origin: "Nebraska, USA",
    price: "£128",
    description: "Bone-in and built for the table — carved tableside, basted in smoked bone marrow butter.",
    image: "/images/cut-tomahawk.jpg",
  },
  {
    index: "03",
    name: "Japanese A5 Wagyu",
    weight: "100g",
    aging: "Fresh, ice-aged 7 days",
    origin: "Miyazaki, Japan",
    price: "£72",
    description: "A5-graded, sliced thin, seared in seconds — the marbling does the rest of the work.",
    image: "/images/cut-wagyu.jpg",
  },
  {
    index: "04",
    name: "Porterhouse",
    weight: "800g",
    aging: "35-day dry-aged",
    origin: "Galway, Ireland",
    price: "£96",
    description: "Two cuts, one bone — a grass-fed strip and fillet, sliced and shared at the table.",
    image: "/images/cut-porterhouse.jpg",
  },
];
