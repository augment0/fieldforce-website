"use client";

import { motion } from "motion/react";
import { fadeUp, fadeUpStagger } from "@/lib/motion";

export type StatItem = {
  value: string;
  label: string;
  hint?: string;
};

/**
 * StatBar — 3–5 high-level metrics, mono labels.
 * Used below the page hero on solution/platform/about pages.
 */
export function StatBar({ items }: { items: StatItem[] }) {
  return (
    <section className="border-y border-[var(--color-line-subtle)] py-10">
      <div className="shell">
        <motion.ul
          role="list"
          variants={fadeUpStagger(0.05)}
          initial="hidden"
          whileInView="shown"
          viewport={{ once: true, margin: "0px 0px -12% 0px" }}
          className="grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {items.map((s) => (
            <motion.li key={s.label} variants={fadeUp} className="flex flex-col gap-1">
              <span className="font-display text-[clamp(28px,3vw,36px)] font-semibold leading-none tracking-[-0.025em] text-[var(--color-text)]">
                {s.value}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--color-text-3)]">
                {s.label}
              </span>
              {s.hint && (
                <span className="text-[12.5px] text-[var(--color-text-3)]">{s.hint}</span>
              )}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
