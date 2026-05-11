import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageHero } from "@/components/sections/page-hero";
import { FeatureSplit } from "@/components/sections/feature-split";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { FAQ } from "@/components/sections/faq";
import { CtaBand } from "@/components/sections/cta-band";
import {
  VizExecutiveDash,
  VizForecastMatrix,
} from "@/components/illustrations/platform-vizzes";

export const metadata: Metadata = {
  title: "Analytics & Insights",
  description:
    "Numbers your teams trust. Numbers your CFO trusts. Every metric in Fieldforce is sourced — back to the work order, the asset, the photo, the invoice.",
};

export default function AnalyticsPage() {
  return (
    <>
      <Breadcrumb items={[{ href: "/platform", label: "Platform" }]} current="Analytics" />

      <PageHero
        eyebrow="PLATFORM / ANALYTICS"
        title={
          <>
            Numbers your teams trust.
            <br />
            <span className="text-[var(--color-text-2)]">
              Numbers your CFO trusts.
            </span>
          </>
        }
        body="Every metric in Fieldforce is sourced — back to the work order, the asset, the photo, the invoice. Analytics here aren't reports about the system; they're the system."
        primaryCta={{ href: "/demo", label: "Book a demo" }}
        secondaryCta={{ href: "mailto:engineering@fieldforce.com", label: "Talk to engineering" }}
      />

      <FeatureSplit
        eyebrow="ONE SOURCE OF TRUTH"
        title={<>The same number on every screen. <span className="text-[var(--color-text-2)]">No reconciliation gap.</span></>}
        body={
          <p>
            The number the CFO sees is the same number the field crew submitted.
            Every metric traces to a row — work order, asset, photo, invoice —
            and every row is signed and time-stamped.
          </p>
        }
        bullets={[
          "Drill from KPI down to the work order in one click",
          "Every number queryable in SQL, exportable to your warehouse",
          "Audit-grade lineage from dashboard to source",
        ]}
        visual={<VizExecutiveDash />}
      />

      <FeatureGrid
        eyebrow="THREE LAYERS OF INSIGHT"
        title={<>Operational. Financial. <span className="text-[var(--color-text-2)]">Strategic.</span></>}
        columns={3}
        items={[
          { title: "Operational",  body: "Sites in motion, crew utilization, SLA risk, work-order throughput." },
          { title: "Financial",    body: "Spend vs. budget, vendor variance, asset depreciation, margin recovery." },
          { title: "Strategic",    body: "Vertical comparison, market efficiency, year-over-year trends." },
        ]}
      />

      <FeatureSplit
        reverse
        eyebrow="FORECASTED, NOT JUST REPORTED"
        title={<>Forecast feeds dashboards <span className="text-[var(--color-text-2)]">directly.</span></>}
        body={
          <p>
            The Forecast agent surfaces SLA-risk scores, vendor-velocity
            projections, and asset-failure probability in your dashboards —
            not in a separate AI tool. Your weekly review opens with what's
            about to happen, not what already did.
          </p>
        }
        bullets={[
          "11-day median lead time on SLA risk",
          "Per-asset failure scores updated daily",
          "Vendor velocity tracked across 9 invoice formats",
        ]}
        cta={{ href: "/agents/forecast", label: "How Forecast works" }}
        visual={<VizForecastMatrix />}
      />

      <FeatureGrid
        eyebrow="EXPORT ANYWHERE"
        title={<>Your warehouse, <span className="text-[var(--color-text-2)]">your tools, your governance.</span></>}
        columns={3}
        items={[
          { title: "Warehouse sync",  body: "Snowflake, BigQuery, Databricks. Daily, hourly, or on-event." },
          { title: "BI tools",        body: "Looker, Tableau, Hex, Sigma — query the same metrics." },
          { title: "Webhooks + API",  body: "Push events to Slack, Teams, or your custom analytics pipeline." },
        ]}
      />

      <FAQ
        eyebrow="ANALYTICS FAQ"
        title="Questions BI and finance teams ask."
        items={[
          { q: "Can our data team write custom dashboards?", a: <>Yes — every metric is queryable in SQL with row-level RBAC. Connect Looker, Tableau, Hex, Sigma, or a custom warehouse view.</> },
          { q: "Does this replace our BI tool?", a: <>No. Fieldforce is the source of truth; your BI tool is the presentation layer. We sync daily/hourly/on-event into your warehouse.</> },
          { q: "What's the SQL query latency?", a: <>Sub-second on typical aggregations across 12,000+ sites. We materialize common views and push large queries to your warehouse.</> },
          { q: "How are forecasts generated?", a: <>Per-tenant models trained on your historical data. No cross-tenant leakage. See <a className="text-[var(--color-accent)] underline-offset-[3px] hover:underline" href="/agents/forecast">Forecast</a>.</> },
        ]}
      />

      <CtaBand
        eyebrow="NUMBERS YOUR LEADERSHIP TRUSTS"
        title={<>Build dashboards on <span className="grad-text">audit-grade data.</span></>}
        primary={{ href: "/demo", label: "Book a demo" }}
        secondary={{ href: "mailto:engineering@fieldforce.com", label: "Talk to engineering" }}
      />
    </>
  );
}
