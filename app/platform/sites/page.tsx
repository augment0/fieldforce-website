import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageHero } from "@/components/sections/page-hero";
import { FeatureSplit } from "@/components/sections/feature-split";
import { CtaBand } from "@/components/sections/cta-band";
import { VizSiteTimeline } from "@/components/illustrations/platform-vizzes";

export const metadata: Metadata = {
  title: "Sites",
  description: "One source of truth per location. Permits, history, photos, and assets, on one timeline.",
};

export default function SitesPage() {
  return (
    <>
      <Breadcrumb items={[{ href: "/platform", label: "Platform" }]} current="Sites" />
      <PageHero
        eyebrow="PRIMITIVE / SITES"
        title={<>Every location. <span className="text-[var(--color-text-2)]">One timeline.</span></>}
        body="Sites are the spine of Fieldforce. A site is a location with permits, leases, history, photos, work orders, and assets — all on one timeline that every team reads."
        primaryCta={{ href: "/demo", label: "Book a demo" }}
        secondaryCta={{ href: "/platform", label: "All primitives" }}
      />
      <FeatureSplit
        eyebrow="ONE TIMELINE"
        title={<>Every event, <span className="text-[var(--color-text-2)]">in chronological order.</span></>}
        body={<p>From site acquisition through commissioning to ongoing operations, every event lives on one timeline. Field-team comments, permit approvals, photo verifications, agent actions — all interleaved.</p>}
        bullets={[
          "Acquisition: leases, RF surveys, site selection",
          "Build: permits, dispatch, evidence, closeout",
          "Ops: incidents, inspections, lifecycle work",
        ]}
        visual={<VizSiteTimeline />}
      />
      <CtaBand
        eyebrow="SEE SITES IN ACTION"
        title={<>Your network's <span className="grad-text">single source of truth.</span></>}
        primary={{ href: "/demo", label: "Book a demo" }}
        secondary={{ href: "/platform", label: "All primitives" }}
      />
    </>
  );
}
