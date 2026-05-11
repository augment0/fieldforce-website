import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageHero } from "@/components/sections/page-hero";
import { StatBar } from "@/components/sections/stat-bar";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { Agents } from "@/components/sections/agents";
import { IntegrationGrid } from "@/components/sections/integration-grid";
import { FAQ } from "@/components/sections/faq";
import { CtaBand } from "@/components/sections/cta-band";
import { IotIllo } from "@/components/illustrations/use-case-illos";

export const metadata: Metadata = {
  title: "IoT & Networks of Things",
  description: "Distributed device fleets, provisioned and maintained from one platform.",
};

export default function IotPage() {
  return (
    <>
      <Breadcrumb items={[{ href: "/industries", label: "Industries" }]} current="IoT" />

      <PageHero
        eyebrow="SOLUTIONS / IoT"
        title={<>Every gateway, sensor, and node. <span className="text-[var(--color-text-2)]">One platform.</span></>}
        body="From smart-city deployments to private 5G networks to industrial IoT, Fieldforce is how operators run distributed device fleets at scale — without standing up a new ops team for every fleet."
        primaryCta={{ href: "/demo", label: "Book a demo" }}
        secondaryCta={{ href: "mailto:engineering@fieldforce.com", label: "Talk to engineering" }}
        visual={
          <div className="grid aspect-[1.1/1] place-items-center rounded-[14px] border border-[var(--color-line)] bg-[radial-gradient(ellipse_at_center,var(--color-accent-glow),transparent_70%),var(--color-bg-inset)] p-10">
            <IotIllo />
          </div>
        }
      />

      <StatBar
        items={[
          { value: "8,400+", label: "devices monitored" },
          { value: "94%",    label: "first-pass install QA" },
          { value: "23",     label: "countries" },
          { value: "24h",    label: "first device live" },
        ]}
      />

      <FeatureGrid
        eyebrow="USE CASES"
        title={<>Three operating shapes. <span className="text-[var(--color-text-2)]">Same primitives.</span></>}
        columns={3}
        items={[
          { title: "Smart cities",      body: "Streetlights, sensors, cabinets, signage — all under one fleet view." },
          { title: "Private 5G",         body: "On-prem cores, RAN, edge devices — provisioned and operated like a public network." },
          { title: "Industrial IoT",     body: "Sensors, PLCs, gateways across plants and rigs — with OT/IT separation." },
        ]}
      />

      <Agents />

      <IntegrationGrid
        eyebrow="IoT INTEGRATIONS"
        title="The connectivity and protocols you already use."
        categories={[
          { label: "Connectivity",   items: ["Soracom", "EMnify", "1NCE", "Cellular & LoRaWAN MNOs"] },
          { label: "Device platforms", items: ["Particle", "Losant", "AWS IoT", "Azure IoT"] },
          { label: "Protocols",      items: ["MQTT", "CoAP", "LwM2M", "SNMP"] },
          { label: "ITSM",           items: ["ServiceNow", "Jira Service Management"] },
          { label: "Compliance",     items: ["ISO/IEC 62443", "NIST CSF"] },
        ]}
      />

      <FAQ
        eyebrow="IoT BUYER QUESTIONS"
        title="The questions distributed-fleet operators ask."
        items={[
          { q: "Is this a device-management platform like Particle / Losant?", a: <>No. They run the device. We run the fleet operation — the people, work, and evidence around the devices.</> },
          { q: "Does Fieldforce ingest from MQTT / SNMP / our existing telemetry pipeline?", a: <>Yes — we read from your telemetry pipeline and join it to your assets, work, and evidence.</> },
          { q: "How do we model a device-of-devices (e.g. a smart-city cabinet that contains 12 sensors)?", a: <>As an asset hierarchy. The cabinet is one site, each sensor is a child asset, each with its own state, telemetry, and work history.</> },
          { q: "Do you support air-gapped or on-prem deployment for sensitive industrial sites?", a: <>Yes — Enterprise tier supports both, with the same agents and platform synced via your approved channel.</> },
        ]}
      />

      <CtaBand
        eyebrow="RUN YOUR FLEET"
        title={<>One platform <span className="grad-text">for every device fleet.</span></>}
        primary={{ href: "/demo", label: "Book a demo" }}
        secondary={{ href: "mailto:engineering@fieldforce.com", label: "Talk to engineering" }}
      />
    </>
  );
}
