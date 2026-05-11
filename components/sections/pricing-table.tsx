"use client";

import { motion } from "motion/react";
import { Button, ArrowIcon } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Badge } from "@/components/ui/badge";
import { SectionShell } from "@/components/ui/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { fadeUp, fadeUpStagger } from "@/lib/motion";
import { cn } from "@/lib/utils";

export type Tier = {
  name: string;
  price: string;
  cadence?: string;
  description: string;
  cta: { href: string; label: string };
  features: string[];
  highlighted?: boolean;
  badge?: string;
};

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  body?: string;
  tiers: Tier[];
  fineprint?: string;
};

export function PricingTable({ eyebrow, title, body, tiers, fineprint }: Props) {
  return (
    <SectionShell>
      <div className="shell">
        <Reveal>
          <header className="mx-auto mb-12 max-w-[680px] text-center">
            {eyebrow && (
              <div className="mb-5 flex justify-center">
                <Eyebrow align="center">{eyebrow}</Eyebrow>
              </div>
            )}
            <h2 className="display-lg">{title}</h2>
            {body && (
              <p className="mx-auto mt-5 max-w-[56ch] text-[16px] leading-[1.6] text-[var(--color-text-2)]">
                {body}
              </p>
            )}
          </header>
        </Reveal>

        <motion.div
          variants={fadeUpStagger(0.07)}
          initial="hidden"
          whileInView="shown"
          viewport={{ once: true, margin: "0px 0px -8% 0px" }}
          className="grid gap-5 md:grid-cols-3"
        >
          {tiers.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              className={cn(
                "relative flex flex-col rounded-[20px] border p-7",
                t.highlighted
                  ? "border-[rgba(111,228,217,0.3)] bg-[linear-gradient(180deg,rgba(111,228,217,0.06),var(--color-bg-raised))]"
                  : "border-[var(--color-line)] bg-[var(--color-bg-raised)]",
              )}
            >
              {t.badge && (
                <div className="absolute -top-3 left-7">
                  <Badge variant="accent">{t.badge}</Badge>
                </div>
              )}
              <h3 className="text-[18px] font-semibold tracking-[-0.01em]">{t.name}</h3>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="font-display text-[40px] font-semibold leading-none tracking-[-0.022em]">
                  {t.price}
                </span>
                {t.cadence && (
                  <span className="text-[14px] text-[var(--color-text-3)]">{t.cadence}</span>
                )}
              </div>
              <p className="mt-3 text-[14px] leading-[1.55] text-[var(--color-text-2)]">
                {t.description}
              </p>
              <Button
                href={t.cta.href}
                variant={t.highlighted ? "primary" : "ghost"}
                trailingIcon={<ArrowIcon />}
                className="mt-6 self-start"
              >
                {t.cta.label}
              </Button>
              <hr className="my-6 border-[var(--color-line-subtle)]" />
              <ul className="flex flex-col gap-[10px]">
                {t.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-[10px] text-[14px] text-[var(--color-text)]"
                  >
                    <svg viewBox="0 0 16 16" className="mt-1 h-[12px] w-[12px] flex-shrink-0 text-[var(--color-accent)]" aria-hidden>
                      <path d="M3 8l3 3 7-7" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {fineprint && (
          <p className="mx-auto mt-12 max-w-[56ch] text-center text-[13.5px] text-[var(--color-text-3)]">
            {fineprint}
          </p>
        )}
      </div>
    </SectionShell>
  );
}
