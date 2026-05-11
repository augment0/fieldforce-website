import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { UseCases } from "@/components/sections/use-cases";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Solutions",
  description: "One platform for telecom, EV, and IoT. Pick your vertical.",
};

export default function SolutionsParentPage() {
  return (
    <>
      <PageHero
        eyebrow="SOLUTIONS"
        title={<>One platform. <span className="text-[var(--color-text-2)]">Every infrastructure.</span></>}
        body="Telecom today, EV and IoT next. Same primitives — sites, assets, work, evidence — running every operator, in every vertical, on one platform."
        primaryCta={{ href: "/demo", label: "Book a demo" }}
        secondaryCta={{ href: "/platform", label: "See the platform" }}
      />
      <UseCases />
      <CtaBand
        eyebrow="PICK YOUR VERTICAL"
        title={<>Or run all three <span className="grad-text">on one platform.</span></>}
        primary={{ href: "/demo", label: "Book a demo" }}
        secondary={{ href: "/customers", label: "See customers" }}
      />
    </>
  );
}
