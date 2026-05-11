import { Breadcrumb } from "@/components/layout/breadcrumb";
import { Reveal } from "@/components/motion/reveal";
import { CtaBand } from "@/components/sections/cta-band";
import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionShell } from "@/components/ui/section-shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webinars & events",
  description: "Live sessions and on-demand recordings with the operators running on Fieldforce.",
};

type Session = {
  title: string;
  speakers: string;
  format: "Live" | "On-demand";
  date: string;
  body: string;
};

const upcoming: Session[] = [
  {
    title: "From four systems to one: how SmartSky cut crew-day waste 22%",
    speakers: "SmartSky Networks · Fieldforce",
    format: "Live",
    date: "Coming soon",
    body: "Inside the operating model change that retired four legacy tools and rewired field ops around a single work-and-evidence graph.",
  },
  {
    title: "What it takes to run a multi-country telecom rollout on one platform",
    speakers: "Veon · Fieldforce",
    format: "Live",
    date: "Coming soon",
    body: "Nine countries, one platform, one set of primitives. What changes — and what stays the same — when you unify carrier operations.",
  },
];

const onDemand: Session[] = [
  {
    title: "Agent-led operations: shipping six agents to production",
    speakers: "Fieldforce engineering",
    format: "On-demand",
    date: "Recording",
    body: "How the Dispatch, Forecast, Evidence, Reconcile, Permit, and Copilot agents act on operational data — and why we built them to act, not just observe.",
  },
  {
    title: "EV charger commissioning, telecom-grade",
    speakers: "Engro · Fieldforce",
    format: "On-demand",
    date: "Recording",
    body: "Why the same operating model that runs 5G site builds runs a 94% first-pass QA rate on EV charging deployments.",
  },
];

export default function WebinarsPage() {
  return (
    <>
      <Breadcrumb
        items={[{ href: "/resources", label: "Resources" }]}
        current="Webinars & events"
      />

      <PageHero
        eyebrow="RESOURCES / WEBINARS"
        title={
          <>
            Live sessions with operators.{" "}
            <span className="text-[var(--color-text-2)]">On your schedule, on demand.</span>
          </>
        }
        body="Conversations with the teams running on Fieldforce — what changed, what broke, what worked. Sign up for what's upcoming, watch what's been recorded."
        primaryCta={{
          href: "mailto:events@fieldforce.com?subject=Webinar%20notifications",
          label: "Notify me of new sessions",
        }}
        secondaryCta={{ href: "/customers", label: "Read customer stories" }}
      />

      <SessionRow eyebrow="UPCOMING" title="Sessions on the calendar." items={upcoming} />
      <SessionRow eyebrow="ON DEMAND" title="Watch what we've recorded." items={onDemand} />

      <CtaBand
        eyebrow="HOST A SESSION"
        title={
          <>
            Operator running on Fieldforce?{" "}
            <span className="grad-text">Co-host a session with us.</span>
          </>
        }
        primary={{ href: "mailto:events@fieldforce.com", label: "Email events team" }}
        secondary={{ href: "/contact", label: "Contact us" }}
      />
    </>
  );
}

function SessionRow({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: Session[];
}) {
  return (
    <SectionShell tone="tight">
      <div className="shell">
        <Reveal>
          <header className="mb-12 max-w-[680px]">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="display-lg mt-5">{title}</h2>
          </header>
        </Reveal>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {items.map((s) => (
            <Card key={s.title} className="h-full p-6">
              <div className="mb-4 flex items-center gap-3 font-mono text-[11px] tracking-[0.1em] text-[var(--color-text-3)]">
                <span className="rounded-full border border-[var(--color-line)] px-2 py-[2px] uppercase">
                  {s.format}
                </span>
                <span>{s.date}</span>
              </div>
              <h3 className="mb-2 text-[18px] font-semibold tracking-[-0.01em]">{s.title}</h3>
              <p className="mb-4 text-[14px] leading-[1.55] text-[var(--color-text-2)]">{s.body}</p>
              <p className="text-[12.5px] text-[var(--color-text-3)]">{s.speakers}</p>
            </Card>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
