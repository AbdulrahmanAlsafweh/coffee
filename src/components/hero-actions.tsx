"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { buttonClasses } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroActions() {
  const { t, isRTL } = useLanguage();

  return (
    <div className={cn("flex flex-wrap items-center gap-4", isRTL && "justify-end")}>
      <Link href="/menu" className={buttonClasses({ variant: "primary", size: "lg" })}>
        {t.hero.ctaPrimary}
      </Link>
      <Link href="/contact" className={buttonClasses({ variant: "secondary", size: "lg" })}>
        {t.hero.ctaSecondary}
      </Link>
    </div>
  );
}
