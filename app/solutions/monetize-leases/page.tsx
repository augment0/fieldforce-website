import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageHero } from "@/components/sections/page-hero";
import { StatBar } from "@/components/sections/stat-bar";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { Testimonial } from "@/components/sections/testimonial";
import { FAQ } from "@/components/sections/faq";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Monetize lease portfolios | Solutions",
  description:
    "Stop lease leakage. Speed renewals. Orchestrate anchor-tenant changes. Recognize the revenue you're owed across every site and tower in the portfolio.",
};

export default function MonetizeLeasesPage() {
  return (
    <>
      <Breadcrumb items={[{ href: "/solutions", label: "Solutions" }]} current="Monetize lease portfolios" />

      <PageHero
        eyebrow="SOLUTIONS / MONETIZE LEASE PORTFOLIOS"
        title={
          <>
            Stop the leak.
            <br />
            <span className="text-[var(--color-text-2)]">Recognize the revenue you're owed.</span>
          </>
        }
        body="For tower companies, landlords, and site operators, lease leakage routinely costs 3–5% of revenue. Missed escalations. Slow renewals. Untracked anchor-tenant changes. Fieldforce closes every leak by treating lease as a first-class workflow on top of the same site and asset model."
        primaryCta={{ href: "/demo", label: "Book a demo" }}
        secondaryCta={{ href: "/industries/tower-companies", label: "For tower companies" }}
      />

      <StatBar
        items={[
          { value: "3–5%",   label: "lease leakage recovered (typical)" },
          { value: "Auto",   label: "escalation & renewal triggers" },
          { value: "1 view", label: "anchor tenants, swaps, MOUs" },
          { value: "ERP-sync", label: "to Oracle, SAP, NetSuite" },
        ]}
      />

      <FeatureGrid
        eyebrow="WHAT THE LEASE WORKFLOW DOES"
        title={<>Lease as a first-class workflow. <span className="text-[var(--color-text-2)]">Not a spreadsheet attachment.</span></>}
        columns={3}
        items={[
          { title: "Configurable lease builder", body: "Build the lease structure once — escalators, indexation, CAM, free rent — and apply it across the portfolio." },
          { title: "Auto-escalation",            body: "Annual / CPI / fixed escalations trigger automatically. Notice letters generate on schedule." },
          { title: "Renewal orchestration",       body: "Renewal windows tracked per lease. Customer-facing renewal flow with audit trail." },
          { title: "Anchor-tenant changes",       body: "Swap, add, or remove anchor tenants with structural impact tracked end-to-end." },
          { title: "Multi-vendor MOUs",           body: "Master agreements with site-level addenda. SLA tracking per vendor. Variance reporting." },
          { title: "ERP write-back",              body: "Lease cash flow recognized in Oracle / SAP / NetSuite. AR sync. No double entry." },
        ]}
      />

      <Testimonial
        quote={
          <>
            In the first year, the lease module recovered <strong className="font-semibold">3.8% of revenue</strong> we didn't know we were missing — escalations and anchor-tenant changes that had simply fallen through. The platform paid for itself in months on this line alone.
          </>
        }
        name="Operator"
        role="Tower-co customer · MENA region"
        initials="MN"
      />

      <FAQ
        eyebrow="LEASE LEADER QUESTIONS"
        title="Asked by every tower-co CFO."
        items={[
          { q: "Can we migrate complex existing leases?", a: <>Yes — we've migrated portfolios of 5,000+ leases with custom escalation logic. Median migration 6–10 weeks.</> },
          { q: "Does this support FX and multi-currency?",  a: <>Yes — multi-currency, FX revaluation, region-pinned compliance. Live customers in MENA, EU, APAC.</> },
          { q: "How does it handle structural changes?",     a: <>Anchor-tenant change orchestration is a built-in workflow: structural review, lease addendum, financial impact, evidenced inspection. End-to-end auditable.</> },
          { q: "Can finance trust the numbers?",              a: <>Yes — every lease event syncs to ERP with full audit trail. We've passed SOC 2 Type II and Big Four audits at customer sites.</> },
        ]}
      />

      <CtaBand
        eyebrow="STOP THE LEAK"
        title={<>Recover the revenue <span className="grad-text">already on your balance sheet.</span></>}
        primary={{ href: "/demo", label: "Book a demo" }}
        secondary={{ href: "/industries/tower-companies", label: "For tower companies" }}
      />
    </>
  );
}
