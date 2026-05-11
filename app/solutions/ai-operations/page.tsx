import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageHero } from "@/components/sections/page-hero";
import { StatBar } from "@/components/sections/stat-bar";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { Testimonial } from "@/components/sections/testimonial";
import { FAQ } from "@/components/sections/faq";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "AI-powered operations | Solutions",
  description:
    "Six AI agents that act on your field data: Dispatch, Forecast, Evidence, Reconcile, Permit, Copilot. Predictive, prescriptive, and grounded in your system of record.",
};

export default function AiOperationsPage() {
  return (
    <>
      <Breadcrumb items={[{ href: "/solutions", label: "Solutions" }]} current="AI-powered operations" />

      <PageHero
        eyebrow="SOLUTIONS / AI-POWERED OPERATIONS"
        title={
          <>
            Six agents <span className="grad-text">that act.</span>
            <br />
            <span className="text-[var(--color-text-2)]">Not six dashboards that watch.</span>
          </>
        }
        body="The AI-first promise for infrastructure operators is simple: agents that route a crew, forecast a breach, validate a closure, reconcile an invoice, escalate a permit, and copilot the operator — grounded in the same data model the rest of the platform runs on. No data fabric, no useful AI. Fieldforce ships both."
        primaryCta={{ href: "/demo", label: "Book a demo" }}
        secondaryCta={{ href: "/platform/agents", label: "Meet the agents" }}
      />

      <StatBar
        items={[
          { value: "6",       label: "production AI agents" },
          { value: "11d",     label: "SLA breach forecast lead time" },
          { value: "94%",     label: "evidence first-pass accuracy" },
          { value: "Native",  label: "to the data model — not a bolt-on" },
        ]}
      />

      <FeatureGrid
        eyebrow="THE AGENT FLEET"
        title={<>Each agent owns a job. <span className="text-[var(--color-text-2)]">All grounded in your data fabric.</span></>}
        columns={3}
        items={[
          { title: "Dispatch agent",  body: "Re-routes crews against permits, weather, parts, and SLA risk. Doesn't suggest — acts inside guardrails you set." },
          { title: "Forecast agent",  body: "Surfaces sites that will breach SLA — median 11 days ahead — so leadership can intervene while it's still cheap." },
          { title: "Evidence agent",  body: "Computer vision QA on every site photo. Closure missing? Work order can't close. Human escalation only on edge cases." },
          { title: "Reconcile agent", body: "Matches vendor invoices to actual work. Variance over your threshold flagged in seconds. Finance stops chasing." },
          { title: "Permit agent",    body: "Tracks every permit by site and jurisdiction. Escalates before idle time accrues; re-dispatches crews automatically." },
          { title: "Copilot",         body: "NL → SQL across your unified ops data lake. Any operator can ask any question, get a grounded answer with sources." },
        ]}
      />

      <Testimonial
        quote={
          <>
            We didn't need another dashboard. We needed something that <strong className="font-semibold">does the work in the gaps</strong>. That's what these agents are.
          </>
        }
        name="Haynes Griffin"
        role="CEO · SmartSky Networks"
        initials="HG"
      />

      <FAQ
        eyebrow="THE QUESTIONS A REAL AI BUYER ASKS"
        title="Specifics, not vibes."
        items={[
          { q: "Is this 'AI', or is it actually deterministic rules?", a: <>A mix, deliberately. Forecast and Evidence use ML models. Dispatch and Reconcile are LLM-driven over a deterministic data fabric. Copilot is NL → SQL with grounded retrieval. The honest answer is: we use the right tool per problem, and every action is auditable.</> },
          { q: "What about hallucinations?",                            a: <>Every agent action is grounded in your data fabric — sites, assets, work, evidence — not a public model's training data. Copilot returns sources with every answer. Actions are bounded by RBAC guardrails you configure.</> },
          { q: "Do I need a data team to enable this?",                a: <>No. Fieldforce is the data fabric. ERP, OSS/BSS, RMS, GIS, OCPP, MQTT — all wired in out of the box. The agents have the context they need on day one.</> },
          { q: "How does this differ from 'AI features' bolted onto legacy tools?", a: <>Bolt-on AI sits on top of incompatible data models — useful as a chat layer, not as an operator. Our agents <em>are</em> the operating model. That's why they can act, not just observe.</> },
        ]}
      />

      <CtaBand
        eyebrow="SEE THE AGENTS WORK ON YOUR DATA"
        title={<>Stop watching dashboards. <span className="grad-text">Start running operations.</span></>}
        primary={{ href: "/demo", label: "Book a demo" }}
        secondary={{ href: "/platform/agents", label: "Meet the agents" }}
      />
    </>
  );
}
