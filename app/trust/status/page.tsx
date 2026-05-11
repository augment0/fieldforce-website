import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageHero } from "@/components/sections/page-hero";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionShell } from "@/components/ui/section-shell";

export const metadata: Metadata = {
  title: "Status",
  description: "Live system status for Fieldforce. Embed of statuspage.io.",
};

export default function StatusPage() {
  return (
    <>
      <Breadcrumb items={[{ href: "/trust", label: "Trust" }]} current="Status" />

      <PageHero
        eyebrow="STATUS"
        title={<>All systems <span className="text-[var(--color-text-2)]">operational.</span></>}
        body="Live operational status across regions and components, updated in real time."
        primaryCta={{ href: "https://status.fieldforce.com",        label: "View full history" }}
        secondaryCta={{ href: "https://status.fieldforce.com/feed.rss", label: "Subscribe (RSS)" }}
      />

      <SectionShell tone="tight">
        <div className="shell">
          <Eyebrow>BY COMPONENT</Eyebrow>
          <ul className="mt-8 divide-y divide-[var(--color-line-subtle)] overflow-hidden rounded-[14px] border border-[var(--color-line)] bg-[var(--color-bg-raised)]">
            {[
              { name: "Web app",          status: "operational" },
              { name: "Mobile API",       status: "operational" },
              { name: "Agents (Dispatch / Forecast / Evidence / Reconcile / Permit / Copilot)", status: "operational" },
              { name: "Integrations",     status: "operational" },
              { name: "EU region",        status: "operational" },
              { name: "MENA region",      status: "operational" },
              { name: "US region",        status: "operational" },
              { name: "APAC region",      status: "operational" },
            ].map((c) => (
              <li key={c.name} className="flex items-center justify-between gap-6 px-6 py-4">
                <span className="text-[15px] text-[var(--color-text)]">{c.name}</span>
                <span className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.04em] text-[var(--color-accent)]">
                  <span className="relative inline-block h-[6px] w-[6px] rounded-full bg-[var(--color-accent)] shadow-[0_0_8px_var(--color-accent)]">
                    <span className="absolute -inset-[3px] rounded-full border border-[var(--color-accent)] opacity-45 [animation:dot-pulse_2.4s_var(--ease-out-snappy)_infinite]" />
                  </span>
                  Operational
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-[13.5px] text-[var(--color-text-3)]">
            This page mirrors the status feed at status.fieldforce.com (Statuspage).
            For incident history and uptime metrics, visit the full status page.
          </p>
        </div>
      </SectionShell>
    </>
  );
}
