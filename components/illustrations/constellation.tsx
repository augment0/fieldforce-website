"use client";

/**
 * Network constellation — the signature hero graphic.
 *
 * Procedurally generated SVG: ~64 nodes loosely clustered into three
 * "lobes" (Telecom / EV / IoT), connected by ~110 edges, with three
 * brighter "agent" nodes pulsing outward.
 *
 * Generated once on the client (deterministic seed) and rendered as
 * inline SVG so the markup stays cacheable and the animation runs on
 * the GPU via CSS transforms.
 */

import { useMemo } from "react";
import { useReducedMotion } from "motion/react";

type Node = { x: number; y: number; lobe: 0 | 1 | 2; agent: boolean; r: number; opacity: number };
type Edge = [number, number];

// tiny deterministic PRNG (mulberry32) so the constellation is stable
function rng(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function generate() {
  const r = rng(99173);
  const lobes = [
    { cx: 230, cy: 220, r: 140, count: 22 },
    { cx: 400, cy: 230, r: 120, count: 20 },
    { cx: 320, cy: 410, r: 160, count: 24 },
  ] as const;

  const nodes: Node[] = [];
  lobes.forEach((l, li) => {
    for (let i = 0; i < l.count; i++) {
      const a = r() * Math.PI * 2;
      const radius = l.r * Math.sqrt(r()) * (0.6 + r() * 0.45);
      nodes.push({
        x: l.cx + Math.cos(a) * radius,
        y: l.cy + Math.sin(a) * radius,
        lobe: li as 0 | 1 | 2,
        agent: false,
        r: 1.2 + r() * 1.3,
        opacity: 0.45 + r() * 0.45,
      });
    }
  });

  // Promote three agent nodes — first node of each lobe.
  let acc = 0;
  for (const l of lobes) {
    if (nodes[acc]) {
      nodes[acc].agent = true;
      nodes[acc].r = 5;
      nodes[acc].opacity = 1;
    }
    acc += l.count;
  }

  const edges: Edge[] = [];
  nodes.forEach((n, i) => {
    const sorted = nodes
      .map((m, j) => ({ j, d: i === j ? Infinity : Math.hypot(m.x - n.x, m.y - n.y), same: m.lobe === n.lobe }))
      .sort((a, b) => a.d - b.d);
    let count = 0;
    for (const k of sorted) {
      if (k.same && count < 2) {
        edges.push([i, k.j]);
        count++;
      }
      if (count >= 2) break;
    }
    if (r() < 0.18) {
      const cross = sorted.find((k) => !k.same);
      if (cross) edges.push([i, cross.j]);
    }
  });

  // de-dup
  const seen = new Set<string>();
  const dedup: Edge[] = [];
  for (const [a, b] of edges) {
    const key = a < b ? `${a}-${b}` : `${b}-${a}`;
    if (!seen.has(key)) {
      seen.add(key);
      dedup.push([a, b]);
    }
  }

  return { nodes, edges: dedup };
}

export function Constellation({ className }: { className?: string }) {
  const reduced = useReducedMotion();
  const { nodes, edges } = useMemo(generate, []);

  return (
    <svg
      viewBox="0 0 600 600"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      aria-hidden
    >
      <defs>
        <radialGradient id="haloA" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#6FE4D9" stopOpacity=".35" />
          <stop offset="60%"  stopColor="#6FE4D9" stopOpacity=".05" />
          <stop offset="100%" stopColor="#6FE4D9" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="haloB" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#7C7BFF" stopOpacity=".25" />
          <stop offset="60%"  stopColor="#7C7BFF" stopOpacity=".04" />
          <stop offset="100%" stopColor="#7C7BFF" stopOpacity="0" />
        </radialGradient>
        <filter id="agentGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <circle cx="300" cy="300" r="280" fill="url(#haloA)" />
      <circle cx="380" cy="240" r="180" fill="url(#haloB)" />

      <g>
        {edges.map(([a, b], i) => {
          const A = nodes[a];
          const B = nodes[b];
          return (
            <line
              key={i}
              x1={A.x.toFixed(1)}
              y1={A.y.toFixed(1)}
              x2={B.x.toFixed(1)}
              y2={B.y.toFixed(1)}
              stroke="#6FE4D9"
              strokeWidth="0.5"
              opacity={(0.10 + ((i * 37) % 100) / 580).toFixed(3)}
            />
          );
        })}
      </g>

      <g>
        {nodes.map((n, i) => {
          const baseStyle: React.CSSProperties = reduced
            ? {}
            : {
                transformOrigin: `${n.x}px ${n.y}px`,
                animation: `node-pulse ${2.5 + (i % 5) * 0.5}s ease-in-out ${(i * 0.07) % 4}s infinite`,
              };
          return (
            <g key={i}>
              {n.agent && (
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={5}
                  fill="none"
                  stroke="#6FE4D9"
                  strokeWidth="1"
                  opacity="0.45"
                  style={
                    reduced
                      ? undefined
                      : {
                          transformOrigin: `${n.x}px ${n.y}px`,
                          animation: `agent-pulse 3.2s var(--ease-out-snappy) ${(i * 0.4) % 3}s infinite`,
                        }
                  }
                />
              )}
              <circle
                cx={n.x.toFixed(1)}
                cy={n.y.toFixed(1)}
                r={n.r.toFixed(2)}
                fill="#6FE4D9"
                opacity={n.opacity.toFixed(2)}
                filter={n.agent ? "url(#agentGlow)" : undefined}
                style={baseStyle}
              />
            </g>
          );
        })}
      </g>
    </svg>
  );
}
