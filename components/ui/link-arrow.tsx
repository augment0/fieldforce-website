import Link from "next/link";
import { ArrowIcon } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * LinkArrow — inline link with an arrow that animates on hover.
 * Used everywhere we want a "→" affordance.
 */
export function LinkArrow({
  href,
  children,
  tone = "accent",
  className,
}: {
  href: string;
  children: React.ReactNode;
  tone?: "accent" | "muted";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-[6px] text-[14px] font-medium transition-[gap]",
        tone === "accent" && "text-[var(--color-accent)]",
        tone === "muted" && "text-[var(--color-text-2)] hover:text-[var(--color-text)]",
        "hover:gap-[10px]",
        className,
      )}
    >
      {children}
      <ArrowIcon className="transition-transform group-hover:translate-x-[3px]" />
    </Link>
  );
}
