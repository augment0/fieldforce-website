import { cn } from "@/lib/utils";

type Tone = "default" | "accent" | "raised";

const tones: Record<Tone, string> = {
  default:
    "border-[var(--color-line)] bg-[var(--color-bg-raised)] hover:border-[var(--color-line-strong)]",
  accent:
    "border-[rgba(111,228,217,0.25)] bg-[linear-gradient(180deg,rgba(111,228,217,0.06),var(--color-bg-raised))]",
  raised:
    "border-[var(--color-line)] bg-[linear-gradient(180deg,var(--color-bg-elevated),var(--color-bg-raised))] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]",
};

/**
 * Card — generic surface card with consistent radius/border/hover.
 * Optional gradient ring via `withRing` (mask-composite trick).
 */
export function Card({
  tone = "default",
  withRing = false,
  hoverable = true,
  className,
  children,
  ...rest
}: {
  tone?: Tone;
  withRing?: boolean;
  hoverable?: boolean;
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative rounded-[14px] border transition-[border-color,transform] duration-200",
        tones[tone],
        hoverable && "hover:-translate-y-[2px]",
        className,
      )}
      {...rest}
    >
      {withRing && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[14px] p-px"
          style={{
            background: "linear-gradient(135deg, var(--color-accent-glow), transparent 60%)",
            WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />
      )}
      {children}
    </div>
  );
}
