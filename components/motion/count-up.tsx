"use client";

/**
 * CountUp — animates a number from 0 to `to` once when in view.
 * Cubic ease-out, ~1.4s. Falls back to instant in reduced-motion.
 */

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { formatMetric } from "@/lib/utils";

type Props = {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
};

export function CountUp({ to, suffix = "", duration = 1400, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const reduced = useReducedMotion();
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduced) {
      setValue(to);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || fired.current) return;
        fired.current = true;
        const start = performance.now();
        const ease = (t: number) => 1 - (1 - t) ** 3;
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          setValue(to * ease(t));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration, reduced]);

  return (
    <span ref={ref} className={className} style={{ fontVariantNumeric: "tabular-nums" }}>
      {formatMetric(value)}
      {suffix}
    </span>
  );
}
