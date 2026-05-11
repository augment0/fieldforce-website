import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { StatBar } from "@/components/sections/stat-bar";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { FeatureSplit } from "@/components/sections/feature-split";
import { Agents } from "@/components/sections/agents";
import { IntegrationGrid } from "@/components/sections/integration-grid";
import { FAQ } from "@/components/sections/faq";
import { CtaBand } from "@/components/sections/cta-band";
import { Constellation } from "@/components/illustrations/constellation";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "One platform for sites, assets, work, evidence, and intelligence. Built for the field, hardened for telecom, EV, and IoT operations.",
};

export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="THE PLATFORM"
        title={
          <>
            One platform.
            <br />
            <span className="text-[var(--color-text-2)]">
              Sites, assets, work, evidence, intelligence.
            </span>
          </>
        }
        body="Fieldforce is built around five primitives — the same five whether you're deploying 5G small cells in Munich, commissioning chargers in Texas, or provisioning 8,400 IoT gateways across six metros."
        primaryCta={{ href: "/demo", label: "Book a demo" }}
        secondaryCta={{ href: "mailto:engineering@fieldforce.com", label: "Talk to engineering" }}
        visual={<Constellation className="h-full w-full" />}
      />

      <StatBar
        items={[
          { value: "$10B+", label: "assets managed" },
          { value: "12,000+", label: "sites under management" },
          { value: "23",      label: "countries" },
          { value: "24h",     label: "first site live" },
        ]}
      />

      <FeatureGrid
        eyebrow="THE PRIMITIVES"
        title={
          <>
            Five primitives.{" "}
            <span className="text-[var(--color-text-2)]">Every infrastructure.</span>
          </>
        }
        lede="Don't model your business around the platform. Model the platform around your business — using primitives that don't care if it's a tower, a charger, or a gateway."
        columns={3}
        items={[
          {
            title: "Sites",
            body: "Every location, with its permits, history, photos, and assets, on one timeline.",
            href: "/platform/sites",
          },
          {
            title: "Assets",
            body: "Every tower, charger, gateway, and splice — modeled, monitored, maintained.",
            href: "/platform/assets",
          },
          {
            title: "Work",
            body: "Every deployment, repair, and inspection — scheduled, dispatched, closed with evidence.",
            href: "/platform/work",
          },
          {
            title: "Evidence",
            body: "Every photo, GPS pin, signature, and test result — verified before a work order closes.",
            href: "/platform/evidence",
          },
          {
            title: "Integrations",
            body: "Reads from your OSS/BSS, writes back to your ERP, talks OCPP, MQTT, SNMP.",
            href: "/platform/integrations",
          },
          {
            title: "Security",
            body: "SOC 2 Type II, ISO 27001, region-pinned residency, immutable audit log.",
            href: "/platform/security",
          },
        ]}
      />

      <FeatureSplit
        eyebrow="A WORK ORDER, END-TO-END"
        title={<>One timeline. <span className="text-[var(--color-text-2)]">Every team.</span></>}
        body={
          <p>
            From site acquisition to close-out, every team — RF, civil,
            integration, NOC, finance — sees the same timeline in their
            language, on their device. The work order doesn't close until the
            evidence agrees.
          </p>
        }
        bullets={[
          "Permits, leases, and crew schedules in one source of truth",
          "Field photos verified by computer vision before close-out",
          "Vendor invoices reconciled against the work that actually happened",
          "Every action immutably logged for SOC 2 audit",
        ]}
        cta={{ href: "/platform/work", label: "How Work works" }}
        visual={<WorkOrderMock />}
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
          {
            q: "How does Fieldforce differ from Sitetracker, Render Networks, or IFS?",
            a: <>We were built for the field, not adapted to it. Sitetracker is a Salesforce app; IFS is an ERP module; Render is fiber-only. Fieldforce was designed around primitives — sites, assets, work, evidence — that don't care what infrastructure you're running. That's why operators run telecom, EV, and IoT on one platform.</>,
          },
          {
            q: "How fast does the first site go live?",
            a: <>24 hours. No SI engagement, no quarter-long onboarding, no custom code. Customers go from contract to a real work order moving through the system in a single working day.</>,
          },
          {
            q: "Can we keep Salesforce / Oracle / SAP as the system of record?",
            a: <>Yes. Fieldforce reads from your existing systems and writes back. Your CRM stays the source of truth for customer; your ERP stays the source of truth for finance; we become the source of truth for the field.</>,
          },
          {
            q: "How does AI take action without breaking change-control?",
            a: <>Every agent action is logged, reversible, and gated by approval rules you configure per workflow. Dispatch can re-route a crew automatically; Reconcile can flag a variance, but only post the journal entry once you approve.</>,
          },
          {
            q: "What about data residency and compliance?",
            a: <>SOC 2 Type II, ISO 27001, GDPR. Region-pinned data residency in US, EU, MENA, APAC. Industry-specific compliance (NEVI/AFIR for charging, TM Forum APIs for telecom) — request our trust pack.</>,
          },
        ]}
      />

      <CtaBand
        eyebrow="SEE FIELDFORCE ON YOUR NETWORK"
        title={
          <>
            The networks of the future{" "}
            <span className="text-[var(--color-text-2)]">won't run themselves.</span>
            <br />
            <span className="grad-text">Fieldforce will.</span>
          </>
        }
        primary={{ href: "/demo", label: "Book a demo" }}
        secondary={{ href: "mailto:engineering@fieldforce.com", label: "Talk to engineering" }}
        fineprint="First site live in 24 hours. No code. No SI. No quarter-long onboarding."
      />
    </>
  );
}

function WorkOrderMock() {
  const rows = [
    ["07:14", "Permit denied", "Site 18403, Munich"],
    ["07:14", "Dispatch rerouting", "Crew #4 → Site 18244"],
    ["09:42", "Crew arrived", "Photo 0140 captured"],
    ["10:08", "Photo 0142 flagged", "Closure missing — Evidence"],
    ["10:14", "Splice torque OK", "Photo 0143 verified"],
    ["12:30", "Reconcile variance", "INV-3493 +8.2% over"],
    ["14:52", "Work order closed", "Evidence approved"],
  ];
  return (
    <div className="overflow-hidden rounded-[10px] border border-[var(--color-line-subtle)] bg-[var(--color-bg-inset)] font-mono">
      {rows.map((r, i) => (
        <div
          key={i}
          className="grid grid-cols-[68px_1fr] gap-3 border-b border-[var(--color-line-subtle)] px-4 py-[10px] text-[12.5px] last:border-b-0"
        >
          <span className="text-[var(--color-text-3)]">{r[0]}</span>
          <span className="text-[var(--color-text)]">
            {r[1]}{" "}
            <span className="text-[var(--color-text-3)]">— {r[2]}</span>
          </span>
        </div>
      ))}
    </div>
  );
}
