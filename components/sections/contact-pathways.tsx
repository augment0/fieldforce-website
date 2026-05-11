"use client";

import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import { LinkArrow } from "@/components/ui/link-arrow";
import { fadeUp, fadeUpStagger } from "@/lib/motion";

type Path = {
  label: string;
  title: string;
  body: string;
  cta: { href: string; label: string };
  icon: React.ReactNode;
};

const paths: Path[] = [
  {
    label: "SALES",
    title: "Book a demo",
    body: "Talk through your network, your verticals, and your next 90 days.",
    cta: { href: "/demo", label: "Book a demo" },
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <circle cx="12" cy="12" r="3" fill="currentColor" />
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" />
      </svg>
    ),
  },
  {
    label: "ENGINEERING",
    title: "Talk to engineering",
    body: "API, integration, deployment, agents — straight line to the team that built the platform.",
    cta: { href: "mailto:engineering@fieldforce.com", label: "engineering@fieldforce.com" },
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path d="M9 5l-5 7 5 7M15 5l5 7-5 7" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "SUPPORT",
    title: "Existing customer",
    body: "Live operators, on-call. P1 issues escalate to a human in under 15 minutes.",
    cta: { href: "mailto:support@fieldforce.com", label: "support@fieldforce.com" },
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 11l2 2 5-5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function ContactPathways() {
  return (
    <motion.div
      variants={fadeUpStagger(0.06)}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      className="grid gap-5 md:grid-cols-3"
    >
      {paths.map((p) => (
        <motion.div key={p.label} variants={fadeUp}>
          <Card className="flex h-full flex-col p-7">
            <div className="grid h-9 w-9 place-items-center rounded-md border border-[var(--color-line)] bg-[var(--color-bg-elevated)] text-[var(--color-accent)]">
              {p.icon}
            </div>
            <p className="mt-5 font-mono text-[10.5px] tracking-[0.12em] text-[var(--color-text-3)]">
              {p.label}
            </p>
            <h3 className="mt-2 text-[20px] font-semibold tracking-[-0.012em]">{p.title}</h3>
            <p className="mt-2 flex-1 text-[14px] leading-[1.55] text-[var(--color-text-2)]">
              {p.body}
            </p>
            <div className="mt-5">
              <LinkArrow href={p.cta.href}>{p.cta.label}</LinkArrow>
            </div>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
