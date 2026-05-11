"use client";

import { motion } from "motion/react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { Parallax } from "@/components/motion/parallax";
import { ArrowIcon } from "@/components/ui/button";
import { fadeUp, fadeUpStagger, easeOutEmphatic } from "@/lib/motion";

const primitives = [
  {
    name: "Sites",
    text: "Every location, with its permits, history, photos, and assets, on one timeline.",
    icon: <PrimSitesIcon />,
  },
  {
    name: "Assets",
    text: "Every tower, charger, gateway, and splice — modeled, monitored, maintained.",
    icon: <PrimAssetsIcon />,
  },
  {
    name: "Work",
    text: "Every deployment, repair, and inspection — scheduled, dispatched, closed with evidence.",
    icon: <PrimWorkIcon />,
  },
  {
    name: "Evidence",
    text: "Every photo, GPS pin, signature, and test result — verified before a work order closes.",
    icon: <PrimEvidenceIcon />,
  },
];

export function Platform() {
  return (
    <section id="platform" className="py-[clamp(96px,12vw,160px)]">
      <div className="shell">
        <Reveal>
          <header className="mb-14 max-w-[760px]">
            <Eyebrow>THE PLATFORM</Eyebrow>
            <h2 className="display-lg mt-5">
              One platform.{" "}
              <span className="text-[var(--color-text-2)]">
                Sites, assets, work, evidence, intelligence.
              </span>
            </h2>
            <p className="mt-5 max-w-[56ch] text-[clamp(16px,1.2vw,18px)] leading-[1.6] text-[var(--color-text-2)]">
              Fieldforce is built around five primitives — the same five whether you're deploying
              5G small cells in Munich or commissioning DC fast chargers in Texas. One workflow,
              one source of truth, four systems you no longer need.
            </p>
          </header>
        </Reveal>

        <Parallax intensity={-0.05}>
          <ProductCard />
        </Parallax>

        <motion.div
          variants={fadeUpStagger(0.06)}
          initial="hidden"
          whileInView="shown"
          viewport={{ once: true, margin: "0px 0px -8% 0px" }}
          className="mt-20 grid grid-cols-2 gap-4 lg:grid-cols-5"
        >
          {primitives.map((p) => (
            <motion.article
              key={p.name}
              variants={fadeUp}
              className="rounded-[14px] border border-[var(--color-line)] bg-[var(--color-bg-raised)] p-6 transition-[border-color,transform,background] duration-200 hover:-translate-y-[2px] hover:border-[var(--color-line-strong)]"
            >
              <div className="mb-[18px] grid h-9 w-9 place-items-center rounded-md border border-[var(--color-line)] bg-[var(--color-bg-elevated)] text-[var(--color-text-2)]">
                {p.icon}
              </div>
              <h3 className="mb-1 text-[17px] font-semibold tracking-[-0.01em]">{p.name}</h3>
              <p className="text-[14px] leading-[1.55] text-[var(--color-text-2)]">{p.text}</p>
            </motion.article>
          ))}

          <motion.article
            variants={fadeUp}
            className="col-span-2 rounded-[14px] border border-[rgba(111,228,217,0.25)] bg-[linear-gradient(180deg,rgba(111,228,217,0.06),var(--color-bg-raised))] p-6 transition-[transform] duration-200 hover:-translate-y-[2px] lg:col-span-1"
          >
            <div className="mb-[18px] grid h-9 w-9 place-items-center rounded-md border border-[rgba(111,228,217,0.3)] bg-[var(--color-accent-glow)] text-[var(--color-accent)]">
              <PrimIntelIcon />
            </div>
            <h3 className="mb-1 text-[17px] font-semibold tracking-[-0.01em]">Intelligence</h3>
            <p className="text-[14px] leading-[1.55] text-[var(--color-text-2)]">
              Agents that schedule, verify, and forecast — turning operations into a system that
              learns.
            </p>
            <a
              href="#agents"
              className="mt-3 inline-flex items-center gap-[6px] text-[14px] font-medium text-[var(--color-accent)] transition-[gap]"
            >
              Meet the agents <ArrowIcon />
            </a>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}

function ProductCard() {
  const rows = [
    { icon: "▣", iconClass: "text-[var(--color-accent)]", label: "Permits", value: <span className="text-[var(--color-text-2)]">all approved · expires 2026-09-02</span> },
    { icon: "▣", iconClass: "text-[var(--color-accent)]", label: "Crew",    value: <>Dispatch <em className="not-italic font-mono text-[12px] text-[var(--color-accent)]">routed 07:14</em> → arr. 07:23</> },
    { icon: "▣", iconClass: "text-[var(--color-warn)]",   label: "Evidence",value: <>14 photos · <em className="not-italic font-mono text-[12px] text-[var(--color-warn)]">2 flagged by Evidence</em></> },
    { icon: "▣", iconClass: "text-[var(--color-text-3)]", label: "Forecast",value: <>SLA risk: <strong className="font-medium">8 days</strong> <em className="not-italic font-mono text-[12px] text-[var(--color-text-2)]">↑ from 11 yesterday</em></> },
    { icon: "▣", iconClass: "text-[var(--color-text-3)]", label: "Reconcile",value: <>Vendor invoice WO-2026-04-1184 · <em className="not-italic font-mono text-[12px] text-[var(--color-accent)]">+3.7% recovered</em></> },
  ];

  return (
    <div className="relative overflow-hidden rounded-[20px] border border-[var(--color-line)] bg-[linear-gradient(180deg,var(--color-bg-elevated),var(--color-bg-raised))] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
      {/* gradient ring */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[20px] p-px"
        style={{
          background: "linear-gradient(135deg, var(--color-accent-glow), transparent 50%)",
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      <div className="flex items-center gap-2 border-b border-[var(--color-line)] bg-black/25 px-[18px] py-[14px]">
        <span className="h-[10px] w-[10px] rounded-full bg-[#ff5f56] opacity-55" />
        <span className="h-[10px] w-[10px] rounded-full bg-[#ffbd2e] opacity-55" />
        <span className="h-[10px] w-[10px] rounded-full bg-[#27c93f] opacity-55" />
        <span className="ml-3 font-mono text-[12px] text-[var(--color-text-3)]">
          fieldforce.app · Site #18403 · Munich · 5G small cell
        </span>
      </div>

      <div className="grid min-h-[360px] md:grid-cols-[180px_1fr]">
        <aside
          aria-hidden
          className="flex gap-[2px] overflow-x-auto border-b border-[var(--color-line)] bg-black/15 p-2 md:flex-col md:gap-[2px] md:overflow-visible md:border-b-0 md:border-r"
        >
          {["Sites", "Assets", "Work", "Evidence", "Agents"].map((n, i) => (
            <span
              key={n}
              className={`inline-flex items-center gap-[10px] whitespace-nowrap rounded-md px-3 py-[9px] font-mono text-[13px] tracking-[0.01em] ${
                i === 0
                  ? "bg-[var(--color-accent-glow)] text-[var(--color-accent)]"
                  : "text-[var(--color-text-3)]"
              }`}
            >
              <span className="h-[6px] w-[6px] rounded-full bg-current opacity-80" />
              {n}
            </span>
          ))}
        </aside>

        <div className="grid gap-6 p-6 md:grid-cols-[1fr_220px] md:px-7 md:py-6">
          <motion.div
            variants={fadeUpStagger(0.05)}
            initial="hidden"
            whileInView="shown"
            viewport={{ once: true }}
            className="flex flex-col gap-[2px]"
          >
            {rows.map((r, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                transition={{ duration: 0.5, ease: easeOutEmphatic }}
                className={`grid grid-cols-[22px_110px_1fr] items-baseline gap-3 rounded-md px-[14px] py-3 text-[13.5px] transition-colors hover:bg-white/[0.025] ${
                  i > 0 ? "border-t border-[var(--color-line-subtle)]" : ""
                }`}
              >
                <span className={`font-mono text-[11px] tracking-[0.06em] ${r.iconClass}`}>{r.icon}</span>
                <span className="font-mono text-[12px] uppercase tracking-[0.04em] text-[var(--color-text-2)]">
                  {r.label}
                </span>
                <span className="text-[var(--color-text)]">{r.value}</span>
              </motion.div>
            ))}
          </motion.div>

          <aside className="rounded-[10px] border border-[var(--color-line-subtle)] bg-[var(--color-bg-inset)] p-[14px]">
            <span className="font-mono text-[10px] tracking-[0.1em] text-[var(--color-text-3)]">
              AGENT ACTIVITY
            </span>
            <ul className="mt-3 flex flex-col gap-[10px] font-mono text-[11.5px] text-[var(--color-text-2)]">
              {[
                "Dispatch rerouted Crew #4",
                "Evidence flagged photo 0142",
                "Forecast updated SLA",
                "Reconcile matched 12 lines",
              ].map((line, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="relative inline-block h-[6px] w-[6px] flex-shrink-0 rounded-full bg-[var(--color-accent)]">
                    <span
                      className="absolute -inset-[4px] rounded-full border border-[var(--color-accent)] opacity-40"
                      style={{ animation: `dot-pulse 2s var(--ease-out-snappy) ${i * 0.3}s infinite` }}
                    />
                  </span>
                  {line}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
}

function PrimSitesIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
      <circle cx="12" cy="12" r="3" fill="currentColor" />
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" />
    </svg>
  );
}
function PrimAssetsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
      <rect x="4" y="4" width="7" height="7" rx="1.5" fill="currentColor" />
      <rect x="13" y="4" width="7" height="7" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="4" y="13" width="7" height="7" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="13" y="13" width="7" height="7" rx="1.5" fill="currentColor" />
    </svg>
  );
}
function PrimWorkIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
      <path d="M4 12h16M12 4v16" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="3" fill="currentColor" />
    </svg>
  );
}
function PrimEvidenceIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
      <path
        d="M4 12l5 5 11-11"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function PrimIntelIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 4" />
    </svg>
  );
}
