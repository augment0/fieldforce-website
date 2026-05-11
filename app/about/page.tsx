import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { StatBar } from "@/components/sections/stat-bar";
import { TeamGrid } from "@/components/sections/team-grid";
import { Timeline } from "@/components/sections/timeline";
import { CtaBand } from "@/components/sections/cta-band";
import { SectionShell } from "@/components/ui/section-shell";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "About",
  description: "Founded in 2014, Fieldforce builds the operating system for physical infrastructure.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT"
        title={<>We're writing the software layer <span className="text-[var(--color-text-2)]">for the world's networks.</span></>}
        body="Fieldforce was founded in 2014 in Arlington, Virginia. Today we run from three offices across two continents, and the platform manages $10B+ in network assets across 23 countries."
        primaryCta={{ href: "/careers", label: "Open roles" }}
        secondaryCta={{ href: "/demo", label: "Book a demo" }}
      />

      <StatBar
        items={[
          { value: "2014", label: "founded" },
          { value: "23",   label: "countries" },
          { value: "$10B+", label: "assets managed" },
          { value: "3",    label: "offices" },
        ]}
      />

      <SectionShell tone="tight">
        <div className="shell shell-narrow">
          <Reveal>
            <Eyebrow>OUR STORY</Eyebrow>
            <h2 className="display-lg mt-5">Started in telecom. <span className="text-[var(--color-text-2)]">Built for the next decade.</span></h2>
            <p className="mt-6 max-w-[60ch] text-[16px] leading-[1.65] text-[var(--color-text-2)]">
              Fieldforce began as a tool to digitize 5G site builds for one
              operator. By 2018, six. By 2022, more than fifty operators
              across telecom, EV, and IoT. Through it all, the bet was the
              same: the company that builds the operating system for physical
              infrastructure wins the next decade.
            </p>
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell>
        <div className="shell">
          <Reveal>
            <header className="mb-12 max-w-[680px]">
              <Eyebrow>MILESTONES</Eyebrow>
              <h2 className="display-lg mt-5">A short list of long stretches.</h2>
            </header>
          </Reveal>
          <Timeline
            entries={[
              { date: "2014-04-01", title: "Founded in Arlington, VA",            body: <>Two engineers and a contract with a regional carrier.</> },
              { date: "2017-09-12", title: "First international customer",         body: <>Veon. Multi-country ops on one platform.</>, tags: ["Telecom"] },
              { date: "2019-11-04", title: "Munich engineering office",            body: <>European operations and EU customer success.</> },
              { date: "2022-02-14", title: "First EV charging deployment",         body: <>Same primitives, new physics.</>, tags: ["EV & Energy"] },
              { date: "2024-06-08", title: "Karachi engineering hub",              body: <>Engineering scaled across continents.</> },
              { date: "2026-01-17", title: "Agent family GA",                       body: <>Dispatch, Forecast, Evidence, Reconcile, Permit, Copilot — all in production.</>, tags: ["Agents"] },
            ]}
          />
        </div>
      </SectionShell>

      <SectionShell>
        <div className="shell">
          <Reveal>
            <header className="mb-12 max-w-[680px]">
              <Eyebrow>LEADERSHIP</Eyebrow>
              <h2 className="display-lg mt-5">The team building this.</h2>
              <p className="mt-5 max-w-[56ch] text-[16px] leading-[1.6] text-[var(--color-text-2)]">
                Engineers who've shipped network software, telecom operators
                who've run real networks, and product designers who've spent
                more time on rooftops than at desks.
              </p>
            </header>
          </Reveal>
          <TeamGrid
            members={[
              { name: "Shahzaib Khan",  role: "CEO & Founder",         initials: "SK", bio: "Former network operations engineer. Started Fieldforce in 2014." },
              { name: "Pat Lin",        role: "Chief Product Officer", initials: "PL", bio: "Product at Sitetracker, then Linear. Joined to bring agentic ops to infrastructure." },
              { name: "Rana Mehta",     role: "VP Engineering",        initials: "RM", bio: "Built the work-order graph that runs every Fieldforce deployment." },
              { name: "Sara Olwen",     role: "VP Customer Success",   initials: "SO", bio: "Six years at IFS scaling tier-1 telecom rollouts." },
            ]}
          />
        </div>
      </SectionShell>

      <CtaBand
        eyebrow="JOIN US"
        title={<>If you've ever wished software <span className="grad-text">treated infrastructure seriously.</span></>}
        primary={{ href: "/careers", label: "See open roles" }}
        secondary={{ href: "mailto:careers@fieldforce.com", label: "Email recruiting" }}
      />
    </>
  );
}
