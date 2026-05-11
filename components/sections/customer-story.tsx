"use client";

import { Reveal } from "@/components/motion/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";

export function CustomerStory() {
  return (
    <section className="relative py-[clamp(80px,10vw,140px)] text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--color-accent-glow),transparent_60%)] opacity-25"
      />
      <div className="shell shell-narrow">
        <Reveal>
          <Eyebrow align="center" withTrail>A CUSTOMER VOICE</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <blockquote className="my-8 font-display text-[clamp(22px,2.6vw,32px)] font-medium leading-[1.4] tracking-[-0.012em] text-[var(--color-text)]">
            <span className="mr-[4px] text-[1.1em] text-[var(--color-accent)]">"</span>
            We're three years into our partnership with Fieldforce. We've completely digitized
            asset management and field operations across our network.{" "}
            <strong className="font-semibold">Four systems retired. Crew-day waste cut 22%.</strong>
          </blockquote>
        </Reveal>
        <Reveal delay={0.1}>
          <footer className="inline-flex items-center gap-[14px] text-[14px] text-[var(--color-text-2)]">
            <div className="grid h-11 w-11 place-items-center rounded-full border border-[var(--color-line)] bg-[linear-gradient(135deg,var(--color-bg-elevated),var(--color-bg-raised))] font-semibold tracking-[0.04em] text-[var(--color-accent)]">
              <span>HG</span>
            </div>
            <div>
              <div className="font-medium text-[var(--color-text)]">Haynes Griffin</div>
              <div className="font-mono text-[12px] tracking-[0.04em] text-[var(--color-text-3)]">
                CEO · SmartSky Networks
              </div>
            </div>
          </footer>
        </Reveal>
      </div>
    </section>
  );
}
