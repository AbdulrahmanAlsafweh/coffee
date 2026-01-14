"use client";

import { useLanguage } from "@/components/language-provider";
import { cn } from "@/lib/utils";

export function LanguageToggle() {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      className="flex items-center rounded-full border border-sand-200 bg-cream-50 p-1 text-xs font-semibold uppercase tracking-wider"
      role="group"
      aria-label="Language toggle"
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        className={cn(
          "rounded-full px-3 py-1 transition",
          lang === "en"
            ? "bg-espresso-800 text-sand-50 shadow-soft"
            : "text-espresso-800 hover:bg-sand-100"
        )}
        aria-pressed={lang === "en"}
      >
        {t.toggle.en}
      </button>
      <button
        type="button"
        onClick={() => setLang("ar")}
        className={cn(
          "rounded-full px-3 py-1 transition",
          lang === "ar"
            ? "bg-espresso-800 text-sand-50 shadow-soft"
            : "text-espresso-800 hover:bg-sand-100"
        )}
        aria-pressed={lang === "ar"}
      >
        {t.toggle.ar}
      </button>
    </div>
  );
}
