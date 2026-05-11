import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageHero } from "@/components/sections/page-hero";
import { FeatureSplit } from "@/components/sections/feature-split";
import { FAQ } from "@/components/sections/faq";
import { CtaBand } from "@/components/sections/cta-band";
import { RelatedRow } from "@/components/sections/related-row";

type AgentSlug = "dispatch" | "forecast" | "evidence" | "reconcile" | "permit" | "copilot";

const AGENTS: Record<
  AgentSlug,
  {
    name: string;
    headline: React.ReactNode;
    body: string;
    proof: string;
    works: { title: string; body: React.ReactNode }[];
    faq: { q: string; a: React.ReactNode }[];
  }
> = {
  dispatch: {
    name: "Dispatch",
    headline: <>Watch a permit fail. <span className="text-[var(--color-text-2)]">Watch the day reschedule itself.</span></>,
    body: "Dispatch reroutes against permits, weather, parts, and SLA risk in real time.",
    proof: "Cuts crew-day waste 18–24% in the first 90 days.",
    works: [
      { title: "Reads the schedule",  body: <>Live view of every crew, every site, every permit and parts dependency.</> },
      { title: "Recalculates risk",   body: <>When a permit slips or weather changes, Dispatch reweights every active route.</> },
      { title: "Acts (with approval)", body: <>Reroutes against your rules — auto for low-risk moves, request-approval for high.</> },
    ],
    faq: [
      { q: "Can Dispatch act without approval?", a: <>Yes, on rule classes you mark "auto." Everything else routes to a human.</> },
      { q: "How does it weigh permits vs SLA?", a: <>Configurable per workflow. Default heuristics start with permit {">"} parts {">"} weather {">"} SLA, but you can tune.</> },
    ],
  },
  forecast: {
    name: "Forecast",
    headline: <>It's Tuesday. <span className="text-[var(--color-text-2)]">Here are the seven sites that breach by Friday.</span></>,
    body: "Forecast reads patterns your team can't and surfaces SLA risk before it becomes incident.",
    proof: "11-day median lead time on SLA-risk alerts.",
    works: [
      { title: "Trains on your data",   body: <>Models vendor velocity, weather windows, asset failure curves on your historical work-order data.</> },
      { title: "Scores every site",      body: <>Daily risk score, ranked. Breach probability, lead time, contributing signals.</> },
      { title: "Hands off to Dispatch", body: <>High-risk sites flow to Dispatch, which prioritizes them in the next routing cycle.</> },
    ],
    faq: [
      { q: "How long until Forecast is accurate?", a: <>Four to six weeks of clean work-order data. Earlier with our pre-trained baseline for telecom and EV.</> },
      { q: "Can we expose Forecast scores in our NOC?", a: <>Yes — webhook + Forecast API publishes per-site scores in real time.</> },
    ],
  },
  evidence: {
    name: "Evidence",
    headline: <>A photo without a splice closure. <span className="text-[var(--color-text-2)]">A work order that won't close.</span></>,
    body: "Evidence runs computer vision on every site photo and rules on every closeout.",
    proof: "First-pass QA accuracy 94% — vs. 71% for human-only review.",
    works: [
      { title: "Vision on every photo", body: <>Detects closures, splices, antennas, signage, hazards. Trained on your asset taxonomy.</> },
      { title: "Rules on every closeout", body: <>Geofence, photo count, signature, test result. Configurable per work-order type.</> },
      { title: "Blocks bad closeouts", body: <>If the rule fails, the work order won't close. The crew is alerted before they leave site.</> },
    ],
    faq: [
      { q: "What if the model is wrong?", a: <>Humans-in-the-loop on borderline cases. Every override trains the model on your taxonomy.</> },
    ],
  },
  reconcile: {
    name: "Reconcile",
    headline: <>Nine invoice formats. <span className="text-[var(--color-text-2)]">One queue.</span></>,
    body: "Reconcile ingests vendor invoices in any format, matches against the work that happened, and flags variance.",
    proof: "Average 3.7% margin recovery on infrastructure spend.",
    works: [
      { title: "Ingests anything",       body: <>PDF, CSV, EDI, custom XML — Reconcile parses it all, normalizes line items.</> },
      { title: "Matches against work",   body: <>Joins each line to a work order, asset, crew, time window. Flags orphans.</> },
      { title: "Variance in seconds",    body: <>Anything over your threshold (default 4%) routes for human review.</> },
    ],
    faq: [
      { q: "Does Reconcile post to our ERP?", a: <>Yes — pre-approved rules can post directly; everything else stays in queue for approval.</> },
    ],
  },
  permit: {
    name: "Permit",
    headline: <>Your build is gated by a permit. <span className="text-[var(--color-text-2)]">Permit knows.</span></>,
    body: "Permit tracks every jurisdictional dependency and routes the next action before the project waits.",
    proof: "Cuts permit-blocked days 35–50%.",
    works: [
      { title: "Models every authority",  body: <>City, county, state, federal — Permit understands the dependency tree.</> },
      { title: "Tracks every condition",  body: <>Approvals, expirations, conditions, inspections, signatures.</> },
      { title: "Routes the next action",  body: <>To the right party, before the project waits for it.</> },
    ],
    faq: [
      { q: "Does it integrate with city portals?", a: <>For US top-50 metros, yes. For others, we manage the workflow even when the portal is paper.</> },
    ],
  },
  copilot: {
    name: "Copilot",
    headline: <>Ask Fieldforce. <span className="text-[var(--color-text-2)]">Get a sourced answer.</span></>,
    body: "Copilot is the natural-language interface to your network. It answers, cites the rows, and offers the next action.",
    proof: "Every action is logged. Every approval is yours.",
    works: [
      { title: "Reads everything",     body: <>Sites, assets, work, evidence, agent activity. All grounded in your real data.</> },
      { title: "Cites the rows",       body: <>Every answer comes with sources — work-order numbers, photo IDs, time windows.</> },
      { title: "Offers next actions",  body: <>"Open the 12 photo-only tickets in Evidence?" — one click to act.</> },
    ],
    faq: [
      { q: "Can Copilot act on my behalf?", a: <>Yes — within your approval rules. Read-only by default; write requires per-action approval.</> },
      { q: "Where does Copilot run?", a: <>Inference in your region. Models are continuously evaluated against your domain.</> },
    ],
  },
};

export async function generateStaticParams() {
  return (Object.keys(AGENTS) as AgentSlug[]).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = AGENTS[slug as AgentSlug];
  if (!a) return { title: "Not found" };
  return { title: a.name, description: a.body };
}

export default async function AgentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = AGENTS[slug as AgentSlug];
  if (!a) notFound();

  const others = (Object.keys(AGENTS) as AgentSlug[])
    .filter((s) => s !== slug)
    .slice(0, 3)
    .map((s) => ({
      href: `/agents/${s}`,
      title: AGENTS[s].name,
      category: "AGENT",
      excerpt: AGENTS[s].body,
    }));

  return (
    <>
      <Breadcrumb
        items={[
          { href: "/platform",        label: "Platform" },
          { href: "/platform/agents", label: "Agents" },
        ]}
        current={a.name}
      />
      <PageHero
        eyebrow={`AGENT / ${a.name.toUpperCase()}`}
        title={a.headline}
        body={a.body}
        primaryCta={{ href: "/demo", label: "Book a demo" }}
        secondaryCta={{ href: "/platform/agents", label: "All agents" }}
      />

      {a.works.map((w, i) => (
        <FeatureSplit
          key={w.title}
          reverse={i % 2 === 1}
          eyebrow={`STEP ${i + 1}`}
          title={w.title}
          body={w.body}
          visual={
            <div className="grid place-items-center rounded-[10px] bg-[var(--color-bg-inset)] p-10 text-center font-mono text-[12px] tracking-[0.04em] text-[var(--color-text-3)]">
              [ visualization placeholder — wire to {a.name} demo ]
            </div>
          }
        />
      ))}

      <FAQ
        eyebrow={`${a.name.toUpperCase()} FAQ`}
        title="The questions teams ask."
        items={a.faq}
      />

      <RelatedRow
        eyebrow="OTHER AGENTS"
        title="See the family."
        items={others}
      />

      <CtaBand
        eyebrow={`SEE ${a.name.toUpperCase()} IN ACTION`}
        title={
          <>
            {a.name} works best <span className="grad-text">on a real network.</span>
          </>
        }
        body={a.proof}
        primary={{ href: "/demo", label: "Book a demo" }}
        secondary={{ href: "mailto:engineering@fieldforce.com", label: "Talk to engineering" }}
      />
    </>
  );
}
