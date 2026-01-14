"use client";

import type { HTMLAttributes } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type FadeInProps = HTMLAttributes<HTMLDivElement> & {
  delay?: number;
};

export function FadeIn({ children, delay = 0, className, ...props }: FadeInProps) {
  return (
    <motion.div
      className={cn("animate-fade-in", className)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, amount: 0.2 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
