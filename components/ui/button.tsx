"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost";
type Size = "sm" | "md" | "lg";

type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  size?: Size;
  trailingIcon?: React.ReactNode;
  asButton?: false;
};
type RealButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  trailingIcon?: React.ReactNode;
  asButton: true;
};

const base =
  "inline-flex items-center justify-center gap-2 font-medium rounded-[10px] transition-[background,color,border-color,transform,box-shadow] duration-[180ms] ease-[var(--ease-out-snappy)] whitespace-nowrap select-none active:translate-y-0";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--color-accent)] text-[#06262A] border border-transparent shadow-[0_0_0_1px_var(--color-accent),0_0_24px_var(--color-accent-glow),inset_0_1px_0_rgba(255,255,255,0.18)] hover:-translate-y-[1px] hover:bg-[var(--color-accent-soft)] hover:shadow-[0_0_0_1px_var(--color-accent-soft),0_0_36px_var(--color-accent-glow)] active:bg-[var(--color-accent-deep)]",
  ghost:
    "bg-white/[0.02] border border-[var(--color-line-strong)] text-[var(--color-text)] backdrop-blur-md hover:bg-white/[0.05] hover:border-[var(--color-text-3)]",
};

const sizes: Record<Size, string> = {
  sm: "px-[14px] py-[8px] text-[13.5px]",
  md: "px-[18px] py-[11px] text-[14.5px]",
  lg: "px-[24px] py-[14px] text-[16px]",
};

export const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonProps | RealButtonProps>(
  function Button(props, ref) {
    const { variant = "primary", size = "md", className, children, trailingIcon, ...rest } = props;
    const cls = cn(base, variants[variant], sizes[size], className);
    if ("asButton" in props && props.asButton) {
      const { asButton: _ignored, ...btnRest } = rest as RealButtonProps;
      return (
        <button
          ref={ref as React.Ref<HTMLButtonElement>}
          className={cls}
          {...(btnRest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
        >
          {children}
          {trailingIcon}
        </button>
      );
    }
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={cls}
        {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
        {trailingIcon}
      </a>
    );
  },
);

export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={cn("h-[14px] w-[14px]", className)} aria-hidden>
      <path
        d="M2 8h11M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
