import { cn } from "@/lib/utils";

type Variant = "default" | "accent" | "warn";

const styles: Record<Variant, string> = {
  default:
    "bg-[var(--color-bg-elevated)] border border-[var(--color-line)] text-[var(--color-text-2)]",
  accent:
    "bg-[var(--color-accent-glow)] border border-[rgba(111,228,217,0.25)] text-[var(--color-accent)]",
  warn:
    "bg-[rgba(245,176,66,0.1)] border border-[rgba(245,176,66,0.3)] text-[var(--color-warn)]",
};

export function Badge({
  variant = "default",
  className,
  children,
}: {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-[6px] rounded-full px-[10px] py-[3px] font-mono text-[10.5px] uppercase tracking-[0.12em]",
        styles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
