"use client";

/**
 * Parallax — scroll-linked translate based on element progress through viewport.
 * Built on Motion's useScroll/useTransform, GPU-accelerated, transform-only.
 *
 * Use:
 *   <Parallax intensity={0.18}>...</Parallax>
 *
 * For pointer-tilt parallax on a single hero visual, see HeroParallax inside Hero.
 */

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type ParallaxProps = {
  children: React.ReactNode;
  intensity?: number; // -1..1 scale (px multiplier ~80)
  className?: string;
};

export function Parallax({ children, intensity = 0.12, className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [intensity * 80, intensity * -80]);

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      style={reduced ? undefined : { y }}
    >
      {children}
    </motion.div>
  );
}
