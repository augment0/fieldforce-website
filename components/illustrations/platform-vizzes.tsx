"use client";

/**
 * Platform visualizations — one per Platform sub-page.
 *
 * Every viz follows the same visual grammar as the agent vizzes:
 *   • inline SVG (or SVG + scoped HTML) so motion stays GPU-light
 *   • motion/react for entrance + ambient animation
 *   • lightweight interactivity (hover spotlight / tab swap) — no canvas
 *   • renders inside the FeatureSplit visual card, which already supplies
 *     border + padding, so each viz is content only
 *
 * Each viz is named after the primitive / capability it illustrates:
 *
 *   VizSiteTimeline     · /platform/sites
 *   VizAssetHierarchy   · /platform/assets
 *   VizWorkflowBoard    · /platform/work
 *   VizEvidenceInspect  · /platform/evidence
 *   VizIntegrationsBus  · /platform/integrations
 *   VizSecurityStack    · /platform/security
 *   VizAgentMesh        · /platform/agents
 *   VizExecutiveDash    · /platform/analytics  (KPI summary)
 *   VizForecastMatrix   · /platform/analytics  (risk grid)
 *   VizMobileSync       · /platform/mobile     (offline-first)
 *   VizMobileCV         · /platform/mobile     (on-device CV)
 */

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { drawIn, easeOutEmphatic, fadeUp, fadeUpStagger } from "@/lib/motion";

/* ─────────────────────────────────────────────────────────────
   Shared atoms — kept private to this module so the viz file
   remains the single source of truth for visualization styling.
   ───────────────────────────────────────────────────────────── */

const C = {
  bg: "#06070A",
  surface: "#11131A",
  surfaceHi: "#181A22",
  line: "rgba(255,255,255,0.09)",
  lineSoft: "rgba(255,255,255,0.06)",
  lineStrong: "rgba(255,255,255,0.14)",
  text: "#F2F4F7",
  text2: "#A0A6B0",
  text3: "#6A6F7A",
  text4: "#3F4350",
  accent: "#6FE4D9",
  accentDeep: "#2DD4BF",
  indigo: "#7C7BFF",
  warn: "#F5B042",
  danger: "#F87171",
} as const;

function GridBg({ step = 24, opacity = 0.18 }: { step?: number; opacity?: number }) {
  return (
    <g opacity={opacity} stroke={C.lineStrong} strokeWidth="0.5">
      {Array.from({ length: 16 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={(i + 1) * step} x2="600" y2={(i + 1) * step} />
      ))}
      {Array.from({ length: 24 }).map((_, i) => (
        <line key={`v${i}`} x1={(i + 1) * step} y1="0" x2={(i + 1) * step} y2="400" />
      ))}
    </g>
  );
}

/* ─────────────────────────────────────────────────────────────
   1. Sites · Timeline
   Three swimlanes (Acquisition / Build / Ops) stacked vertically;
   a horizontal play-head sweeps left to right; events animate in.
   ───────────────────────────────────────────────────────────── */

type LaneEvent = {
  x: number;            // 0..100, percent along the lane
  label: string;
  detail?: string;
  tone?: "ok" | "warn" | "danger";
};

const SITE_LANES: Array<{ key: string; label: string; events: LaneEvent[] }> = [
  {
    key: "acq",
    label: "Acquisition",
    events: [
      { x: 4,  label: "Lease executed",   detail: "MUC-04" },
      { x: 16, label: "RF survey",        detail: "panel A" },
      { x: 24, label: "Civil approval",   detail: "city of Munich" },
    ],
  },
  {
    key: "build",
    label: "Build",
    events: [
      { x: 32, label: "Permit filed",     detail: "BA-PERM-228" },
      { x: 38, label: "Permit denied",    detail: "easement gap", tone: "danger" },
      { x: 44, label: "Permit approved",  detail: "revised drawings", tone: "ok" },
      { x: 56, label: "Crew dispatched",  detail: "Crew #4" },
      { x: 64, label: "Splice closure",   detail: "photo 0143" },
      { x: 70, label: "Closeout signed",  detail: "F. Roth" },
    ],
  },
  {
    key: "ops",
    label: "Operations",
    events: [
      { x: 80, label: "Inspection",       detail: "annual" },
      { x: 88, label: "Incident raised",  detail: "RX -3 dBm", tone: "warn" },
      { x: 95, label: "Incident closed",  detail: "swap radio", tone: "ok" },
    ],
  },
];

