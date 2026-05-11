"use client";

import { motion } from "motion/react";
import { SectionShell } from "@/components/ui/section-shell";
import { Eyebrow } from "@/components/ui/eyebrow";
import { LinkArrow } from "@/components/ui/link-arrow";
import { Reveal } from "@/components/motion/reveal";
import { Parallax } from "@/components/motion/parallax";
import { fadeUp } from "@/lib/motion";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  body: React.ReactNode;
  /** Bullet list rendered below the body. */
  bullets?: string[];
  visual: React.ReactNode;
  /** Reverse columns for alternating sections. */
  reverse?: boolean;
  /** Optional inline CTA. */
  cta?: { href: string; label: string };
  id?: string;
};

/**
 * FeatureSplit — text + visual two-column section. Alternates direction via `reverse`.
 * Used to walk a reader through 3–6 capabilities in a row.
 */
export function FeatureSplit({
  eyebrow,
  title,
  body,
  bullets,
  visual,
  reverse,
  cta,
  id,
}: Props) {
  return (
    <SectionShell id={id} tone="tight">
      <div className="shell">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className={reverse ? "lg:order-2" : undefined}>
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            <h3 className="mt-5 text-[clamp(28px,3.4vw,40px)] font-semibold leading-[1.1] tracking-[-0.018em]">
              {title}
            </h3>
            <div className="mt-5 max-w-[52ch] text-[16px] leading-[1.6] text-[var(--color-text-2)]">
              {body}
            </div>
            {bullets && (
              <ul className="mt-6 flex flex-col gap-3">
                {bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-[10px] text-[15px] text-[var(--color-text)]"
                  >
                    <span
                      aria-hidden
                      className="mt-[7px] inline-block h-[5px] w-[5px] flex-shrink-0 rounded-full bg-[var(--color-accent)]"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
            {cta && (
              <div className="mt-7">
                <LinkArrow href={cta.href}>{cta.label}</LinkArrow>
              </div>
            )}
          </Reveal>
          <Parallax intensity={-0.04} className={reverse ? "lg:order-1" : undefined}>
            <motion.div
              initial="hidden"
              whileInView="shown"
              viewport={{ once: true, margin: "0px 0px -8% 0px" }}
              variants={fadeUp}
              className="rounded-[14px] border border-[var(--color-line)] bg-[var(--color-bg-raised)] p-6"
            >
              {visual}
            </motion.div>
          </Parallax>
        </div>
      </div>
    </SectionShell>
  );
}
