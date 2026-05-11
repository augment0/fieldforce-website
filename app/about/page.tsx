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
  title: "Company",
  description: "Meet the Fieldforce leadership and advisory team powering next-generation infrastructure deployment.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="COMPANY"
        title={<>Enabling efficient deployment of <span className="text-[var(--color-text-2)]">next-generation infrastructure.</span></>}
        body="Fieldforce was founded to simplify the complex, costly work of deploying and managing modern infrastructure. Our team has decades of hands-on network operations experience across operators, vendors, and service providers."
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
            <h2 className="display-lg mt-5">Built from the field up. <span className="text-[var(--color-text-2)]">Designed for operators under pressure.</span></h2>
            <p className="mt-6 max-w-[60ch] text-[16px] leading-[1.65] text-[var(--color-text-2)]">
              Fieldforce is the only end-to-end platform focused on streamlining
              the full infrastructure lifecycle, from site selection and
              acquisition to deployment and ongoing maintenance. As a
              bootstrapped company, we iterate fast and stay obsessively close
              to customer outcomes.
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

      <SectionShell id="leadership">
        <div className="shell">
          <Reveal>
            <header className="mb-12 max-w-[680px]">
              <Eyebrow>LEADERSHIP</Eyebrow>
              <h2 className="display-lg mt-5">About the team.</h2>
              <p className="mt-5 max-w-[56ch] text-[16px] leading-[1.6] text-[var(--color-text-2)]">
                Our leadership combines deep domain expertise in telecom,
                enterprise operations, and product delivery. The team is
                focused on making infrastructure deployment easier, faster, and
                more reliable for every customer.
              </p>
            </header>
          </Reveal>
          <TeamGrid
            members={[
              {
                name: "Basit Malik",
                role: "Founder & CEO",
                initials: "BM",
                bio: "Founder and CEO of Fieldforce, focused on simplifying infrastructure deployment end-to-end.",
                photoSrc: "/images/team/basit-malik.png",
              },
              {
                name: "Mustajab Shaukat",
                role: "Sales",
                initials: "MS",
                bio: "Leads customer-facing growth and commercial execution across Fieldforce deployments.",
                photoSrc: "/images/team/mustajab-shaukat.png",
              },
              {
                name: "Shaukat Sarwar",
                role: "Engineering",
                initials: "SS",
                bio: "Leads engineering delivery with a focus on product reliability and operational scale.",
                photoSrc: "/images/team/shaukat-sarwar.png",
              },
            ]}
          />
        </div>
      </SectionShell>

      <SectionShell id="advisory-board" tone="tight">
        <div className="shell">
          <Reveal>
            <header className="mb-12 max-w-[680px]">
              <Eyebrow>ADVISORY BOARD</Eyebrow>
              <h2 className="display-lg mt-5">Operators who guide the roadmap.</h2>
              <p className="mt-5 max-w-[56ch] text-[16px] leading-[1.6] text-[var(--color-text-2)]">
                The advisory board brings decades of global telecom and software
                leadership to ensure Fieldforce stays grounded in real-world
                operator needs.
              </p>
            </header>
          </Reveal>
          <TeamGrid
            members={[
              {
                name: "Zia Chishti",
                role: "Founder Afiniti/TRG",
                initials: "ZC",
                photoSrc: "/images/team/zia-chishti.jpg",
              },
              {
                name: "Dave Flessas",
                role: "Global Operations Executive",
                initials: "DF",
                photoSrc: "/images/team/dave-flessas.jpg",
              },
              {
                name: "Limond Grindstaff",
                role: "Global Telecom CTO",
                initials: "LG",
                photoSrc: "/images/team/limond-grindstaff.jpg",
              },
              {
                name: "Zouhair Khaliq",
                role: "Global Telecom CEO",
                initials: "ZK",
                photoSrc: "/images/team/zouhair-khaliq.jpg",
              },
              {
                name: "Noah Kindler",
                role: "Head of Software @ 2 unicorns",
                initials: "NK",
                photoSrc: "/images/team/noah-kindler.jpg",
              },
              {
                name: "Alex Shalaby",
                role: "Global Telecom CEO",
                initials: "AS",
                photoSrc: "/images/team/alex-shalaby.jpg",
              },
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
