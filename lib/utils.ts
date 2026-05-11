import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Tailwind-aware className merger. */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/** Format numbers for the metric counter (12,841 / 99.97 / 2.34). */
export function formatMetric(n: number): string {
  if (n >= 1000 && Number.isInteger(Math.round(n))) {
    return Math.round(n).toLocaleString("en-US");
  }
  if (n >= 100) return Math.round(n).toLocaleString("en-US");
  return n.toFixed(2).replace(/\.?0+$/, "");
}

/** Linear interpolation. */
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
