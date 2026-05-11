import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageHero } from "@/components/sections/page-hero";
import { FeatureSplit } from "@/components/sections/feature-split";
import { CtaBand } from "@/components/sections/cta-band";
import { VizEvidenceInspect } from "@/components/illustrations/platform-vizzes";

export const metadata: Metadata = { title: "Evidence", description: "Every photo, GPS pin, signature, and test result — verified before a work order closes." };

export default function EvidencePage() {
  return (
    <>
      <Breadcrumb items={[{ href: "/platform", label: "Platform" }]} current="Evidence" />
      <PageHero
        eyebrow="PRIMITIVE / EVIDENCE"
        title={<>Verified field work. <span className="text-[var(--color-text-2)]">Or it doesn't close.</span></>}
        body="Evidence is the primitive that ties claims to reality. Every photo, GPS pin, signature, and test result is captured, validated, and joined to the work order it belongs to."
        primaryCta={{ href: "/demo", label: "Book a demo" }}
        secondaryCta={{ href: "/agents/evidence", label: "Evidence agent" }}
      />
      <FeatureSplit
        eyebrow="VERIFICATION"
        title={<>Computer vision. <span className="text-[var(--color-text-2)]">Geofence. Rules.</span></>}
        body={<p>Each evidence type has its validators. Closure photo? Trained CV detects the closure. On-site signature? GPS-pinned and timestamped. Out-of-tolerance torque? Flagged before close.</p>}
        bullets={[
          "Computer vision on photos (94% first-pass QA)",
          "Geofence on every check-in",
          "Configurable rules per work-order type",
        ]}
        visual={<VizEvidenceInspect />}
      />
      <CtaBand
        eyebrow="EVIDENCE-FIRST OPS"
        title={<>If it didn't happen, <span className="grad-text">it didn't close.</span></>}
        primary={{ href: "/demo", label: "Book a demo" }}
        secondary={{ href: "/agents/evidence", label: "Evidence agent" }}
      />
    </>
  );
}
