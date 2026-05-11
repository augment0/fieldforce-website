"use client";

/**
 * ScrollProgress — a thin top-of-page progress bar tied to document scroll.
 * Tasteful and quiet. Disabled in reduced-motion.
 */

import { motion, useScroll, useSpring, useReducedMotion } from "motion/react";

export function ScrollProgress() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 220, damping: 32, mass: 0.6 });

  if (reduced) return null;

  return (
    <motion.div
      aria-hidden
      style={{ scaleX: x, transformOrigin: "0 0" }}
      className="fixed inset-x-0 top-0 z-[110] h-px bg-[var(--color-accent)]"
    />
  );
}
