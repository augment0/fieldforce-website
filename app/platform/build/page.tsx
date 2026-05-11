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
  title: "Build & Deploy | Platform lifecycle",
  description:
    "Execute infrastructure builds with schedule, cost, and quality control. From groundbreaking to closeout — one timeline, every team, every vendor. 25–30% faster deployment.",
};

export default function BuildStagePage() {
  return (
    <>
      <Breadcrumb items={[{ href: "/platform", label: "Platform" }]} current="Build & Deploy" />

      <PageHero
        eyebrow="LIFECYCLE / BUILD & DEPLOY"
        title={
          <>
            From groundbreaking to closeout.
            <br />
            <span className="grad-text">25–30% faster.</span>
          </>
        }
        body="The build doesn't slip in any one place — it slips because permits, leases, crews, parts, and approvals don't talk. Build & Deploy gives operators, towercos, OEMs, and contractors one timeline with role-aware views, evidence-gated closure, and AI-driven dispatch."
        primaryCta={{ href: "/demo", label: "Book a demo" }}
        secondaryCta={{ href: "/platform/operate", label: "Next: Operate & Maintain" }}
        visual={<BuildTimeline />}
      />

      <StatBar
        items={[
          { value: "25–30%", label: "faster deployment" },
          { value: "24h",    label: "first site live" },
          { value: "94%",    label: "first-pass field QA" },
          { value: "11d",    label: "SLA breach forecast lead time" },
        ]}
      />

      <FeatureSplit
        eyebrow="SCHEDULE & DISPATCH"
        title={<>Permit-aware dispatch. <span className="text-[var(--color-text-2)]">Risk-aware scheduling.</span></>}
        body={
          <p>
            Crews automatically re-routed when a permit slips, against weather,
            parts, and SLA risk. The Dispatch agent acts inside guardrails you
            set — no more truck-rolls against blocked sites.
          </p>
        }
        bullets={[
          "Permit-aware crew dispatch with automatic re-routing",
          "Forecast agent flags SLA breaches 11 days early",
          "Weather, parts, and access constraints respected",
          "Role-aware views — RF, civil, integration, NOC, finance",
        ]}
        cta={{ href: "/agents/dispatch", label: "Meet the Dispatch agent" }}
        visual={<DispatchMock />}
      />

      <FeatureSplit
        reverse
        eyebrow="COST CONTROL"
        title={<>Budget envelope, vendor variance, <span className="text-[var(--color-text-2)]">all in real time.</span></>}
        body={
          <p>
            Track planned vs. actual at the line-item level. Vendor invoice
            variance over your threshold flagged in seconds by the Reconcile
            agent. Crew-day idle surfaced before it accrues.
          </p>
        }
        bullets={[
          "Planned vs. actual at line-item granularity",
          "Vendor invoice variance flagged automatically",
          "Crew-day idle surfaced in real time",
          "ERP write-back to Oracle / SAP / NetSuite",
        ]}
        cta={{ href: "/agents/reconcile", label: "Meet the Reconcile agent" }}
        visual={<CostControlMock />}
      />

      <FeatureSplit
        eyebrow="QUALITY CONTROL · EVIDENCE-GATED CLOSURE"
        title={<>Sites don't close <span className="text-[var(--color-text-2)]">until the evidence agrees.</span></>}
        body={
          <p>
            Every closure is photo-evidenced and validated by computer vision.
            Missing closure photo? Wrong splice? Work order doesn't close.
            Rework rates drop 30–50%, first-pass QA hits 94%.
          </p>
        }
        bullets={[
          "Computer vision QA on every site photo",
          "Closure gated by evidence — no manual override",
          "First-pass QA: 94% across 23 countries",
          "Audit pack auto-generated, SOC 2 + ISO 27001 ready",
        ]}
        cta={{ href: "/agents/evidence", label: "Meet the Evidence agent" }}
        visual={<EvidenceFeed />}
      />

      <FeatureGrid
        eyebrow="WHAT YOU GET IN THE BUILD STAGE"
        title={<>One timeline. <span className="text-[var(--color-text-2)]">Every team. Every vendor.</span></>}
        columns={3}
        items={[
          { title: "Permit-aware dispatch",     body: "Crews re-routed when a permit slips, automatically." },
          { title: "11-day SLA forecast",        body: "Sites at risk surfaced before they breach." },
          { title: "CV photo QA",                body: "Closure gated by evidence. No more 'looks done'." },
          { title: "Vendor reconcile",            body: "Nine invoice formats. One queue. Variance flagged." },
          { title: "Multi-stakeholder",           body: "Operator, towerco, OEM, contractor — same timeline." },
          { title: "OSS/BSS-aware",                body: "TM Forum APIs. Inventory in, work-order state out." },
        ]}
      />

      <Testimonial
        quote={
          <>
            We needed people to manage the same project hundreds of times, not hundreds of projects at one time. <strong className="font-semibold">Fieldforce can help us accomplish that.</strong>
          </>
        }
        name="Director of Construction & Planning"
        role="Telecom operator"
        initials="DC"
      />

      <FAQ
        eyebrow="BUILD-STAGE QUESTIONS"
        title="What construction leaders ask in week one."
        items={[
          { q: "How does the Dispatch agent decide?",        a: <>Permits, weather, parts, crew skill, SLA risk, and customer-set guardrails. Every decision is logged, reversible, and bounded by RBAC rules you configure per workflow.</> },
          { q: "What does '25–30% faster' really mean?",      a: <>Time from site acquisition to live revenue. Measured across telecom builds in 23 countries. We'll model it for your network during a demo.</> },
          { q: "Can we keep our existing PM tools?",           a: <>Many customers retire Sitetracker, Procore, or custom tools — but we integrate where it makes sense. Yes to MS Project, Jira, and Asana sync.</> },
          { q: "What about multi-vendor coordination?",         a: <>Master agreements with site-level addenda. SLA tracking per vendor. Variance reporting. Multi-customer ops for MSPs and E&C contractors.</> },
        ]}
      />

      <CtaBand
        eyebrow="STAGE 2 OF 4"
        title={<>Build it once. <span className="grad-text">Without the slip.</span></>}
        primary={{ href: "/demo", label: "Book a demo" }}
        secondary={{ href: "/platform/operate", label: "Next: Operate & Maintain →" }}
      />
    </>
  );
}

function BuildTimeline() {
  return (
    <div className="overflow-hidden rounded-[14px] border border-[var(--color-line)] bg-[radial-gradient(ellipse_at_center,var(--color-accent-glow),transparent_70%),var(--color-bg-inset)] p-6">
      <div className="font-mono text-[11px]">
        {[
          ["07:14", "Permit denied · Site 18403"],
          ["07:14", "Dispatch · re-routing crew #4"],
          ["09:42", "Crew arrived · Site 18244"],
          ["10:08", "Evidence · closure missing"],
          ["10:14", "Splice torque OK · CV pass"],
          ["12:30", "Reconcile · INV-3493 +8.2%"],
          ["14:52", "Work order closed · evidence ✓"],
        ].map(([t, l]) => (
          <div key={t} className="grid grid-cols-[58px_1fr] gap-3 border-b border-[var(--color-line-subtle)] py-[10px] last:border-b-0">
            <span className="text-[var(--color-text-3)]">{t}</span>
            <span className="text-[var(--color-text)]">{l}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DispatchMock() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {[
        { v: "14",   l: "crews re-routed today" },
        { v: "11d",  l: "SLA lead time" },
        { v: "94%",  l: "permit attach rate" },
        { v: "0",    l: "blocked truck-rolls" },
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

function CostControlMock() {
  return (
    <div className="font-mono text-[12px]">
      <div className="grid grid-cols-[1fr_70px_70px] gap-3 border-b border-[var(--color-line-subtle)] px-4 py-3 text-[var(--color-text-3)]">
        <span>VENDOR · LINE</span>
        <span className="text-right">PO</span>
        <span className="text-right">VAR</span>
      </div>
      {[
        ["Vendor A · civil",   "$120k", "+2%"],
        ["Vendor B · RF",      "$84k",  "+0%"],
        ["Vendor C · integration", "$96k", "+8.2%"],
        ["Vendor D · permit",   "$22k",  "+0%"],
        ["Vendor E · materials", "$210k", "−3%"],
      ].map((r, i) => (
        <div key={i} className="grid grid-cols-[1fr_70px_70px] gap-3 border-b border-[var(--color-line-subtle)] px-4 py-3 last:border-b-0">
          <span className="text-[var(--color-text-2)]">{r[0]}</span>
          <span className="text-right text-[var(--color-text)]">{r[1]}</span>
          <span
            className={
              r[2].startsWith("+8") || r[2].startsWith("+1")
                ? "text-right text-[var(--color-warn)]"
                : r[2].startsWith("−")
                  ? "text-right text-[var(--color-accent)]"
                  : "text-right text-[var(--color-text-2)]"
            }
          >
            {r[2]}
          </span>
        </div>
      ))}
    </div>
  );
}

function EvidenceFeed() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {[
        { l: "Photo 0143 · splice torque",  t: "✓ CV pass" },
        { l: "Photo 0142 · closure",         t: "✗ flagged" },
        { l: "Photo 0144 · grounding",       t: "✓ CV pass" },
        { l: "Photo 0145 · cabinet seal",    t: "✓ CV pass" },
      ].map((m) => (
        <div key={m.l} className="rounded-[10px] border border-[var(--color-line-subtle)] bg-[var(--color-bg-inset)] p-4">
          <div
            className={
              m.t.startsWith("✗")
                ? "font-display text-[15px] font-semibold leading-none tracking-[-0.01em] text-[var(--color-warn)]"
                : "font-display text-[15px] font-semibold leading-none tracking-[-0.01em] text-[var(--color-accent)]"
            }
          >
            {m.t}
          </div>
          <div className="mt-2 font-mono text-[10.5px] uppercase tracking-[0.1em] text-[var(--color-text-3)]">
            {m.l}
          </div>
        </div>
      ))}
    </div>
  );
}
