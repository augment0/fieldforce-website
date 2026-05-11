import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { StatBar } from "@/components/sections/stat-bar";
import { FeatureSplit } from "@/components/sections/feature-split";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { Testimonial } from "@/components/sections/testimonial";
import { Comparison } from "@/components/sections/comparison";
import { FAQ } from "@/components/sections/faq";
import { CtaBand } from "@/components/sections/cta-band";
import { Constellation } from "@/components/illustrations/constellation";

export const metadata: Metadata = {
  title: "Why Fieldforce — The AI operations platform for infrastructure",
  description:
    "Fieldforce is the AI-first operating system for the physical infrastructure powering the modern world — telecom, EV, IoT, smart cities, private 5G. Built around primitives. Hardened across 23 countries.",
};

export default function WhyPage() {
  return (
    <>
      <PageHero
        eyebrow="WHY FIELDFORCE"
        title={
          <>
            The infrastructure operations platform —
            <br />
            <span className="grad-text">built AI-first.</span>
          </>
        }
        body="Every other tool in the category was either built for a desk (Salesforce field-service apps), an accounting team (ERP modules), or a single vertical (fiber-only tools). Fieldforce was built for the field, hardened across 23 countries, and designed from day one around an AI agent fleet that acts on your data — not just dashboards over it."
        primaryCta={{ href: "/demo", label: "Book a demo" }}
        secondaryCta={{ href: "/platform", label: "See the platform" }}
        visual={<Constellation className="h-full w-full" />}
      />

      <StatBar
        items={[
          { value: "$10B+",  label: "infrastructure assets managed" },
          { value: "23",     label: "countries in production" },
          { value: "6",      label: "AI agents in production" },
          { value: "24h",    label: "first site live, contract to ticket" },
        ]}
      />

      <FeatureSplit
        eyebrow="CENTRALIZE"
        title={<>One source of truth. <span className="text-[var(--color-text-2)]">Every site, every asset, every action.</span></>}
        body={
          <p>
            Infrastructure operations break for one reason: the data lives in
            eleven places, and nobody trusts any of them. Fieldforce
            centralizes sites, assets, work orders, lease ledgers, and field
            evidence on a single canonical model — so the CFO, the NOC, and the
            crew on the tower are all looking at the same number.
          </p>
        }
        bullets={[
          "Sites, assets, work, evidence — one data model, one ledger",
          "Reads from Oracle / SAP / NetSuite — writes back",
          "OSS/BSS, RMS, GIS, OCPP, MQTT integrations on day one",
          "99.97% data integrity across 2.34M work orders YTD",
        ]}
        cta={{ href: "/platform", label: "See the platform" }}
        visual={<CentralizeMock />}
      />

      <FeatureSplit
        reverse
        eyebrow="STANDARDIZE"
        title={<>One operating model. <span className="text-[var(--color-text-2)]">Every vertical, every region.</span></>}
        body={
          <p>
            Telecom builds, charger commissioning, smart-city deployments — all
            run through the same primitives. That's how operators retire 4–6
            legacy systems on the way in, run multi-region without forking the
            stack, and stand up new verticals without buying new software.
          </p>
        }
        bullets={[
          "Same primitives across telecom, EV, IoT, smart cities, private 5G",
          "Region-pinned residency: US, EU, MENA, APAC",
          "Workflow builder mirrors your SOPs — you don't redesign per region",
          "Multi-customer ops for MSPs and E&C contractors",
        ]}
        cta={{ href: "/industries", label: "Browse industries" }}
        visual={<StandardizeMock />}
      />

      <FeatureSplit
        eyebrow="AI-FIRST, BY DESIGN"
        title={<>Six agents <span className="text-[var(--color-text-2)]">that act, not just observe.</span></>}
        body={
          <p>
            Bolt-on AI is a chat layer over a stack that doesn't talk to itself.
            Fieldforce's data fabric <em>is</em> the system of record, and the
            agents are first-class operators — re-routing crews, forecasting
            breaches, validating closures, reconciling invoices, escalating
            permits, answering questions in natural language. With guardrails
            you set, audit trails you trust.
          </p>
        }
        bullets={[
          "Dispatch · Forecast · Evidence · Reconcile · Permit · Copilot",
          "Every agent action is grounded, reversible, RBAC-gated",
          "11-day median SLA-breach forecast lead time",
          "94% first-pass field-QA accuracy via Evidence agent",
        ]}
        cta={{ href: "/platform/agents", label: "Meet the agents" }}
        visual={<AgentsMock />}
      />

      <Comparison />

      <FeatureGrid
        eyebrow="WHAT MAKES US DIFFERENT"
        title={<>Built for infrastructure operators. <span className="text-[var(--color-text-2)]">Not adapted from a desk app.</span></>}
        columns={3}
        items={[
          { title: "Built for the field",        body: "Offline-first mobile, photo-led closure, GPS-aware dispatch. Crews actually prefer it." },
          { title: "Lifecycle-complete",          body: "Plan, build, operate, monetize — one platform across the whole infrastructure lifecycle, not a feature slice." },
          { title: "Multi-vertical from day one", body: "Telecom, EV, IoT, smart cities — the same primitives. Stand up new verticals without buying new software." },
          { title: "AI as the spine",             body: "Not chat over a legacy stack. Agents grounded in the data fabric, with guardrails and audit." },
          { title: "Enterprise-hardened",          body: "SOC 2 Type II · ISO 27001 · region-pinned residency · Big Four audited at customer sites." },
          { title: "Fast time-to-value",          body: "First site live in 24 hours. No SI engagement, no quarter-long onboarding, no custom code." },
        ]}
      />

      <Testimonial
        quote={
          <>
            <strong className="font-semibold">Sitetracker will replace six of our internal systems.</strong> We can now ensure alignment and operate in a single source of truth without having to bounce between different tools.
          </>
        }
        name="Haynes Griffin"
        role="CEO · SmartSky Networks"
        initials="HG"
      />

      <FAQ
        eyebrow="THE HONEST QUESTIONS"
        title="What enterprise buyers actually ask."
        items={[
          { q: "How does Fieldforce compare to Sitetracker, IFS, or ServiceMax?", a: <>Sitetracker is a Salesforce app limited by Salesforce's data model and pricing. IFS is an ERP module — heavy implementation. ServiceMax targets legacy field-service. Fieldforce was built from day one for infrastructure operators with primitives that don't care if the asset is a tower, a charger, or a gateway — and an AI fleet that actually acts.</> },
          { q: "Is the AI real, or marketing?",                                    a: <>Six production agents. Forecast and Evidence use ML models. Dispatch and Reconcile are LLM-driven over a deterministic data fabric. Copilot is NL → SQL with grounded retrieval. Every action is logged and reversible.</> },
          { q: "Do we have to replace our ERP / OSS?",                              a: <>No. Fieldforce reads from your existing systems and writes back. Your ERP stays the financial source of truth; your OSS stays for telemetry; Fieldforce becomes the operational source of truth.</> },
          { q: "How fast can we be in production?",                                  a: <>First site live in 24 hours. Full footprint typically 4–8 weeks. We don't do 18-month implementations.</> },
          { q: "What about compliance and data residency?",                          a: <>SOC 2 Type II · ISO 27001 · GDPR. Region-pinned residency in US, EU, MENA, APAC. Industry-specific compliance (NEVI/AFIR for charging, TM Forum APIs for telecom). Request our trust pack.</> },
        ]}
      />

      <CtaBand
        eyebrow="DON'T JUST DEPLOY — OPERATE"
        title={<>The infrastructure of the modern world <span className="grad-text">runs on Fieldforce.</span></>}
        primary={{ href: "/demo", label: "Book a demo" }}
        secondary={{ href: "/customers", label: "See customers" }}
        fineprint="First site live in 24 hours."
      />
    </>
  );
}

function CentralizeMock() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {[
        { v: "12,841", l: "sites" },
        { v: "2.34M",  l: "work orders YTD" },
        { v: "99.97%", l: "data integrity" },
        { v: "1 model", l: "across every vertical" },
      ].map((m) => (
        <div key={m.l} className="rounded-[10px] border border-[var(--color-line-subtle)] bg-[var(--color-bg-inset)] p-5">
          <div className="font-display text-[24px] font-semibold leading-none tracking-[-0.022em] text-[var(--color-accent)]">
            {m.v}
          </div>
          <div className="mt-2 font-mono text-[10.5px] uppercase tracking-[0.12em] text-[var(--color-text-3)]">
            {m.l}
          </div>
        </div>
      ))}
    </div>
  );
}