export function VizSiteTimeline() {
  const reduced = useReducedMotion();
  const [hover, setHover] = useState<string | null>(null);

  const laneH = 86;
  const laneGap = 14;
  const padX = 88;
  const padTop = 22;
  const totalW = 600;
  const trackW = totalW - padX - 24;

  return (
    <svg viewBox="0 0 600 340" className="h-auto w-full" aria-hidden>
      <defs>
        <linearGradient id="siteSweep" x1="0" x2="1">
          <stop offset="0%"  stopColor={C.accent} stopOpacity="0" />
          <stop offset="60%" stopColor={C.accent} stopOpacity="0.55" />
          <stop offset="100%" stopColor={C.accent} stopOpacity="0" />
        </linearGradient>
        <linearGradient id="siteFade" x1="0" x2="1">
          <stop offset="0%" stopColor={C.lineStrong} />
          <stop offset="100%" stopColor={C.lineSoft} />
        </linearGradient>
      </defs>

      {/* phase headers */}
      <g fontFamily="ui-monospace,monospace" fontSize="9.5" fill={C.text3} letterSpacing="0.12em">
        <text x={padX + trackW * 0.10} y="14" textAnchor="middle">PHASE · ACQ</text>
        <text x={padX + trackW * 0.50} y="14" textAnchor="middle">PHASE · BUILD</text>
        <text x={padX + trackW * 0.86} y="14" textAnchor="middle">PHASE · OPS</text>
      </g>
      <g stroke={C.lineSoft} strokeDasharray="2 4">
        <line x1={padX + trackW * 0.30} y1="20" x2={padX + trackW * 0.30} y2={padTop + (laneH + laneGap) * 3 + 12} />
        <line x1={padX + trackW * 0.74} y1="20" x2={padX + trackW * 0.74} y2={padTop + (laneH + laneGap) * 3 + 12} />
      </g>

      {/* lanes */}
      {SITE_LANES.map((lane, li) => {
        const y = padTop + li * (laneH + laneGap);
        return (
          <g key={lane.key}>
            <text
              x={padX - 14}
              y={y + laneH / 2 + 3}
              textAnchor="end"
              fontFamily="ui-monospace,monospace"
              fontSize="10.5"
              fill={C.text2}
            >
              {lane.label}
            </text>
            <rect
              x={padX}
              y={y}
              width={trackW}
              height={laneH}
              rx="6"
              fill={C.surface}
              stroke={C.lineSoft}
            />
            {/* track baseline */}
            <line
              x1={padX + 12}
              y1={y + laneH - 22}
              x2={padX + trackW - 12}
              y2={y + laneH - 22}
              stroke="url(#siteFade)"
              strokeWidth="1"
            />
            {/* events */}
            {lane.events.map((ev, ei) => {
              const cx = padX + 12 + (trackW - 24) * (ev.x / 100);
              const cy = y + laneH - 22;
              const tone =
                ev.tone === "danger" ? C.danger :
                ev.tone === "warn"   ? C.warn :
                ev.tone === "ok"     ? C.accent :
                C.accent;
              const id = `${lane.key}-${ei}`;
              const isHover = hover === id;
              return (
                <motion.g
                  key={id}
                  initial={reduced ? false : { opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.08 * ei + 0.12 * li,
                    ease: easeOutEmphatic,
                  }}
                  onMouseEnter={() => setHover(id)}
                  onMouseLeave={() => setHover(null)}
                  style={{ cursor: "pointer" }}
                >
                  <line
                    x1={cx}
                    y1={cy}
                    x2={cx}
                    y2={y + 12}
                    stroke={tone}
                    strokeOpacity={isHover ? 0.7 : 0.25}
                    strokeWidth="1"
                  />
                  <rect
                    x={cx - 50}
                    y={y + 8}
                    width="100"
                    height="34"
                    rx="5"
                    fill={isHover ? C.surfaceHi : C.surface}
                    stroke={isHover ? tone : C.line}
                    strokeWidth={isHover ? 1.2 : 1}
                  />
                  <text
                    x={cx}
                    y={y + 22}
                    textAnchor="middle"
                    fontFamily="var(--font-sans, ui-sans-serif)"
                    fontSize="10.5"
                    fontWeight="500"
                    fill={C.text}
                  >
                    {ev.label}
                  </text>
                  {ev.detail && (
                    <text
                      x={cx}
                      y={y + 35}
                      textAnchor="middle"
                      fontFamily="ui-monospace,monospace"
                      fontSize="9"
                      fill={C.text3}
                    >
                      {ev.detail}
                    </text>
                  )}
                  <circle cx={cx} cy={cy} r={isHover ? 4.5 : 3} fill={tone} />
                </motion.g>
              );
            })}
          </g>
        );
      })}

      {/* sweep playhead */}
      {!reduced && (
        <motion.rect
          x={padX}
          y={padTop}
          width="80"
          height={(laneH + laneGap) * 3 - laneGap}
          fill="url(#siteSweep)"
          initial={{ x: padX - 80 }}
          animate={{ x: padX + trackW }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          opacity="0.65"
        />
      )}
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   2. Assets · Hierarchy
   A small dendrogram. Tower at top → sectors → radios/antennas.
   Each leaf carries health + firmware. Hover lights a leaf.
   ───────────────────────────────────────────────────────────── */

type Leaf = { id: string; label: string; sub: string; tone: "ok" | "warn" | "danger" };

const SECTORS: Array<{ id: string; label: string; leaves: Leaf[] }> = [
  {
    id: "alpha",
    label: "Sector α",
    leaves: [
      { id: "r1", label: "Radio R-04",  sub: "fw 2.4.1",   tone: "ok" },
      { id: "a1", label: "Ant. PNL-A",  sub: "65° / 17 dBi", tone: "ok" },
    ],
  },
  {
    id: "beta",
    label: "Sector β",
    leaves: [
      { id: "r2", label: "Radio R-07",  sub: "fw 2.3.9",   tone: "warn" },
      { id: "a2", label: "Ant. PNL-B",  sub: "65° / 17 dBi", tone: "ok" },
      { id: "tx", label: "Backhaul μW",  sub: "RX -68 dBm",  tone: "ok" },
    ],
  },
  {
    id: "gamma",
    label: "Sector γ",
    leaves: [
      { id: "r3", label: "Radio R-11",  sub: "RX -3 dBm",   tone: "danger" },
      { id: "a3", label: "Ant. PNL-C",  sub: "65° / 17 dBi", tone: "ok" },
    ],
  },
];

export function VizAssetHierarchy() {
  const reduced = useReducedMotion();
  const [hover, setHover] = useState<string | null>(null);
  const W = 600;
  const H = 360;

  const rootX = W / 2;
  const rootY = 40;

  // distribute sectors across width
  const sectorY = 140;
  const sectorXs = SECTORS.map((_, i) =>
    60 + (i + 0.5) * ((W - 120) / SECTORS.length),
  );

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" aria-hidden>
      <defs>
        <radialGradient id="towerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor={C.accent} stopOpacity="0.30" />
          <stop offset="100%" stopColor={C.accent} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ambient halo behind the tower */}
      <circle cx={rootX} cy={rootY + 8} r="80" fill="url(#towerGlow)" />

      {/* root: tower */}
      <motion.g
        initial={reduced ? false : { opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: easeOutEmphatic }}
      >
        <rect
          x={rootX - 78}
          y={rootY - 22}
          width="156"
          height="46"
          rx="8"
          fill={C.surfaceHi}
          stroke={C.line}
        />
        <text
          x={rootX}
          y={rootY - 5}
          textAnchor="middle"
          fontFamily="var(--font-sans, ui-sans-serif)"
          fontSize="13"
          fontWeight="600"
          fill={C.text}
        >
          Tower 18244
        </text>
        <text
          x={rootX}
          y={rootY + 12}
          textAnchor="middle"
          fontFamily="ui-monospace,monospace"
          fontSize="10"
          fill={C.text2}
        >
          DE · 5G · 3 sectors
        </text>
        <circle cx={rootX - 64} cy={rootY + 1} r="3" fill={C.accent} />
      </motion.g>

      {/* root → sectors lines */}
      {SECTORS.map((s, i) => {
        const x = sectorXs[i];
        return (
          <motion.path
            key={`l-${s.id}`}
            d={`M${rootX} ${rootY + 24} C ${rootX} ${rootY + 70}, ${x} ${sectorY - 36}, ${x} ${sectorY - 12}`}
            stroke={C.line}
            strokeWidth="1"
            fill="none"
            variants={drawIn}
            initial="hidden"
            whileInView="shown"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15 + i * 0.05 }}
          />
        );
      })}

      {/* sectors */}
      {SECTORS.map((s, i) => {
        const x = sectorXs[i];
        return (
          <motion.g
            key={s.id}
            initial={reduced ? false : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 + i * 0.06, ease: easeOutEmphatic }}
          >
            <rect
              x={x - 60}
              y={sectorY - 12}
              width="120"
              height="28"
              rx="6"
              fill={C.surface}
              stroke={C.line}
            />
            <text
              x={x}
              y={sectorY + 6}
              textAnchor="middle"
              fontFamily="var(--font-sans, ui-sans-serif)"
              fontSize="11.5"
              fontWeight="500"
              fill={C.text}
            >
              {s.label}
            </text>
          </motion.g>
        );
      })}

      {/* sectors → leaves */}
      {SECTORS.map((s, i) => {
        const sx = sectorXs[i];
        const count = s.leaves.length;
        return s.leaves.map((leaf, j) => {
          const lx = sx + (j - (count - 1) / 2) * 70;
          const ly = 240;
          return (
            <motion.path
              key={`ll-${leaf.id}`}
              d={`M${sx} ${sectorY + 16} C ${sx} ${sectorY + 50}, ${lx} ${ly - 30}, ${lx} ${ly - 8}`}
              stroke={C.lineSoft}
              strokeWidth="1"
              fill="none"
              variants={drawIn}
              initial="hidden"
              whileInView="shown"
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 + j * 0.05 }}
            />
          );
        });
      })}

      {/* leaves */}
      {SECTORS.map((s, i) => {
        const sx = sectorXs[i];
        const count = s.leaves.length;
        return s.leaves.map((leaf, j) => {
          const lx = sx + (j - (count - 1) / 2) * 70;
          const ly = 240;
          const isHover = hover === leaf.id;
          const tone =
            leaf.tone === "ok"     ? C.accent :
            leaf.tone === "warn"   ? C.warn :
            C.danger;
          return (
            <motion.g
              key={leaf.id}
              initial={reduced ? false : { opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.5 + j * 0.06 + i * 0.04 }}
              onMouseEnter={() => setHover(leaf.id)}
              onMouseLeave={() => setHover(null)}
              style={{ cursor: "pointer" }}
            >
              <rect
                x={lx - 32}
                y={ly - 8}
                width="64"
                height="64"
                rx="6"
                fill={isHover ? C.surfaceHi : C.surface}
                stroke={isHover ? tone : C.lineSoft}
                strokeWidth={isHover ? 1.5 : 1}
              />
              <circle cx={lx - 24} cy={ly + 1} r="2.5" fill={tone}>
                {!reduced && leaf.tone !== "ok" && (
                  <animate
                    attributeName="opacity"
                    values="1;0.35;1"
                    dur="1.6s"
                    repeatCount="indefinite"
                  />
                )}
              </circle>
              <text
                x={lx}
                y={ly + 6}
                textAnchor="middle"
                fontFamily="var(--font-sans, ui-sans-serif)"
                fontSize="10.5"
                fontWeight="500"
                fill={C.text}
              >
                {leaf.label}
              </text>
              <text
                x={lx}
                y={ly + 22}
                textAnchor="middle"
                fontFamily="ui-monospace,monospace"
                fontSize="9"
                fill={C.text3}
              >
                {leaf.sub}
              </text>
              <text
                x={lx}
                y={ly + 42}
                textAnchor="middle"
                fontFamily="ui-monospace,monospace"
                fontSize="8.5"
                fill={tone}
                opacity={leaf.tone === "ok" ? 0.7 : 1}
              >
                {leaf.tone === "ok" ? "● healthy" : leaf.tone === "warn" ? "● upgrade" : "● incident"}
              </text>
            </motion.g>
          );
        });
      })}

      {/* legend */}
      <g fontFamily="ui-monospace,monospace" fontSize="9.5" fill={C.text3}>
        <text x="20" y="340">3 sectors · 7 leaf assets · last sync 12s ago</text>
      </g>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   3. Work · Workflow board
   Four columns; cards animate flowing through them.
   ───────────────────────────────────────────────────────────── */

