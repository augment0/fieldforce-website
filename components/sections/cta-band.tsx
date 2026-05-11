"use client";

import { Button, ArrowIcon } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import type { CtaSpec } from "@/components/sections/page-hero";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  body?: string;
  primary: CtaSpec;
  secondary?: CtaSpec;
  fineprint?: string;
  /** When `final`, gets full atmospheric backdrop (used at end of every page). */
  variant?: "final" | "inline";
};

/**
 * CtaBand — two flavours.
 * - `final` is the closing band on every page (atmospheric, large type).
 * - `inline` is a mid-page CTA (compact, single line).
 */
export function CtaBand({
  eyebrow,
  title,
  body,
  primary,
  secondary,
  fineprint,
  variant = "final",
}: Props) {
  if (variant === "inline") {
    return (
      <section className="py-16">
        <div className="shell">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-5 rounded-[14px] border border-[var(--color-line)] bg-[var(--color-bg-raised)] p-7 md:flex-row md:items-center">
              <div>
                <h3 className="text-[20px] font-semibold tracking-[-0.01em]">{title}</h3>
                {body && (
                  <p className="mt-1 text-[14.5px] text-[var(--color-text-2)]">{body}</p>
                )}
              </div>
              <div className="flex flex-shrink-0 flex-wrap gap-3">
                <Button href={primary.href} size="sm" trailingIcon={<ArrowIcon />}>
                  {primary.label}
                </Button>
                {secondary && (
                  <Button href={secondary.href} variant="ghost" size="sm">
                    {secondary.label}
                  </Button>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section className="relative isolate overflow-hidden py-[clamp(96px,14vw,180px)] text-center">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 50%, var(--color-accent-glow), transparent 60%), radial-gradient(ellipse 40% 30% at 70% 30%, var(--color-indigo-glow), transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0 grid-bg opacity-50"
          style={{
            maskImage: "radial-gradient(circle at 50% 50%, black 30%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(circle at 50% 50%, black 30%, transparent 70%)",
          }}
        />
      </div>
      <div className="shell relative z-10">
        {eyebrow && (
          <Reveal>
            <Eyebrow align="center" withTrail>
              {eyebrow}
            </Eyebrow>
          </Reveal>
        )}
        <Reveal delay={0.05}>
          <h2 className="display-lg mt-4">{title}</h2>
        </Reveal>
        {body && (
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-[54ch] text-[clamp(16px,1.2vw,18px)] text-[var(--color-text-2)]">
              {body}
            </p>
          </Reveal>
        )}
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap justify-center gap-[14px]">
            <Button href={primary.href} size="lg" trailingIcon={<ArrowIcon />}>
              {primary.label}
            </Button>
            {secondary && (
              <Button href={secondary.href} variant="ghost" size="lg">
                {secondary.label}
              </Button>
            )}
          </div>
        </Reveal>
        {fineprint && (
          <Reveal delay={0.2}>
            <p className="mt-7 font-mono text-[12px] tracking-[0.04em] text-[var(--color-text-3)]">
              {fineprint}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
