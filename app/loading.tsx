import { Skeleton } from "@/components/ui/empty-state";

/**
 * Top-level loading UI. Matches the page-hero shape so layout shift is minimal
 * during navigation. Real pages render server-side and replace this near-instantly.
 */
export default function Loading() {
  return (
    <section className="py-16">
      <div className="shell">
        <Skeleton className="mb-4 h-5 w-32" />
        <Skeleton className="mb-3 h-12 w-full max-w-[640px]" />
        <Skeleton className="mb-8 h-12 w-3/4 max-w-[520px]" />
        <Skeleton className="mb-3 h-4 w-full max-w-[560px]" />
        <Skeleton className="mb-3 h-4 w-full max-w-[420px]" />
        <Skeleton className="mb-12 h-4 w-2/3 max-w-[400px]" />
        <div className="flex gap-3">
          <Skeleton className="h-11 w-32" />
          <Skeleton className="h-11 w-44" />
        </div>
      </div>
    </section>
  );
}
