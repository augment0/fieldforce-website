import { IotIllo } from "@/components/illustrations/use-case-illos";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { CtaBand } from "@/components/sections/cta-band";
import { FAQ } from "@/components/sections/faq";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { PageHero } from "@/components/sections/page-hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Cities",
  description: "Streetlights, sensors, cabinets, and signage — managed as one connected fleet.",
};

export default function SmartCitiesPage() {
  return (
    <>
      <Breadcrumb items={[{ href: "/solutions", label: "Solutions" }]} current="Smart Cities" />

      <PageHero
        eyebrow="SOLUTIONS / SMART CITIES"
        title={
          <>
            Every node on the curb.{" "}
            <span className="text-[var(--color-text-2)]">One operating record.</span>
          </>
        }
        body="Streetlights, environmental sensors, public-safety cameras, intersection cabinets, digital signage — managed under one platform with one work-and-evidence model. Cities pay for outcomes, not for software siloes."
        primaryCta={{ href: "/demo", label: "Book a demo" }}
        secondaryCta={{ href: "mailto:engineering@fieldforce.com", label: "Talk to engineering" }}
        visual={
          <div className="grid aspect-[1.1/1] place-items-center rounded-[14px] border border-[var(--color-line)] bg-[radial-gradient(ellipse_at_center,var(--color-accent-glow),transparent_70%),var(--color-bg-inset)] p-10">
            <IotIllo />
          </div>
        }
      />

      <FeatureGrid
        eyebrow="DEPLOYMENTS"
        title={
          <>
            Different devices. <span className="text-[var(--color-text-2)]">Same primitives.</span>
          </>
        }
        columns={3}
        items={[
          {
            title: "Connected lighting",
            body: "Streetlight controllers, photocells, and luminaires — provisioned, monitored, and maintained from one fleet view.",
          },
          {
            title: "Public-safety nodes",
            body: "Cameras, ALPR, gunshot sensors, intersection cabinets — with chain-of-custody evidence for every site visit.",
          },
          {
            title: "Environmental sensing",
            body: "Air quality, traffic, flood, and noise sensors — calibrated and serviced on schedule, not on guesswork.",
          },
        ]}
      />

      <FAQ
        eyebrow="CITY BUYER QUESTIONS"
        title="Questions municipal and integrator teams ask."
        items={[
          {
            q: "Do you work with system integrators, or only direct?",
            a: (
              <>
                Both. Most city deployments run through an integrator partner; Fieldforce sits as
                the operating layer underneath.
              </>
            ),
          },
          {
            q: "Can citizen-facing data stay in-city?",
            a: (
              <>
                Yes — region-pinned data residency is configurable per tenant, including municipal
                data-sovereignty requirements.
              </>
            ),
          },
          {
            q: "How do we model a multi-vendor streetlight controller fleet?",
            a: (
              <>
                As one asset class with vendor-specific telemetry adapters. The fleet view is
                unified; the integration details stay in the adapter layer.
              </>
            ),
          },
        ]}
      />

      <CtaBand
        eyebrow="RUN THE CITY"
        title={
          <>
            One platform <span className="grad-text">for every connected node.</span>
          </>
        }
        primary={{ href: "/demo", label: "Book a demo" }}
        secondary={{ href: "mailto:engineering@fieldforce.com", label: "Talk to engineering" }}
      />
    </>
  );
}
