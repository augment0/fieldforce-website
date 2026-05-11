import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { StatBar } from "@/components/sections/stat-bar";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { Agents } from "@/components/sections/agents";
import { IntegrationGrid } from "@/components/sections/integration-grid";
import { FAQ } from "@/components/sections/faq";
import { CtaBand } from "@/components/sections/cta-band";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ArrowIcon } from "@/components/ui/button";
import { Constellation } from "@/components/illustrations/constellation";

export const metadata: Metadata = {
  title: "Platform — The AI operations platform for infrastructure",
  description:
    "Plan, build, operate, and monetize critical infrastructure on one AI-first platform. Lifecycle-complete, vertical-flexible, hardened across 23 countries.",
};

const lifecycle = [
  {
    href: "/platform/plan",
    eyebrow: "STAGE 1",
    title: "Plan & Design",
    body: "Align sites, leases, permits, and capital for handoff.",
    metric: "1 record",
    metricLabel: "site, lease, permit, capital",
    cta: "Explore Plan",
  },
  {
    href: "/platform/build",
    eyebrow: "STAGE 2",
    title: "Build & Deploy",
    body: "Execute builds with schedule, cost, and quality control.",
    metric: "25–30%",
    metricLabel: "faster deployment",
    cta: "Explore Build",
  },
  {
    href: "/platform/operate",
    eyebrow: "STAGE 3",
    title: "Operate & Maintain",
    body: "Coordinate field crews to meet SLAs at carrier reliability.",
    metric: "2.34M",
    metricLabel: "work orders YTD",
    cta: "Explore Operate",
  },
  {
    href: "/platform/monetize",
    eyebrow: "STAGE 4",
    title: "Monitor & Monetize",
    body: "Track asset condition, lease portfolios, financial impact.",
    metric: "$10B+",
    metricLabel: "assets tracked",
    cta: "Explore Monetize",
  },
];

