"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { LanguageToggle } from "@/components/language-toggle";
import { useLanguage } from "@/components/language-provider";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/menu", key: "menu" },
  { href: "/gallery", key: "gallery" },
  { href: "/contact", key: "contact" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const { t, isRTL } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-espresso-800 focus:px-4 focus:py-2 focus:text-sand-50"
      >
        {t.common.skipToContent}
      </a>
      <div className="border-b border-sand-200/60 bg-sand-50/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-10">
          <div className={cn("flex items-center gap-4", isRTL && "flex-row-reverse")}>
            <Link href="/" className="text-lg font-semibold tracking-wide text-espresso-950">
              {t.brand.name}
            </Link>
          </div>

          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium text-espresso-600 transition hover:text-espresso-950",
                  pathname === link.href && "text-espresso-950"
                )}
              >
                {t.nav[link.key]}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <LanguageToggle />
          </div>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex items-center rounded-full border border-sand-200 px-3 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-espresso-800 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {t.common.menu}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            className="border-b border-sand-200/60 bg-sand-50 shadow-soft md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6">
              <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "text-base font-medium text-espresso-700",
                      pathname === link.href && "text-espresso-950"
                    )}
                  >
                    {t.nav[link.key]}
                  </Link>
                ))}
              </nav>
              <LanguageToggle />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
