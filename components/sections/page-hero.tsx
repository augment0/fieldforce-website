"use client";

import { motion } from "motion/react";
import { Button, ArrowIcon } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { fadeUp, fadeUpStagger, easeOutEmphatic } from "@/lib/motion";

export type CtaSpec = { href: string; label: string };

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  body: React.ReactNode;
  primaryCta: CtaSpec;
  secondaryCta?: CtaSpec;
  /** Optional visual placed to the right (or below on mobile). */
  visual?: React.ReactNode;
  /** Pinned strip below the hero (e.g. live metrics). */
  meta?: React.ReactNode;
};

/**
 * PageHero — the canonical hero used on every inner page.
 * Same shape across `/platform`, `/solutions/*`, `/agents/*`, `/customers/*`, etc.
 */
export function PageHero({
  eyebrow,
  title,
  body,
  primaryCta,
  secondaryCta,
  visual,
  meta,
}: Props) {
  return (
    <section className="relative isolate overflow-hidden pb-12 pt-12 sm:pb-16 sm:pt-16 lg:pt-20">
      <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,var(--color-accent-glow),transparent_65%)] opacity-50 blur-[80px]" />
        <div
          className="absolute inset-0 grid-bg opacity-60"
          style={{
            maskImage: "radial-gradient(circle at 50% 30%, black 30%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(circle at 50% 30%, black 30%, transparent 75%)",
          }}
        />
      </div>

      <div className="shell">
        <div
          className={
            visual
              ? "grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]"
              : "max-w-[820px]"
          }
        >
          <motion.div initial="hidden" animate="shown" variants={fadeUpStagger(0.06)}>
            <motion.div variants={fadeUp}>
              <Eyebrow>{eyebrow}</Eyebrow>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.9, ease: easeOutEmphatic }}
              className="display-lg mt-5"
            >
              {title}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-[58ch] text-[clamp(16px,1.3vw,18px)] leading-[1.6] text-[var(--color-text-2)]"
            >
              {body}
            </motion.p>
            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
              <Button href={primaryCta.href} trailingIcon={<ArrowIcon />}>
                {primaryCta.label}
              </Button>
              {secondaryCta && (
                <Button href={secondaryCta.href} variant="ghost" trailingIcon={<ArrowIcon />}>
                  {secondaryCta.label}
                </Button>
              )}
            </motion.div>
          </motion.div>

          {visual && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: easeOutEmphatic, delay: 0.2 }}
              className="relative mx-auto w-full max-w-[520px]"
            >
              {visual}
            </motion.div>
          )}
        </div>

        {meta && <div className="mt-14">{meta}</div>}
      </div>
    </section>
  );
}
