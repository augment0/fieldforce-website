"use client";

import { useEffect } from "react";
import { Button, ArrowIcon } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // TODO: pipe to Sentry / observability
    console.error(error);
  }, [error]);

  return (
    <section className="relative isolate overflow-hidden py-[clamp(120px,18vw,200px)] text-center">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,var(--color-indigo-glow),transparent_65%)] opacity-50 blur-[80px]" />
      </div>
      <div className="shell shell-narrow">
        <Eyebrow align="center" withTrail>
          SOMETHING BROKE
        </Eyebrow>
        <h1 className="display-lg mt-5">
          A glitch in the network.
        </h1>
        <p className="mx-auto mt-6 max-w-[48ch] text-[16px] leading-[1.6] text-[var(--color-text-2)]">
          We've logged it. Try again, or get in touch if it keeps happening.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-[10px] bg-[var(--color-accent)] px-5 py-3 text-[14.5px] font-medium text-[#06262A] shadow-[0_0_24px_var(--color-accent-glow)] transition-transform hover:-translate-y-[1px]"
          >
            Try again
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden>
              <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <Button href="/contact" variant="ghost" trailingIcon={<ArrowIcon />}>
            Contact us
          </Button>
        </div>
        {error.digest && (
          <p className="mt-10 font-mono text-[11px] tracking-[0.04em] text-[var(--color-text-3)]">
            Error reference: {error.digest}
          </p>
        )}
      </div>
    </section>
  );
}
