"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { galleryImages } from "@/data/gallery";
import { SectionHeading } from "@/components/section-heading";

type GalleryImage = (typeof galleryImages)[number];

export default function GalleryClient() {
  const [selected, setSelected] = useState<GalleryImage | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!selected) return;
    closeButtonRef.current?.focus();
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelected(null);
      }
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-24 pt-16 md:px-10">
      <SectionHeading
        eyebrow="Gallery"
        title="Saudi coffee culture in motion"
        description="A visual story of qahwa rituals, interiors, and Najdi-inspired details."
      />

      <div className="columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3">
        {galleryImages.map((image, index) => (
          <motion.button
            key={image.src + index}
            type="button"
            onClick={() => setSelected(image)}
            className="w-full break-inside-avoid overflow-hidden rounded-[24px] border border-sand-200 bg-cream-50 shadow-card"
            aria-label={`Open image: ${image.alt}`}
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.98 }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={520}
              height={420}
              className="h-auto w-full object-cover"
            />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selected ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-espresso-950/50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Gallery lightbox"
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative w-full max-w-4xl overflow-hidden rounded-[28px] border border-sand-200 bg-sand-50 shadow-soft"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={selected.src}
                alt={selected.alt}
                width={1200}
                height={800}
                className="h-auto w-full object-cover"
              />
              <div className="flex items-center justify-between px-6 py-4">
                <p className="text-sm text-espresso-600">{selected.alt}</p>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => setSelected(null)}
                  className="rounded-full border border-sand-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-espresso-600 hover:border-espresso-400"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
