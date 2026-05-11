import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageHero } from "@/components/sections/page-hero";
import { StatBar } from "@/components/sections/stat-bar";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { Testimonial } from "@/components/sections/testimonial";
import { FAQ } from "@/components/sections/faq";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Cut deployment cost | Solutions",
  description:
    "20%+ capex and opex reduction across infrastructure builds. Crew-day waste, vendor variance, and permit overruns surfaced before they hit the P&L.",
};

export default function CutCostPage() {
  return (
    <>
      <Breadcrumb items={[{ href: "/solutions", label: "Solutions" }]} current="Cut deployment cost" />

      <PageHero
        eyebrow="SOLUTIONS / CUT DEPLOYMENT COST"
        title={
          <>
            Cut capex and opex by <span className="grad-text">20%+.</span>
            <br />
            <span className="text-[var(--color-text-2)]">Without cutting scope.</span>
          </>
        }
        body="The cost of next-gen infrastructure deployment isn't going down — but it can. Fieldforce surfaces the structural waste that legacy tools hide: crew-day idle, vendor invoice variance, permit overruns, lease leakage, and rework caused by missing field data."
        primaryCta={{ href: "/resources/roi", label: "Estimate your savings" }}
        secondaryCta={{ href: "/demo", label: "Book a demo" }}
      />

      <StatBar
        items={[
          { value: "20%+", label: "capex / opex reduction" },
          { value: "22%",  label: "crew-day waste eliminated" },
          { value: "$200B", label: "decade savings opportunity (industry)" },
          { value: "6 → 1", label: "tools consolidated (avg.)" },
        ]}
      />

      <FeatureGrid
        eyebrow="WHERE THE MONEY ACTUALLY LEAKS"
        title={<>Five cost drains <span className="text-[var(--color-text-2)]">your current stack can't see.</span></>}
        columns={3}
        items={[
          { title: "Crew-day idle",          body: "Permits slip, parts don't show, the truck rolls anyway. Surface it in real time, redeploy the crew." },
          { title: "Vendor invoice variance", body: "Reconcile against the actual work, not the PO. Variance over threshold flagged automatically." },
          { title: "Lease leakage",          body: "Escalations missed, renewals missed, anchor-tenant changes uncharged. Tower-co customers add ~5% to revenue here alone." },
          { title: "Permit overruns",        body: "Track every permit by site, by jurisdiction, by SLA. Re-dispatch crews before idle time accrues." },
          { title: "Rework from bad data",   body: "Missing closure photos = work order doesn't close. Rework rates drop 30–50%." },
          { title: "Tool sprawl",            body: "Customers retire 4–6 systems on average. Each carries its own license, integration, and ops headcount." },
        ]}
      />

      <Testimonial
        quote={
          <>
            We modeled the savings before signing — Fieldforce <strong className="font-semibold">paid for itself in five months</strong>. Three years in, the unit economics are still moving in the right direction.
          </>
        }
        name="Haynes Griffin"
        role="CEO · SmartSky Networks"
        initials="HG"
      />

      <FAQ
        eyebrow="CFO-LEVEL QUESTIONS"
        title="What finance leaders ask before they sign."
        items={[
          { q: "What's the payback period?",        a: <>Median 5–8 months for telecom and tower-co deployments at 1,000+ sites. We'll model it for your network in the ROI calculator or on a demo.</> },
          { q: "How is the saving measured?",        a: <>Three lines: deployment cycle time, crew-day waste, and vendor invoice variance. All instrumented in the platform — your CFO sees the same numbers we do.</> },
          { q: "Does it require ripping out the ERP?", a: <>No. Fieldforce reads from Oracle / SAP / NetSuite and writes back. The savings come from closing the gap between field and finance, not replacing the GL.</> },
          { q: "How fast can we see savings?",        a: <>First measurable savings inside one quarter on a 500+ site footprint.</> },
        ]}
      />

      <CtaBand
        eyebrow="MODEL THE SAVINGS"
        title={<>See what <span className="grad-text">20%+ looks like</span> on your network.</>}
        primary={{ href: "/resources/roi", label: "Open the ROI calculator" }}
        secondary={{ href: "/demo", label: "Book a demo" }}
      />
    </>
  );
}