function StandardizeMock() {
  return (
    <div className="flex flex-col gap-2 font-mono text-[12px]">
      {[
        { v: "Telecom",       n: "12,000+ sites" },
        { v: "EV Charging",   n: "CPO networks, NEVI-ready" },
        { v: "IoT",           n: "8,400+ gateways" },
        { v: "Smart Cities",  n: "Streetlights, sensors" },
        { v: "Private 5G",    n: "CBRS, on-prem RAN" },
        { v: "Towers",        n: "Lease + lifecycle" },
      ].map((r) => (
        <div key={r.v} className="grid grid-cols-[140px_1fr] gap-3 rounded-md border border-[var(--color-line-subtle)] bg-[var(--color-bg-inset)] px-3 py-[10px]">
          <span className="text-[var(--color-accent)]">{r.v}</span>
          <span className="text-[var(--color-text-2)]">{r.n}</span>
        </div>
      ))}
    </div>
  );
}

function AgentsMock() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {[
        { v: "Dispatch",  l: "re-routed 14 crews" },
        { v: "Forecast",  l: "11d SLA lead time" },
        { v: "Evidence",  l: "94% first-pass QA" },
        { v: "Reconcile", l: "8.2% variance flagged" },
        { v: "Permit",    l: "412 escalations queued" },
        { v: "Copilot",   l: "1,200 NL queries / wk" },
      ].map((m) => (
        <div key={m.v} className="rounded-[10px] border border-[var(--color-line-subtle)] bg-[var(--color-bg-inset)] p-4">
          <div className="font-display text-[15px] font-semibold leading-none tracking-[-0.01em] text-[var(--color-accent)]">
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
