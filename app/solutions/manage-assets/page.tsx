import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageHero } from "@/components/sections/page-hero";
import { StatBar } from "@/components/sections/stat-bar";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { Testimonial } from "@/components/sections/testimonial";
import { FAQ } from "@/components/sections/faq";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Manage assets at scale | Solutions",
  description:
    "One ledger for every site, every asset, every lease — across $10B+ of infrastructure. No more 'which spreadsheet is current?'",
};

export default function ManageAssetsPage() {
  return (
    <>
      <Breadcrumb items={[{ href: "/solutions", label: "Solutions" }]} current="Manage assets at scale" />

      <PageHero
        eyebrow="SOLUTIONS / MANAGE ASSETS AT SCALE"
        title={
          <>
            One ledger.
            <br />
            <span className="text-[var(--color-text-2)]">Every site, every asset, every lease.</span>
          </>
        }
        body="Most operators can't answer 'what do we own and where is it?' from a single source. Fieldforce gives infrastructure operators a single, ERP-grade ledger across $10B+ in deployed assets — with the lifecycle, warehouse, and field context already attached."
        primaryCta={{ href: "/demo", label: "Book a demo" }}
        secondaryCta={{ href: "/platform/assets", label: "See the Assets module" }}
      />

      <StatBar
        items={[
          { value: "$10B+",   label: "infrastructure assets" },
          { value: "12,000+", label: "sites under management" },
          { value: "99.97%",  label: "data integrity" },
          { value: "1 model", label: "asset, site, work, evidence" },
        ]}
      />

      <FeatureGrid
        eyebrow="THE ASSET STORY"
        title={<>From PO to retirement. <span className="text-[var(--color-text-2)]">Tracked, evidenced, reconciled.</span></>}
        columns={3}
        items={[
          { title: "Warehouse + field",         body: "From in-bound receipt to deployed-in-rack — one record, no hand-offs lost." },
          { title: "Full lifecycle",            body: "Acquired → deployed → maintained → repaired → retired. Each transition evidenced." },
          { title: "Repair & return",           body: "RMA workflows, swap-in tracking, warranty exposure — all on one queue." },
          { title: "ERP-grade ledger",          body: "Reconciles to Oracle / SAP / NetSuite. Your CFO and your network ops see the same number." },
          { title: "GIS + spatial context",     body: "Every asset lives at a site, every site lives on a map. ArcGIS, 3-GIS, Bentley supported." },
          { title: "Audit-ready",               body: "Immutable change log. SOC 2 Type II, ISO 27001. Region-pinned data residency." },
        ]}
      />

      <Testimonial
        quote={
          <>
            We finally know what we own. <strong className="font-semibold">Asset write-downs dropped 40%</strong> in the first year because the data is actually trustworthy.
          </>
        }
        name="Haynes Griffin"
        role="CEO · SmartSky Networks"
        initials="HG"
      />

      <FAQ
        eyebrow="ASSET LEADERSHIP QUESTIONS"
        title="The detail an asset owner wants up front."
        items={[
          { q: "Can we migrate from Excel / Sitetracker / IFS?", a: <>Yes — we've migrated customers off all three. Median migration is 4–6 weeks with no production outage.</> },
          { q: "Does this replace the ERP asset register?",      a: <>No — it complements it. ERP stays the financial register; Fieldforce becomes the operational register. The two reconcile automatically.</> },
          { q: "How does it handle multi-vendor RMAs?",          a: <>RMA workflows per vendor, swap tracking, warranty exposure dashboard. We support 40+ OEM workflows out of the box.</> },
          { q: "What about EV chargers and IoT gateways?",       a: <>Same asset model — telecom asset, EV charger, smart-city cabinet, IoT gateway all live in one ledger. See <a className="text-[var(--color-accent)] underline-offset-2 hover:underline" href="/industries">industries</a>.</> },
        ]}
      />

      <CtaBand
        eyebrow="GET TO ONE LEDGER"
        title={<>Stop guessing <span className="grad-text">what you own.</span></>}
        primary={{ href: "/demo", label: "Book a demo" }}
        secondary={{ href: "/platform/assets", label: "See the Assets module" }}
      />
    </>
  );
}
