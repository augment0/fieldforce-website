"use client";

/**
 * Agents — five tabbed demos of the intelligence layer.
 * Built on Radix Tabs for ARIA + keyboard nav. Panel transition is a simple
 * keyed motion.div that re-runs on tab change.
 */

import { useState } from "react";
import { motion } from "motion/react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import {
  VizDispatch,
  VizForecast,
  VizEvidence,
  VizReconcile,
  VizCopilot,
} from "@/components/illustrations/agent-vizzes";
import { easeOutEmphatic } from "@/lib/motion";

type AgentKey = "dispatch" | "forecast" | "evidence" | "reconcile" | "copilot";

const data: Record<
  AgentKey,
  {
    label: string;
    headline: React.ReactNode;
    body: string;
    events: Array<{ time: string; text: React.ReactNode }>;
    proof: React.ReactNode;
    viz: React.ReactNode;
  }
> = {
  dispatch: {
    label: "Dispatch",
    headline: (<>Watch a permit fail.<br />Watch the day reschedule itself.</>),
    body:
      "Dispatch reroutes against permits, weather, parts availability, and SLA risk. When a permit slips at 7:14 AM, your crew is at the next viable site by 7:23.",
    events: [
      { time: "07:14", text: "Permit denied — Site 18403, Munich" },
      { time: "07:14", text: <span className="text-[var(--color-accent)]">Dispatch rerouting…</span> },
      { time: "07:15", text: "✓ Crew #4 → Site 18244" },
      { time: "07:15", text: "✓ Crew #7 → Site 18411" },
      { time: "07:23", text: <strong className="font-semibold">Δ +3 productive hours</strong> },
    ],
    proof: (<>Cuts crew-day waste <strong className="text-[var(--color-accent)]">18–24%</strong> in the first 90 days.</>),
    viz: <VizDispatch />,
  },
  forecast: {
    label: "Forecast",
    headline: (<>It's Tuesday.<br />Here are the seven sites that breach by Friday.</>),
    body:
      "Forecast reads the patterns your team can't — vendor velocity, weather windows, asset failure curves — and flags risk before it becomes incident.",
    events: [
      { time: "SITE", text: <>18244 · Berlin · breach in <strong>3d</strong></> },
      { time: "SITE", text: <>18411 · Hamburg · breach in <strong>4d</strong></> },
      { time: "SITE", text: <>18509 · Cologne · breach in <strong>6d</strong></> },
      { time: "SITE", text: <>18621 · Dresden · breach in <strong>7d</strong></> },
      { time: "···", text: <span className="text-[var(--color-text-3)]">+3 more</span> },
    ],
    proof: (<><strong className="text-[var(--color-accent)]">11-day</strong> median lead time on SLA-risk alerts.</>),
    viz: <VizForecast />,
  },
  evidence: {
    label: "Evidence",
    headline: (<>A photo without a splice closure.<br />A work order that won't close.</>),
    body:
      "Evidence runs computer vision on every site photo and rules on every closeout. If the splice closure isn't in the photo, the work order doesn't close.",
    events: [
      { time: "PHOTO", text: "0140 · ✓ verified" },
      { time: "PHOTO", text: "0141 · ✓ verified" },
      { time: "PHOTO", text: <span className="text-[var(--color-warn)]">0142 · ⚠ closure missing</span> },
      { time: "PHOTO", text: "0143 · ✓ verified" },
      { time: "WO", text: <strong className="font-semibold">blocked until 0142 fixed</strong> },
    ],
    proof: (<>First-pass QA accuracy <strong className="text-[var(--color-accent)]">94%</strong> · vs. 71% for human-only review.</>),
    viz: <VizEvidence />,
  },
  reconcile: {
    label: "Reconcile",
    headline: (<>Nine vendor invoice formats.<br />One queue. Variance flagged in seconds.</>),
    body:
      "Reconcile ingests vendor invoices in any format, matches them against the work that actually happened, and flags variance over your threshold.",
    events: [
      { time: "INV", text: "3491 · matched · ✓" },
      { time: "INV", text: "3492 · matched · ✓" },
      { time: "INV", text: <span className="text-[var(--color-warn)]">3493 · variance <strong>+8.2%</strong> over threshold</span> },
      { time: "INV", text: "3494 · matched · ✓" },
      { time: "···", text: <span className="text-[var(--color-text-3)]">128 lines reconciled in 2.4s</span> },
    ],
    proof: (<>Average <strong className="text-[var(--color-accent)]">3.7%</strong> margin recovery on infrastructure spend.</>),
    viz: <VizReconcile />,
  },
  copilot: {
    label: "Copilot",
    headline: (<>Ask Fieldforce.<br />Get a sourced answer.</>),
    body:
      "Copilot is the natural-language interface to your network. Ask it anything — it answers, cites the rows, and offers the next action.",
    events: [
      { time: "YOU", text: "how many splices failed first-pass QA last week?" },
      { time: "FF", text: <><strong>17</strong> across Munich, Hamburg, and Cologne</> },
      { time: "FF", text: "12 due to missing closure photos" },
      { time: "FF", text: " 5 due to incorrect torque value" },
      { time: "FF", text: <span className="text-[var(--color-accent)]">→ Open the 12 photo-only tickets in Evidence?</span> },
    ],
    proof: (<>Answers cite the rows. <strong className="text-[var(--color-accent)]">Every action is logged.</strong> Every approval is yours.</>),
    viz: <VizCopilot />,
  },
};

const agentKeys = Object.keys(data) as AgentKey[];

export function Agents() {
  const [active, setActive] = useState<AgentKey>("dispatch");
  const current = data[active];

  return (
    <section
      id="agents"
      className="relative isolate overflow-hidden py-[clamp(96px,12vw,160px)]"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-55"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 20%, var(--color-accent-glow), transparent), radial-gradient(ellipse 50% 40% at 10% 80%, var(--color-indigo-glow), transparent)",
        }}
      />
      <div className="shell">
        <Reveal>
          <header className="mb-14 max-w-[760px]">
            <Eyebrow>INTELLIGENCE</Eyebrow>
            <h2 className="display-lg mt-5">
              Intelligence that operates.{" "}
              <span className="text-[var(--color-text-2)]">Not just observes.</span>
            </h2>
            <p className="mt-5 max-w-[56ch] text-[clamp(16px,1.2vw,18px)] leading-[1.6] text-[var(--color-text-2)]">
              Most "AI" in infrastructure software summarizes dashboards. Ours takes action.
              Fieldforce agents schedule the next crew, validate the last photo, predict the SLA
              breach you haven't seen yet — and close the loop so your team can stop chasing it.
            </p>
          </header>
        </Reveal>

        <Reveal>
          <Tabs
            value={active}
            onValueChange={(v) => setActive(v as AgentKey)}
            className="overflow-hidden rounded-[20px] border border-[var(--color-line)] bg-[linear-gradient(180deg,var(--color-bg-raised),var(--color-bg-elevated))]"
          >
            <TabsList>
              {agentKeys.map((k) => (
                <TabsTrigger key={k} value={k}>
                  {data[k].label}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* one shared panel that swaps on key — simpler than 5 TabsContents */}
            <motion.div
              key={active}
              role="tabpanel"
              aria-labelledby={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: easeOutEmphatic }}
              className="px-9 pb-10 pt-9 max-md:px-5 max-md:pb-7 max-md:pt-6"
            >
              <div className="grid gap-9 md:grid-cols-[1.05fr_0.9fr]">
                <div>
                  <p className="font-display text-[clamp(22px,2.4vw,28px)] font-semibold leading-[1.18] tracking-[-0.018em] text-[var(--color-text)]">
                    {current.headline}
                  </p>
                  <p className="mt-[14px] max-w-[50ch] text-[15px] leading-[1.6] text-[var(--color-text-2)]">
                    {current.body}
                  </p>
                  <ul className="mt-[22px] overflow-hidden rounded-[10px] border border-[var(--color-line-subtle)] bg-[var(--color-bg-inset)] font-mono">
                    {current.events.map((ev, i) => (
                      <motion.li
                        key={`${active}-${i}`}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.08, ease: easeOutEmphatic }}
                        className="grid grid-cols-[64px_1fr] gap-3 border-b border-[var(--color-line-subtle)] px-[14px] py-[9px] text-[12.5px] last:border-b-0"
                      >
                        <span className="tracking-[0.04em] text-[var(--color-text-3)]">
                          {ev.time}
                        </span>
                        <span className="text-[var(--color-text)]">{ev.text}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <p className="mt-[22px] rounded-[10px] border border-[rgba(111,228,217,0.2)] bg-[var(--color-accent-glow)] px-4 py-[14px] text-[14px] text-[var(--color-text-2)]">
                    {current.proof}
                  </p>
                </div>
                <div className="grid min-h-[320px] place-items-center rounded-[10px] border border-[var(--color-line-subtle)] bg-[var(--color-bg-inset)] p-6">
                  {current.viz}
                </div>
              </div>
            </motion.div>
          </Tabs>
        </Reveal>
      </div>
    </section>
  );
}
