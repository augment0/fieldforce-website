import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { CtaBand } from "@/components/sections/cta-band";
import { SectionShell } from "@/components/ui/section-shell";
import { Eyebrow } from "@/components/ui/eyebrow";

export const metadata: Metadata = {
  title: "Docs",
  description: "Concept documentation, API reference, and integration recipes for Fieldforce.",
};

export default function DocsPage() {
  return (
    <>
      <PageHero
        eyebrow="DOCS"
        title={<>Built so an engineer can <span className="text-[var(--color-text-2)]">evaluate Fieldforce in an afternoon.</span></>}
        body="Concept docs, API reference, and integration recipes. No marketing fluff, no walls. If you're stuck, the engineering team is one email away."
        primaryCta={{ href: "https://docs.fieldforce.com",       label: "Open the docs" }}
        secondaryCta={{ href: "mailto:engineering@fieldforce.com", label: "Talk to engineering" }}
      />

      <FeatureGrid
        eyebrow="WHAT'S IN THE DOCS"
        title={<>Three modes. <span className="text-[var(--color-text-2)]">All public.</span></>}
        columns={3}
        items={[
          { title: "Concept docs",    body: "What is a Site? What is an Asset? How does Evidence work? Mirrors the marketing site, for engineers.", href: "https://docs.fieldforce.com/concepts" },
          { title: "API reference",   body: "Auto-generated from our OpenAPI spec. Versioned. Deprecation policy: 12-month notice on every change.", href: "https://docs.fieldforce.com/api" },
          { title: "Recipes",         body: "Integration walk-throughs: ServiceNow, OCPP, Oracle, MQTT, custom NMS. New ones every fortnight.", href: "https://docs.fieldforce.com/recipes" },
        ]}
      />

      <SectionShell tone="tight">
        <div className="shell">
          <Eyebrow>POPULAR RECIPES</Eyebrow>
          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {[
              "Push work-order data to ServiceNow",
              "Receive OCPP events from a charger network",
              "Reconcile Oracle EBS invoices against work orders",
              "Stream MQTT telemetry into Asset state",
              "Federate Okta SSO with row-level RBAC",
              "Mirror Fieldforce events to your data warehouse",
            ].map((title) => (
              <li
                key={title}
                className="rounded-[10px] border border-[var(--color-line)] bg-[var(--color-bg-raised)] p-5 transition-[border-color] hover:border-[var(--color-line-strong)]"
              >
                <Link href="https://docs.fieldforce.com/recipes" className="block">
                  <p className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-[var(--color-text-3)]">
                    RECIPE
                  </p>
                  <h3 className="mt-2 text-[16px] font-medium leading-[1.35]">{title}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </SectionShell>

      <CtaBand
        eyebrow="DOCS QUESTIONS"
        title={<>Stuck? <span className="grad-text">Email engineering directly.</span></>}
        body="No support tier required, no AI router. A real engineer reads it."
        primary={{ href: "mailto:engineering@fieldforce.com", label: "engineering@fieldforce.com" }}
        secondary={{ href: "/demo", label: "Book a demo" }}
      />
    </>
  );
}
