import Link from "next/link";
import { footerCols } from "@/lib/routes";
import { Logo } from "@/components/layout/logo";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-[linear-gradient(180deg,var(--color-bg-base),var(--color-bg-inset))] py-20">
      <div className="shell">
        <div className="grid gap-16 border-b border-[var(--color-line-subtle)] pb-14 md:grid-cols-[1fr_2.4fr]">
          <div>
            <Link
              href="/"
              aria-label="Fieldforce home"
              className="inline-flex items-center text-[var(--color-text)] transition-opacity hover:opacity-90"
            >
              <Logo className="h-7 w-auto" arcClassName="opacity-50" />
            </Link>
            <p className="mt-[18px] max-w-[32ch] text-[14px] leading-[1.55] text-[var(--color-text-2)]">
              The AI-native operating system for physical infrastructure.
            </p>
            <Link
              href="/trust/status"
              className="mt-[22px] inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white/[0.02] px-3 py-[6px] font-mono text-[12px] tracking-[0.04em] text-[var(--color-text-3)] transition-colors hover:text-[var(--color-text)]"
            >
              <span className="relative inline-block h-[6px] w-[6px] rounded-full bg-[var(--color-accent)] shadow-[0_0_8px_var(--color-accent)]">
                <span className="absolute -inset-[3px] rounded-full border border-[var(--color-accent)] opacity-45 [animation:dot-pulse_2.4s_var(--ease-out-snappy)_infinite]" />
              </span>
              All systems operational
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {footerCols.map((col) => (
              <div key={col.label} className="flex flex-col gap-3">
                <span className="mb-1 font-mono text-[11px] tracking-[0.12em] text-[var(--color-text-3)]">
                  {col.label}
                </span>
                {col.items.map((it) => (
                  <Link
                    key={it.href}
                    href={it.href}
                    className="text-[14px] text-[var(--color-text-2)] transition-colors hover:text-[var(--color-text)]"
                  >
                    {it.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-7 flex flex-wrap items-center justify-between gap-6 text-[12.5px] text-[var(--color-text-3)]">
          <span>© 2026 Fieldforce, Inc. — Arlington, VA · Munich · Karachi</span>
          <span className="flex flex-wrap items-center gap-[18px]">
            <Link href="#privacy" className="transition-colors hover:text-[var(--color-text)]">Privacy</Link>
            <Link href="#terms"   className="transition-colors hover:text-[var(--color-text)]">Terms</Link>
            <Link href="#dpa"     className="transition-colors hover:text-[var(--color-text)]">DPA</Link>
            <span className="border-l border-[var(--color-line-subtle)] pl-[18px] font-mono text-[11px] tracking-[0.06em]">
              SOC 2 Type II · ISO 27001 · GDPR
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
}
