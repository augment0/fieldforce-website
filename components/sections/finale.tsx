"use client";

import { Button, ArrowIcon } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";

export function Finale() {
  return (
    <section
      id="demo"
      className="relative isolate overflow-hidden py-[clamp(100px,14vw,180px)] text-center"
    >
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
        <Reveal>
          <Eyebrow align="center" withTrail>SEE FIELDFORCE ON YOUR NETWORK</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="display-xl mt-4">
            The networks of the future{" "}
            <span className="text-[var(--color-text-2)]">won't run themselves.</span>
            <br />
            <span className="grad-text">Fieldforce will.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap justify-center gap-[14px]">
            <Button href="#demo-form" size="lg" trailingIcon={<ArrowIcon />}>
              Book a demo
            </Button>
            <Button href="mailto:engineering@fieldforce.com" variant="ghost" size="lg">
              Talk to engineering
            </Button>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-7 font-mono text-[12px] tracking-[0.04em] text-[var(--color-text-3)]">
            First site live in 24 hours. No code. No SI. No quarter-long onboarding.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
