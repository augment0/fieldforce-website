import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageHero } from "@/components/sections/page-hero";
import { FeatureSplit } from "@/components/sections/feature-split";
import { CtaBand } from "@/components/sections/cta-band";
import { VizAssetHierarchy } from "@/components/illustrations/platform-vizzes";

export const metadata: Metadata = { title: "Assets", description: "Every tower, charger, gateway, and splice — modeled, monitored, maintained." };

export default function AssetsPage() {
  return (
    <>
      <Breadcrumb items={[{ href: "/platform", label: "Platform" }]} current="Assets" />
      <PageHero
        eyebrow="PRIMITIVE / ASSETS"
        title={<>Every asset. <span className="text-[var(--color-text-2)]">Modeled, monitored, maintained.</span></>}
        body="Assets in Fieldforce aren't just inventory rows. Each one has a model, a state, a history, and a relationship to the work that touches it."
        primaryCta={{ href: "/demo", label: "Book a demo" }}
        secondaryCta={{ href: "/platform", label: "All primitives" }}
      />
      <FeatureSplit
        eyebrow="HIERARCHY"
        title={<>From a tower <span className="text-[var(--color-text-2)]">down to a torque value.</span></>}
        body={<p>Assets compose. A tower contains sectors; a sector contains radios and antennas; a radio has a firmware version. The same hierarchy works for chargers, gateways, batteries.</p>}
        bullets={[
          "Polymorphic asset taxonomy — modeled per vertical",
          "Live state synced from your telemetry pipeline",
          "Warranty, lifecycle, and depreciation tracking",
        ]}
        visual={<VizAssetHierarchy />}
      />
      <CtaBand
        eyebrow="EVERY ASSET, EVERY LIFECYCLE STAGE"
        title={<>Modeled <span className="grad-text">your way.</span></>}
        primary={{ href: "/demo", label: "Book a demo" }}
        secondary={{ href: "/platform", label: "All primitives" }}
      />
    </>
  );
}
