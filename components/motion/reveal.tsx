"use client";

/**
 * Reveal — scroll-triggered fade-up.
 * Composes Motion's `whileInView` with our shared `fadeUp` variants.
 * Use as a wrapper or as a polymorphic `as` element.
 */

import { motion, type HTMLMotionProps } from "motion/react";
import { fadeUp, inViewProps } from "@/lib/motion";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  /** Override the Y distance (defaults to 14 from variants). */
  y?: number;
};

export function Reveal({ children, delay = 0, y, transition, ...rest }: RevealProps) {
  return (
    <motion.div
      variants={fadeUp}
      {...inViewProps}
      transition={{ ...transition, delay }}
      style={y !== undefined ? { ["--reveal-y" as string]: `${y}px` } : undefined}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