const WORK_COLUMNS = [
  { key: "schedule", label: "Schedule" },
  { key: "dispatch", label: "Dispatch" },
  { key: "verify",   label: "Verify"   },
  { key: "close",    label: "Close"    },
];

const WORK_CARDS = [
  { id: "WO-1102", type: "Deployment", crew: "Crew #4",  evidence: 4, total: 4, col: 3, tone: "ok" as const },
  { id: "WO-1108", type: "Inspection",  crew: "Crew #2",  evidence: 3, total: 3, col: 2, tone: "ok" as const },
  { id: "WO-1112", type: "Splice",      crew: "Crew #4",  evidence: 2, total: 3, col: 2, tone: "warn" as const },
  { id: "WO-1116", type: "Repair",      crew: "Crew #7",  evidence: 0, total: 4, col: 1, tone: "neutral" as const },
  { id: "WO-1120", type: "Deployment", crew: "Crew #1",  evidence: 0, total: 4, col: 0, tone: "neutral" as const },
  { id: "WO-1124", type: "Inspection",  crew: "Crew #3",  evidence: 0, total: 3, col: 0, tone: "neutral" as const },
];

export function VizWorkflowBoard() {
  const reduced = useReducedMotion();
  const W = 600;
  const H = 340;
  const colW = (W - 32) / WORK_COLUMNS.length;
  const colX = (i: number) => 16 + i * colW;

  // group cards by column for stack offsetting
  const byCol = WORK_COLUMNS.map((_, i) => WORK_CARDS.filter((c) => c.col === i));

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" aria-hidden>
      <defs>
        <linearGradient id="boardScan" x1="0" x2="1">
          <stop offset="0%"  stopColor={C.indigo} stopOpacity="0" />
          <stop offset="50%" stopColor={C.indigo} stopOpacity="0.18" />
          <stop offset="100%" stopColor={C.indigo} stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* columns */}
      {WORK_COLUMNS.map((c, i) => (
        <g key={c.key}>
          <rect
            x={colX(i)}
            y="32"
            width={colW - 8}
            height={H - 50}
            rx="8"
            fill={C.surface}
            stroke={C.lineSoft}
          />
          <text
            x={colX(i) + 14}
            y="22"
            fontFamily="ui-monospace,monospace"
            fontSize="10"
            letterSpacing="0.12em"
            fill={C.text3}
          >
            {c.label.toUpperCase()}
          </text>
          <text
            x={colX(i) + colW - 18}
            y="22"
            textAnchor="end"
            fontFamily="ui-monospace,monospace"
            fontSize="10"
            fill={C.text3}
          >
            {byCol[i].length}
          </text>
        </g>
      ))}

      {/* arrows between columns */}
      {WORK_COLUMNS.slice(0, -1).map((_, i) => (
        <g key={`arrow-${i}`}>
          <path
            d={`M${colX(i) + colW - 8} 168 L${colX(i + 1) + 4} 168`}
            stroke={C.lineStrong}
            strokeWidth="1"
            opacity="0.5"
          />
          <path
            d={`M${colX(i + 1) - 6} 164 L${colX(i + 1) + 2} 168 L${colX(i + 1) - 6} 172 Z`}
            fill={C.lineStrong}
            opacity="0.5"
          />
        </g>
      ))}

      {/* cards */}
      {byCol.map((cards, ci) =>
        cards.map((card, k) => {
          const x = colX(ci) + 8;
          const y = 48 + k * 70;
          const tone =
            card.tone === "ok"      ? C.accent :
            card.tone === "warn"    ? C.warn :
            C.text3;
          return (
            <motion.g
              key={card.id}
              initial={reduced ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 * (k + ci), ease: easeOutEmphatic }}
            >
              <rect
                x={x}
                y={y}
                width={colW - 24}
                height="58"
                rx="6"
                fill={C.surfaceHi}
                stroke={C.line}
              />
              <rect
                x={x}
                y={y}
                width="3"
                height="58"
                rx="1.5"
                fill={tone}
                opacity={card.tone === "neutral" ? 0.4 : 1}
              />
              <text
                x={x + 12}
                y={y + 18}
                fontFamily="ui-monospace,monospace"
                fontSize="11"
                fontWeight="500"
                fill={C.text}
              >
                {card.id}
              </text>
              <text
                x={x + 12}
                y={y + 33}
                fontFamily="var(--font-sans, ui-sans-serif)"
                fontSize="10.5"
                fill={C.text2}
              >
                {card.type}
              </text>
              <text
                x={x + 12}
                y={y + 48}
                fontFamily="ui-monospace,monospace"
                fontSize="9.5"
                fill={C.text3}
              >
                {card.crew}
              </text>
              {/* evidence pip bar */}
              <g transform={`translate(${x + colW - 56}, ${y + 42})`}>
                {Array.from({ length: card.total }).map((_, pi) => (
                  <rect
                    key={pi}
                    x={pi * 8}
                    y={0}
                    width="6"
                    height="6"
                    rx="1.5"
                    fill={pi < card.evidence ? C.accent : C.lineStrong}
                    opacity={pi < card.evidence ? 1 : 0.55}
                  />
                ))}
              </g>
            </motion.g>
          );
        }),
      )}

      {/* in-flight card animation: WO-1108 → Verify → Close */}
      {!reduced && (
        <motion.g
          initial={{ x: 0, opacity: 0 }}
          animate={{
            x: [0, colW, colW * 1.0001, 0],
            opacity: [0, 1, 1, 0],
          }}
          transition={{ duration: 5.4, repeat: Infinity, ease: easeOutEmphatic, times: [0, 0.45, 0.55, 1] }}
        >
          <rect x={colX(2) + 8} y="48" width={colW - 24} height="58" rx="6" fill="none" stroke={C.indigo} strokeWidth="1.4" opacity="0.7" />
        </motion.g>
      )}

      {!reduced && (
        <motion.rect
          x="0"
          y="32"
          width="80"
          height={H - 50}
          fill="url(#boardScan)"
          initial={{ x: -80 }}
          animate={{ x: W }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        />
      )}
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   4. Evidence · Inspector
   Photo with bounding boxes + sidebar with rules. CV scan line.
   ───────────────────────────────────────────────────────────── */

export function VizEvidenceInspect() {
  const reduced = useReducedMotion();
  return (
    <div className="grid grid-cols-1 gap-3 lg:grid-cols-[1.55fr_1fr]">
      {/* photo with overlays */}
      <div className="relative overflow-hidden rounded-[8px] border border-[var(--color-line)] bg-[var(--color-bg-elevated)]">
        <svg viewBox="0 0 360 240" className="block h-auto w-full" aria-hidden>
          <defs>
            <linearGradient id="evidenceSky" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%"  stopColor="#1A2330" />
              <stop offset="60%" stopColor="#0F1620" />
              <stop offset="100%" stopColor="#08090C" />
            </linearGradient>
            <linearGradient id="evidenceGround" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%"  stopColor="#1B1F26" />
              <stop offset="100%" stopColor="#0B0D12" />
            </linearGradient>
            <linearGradient id="cvScan" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor={C.accent} stopOpacity="0" />
              <stop offset="50%" stopColor={C.accent} stopOpacity="0.65" />
              <stop offset="100%" stopColor={C.accent} stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* abstract scene: sky + ground + tower silhouette + splice cabinet */}
          <rect x="0" y="0" width="360" height="160" fill="url(#evidenceSky)" />
          <rect x="0" y="160" width="360" height="80" fill="url(#evidenceGround)" />
          {/* horizon */}
          <line x1="0" y1="160" x2="360" y2="160" stroke={C.lineStrong} opacity="0.5" />
          {/* tower */}
          <g stroke={C.text4} strokeWidth="1" fill="none">
            <line x1="120" y1="40"  x2="100" y2="160" />
            <line x1="120" y1="40"  x2="140" y2="160" />
            <line x1="108" y1="100" x2="132" y2="100" />
            <line x1="104" y1="130" x2="136" y2="130" />
          </g>
          {/* splice cabinet (object of inspection) */}
          <rect x="200" y="120" width="74" height="48" rx="3" fill="#15191F" stroke={C.text4} strokeWidth="1" />
          <rect x="208" y="128" width="58" height="32" rx="2" fill="#0B0D12" stroke={C.text4} strokeWidth="0.6" />
          <circle cx="262" cy="144" r="2" fill={C.accent} opacity="0.8" />
          <line x1="208" y1="164" x2="266" y2="164" stroke={C.text4} strokeWidth="0.6" />

          {/* CV scanline */}
          {!reduced && (
            <motion.rect
              x="0"
              y="0"
              width="360"
              height="14"
              fill="url(#cvScan)"
              initial={{ y: -14 }}
              animate={{ y: 240 }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
            />
          )}

          {/* detected: closure (ok) */}
          <motion.g
            initial={reduced ? false : { opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4, ease: easeOutEmphatic }}
            style={{ transformOrigin: "237px 144px" }}
          >
            <rect x="200" y="118" width="74" height="48" rx="3" fill="none" stroke={C.accent} strokeWidth="1.5" strokeDasharray="3 2" />
            <text x="200" y="112" fontFamily="ui-monospace,monospace" fontSize="9" fill={C.accent}>
              closure · 0.97
            </text>
          </motion.g>

          {/* detected: torque (warn) */}
          <motion.g
            initial={reduced ? false : { opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6, ease: easeOutEmphatic }}
            style={{ transformOrigin: "230px 158px" }}
          >
            <rect x="216" y="148" width="28" height="20" rx="2" fill="none" stroke={C.warn} strokeWidth="1.4" strokeDasharray="3 2" />
            <text x="248" y="161" fontFamily="ui-monospace,monospace" fontSize="9" fill={C.warn}>
              torque ·  68 N·m
            </text>
          </motion.g>

          {/* missing: ground bond (danger) */}
          <motion.g
            initial={reduced ? false : { opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8, ease: easeOutEmphatic }}
          >
            <rect x="74" y="134" width="48" height="34" rx="2" fill="none" stroke={C.danger} strokeWidth="1.4" strokeDasharray="3 2" />
            <text x="74" y="180" fontFamily="ui-monospace,monospace" fontSize="9" fill={C.danger}>
              ground bond · missing
            </text>
          </motion.g>

          {/* meta */}
          <g fontFamily="ui-monospace,monospace" fontSize="8.5" fill={C.text3}>
            <text x="10" y="14">PHOTO 0142 · WO-2026-04-1102</text>
            <text x="10" y="232">GPS 48.137 N · 11.575 E · 14:52 UTC</text>
          </g>
        </svg>
      </div>

      {/* rules sidebar */}
      <motion.div
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true }}
        variants={fadeUpStagger(0.07)}
        className="flex flex-col gap-2 rounded-[8px] border border-[var(--color-line)] bg-[var(--color-bg-elevated)] p-3"
      >
        <div className="mb-1 flex items-center justify-between font-mono text-[10px] tracking-[0.12em] text-[var(--color-text-3)]">
          <span>RULES · 4</span>
          <span className="text-[var(--color-warn)]">3/4 PASS</span>
        </div>
        {[
          { label: "Splice closure visible",   ok: "ok",     score: "0.97" },
          { label: "Geofence within 25m",      ok: "ok",     score: "12.4 m" },
          { label: "Torque ≥ 70 N·m",          ok: "warn",   score: "68 N·m" },
          { label: "Ground bond present",      ok: "danger", score: "missing" },
        ].map((r) => {
          const tone =
            r.ok === "ok"     ? "var(--color-accent)" :
            r.ok === "warn"   ? "var(--color-warn)" :
            "var(--color-danger)";
          return (
            <motion.div
              key={r.label}
              variants={fadeUp}
              className="flex items-start justify-between rounded-[6px] border bg-[var(--color-bg-raised)] px-3 py-2 text-[12px]"
              style={{ borderColor: r.ok === "ok" ? "var(--color-line-subtle)" : tone }}
            >
              <span className="flex items-start gap-2 text-[var(--color-text)]">
                <span
                  className="mt-[5px] inline-block h-[6px] w-[6px] rounded-full"
                  style={{ background: tone }}
                />
                {r.label}
              </span>
              <span className="font-mono text-[11px]" style={{ color: tone }}>
                {r.score}
              </span>
            </motion.div>
          );
        })}
        <div className="mt-1 rounded-[6px] border border-[rgba(248,113,113,0.4)] bg-[rgba(248,113,113,0.05)] px-3 py-2 font-mono text-[11px] leading-[1.5] text-[var(--color-danger)]">
          WO-1102 blocked · ground bond required to close
        </div>
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   5. Integrations · Bus
   Center "Fieldforce" hub. Source systems on left, write-targets
   on right. Animated packets glide along the lines.
   ───────────────────────────────────────────────────────────── */

const INT_LEFT = [
  { label: "Oracle EBS",   tag: "ERP" },
  { label: "Netcracker",   tag: "OSS" },
  { label: "ServiceNow",   tag: "ITSM" },
  { label: "ArcGIS",       tag: "GIS" },
  { label: "Okta",         tag: "IDP" },
];
const INT_RIGHT = [
  { label: "Snowflake",    tag: "DWH" },
  { label: "Datadog",      tag: "OBS" },
  { label: "Workday",      tag: "FIN" },
  { label: "OCPP 2.0.1",   tag: "DEV" },
  { label: "MQTT bus",     tag: "TLM" },
];

export function VizIntegrationsBus() {
  const reduced = useReducedMotion();
  const W = 640;
  const H = 360;
  const cx = W / 2;
  const cy = H / 2;
  const leftX = 88;
  const rightX = W - 88;
  const slotY = (i: number, n: number) => 60 + i * ((H - 120) / Math.max(1, n - 1));

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" aria-hidden>
      <defs>
        <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor={C.accent} stopOpacity="0.3" />
          <stop offset="60%"  stopColor={C.accent} stopOpacity="0.05" />
          <stop offset="100%" stopColor={C.accent} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="busLineL" x1="1" x2="0" y1="0" y2="0">
          <stop offset="0%" stopColor={C.accent} stopOpacity="0.55" />
          <stop offset="100%" stopColor={C.accent} stopOpacity="0" />
        </linearGradient>
        <linearGradient id="busLineR" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor={C.indigo} stopOpacity="0.55" />
          <stop offset="100%" stopColor={C.indigo} stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* halo */}
      <circle cx={cx} cy={cy} r="170" fill="url(#hubGlow)" />

      {/* LEFT systems */}
      {INT_LEFT.map((s, i) => {
        const y = slotY(i, INT_LEFT.length);
        return (
          <motion.g
            key={`L-${s.label}`}
            initial={reduced ? false : { opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: easeOutEmphatic }}
          >
            <rect x={leftX - 70} y={y - 14} width="140" height="28" rx="6" fill={C.surface} stroke={C.line} />
            <text x={leftX - 56} y={y + 4} fontFamily="ui-monospace,monospace" fontSize="9" fill={C.text3} letterSpacing="0.1em">
              {s.tag}
            </text>
            <text x={leftX + 64} y={y + 4} textAnchor="end" fontFamily="var(--font-sans, ui-sans-serif)" fontSize="11.5" fontWeight="500" fill={C.text}>
              {s.label}
            </text>
          </motion.g>
        );
      })}

      {/* RIGHT systems */}
      {INT_RIGHT.map((s, i) => {
        const y = slotY(i, INT_RIGHT.length);
        return (
          <motion.g
            key={`R-${s.label}`}
            initial={reduced ? false : { opacity: 0, x: 8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: easeOutEmphatic }}
          >
            <rect x={rightX - 70} y={y - 14} width="140" height="28" rx="6" fill={C.surface} stroke={C.line} />
            <text x={rightX + 56} y={y + 4} textAnchor="end" fontFamily="ui-monospace,monospace" fontSize="9" fill={C.text3} letterSpacing="0.1em">
              {s.tag}
            </text>
            <text x={rightX - 56} y={y + 4} fontFamily="var(--font-sans, ui-sans-serif)" fontSize="11.5" fontWeight="500" fill={C.text}>
              {s.label}
            </text>
          </motion.g>
        );
      })}

      {/* bus lines */}
      {INT_LEFT.map((_, i) => {
        const y = slotY(i, INT_LEFT.length);
        return (
          <motion.path
            key={`pl-${i}`}
            d={`M${leftX + 70} ${y} C ${leftX + 180} ${y}, ${cx - 100} ${cy}, ${cx - 60} ${cy}`}
            stroke="url(#busLineL)"
            strokeWidth="1.2"
            fill="none"
            variants={drawIn}
            initial="hidden"
            whileInView="shown"
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.1 + i * 0.05 }}
          />
        );
      })}
      {INT_RIGHT.map((_, i) => {
        const y = slotY(i, INT_RIGHT.length);
        return (
          <motion.path
            key={`pr-${i}`}
            d={`M${cx + 60} ${cy} C ${cx + 100} ${cy}, ${rightX - 180} ${y}, ${rightX - 70} ${y}`}
            stroke="url(#busLineR)"
            strokeWidth="1.2"
            fill="none"
            variants={drawIn}
            initial="hidden"
            whileInView="shown"
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.1 + i * 0.05 }}
          />
        );
      })}

      {/* animated packets */}
      {!reduced && INT_LEFT.map((_, i) => {
        const y = slotY(i, INT_LEFT.length);
        return (
          <circle key={`pktL-${i}`} r="2.4" fill={C.accent}>
            <animateMotion
              dur={`${3 + (i % 3) * 0.7}s`}
              repeatCount="indefinite"
              begin={`${i * 0.6}s`}
              path={`M${leftX + 70} ${y} C ${leftX + 180} ${y}, ${cx - 100} ${cy}, ${cx - 60} ${cy}`}
            />
          </circle>
        );
      })}
      {!reduced && INT_RIGHT.map((_, i) => {
        const y = slotY(i, INT_RIGHT.length);
        return (
          <circle key={`pktR-${i}`} r="2.4" fill={C.indigo}>
            <animateMotion
              dur={`${3 + (i % 3) * 0.7}s`}
              repeatCount="indefinite"
              begin={`${i * 0.5 + 0.3}s`}
              path={`M${cx + 60} ${cy} C ${cx + 100} ${cy}, ${rightX - 180} ${y}, ${rightX - 70} ${y}`}
            />
          </circle>
        );
      })}

      {/* hub */}
      <motion.g
        initial={reduced ? false : { opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: easeOutEmphatic }}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      >
        <rect x={cx - 72} y={cy - 28} width="144" height="56" rx="10" fill={C.surfaceHi} stroke={C.lineStrong} />
        <text x={cx} y={cy - 6} textAnchor="middle" fontFamily="var(--font-sans, ui-sans-serif)" fontSize="13" fontWeight="600" fill={C.text}>
          Fieldforce
        </text>
        <text x={cx} y={cy + 12} textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="9.5" fill={C.text2} letterSpacing="0.1em">
          read · transform · write
        </text>
        <circle cx={cx - 56} cy={cy - 14} r="2.5" fill={C.accent}>
          {!reduced && (
            <animate attributeName="opacity" values="1;0.3;1" dur="1.6s" repeatCount="indefinite" />
          )}
        </circle>
      </motion.g>

      {/* labels */}
      <g fontFamily="ui-monospace,monospace" fontSize="9" fill={C.text3} letterSpacing="0.12em">
        <text x={leftX - 14} y={26} textAnchor="end">SOURCES → READ</text>
        <text x={rightX + 14} y={26}>WRITE → TARGETS</text>
      </g>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   6. Security · Stack
   Architectural slab diagram: layers stack from top to bottom.
   Each layer is a labeled card with a status pip.
   ───────────────────────────────────────────────────────────── */

