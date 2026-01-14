"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Language } from "@/lib/i18n";
import { translations } from "@/lib/i18n";

type LanguageContextValue = {
  lang: Language;
  isRTL: boolean;
  setLang: (lang: Language) => void;
  t: (typeof translations)["en"];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "qahwa-lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
    if (stored === "en" || stored === "ar") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLangState(stored);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.body.dataset.lang = lang;
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      isRTL: lang === "ar",
      setLang: setLangState,
      t: translations[lang],
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
