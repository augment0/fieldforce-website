"use client";

import { motion } from "motion/react";
import { SectionShell } from "@/components/ui/section-shell";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { fadeUp, fadeUpStagger } from "@/lib/motion";

export type IntegrationCategory = {
  label: string;
  items: string[];
};

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  body?: string;
  categories: IntegrationCategory[];
  footnote?: string;
  id?: string;
};

/**
 * IntegrationGrid — categorized list of integrations.
 * Used on platform/integrations and on each solution page.
 */
export function IntegrationGrid({
  eyebrow,
  title,
  body,
  categories,
  footnote,
  id,
}: Props) {
  return (
    <SectionShell id={id} tone="tight">
      <div className="shell">
        <Reveal>
          <header className="mb-12 max-w-[680px]">
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            <h2 className="display-lg mt-5">{title}</h2>
            {body && (
              <p className="mt-5 max-w-[56ch] text-[16px] leading-[1.6] text-[var(--color-text-2)]">
                {body}
              </p>
            )}
          </header>
        </Reveal>

        <motion.div
          variants={fadeUpStagger(0.05)}
          initial="hidden"
          whileInView="shown"
          viewport={{ once: true, margin: "0px 0px -8% 0px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map((c) => (
            <motion.div
              key={c.label}
              variants={fadeUp}
              className="rounded-[14px] border border-[var(--color-line)] bg-[var(--color-bg-raised)] p-6"
            >
              <p className="mb-4 font-mono text-[11px] tracking-[0.12em] text-[var(--color-text-3)]">
                {c.label.toUpperCase()}
              </p>
              <ul className="flex flex-wrap gap-2">
                {c.items.map((it) => (
                  <li
                    key={it}
                    className="rounded-md border border-[var(--color-line-subtle)] bg-[var(--color-bg-elevated)] px-[10px] py-[5px] font-mono text-[12px] text-[var(--color-text)]"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {footnote && (
          <p className="mt-10 max-w-[56ch] text-[14px] text-[var(--color-text-3)]">
            {footnote}
          </p>
        )}
      </div>
    </SectionShell>
  );
}
