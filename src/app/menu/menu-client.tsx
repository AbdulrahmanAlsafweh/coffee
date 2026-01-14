"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { menuCategories, menuItems, type MenuCategory, type MenuItem } from "@/data/menu";
import { useLanguage } from "@/components/language-provider";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function MenuClient() {
  const { t, isRTL } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("Saudi Qahwa");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [cartCount, setCartCount] = useState(0);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const filteredItems = useMemo(
    () => menuItems.filter((item) => item.category === activeCategory),
    [activeCategory]
  );

  useEffect(() => {
    if (!selectedItem) return;
    closeButtonRef.current?.focus();
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedItem(null);
      }
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [selectedItem]);

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-24 pt-16 md:px-10">
      <SectionHeading
        eyebrow="Menu"
        title="A curated Saudi coffee menu"
        description="Explore qahwa rituals, espresso interpretations, and Najdi-inspired comfort dishes."
      />

      <div className={cn("flex flex-wrap items-center gap-3", isRTL && "justify-end")}>
        <div
          className="flex flex-wrap items-center gap-3"
          role="tablist"
          aria-label="Menu categories"
        >
          {menuCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-semibold transition",
                activeCategory === category
                  ? "border-espresso-800 bg-espresso-800 text-sand-50 shadow-card"
                  : "border-sand-200 bg-cream-50 text-espresso-700 hover:bg-sand-100"
              )}
              role="tab"
              aria-selected={activeCategory === category}
            >
              {t.menu.categories[category]}
            </button>
          ))}
        </div>
        <div
          className={cn(
            "ml-auto rounded-full border border-sand-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-espresso-500",
            isRTL && "ml-0 mr-auto"
          )}
        >
          Cart {cartCount}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filteredItems.map((item) => (
          <motion.button
            key={item.id}
            type="button"
            onClick={() => setSelectedItem(item)}
            className="group flex cursor-pointer flex-col rounded-[24px] border border-sand-200 bg-cream-50 p-5 text-left shadow-card transition hover:-translate-y-1 hover:border-espresso-400"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            <Image
              src={item.image}
              alt={item.name}
              width={420}
              height={280}
              className="h-44 w-full rounded-[20px] object-cover"
            />
            <div className="mt-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-espresso-950">{item.name}</h3>
              <span className="text-sm font-semibold text-espresso-700">SAR {item.price}</span>
            </div>
            <p className="mt-2 text-sm text-espresso-600">{item.description}</p>
            {item.badges?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {item.badges.map((badge) => (
                  <Badge key={badge} label={badge} />
                ))}
              </div>
            ) : null}
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selectedItem ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-espresso-950/40 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedItem.name} details`}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className="w-full max-w-xl rounded-[28px] border border-sand-200 bg-sand-50 p-6 shadow-soft"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-espresso-400">
                    {selectedItem.category}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-espresso-950">
                    {selectedItem.name}
                  </h3>
                </div>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  className="rounded-full border border-sand-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-espresso-600 hover:border-espresso-400"
                >
                  Close
                </button>
              </div>
              <div className="mt-4">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  width={520}
                  height={360}
                  className="h-56 w-full rounded-[22px] object-cover"
                />
              </div>
              <p className="mt-4 text-sm text-espresso-600">{selectedItem.description}</p>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                <span className="text-lg font-semibold text-espresso-950">
                  SAR {selectedItem.price}
                </span>
                <Button
                  onClick={() => setCartCount((count) => count + 1)}
                  variant="primary"
                >
                  Add to Order
                </Button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
