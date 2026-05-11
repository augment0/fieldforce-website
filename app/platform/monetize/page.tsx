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
  title: "Monitor & Monetize | Platform lifecycle",
  description:
    "Track asset condition, lease portfolios, and financial impact. Recover lease leakage, optimize asset health, and recognize the revenue you're owed across $10B+ of infrastructure.",
};

export default function MonetizeStagePage() {
  return (
    <>
      <Breadcrumb items={[{ href: "/platform", label: "Platform" }]} current="Monitor & Monetize" />

      <PageHero
        eyebrow="LIFECYCLE / MONITOR & MONETIZE"
        title={
          <>
            Asset health.
            <br />
            <span className="text-[var(--color-text-2)]">Lease revenue. Financial impact.</span>
          </>
        }
        body="Once an asset is in service, the question becomes: are we getting the return we modeled? Monitor & Monetize tracks asset condition, lease portfolios, financial flow, and operator outcomes — so the CFO sees the same number the field does."
        primaryCta={{ href: "/demo", label: "Book a demo" }}
        secondaryCta={{ href: "/platform/plan", label: "Back to: Plan & Design" }}
        visual={<RevenueBoard />}
      />

      <StatBar
        items={[
          { value: "$10B+",  label: "infrastructure assets tracked" },
          { value: "3–5%",   label: "lease leakage recovered (typical)" },
          { value: "Auto",   label: "escalation & renewal triggers" },
          { value: "ERP-sync", label: "Oracle · SAP · NetSuite" },
        ]}
      />

      <FeatureSplit
        eyebrow="ASSET MANAGEMENT"
        title={<>One ledger. <span className="text-[var(--color-text-2)]">Every site, every asset, every lease.</span></>}
        body={
          <p>
            Most operators can't answer "what do we own and where is it?" from
            a single source. Fieldforce gives infrastructure operators an
            ERP-grade ledger that survives the asset's full lifecycle — with
            warehouse, field, and financial context already attached.
          </p>
        }
        bullets={[
          "Lifecycle ledger: acquired → deployed → maintained → repaired → retired",
          "Reconciles to Oracle / SAP / NetSuite financial register",
          "Warehouse + field state on one record",
          "GIS / spatial context via ArcGIS, 3-GIS, Bentley",
        ]}
        cta={{ href: "/platform/assets", label: "How Assets work" }}
        visual={<AssetLedger />}
      />

      <FeatureSplit
        reverse
        eyebrow="LEASE & REVENUE"
        title={<>Stop the leak. <span className="text-[var(--color-text-2)]">Recognize the revenue.</span></>}
        body={
          <p>
            For tower companies, landlords, and site operators, lease leakage
            routinely costs 3–5% of revenue. Missed escalations, slow renewals,
            untracked anchor-tenant changes. Lease & Revenue closes every leak
            by treating lease as a first-class workflow.
          </p>
        }
        bullets={[
          "Auto-escalation, indexation, renewal triggers",
          "Anchor-tenant change orchestration with structural impact",
          "Multi-vendor MOUs with site-level addenda",
          "AR sync — ERP-grade lease cash flow",
        ]}
        cta={{ href: "/industries/tower-companies", label: "For tower companies" }}
        visual={<LeaseLedgerMock />}
      />

      <FeatureSplit
        eyebrow="ANALYTICS & COPILOT"
        title={<>Numbers your CFO trusts. <span className="text-[var(--color-text-2)]">Questions anyone can ask.</span></>}
        body={
          <p>
            Configurable dashboards for the C-suite, region, and operating unit.
            The Copilot agent answers natural-language questions across your
            entire ops data lake — with sources, grounded in the same data
            model the rest of the platform runs on.
          </p>
        }
        bullets={[
          "Customizable dashboards — daily, weekly, board-level",
          "Copilot: NL → SQL across sites, assets, work, evidence, lease",
          "Sources cited on every answer; auditable",
          "Region- and role-aware data access via RBAC",
        ]}
        cta={{ href: "/agents/copilot", label: "Meet the Copilot agent" }}
        visual={<CopilotMock />}
      />

      <FeatureGrid
        eyebrow="WHAT YOU GET IN THE MONETIZE STAGE"
        title={<>The financial picture <span className="text-[var(--color-text-2)]">already on your balance sheet.</span></>}
        columns={3}
        items={[
          { title: "Single asset ledger",  body: "$10B+ in assets across telecom, EV, IoT — one canonical model." },
          { title: "Lease workflow",        body: "Auto-escalation, renewals, anchor changes, ERP sync." },
          { title: "Asset Sentinel",         body: "Predictive maintenance to extend useful life." },
          { title: "Copilot · NL → SQL",     body: "Anyone can ask any question — and get a grounded answer with sources." },
          { title: "ERP-native",             body: "Oracle, SAP, NetSuite, Workday. AR sync. No double entry." },
          { title: "Audit-ready",            body: "SOC 2 Type II · ISO 27001 · Big Four audited." },
        ]}
      />

      <Testimonial
        quote={
          <>
            Sitetracker will replace six of our internal systems. We can now <strong className="font-semibold">ensure alignment and operate in a single source of truth</strong> without having to bounce between different tools.
          </>
        }
        name="CEO"
        role="Infrastructure operator"
        initials="CE"
      />

      <FAQ
        eyebrow="FINANCE-LEADER QUESTIONS"
        title="What CFOs and asset owners ask up front."
        items={[
          { q: "Does this replace our ERP asset register?",         a: <>No — it complements it. ERP stays the financial register; Fieldforce becomes the operational register. The two reconcile automatically.</> },
          { q: "How is lease leakage actually recovered?",            a: <>Three lines: missed escalations triggered, anchor-tenant change orders captured, renewal windows orchestrated. We measure 3–5% revenue recovery in year one on tower-co portfolios.</> },
          { q: "Can finance trust the numbers?",                      a: <>Yes — every event syncs to ERP with full audit trail. SOC 2 Type II + ISO 27001 + Big Four audited at customer sites.</> },
          { q: "What does Copilot actually do?",                       a: <>NL → SQL with grounded retrieval over your unified ops data lake. Every answer returns sources. Actions bounded by RBAC. Customers run ~1,200 NL queries a week across finance, ops, and field teams.</> },
        ]}
      />

      <CtaBand
        eyebrow="STAGE 4 OF 4"
        title={<>Recognize the revenue. <span className="grad-text">Already on your balance sheet.</span></>}
        primary={{ href: "/demo", label: "Book a demo" }}
        secondary={{ href: "/resources/roi", label: "Run the ROI model" }}
      />
    </>
  );
}

