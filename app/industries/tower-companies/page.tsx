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
  title: "Tower companies | Industries",
  description:
    "Site lifecycle, lease lifecycle, anchor-tenant changes, structural inspections, multi-vendor MOUs — at tower-co scale. Recover 3–5% of lease revenue you didn't know was leaking.",
};

export default function TowerCompaniesPage() {
  return (
    <>
      <Breadcrumb items={[{ href: "/industries", label: "Industries" }]} current="Tower companies" />

      <PageHero
        eyebrow="INDUSTRIES / TOWER COMPANIES"
        title={
          <>
            Site lifecycle.
            <br />
            <span className="text-[var(--color-text-2)]">Lease lifecycle. Earned per site.</span>
          </>
        }
        body="Tower companies don't have a tooling problem — they have eleven. Real-estate, lease accounting, structural inspections, anchor-tenant changes, multi-vendor MOUs, capex pipelines. Fieldforce gives tower-cos a single platform that respects every one of those workflows at the granularity needed to bill correctly and stay safe."
        primaryCta={{ href: "/demo", label: "Talk to a tower-co expert" }}
        secondaryCta={{ href: "/solutions/monetize-leases", label: "See the lease workflow" }}
        visual={<TowerScoreboard />}
      />

      <StatBar
        items={[
          { value: "3–5%",   label: "lease leakage recovered" },
          { value: "$10B+",  label: "site assets managed" },
          { value: "94%",    label: "first-pass inspection QA" },
          { value: "Auto",   label: "escalation & renewal triggers" },
        ]}
      />

      <FeatureSplit
        eyebrow="THE WORK YOU ACTUALLY DO"
        title={<>Real-estate, lease, structural — <span className="text-[var(--color-text-2)]">on one record.</span></>}
        body={
          <p>
            Towercos live and die by the site record. Fieldforce's Site primitive
            attaches every workflow — lease, inspection, anchor tenant, structural
            change, capex line — to the same canonical object. One source of
            truth, every team queries it.
          </p>
        }
        bullets={[
          "Lease management with auto-escalation, indexation, renewal triggers",
          "Anchor-tenant change orchestration with structural impact tracking",
          "Structural inspections via Evidence (computer vision QA on every photo)",
          "Multi-vendor MOU and SLA tracking with variance reporting",
          "Capex pipeline visibility from approval to in-service",
        ]}
        cta={{ href: "/solutions/monetize-leases", label: "Lease workflow" }}
        visual={<LeasePortfolioMock />}
      />

      <FeatureSplit
        reverse
        eyebrow="STRUCTURAL & SAFETY"
        title={<>Inspections that <span className="text-[var(--color-text-2)]">actually evidence the work.</span></>}
        body={
          <p>
            Every climb, every inspection, every structural change — photo-evidenced
            and validated by computer vision. Site doesn't close until the evidence
            checks out. Safety reports generate themselves.
          </p>
        }
        bullets={[
          "Climb safety attestations and gate-code management in-app",
          "CV-validated structural inspection workflow",
          "Wind-load and ice-loading change tracking on anchor-tenant changes",
          "Auto-generated safety audit packs for regulators",
        ]}
        cta={{ href: "/platform/evidence", label: "How Evidence works" }}
        visual={<InspectionFeed />}
      />

      <FeatureGrid
        eyebrow="WHAT TOWER-COS GET"
        title={<>Built for the operators <span className="text-[var(--color-text-2)]">renting the air rights.</span></>}
        columns={3}
        items={[
          { title: "Lease ledger",          body: "Every lease event reconciled to ERP. AR sync. Audit-ready." },
          { title: "Renewal orchestration", body: "Renewal windows tracked, customer-facing flow, escalation playbooks." },
          { title: "Anchor changes",         body: "Add / swap / remove anchor tenants with structural and financial impact tracked end-to-end." },
          { title: "Multi-currency, multi-region", body: "MENA, EU, APAC, Americas. Live customers in 23 countries." },
          { title: "ERP-grade financials",   body: "Oracle EBS, SAP S/4, NetSuite. Lease cash flow, asset register, capex line — synced." },
          { title: "Carrier-grade audit",    body: "SOC 2 Type II, ISO 27001. Region-pinned residency. Big Four audited at customer sites." },
        ]}
      />

      <Testimonial
        quote={
          <>
            In year one, Fieldforce recovered <strong className="font-semibold">3.8% of revenue</strong> that was simply leaking through missed escalations and unbilled anchor-tenant changes. The platform paid for itself in months on this line alone.
          </>
        }
        name="Operator"
        role="Tower-co customer · MENA region"
        initials="MN"
      />

      <FAQ
        eyebrow="TOWER-CO QUESTIONS"
        title="What real tower operators ask before signing."
        items={[
          { q: "How does this compare to Sitetracker?",     a: <>Sitetracker is a Salesforce app built around the deployment workflow — not the lease-and-site lifecycle. We've migrated tower-cos off Sitetracker in 6–10 weeks; the lease workflow alone is the difference.</> },
          { q: "Can we manage 5,000+ leases?",                a: <>Yes — live customers in production at 8,000+ leases across multiple regions. Auto-escalation, renewals, anchor changes all running.</> },
          { q: "Do you support our anchor-tenant change workflow?", a: <>Yes — structural review, lease addendum, financial impact, evidenced inspection, ERP sync. Full audit trail.</> },
          { q: "What about MENA / APAC residency?",            a: <>Region-pinned residency in US, EU, MENA, APAC. Live customers in Saudi Arabia, UAE, Egypt, Pakistan.</> },
        ]}
      />

      <CtaBand
        eyebrow="STOP THE LEAK"
        title={<>Run the tower business <span className="grad-text">on one platform.</span></>}
        primary={{ href: "/demo", label: "Talk to a tower-co expert" }}
        secondary={{ href: "/solutions/monetize-leases", label: "See the lease workflow" }}
        fineprint="Most tower-cos recover Fieldforce's first-year cost in lease leakage alone."
      />
    </>
  );
}

function TowerScoreboard() {
  return (
    <div className="grid aspect-[1.1/1] place-items-center rounded-[14px] border border-[var(--color-line)] bg-[radial-gradient(ellipse_at_center,var(--color-accent-glow),transparent_70%),var(--color-bg-inset)] p-8">
      <div className="grid w-full max-w-[340px] grid-cols-2 gap-3">
        {[
          { v: "8,412", l: "active leases" },
          { v: "3.8%",  l: "revenue recovered" },
          { v: "412",   l: "renewals this q" },
          { v: "98.4%", l: "MOU SLA met" },
        ].map((m) => (
          <div
            key={m.l}
            className="rounded-[10px] border border-[var(--color-line-subtle)] bg-[var(--color-bg-raised)] p-4"
          >
            <div className="font-display text-[24px] font-semibold leading-none tracking-[-0.022em] text-[var(--color-accent)]">
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

function LeasePortfolioMock() {
  return (
    <div className="overflow-hidden rounded-[10px] border border-[var(--color-line-subtle)] bg-[var(--color-bg-inset)] font-mono text-[12px]">
      {[
        ["TWR-22841", "Operator A", "2026-01-12", "active"],
        ["TWR-22842", "Operator B", "2027-06-30", "renewing"],
        ["TWR-22843", "Operator A", "2025-11-04", "escalating"],
        ["TWR-22844", "Operator C", "2028-04-22", "active"],
        ["TWR-22845", "Operator A", "2024-09-30", "expired"],
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
              status === "expired"
                ? "text-[var(--color-danger)]"
                : status === "renewing"
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

function InspectionFeed() {
  return (
    <div className="flex flex-col gap-2 font-mono text-[12px]">
      {[
        { t: "14:22", l: "TWR-22841 · climb attestation · ✓ verified" },
        { t: "14:11", l: "TWR-22843 · structural photo · CV: pass" },
        { t: "13:48", l: "TWR-22847 · anchor swap · structural review queued" },
        { t: "13:30", l: "TWR-22852 · wind-load reassessed · +0.4 kN/m²" },
        { t: "12:55", l: "TWR-22859 · safety attestation · ✓ filed" },
      ].map((r) => (
        <div
          key={r.t}
          className="flex items-baseline gap-3 rounded-md border border-[var(--color-line-subtle)] bg-[var(--color-bg-inset)] px-3 py-[10px]"
        >
          <span className="text-[var(--color-accent)]">{r.t}</span>
          <span className="text-[var(--color-text-2)]">{r.l}</span>
        </div>
      ))}
    </div>
  );
}