const SEC_LAYERS = [
  { label: "Identity & RBAC",     sub: "Okta · Azure AD · row-level scoping",            tone: "ok" as const },
  { label: "Encryption",          sub: "AES-256 at rest · TLS 1.3 in transit · BYOK",   tone: "ok" as const },
  { label: "Region pinning",      sub: "US · EU · MENA · APAC residency boundary",      tone: "ok" as const },
  { label: "Audit log",           sub: "every action signed · queryable for SOC 2",     tone: "ok" as const },
  { label: "Sub-processors",      sub: "public list · 30-day notice on changes",        tone: "ok" as const },
];

export function VizSecurityStack() {
  const reduced = useReducedMotion();
  const W = 600;
  const H = 380;
  const layerH = 50;
  const startY = 78;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" aria-hidden>
      <defs>
        <linearGradient id="secShield" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%"   stopColor={C.accent} stopOpacity="0.5" />
          <stop offset="100%" stopColor={C.accent} stopOpacity="0" />
        </linearGradient>
        <linearGradient id="secCard" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%"  stopColor={C.surface} />
          <stop offset="100%" stopColor={C.surfaceHi} />
        </linearGradient>
      </defs>

      {/* shield motif */}
      <motion.g
        initial={reduced ? false : { opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: easeOutEmphatic }}
      >
        <path
          d="M300 12 L240 30 L240 56 C240 78 268 92 300 100 C332 92 360 78 360 56 L360 30 Z"
          fill="url(#secShield)"
          stroke={C.accent}
          strokeOpacity="0.6"
          strokeWidth="1"
        />
        <path
          d="M280 56 L294 70 L322 42"
          stroke={C.accent}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
      <text x={W / 2} y="118" textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="10" fill={C.text3} letterSpacing="0.12em">
        SOC 2 TYPE II · ISO 27001 · GDPR
      </text>

      {/* stack layers */}
      {SEC_LAYERS.map((l, i) => {
        const y = startY + 70 + i * (layerH + 8);
        const tone = C.accent;
        return (
          <motion.g
            key={l.label}
            initial={reduced ? false : { opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.07, ease: easeOutEmphatic }}
          >
            <rect x="56" y={y} width={W - 112} height={layerH} rx="8" fill="url(#secCard)" stroke={C.line} />
            <rect x="56" y={y} width="3" height={layerH} rx="1.5" fill={tone} />
            <text x="76" y={y + 21} fontFamily="var(--font-sans, ui-sans-serif)" fontSize="13" fontWeight="500" fill={C.text}>
              {l.label}
            </text>
            <text x="76" y={y + 38} fontFamily="ui-monospace,monospace" fontSize="10.5" fill={C.text3}>
              {l.sub}
            </text>
            <g transform={`translate(${W - 90}, ${y + 24})`}>
              <circle r="3" fill={tone}>
                {!reduced && (
                  <animate attributeName="opacity" values="1;0.45;1" dur="2.2s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
                )}
              </circle>
              <text x="10" y="4" fontFamily="ui-monospace,monospace" fontSize="9" fill={tone}>
                ACTIVE
              </text>
            </g>
          </motion.g>
        );
      })}
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   7. Agents · Mesh
   Six agents arranged on a hex around a central event bus.
   Lines pulse on a rotating schedule.
   ───────────────────────────────────────────────────────────── */

const MESH = [
  { id: "dispatch",  label: "Dispatch",  short: "DI" },
  { id: "forecast",  label: "Forecast",  short: "FO" },
  { id: "evidence",  label: "Evidence",  short: "EV" },
  { id: "reconcile", label: "Reconcile", short: "RE" },
  { id: "permit",    label: "Permit",    short: "PE" },
  { id: "copilot",   label: "Copilot",   short: "CO" },
];

export function VizAgentMesh() {
  const reduced = useReducedMotion();
  const W = 600;
  const H = 360;
  const cx = W / 2;
  const cy = H / 2;
  const r = 130;

  const points = MESH.map((_, i) => {
    const a = -Math.PI / 2 + (i * Math.PI * 2) / MESH.length;
    return { x: cx + Math.cos(a) * r, y: cy + Math.sin(a) * r };
  });

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" aria-hidden>
      <defs>
        <radialGradient id="meshHub" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={C.indigo} stopOpacity="0.35" />
          <stop offset="60%" stopColor={C.indigo} stopOpacity="0.08" />
          <stop offset="100%" stopColor={C.indigo} stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx={cx} cy={cy} r="180" fill="url(#meshHub)" />

      {/* outer ring */}
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={C.lineSoft} strokeDasharray="2 6" />
      {/* inner ring */}
      <circle cx={cx} cy={cy} r="56" fill="none" stroke={C.lineSoft} />

      {/* spokes (all) */}
      {points.map((p, i) => (
        <line
          key={`spoke-${i}`}
          x1={cx}
          y1={cy}
          x2={p.x}
          y2={p.y}
          stroke={C.line}
          strokeOpacity="0.5"
          strokeWidth="1"
        />
      ))}

      {/* peer-to-peer chords (alt links) */}
      {points.map((p, i) => {
        const next = points[(i + 2) % points.length];
        return (
          <line
            key={`chord-${i}`}
            x1={p.x}
            y1={p.y}
            x2={next.x}
            y2={next.y}
            stroke={C.line}
            strokeOpacity="0.25"
            strokeWidth="1"
          />
        );
      })}

      {/* pulsing edges — one at a time */}
      {!reduced && points.map((p, i) => (
        <motion.line
          key={`pulse-${i}`}
          x1={cx}
          y1={cy}
          x2={p.x}
          y2={p.y}
          stroke={C.accent}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeDasharray="4 8"
          animate={{ strokeDashoffset: [0, -12] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "linear", delay: i * 0.3 }}
          opacity="0.9"
        />
      ))}

      {/* central hub */}
      <motion.g
        initial={reduced ? false : { opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: easeOutEmphatic }}
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      >
        <circle cx={cx} cy={cy} r="50" fill={C.surfaceHi} stroke={C.lineStrong} />
        <text x={cx} y={cy - 4} textAnchor="middle" fontFamily="var(--font-sans, ui-sans-serif)" fontSize="12" fontWeight="600" fill={C.text}>
          Event bus
        </text>
        <text x={cx} y={cy + 14} textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="9.5" fill={C.text3} letterSpacing="0.1em">
          all actions · signed
        </text>
      </motion.g>

      {/* agent nodes */}
      {points.map((p, i) => {
        const a = MESH[i];
        return (
          <motion.g
            key={a.id}
            initial={reduced ? false : { opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 + i * 0.07, ease: easeOutEmphatic }}
            style={{ transformOrigin: `${p.x}px ${p.y}px` }}
          >
            {!reduced && (
              <circle cx={p.x} cy={p.y} r="32" fill="none" stroke={C.accent} strokeWidth="1" opacity="0.4">
                <animate attributeName="r" values="22;36;22" dur="3s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
              </circle>
            )}
            <circle cx={p.x} cy={p.y} r="26" fill={C.surface} stroke={C.lineStrong} />
            <text x={p.x} y={p.y - 1} textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="11" fontWeight="600" fill={C.accent}>
              {a.short}
            </text>
            <text x={p.x} y={p.y + 11} textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="8.5" fill={C.text3}>
              v1
            </text>
            {/* label below node, away from center */}
            <text
              x={p.x}
              y={p.y + (p.y > cy ? 46 : -36)}
              textAnchor="middle"
              fontFamily="var(--font-sans, ui-sans-serif)"
              fontSize="11.5"
              fontWeight="500"
              fill={C.text}
            >
              {a.label}
            </text>
          </motion.g>
        );
      })}
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   8. Analytics · Executive dashboard
   Composite mock: KPI strip on top, area chart below, heat strip.
   Numbers count up subtly via CSS only (static end values shown).
   ───────────────────────────────────────────────────────────── */

const KPIS = [
  { label: "Sites in motion", value: "3,184", delta: "+ 4.2%", trend: "ok" as const },
  { label: "SLA risk (7d)",   value: "27",    delta: "− 9",    trend: "ok" as const },
  { label: "Crew utilization", value: "87%",   delta: "+ 1.6 pts", trend: "ok" as const },
  { label: "Margin recovery", value: "$1.84M", delta: "QTD",    trend: "neutral" as const },
];

export function VizExecutiveDash() {
  const reduced = useReducedMotion();
  return (
    <div className="space-y-3">
      {/* KPI strip */}
      <motion.div
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true }}
        variants={fadeUpStagger(0.07)}
        className="grid grid-cols-2 gap-2 lg:grid-cols-4"
      >
        {KPIS.map((k) => {
          const tone =
            k.trend === "ok" ? "var(--color-accent)" :
            k.trend === "neutral" ? "var(--color-text-2)" :
            "var(--color-warn)";
          return (
            <motion.div
              key={k.label}
              variants={fadeUp}
              className="rounded-[8px] border border-[var(--color-line)] bg-[var(--color-bg-elevated)] p-3"
            >
              <p className="font-mono text-[10px] tracking-[0.1em] text-[var(--color-text-3)]">
                {k.label.toUpperCase()}
              </p>
              <p className="mt-2 text-[20px] font-semibold leading-[1] tracking-[-0.01em] text-[var(--color-text)]">
                {k.value}
              </p>
              <p className="mt-1 font-mono text-[10.5px]" style={{ color: tone }}>
                {k.delta}
              </p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* trend chart */}
      <div className="rounded-[8px] border border-[var(--color-line)] bg-[var(--color-bg-elevated)] p-3">
        <div className="flex items-center justify-between">
          <p className="font-mono text-[10px] tracking-[0.1em] text-[var(--color-text-3)]">
            WORK ORDERS · CLOSED · 30D
          </p>
          <div className="flex gap-3 font-mono text-[10px] text-[var(--color-text-3)]">
            <span className="flex items-center gap-1">
              <span className="inline-block h-[6px] w-[6px] rounded-full bg-[var(--color-accent)]" />
              actual
            </span>
            <span className="flex items-center gap-1">
              <span className="inline-block h-[6px] w-[6px] rounded-full bg-[var(--color-indigo)]" />
              forecast
            </span>
          </div>
        </div>
        <svg viewBox="0 0 360 132" className="mt-2 h-auto w-full" aria-hidden>
          <defs>
            <linearGradient id="dashFillA" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%"  stopColor={C.accent} stopOpacity="0.32" />
              <stop offset="100%" stopColor={C.accent} stopOpacity="0" />
            </linearGradient>
            <linearGradient id="dashFillB" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%"  stopColor={C.indigo} stopOpacity="0.18" />
              <stop offset="100%" stopColor={C.indigo} stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* gridlines */}
          <g stroke={C.lineSoft}>
            <line x1="0" y1="32" x2="360" y2="32" />
            <line x1="0" y1="64" x2="360" y2="64" />
            <line x1="0" y1="96" x2="360" y2="96" />
          </g>

          {/* y-axis ticks */}
          <g fontFamily="ui-monospace,monospace" fontSize="9" fill={C.text4}>
            <text x="0" y="29">320</text>
            <text x="0" y="61">220</text>
            <text x="0" y="93">120</text>
          </g>

          {/* actual area */}
          <path
            d="M22 100 L52 92 L82 86 L112 80 L142 72 L172 78 L202 64 L232 56 L262 48 L292 56 L322 42 L352 36 L352 132 L22 132 Z"
            fill="url(#dashFillA)"
          />
          <motion.path
            d="M22 100 L52 92 L82 86 L112 80 L142 72 L172 78 L202 64 L232 56 L262 48 L292 56 L322 42 L352 36"
            stroke={C.accent}
            strokeWidth="1.8"
            fill="none"
            variants={drawIn}
            initial="hidden"
            whileInView="shown"
            viewport={{ once: true }}
            transition={{ duration: 1.6 }}
          />

          {/* forecast (dashed) */}
          <motion.path
            d="M232 56 L262 50 L292 46 L322 38 L352 28"
            stroke={C.indigo}
            strokeWidth="1.6"
            strokeDasharray="4 4"
            fill="none"
            variants={drawIn}
            initial="hidden"
            whileInView="shown"
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
          />

          {/* hover dot */}
          {!reduced && (
            <motion.circle
              r="3.5"
              fill={C.accent}
              initial={{ cx: 22, cy: 100 }}
              animate={{
                cx: [22, 142, 232, 322, 22],
                cy: [100, 72, 56, 42, 100],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: easeOutEmphatic }}
            />
          )}
        </svg>
      </div>

      {/* heat strip — distribution by region */}
      <div className="rounded-[8px] border border-[var(--color-line)] bg-[var(--color-bg-elevated)] p-3">
        <p className="font-mono text-[10px] tracking-[0.1em] text-[var(--color-text-3)]">
          BY REGION · 7D HEAT
        </p>
        <div className="mt-2 grid grid-cols-12 gap-[3px]">
          {[
            12, 15, 22, 31, 28, 18, 24, 36, 41, 33, 29, 22,
            8,  9, 13, 26, 38, 44, 51, 47, 39, 31, 22, 14,
            18, 22, 18, 24, 31, 38, 36, 28, 24, 18, 14, 12,
          ].map((v, i) => {
            const intensity = Math.min(1, v / 50);
            return (
              <motion.div
                key={i}
                initial={reduced ? false : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.012 }}
                className="aspect-[1/1] rounded-[2px]"
                style={{
                  background: `rgba(111, 228, 217, ${0.08 + intensity * 0.7})`,
                  outline: "1px solid rgba(255,255,255,0.04)",
                }}
                title={`${v} events`}
              />
            );
          })}
        </div>
        <div className="mt-2 flex items-center justify-between font-mono text-[9.5px] text-[var(--color-text-4)]">
          <span>Mon</span><span>Wed</span><span>Fri</span><span>Sun</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   9. Analytics · Forecast risk matrix
   Bubble chart: severity × days-to-breach. Color-coded sites.
   ───────────────────────────────────────────────────────────── */

const FORECAST_BUBBLES = [
  { id: "18244", days: 3, sev: 0.82, tone: "danger" as const },
  { id: "18411", days: 4, sev: 0.74, tone: "danger" as const },
  { id: "18509", days: 6, sev: 0.62, tone: "warn"   as const },
  { id: "18621", days: 7, sev: 0.55, tone: "warn"   as const },
  { id: "18752", days: 9, sev: 0.41, tone: "warn"   as const },
  { id: "18801", days: 11, sev: 0.31, tone: "ok"    as const },
  { id: "18904", days: 13, sev: 0.22, tone: "ok"    as const },
];

export function VizForecastMatrix() {
  const reduced = useReducedMotion();
  const W = 600;
  const H = 320;
  const padL = 56;
  const padR = 24;
  const padT = 24;
  const padB = 44;
  const innerW = W - padL - padR;
  const innerH = H - padT - padB;

  const xFor = (d: number) => padL + (1 - Math.min(1, d / 14)) * innerW;
  const yFor = (s: number) => padT + (1 - s) * innerH;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" aria-hidden>
      <defs>
        <linearGradient id="riskBand" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%"  stopColor="#F87171" stopOpacity="0.18" />
          <stop offset="50%" stopColor="#F5B042" stopOpacity="0.10" />
          <stop offset="100%" stopColor="#6FE4D9" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* risk band */}
      <rect x={padL} y={padT} width={innerW} height={innerH} fill="url(#riskBand)" rx="4" />

      {/* gridlines */}
      <g stroke={C.lineSoft}>
        {[0.25, 0.5, 0.75].map((t) => (
          <line key={t} x1={padL} y1={padT + t * innerH} x2={padL + innerW} y2={padT + t * innerH} />
        ))}
        {[0.2, 0.4, 0.6, 0.8].map((t) => (
          <line key={t} x1={padL + t * innerW} y1={padT} x2={padL + t * innerW} y2={padT + innerH} />
        ))}
      </g>

      {/* threshold line */}
      <line
        x1={padL}
        y1={yFor(0.6)}
        x2={padL + innerW}
        y2={yFor(0.6)}
        stroke={C.warn}
        strokeWidth="1"
        strokeDasharray="4 4"
        opacity="0.7"
      />
      <text
        x={padL + 6}
        y={yFor(0.6) - 4}
        fontFamily="ui-monospace,monospace"
        fontSize="9"
        fill={C.warn}
      >
        SLA threshold
      </text>

      {/* axes */}
      <g stroke={C.lineStrong}>
        <line x1={padL} y1={padT} x2={padL} y2={padT + innerH} />
        <line x1={padL} y1={padT + innerH} x2={padL + innerW} y2={padT + innerH} />
      </g>
      <g fontFamily="ui-monospace,monospace" fontSize="9.5" fill={C.text3}>
        <text x="14" y={padT + 8}>HIGH</text>
        <text x="14" y={padT + innerH / 2}>SEV</text>
        <text x="14" y={padT + innerH}>LOW</text>
        <text x={padL + 4} y={H - 24} textAnchor="start">14d</text>
        <text x={padL + innerW / 2} y={H - 24} textAnchor="middle">7d</text>
        <text x={padL + innerW - 4} y={H - 24} textAnchor="end">today</text>
        <text x={padL + innerW / 2} y={H - 8} textAnchor="middle" fill={C.text3}>
          DAYS TO BREACH →
        </text>
      </g>

      {/* bubbles */}
      {FORECAST_BUBBLES.map((b, i) => {
        const cx = xFor(b.days);
        const cy = yFor(b.sev);
        const tone =
          b.tone === "danger" ? C.danger :
          b.tone === "warn"   ? C.warn :
          C.accent;
        const radius = 8 + b.sev * 12;
        return (
          <motion.g
            key={b.id}
            initial={reduced ? false : { opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.07, ease: easeOutEmphatic }}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
          >
            {b.tone === "danger" && !reduced && (
              <circle cx={cx} cy={cy} r={radius} fill="none" stroke={tone} strokeWidth="1">
                <animate attributeName="r" values={`${radius};${radius + 12};${radius}`} dur="2.4s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.7;0;0.7" dur="2.4s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
              </circle>
            )}
            <circle cx={cx} cy={cy} r={radius} fill={tone} fillOpacity="0.18" stroke={tone} strokeWidth="1.2" />
            <text x={cx} y={cy + 3} textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="9.5" fontWeight="500" fill={tone}>
              {b.id}
            </text>
            <text x={cx} y={cy + radius + 12} textAnchor="middle" fontFamily="ui-monospace,monospace" fontSize="9" fill={C.text3}>
              {b.days}d
            </text>
          </motion.g>
        );
      })}
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   10. Mobile · Offline-first sync
   Phone frame. Connection toggles. Sync queue items animate.
   ───────────────────────────────────────────────────────────── */

type QueueItem = { id: string; label: string; size: string };
const SYNC_QUEUE: QueueItem[] = [
  { id: "PHO-0142", label: "Photo · splice closure", size: "1.8 MB" },
  { id: "PHO-0143", label: "Photo · torque label",   size: "1.4 MB" },
  { id: "SIG-018",  label: "Signature · F. Roth",    size: "12 KB" },
  { id: "GPS-018",  label: "Geofence ping",          size: "2 KB" },
  { id: "FRM-018",  label: "Closeout form",          size: "8 KB" },
];

export function VizMobileSync() {
  const reduced = useReducedMotion();
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_1.1fr]">
      {/* phone */}
      <div className="relative mx-auto aspect-[9/19] w-full max-w-[200px] rounded-[28px] border border-[var(--color-line-strong)] bg-[var(--color-bg-inset)] p-2 shadow-inner">
        <div className="absolute left-1/2 top-2 z-10 h-[14px] w-[60px] -translate-x-1/2 rounded-full bg-[var(--color-bg-base)]" />
        <div className="relative flex h-full flex-col overflow-hidden rounded-[22px] border border-[var(--color-line-subtle)] bg-[var(--color-bg-base)] p-3">
          <div className="flex items-center justify-between font-mono text-[9.5px] text-[var(--color-text-3)]">
            <span>14:52</span>
            <span className="flex items-center gap-1">
              <span
                className="inline-block h-[7px] w-[7px] rounded-full bg-[var(--color-warn)]"
                style={!reduced ? { animation: "led-blink 1.6s infinite" } : undefined}
              />
              OFFLINE
            </span>
          </div>
          <p className="mt-3 font-mono text-[9px] tracking-[0.1em] text-[var(--color-text-3)]">
            WO-2026-04-1102
          </p>
          <p className="text-[12px] font-semibold text-[var(--color-text)]">Splice · Munich 04</p>
          <p className="mt-1 text-[10px] text-[var(--color-text-2)]">Crew #4 · F. Roth</p>

          <div className="mt-3 rounded-[6px] border border-[var(--color-line-subtle)] bg-[var(--color-bg-elevated)] p-2">
            <p className="font-mono text-[9px] tracking-[0.08em] text-[var(--color-text-3)]">
              QUEUE · 5
            </p>
            <div className="mt-1 space-y-1">
              {SYNC_QUEUE.slice(0, 3).map((q, i) => (
                <motion.div
                  key={q.id}
                  initial={reduced ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center justify-between font-mono text-[9px] text-[var(--color-text-2)]"
                >
                  <span className="truncate">{q.label}</span>
                  <span className="text-[var(--color-text-3)]">{q.size}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-auto rounded-[6px] border border-[rgba(245,176,66,0.4)] bg-[rgba(245,176,66,0.08)] p-2">
            <p className="font-mono text-[9px] leading-[1.4] text-[var(--color-warn)]">
              No connection. 5 items will sync when you're back online.
            </p>
          </div>
        </div>
      </div>

      {/* sync queue + reconnect timeline */}
      <motion.div
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true }}
        variants={fadeUpStagger(0.06)}
        className="flex flex-col gap-2 rounded-[8px] border border-[var(--color-line)] bg-[var(--color-bg-elevated)] p-3"
      >
        <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.12em] text-[var(--color-text-3)]">
          <span>SYNC LOG</span>
          <span className="text-[var(--color-accent)]">RECONNECTED · 18:04</span>
        </div>
        {[
          { t: "14:52", text: "Disconnected · cell 0 bars",  tone: "warn" },
          { t: "14:53", text: "Photo 0142 captured · queued", tone: "neutral" },
          { t: "15:08", text: "Signature captured · queued",  tone: "neutral" },
          { t: "16:30", text: "Closeout submitted · queued",  tone: "neutral" },
          { t: "18:04", text: "Reconnected · sync started",   tone: "ok" },
          { t: "18:04", text: "✓ 5 items synced · 0 conflicts", tone: "ok" },
        ].map((r, i) => {
          const tone =
            r.tone === "ok"     ? "var(--color-accent)" :
            r.tone === "warn"   ? "var(--color-warn)" :
            "var(--color-text-2)";
          return (
            <motion.div
              key={i}
              variants={fadeUp}
              className="grid grid-cols-[52px_1fr] gap-2 font-mono text-[11px]"
            >
              <span className="text-[var(--color-text-3)]">{r.t}</span>
              <span style={{ color: tone }}>{r.text}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   11. Mobile · On-device CV
   Phone frame with photo + bounding boxes + on-device verdict.
   ───────────────────────────────────────────────────────────── */

export function VizMobileCV() {
  const reduced = useReducedMotion();
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_1.1fr]">
      {/* phone with photo + boxes */}
      <div className="relative mx-auto aspect-[9/19] w-full max-w-[200px] rounded-[28px] border border-[var(--color-line-strong)] bg-[var(--color-bg-inset)] p-2 shadow-inner">
        <div className="absolute left-1/2 top-2 z-10 h-[14px] w-[60px] -translate-x-1/2 rounded-full bg-[var(--color-bg-base)]" />
        <div className="relative flex h-full flex-col overflow-hidden rounded-[22px] border border-[var(--color-line-subtle)] bg-[var(--color-bg-base)] p-2">
          <div className="flex items-center justify-between font-mono text-[9.5px] text-[var(--color-text-3)]">
            <span>14:52</span>
            <span className="flex items-center gap-1">
              <span className="inline-block h-[7px] w-[7px] rounded-full bg-[var(--color-accent)]" />
              ON-DEVICE
            </span>
          </div>

          <div className="relative mt-2 flex-1 overflow-hidden rounded-[8px] border border-[var(--color-line-subtle)] bg-[var(--color-bg-elevated)]">
            <svg viewBox="0 0 200 280" className="block h-full w-full" aria-hidden preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="mobSky" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%"  stopColor="#1A2330" />
                  <stop offset="100%" stopColor="#0B0D12" />
                </linearGradient>
              </defs>
              <rect width="200" height="280" fill="url(#mobSky)" />
              {/* abstract splice cabinet */}
              <rect x="44" y="100" width="112" height="100" rx="3" fill="#15191F" stroke={C.text4} />
              <rect x="56" y="116" width="88" height="60" rx="2" fill="#0B0D12" stroke={C.text4} strokeWidth="0.6" />
              <circle cx="138" cy="146" r="2.5" fill={C.accent} opacity="0.8" />
              <line x1="56" y1="186" x2="144" y2="186" stroke={C.text4} strokeWidth="0.6" />

              {/* CV scan */}
              {!reduced && (
                <motion.rect
                  x="0"
                  y="0"
                  width="200"
                  height="14"
                  fill={C.accent}
                  opacity="0.18"
                  initial={{ y: -14 }}
                  animate={{ y: 280 }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
                />
              )}

              {/* boxes */}
              <motion.g
                initial={reduced ? false : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <rect x="44" y="98" width="112" height="100" rx="3" fill="none" stroke={C.accent} strokeWidth="1.5" strokeDasharray="3 2" />
                <text x="44" y="92" fontFamily="ui-monospace,monospace" fontSize="8" fill={C.accent}>closure · 0.97</text>
              </motion.g>
              <motion.g
                initial={reduced ? false : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                <rect x="62" y="124" width="34" height="22" rx="2" fill="none" stroke={C.warn} strokeWidth="1.4" strokeDasharray="3 2" />
                <text x="100" y="138" fontFamily="ui-monospace,monospace" fontSize="8" fill={C.warn}>torque · 68</text>
              </motion.g>
            </svg>
          </div>

          <div className="mt-2 rounded-[6px] border border-[rgba(245,176,66,0.4)] bg-[rgba(245,176,66,0.08)] p-2">
            <p className="font-mono text-[9px] tracking-[0.05em] text-[var(--color-warn)]">
              ⚠ TORQUE 68 N·m · ADD A SHOT WITH WRENCH AT 70+
            </p>
          </div>
        </div>
      </div>

      {/* CV log */}
      <motion.div
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true }}
        variants={fadeUpStagger(0.06)}
        className="flex flex-col gap-2 rounded-[8px] border border-[var(--color-line)] bg-[var(--color-bg-elevated)] p-3"
      >
        <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.12em] text-[var(--color-text-3)]">
          <span>ON-DEVICE INFERENCE</span>
          <span className="text-[var(--color-accent)]">218 ms</span>
        </div>
        {[
          { label: "Detect splice closure", verdict: "ok",     score: "0.97" },
          { label: "Read torque label",     verdict: "ok",     score: "OCR · 68" },
          { label: "Compare ≥ 70 N·m",      verdict: "warn",   score: "−2 N·m" },
          { label: "Match GPS to site",     verdict: "ok",     score: "12.4 m" },
          { label: "Write to local queue",  verdict: "ok",     score: "queued" },
        ].map((r) => {
          const tone =
            r.verdict === "ok"   ? "var(--color-accent)" :
            r.verdict === "warn" ? "var(--color-warn)" :
            "var(--color-danger)";
          return (
            <motion.div
              key={r.label}
              variants={fadeUp}
              className="flex items-center justify-between font-mono text-[11px] text-[var(--color-text-2)]"
            >
              <span className="flex items-center gap-2">
                <span
                  className="inline-block h-[6px] w-[6px] rounded-full"
                  style={{ background: tone }}
                />
                {r.label}
              </span>
              <span style={{ color: tone }}>{r.score}</span>
            </motion.div>
          );
        })}
        <p className="mt-1 font-mono text-[10px] text-[var(--color-text-3)]">
          fall back to cloud verify on reconnect · model v3.4
        </p>
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Re-export grid background helper if a page needs to compose
   its own SVG backdrop in the same visual language.
   ───────────────────────────────────────────────────────────── */
export { GridBg as PlatformGridBg };
