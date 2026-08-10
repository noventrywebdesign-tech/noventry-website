export type GalleryImage = {
  src: string;
  alt: string;
  /** width / height, filled in precisely once real files are on disk (see scripts/gallery-aspect.mjs). */
  aspect: number;
};

export const galleryImages: GalleryImage[] = [
  { src: "/images/gallery-1.jpg", alt: "Plating a dry-aged cut tableside", aspect: 1.0 },
  { src: "/images/gallery-2.jpg", alt: "A pour from the cellar list", aspect: 0.751 },
  { src: "/images/interior-table.jpg", alt: "A table set for two by candlelight", aspect: 0.667 },
  { src: "/images/gallery-4.jpg", alt: "A selection of cuts resting on the board before service", aspect: 1.5 },
  { src: "/images/gallery-3.jpg", alt: "The dining room after dark", aspect: 1.5 },
  { src: "/images/gallery-5.jpg", alt: "Leather and brass in the main room", aspect: 1.497 },
  { src: "/images/whiskey-glass.jpg", alt: "A pour from the whiskey list", aspect: 0.639 },
  { src: "/images/philosophy-detail.jpg", alt: "The coal bed before service", aspect: 0.667 },
];
