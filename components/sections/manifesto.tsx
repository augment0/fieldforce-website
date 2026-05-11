"use client";

import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";

/**
 * Manifesto — paradigm-naming center column with word-by-word
 * scroll-driven illumination (Linear/Anthropic-style reveal).
 */
export function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.4"],
  });

  const text =
    "Every cell tower, every charger, every gateway is a networked asset producing telemetry, evidence, and decisions in real time. The teams winning the next decade aren't the ones with bigger crews. They're the ones whose software makes those crews ten times sharper.";
  const words = text.split(" ");

  return (
    <section className="relative py-[clamp(96px,12vw,160px)] text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--color-accent-glow),transparent_50%)] opacity-35"
      />
      <div ref={ref} className="shell shell-narrow">
        <Reveal>
          <Eyebrow align="center" withTrail>THE SHIFT</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="display-lg mt-5">
            Infrastructure used to be project-managed.{" "}
            <span className="text-[var(--color-text-2)]">Now it operates itself.</span>
          </h2>
        </Reveal>

        <p
          className="mx-auto mt-9 max-w-[56ch] text-[clamp(17px,1.4vw,20px)] leading-[1.65] text-[var(--color-text-2)]"
          aria-label={text}
        >
          {words.map((w, i) => (
            <Word
              key={i}
              progress={scrollYProgress}
              start={i / words.length}
              end={(i + 1) / words.length}
            >
              {w}
            </Word>
          ))}
        </p>

        <Reveal delay={0.1}>
          <p className="mt-6 text-[18px] font-medium text-[var(--color-text)]">
            Fieldforce is built for them.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Word({
  children,
  progress,
  start,
  end,
}: {
  children: React.ReactNode;
  progress: MotionValue<number>;
  start: number;
  end: number;
}) {
  const opacity = useTransform(progress, [start, end], [0.25, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.25em]">
      {children}
    </motion.span>
  );
}
