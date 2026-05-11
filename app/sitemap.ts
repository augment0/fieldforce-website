import type { MetadataRoute } from "next";

const BASE = "https://fieldforce.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const monthly = "monthly" as const;
  const weekly = "weekly" as const;

  const staticRoutes = [
    { url: "",                          priority: 1.0, freq: weekly  },
    { url: "/platform",                 priority: 0.9, freq: monthly },
    { url: "/platform/sites",           priority: 0.7, freq: monthly },
    { url: "/platform/assets",          priority: 0.7, freq: monthly },
    { url: "/platform/work",            priority: 0.7, freq: monthly },
    { url: "/platform/evidence",        priority: 0.7, freq: monthly },
    { url: "/platform/integrations",    priority: 0.7, freq: monthly },
    { url: "/platform/security",        priority: 0.7, freq: monthly },
    { url: "/platform/agents",          priority: 0.9, freq: monthly },
    { url: "/platform/analytics",       priority: 0.8, freq: monthly },
    { url: "/platform/mobile",          priority: 0.8, freq: monthly },
    { url: "/solutions",                priority: 0.8, freq: monthly },
    { url: "/solutions/telecom",        priority: 0.9, freq: monthly },
    { url: "/solutions/ev-energy",      priority: 0.8, freq: monthly },
    { url: "/solutions/iot",            priority: 0.8, freq: monthly },
    { url: "/customers",                priority: 0.8, freq: weekly  },
    { url: "/pricing",                  priority: 0.7, freq: monthly },
    { url: "/trust",                    priority: 0.6, freq: monthly },
    { url: "/trust/status",             priority: 0.5, freq: weekly  },
    { url: "/changelog",                priority: 0.7, freq: weekly  },
    { url: "/docs",                     priority: 0.6, freq: monthly },
    { url: "/blog",                     priority: 0.7, freq: weekly  },
    { url: "/about",                    priority: 0.5, freq: monthly },
    { url: "/careers",                  priority: 0.6, freq: weekly  },
    { url: "/contact",                  priority: 0.6, freq: monthly },
    { url: "/demo",                     priority: 0.7, freq: monthly },
  ];

  const agentRoutes = ["dispatch", "forecast", "evidence", "reconcile", "permit", "copilot"].map(
    (slug) => ({
      url: `/agents/${slug}`,
      priority: 0.7,
      freq: monthly,
    }),
  );

  return [...staticRoutes, ...agentRoutes].map((r) => ({
    url: `${BASE}${r.url}`,
    changeFrequency: r.freq,
    priority: r.priority,
    lastModified: now,
  }));
}
