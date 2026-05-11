import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageHero } from "@/components/sections/page-hero";
import { StatBar } from "@/components/sections/stat-bar";
import { FeatureSplit } from "@/components/sections/feature-split";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { Testimonial } from "@/components/sections/testimonial";
import { FAQ } from "@/components/sections/faq";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Plan & Design | Platform lifecycle",
  description:
    "Align sites, leases, permits, and capital for handoff. Stop the slip between real-estate, permitting, and capital planning before the first crew rolls.",
};

export default function PlanStagePage() {
  return (
    <>
      <Breadcrumb items={[{ href: "/platform", label: "Platform" }]} current="Plan & Design" />

      <PageHero
        eyebrow="LIFECYCLE / PLAN & DESIGN"
        title={
          <>
            Align sites, leases, permits, and capital.
            <br />
            <span className="text-[var(--color-text-2)]">Before the first crew rolls.</span>
          </>
        }
        body="The cheapest day to fix a deployment problem is the day before construction starts. Fieldforce's Plan stage gives real-estate, permitting, and capital-planning teams one canvas — so handoff to construction is clean, not a reset."
        primaryCta={{ href: "/demo", label: "Book a demo" }}
        secondaryCta={{ href: "/platform/build", label: "Next: Build & Deploy" }}
        visual={<PlanCanvas />}
      />

      <StatBar
        items={[
          { value: "1 record", label: "site, lease, permit, capital" },
          { value: "Days",      label: "to plan handoff (vs weeks)" },
          { value: "12,000+",   label: "sites planned on platform" },
          { value: "23",        label: "countries / jurisdictions" },
        ]}
      />

      <FeatureSplit
        eyebrow="SITE ACQUISITION & REAL ESTATE"
        title={<>The site record <span className="text-[var(--color-text-2)]">starts here.</span></>}
        body={
          <p>
            Site search, candidate evaluation, landlord negotiation, lease
            execution — captured as a single record that survives the entire
            asset lifecycle. The same record the operator queries in year 12 is
            the one the acquisition manager opened in year 1.
          </p>
        }
        bullets={[
          "Site candidate workflow with go/no-go decisions evidenced",
          "Lease structure built once, applied across the portfolio",
          "GIS / spatial context via ArcGIS, 3-GIS, Bentley",
          "Permit-aware: jurisdiction rules baked into the site record",
        ]}
        cta={{ href: "/platform/sites", label: "How Sites work" }}
        visual={<SiteIntakeMock />}
      />

      <FeatureSplit
        reverse
        eyebrow="PERMITTING & APPROVALS"
        title={<>Permit by jurisdiction. <span className="text-[var(--color-text-2)]">Escalation built in.</span></>}
        body={
          <p>
            Permits are tracked per site, per jurisdiction, per agency — with
            SLA timers and escalation rules. The Permit agent surfaces slips
            before they accrue idle time downstream.
          </p>
        }
        bullets={[
          "Per-jurisdiction permit catalog with SLA timers",
          "Automatic escalation rules with audit trail",
          "Permit agent flags slips against the build schedule",
          "Document storage with version control",
        ]}
        cta={{ href: "/agents/permit", label: "Meet the Permit agent" }}
        visual={<PermitTimeline />}
      />

      <FeatureSplit
        eyebrow="CAPITAL PLANNING"
        title={<>The dollar lives <span className="text-[var(--color-text-2)]">on the same record as the work.</span></>}
        body={
          <p>
            Capex line, vendor commitments, budget envelope, forecast spend —
            all attached to the same site record the build team will execute
            against. The CFO and the construction lead read the same data.
          </p>
        }
        bullets={[
          "Capex line items with vendor commitments",
          "Budget envelope and forecast spend per site",
          "ERP-native: Oracle / SAP / NetSuite write-back",
          "Capital pipeline visibility from approval to in-service",
        ]}
        cta={{ href: "/platform/analytics", label: "Financial analytics" }}
        visual={<CapexMock />}
      />

      <FeatureGrid
        eyebrow="WHAT YOU GET IN THE PLAN STAGE"
        title={<>Built for handoff. <span className="text-[var(--color-text-2)]">Not for a slide deck.</span></>}
        columns={3}
        items={[
          { title: "Single site record",   body: "Lease, permit, capital, GIS — one canonical object that follows the site for life." },
          { title: "Permit-aware planning", body: "Jurisdiction rules embedded; permits track per agency with SLA timers." },
          { title: "Capital pipeline",      body: "Capex line items, vendor commitments, ERP write-back from approval to in-service." },
          { title: "Clean handoff",         body: "Plan-to-Build hand-off is one click. No re-keying, no slide decks." },
          { title: "Multi-stakeholder",     body: "Real estate, permitting, capital, legal — role-aware views on the same record." },
          { title: "AI-assisted",           body: "Permit agent escalates slips; Forecast agent flags risk against the build schedule." },
        ]}
      />

      <Testimonial
        quote={
          <>
            From new site development to accounting, we see the value in the insights and efficiencies the platform brings to our growing business.{" "}
            <strong className="font-semibold">Handoffs are clean now.</strong>
          </>
        }
        name="Chief Operating Officer"
        role="Infrastructure operator"
        initials="CO"
      />

      <FAQ
        eyebrow="PLAN-STAGE QUESTIONS"
        title="What real-estate, permitting, and capital leads ask."
        items={[
          { q: "Can we model complex multi-anchor leases?",       a: <>Yes. Configurable lease builder with escalators, indexation, CAM, free rent, anchor-tenant changes. Live tower-co customers running 8,000+ leases.</> },
          { q: "How do you handle permitting across jurisdictions?", a: <>Per-jurisdiction permit catalog with SLA timers and escalation rules. The Permit agent flags slips against build schedule and re-dispatches crews automatically.</> },
          { q: "Does this replace our ERP capital planning?",       a: <>No — it complements it. The capex line item lives in the ERP; Fieldforce attaches it to the operational site record so capital, work, and asset all share one ledger.</> },
          { q: "Can we pilot just the Plan stage?",                  a: <>Yes. Many customers start with Plan + Build, then layer Operate + Monetize as they retire legacy systems.</> },
        ]}
      />

      <CtaBand
        eyebrow="STAGE 1 OF 4"
        title={<>Plan it once. <span className="grad-text">Run it forever.</span></>}
        primary={{ href: "/demo", label: "Book a demo" }}
        secondary={{ href: "/platform/build", label: "Next: Build & Deploy →" }}
        fineprint="The site record you build in Plan is the same one the operator queries in year 12."
      />
    </>
  );
}

