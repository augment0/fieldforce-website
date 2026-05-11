import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Timeline } from "@/components/sections/timeline";
import { CtaBand } from "@/components/sections/cta-band";
import { SectionShell } from "@/components/ui/section-shell";

export const metadata: Metadata = {
  title: "Changelog",
  description: "What we shipped — every two weeks. Public release log.",
};

export default function ChangelogPage() {
  return (
    <>
      <PageHero
        eyebrow="CHANGELOG"
        title={<>What we shipped. <span className="text-[var(--color-text-2)]">Every two weeks.</span></>}
        body="Public release log. Subscribe via RSS, or read here."
        primaryCta={{ href: "/feed.xml", label: "Subscribe (RSS)" }}
        secondaryCta={{ href: "/demo", label: "Book a demo" }}
      />

      <SectionShell tone="tight">
        <div className="shell shell-narrow">
          <Timeline
            entries={[
              {
                date: "2026-05-06",
                version: "v3.18",
                title: "Reconcile: nine new vendor formats",
                body: <>Added native parsers for Comarch billing, Telefonica MENA invoices, and seven regional providers. Variance flagging now routes to the right approver in your org chart.</>,
                tags: ["Reconcile", "Integrations"],
              },
              {
                date: "2026-04-22",
                version: "v3.17",
                title: "Forecast: fiber-aware risk models",
                body: <>The risk model now distinguishes splice failures from MUX failures, halving false positives on dense fiber routes.</>,
                tags: ["Forecast", "Telecom"],
              },
              {
                date: "2026-04-08",
                version: "v3.16",
                title: "Copilot: write-actions GA",
                body: <>Copilot can now act, not just answer. Every write goes through your approval rules; everything is logged.</>,
                tags: ["Copilot", "Agents"],
              },
              {
                date: "2026-03-25",
                version: "v3.15",
                title: "Evidence: closure-detection model 2.0",
                body: <>First-pass QA accuracy from 91% → 94% on splice closure detection. Trained on 2.4M labelled photos from the customer base.</>,
                tags: ["Evidence", "AI"],
              },
              {
                date: "2026-03-11",
                version: "v3.14",
                title: "Region-pinned residency for MENA",
                body: <>Saudi Arabia and UAE region now live. Customers in those regions stay in-region for all data.</>,
                tags: ["Security", "Platform"],
              },
            ]}
          />
        </div>
      </SectionShell>

      <CtaBand
        eyebrow="STAY IN THE LOOP"
        title={<>Fortnightly releases. <span className="grad-text">Always shipped.</span></>}
        primary={{ href: "/feed.xml",         label: "Subscribe (RSS)" }}
        secondary={{ href: "/demo",           label: "Book a demo" }}
      />
    </>
  );
}
