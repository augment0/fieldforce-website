"use client";

/**
 * Five small SVG visualizations — one per agent.
 * Animations driven by Motion variants so they re-trigger on tab switch.
 */

import { motion } from "motion/react";
import { drawIn, easeOutEmphatic } from "@/lib/motion";

export function VizDispatch() {
  return (
    <svg key="dispatch" viewBox="0 0 360 320" className="h-auto w-full" aria-hidden>
      <defs>
        <linearGradient id="vizPath" x1="0" x2="1">
          <stop offset="0%"   stopColor="#6FE4D9" stopOpacity="0" />
          <stop offset="50%"  stopColor="#6FE4D9" stopOpacity="1" />
          <stop offset="100%" stopColor="#6FE4D9" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g opacity="0.18" stroke="#2A2E38" strokeWidth="0.5">
        <line x1="0"   y1="60"  x2="360" y2="60" />
        <line x1="0"   y1="120" x2="360" y2="120" />
        <line x1="0"   y1="180" x2="360" y2="180" />
        <line x1="0"   y1="240" x2="360" y2="240" />
        <line x1="60"  y1="0"   x2="60"  y2="320" />
        <line x1="120" y1="0"   x2="120" y2="320" />
        <line x1="180" y1="0"   x2="180" y2="320" />
        <line x1="240" y1="0"   x2="240" y2="320" />
        <line x1="300" y1="0"   x2="300" y2="320" />
      </g>
      <path
        d="M60 240 Q150 200 200 100"
        stroke="#3F4350"
        strokeWidth="1.5"
        strokeDasharray="3 4"
        fill="none"
      />
      <motion.path
        d="M60 240 Q120 180 200 200 T320 80"
        stroke="url(#vizPath)"
        strokeWidth="2"
        fill="none"
        variants={drawIn}
        initial="hidden"
        animate="shown"
      />
      <circle cx="60" cy="240" r="10" fill="#6FE4D9" />
      <motion.circle
        cx="60" cy="240" r="18"
        fill="none" stroke="#6FE4D9" strokeWidth="1" opacity="0.4"
        animate={{ scale: [0.7, 1.6], opacity: [0.7, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: easeOutEmphatic }}
        style={{ transformOrigin: "60px 240px" }}
      />
      <text x="78" y="244" fill="#A0A6B0" fontSize="11" fontFamily="ui-monospace,monospace">
        Crew #4
      </text>
      <circle cx="200" cy="100" r="5" fill="#3F4350" stroke="#F87171" strokeWidth="1.2" />
      <text x="210" y="104" fill="#A0A6B0" fontSize="10" fontFamily="ui-monospace,monospace">
        Site 18403 · denied
      </text>
      <circle cx="200" cy="200" r="5" fill="#6FE4D9" />
      <text x="210" y="204" fill="#A0A6B0" fontSize="10" fontFamily="ui-monospace,monospace">
        Site 18244
      </text>
      <circle cx="320" cy="80" r="5" fill="#6FE4D9" />
      <text x="240" y="60" fill="#A0A6B0" fontSize="10" fontFamily="ui-monospace,monospace">
        Site 18411
      </text>
    </svg>
  );
}

export function VizForecast() {
  return (
    <svg key="forecast" viewBox="0 0 360 320" className="h-auto w-full" aria-hidden>
      <defs>
        <linearGradient id="riskFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%"   stopColor="#6FE4D9" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#6FE4D9" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g opacity="0.18" stroke="#2A2E38" strokeWidth="0.5">
        <line x1="0" y1="80"  x2="360" y2="80" />
        <line x1="0" y1="160" x2="360" y2="160" />
        <line x1="0" y1="240" x2="360" y2="240" />
      </g>
      <motion.path
        d="M20 240 L60 230 L100 220 L140 200 L180 180 L220 150 L260 110 L300 80 L340 60"
        stroke="#6FE4D9"
        strokeWidth="2"
        fill="none"
        variants={drawIn}
        initial="hidden"
        animate="shown"
      />
      <path
        d="M20 240 L60 230 L100 220 L140 200 L180 180 L220 150 L260 110 L300 80 L340 60 L340 320 L20 320 Z"
        fill="url(#riskFill)"
        opacity="0.5"
      />
      <line
        x1="220" y1="0" x2="220" y2="320"
        stroke="#F5B042" strokeWidth="1" strokeDasharray="4 4" opacity="0.5"
      />
      <text x="226" y="20" fontFamily="ui-monospace,monospace" fontSize="10" fill="#F5B042">
        SLA threshold
      </text>
      <circle cx="260" cy="110" r="4" fill="#F5B042" />
      <circle cx="300" cy="80"  r="4" fill="#F87171" />
      <circle cx="340" cy="60"  r="4" fill="#F87171" />
    </svg>
  );
}

export function VizEvidence() {
  return (
    <svg key="evidence" viewBox="0 0 360 320" className="h-auto w-full" aria-hidden>
      <g>
        {[
          [20,  40, true],
          [130, 40, true],
          [240, 40, false],
          [20,  180, true],
          [130, 180, true],
          [240, 180, true],
        ].map(([x, y, ok], i) => (
          <g key={i}>
            <rect
              x={x as number}
              y={y as number}
              width="100"
              height="100"
              rx="4"
              fill="#181A22"
              stroke={ok ? "#2A2E38" : "#F87171"}
              strokeWidth={ok ? "1" : "1.5"}
            />
            {ok ? (
              <motion.path
                d={`M${(x as number) + 20} ${(y as number) + 60}l15 15 30-30`}
                stroke="#6FE4D9"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                variants={drawIn}
                initial="hidden"
                animate="shown"
                transition={{ delay: i * 0.05 }}
              />
            ) : (
              <>
                <motion.path
                  d={`M${(x as number) + 20} ${(y as number) + 40}l40 40M${(x as number) + 60} ${(y as number) + 40}l-40 40`}
                  stroke="#F87171"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                  variants={drawIn}
                  initial="hidden"
                  animate="shown"
                  transition={{ delay: i * 0.05 }}
                />
                <text
                  x={(x as number) + 4}
                  y={(y as number) + 118}
                  fontFamily="ui-monospace,monospace"
                  fontSize="10"
                  fill="#F87171"
                >
                  closure missing
                </text>
              </>
            )}
          </g>
        ))}
      </g>
    </svg>
  );
}

export function VizReconcile() {
  const rows: Array<[string, string, string, boolean]> = [
    ["INV-3491", "$12,480.00", "✓ match", true],
    ["INV-3492", "$8,750.00", "✓ match", true],
    ["INV-3493", "$15,210.00", "⚠ +8.2%", false],
    ["INV-3494", "$3,420.00", "✓ match", true],
    ["INV-3495", "$22,140.00", "✓ match", true],
  ];
  return (
    <svg key="reconcile" viewBox="0 0 360 320" className="h-auto w-full" aria-hidden>
      <g fontFamily="ui-monospace,monospace" fontSize="10" fill="#A0A6B0">
        {rows.map(([id, amt, mark, ok], i) => (
          <motion.g
            key={id}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: i * 0.07, ease: easeOutEmphatic }}
          >
            <rect
              x="20"
              y={20 + i * 44}
              width="320"
              height="36"
              rx="4"
              fill={ok ? "#11131A" : "#181012"}
              stroke={ok ? "#2A2E38" : "#F87171"}
              strokeWidth={ok ? "1" : "1.2"}
            />
            <text x="32" y={42 + i * 44} fill={ok ? "#A0A6B0" : "#F87171"}>
              {id}
            </text>
            <text x="180" y={42 + i * 44} fill={ok ? "#A0A6B0" : "#F87171"}>
              {amt}
            </text>
            <text x="280" y={42 + i * 44} fill={ok ? "#6FE4D9" : "#F87171"}>
              {mark}
            </text>
          </motion.g>
        ))}
        <text x="20" y="262" fill="#6A6F7A">128 lines · 2.4s · 1 flagged</text>
      </g>
    </svg>
  );
}

