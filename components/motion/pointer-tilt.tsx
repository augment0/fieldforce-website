"use client";

/**
 * PointerTilt — gentle pointer-following parallax for a single child element.
 * Eased lerp, GPU-only. Used on the hero constellation.
 */

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";
import { lerp } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  /** Maximum X translation in px. */
  maxX?: number;
  /** Maximum Y translation in px. */
  maxY?: number;
  /** Container className — pointer events are tracked here. */
  className?: string;
  /** Inner element className — the moving target. */
  innerClassName?: string;
};

export function PointerTilt({
  children,
  maxX = 16,
  maxY = 12,
  className,
  innerClassName,
}: Props) {
  const wrap = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const w = wrap.current;
    const i = inner.current;
    if (!w || !i) return;

    let lx = 0, ly = 0, tx = 0, ty = 0;
    let raf: number | null = null;

    const tick = () => {
      raf = null;
      tx = lerp(tx, lx, 0.08);
      ty = lerp(ty, ly, 0.08);
      i.style.transform = `translate3d(${tx.toFixed(2)}px, ${ty.toFixed(2)}px, 0)`;
      if (Math.abs(tx - lx) > 0.05 || Math.abs(ty - ly) > 0.05) {
        raf = requestAnimationFrame(tick);
      }
    };

    const onMove = (e: PointerEvent) => {
      const rect = w.getBoundingClientRect();
      lx = ((e.clientX - rect.left - rect.width / 2) / rect.width) * 2 * maxX;
      ly = ((e.clientY - rect.top - rect.height / 2) / rect.height) * 2 * maxY;
      if (raf == null) raf = requestAnimationFrame(tick);
    };
    const onLeave = () => {
      lx = 0;
      ly = 0;
      if (raf == null) raf = requestAnimationFrame(tick);
    };

    w.addEventListener("pointermove", onMove);
    w.addEventListener("pointerleave", onLeave);
    return () => {
      w.removeEventListener("pointermove", onMove);
      w.removeEventListener("pointerleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [maxX, maxY, reduced]);

  return (
    <div ref={wrap} className={className}>
      <div ref={inner} className={innerClassName} style={{ willChange: "transform" }}>
        {children}
      </div>
    </div>
  );
}
