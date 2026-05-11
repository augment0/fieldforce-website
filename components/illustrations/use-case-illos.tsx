/**
 * Three abstract SVG illustrations — one per use-case (Telecom / EV / IoT).
 * Lightweight, on-brand, animated via CSS keyframes from globals.css.
 */

export function TelecomIllo() {
  return (
    <svg viewBox="0 0 240 200" className="h-auto w-[70%]" aria-hidden>
      <defs>
        <linearGradient id="ucTelecom" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#6FE4D9" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#6FE4D9" stopOpacity="0" />
        </linearGradient>
      </defs>
      <line x1="120" y1="20" x2="120" y2="170" stroke="#6FE4D9" strokeWidth="1.5" />
      <path d="M120 20 L100 60 L120 80 L140 60 Z" stroke="#6FE4D9" strokeWidth="1" fill="url(#ucTelecom)" />
      <line x1="100" y1="100" x2="140" y2="100" stroke="#6FE4D9" strokeWidth="0.8" />
      <line x1="105" y1="125" x2="135" y2="125" stroke="#6FE4D9" strokeWidth="0.8" />
      <line x1="110" y1="150" x2="130" y2="150" stroke="#6FE4D9" strokeWidth="0.8" />
      {/* signal arcs */}
      <path
        d="M70 50 Q120 0 170 50"
        fill="none"
        stroke="#6FE4D9"
        strokeWidth="1"
        opacity="0.3"
        style={{ strokeDasharray: 200, strokeDashoffset: 200, animation: "signal-arc 3s var(--ease-out-snappy) infinite" }}
      />
      <path
        d="M50 65 Q120 -25 190 65"
        fill="none"
        stroke="#6FE4D9"
        strokeWidth="1"
        opacity="0.2"
        style={{ strokeDasharray: 200, strokeDashoffset: 200, animation: "signal-arc 3s var(--ease-out-snappy) 0.35s infinite" }}
      />
      <path
        d="M30 80 Q120 -50 210 80"
        fill="none"
        stroke="#6FE4D9"
        strokeWidth="1"
        opacity="0.15"
        style={{ strokeDasharray: 200, strokeDashoffset: 200, animation: "signal-arc 3s var(--ease-out-snappy) 0.7s infinite" }}
      />
      <line x1="80" y1="170" x2="160" y2="170" stroke="#2A2E38" strokeWidth="1" />
    </svg>
  );
}

export function EvIllo() {
  return (
    <svg viewBox="0 0 240 200" className="h-auto w-[70%]" aria-hidden>
      <rect x="100" y="40" width="40" height="120" rx="4" fill="#11131A" stroke="#6FE4D9" strokeWidth="1.2" />
      <rect x="108" y="50" width="24" height="36" rx="2" fill="#181A22" stroke="#6FE4D9" strokeWidth="0.8" />
      <path d="M115 65 L120 72 L116 74 L120 80" stroke="#6FE4D9" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <circle
        cx="120" cy="100" r="2"
        fill="#6FE4D9"
        style={{ animation: "led-blink 1.6s ease-in-out infinite" }}
      />
      <circle cx="120" cy="120" r="2" fill="#6FE4D9" opacity="0.4" />
      <line x1="60" y1="160" x2="180" y2="160" stroke="#2A2E38" strokeWidth="1" />
      <path d="M140 130 Q170 140 190 170" stroke="#6FE4D9" strokeWidth="1.2" fill="none" />
      <rect x="185" y="166" width="14" height="10" rx="2" fill="#11131A" stroke="#6FE4D9" strokeWidth="1" />
      <g opacity="0.3" stroke="#6FE4D9" strokeWidth="0.5">
        <line x1="40" y1="40" x2="100" y2="80" />
        <line x1="40" y1="40" x2="40" y2="160" />
        <line x1="200" y1="20" x2="140" y2="60" />
      </g>
      <circle cx="40"  cy="40" r="3" fill="#6FE4D9" />
      <circle cx="200" cy="20" r="3" fill="#6FE4D9" />
    </svg>
  );
}

export function IotIllo() {
  return (
    <svg viewBox="0 0 240 200" className="h-auto w-[70%]" aria-hidden>
      <line x1="60"  y1="60"  x2="120" y2="100" stroke="#6FE4D9" strokeWidth="0.6" opacity="0.5" />
      <line x1="180" y1="60"  x2="120" y2="100" stroke="#6FE4D9" strokeWidth="0.6" opacity="0.5" />
      <line x1="60"  y1="140" x2="120" y2="100" stroke="#6FE4D9" strokeWidth="0.6" opacity="0.5" />
      <line x1="180" y1="140" x2="120" y2="100" stroke="#6FE4D9" strokeWidth="0.6" opacity="0.5" />
      <line x1="60"  y1="60"  x2="60"  y2="140" stroke="#6FE4D9" strokeWidth="0.4" opacity="0.25" />
      <line x1="180" y1="60"  x2="180" y2="140" stroke="#6FE4D9" strokeWidth="0.4" opacity="0.25" />
      <line x1="60"  y1="60"  x2="180" y2="60"  stroke="#6FE4D9" strokeWidth="0.4" opacity="0.25" />
      <line x1="60"  y1="140" x2="180" y2="140" stroke="#6FE4D9" strokeWidth="0.4" opacity="0.25" />
      {[
        { cx: 60,  cy: 60,  delay: "0s" },
        { cx: 180, cy: 60,  delay: "0.3s" },
        { cx: 60,  cy: 140, delay: "0.6s" },
        { cx: 180, cy: 140, delay: "0.9s" },
      ].map((d, i) => (
        <circle
          key={i}
          cx={d.cx}
          cy={d.cy}
          r="4"
          fill="#6FE4D9"
          style={{
            transformOrigin: `${d.cx}px ${d.cy}px`,
            animation: `iot-pulse 3s var(--ease-out-snappy) ${d.delay} infinite`,
          }}
        />
      ))}
      <circle cx="120" cy="100" r="7" fill="#6FE4D9" />
      <circle
        cx="120" cy="100" r="14"
        fill="none" stroke="#6FE4D9" strokeWidth="1" opacity="0.4"
        style={{ transformOrigin: "120px 100px", animation: "dot-pulse 2.4s var(--ease-out-snappy) infinite" }}
      />
    </svg>
  );
}
