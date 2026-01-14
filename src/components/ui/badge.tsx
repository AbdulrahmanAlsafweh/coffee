"use client";

import { cn } from "@/lib/utils";

type BadgeProps = {
  label: string;
  variant?: "default" | "accent";
};

export function Badge({ label, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]",
        variant === "accent"
          ? "bg-gold-500/20 text-espresso-800"
          : "bg-sand-100 text-espresso-700"
      )}
    >
      {label}
    </span>
  );
}
