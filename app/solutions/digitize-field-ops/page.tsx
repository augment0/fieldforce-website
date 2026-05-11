import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageHero } from "@/components/sections/page-hero";
import { StatBar } from "@/components/sections/stat-bar";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { Testimonial } from "@/components/sections/testimonial";
import { FAQ } from "@/components/sections/faq";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Digitize field operations | Solutions",
  description:
    "Retire spreadsheets, email threads, and paper checklists. Every field action captured, evidenced, and connected to the system of record.",
};

export default function DigitizeFieldOpsPage() {
  return (
    <>
      <Breadcrumb items={[{ href: "/solutions", label: "Solutions" }]} current="Digitize field operations" />

      <PageHero
        eyebrow="SOLUTIONS / DIGITIZE FIELD OPS"
        title={
          <>
            Retire the spreadsheet stack.
            <br />
            <span className="text-[var(--color-text-2)]">Every action captured. Every site evidenced.</span>
          </>
        }
        body="Most field operations still run on email, WhatsApp, paper checklists, and a spreadsheet that one person guards. Fieldforce gives crews a mobile-first system of action and gives leadership a real-time system of record — without an 18-month implementation."
        primaryCta={{ href: "/demo", label: "Book a demo" }}
        secondaryCta={{ href: "/platform/mobile", label: "See the field app" }}
      />

      <StatBar
        items={[
          { value: "100%", label: "paperless workflows" },
          { value: "2.34M", label: "work orders YTD" },
          { value: "99.97%", label: "data integrity" },
          { value: "Offline-first", label: "field app — works without signal" },
        ]}
      />

      <FeatureGrid
        eyebrow="WHAT GETS DIGITIZED"
        title={<>Every action, captured. <span className="text-[var(--color-text-2)]">No tribal knowledge.</span></>}
        columns={3}
        items={[
          { title: "Mobile-first field app", body: "iOS / Android. Offline-first. GPS-aware. Photo-captured. Built for crews — not adapted from a desk app." },
          { title: "Digital workflows",       body: "Drag-build the procedure once. Every site, every crew, every region runs the same workflow with role-aware steps." },
          { title: "Evidence on every action", body: "Photos, signatures, scans, geo-stamps — automatically attached to the work order. Audit trail comes free." },
          { title: "Site access management",   body: "Permits, gate codes, escort schedules, safety attestations — managed in-app. No more emailing PDFs." },
          { title: "Preventive & corrective M&O", body: "Schedule, dispatch, close — preventive maintenance and break-fix on the same queue, evidenced the same way." },
          { title: "ERP / OSS / RMS write-back", body: "Closures, costs, asset states sync to Oracle, SAP, NetSuite, ServiceNow — no daily reconciliation." },
        ]}
      />

      <Testimonial
        quote={
          <>
            We were running 11 spreadsheets across 4 regions. Today, <strong className="font-semibold">one platform, one workflow, one number our CFO trusts</strong>. The field finally feels like the rest of the business.
          </>
        }
        name="Haynes Griffin"
        role="CEO · SmartSky Networks"
        initials="HG"
      />

      <FAQ
        eyebrow="OPS-LEADER QUESTIONS"
        title="What field-ops leaders ask in week one."
        items={[
          { q: "How long does implementation take?",   a: <>First site live in 24 hours. Full footprint typically 4–8 weeks. We don't do 18-month implementations.</> },
          { q: "Does it work offline in remote sites?", a: <>Yes — the field app is offline-first. Crews work in poor signal, sync when they're back. No data lost.</> },
          { q: "What about union workforces & MSPs?",    a: <>Role-aware permissions, multi-customer ops, and crew scheduling that respects union rules. We have customers running mixed in-house + MSP workforces on the platform.</> },
          { q: "Can we keep our SOPs and checklists?",   a: <>Yes — import your existing SOPs. The workflow builder mirrors them; you don't redesign your business to fit our model.</> },
        ]}
      />

      <CtaBand
        eyebrow="GO PAPERLESS IN A QUARTER"
        title={<>Your crews deserve <span className="grad-text">a real tool.</span></>}
        primary={{ href: "/demo", label: "Book a demo" }}
        secondary={{ href: "/platform/mobile", label: "See the field app" }}
      />
    </>
  );
}
