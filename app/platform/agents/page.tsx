import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageHero } from "@/components/sections/page-hero";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { FeatureSplit } from "@/components/sections/feature-split";
import { Agents } from "@/components/sections/agents";
import { CtaBand } from "@/components/sections/cta-band";
import { VizAgentMesh } from "@/components/illustrations/platform-vizzes";

export const metadata: Metadata = {
  title: "Agents",
  description:
    "Six agents that operate, not just observe — Dispatch, Forecast, Evidence, Reconcile, Permit, Copilot.",
};

export default function AgentsParentPage() {
  return (
    <>
      <Breadcrumb items={[{ href: "/platform", label: "Platform" }]} current="Agents" />
      <PageHero
        eyebrow="PLATFORM / AGENTS"
        title={
          <>
            Intelligence that operates.
            <br />
            <span className="text-[var(--color-text-2)]">Not just observes.</span>
          </>
        }
        body="Most 'AI' in infrastructure software summarizes dashboards. Ours takes action. Six agents work alongside your team — scheduling, validating, predicting, reconciling — so the network gets smarter every shift."
        primaryCta={{ href: "/demo", label: "Book a demo" }}
        secondaryCta={{ href: "/agents/dispatch", label: "View Dispatch" }}
      />

      <FeatureSplit
        eyebrow="ORCHESTRATION"
        title={<>Six agents. <span className="text-[var(--color-text-2)]">One signed event bus.</span></>}
        body={<p>The agents don't run in silos. They share a single signed event bus — every observation, every action, every approval is published, replayable, and reversible. Dispatch reroutes against permits Forecast just predicted; Evidence blocks closeouts that Reconcile would have flagged anyway.</p>}
        bullets={[
          "Every action signed, queryable, reversible",
          "Approval rules per workflow — agent or human",
          "Replay any decision, end-to-end, in the audit log",
        ]}
        visual={<VizAgentMesh />}
      />

      <FeatureGrid
        eyebrow="THE AGENT FAMILY"
        title={<>Each one named, scoped, <span className="text-[var(--color-text-2)]">and provable.</span></>}
        columns={3}
        items={[
          { title: "Dispatch",  body: "AI scheduler & re-router. Permits, weather, parts, SLA — all weighed in real time.", href: "/agents/dispatch" },
          { title: "Forecast",  body: "SLA-risk prediction with 11-day median lead time. Reads vendor velocity, asset age, weather, ticket history.", href: "/agents/forecast" },
          { title: "Evidence",  body: "Computer vision on every site photo. Closure missing? The work order doesn't close.", href: "/agents/evidence" },
          { title: "Reconcile", body: "Nine vendor invoice formats, one queue. Variance over your threshold flagged in seconds.", href: "/agents/reconcile" },
          { title: "Permit",    body: "Tracks every jurisdictional dependency and routes the next action before the project waits.", href: "/agents/permit" },
          { title: "Copilot",   body: "Natural-language interface to your network. Ask anything — Copilot cites the rows.", href: "/agents/copilot" },
        ]}
      />

      <Agents />

      <CtaBand
        eyebrow="MEET THEM IN PRODUCTION"
        title={<>See the agents <span className="grad-text">on your network.</span></>}
        primary={{ href: "/demo", label: "Book a demo" }}
        secondary={{ href: "mailto:engineering@fieldforce.com", label: "Talk to engineering" }}
      />
    </>
  );
}