export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="THE PLATFORM"
        title={
          <>
            One platform.
            <br />
            <span className="grad-text">Every stage of the lifecycle.</span>
          </>
        }
        body="Plan, build, operate, and monetize critical infrastructure on one AI-first platform. Built around primitives that don't care if the asset is a tower, a charger, a gateway, or a streetlight."
        primaryCta={{ href: "/demo", label: "Book a demo" }}
        secondaryCta={{ href: "/why", label: "Why Fieldforce" }}
        visual={<Constellation className="h-full w-full" />}
      />

      <StatBar
        items={[
          { value: "$10B+",   label: "assets managed" },
          { value: "12,000+", label: "sites under management" },
          { value: "23",      label: "countries" },
          { value: "24h",     label: "first site live" },
        ]}
      />

      {/* LIFECYCLE — the new spine of the platform IA */}
      <section className="py-[clamp(80px,10vw,140px)]">
        <div className="shell">
          <Reveal>
            <header className="mb-12 max-w-[780px]">
              <Eyebrow>THE LIFECYCLE</Eyebrow>
              <h2 className="display-lg mt-5">
                Plan. Build. Operate. Monetize.{" "}
                <span className="text-[var(--color-text-2)]">All on one platform.</span>
              </h2>
              <p className="mt-5 max-w-[58ch] text-[clamp(16px,1.2vw,18px)] leading-[1.6] text-[var(--color-text-2)]">
                Most platforms cover one stage of the infrastructure lifecycle.
                Fieldforce was designed for all four — so the site record you
                acquired in year 1 is the same one the operator queries in year
                12. No re-keying. No reconciliation. No re-implementation.
              </p>
            </header>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {lifecycle.map((stage, i) => (
              <Reveal key={stage.href} delay={i * 0.04}>
                <Link
                  href={stage.href}
                  className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-[14px] border border-[var(--color-line)] bg-[var(--color-bg-raised)] p-6 transition-[border-color,transform] duration-200 hover:-translate-y-[2px] hover:border-[var(--color-line-strong)]"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,var(--color-accent-glow),transparent_45%)] opacity-30"
                  />
                  <span className="relative font-mono text-[10.5px] uppercase tracking-[0.14em] text-[var(--color-accent)]">
                    {stage.eyebrow}
                  </span>
                  <h3 className="relative text-[20px] font-semibold tracking-[-0.018em]">{stage.title}</h3>
                  <p className="relative text-[14.5px] leading-[1.55] text-[var(--color-text-2)]">
                    {stage.body}
                  </p>
                  <div className="relative mt-2 flex items-baseline gap-2 border-t border-[var(--color-line-subtle)] pt-4">
                    <span className="font-display text-[22px] font-semibold leading-none tracking-[-0.022em] text-[var(--color-accent)]">
                      {stage.metric}
                    </span>
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-[var(--color-text-3)]">
                      {stage.metricLabel}
                    </span>
                  </div>
                  <span className="relative mt-auto inline-flex items-center gap-[6px] pt-2 text-[13.5px] font-medium text-[var(--color-accent)] transition-[gap] group-hover:gap-[10px]">
                    {stage.cta} <ArrowIcon />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MODULES — the primitives that make the lifecycle work */}
      <FeatureGrid
        eyebrow="THE PRIMITIVES"
        title={
          <>
            Six primitives.{" "}
            <span className="text-[var(--color-text-2)]">Every infrastructure.</span>
          </>
        }
        lede="Don't model your business around the platform. Model the platform around your business — using primitives that don't care if it's a tower, a charger, or a gateway."
        columns={3}
        items={[
          { title: "Sites",        body: "Every location, with its permits, history, photos, and assets, on one timeline.", href: "/platform/sites" },
          { title: "Assets",       body: "Every tower, charger, gateway, and splice — modeled, monitored, maintained.",      href: "/platform/assets" },
          { title: "Work",         body: "Every deployment, repair, and inspection — scheduled, dispatched, closed with evidence.", href: "/platform/work" },
          { title: "Evidence",     body: "Every photo, GPS pin, signature, and test result — verified before close-out.",   href: "/platform/evidence" },
          { title: "Integrations", body: "Reads from your OSS/BSS, writes back to your ERP, talks OCPP, MQTT, SNMP.",        href: "/platform/integrations" },
          { title: "Security",     body: "SOC 2 Type II, ISO 27001, region-pinned residency, immutable audit log.",            href: "/platform/security" },
        ]}
      />

      <Agents />

      <IntegrationGrid
        eyebrow="INTEGRATIONS"
        title={<>If it's already in your stack, <span className="text-[var(--color-text-2)]">we read from it.</span></>}
        body="Fieldforce reads from your existing systems and writes back to them. Your CRM stays the system of record for customers, your ERP for finance, your NOC for telemetry — and Fieldforce becomes the system of record for the field."
        categories={[
          { label: "ERP & Finance",     items: ["Oracle EBS", "SAP", "NetSuite", "Workday"] },
          { label: "OSS / BSS",         items: ["Netcracker", "Amdocs", "CSG"] },
          { label: "Charging protocols", items: ["OCPP 1.6/2.0.1", "ISO 15118", "OICP"] },
          { label: "ITSM & NOC",        items: ["ServiceNow", "Solarwinds", "Datadog"] },
          { label: "Identity",          items: ["Okta", "Azure AD", "Google Workspace"] },
          { label: "Device & telemetry", items: ["MQTT", "SNMP", "AWS IoT", "Azure IoT"] },
        ]}
        footnote="Don't see yours? We build new integrations in 1–4 weeks. Talk to engineering."
      />

      <FAQ
        eyebrow="QUESTIONS WE GET"
        title="The honest answers."
        items={[
          { q: "How does Fieldforce differ from Sitetracker, Render Networks, or IFS?", a: <>We were built for the field, not adapted to it. Sitetracker is a Salesforce app limited by Salesforce's data model and pricing. IFS is an ERP module. Render is fiber-only. Fieldforce was designed around primitives — sites, assets, work, evidence — and an AI fleet that actually acts. That's why operators run telecom, EV, and IoT on one platform.</> },
          { q: "How fast does the first site go live?",                                     a: <>24 hours. No SI engagement, no quarter-long onboarding, no custom code.</> },
          { q: "Can we keep Salesforce / Oracle / SAP as the system of record?",            a: <>Yes. Fieldforce reads from your existing systems and writes back. Your CRM stays the source of truth for customer; your ERP for finance; we become the source of truth for the field.</> },
          { q: "How does AI take action without breaking change-control?",                  a: <>Every agent action is logged, reversible, and gated by approval rules you configure per workflow. Dispatch can re-route a crew automatically; Reconcile can flag a variance, but only post the journal entry once you approve.</> },
          { q: "What about data residency and compliance?",                                  a: <>SOC 2 Type II, ISO 27001, GDPR. Region-pinned residency in US, EU, MENA, APAC. Industry-specific compliance (NEVI/AFIR, TM Forum APIs) — request our trust pack.</> },
        ]}
      />

      <CtaBand
        eyebrow="SEE FIELDFORCE ON YOUR NETWORK"
        title={
          <>
            The infrastructure of the modern world{" "}
            <span className="grad-text">runs on Fieldforce.</span>
          </>
        }
        primary={{ href: "/demo", label: "Book a demo" }}
        secondary={{ href: "mailto:engineering@fieldforce.com", label: "Talk to engineering" }}
        fineprint="First site live in 24 hours. No code. No SI. No quarter-long onboarding."
      />
    </>
  );
}
