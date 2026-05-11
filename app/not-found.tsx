import type { Metadata } from "next";
import Link from "next/link";
import { Button, ArrowIcon } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";

export const metadata: Metadata = {
  title: "Not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden py-[clamp(120px,18vw,200px)] text-center">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,var(--color-accent-glow),transparent_65%)] opacity-50 blur-[80px]" />
      </div>
      <div className="shell shell-narrow">
        <Eyebrow align="center" withTrail>
          404
        </Eyebrow>
        <h1 className="display-lg mt-5">
          That page <span className="text-[var(--color-text-2)]">isn't on this network.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-[48ch] text-[16px] leading-[1.6] text-[var(--color-text-2)]">
          The URL you tried isn't here — it may have been renamed, moved, or never existed. Try one of these instead.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/" trailingIcon={<ArrowIcon />}>
            Back to home
          </Button>
          <Button href="/platform" variant="ghost" trailingIcon={<ArrowIcon />}>
            See the platform
          </Button>
        </div>
        <ul className="mt-12 flex flex-wrap items-center justify-center gap-3 font-mono text-[12px] tracking-[0.04em] text-[var(--color-text-3)]">
          {[
            { href: "/customers", label: "Customers" },
            { href: "/pricing",   label: "Pricing" },
            { href: "/changelog", label: "Changelog" },
            { href: "/docs",      label: "Docs" },
            { href: "/contact",   label: "Contact" },
          ].map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="rounded-full border border-[var(--color-line)] bg-[var(--color-bg-raised)] px-3 py-[5px] uppercase transition-colors hover:text-[var(--color-text)]">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
