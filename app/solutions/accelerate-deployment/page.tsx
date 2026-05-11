import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageHero } from "@/components/sections/page-hero";
import { StatBar } from "@/components/sections/stat-bar";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { Testimonial } from "@/components/sections/testimonial";
import { FAQ } from "@/components/sections/faq";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Accelerate deployment | Solutions",
  description:
    "Plan, dispatch, validate, and close sites at carrier scale. Eliminate the slip between permits, leases, and crews. 25–30% faster deployment.",
};

export default function AccelerateDeploymentPage() {
  return (
    <>
      <Breadcrumb items={[{ href: "/solutions", label: "Solutions" }]} current="Accelerate deployment" />

      <PageHero
        eyebrow="SOLUTIONS / ACCELERATE DEPLOYMENT"
        title={
          <>
            Ship sites <span className="grad-text">25–30% faster.</span>
            <br />
            <span className="text-[var(--color-text-2)]">Across every vendor, every region.</span>
          </>
        }
        body="The build doesn't slip in any one place — it slips because permits, leases, crews, parts, and approvals don't talk. Fieldforce closes that gap with a single deployment OS: one plan, one queue, one source of truth."
        primaryCta={{ href: "/demo", label: "Book a demo" }}
        secondaryCta={{ href: "/platform/work", label: "See the Work module" }}
      />

      <StatBar
        items={[
          { value: "25–30%", label: "deployment time reduction" },
          { value: "24h",    label: "first site live, contract to ticket" },
          { value: "11d",    label: "SLA breach forecast lead time" },
          { value: "94%",    label: "first-pass field QA" },
        ]}
      />

      <FeatureGrid
        eyebrow="HOW THE PLATFORM ACCELERATES YOUR BUILD"
        title={<>One operating system. <span className="text-[var(--color-text-2)]">Every step of the build.</span></>}
        columns={3}
        items={[
          { title: "Permit-aware dispatch",   body: "Crews automatically re-routed when a permit slips, against weather, parts, and SLA risk." },
          { title: "Multi-stakeholder plans",  body: "Operators, towercos, OEMs, contractors, municipalities — one plan with role-aware views." },
          { title: "Evidence-gated closure",   body: "Sites don't close until computer vision confirms the work was actually done." },
          { title: "Real-time risk forecast",  body: "Sites that will breach SLA surfaced 11 days early. Average. We've measured." },
          { title: "Vendor coordination",      body: "Nine vendor invoice formats. One queue. Variance over your threshold flagged in seconds." },
          { title: "Mobile-first crews",       body: "Field App is offline-first, GPS-aware, photo-captured — built for the field, not adapted to it." },
        ]}
      />

      <Testimonial
        quote={
          <>
            Four systems retired. <strong className="font-semibold">Crew-day waste cut 22%</strong>. We deploy faster, and we deploy with confidence — because the data behind the work is finally trustworthy.
          </>
        }
        name="Haynes Griffin"
        role="CEO · SmartSky Networks"
        initials="HG"
      />

      <FAQ
        eyebrow="DISCOVERY QUESTIONS"
        title="What deployment leaders actually want to know."
        items={[
          { q: "How fast does a first site go live?", a: <>24 hours. We have customers who went from contract to a real work order moving through the platform in a single working day.</> },
          { q: "Does Fieldforce replace our ERP?",    a: <>No. Fieldforce sits alongside Oracle / SAP / NetSuite — reading from them, writing back. Your ERP stays the system of finance; Fieldforce becomes the system of action.</> },
          { q: "What does '25–30% faster' actually mean?", a: <>Time from site acquisition to live revenue. Measured across telecom builds in 23 countries. We'll model it for your network during a demo.</> },
          { q: "Does this work for non-telecom builds?", a: <>Yes — EV charging, smart cities, private 5G, and distributed IoT all run the same deployment primitives. See <a className="text-[var(--color-accent)] underline-offset-2 hover:underline" href="/industries">industries</a>.</> },
        ]}
      />

      <CtaBand
        eyebrow="SEE IT ON YOUR BUILD"
        title={<>Your network deserves <span className="grad-text">better tooling.</span></>}
        primary={{ href: "/demo", label: "Book a demo" }}
        secondary={{ href: "/customers", label: "See customers" }}
        fineprint="First site live in 24 hours."
      />
    </>
  );
}
