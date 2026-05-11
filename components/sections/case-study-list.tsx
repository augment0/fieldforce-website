"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fadeUp, fadeUpStagger } from "@/lib/motion";

export type CaseStudy = {
  slug: string;
  customer: string;
  vertical: "Telecom" | "EV & Energy" | "IoT";
  headline: string;
  metric: { value: string; label: string };
  thumbnail?: React.ReactNode;
};

export function CaseStudyList({ items }: { items: CaseStudy[] }) {
  if (!items.length) {
    return null;
  }
  return (
    <motion.ul
      role="list"
      variants={fadeUpStagger(0.07)}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
    >
      {items.map((c) => (
        <motion.li key={c.slug} variants={fadeUp}>
          <Link href={`/customers/${c.slug}`} className="block h-full">
            <Card className="flex h-full flex-col p-7" tone="default">
              <div className="mb-5 flex items-center justify-between">
                <span className="font-display text-[16px] font-semibold tracking-[0.02em] text-[var(--color-text)]">
                  {c.customer}
                </span>
                <Badge>{c.vertical}</Badge>
              </div>
              {c.thumbnail && (
                <div className="mb-5 grid aspect-[1.6/1] place-items-center rounded-[10px] border border-[var(--color-line-subtle)] bg-[var(--color-bg-inset)]">
                  {c.thumbnail}
                </div>
              )}
              <p className="text-[17px] font-semibold leading-[1.3] tracking-[-0.01em]">
                {c.headline}
              </p>
              <div className="mt-auto flex items-baseline gap-3 pt-6">
                <span className="font-display text-[28px] font-semibold leading-none tracking-[-0.02em] text-[var(--color-accent)]">
                  {c.metric.value}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-text-3)]">
                  {c.metric.label}
                </span>
              </div>
            </Card>
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
}
