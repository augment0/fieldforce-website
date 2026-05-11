"use client";

import { motion } from "motion/react";
import { SectionShell } from "@/components/ui/section-shell";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/motion/reveal";
import { fadeUp, fadeUpStagger } from "@/lib/motion";
import { cn } from "@/lib/utils";

export type FeatureItem = {
  title: string;
  body: string;
  icon?: React.ReactNode;
  href?: string;
};

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: string;
  items: FeatureItem[];
  /** 2, 3, or 4 columns at desktop. Default 3. */
  columns?: 2 | 3 | 4;
  id?: string;
};

const colsClass: Record<number, string> = {
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
};

export function FeatureGrid({
  eyebrow,
  title,
  lede,
  items,
  columns = 3,
  id,
}: Props) {
  return (
    <SectionShell id={id}>
      <div className="shell">
        <Reveal>
          <header className="mb-14 max-w-[760px]">
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            <h2 className="display-lg mt-5">{title}</h2>
            {lede && (
              <p className="mt-5 max-w-[56ch] text-[clamp(16px,1.2vw,18px)] leading-[1.6] text-[var(--color-text-2)]">
                {lede}
              </p>
            )}
          </header>
        </Reveal>
        <motion.div
          variants={fadeUpStagger(0.06)}
          initial="hidden"
          whileInView="shown"
          viewport={{ once: true, margin: "0px 0px -8% 0px" }}
          className={cn("grid grid-cols-1 gap-4 md:grid-cols-2", colsClass[columns])}
        >
          {items.map((it, i) => (
            <motion.div key={i} variants={fadeUp}>
              <Card className="h-full p-6">
                {it.icon && (
                  <div className="mb-[18px] grid h-9 w-9 place-items-center rounded-md border border-[var(--color-line)] bg-[var(--color-bg-elevated)] text-[var(--color-text-2)]">
                    {it.icon}
                  </div>
                )}
                <h3 className="mb-1 text-[17px] font-semibold tracking-[-0.01em]">
                  {it.title}
                </h3>
                <p className="text-[14px] leading-[1.55] text-[var(--color-text-2)]">
                  {it.body}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionShell>
  );
}