export function VizCopilot() {
  return (
    <div className="flex w-full flex-col gap-[18px]">
      <div className="relative flex items-center rounded-[10px] border border-[var(--color-line)] bg-[var(--color-bg-raised)] p-[6px]">
        <span className="absolute -top-[8px] left-[14px] bg-[var(--color-bg-inset)] px-[6px] font-mono text-[10px] tracking-[0.1em] text-[var(--color-accent)]">
          ASK FIELDFORCE
        </span>
        <input
          type="text"
          placeholder="e.g. show me every fiber splice from last week that failed first-pass QA"
          aria-label="Ask Fieldforce"
          className="flex-1 border-0 bg-transparent px-[14px] py-[12px] text-[13.5px] text-[var(--color-text)] outline-none placeholder:text-[var(--color-text-3)]"
        />
        <button
          type="button"
          className="rounded-[6px] bg-[var(--color-accent)] px-4 py-[9px] text-[13px] font-medium text-[#06262A]"
        >
          Ask
        </button>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: easeOutEmphatic }}
        className="rounded-[10px] border border-[var(--color-line)] border-l-[2px] border-l-[var(--color-accent)] bg-[var(--color-bg-raised)] p-[18px] text-[13.5px] leading-[1.55] text-[var(--color-text-2)]"
      >
        <p className="m-0 mb-[10px]">
          <strong className="text-[var(--color-text)]">17 splices failed first-pass QA last week</strong>
          , across Munich (8), Hamburg (5), Cologne (4).
        </p>
        <ul className="m-0 mb-[12px] flex list-none flex-col gap-[6px] p-0 font-mono text-[12px]">
          <li className="before:mr-1 before:text-[var(--color-text-3)] before:content-['—_']">
            12 — missing closure photo (
            <a href="#x" className="text-[var(--color-accent)] underline underline-offset-[3px]">
              view
            </a>
            )
          </li>
          <li className="before:mr-1 before:text-[var(--color-text-3)] before:content-['—_']">
            5 — torque value out of range (
            <a href="#x" className="text-[var(--color-accent)] underline underline-offset-[3px]">
              view
            </a>
            )
          </li>
        </ul>
        <p className="mt-[10px] font-mono text-[11px] text-[var(--color-text-3)]">
          Sourced from 17 work orders · WO-2026-04-1102 → 1184
        </p>
      </motion.div>
    </div>
  );
}
