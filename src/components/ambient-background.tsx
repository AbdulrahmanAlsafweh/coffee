"use client";

import { motion } from "framer-motion";

export function AmbientBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-mesh" aria-hidden="true" />
      <div className="absolute inset-0 bg-ornament opacity-20" aria-hidden="true" />
      <div className="absolute inset-0 bg-grain opacity-40 mix-blend-soft-light" aria-hidden="true" />

      <motion.div
        className="absolute -left-24 top-32 h-72 w-72 rounded-full bg-date-200/40 blur-3xl"
        animate={{ y: [0, -18, 0], x: [0, 12, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-6rem] top-10 h-80 w-80 rounded-full bg-gold-500/20 blur-3xl"
        animate={{ y: [0, 24, 0], x: [0, -12, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-8rem] left-1/3 h-96 w-96 rounded-full bg-espresso-400/20 blur-3xl"
        animate={{ y: [0, -16, 0], x: [0, 10, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
