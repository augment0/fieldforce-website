import { cn } from "@/lib/utils";

type Tone = "default" | "tight" | "atmospheric" | "hero";

const padding: Record<Tone, string> = {
  default:     "py-[clamp(96px,12vw,160px)]",
  tight:       "py-[clamp(72px,9vw,120px)]",
  atmospheric: "py-[clamp(96px,12vw,160px)]",
  hero:        "pb-[clamp(48px,6vw,80px)] pt-[clamp(40px,6vw,72px)]",
};

/**
 * SectionShell — semantic <section> with the standard vertical rhythm.
 * Optionally renders an atmospheric backdrop (radial glow + grid).
 */
export function SectionShell({
  tone = "default",
  id,
  className,
  children,
  atmosphere,
}: {
  tone?: Tone;
  id?: string;
  className?: string;
  children: React.ReactNode;
  /** Atmospheric backdrop — `accent`, `indigo`, or `dual`. Renders behind content. */
  atmosphere?: "accent" | "indigo" | "dual";
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative",
        padding[tone],
        atmosphere && "isolate overflow-hidden",
        className,
      )}
    >
      {atmosphere && (
        <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
          {(atmosphere === "accent" || atmosphere === "dual") && (
            <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,var(--color-accent-glow),transparent_65%)] opacity-50 blur-[80px]" />
          )}
          {(atmosphere === "indigo" || atmosphere === "dual") && (
            <div className="absolute -bottom-32 right-0 h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,var(--color-indigo-glow),transparent_65%)] opacity-45 blur-[80px]" />
          )}
        </div>
      )}
      {children}
    </section>
  );
}
