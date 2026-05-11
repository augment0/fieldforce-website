import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ArticleList, type Article } from "@/components/sections/article-list";
import { CtaBand } from "@/components/sections/cta-band";
import { SectionShell } from "@/components/ui/section-shell";

export const metadata: Metadata = {
  title: "Blog",
  description: "Engineering, operations, and industry takes from Fieldforce.",
};

const articles: Article[] = [
  {
    slug: "agentic-infrastructure-isnt-an-llm-on-a-dashboard",
    category: "Engineering",
    title: "Agentic infrastructure isn't an LLM on a dashboard",
    excerpt: "Why the next decade of infra software belongs to agents that act — not chatbots that summarize.",
    date: "2026-04-30",
    readMin: 9,
    author: "Shahzaib Khan",
  },
  {
    slug: "5g-rollout-postmortem-2025",
    category: "Operations",
    title: "5G rollout postmortem: what 2025 taught us",
    excerpt: "Three years of 5G builds across 23 countries. The patterns that actually predict slip.",
    date: "2026-04-12",
    readMin: 14,
    author: "Pat Lin",
  },
  {
    slug: "how-evidence-learns-from-your-photos",
    category: "AI",
    title: "How Evidence learns from your photos",
    excerpt: "A look at the on-customer-data fine-tuning loop that moves QA from 71% → 94%.",
    date: "2026-03-26",
    readMin: 11,
    author: "Rana Mehta",
  },
  {
    slug: "ev-charging-isnt-telecom-and-thats-okay",
    category: "Industry",
    title: "EV charging isn't telecom — and that's okay",
    excerpt: "Same platform, new physics. Why the verbs change but the primitives don't.",
    date: "2026-03-08",
    readMin: 7,
    author: "Sara Olwen",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="BLOG"
        title={<>Engineering, operations, <span className="text-[var(--color-text-2)]">and industry takes.</span></>}
        body="One strong post a month, not four mediocre listicles. Bylines on every piece — written by the people who built the platform."
        primaryCta={{ href: "/feed.xml",  label: "Subscribe (RSS)" }}
        secondaryCta={{ href: "/demo",   label: "Book a demo" }}
      />

      <SectionShell>
        <div className="shell">
          <ArticleList items={articles} />
        </div>
      </SectionShell>

      <CtaBand
        eyebrow="MORE TO READ"
        title={<>Subscribe — <span className="grad-text">we're never going to spam you.</span></>}
        primary={{ href: "/feed.xml", label: "Subscribe (RSS)" }}
        secondary={{ href: "/demo",  label: "Book a demo" }}
      />
    </>
  );
}
