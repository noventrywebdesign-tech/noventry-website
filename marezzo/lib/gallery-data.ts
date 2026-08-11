export type GalleryImage = {
  src: string;
  alt: string;
  /** width / height, filled in precisely once real files are on disk (see scripts/gallery-aspect.mjs). */
  aspect: number;
};

export const galleryImages: GalleryImage[] = [
  { src: "/images/gallery-1.jpg", alt: "Ein dry-aged Cut wird am Tisch angerichtet", aspect: 1.0 },
  { src: "/images/gallery-2.jpg", alt: "Ein Wein aus der Kellerkarte wird eingeschenkt", aspect: 0.751 },
  { src: "/images/gallery-table-detail.jpg", alt: "Ein Tisch für zwei, eingedeckt bei Kerzenlicht", aspect: 0.667 },
  { src: "/images/gallery-4.jpg", alt: "Ausgewählte Cuts ruhen auf dem Brett vor dem Service", aspect: 1.5 },
  { src: "/images/gallery-3.jpg", alt: "Der Gastraum nach Einbruch der Dunkelheit", aspect: 1.5 },
  { src: "/images/gallery-5.jpg", alt: "Leder und Messing im Hauptraum", aspect: 1.497 },
  { src: "/images/gallery-whiskey-alt.jpg", alt: "Ein Whisky aus der Digestif-Karte", aspect: 0.666 },
  { src: "/images/gallery-embers.jpg", alt: "Glühende Kohle vor Servicebeginn", aspect: 1.503 },
];
