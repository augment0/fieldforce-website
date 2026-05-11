"use client";

import { Reveal } from "@/components/motion/reveal";

type Props = {
  quote: React.ReactNode;
  name: string;
  role: string;
  initials: string;
};

/**
 * Testimonial — large pull-quote with attribution.
 * Reusable across solutions, customer pages, about page, etc.
 */
export function Testimonial({ quote, name, role, initials }: Props) {
  return (
    <section className="relative py-[clamp(80px,10vw,140px)] text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--color-accent-glow),transparent_60%)] opacity-25"
      />
      <div className="shell shell-narrow">
        <Reveal>
          <blockquote className="font-display text-[clamp(22px,2.6vw,32px)] font-medium leading-[1.4] tracking-[-0.012em] text-[var(--color-text)]">
            <span className="mr-1 text-[1.1em] text-[var(--color-accent)]">"</span>
            {quote}
          </blockquote>
        </Reveal>
        <Reveal delay={0.1}>
          <footer className="mt-8 inline-flex items-center gap-[14px] text-[14px] text-[var(--color-text-2)]">
            <div className="grid h-11 w-11 place-items-center rounded-full border border-[var(--color-line)] bg-[linear-gradient(135deg,var(--color-bg-elevated),var(--color-bg-raised))] font-semibold tracking-[0.04em] text-[var(--color-accent)]">
              {initials}
            </div>
            <div className="text-left">
              <div className="font-medium text-[var(--color-text)]">{name}</div>
              <div className="font-mono text-[12px] tracking-[0.04em] text-[var(--color-text-3)]">
                {role}
              </div>
            </div>
          </footer>
        </Reveal>
      </div>
    </section>
  );
}
