import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageHero } from "@/components/sections/page-hero";
import { StatBar } from "@/components/sections/stat-bar";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { Testimonial } from "@/components/sections/testimonial";
import { FAQ } from "@/components/sections/faq";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Replace legacy & tool sprawl | Solutions",
  description:
    "Retire Sitetracker, IFS, ServiceMax, and the spreadsheet stack. Consolidate 6+ tools onto one platform with one data model — without an 18-month migration.",
};

export default function ReplaceLegacyPage() {
  return (
    <>
      <Breadcrumb items={[{ href: "/solutions", label: "Solutions" }]} current="Replace legacy & tool sprawl" />

      <PageHero
        eyebrow="SOLUTIONS / REPLACE LEGACY & TOOL SPRAWL"
        title={
          <>
            Retire <span className="grad-text">six tools.</span>
            <br />
            <span className="text-[var(--color-text-2)]">Run on one platform.</span>
          </>
        }
        body="Sitetracker is a Salesforce app limited by Salesforce's data model and pricing. IFS is an ERP module — heavy implementation, slow to deploy. ServiceMax is a field-service add-on. None were built for infrastructure operators. Fieldforce was — and it consolidates the stack."
        primaryCta={{ href: "/demo", label: "Book a demo" }}
        secondaryCta={{ href: "/customers", label: "See migrations" }}
      />

      <StatBar
        items={[
          { value: "6 → 1",  label: "tools retired (avg.)" },
          { value: "4–8 wks", label: "migration time" },
          { value: "0",       label: "production outages" },
          { value: "24h",     label: "first site live" },
        ]}
      />

      <FeatureGrid
        eyebrow="WHAT GETS RETIRED"
        title={<>The systems Fieldforce <span className="text-[var(--color-text-2)]">replaces.</span></>}
        columns={3}
        items={[
          { title: "Sitetracker / IFS / ServiceMax", body: "Deployment + field-service tooling, replaced by Sites, Work, Assets, and Evidence on one model." },
          { title: "Spreadsheets",                    body: "The 11-spreadsheet stack disappears. One source of truth across plans, leases, work orders." },
          { title: "Custom internal tools",           body: "The Frankenstein of forms + scripts + emails — replaced by the digital workflow builder." },
          { title: "Paper checklists",                 body: "Mobile-first field app, offline-capable, photo-evidenced. Crews actually prefer it." },
          { title: "Lease tracking spreadsheets",      body: "Lease as a first-class workflow. Auto-escalation, renewal, ERP sync." },
          { title: "Standalone BI dashboards",         body: "Analytics native to the data model. Copilot answers questions across the whole stack in NL." },
        ]}
      />

      <Testimonial
        quote={
          <>
            <strong className="font-semibold">Four systems retired</strong>. One contract. One data model. The savings on license costs alone justified the move — but the real win was finally having one number we could all trust.
          </>
        }
        name="Haynes Griffin"
        role="CEO · SmartSky Networks"
        initials="HG"
      />

      <FAQ
        eyebrow="MIGRATION QUESTIONS"
        title="What every IT leader asks on day one."
        items={[
          { q: "How long is a typical migration?",                    a: <>4–8 weeks for a 1,000-site footprint. We've gone live in production at 12,000+ sites with zero downtime.</> },
          { q: "Can we run in parallel with the legacy tool?",         a: <>Yes — most customers run parallel for 30–60 days. We bidirectionally sync so neither system becomes stale during the cut-over.</> },
          { q: "What about the historical data?",                      a: <>We import historical work orders, leases, and asset records. Full audit trail preserved.</> },
          { q: "Does Fieldforce replace our CRM / ERP?",                a: <>No — your CRM stays the customer source of truth; your ERP stays the financial source of truth. Fieldforce becomes the operational source of truth, with sync to both.</> },
        ]}
      />

      <CtaBand
        eyebrow="RETIRE THE STACK"
        title={<>One platform <span className="grad-text">your operators will actually use.</span></>}
        primary={{ href: "/demo", label: "Book a demo" }}
        secondary={{ href: "/customers", label: "See migrations" }}
      />
    </>
  );
}