function RevenueBoard() {
  return (
    <div className="overflow-hidden rounded-[14px] border border-[var(--color-line)] bg-[radial-gradient(ellipse_at_center,var(--color-accent-glow),transparent_70%),var(--color-bg-inset)] p-6">
      <div className="grid grid-cols-2 gap-3">
        {[
          { v: "$10B+",  l: "assets tracked" },
          { v: "3.8%",   l: "revenue recovered" },
          { v: "8,412",  l: "active leases" },
          { v: "412",    l: "renewals this q" },
          { v: "98.4%",  l: "MOU SLA met" },
          { v: "$1.2B",  l: "AR synced to ERP" },
        ].map((m) => (
          <div key={m.l} className="rounded-[10px] border border-[var(--color-line-subtle)] bg-[var(--color-bg-raised)] p-4">
            <div className="font-display text-[20px] font-semibold leading-none tracking-[-0.022em] text-[var(--color-accent)]">
              {m.v}
            </div>
            <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-text-3)]">
              {m.l}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AssetLedger() {
  return (
    <div className="font-mono text-[12px]">
      <div className="grid grid-cols-[100px_1fr_80px] gap-3 border-b border-[var(--color-line-subtle)] px-4 py-3 text-[var(--color-text-3)]">
        <span>ASSET</span>
        <span>STATE</span>
        <span className="text-right">VALUE</span>
      </div>
      {[
        ["AST-12041", "Tower · in-service",       "$280k"],
        ["AST-12042", "Charger · in-service",     "$45k"],
        ["AST-12043", "Gateway · provisioned",    "$2.1k"],
        ["AST-12044", "Splice · repair pending",  "$1.4k"],
        ["AST-12045", "Cabinet · retired",        "—"],
      ].map((r) => (
        <div key={r[0]} className="grid grid-cols-[100px_1fr_80px] gap-3 border-b border-[var(--color-line-subtle)] px-4 py-3 last:border-b-0">
          <span className="text-[var(--color-text-3)]">{r[0]}</span>
          <span className="text-[var(--color-text-2)]">{r[1]}</span>
          <span className="text-right text-[var(--color-accent)]">{r[2]}</span>
        </div>
      ))}
    </div>
  );
}

function LeaseLedgerMock() {
  return (
    <div className="font-mono text-[12px]">
      {[
        ["TWR-22841", "Operator A", "2026-01-12", "active"],
        ["TWR-22842", "Operator B", "2027-06-30", "renewing"],
        ["TWR-22843", "Operator A", "2025-11-04", "escalating"],
        ["TWR-22844", "Operator C", "2028-04-22", "active"],
      ].map(([id, op, date, status]) => (
        <div
          key={id}
          className="grid grid-cols-[100px_1fr_110px_92px] gap-3 border-b border-[var(--color-line-subtle)] px-4 py-3 last:border-b-0"
        >
          <span className="text-[var(--color-text-3)]">{id}</span>
          <span className="text-[var(--color-text)]">{op}</span>
          <span className="text-[var(--color-text-2)]">{date}</span>
          <span
            className={
              status === "renewing"
                ? "text-[var(--color-warn)]"
                : status === "escalating"
                  ? "text-[var(--color-accent)]"
                  : "text-[var(--color-text-2)]"
            }
          >
            {status}
          </span>
        </div>
      ))}
    </div>
  );
}

function CopilotMock() {
  return (
    <div className="overflow-hidden rounded-[10px] border border-[var(--color-line-subtle)] bg-[var(--color-bg-inset)] font-mono text-[12px]">
      {[
        { l: "> sites at risk of SLA breach in next 14 days",   t: "Copilot" },
        { l: "  → 27 sites · top 5 shown · sources cited",       t: "answer" },
        { l: "> lease leakage on MENA portfolio Q3",              t: "Copilot" },
        { l: "  → $1.4M flagged · 18 lease lines · ERP-synced",  t: "answer" },
      ].map((r, i) => (
        <div key={i} className="grid grid-cols-[70px_1fr] gap-3 border-b border-[var(--color-line-subtle)] px-4 py-3 last:border-b-0">
          <span className={r.t === "Copilot" ? "text-[var(--color-accent)]" : "text-[var(--color-text-3)]"}>
            {r.t}
          </span>
          <span className="text-[var(--color-text-2)]">{r.l}</span>
        </div>
      ))}
    </div>
  );
}
