"use client";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-3", align === "center" && "text-center")}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-espresso-400">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold text-espresso-950 md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-sm text-espresso-600 md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
