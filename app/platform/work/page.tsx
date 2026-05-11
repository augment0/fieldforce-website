import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageHero } from "@/components/sections/page-hero";
import { FeatureSplit } from "@/components/sections/feature-split";
import { CtaBand } from "@/components/sections/cta-band";
import { VizWorkflowBoard } from "@/components/illustrations/platform-vizzes";

export const metadata: Metadata = { title: "Work", description: "Every deployment, repair, and inspection — scheduled, dispatched, closed with evidence." };

export default function WorkPage() {
  return (
    <>
      <Breadcrumb items={[{ href: "/platform", label: "Platform" }]} current="Work" />
      <PageHero
        eyebrow="PRIMITIVE / WORK"
        title={<>Every job. <span className="text-[var(--color-text-2)]">Closed with evidence.</span></>}
        body="A work order in Fieldforce is more than a ticket. It's a typed workflow with required evidence, dispatched against permits, and reconciled against vendor invoices."
        primaryCta={{ href: "/demo", label: "Book a demo" }}
        secondaryCta={{ href: "/platform", label: "All primitives" }}
      />
      <FeatureSplit
        eyebrow="WORKFLOW"
        title={<>Schedule. Dispatch. Verify. <span className="text-[var(--color-text-2)]">Close.</span></>}
        body={<p>Every work order is a typed workflow — site acquisition, deployment, inspection, repair. Each type has its required evidence, its approval chain, and its closure rules.</p>}
        bullets={[
          "Typed workflows per vertical",
          "Required evidence per type",
          "Approval chains routed to the right team",
        ]}
        visual={<VizWorkflowBoard />}
      />
      <CtaBand
        eyebrow="WORK, OPERATIONALIZED"
        title={<>The work order that <span className="grad-text">closes itself.</span></>}
        primary={{ href: "/demo", label: "Book a demo" }}
        secondary={{ href: "/platform", label: "All primitives" }}
      />
    </>
  );
}
