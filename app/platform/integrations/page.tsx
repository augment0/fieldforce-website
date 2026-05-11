import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageHero } from "@/components/sections/page-hero";
import { FeatureSplit } from "@/components/sections/feature-split";
import { IntegrationGrid } from "@/components/sections/integration-grid";
import { CtaBand } from "@/components/sections/cta-band";
import { VizIntegrationsBus } from "@/components/illustrations/platform-vizzes";

export const metadata: Metadata = { title: "Integrations", description: "Reads from your OSS/BSS, writes back to your ERP, talks OCPP, MQTT, SNMP." };

export default function IntegrationsPage() {
  return (
    <>
      <Breadcrumb items={[{ href: "/platform", label: "Platform" }]} current="Integrations" />
      <PageHero
        eyebrow="PLATFORM / INTEGRATIONS"
        title={<>If it's already in your stack, <span className="text-[var(--color-text-2)]">we read from it.</span></>}
        body="Fieldforce reads from your existing systems and writes back to them. We're not trying to replace your CRM or ERP. We're trying to be the system of record for the field — the layer between them."
        primaryCta={{ href: "/demo", label: "Book a demo" }}
        secondaryCta={{ href: "/docs", label: "Integration recipes" }}
      />
      <FeatureSplit
        eyebrow="THE BUS"
        title={<>Sources on the left. <span className="text-[var(--color-text-2)]">Targets on the right. Fieldforce in between.</span></>}
        body={<p>Every integration is bidirectional and audit-logged. Fieldforce reads operational truth from your sources, transforms it into the primitives field teams need, and writes the resulting events back to the systems that own finance, observability, and identity.</p>}
        bullets={[
          "Read · OSS, ERP, GIS, identity, telemetry buses",
          "Transform · normalize into sites, assets, work, evidence",
          "Write · events back to your warehouse, ITSM, finance",
        ]}
        visual={<VizIntegrationsBus />}
      />
      <IntegrationGrid
        title="By category."
        body="If you don't see yours, we typically build new integrations in 1–4 weeks. Talk to engineering."
        categories={[
          { label: "ERP & Finance",     items: ["Oracle EBS", "Oracle Cloud", "SAP S/4", "NetSuite", "Workday"] },
          { label: "OSS / BSS",         items: ["Netcracker", "Amdocs", "CSG", "Comarch"] },
          { label: "ITSM",              items: ["ServiceNow", "Jira Service Management"] },
          { label: "GIS & Design",      items: ["ArcGIS", "3-GIS", "Bentley", "Google Earth"] },
          { label: "Identity",          items: ["Okta", "Azure AD", "Google Workspace", "OneLogin"] },
          { label: "Charging protocols", items: ["OCPP 1.6/2.0.1", "ISO 15118", "OICP", "OpenADR"] },
          { label: "Telemetry",         items: ["MQTT", "CoAP", "LwM2M", "SNMP", "AWS IoT", "Azure IoT"] },
          { label: "Standards",         items: ["TM Forum APIs", "MEF", "NEVI", "AFIR"] },
          { label: "Communication",     items: ["Slack", "Teams", "Twilio (SMS)", "SendGrid (email)"] },
        ]}
        footnote="All integrations: read + write where applicable, with audit-logged sync, retry, and reconciliation."
      />
      <CtaBand
        eyebrow="INTEGRATION QUESTIONS"
        title={<>Ask the engineering team <span className="grad-text">directly.</span></>}
        primary={{ href: "mailto:engineering@fieldforce.com", label: "Email engineering" }}
        secondary={{ href: "/docs", label: "See recipes" }}
      />
    </>
  );
}
