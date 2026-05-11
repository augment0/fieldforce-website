import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  align?: "start" | "center";
  className?: string;
  withTrail?: boolean;
};

export function Eyebrow({ children, align = "start", className, withTrail = false }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-[10px] font-mono text-[12px] font-medium uppercase tracking-[0.12em] text-[var(--color-text-3)]",
        align === "center" && "justify-center",
        className,
      )}
    >
      <span
        aria-hidden
        className="inline-block h-px w-7 rounded-[2px] bg-[linear-gradient(90deg,var(--color-accent),transparent)]"
      />
      <span className="rounded-full border border-[var(--color-line)] bg-[var(--color-bg-raised)] px-[10px] py-[4px] text-[var(--color-text-2)]">
        {children}
      </span>
      {withTrail && (
        <span
          aria-hidden
          className="inline-block h-px w-7 rounded-[2px] bg-[linear-gradient(90deg,transparent,var(--color-line-strong))]"
        />
      )}
    </span>
  );
}
