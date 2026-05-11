import type { NextConfig } from "next";

const config: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  experimental: {
    optimizePackageImports: ["motion", "gsap", "@radix-ui/react-tabs"],
  },

  // Long cache for static assets, sensible defaults for HTML.
  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/:path*.(svg|png|jpg|jpeg|webp|avif|ico|woff2)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },

  /**
   * IA migration redirects.
   *
   * v3 (May 2026 — lifecycle-led IA, Sitetracker-pattern):
   *   - /solutions hub now redirects to /platform; lifecycle stages are the
   *     primary axis. Individual outcome pages at /solutions/<outcome>
   *     remain live for outcome-led SEO and cross-link from lifecycle pages.
   *
   * v2 (earlier — industries/solutions split):
   *   - /solutions/<industry> moved to /industries/<industry>.
   */
  async redirects() {
    return [
      /* v3: solutions hub → platform (lifecycle is the new spine) */
      { source: "/solutions",                  destination: "/platform",                    permanent: true },

      /* v2: legacy /solutions/<industry> → /industries/<industry> */
      { source: "/solutions/telecom",          destination: "/industries/telecom",          permanent: true },
      { source: "/solutions/ev-energy",        destination: "/industries/ev-energy",        permanent: true },
      { source: "/solutions/iot",              destination: "/industries/iot",              permanent: true },
      { source: "/solutions/private-networks", destination: "/industries/private-networks", permanent: true },
      { source: "/solutions/smart-cities",     destination: "/industries/smart-cities",     permanent: true },
    ];
  },
};

export default config;
