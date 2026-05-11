import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageHero } from "@/components/sections/page-hero";
import { StatBar } from "@/components/sections/stat-bar";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { Agents } from "@/components/sections/agents";
import { IntegrationGrid } from "@/components/sections/integration-grid";
import { FAQ } from "@/components/sections/faq";
import { CtaBand } from "@/components/sections/cta-band";
import { EvIllo } from "@/components/illustrations/use-case-illos";

export const metadata: Metadata = {
  title: "EV & Energy solutions",
  description: "Same platform that runs $10B+ of telecom infrastructure — purpose-built for EV charging and energy.",
};

export default function EvEnergyPage() {
  return (
    <>
      <Breadcrumb items={[{ href: "/industries", label: "Industries" }]} current="EV & Energy" />

      <PageHero
        eyebrow="SOLUTIONS / EV & ENERGY"
        title={<>The deployment OS <span className="text-[var(--color-text-2)]">for charging networks and energy assets.</span></>}
        body="Same platform that runs $10B+ of telecom infrastructure — purpose-built for the new physics of EV and energy. Commission chargers in days, not quarters. Operate them at telecom-grade reliability."
        primaryCta={{ href: "/demo", label: "Book a demo" }}
        secondaryCta={{ href: "mailto:engineering@fieldforce.com", label: "Talk to engineering" }}
        visual={
          <div className="grid aspect-[1.1/1] place-items-center rounded-[14px] border border-[var(--color-line)] bg-[radial-gradient(ellipse_at_center,var(--color-accent-glow),transparent_70%),var(--color-bg-inset)] p-10">
            <EvIllo />
          </div>
        }
      />

      <StatBar
        items={[
          { value: "30–45%", label: "less downtime" },
          { value: "9–14d",  label: "EVSE failure lead time" },
          { value: "3.7%",   label: "margin recovery" },
          { value: "24h",    label: "first site live" },
        ]}
      />

      <FeatureGrid
        eyebrow="WHAT YOU GET"
        title={<>The verbs change. <span className="text-[var(--color-text-2)]">The platform doesn't.</span></>}
        items={[
          { title: "Commissioning",        body: "OCPP-aware deployment workflows. Charger live in days." },
          { title: "Depot operations",     body: "Live state across every connector, every session, every fault." },
          { title: "Energy asset mgmt",     body: "Battery storage, DERs, V2G — modeled as assets like any other." },
          { title: "Utility coordination", body: "Interconnect tracking, demand response, dynamic pricing signals." },
        ]}
      />

      <Agents />

      <IntegrationGrid
        eyebrow="EV-NATIVE INTEGRATIONS"
        title={<>The protocols and partners <span className="text-[var(--color-text-2)]">EV operators actually use.</span></>}
        categories={[
          { label: "Charging protocols", items: ["OCPP 1.6/2.0.1", "ISO 15118", "OICP"] },
          { label: "Energy & grid",      items: ["OpenADR", "DERMS", "Utility APIs"] },
          { label: "EVSE OEMs",          items: ["ABB", "Tritium", "Kempower", "Wallbox", "Tesla"] },
          { label: "ERP & finance",      items: ["Oracle", "SAP", "NetSuite"] },
          { label: "Compliance",         items: ["NEVI", "AFIR", "PCI DSS"] },
        ]}
      />

      <FAQ
        eyebrow="EV BUYER QUESTIONS"
        title="The honest answers."
        items={[
          { q: "You came from telecom. Why should I trust you with charging?", a: <>Because the rollout muscle is the same — and our platform was built for it. Charging-native vendors built for the meter; we built for the rollout. Both matter.</> },
          { q: "Do you support OCPP 2.0.1 and ISO 15118 plug-and-charge?", a: <>Yes — both are first-class. Reach out for the test certification matrix.</> },
          { q: "Can Fieldforce sit alongside our CSMS, or replace it?", a: <>Both options work. Most customers run Fieldforce as the system of record for sites and operations, alongside a CSMS for session-level charging.</> },
          { q: "How does Fieldforce help with NEVI / AFIR reporting?", a: <>Built-in. Reporting templates and audit trails for both regimes. Compliance is part of the workflow, not a quarterly project.</> },
        ]}
      />

      <CtaBand
        eyebrow="ROLL OUT YOUR NETWORK"
        title={<>Telecom-grade tooling <span className="grad-text">for EV.</span></>}
        primary={{ href: "/demo", label: "Book a demo" }}
        secondary={{ href: "mailto:engineering@fieldforce.com", label: "Talk to engineering" }}
      />
    </>
  );
}
