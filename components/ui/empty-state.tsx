import { Button, ArrowIcon } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function EmptyState({
  icon,
  title,
  body,
  primary,
  secondary,
  className,
}: {
  icon?: React.ReactNode;
  title: string;
  body?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto flex max-w-[420px] flex-col items-center gap-3 rounded-[14px] border border-dashed border-[var(--color-line)] bg-[var(--color-bg-raised)] px-8 py-14 text-center",
        className,
      )}
    >
      {icon ? (
        <div className="grid h-10 w-10 place-items-center rounded-md border border-[var(--color-line)] bg-[var(--color-bg-elevated)] text-[var(--color-accent)]">
          {icon}
        </div>
      ) : null}
      <h3 className="text-[20px] font-semibold tracking-[-0.01em]">{title}</h3>
      {body ? (
        <p className="text-[14.5px] leading-[1.55] text-[var(--color-text-2)]">{body}</p>
      ) : null}
      {(primary || secondary) && (
        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          {primary && (
            <Button href={primary.href} size="sm" trailingIcon={<ArrowIcon />}>
              {primary.label}
            </Button>
          )}
          {secondary && (
            <a
              href={secondary.href}
              className="inline-flex items-center gap-1 text-[14px] text-[var(--color-accent)] hover:gap-[6px]"
            >
              {secondary.label} <ArrowIcon />
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-[var(--color-bg-elevated)]",
        className,
      )}
      aria-hidden
    />
  );
}
