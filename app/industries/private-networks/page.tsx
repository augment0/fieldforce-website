import { IotIllo } from "@/components/illustrations/use-case-illos";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { CtaBand } from "@/components/sections/cta-band";
import { FAQ } from "@/components/sections/faq";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { PageHero } from "@/components/sections/page-hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Networks",
  description: "Private 5G, CBRS, and on-prem RAN — operated like a public network.",
};

export default function PrivateNetworksPage() {
  return (
    <>
      <Breadcrumb items={[{ href: "/industries", label: "Industries" }]} current="Private Networks" />

      <PageHero
        eyebrow="SOLUTIONS / PRIVATE NETWORKS"
        title={
          <>
            Your own network.{" "}
            <span className="text-[var(--color-text-2)]">Run with carrier-grade rigor.</span>
          </>
        }
        body="Private 5G, CBRS, and on-prem RAN deployments don't fail because the radios are bad — they fail because nobody runs the lifecycle like a public network. Fieldforce gives enterprises and integrators carrier-grade ops without standing up a carrier."
        primaryCta={{ href: "/demo", label: "Book a demo" }}
        secondaryCta={{ href: "mailto:engineering@fieldforce.com", label: "Talk to engineering" }}
        visual={
          <div className="grid aspect-[1.1/1] place-items-center rounded-[14px] border border-[var(--color-line)] bg-[radial-gradient(ellipse_at_center,var(--color-accent-glow),transparent_70%),var(--color-bg-inset)] p-10">
            <IotIllo />
          </div>
        }
      />

      <FeatureGrid
        eyebrow="USE CASES"
        title={
          <>
            Different sites.{" "}
            <span className="text-[var(--color-text-2)]">Same operating model.</span>
          </>
        }
        columns={3}
        items={[
          {
            title: "Enterprise campuses",
            body: "Manufacturing, logistics, healthcare, and utility campuses running their own coverage layer.",
          },
          {
            title: "Ports & airfields",
            body: "High-reliability environments where downtime has hard SLAs and federal reporting.",
          },
          {
            title: "Integrators & MSPs",
            body: "Build, operate, and bill private network deployments across many enterprise tenants.",
          },
        ]}
      />

      <FAQ
        eyebrow="PRIVATE NETWORK QUESTIONS"
        title="Questions enterprise and integrator teams ask."
        items={[
          {
            q: "Do you manage the RAN, or do we still need an EMS?",
            a: (
              <>
                You keep the EMS. Fieldforce runs the operational layer above it — sites, work,
                evidence, agents — and ingests fault and performance data from your RAN vendor.
              </>
            ),
          },
          {
            q: "Can we operate air-gapped or on-prem?",
            a: (
              <>
                Yes — Enterprise tier supports air-gapped and on-prem deployment with the same
                agents and primitives.
              </>
            ),
          },
          {
            q: "How does this work for multi-tenant integrators?",
            a: (
              <>
                Tenant isolation is first-class. One operator account, many enterprise tenants, with
                per-tenant SLAs, work queues, and reporting.
              </>
            ),
          },
        ]}
      />

      <CtaBand
        eyebrow="RUN YOUR NETWORK"
        title={
          <>
            Carrier ops <span className="grad-text">without the carrier.</span>
          </>
        }
        primary={{ href: "/demo", label: "Book a demo" }}
        secondary={{ href: "mailto:engineering@fieldforce.com", label: "Talk to engineering" }}
      />
    </>
  );
}
