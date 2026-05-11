import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageHero } from "@/components/sections/page-hero";
import { StatBar } from "@/components/sections/stat-bar";
import { FeatureSplit } from "@/components/sections/feature-split";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { Testimonial } from "@/components/sections/testimonial";
import { FAQ } from "@/components/sections/faq";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Operate & Maintain | Platform lifecycle",
  description:
    "Coordinate field crews to meet SLAs at carrier reliability. Preventive and corrective maintenance, NOC integration, mobile-first dispatch — for every asset, every site.",
};

export default function OperateStagePage() {
  return (
    <>
      <Breadcrumb items={[{ href: "/platform", label: "Platform" }]} current="Operate & Maintain" />

      <PageHero
        eyebrow="LIFECYCLE / OPERATE & MAINTAIN"
        title={
          <>
            Run the network.
            <br />
            <span className="grad-text">At carrier reliability.</span>
          </>
        }
        body="Once the network is built, the work changes. Preventive maintenance schedules, corrective tickets from the NOC, site access requests, safety attestations, vendor SLAs — Operate & Maintain coordinates every field action against one site record, evidenced and reconciled."
        primaryCta={{ href: "/demo", label: "Book a demo" }}
        secondaryCta={{ href: "/platform/monetize", label: "Next: Monitor & Monetize" }}
        visual={<OperationsBoard />}
      />

      <StatBar
        items={[
          { value: "2.34M",  label: "work orders YTD" },
          { value: "Doubled", label: "productivity (customer-reported)" },
          { value: "Offline-first", label: "field app · works without signal" },
          { value: "100%",   label: "paperless workflows" },
        ]}
      />

      <FeatureSplit
        eyebrow="PREVENTIVE & CORRECTIVE MAINTENANCE"
        title={<>One queue. <span className="text-[var(--color-text-2)]">Every asset.</span></>}
        body={
          <p>
            Preventive maintenance schedules and corrective break-fix tickets
            run through the same queue, the same workflow, the same evidence.
            The Dispatch agent prioritizes against SLA exposure, parts
            availability, and crew skill.
          </p>
        }
        bullets={[
          "PM schedules per asset class, per region, per regulation",
          "Corrective tickets from NOC / EMS via ServiceNow, Solarwinds, Datadog",
          "Asset Sentinel: predictive maintenance via telemetry",
          "Evidence-gated closure on every work order",
        ]}
        cta={{ href: "/platform/work", label: "How Work works" }}
        visual={<WorkQueueMock />}
      />

      <FeatureSplit
        reverse
        eyebrow="FIELD APP · MOBILE-FIRST"
        title={<>Built for the field. <span className="text-[var(--color-text-2)]">Not adapted to it.</span></>}
        body={
          <p>
            iOS / Android. Offline-first. GPS-aware. Photo-led. Crews actually
            prefer the field app to the paper / WhatsApp / spreadsheet stack
            it replaces — because it was designed by people who've been on the
            tower.
          </p>
        }
        bullets={[
          "Offline-first — works in poor signal, syncs on return",
          "Photo-led closure with on-device evidence pre-check",
          "GPS-aware: in-zone attestations, safety check-ins",
          "Workflows mirror your SOPs — no redesign per crew",
        ]}
        cta={{ href: "/platform/mobile", label: "See the field app" }}
        visual={<FieldAppMock />}
      />

      <FeatureSplit
        eyebrow="SITE ACCESS & SAFETY"
        title={<>Access, attestation, compliance. <span className="text-[var(--color-text-2)]">In-app.</span></>}
        body={
          <p>
            Permits, gate codes, escort schedules, climb attestations, safety
            briefings — all in the same record, all in the app. Auto-generated
            audit packs for regulators. Big Four audited at customer sites.
          </p>
        }
        bullets={[
          "Site access management with permits, gate codes, escorts",
          "Climb / energized-work attestations in-app",
          "Auto-generated safety audit packs for regulators",
          "SOC 2 Type II · ISO 27001 · region-pinned residency",
        ]}
        cta={{ href: "/platform/security", label: "Trust & compliance" }}
        visual={<SafetyMock />}
      />

      <FeatureGrid
        eyebrow="WHAT YOU GET IN THE OPERATE STAGE"
        title={<>Every action, captured. <span className="text-[var(--color-text-2)]">No tribal knowledge.</span></>}
        columns={3}
        items={[
          { title: "PM + corrective in one queue", body: "Same workflow, same evidence, same audit trail." },
          { title: "NOC / EMS integration",        body: "ServiceNow, Solarwinds, Datadog — tickets in, state out." },
          { title: "Mobile-first crews",           body: "Offline, GPS-aware, photo-led — crews prefer it." },
          { title: "Asset Sentinel",                body: "Predictive maintenance via field telemetry." },
          { title: "Safety attestation",            body: "Climb, energized-work, gate codes — all in-app." },
          { title: "Audit-ready",                    body: "Immutable change log. Audit packs auto-generated." },
        ]}
      />

      <Testimonial
        quote={
          <>
            Fieldforce has <strong className="font-semibold">probably doubled our productivity.</strong> The platform meets crews where they work — and the data finally agrees with itself.
          </>
        }
        name="Operations Manager"
        role="Infrastructure operator"
        initials="OM"
      />

      <FAQ
        eyebrow="O&M LEADER QUESTIONS"
        title="What ops leaders ask in week one."
        items={[
          { q: "How long to digitize our field operations?",   a: <>First crew live in days. Full footprint typically 4–8 weeks. We don't do 18-month implementations.</> },
          { q: "Does it work offline in remote sites?",          a: <>Yes — the field app is offline-first. Crews work in poor signal, sync when they're back. No data lost.</> },
          { q: "How does it handle union workforces and MSPs?", a: <>Role-aware permissions, multi-customer ops, and crew scheduling that respects union rules. Live customers running mixed in-house + MSP workforces.</> },
          { q: "Can we keep our existing CMMS?",                  a: <>Many customers retire their CMMS as part of the migration. We integrate with IBM Maximo, IFS, ServiceMax where it makes sense.</> },
        ]}
      />

      <CtaBand
        eyebrow="STAGE 3 OF 4"
        title={<>Run it well. <span className="grad-text">For the asset's lifetime.</span></>}
        primary={{ href: "/demo", label: "Book a demo" }}
        secondary={{ href: "/platform/monetize", label: "Next: Monitor & Monetize →" }}
      />
    </>
  );
}

function OperationsBoard() {
  return (
    <div className="overflow-hidden rounded-[14px] border border-[var(--color-line)] bg-[radial-gradient(ellipse_at_center,var(--color-accent-glow),transparent_70%),var(--color-bg-inset)] p-6">
      <div className="grid grid-cols-2 gap-3">
        {[
          { v: "1,247",  l: "open tickets" },
          { v: "94%",    l: "first-pass close" },
          { v: "11d",    l: "SLA lead time" },
          { v: "182",    l: "PMs this week" },
          { v: "8",      l: "predictive flags" },
          { v: "0",      l: "audit findings" },
        ].map((m) => (
          <div key={m.l} className="rounded-[10px] border border-[var(--color-line-subtle)] bg-[var(--color-bg-raised)] p-4">
            <div className="font-display text-[22px] font-semibold leading-none tracking-[-0.022em] text-[var(--color-accent)]">
              {m.v}
            </div>
            <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-text-3)]">
              {m.l}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function WorkQueueMock() {
  return (
    <div className="font-mono text-[12px]">
      <div className="grid grid-cols-[80px_1fr_70px] gap-3 border-b border-[var(--color-line-subtle)] px-4 py-3 text-[var(--color-text-3)]">
        <span>WO</span>
        <span>TYPE · SITE</span>
        <span className="text-right">SLA</span>
      </div>
      {[
        ["WO-4012", "PM · SITE-18244",          "12h"],
        ["WO-4013", "Corrective · SITE-18403",  "4h"],
        ["WO-4014", "Predictive · SITE-18411",  "—"],
        ["WO-4015", "PM · SITE-18420",          "24h"],
        ["WO-4016", "Corrective · SITE-18432",  "2h"],
      ].map((r) => (
        <div key={r[0]} className="grid grid-cols-[80px_1fr_70px] gap-3 border-b border-[var(--color-line-subtle)] px-4 py-3 last:border-b-0">
          <span className="text-[var(--color-text-3)]">{r[0]}</span>
          <span className="text-[var(--color-text-2)]">{r[1]}</span>
          <span
            className={
              r[2] === "2h" || r[2] === "4h"
                ? "text-right text-[var(--color-warn)]"
                : "text-right text-[var(--color-accent)]"
            }
          >
            {r[2]}
          </span>
        </div>
      ))}
    </div>
  );
}

function FieldAppMock() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {[
        { l: "GPS attest", t: "in-zone ✓" },
        { l: "Closure photo", t: "CV ✓" },
        { l: "Signature", t: "captured ✓" },
        { l: "Safety briefing", t: "filed ✓" },
      ].map((m) => (
        <div key={m.l} className="rounded-[10px] border border-[var(--color-line-subtle)] bg-[var(--color-bg-inset)] p-4">
          <div className="font-display text-[16px] font-semibold leading-none tracking-[-0.01em] text-[var(--color-accent)]">
            {m.t}
          </div>
          <div className="mt-2 font-mono text-[10.5px] uppercase tracking-[0.1em] text-[var(--color-text-3)]">
            {m.l}
          </div>
        </div>
      ))}
    </div>
  );
}

function SafetyMock() {
  return (
    <div className="flex flex-col gap-2 font-mono text-[12px]">
      {[
        { l: "Climb attestation · SITE-18244 · CREW-04", t: "✓ filed" },
        { l: "Gate code · SITE-18403", t: "active" },
        { l: "Escort schedule · SITE-18411 · 09:00", t: "confirmed" },
        { l: "Energized-work permit · SITE-18420", t: "issued" },
      ].map((r) => (
        <div key={r.l} className="grid grid-cols-[1fr_90px] gap-3 rounded-md border border-[var(--color-line-subtle)] bg-[var(--color-bg-inset)] px-3 py-[10px]">
          <span className="text-[var(--color-text-2)]">{r.l}</span>
          <span className="text-right text-[var(--color-accent)]">{r.t}</span>
        </div>
      ))}
    </div>
  );
}
