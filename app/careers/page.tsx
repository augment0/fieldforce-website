import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { JobList, type Job } from "@/components/sections/job-list";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { CtaBand } from "@/components/sections/cta-band";
import { SectionShell } from "@/components/ui/section-shell";

export const metadata: Metadata = {
  title: "Careers",
  description: "We're writing the software layer for the world's networks. Join us.",
};

const jobs: Job[] = [
  { slug: "senior-platform-engineer",     title: "Senior Platform Engineer",                  team: "Engineering", location: "Remote · US/EU", remote: true },
  { slug: "agent-systems-engineer",        title: "Agent Systems Engineer",                    team: "Engineering", location: "Munich",          remote: false },
  { slug: "infra-reliability",             title: "Infrastructure Reliability Engineer",        team: "Engineering", location: "Karachi",         remote: false },
  { slug: "product-designer-platform",     title: "Product Designer · Platform",               team: "Design",      location: "Remote · US/EU", remote: true },
  { slug: "head-of-product-marketing",     title: "Head of Product Marketing",                  team: "GTM",         location: "Arlington, VA",   remote: false },
  { slug: "enterprise-account-executive",  title: "Enterprise Account Executive · EMEA",        team: "GTM",         location: "Munich",          remote: false },
  { slug: "solutions-architect",           title: "Solutions Architect · Telecom",              team: "GTM",         location: "Remote · US",     remote: true },
  { slug: "customer-success-lead-mena",    title: "Customer Success Lead · MENA",               team: "Operations",  location: "Dubai",           remote: false },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="CAREERS"
        title={<>Build the platform <span className="text-[var(--color-text-2)]">that runs the world's networks.</span></>}
        body="We're a small team — about 60 people across Arlington, Munich, and Karachi — building the operating system for physical infrastructure. We hire senior engineers, designers, and operators who care about the work."
        primaryCta={{ href: "#open-roles", label: "Open roles" }}
        secondaryCta={{ href: "mailto:careers@fieldforce.com", label: "Email recruiting" }}
      />

      <FeatureGrid
        eyebrow="HOW WE WORK"
        title={<>Three principles. <span className="text-[var(--color-text-2)]">Held seriously.</span></>}
        columns={3}
        items={[
          { title: "Restraint is the brand", body: "We ship less, more carefully. Every dependency, page, animation, and feature is fought for." },
          { title: "Engineers talk to users", body: "Every engineer goes on customer calls. The 'product person' is everyone." },
          { title: "Decisions are documented", body: "Long-form, written, archived. Slack is for chatter; ADRs are for decisions." },
        ]}
      />

      <SectionShell id="open-roles">
        <div className="shell">
          <header className="mb-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--color-text-3)]">
              ── OPEN ROLES ──
            </p>
            <h2 className="display-lg mt-5">{jobs.length} open positions.</h2>
            <p className="mt-5 max-w-[56ch] text-[16px] leading-[1.6] text-[var(--color-text-2)]">
              Don't see your role? We're always interested in great people.{" "}
              <a href="mailto:careers@fieldforce.com" className="text-[var(--color-accent)] underline-offset-[3px] hover:underline">
                Email recruiting
              </a>{" "}
              with what you'd build here.
            </p>
          </header>
          <JobList items={jobs} />
        </div>
      </SectionShell>

      <CtaBand
        eyebrow="WORKING AT FIELDFORCE"
        title={<>Quiet brand. <span className="grad-text">Loud impact.</span></>}
        body="Equity, real flexibility, real budgets, three offices, and a roadmap that goes for a decade."
        primary={{ href: "#open-roles", label: "See open roles" }}
        secondary={{ href: "mailto:careers@fieldforce.com", label: "Email recruiting" }}
      />
    </>
  );
}
