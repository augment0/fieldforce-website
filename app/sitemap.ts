import { sortedBlogPosts } from "@/lib/blog";
import type { MetadataRoute } from "next";

const BASE = "https://fieldforce.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const monthly = "monthly" as const;
  const weekly = "weekly" as const;

  const staticRoutes = [
    { url: "", priority: 1.0, freq: weekly },

    /* Why Fieldforce — positioning surface */
    { url: "/why", priority: 0.9, freq: monthly },

    /* Platform — what we do, organized by lifecycle */
    { url: "/platform", priority: 0.95, freq: monthly },
    { url: "/platform/plan", priority: 0.9, freq: monthly },
    { url: "/platform/build", priority: 0.9, freq: monthly },
    { url: "/platform/operate", priority: 0.9, freq: monthly },
    { url: "/platform/monetize", priority: 0.9, freq: monthly },
    { url: "/platform/sites", priority: 0.7, freq: monthly },
    { url: "/platform/assets", priority: 0.7, freq: monthly },
    { url: "/platform/work", priority: 0.7, freq: monthly },
    { url: "/platform/evidence", priority: 0.7, freq: monthly },
    { url: "/platform/integrations", priority: 0.7, freq: monthly },
    { url: "/platform/security", priority: 0.7, freq: monthly },
    { url: "/platform/agents", priority: 0.9, freq: monthly },
    { url: "/platform/analytics", priority: 0.8, freq: monthly },
    { url: "/platform/mobile", priority: 0.8, freq: monthly },

    /* Industries — who we serve, grouped by macro-theme */
    { url: "/industries", priority: 0.9, freq: monthly },
    { url: "/industries/telecom", priority: 0.9, freq: monthly },
    { url: "/industries/fiber-networks", priority: 0.85, freq: monthly },
    { url: "/industries/tower-companies", priority: 0.85, freq: monthly },
    { url: "/industries/private-networks", priority: 0.85, freq: monthly },
    { url: "/industries/data-centers", priority: 0.85, freq: monthly },
    { url: "/industries/ev-energy", priority: 0.85, freq: monthly },
    { url: "/industries/iot", priority: 0.85, freq: monthly },
    { url: "/industries/smart-cities", priority: 0.8, freq: monthly },
    { url: "/industries/engineering-construction", priority: 0.8, freq: monthly },

    /* Solutions — outcomes & jobs-to-be-done */
    { url: "/solutions", priority: 0.85, freq: monthly },
    { url: "/solutions/accelerate-deployment", priority: 0.8, freq: monthly },
    { url: "/solutions/cut-cost", priority: 0.8, freq: monthly },
    { url: "/solutions/digitize-field-ops", priority: 0.8, freq: monthly },
    { url: "/solutions/manage-assets", priority: 0.75, freq: monthly },
    { url: "/solutions/monetize-leases", priority: 0.75, freq: monthly },
    { url: "/solutions/ai-operations", priority: 0.85, freq: monthly },
    { url: "/solutions/replace-legacy", priority: 0.75, freq: monthly },

    /* Customers — proof */
    { url: "/customers", priority: 0.85, freq: weekly },

    /* Resources & support */
    { url: "/pricing", priority: 0.7, freq: monthly },
    { url: "/trust", priority: 0.6, freq: monthly },
    { url: "/trust/status", priority: 0.5, freq: weekly },
    { url: "/changelog", priority: 0.7, freq: weekly },
    { url: "/docs", priority: 0.6, freq: monthly },
    { url: "/blog", priority: 0.7, freq: weekly },
    { url: "/resources", priority: 0.7, freq: monthly },
    { url: "/resources/webinars", priority: 0.6, freq: monthly },

    /* Company */
    { url: "/about", priority: 0.5, freq: monthly },
    { url: "/careers", priority: 0.6, freq: weekly },
    { url: "/contact", priority: 0.6, freq: monthly },
    { url: "/demo", priority: 0.75, freq: monthly },
  ];

  const agentRoutes = ["dispatch", "forecast", "evidence", "reconcile", "permit", "copilot"].map(
    (slug) => ({
      url: `/agents/${slug}`,
      priority: 0.7,
      freq: monthly,
    }),
  );

  const blogRoutes = sortedBlogPosts.map((post) => ({
    url: `/blog/${post.slug}`,
    priority: 0.65,
    freq: monthly,
  }));

  return [...staticRoutes, ...agentRoutes, ...blogRoutes].map((r) => ({
    url: `${BASE}${r.url}`,
    changeFrequency: r.freq,
    priority: r.priority,
    lastModified: now,
  }));
}
