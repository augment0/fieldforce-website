"use client";

import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import { fadeUp, fadeUpStagger } from "@/lib/motion";

export type Compliance = {
  title: string;
  body: React.ReactNode;
  tag?: string;
  icon?: React.ReactNode;
};

/**
 * SecurityGrid — used on /trust to lay out compliance + architecture beats.
 */
export function SecurityGrid({ items }: { items: Compliance[] }) {
  return (
    <motion.div
      variants={fadeUpStagger(0.05)}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
    >
      {items.map((c) => (
        <motion.div key={c.title} variants={fadeUp}>
          <Card className="h-full p-6">
            <div className="grid h-9 w-9 place-items-center rounded-md border border-[var(--color-line)] bg-[var(--color-bg-elevated)] text-[var(--color-accent)]">
              {c.icon ?? <ShieldGlyph />}
            </div>
            <h3 className="mt-5 text-[17px] font-semibold tracking-[-0.01em]">{c.title}</h3>
            {c.tag && (
              <p className="mt-1 font-mono text-[11.5px] tracking-[0.06em] text-[var(--color-text-3)]">
                {c.tag.toUpperCase()}
              </p>
            )}
            <p className="mt-3 text-[14px] leading-[1.55] text-[var(--color-text-2)]">{c.body}</p>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}

function ShieldGlyph() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden>
      <path d="M8 1L2 3v5c0 4 2.5 6 6 7 3.5-1 6-3 6-7V3z" fill="none" stroke="currentColor" strokeWidth="1" />
      <path d="M5.5 8l2 2 3-3" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
