"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowIcon } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { fadeUp, fadeUpStagger } from "@/lib/motion";
import { EmptyState } from "@/components/ui/empty-state";

export type Job = {
  slug: string;
  title: string;
  team: "Engineering" | "Product" | "Design" | "GTM" | "Operations";
  location: string;
  remote?: boolean;
};

export function JobList({ items }: { items: Job[] }) {
  if (items.length === 0) {
    return (
      <EmptyState
        title="No open roles right now."
        body="We're always interested in great people. Tell us your story."
        primary={{ href: "mailto:careers@fieldforce.com", label: "Email recruiting" }}
      />
    );
  }

  // Group by team for clarity.
  const teams = Array.from(new Set(items.map((i) => i.team)));

  return (
    <div className="flex flex-col gap-12">
      {teams.map((team) => (
        <div key={team}>
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--color-text-3)]">
            {team}
          </p>
          <motion.ul
            role="list"
            variants={fadeUpStagger(0.05)}
            initial="hidden"
            whileInView="shown"
            viewport={{ once: true, margin: "0px 0px -8% 0px" }}
            className="divide-y divide-[var(--color-line-subtle)] overflow-hidden rounded-[14px] border border-[var(--color-line)] bg-[var(--color-bg-raised)]"
          >
            {items
              .filter((i) => i.team === team)
              .map((j) => (
                <motion.li key={j.slug} variants={fadeUp}>
                  <Link
                    href={`/careers/${j.slug}`}
                    className="group flex items-center justify-between gap-6 px-6 py-5 transition-colors hover:bg-white/[0.025]"
                  >
                    <div className="min-w-0 flex-1">
                      <h3 className="text-[17px] font-medium tracking-[-0.005em]">
                        {j.title}
                      </h3>
                      <div className="mt-1 flex items-center gap-3 font-mono text-[12px] tracking-[0.04em] text-[var(--color-text-3)]">
                        <span>{j.location}</span>
                        {j.remote && (
                          <>
                            <span>·</span>
                            <Badge>Remote OK</Badge>
                          </>
                        )}
                      </div>
                    </div>
                    <ArrowIcon className="text-[var(--color-text-3)] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[var(--color-accent)]" />
                  </Link>
                </motion.li>
              ))}
          </motion.ul>
        </div>
      ))}
    </div>
  );
}
