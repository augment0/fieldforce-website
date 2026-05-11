import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageHero } from "@/components/sections/page-hero";
import { StatBar } from "@/components/sections/stat-bar";
import { FeatureSplit } from "@/components/sections/feature-split";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { Testimonial } from "@/components/sections/testimonial";
import { IntegrationGrid } from "@/components/sections/integration-grid";
import { FAQ } from "@/components/sections/faq";
import { CtaBand } from "@/components/sections/cta-band";
import { TelecomIllo } from "@/components/illustrations/use-case-illos";

export const metadata: Metadata = {
  title: "Telecom solutions",
  description:
    "From 5G site builds to fiber drops to small-cell densification, Fieldforce is how operators deploy at carrier scale and run at carrier reliability.",
};

export default function TelecomPage() {
  return (
    <>
      <Breadcrumb items={[{ href: "/industries", label: "Industries" }]} current="Telecom" />

      <PageHero
        eyebrow="SOLUTIONS / TELECOM"
        title={
          <>
            Build the network. Run the network.
            <br />
            <span className="text-[var(--color-text-2)]">One platform.</span>
          </>
        }
        body="From 5G site builds to fiber drops to small-cell densification, Fieldforce is how operators deploy at carrier scale and run at carrier reliability. DISH, Veon, Zain, and operators in 23 countries trust Fieldforce with $10B+ of network assets."
        primaryCta={{ href: "/demo", label: "Book a demo" }}
        secondaryCta={{ href: "mailto:engineering@fieldforce.com", label: "Talk to engineering" }}
        visual={
          <div className="grid aspect-[1.1/1] place-items-center rounded-[14px] border border-[var(--color-line)] bg-[radial-gradient(ellipse_at_center,var(--color-accent-glow),transparent_70%),var(--color-bg-inset)] p-10">
            <TelecomIllo />
          </div>
        }
      />

      <StatBar
        items={[
          { value: "$10B+",  label: "network assets" },
          { value: "12,000+", label: "sites under management" },
          { value: "23",     label: "countries" },
          { value: "94%",    label: "first-pass QA accuracy" },
        ]}
      />

      <section
        id="problem"
        className="py-[clamp(80px,10vw,140px)] border-b border-[var(--color-line-subtle)]"
      >
        <div className="shell shell-narrow">
          <p className="font-mono text-[11px] tracking-[0.12em] text-[var(--color-text-3)]">
            ── THE PROBLEM ──
          </p>
          <h2 className="display-lg mt-5">
            Telecom networks are now built and run by ten companies at once.
          </h2>
          <p className="mt-6 text-[clamp(16px,1.3vw,18px)] leading-[1.65] text-[var(--color-text-2)]">
            Operators, tower-cos, MSPs, OEMs, lessors, permit authorities, civil
            contractors, RF engineers, NOCs, and a finance team that wants to know
            what every dollar bought. Most "platforms" pretend that complexity
            doesn't exist.
          </p>
          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {[
              "Builds slip because permits, leases, and crew schedules don't talk.",
              "Operations chase tickets that originated as missing field data three weeks earlier.",
              "Vendor invoices arrive in nine formats and reconcile against nothing.",
              "The CFO sees a number; the field sees a different one.",
            ].map((s) => (
              <li
                key={s}
                className="flex items-start gap-3 rounded-[10px] border border-[var(--color-line-subtle)] bg-[var(--color-bg-raised)] p-4 text-[14.5px] text-[var(--color-text)]"
              >
                <span
                  aria-hidden
                  className="mt-[7px] inline-block h-[5px] w-[5px] flex-shrink-0 rounded-full bg-[var(--color-warn)]"
                />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FeatureSplit
        eyebrow="FOR MOBILE OPERATORS"
        title={<>Carrier-scale rollouts. <span className="text-[var(--color-text-2)]">Carrier-grade ops.</span></>}
        body={
          <p>
            Plan a build, dispatch a crew, validate a splice, close a permit,
            reconcile an invoice, predict an SLA breach: same platform, same
            primitives. The same teams that scale your build are the ones that
            run your network — finally on one workflow.
          </p>
        }
        bullets={[
          "5G site acquisition, build, and densification at scale",
          "Fiber drops with span-by-span evidence",
          "Small-cell deployments with 24h site go-live",
          "OSS/BSS-aware: TM Forum Open APIs supported",
        ]}
        cta={{ href: "#mobile-operators", label: "More for mobile operators" }}
        visual={<OperatorMetrics />}
      />

      <FeatureSplit
        reverse
        eyebrow="FOR TOWER COMPANIES"
        title={<>Asset lifecycle, <span className="text-[var(--color-text-2)]">earned per site.</span></>}
        body={
          <p>
            Site lifecycle, lease management, structural inspections, anchor
            tenant changes, multi-vendor coordination — at the granularity tower
            companies need to bill correctly and stay safe.
          </p>
        }
        bullets={[
          "Lease management with auto-escalation and renewals",
          "Anchor tenant change orchestration",
          "Structural inspections via Evidence (computer vision QA)",
          "Multi-vendor MOU and SLA tracking",
        ]}
        cta={{ href: "#tower-companies", label: "More for tower companies" }}
        visual={<LeaseMock />}
      />

      <FeatureGrid
        eyebrow="WHAT YOU GET"
        title={<>Built for telecom. <span className="text-[var(--color-text-2)]">Hardened across 23 countries.</span></>}
        columns={3}
        items={[
          { title: "Permit-aware Dispatch", body: "Crews re-routed automatically when a permit slips, against weather, parts, and SLA risk." },
          { title: "11-day SLA forecast",   body: "Forecast surfaces sites that will breach SLA before they do — median 11 days early." },
          { title: "CV photo QA",            body: "Evidence runs computer vision on every site photo. Closure missing? Work order doesn't close." },
          { title: "OSS/BSS aware",          body: "TM Forum APIs supported. Reads inventory, writes work-order state back." },
          { title: "Multi-vendor reconcile", body: "Nine vendor invoice formats. One queue. Variance over your threshold flagged in seconds." },
          { title: "Carrier-grade audit",    body: "Every action immutably logged. SOC 2 Type II, ISO 27001, region-pinned residency." },
        ]}
      />

      <Testimonial
        quote={
          <>
            We're three years into our partnership with Fieldforce. We've
            completely digitized asset management and field operations across
            our network.{" "}
            <strong className="font-semibold">
              Four systems retired. Crew-day waste cut 22%.
            </strong>
          </>
        }
        name="Haynes Griffin"
        role="CEO · SmartSky Networks"
        initials="HG"
      />

      <IntegrationGrid
        eyebrow="TELECOM-NATIVE INTEGRATIONS"
        title={<>The systems telecom operators actually run.</>}
        categories={[
          { label: "OSS / BSS",        items: ["Netcracker", "Amdocs", "CSG"] },
          { label: "ERP & Finance",    items: ["Oracle EBS", "SAP S/4", "NetSuite"] },
          { label: "NOC & Monitoring", items: ["ServiceNow", "Solarwinds", "Datadog"] },
          { label: "GIS & Design",     items: ["ArcGIS", "3-GIS", "Bentley"] },
          { label: "Identity",         items: ["Okta", "Azure AD"] },
          { label: "Standards",        items: ["TM Forum APIs", "SNMP", "MEF"] },
        ]}
      />

      <FAQ
        eyebrow="DISCOVERY QUESTIONS"
        title="The questions a real telecom buyer asks."
        items={[
          { q: "How does Fieldforce differ from Sitetracker / IFS?", a: <>Sitetracker is a Salesforce app limited by Salesforce's data model and pricing. IFS is an ERP module — heavy implementation, slow to deploy. Fieldforce was built for telecom from the first commit. First site live in 24 hours, telecom + EV + IoT on the same platform.</> },
          { q: "Can we keep Salesforce / Oracle as the system of record?", a: <>Yes. Fieldforce reads from your existing systems and writes back. Your CRM stays the customer source of truth; your ERP stays the finance source of truth.</> },
          { q: "How fast does a first site go live?", a: <>24 hours. We have customers in production who went from contract to a real work order moving through the platform in a single working day.</> },
          { q: "Do you support TM Forum Open APIs?", a: <>Yes — TMF 622 (Product Ordering), TMF 638 (Service Inventory), TMF 641 (Service Ordering) supported out of the box.</> },
          { q: "What about MENA / EU data residency?", a: <>Region-pinned data residency in US, EU, MENA, and APAC. Our customers in Saudi Arabia, UAE, Egypt, and Pakistan run on regional regions.</> },
        ]}
      />

      <CtaBand
        eyebrow="SEE FIELDFORCE ON YOUR NETWORK"
        title={<>Your build deserves <span className="grad-text">better tooling.</span></>}
        primary={{ href: "/demo", label: "Book a demo" }}
        secondary={{ href: "mailto:engineering@fieldforce.com", label: "Talk to engineering" }}
        fineprint="First site live in 24 hours."
      />
    </>
  );
}

function OperatorMetrics() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {[
        { v: "1,847", l: "active sites" },
        { v: "94%",   l: "first-pass QA" },
        { v: "11d",   l: "SLA lead time" },
        { v: "22%",   l: "crew-day saved" },
      ].map((m) => (
        <div
          key={m.l}
          className="rounded-[10px] border border-[var(--color-line-subtle)] bg-[var(--color-bg-inset)] p-5"
        >
          <div className="font-display text-[28px] font-semibold leading-none tracking-[-0.022em] text-[var(--color-accent)]">
            {m.v}
          </div>
          <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--color-text-3)]">
            {m.l}
          </div>
        </div>
      ))}
    </div>
  );
}

function LeaseMock() {
  return (
    <div className="overflow-hidden rounded-[10px] border border-[var(--color-line-subtle)] bg-[var(--color-bg-inset)] font-mono text-[12px]">
      {[
        ["TWR-22841", "Operator A", "2026-01-12", "active"],
        ["TWR-22842", "Operator B", "2027-06-30", "renewing"],
        ["TWR-22843", "Operator A", "2025-11-04", "expired"],
        ["TWR-22844", "Operator C", "2028-04-22", "active"],
      ].map(([id, op, date, status]) => (
        <div
          key={id}
          className="grid grid-cols-[100px_1fr_110px_88px] gap-3 border-b border-[var(--color-line-subtle)] px-4 py-3 last:border-b-0"
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
                  : "text-[var(--color-accent)]"
            }
          >
            {status}
          </span>
        </div>
      ))}
    </div>
  );
}
