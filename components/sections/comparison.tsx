"use client";

import { Reveal } from "@/components/motion/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";

const rows = [
  ["Built for the field",   "Adapted",          "No",            "Yes"],
  ["AI that takes action",  "Summaries only",   "None",          "Native agents"],
  ["Telecom + EV + IoT",    "Single vertical",  "Single vertical", "One platform"],
  ["Time to first value",   "Months",           "Weeks",         "24 hours"],
] as const;

export function Comparison() {
  return (
    <section className="py-[clamp(96px,12vw,160px)]">
      <div className="shell">
        <Reveal>
          <header className="mb-14 max-w-[760px]">
            <Eyebrow>WHY TEAMS CHOOSE FIELDFORCE</Eyebrow>
            <h2 className="display-lg mt-5">
              Built for the field.{" "}
              <span className="text-[var(--color-text-2)]">Not adapted to it.</span>
            </h2>
          </header>
        </Reveal>

        <Reveal>
          <div
            role="table"
            className="overflow-hidden rounded-[14px] border border-[var(--color-line)] bg-[var(--color-bg-raised)]"
          >
            <div
              role="row"
              className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1.1fr]"
            >
              {[
                { txt: "", us: false },
                { txt: "Generic FSM", us: false },
                { txt: "Project tools", us: false },
                { txt: "Fieldforce", us: true },
              ].map((c, i) => (
                <span
                  key={i}
                  role="columnheader"
                  className={`hidden px-[22px] py-[18px] font-mono text-[11.5px] uppercase tracking-[0.1em] md:block ${
                    c.us
                      ? "border-l border-[rgba(111,228,217,0.25)] bg-[var(--color-accent-glow)] text-[var(--color-accent)]"
                      : "border-l border-[var(--color-line-subtle)] bg-black/[0.18] text-[var(--color-text-3)] first:border-l-0"
                  }`}
                >
                  {c.txt}
                </span>
              ))}
            </div>

            {rows.map(([label, fsm, pt, ff], i) => (
              <div
                key={i}
                role="row"
                className="grid grid-cols-1 border-t border-[var(--color-line-subtle)] md:grid-cols-[1.4fr_1fr_1fr_1.1fr]"
              >
                <span
                  role="cell"
                  className="px-[22px] py-[18px] text-[15px] font-medium text-[var(--color-text)] max-md:bg-black/[0.2] max-md:font-mono max-md:text-[11.5px] max-md:uppercase max-md:tracking-[0.1em] max-md:text-[var(--color-text-3)]"
                >
                  {label}
                </span>
                <span
                  role="cell"
                  className="border-l border-[var(--color-line-subtle)] px-[22px] py-[18px] text-[15px] text-[var(--color-text-2)] max-md:border-l-0"
                >
                  {fsm}
                </span>
                <span
                  role="cell"
                  className="border-l border-[var(--color-line-subtle)] px-[22px] py-[18px] text-[15px] text-[var(--color-text-2)] max-md:border-l-0"
                >
                  {pt}
                </span>
                <span
                  role="cell"
                  className="border-l border-[rgba(111,228,217,0.2)] bg-[rgba(111,228,217,0.06)] px-[22px] py-[18px] text-[15px] font-semibold text-[var(--color-text)] max-md:border-l-0"
                >
                  <span className="mr-2 text-[var(--color-accent)]">✓</span>
                  {ff}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
