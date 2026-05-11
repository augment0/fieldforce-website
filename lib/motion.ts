/**
 * Shared motion primitives — Variants, easings, and common transitions.
 * Import these into Motion components to keep the motion language consistent.
 */

import type { Transition, Variants } from "motion/react";

export const easeOutEmphatic: Transition["ease"] = [0.16, 1, 0.3, 1];
export const easeOutSnappy:    Transition["ease"] = [0.2, 0.8, 0.2, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  shown:  { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOutEmphatic } },
};

export const fadeUpStagger = (stagger = 0.06): Variants => ({
  hidden: {},
  shown:  { transition: { staggerChildren: stagger, delayChildren: 0.04 } },
});

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  shown:  { opacity: 1, scale: 1, transition: { duration: 0.6, ease: easeOutEmphatic } },
};

export const drawIn: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  shown:  { pathLength: 1, opacity: 1, transition: { duration: 1.6, ease: easeOutEmphatic } },
};

export const inViewProps = {
  initial: "hidden",
  whileInView: "shown",
  viewport: { once: true, margin: "0px 0px -8% 0px" },
} as const;