function PlanCanvas() {
  return (
    <div className="grid aspect-[1.1/1] place-items-center rounded-[14px] border border-[var(--color-line)] bg-[radial-gradient(ellipse_at_center,var(--color-accent-glow),transparent_70%),var(--color-bg-inset)] p-8">
      <div className="grid w-full max-w-[300px] gap-3">
        {[
          { l: "Site candidate",    s: "approved" },
          { l: "Landlord LOI",      s: "executed" },
          { l: "Lease",             s: "in negotiation" },
          { l: "Permits",           s: "5 of 7 filed" },
          { l: "Capex line",        s: "ERP-synced" },
        ].map((r) => (
          <div key={r.l} className="flex items-center justify-between rounded-md border border-[var(--color-line-subtle)] bg-[var(--color-bg-raised)] px-3 py-[10px] font-mono text-[12px]">
            <span className="text-[var(--color-text-2)]">{r.l}</span>
            <span className="text-[var(--color-accent)]">{r.s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SiteIntakeMock() {
  return (
    <div className="font-mono text-[12px]">
      <div className="grid grid-cols-[80px_1fr_70px] gap-3 border-b border-[var(--color-line-subtle)] px-4 py-3 text-[var(--color-text-3)]">
        <span>SITE</span>
        <span>STATUS</span>
        <span className="text-right">SCORE</span>
      </div>
      {[
        ["SITE-4022", "Candidate · LOI sent",        "82"],
        ["SITE-4023", "Lease · in negotiation",      "78"],
        ["SITE-4024", "Permit · 3 of 7 filed",       "—"],
        ["SITE-4025", "Approved · ready for build",  "94"],
        ["SITE-4026", "Capex line · pending",        "—"],
      ].map((r) => (
        <div key={r[0]} className="grid grid-cols-[80px_1fr_70px] gap-3 border-b border-[var(--color-line-subtle)] px-4 py-3 last:border-b-0">
          <span className="text-[var(--color-text-3)]">{r[0]}</span>
          <span className="text-[var(--color-text-2)]">{r[1]}</span>
          <span className="text-right text-[var(--color-accent)]">{r[2]}</span>
        </div>
      ))}
    </div>
  );
}

function PermitTimeline() {
  return (
    <div className="flex flex-col gap-2 font-mono text-[12px]">
      {[
        { t: "T-12d", l: "Zoning permit · filed",      tone: "ok" },
        { t: "T-8d",  l: "Building permit · filed",    tone: "ok" },
        { t: "T-5d",  l: "FAA filing · slipping ↑",    tone: "warn" },
        { t: "T-3d",  l: "Permit agent · escalated",   tone: "accent" },
        { t: "T-1d",  l: "Crew re-dispatched · SITE-4031", tone: "ok" },
      ].map((r) => (
        <div key={r.t} className="flex items-baseline gap-3 rounded-md border border-[var(--color-line-subtle)] bg-[var(--color-bg-inset)] px-3 py-[10px]">
          <span className="text-[var(--color-text-3)]">{r.t}</span>
          <span
            className={
              r.tone === "warn"
                ? "text-[var(--color-warn)]"
                : r.tone === "accent"
                  ? "text-[var(--color-accent)]"
                  : "text-[var(--color-text-2)]"
            }
          >
            {r.l}
          </span>
        </div>
      ))}
    </div>
  );
}

function CapexMock() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {[
        { v: "$4.2M",  l: "approved capex" },
        { v: "$3.1M",  l: "committed" },
        { v: "84%",    l: "forecast accuracy" },
        { v: "ERP",    l: "synced · Oracle EBS" },
      ].map((m) => (
        <div key={m.l} className="rounded-[10px] border border-[var(--color-line-subtle)] bg-[var(--color-bg-inset)] p-4">
          <div className="font-display text-[22px] font-semibold leading-none tracking-[-0.022em] text-[var(--color-accent)]">
            {m.v}
          </div>
          <div className="mt-2 font-mono text-[10.5px] uppercase tracking-[0.1em] text-[var(--color-text-3)]">
            {m.l}
          </div>
        </div>
      ))}
    </div>
  );
}
