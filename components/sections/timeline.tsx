"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { fadeUp, fadeUpStagger } from "@/lib/motion";

export type TimelineEntry = {
  date: string;        // ISO date
  version?: string;    // e.g. "v3.18"
  title: string;
  body: React.ReactNode;
  tags?: string[];     // e.g. ["Agents", "Platform"]
};

/**
 * Timeline — vertical changelog / company-history layout.
 * Used for /changelog and /about milestones.
 */
export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <motion.ol
      role="list"
      variants={fadeUpStagger(0.05)}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      className="relative"
    >
      <span
        aria-hidden
        className="absolute left-[6px] top-2 h-full w-px bg-[var(--color-line-subtle)]"
      />
      {entries.map((e, i) => (
        <motion.li
          key={i}
          variants={fadeUp}
          className="relative grid grid-cols-[28px_1fr] gap-5 pb-12 last:pb-0"
        >
          <span
            aria-hidden
            className="relative mt-[6px] h-3 w-3 rounded-full border-2 border-[var(--color-bg-base)] bg-[var(--color-accent)] shadow-[0_0_12px_var(--color-accent-glow)]"
          />
          <div>
            <div className="flex flex-wrap items-baseline gap-3">
              <time
                dateTime={e.date}
                className="font-mono text-[12px] tracking-[0.04em] text-[var(--color-text-3)]"
              >
                {new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(new Date(e.date))}
              </time>
              {e.version && <Badge variant="accent">{e.version}</Badge>}
            </div>
            <h3 className="mt-2 text-[18px] font-semibold tracking-[-0.01em]">{e.title}</h3>
            <div className="mt-2 max-w-[60ch] text-[14.5px] leading-[1.6] text-[var(--color-text-2)]">
              {e.body}
            </div>
            {e.tags && (
              <div className="mt-3 flex flex-wrap gap-2">
                {e.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-[var(--color-line-subtle)] bg-[var(--color-bg-elevated)] px-[8px] py-[2px] font-mono text-[10.5px] uppercase tracking-[0.1em] text-[var(--color-text-3)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.li>
      ))}
    </motion.ol>
  );
}
