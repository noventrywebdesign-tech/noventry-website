"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Media from "@/components/ui/Media";
import Reveal from "@/components/ui/Reveal";
import { galleryImages, type GalleryImage } from "@/lib/gallery-data";

// CSS `columns-*` masonry can leave one column visibly short even with a
// naive packing pass layered on top (two compounding causes: mismatched tile
// aspect ratios, and greedy array-order assignment clustering tall items
// late). Real aspect ratios + an LPT (tallest-first) greedy sort into the
// shortest column, then a re-sort back to manifest order per column, is the
// fix that actually balances columns.
function packColumns(images: GalleryImage[], columnCount: number): GalleryImage[][] {
  const columns: GalleryImage[][] = Array.from({ length: columnCount }, () => []);
  const heights = new Array(columnCount).fill(0);
  const bySrc = new Map(images.map((img, i) => [img.src, i]));

  [...images]
    .sort((a, b) => 1 / b.aspect - 1 / a.aspect)
    .forEach((img) => {
      const shortest = heights.indexOf(Math.min(...heights));
      columns[shortest].push(img);
      heights[shortest] += 1 / img.aspect;
    });

  columns.forEach((col) => col.sort((a, b) => (bySrc.get(a.src) ?? 0) - (bySrc.get(b.src) ?? 0)));
  return columns;
}

function useColumnCount() {
  const [count, setCount] = useState(1);
  useEffect(() => {
    const mq2 = window.matchMedia("(min-width: 768px)");
    const mq3 = window.matchMedia("(min-width: 1280px)");
    const update = () => setCount(mq3.matches ? 3 : mq2.matches ? 2 : 1);
    update();
    mq2.addEventListener("change", update);
    mq3.addEventListener("change", update);
    return () => {
      mq2.removeEventListener("change", update);
      mq3.removeEventListener("change", update);
    };
  }, []);
  return count;
}

export default function Gallery() {
  const columnCount = useColumnCount();
  const columns = packColumns(galleryImages, columnCount);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i === null ? null : (i + 1) % galleryImages.length));
      if (e.key === "ArrowLeft") setLightbox((i) => (i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <section id="galerie" className="relative scroll-mt-20 bg-char-950 px-6 py-24 md:px-16 md:py-32">
      <Reveal>
        <p className="eyebrow mb-6">08 / Galerie</p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="max-w-xl font-display text-4xl leading-[1.05] text-linen-50 md:text-6xl">Ein genauerer Blick.</h2>
      </Reveal>

      <div className="mt-14 flex gap-4">
        {columns.map((col, ci) => (
          <div key={ci} className="flex flex-1 flex-col gap-4">
            {col.map((img) => {
              const globalIndex = galleryImages.indexOf(img);
              return (
                <button
                  key={img.src}
                  data-cursor="ANSEHEN"
                  onClick={() => setLightbox(globalIndex)}
                  className="group relative block w-full overflow-hidden"
                  style={{ aspectRatio: img.aspect }}
                  aria-label={`Ansehen: ${img.alt}`}
                >
                  <Media
                    src={img.src}
                    alt={img.alt}
                    className="photo-warm h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                </button>
              );
            })}
          </div>
        ))}
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-char-950/95 p-4 backdrop-blur-sm md:p-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.img
              key={galleryImages[lightbox].src}
              src={galleryImages[lightbox].src}
              alt={galleryImages[lightbox].alt}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-full max-w-full object-contain"
            />
            <button
              onClick={() => setLightbox(null)}
              aria-label="Schließen"
              className="absolute right-6 top-6 text-xs uppercase tracking-[0.2em] text-linen-200 hover:text-linen-50"
            >
              Schließen ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
