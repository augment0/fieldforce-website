export type BlogContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "list"; ordered?: boolean; items: string[] };

export type BlogAuthor = {
  name: string;
  role: string;
  avatar: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  tags: string[];
  featuredImage: string;
  heroImage: string;
  author: BlogAuthor;
  sourceUrl: string;
  cta: {
    title: string;
    body: string;
    primaryLabel: string;
    primaryHref: string;
  };
  content: BlogContentBlock[];
};

const authors: Record<string, BlogAuthor> = {
  basit: {
    name: "Basit Malik",
    role: "Founder & CEO",
    avatar: "/images/team/basit-malik.png",
  },
  editorial: {
    name: "Fieldforce Editorial",
    role: "Research & Insights",
    avatar: "/images/team/noah-kindler.jpg",
  },
  press: {
    name: "Fieldforce Press",
    role: "Company Newsroom",
    avatar: "/images/team/alex-shalaby.jpg",
  },
};

export const blogPosts: BlogPost[] = [
  {
    slug: "fieldforce-inc-announces-better-digital-infrastructure-deployments-on-aws",
    title: "Fieldforce Inc. Announces Better Digital Infrastructure Deployments on AWS",
    excerpt:
      "Fieldforce expands cloud-native deployment and operations workflows on AWS for telecom, IoT, and smart-city infrastructure programs.",
    date: "2023-02-26",
    category: "News and Press Releases",
    tags: ["AWS", "5G", "IoT", "Smart Cities", "Digital Transformation"],
    featuredImage: "/images/blog/aws-cloud.jpg",
    heroImage: "/images/blog/aws-cloud.jpg",
    author: authors.basit,
    sourceUrl:
      "https://getfieldforce.com/resources/blog/fieldforce-inc-announces-better-digital-infrastructure-deployments-on-aws/",
    cta: {
      title: "Plan your AWS-powered infrastructure rollout",
      body: "See how Fieldforce helps teams digitize plan-build-operate workflows across distributed assets.",
      primaryLabel: "Book a demo",
      primaryHref: "/demo",
    },
    content: [
      {
        type: "paragraph",
        text: "Washington, D.C. - Fieldforce Inc., a leading global software company for digital transformation solutions, announced that it is simplifying and automating deployment of infrastructure including 5G, IoT applications, and smart cities on Amazon Web Services (AWS).",
      },
      {
        type: "paragraph",
        text: "The Fieldforce platform provides a no-code, out-of-the-box system that helps mobile operators, utilities, and city programs digitize deployment and maintenance workflows. Its proprietary data model powers analytics and AI/ML capabilities across project management, asset management, and operations.",
      },
      {
        type: "paragraph",
        text: "Now running on AWS, customers get access to AWS telecom and IoT services while using Fieldforce for network deployment and asset lifecycle operations.",
      },
      {
        type: "quote",
        text: "Fieldforce is designed to be an agile, cloud-based next-generation infrastructure deployment and asset management platform that can be quickly deployed, customized and implemented without the overhead and complexity of legacy systems.",
        cite: "Basit Malik, Founder and CEO, Fieldforce",
      },
      {
        type: "paragraph",
        text: "The platform has supported operations for billions of dollars of assets across the Americas, the Middle East, and Asia, and integrates with OSS/BSS systems through REST APIs.",
      },
      { type: "heading", text: "About Fieldforce Inc." },
      {
        type: "paragraph",
        text: "Fieldforce is a cloud platform for digital transformation of infrastructure deployment, operations, reporting, and analytics across telecom, IoT, energy, and smart-city ecosystems.",
      },
    ],
  },
  {
    slug: "zdnet-spacex-starlink-now-reaches-all-seven-continents-as-it-tests-polar-service",
    title: "ZDNet - SpaceX Starlink now reaches all seven continents as it tests polar service",
    excerpt:
      "Polar connectivity tests in Antarctica show how low-earth-orbit satellite networks are expanding high-bandwidth access in extreme environments.",
    date: "2022-09-15",
    category: "In the know",
    tags: ["Satellite", "Starlink", "Connectivity", "Cloud"],
    featuredImage: "/images/blog/starlink-space.jpg",
    heroImage: "/images/blog/starlink-space.jpg",
    author: authors.editorial,
    sourceUrl:
      "https://getfieldforce.com/resources/blog/zdnet-spacex-starlink-now-reaches-all-seven-continents-as-it-tests-polar-service",
    cta: {
      title: "Operationalize distributed network intelligence",
      body: "Coordinate field execution, assets, and telemetry from one platform as network footprints expand.",
      primaryLabel: "See the platform",
      primaryHref: "/platform",
    },
    content: [
      {
        type: "paragraph",
        text: "SpaceX's Starlink satellite service reached all seven continents after a polar test in Antarctica at McMurdo Station, improving bandwidth and connectivity for scientific operations.",
      },
      {
        type: "paragraph",
        text: "The US Antarctic Program has historically depended on constrained satellite windows and limited bandwidth. Starlink's optical inter-satellite links enable broader coverage with lower latency and less dependence on local ground stations.",
      },
      {
        type: "paragraph",
        text: "These developments point to a future where hybrid terrestrial-satellite connectivity supports enterprise workloads in regions with limited infrastructure.",
      },
    ],
  },
  {
    slug: "iot-analytics-state-of-iot-2022-number-of-connected-iot-devices-growing-18-to-14-4-billion-globally",
    title:
      "IoT Analytics - State of IoT 2022: Number of connected IoT devices growing 18% to 14.4 billion globally",
    excerpt:
      "Despite supply-chain headwinds, IoT adoption continues to scale with strong enterprise demand and long-term momentum.",
    date: "2022-08-22",
    category: "In the know",
    tags: ["IoT", "Research", "Supply Chain", "Industry 4.0"],
    featuredImage: "/images/blog/iot-data.jpg",
    heroImage: "/images/blog/iot-data.jpg",
    author: authors.editorial,
    sourceUrl:
      "https://getfieldforce.com/resources/blog/iot-analytics-state-of-iot-2022-number-of-connected-iot-devices-growing-18-to-14-4-billion-globally",
    cta: {
      title: "Scale IoT deployment with operational control",
      body: "Use Fieldforce to standardize rollout, maintenance, and analytics for large connected-asset programs.",
      primaryLabel: "Book an IoT demo",
      primaryHref: "/demo",
    },
    content: [
      {
        type: "paragraph",
        text: "IoT Analytics reported that global connected IoT endpoints reached 12.2 billion in 2021 and projected growth to 14.4 billion in 2022, even as chip shortages and logistics disruption persisted.",
      },
      { type: "heading", text: "Key trends shaping growth" },
      {
        type: "list",
        ordered: true,
        items: [
          "LPWA and NB-IoT adoption accelerated, especially in utility metering.",
          "Enterprises continued migration from 2G/3G to 4G/5G IoT connectivity.",
          "Supply constraints and pandemic-related disruptions reduced near-term growth expectations.",
          "Demand for IoT, AI, and edge-computing talent remained high across regions.",
        ],
      },
      {
        type: "paragraph",
        text: "Long-term sentiment remains positive, with growth tied to infrastructure resilience, operational efficiency, and stronger digital execution in enterprise environments.",
      },
    ],
  },
  {
    slug: "wired-autonomous-drones-could-soon-run-the-uks-energy-grid",
    title: "WIRED - Autonomous Drones Could Soon Run the UK's Energy Grid",
    excerpt:
      "Autonomous drone inspections are moving power-grid operations away from manual and helicopter-based workflows toward safer, scalable maintenance.",
    date: "2022-08-03",
    category: "In the know",
    tags: ["Drones", "Energy", "AI", "Inspection"],
    featuredImage: "/images/blog/autonomous-drone.jpg",
    heroImage: "/images/blog/autonomous-drone.jpg",
    author: authors.editorial,
    sourceUrl:
      "https://getfieldforce.com/resources/blog/wired-autonomous-drones-could-soon-run-the-uks-energy-grid/",
    cta: {
      title: "Bring autonomous workflows into field operations",
      body: "Coordinate crews, inspections, evidence, and remediation in one operational system.",
      primaryLabel: "Explore operations workflows",
      primaryHref: "/platform/work",
    },
    content: [
      {
        type: "paragraph",
        text: "A UK pilot demonstrated autonomous drone software inspecting high-voltage pylons with AI-assisted corrosion analysis shortly after capture.",
      },
      {
        type: "paragraph",
        text: "Utilities are pursuing automation to replace risky manual climbs and expensive helicopter inspections with repeatable, high-frequency digital inspections.",
      },
      { type: "heading", text: "Why the model scales" },
      {
        type: "list",
        items: [
          "Autonomous routing supports consistent data capture for AI analysis.",
          "Remote operation enables one controller to supervise multiple missions.",
          "Repeatable imagery improves early fault detection and targeted maintenance.",
          "Regulatory progress on BVLOS flights expands commercial viability.",
        ],
      },
      {
        type: "paragraph",
        text: "As detection, autonomy, and compliance improve, utilities can shift from periodic checks to condition-driven maintenance.",
      },
    ],
  },
  {
    slug: "fieldforce-inc-announces-strategic-partnership-with-rohde",
    title: "Fieldforce Inc. Announces Strategic Partnership With Rohde & Schwarz (R&S)",
    excerpt:
      "Fieldforce and Rohde & Schwarz partner to streamline 5G test-and-measurement data into digital deployment workflows.",
    date: "2020-09-23",
    category: "News and Press Releases",
    tags: ["Partnership", "5G", "Testing", "Rohde & Schwarz"],
    featuredImage: "/images/blog/rohde-partnership.jpg",
    heroImage: "/images/blog/rohde-partnership.jpg",
    author: authors.press,
    sourceUrl:
      "https://getfieldforce.com/resources/blog/fieldforce-inc-announces-strategic-partnership-with-rohde/",
    cta: {
      title: "Unify test data with field execution",
      body: "Capture closeout evidence and QA workflows directly inside your rollout process.",
      primaryLabel: "Book a technical walkthrough",
      primaryHref: "/demo",
    },
    content: [
      {
        type: "paragraph",
        text: "Fieldforce announced a strategic partnership with Rohde & Schwarz to deliver integrated test-and-measurement capabilities for new 5G deployments.",
      },
      {
        type: "paragraph",
        text: "The goal is to eliminate manual handoffs, where teams capture instrument readings as photos and then attach them to closeout packages later.",
      },
      {
        type: "quote",
        text: "By integrating test and measurement with digital workflow management, operators get a unified deployment experience for faster, more reliable 5G rollout.",
        cite: "Fieldforce and Rohde & Schwarz joint statement",
      },
      { type: "heading", text: "About the collaboration" },
      {
        type: "paragraph",
        text: "The integration supports end-to-end deployment visibility, asset-level traceability, and AI-informed operational optimization.",
      },
    ],
  },
  {
    slug: "fieldforce-inc-and-new-sun-road-pbc-announce-strategic-partnership",
    title: "Fieldforce Inc. and New Sun Road, PBC Announce Strategic Partnership",
    excerpt:
      "Fieldforce and New Sun Road collaborate to digitize deployment and maintenance for distributed solar microgrid systems.",
    date: "2020-09-21",
    category: "News and Press Releases",
    tags: ["Partnership", "Energy", "Microgrid", "IoT"],
    featuredImage: "/images/blog/microgrid-energy.jpg",
    heroImage: "/images/blog/microgrid-energy.jpg",
    author: authors.press,
    sourceUrl:
      "https://getfieldforce.com/resources/blog/fieldforce-inc-and-new-sun-road-pbc-announce-strategic-partnership/",
    cta: {
      title: "Modernize distributed energy operations",
      body: "Digitize microgrid deployment and maintenance with configurable workflows and asset intelligence.",
      primaryLabel: "Explore energy solutions",
      primaryHref: "/industries/ev-energy",
    },
    content: [
      {
        type: "paragraph",
        text: "Fieldforce and New Sun Road announced a strategic partnership to streamline deployment and lifecycle operations for distributed energy systems.",
      },
      {
        type: "paragraph",
        text: "The collaboration combines Fieldforce's digital twin workflow platform with New Sun Road's Stellar Microgrid OS to improve operational efficiency for remote power fleets.",
      },
      {
        type: "paragraph",
        text: "The integrated model supports telecom, utilities, and energy-access programs with better process standardization, data continuity, and field execution quality.",
      },
    ],
  },
  {
    slug: "5g-enterprise-use-cases-can-accelerate-consumer-demand",
    title: "5G enterprise use cases can accelerate consumer demand (Analyst Angle)",
    excerpt:
      "Enterprise deployments in controlled environments can prove 5G value first, then accelerate broader consumer adoption.",
    date: "2020-01-02",
    category: "In the know",
    tags: ["5G", "Enterprise", "Smart Cities", "Manufacturing"],
    featuredImage: "/images/blog/5g-enterprise.jpg",
    heroImage: "/images/blog/5g-enterprise.jpg",
    author: authors.editorial,
    sourceUrl:
      "https://getfieldforce.com/resources/blog/5g-enterprise-use-cases-can-accelerate-consumer-demand",
    cta: {
      title: "Accelerate enterprise 5G execution",
      body: "Launch, scale, and manage complex 5G programs with operational precision.",
      primaryLabel: "Talk to our team",
      primaryHref: "/contact",
    },
    content: [
      {
        type: "paragraph",
        text: "Instead of consumer demand leading adoption, 5G's strongest near-term momentum comes from enterprise environments where clear operational outcomes exist.",
      },
      { type: "heading", text: "Three core 5G advantages" },
      {
        type: "list",
        ordered: true,
        items: [
          "High bandwidth for rapid transfer of rich operational data.",
          "Low latency for responsive control loops, AR/VR, and IoT actions.",
          "Reliable mobility across bounded but dynamic enterprise spaces.",
        ],
      },
      { type: "heading", text: "High-impact enterprise settings" },
      {
        type: "list",
        ordered: true,
        items: [
          "Theme parks using immersive AR/VR experiences and smart facilities.",
          "Smart factories combining IoT, edge computing, and connected workers.",
          "Smart cities coordinating sensors, mobility, and public safety systems.",
        ],
      },
      {
        type: "paragraph",
        text: "When operators prove measurable enterprise value first, consumer relevance and adoption naturally follow.",
      },
    ],
  },
  {
    slug: "fieldforce-inc-deploys-its-network-platform-supporting-smartskys",
    title:
      "Fieldforce Inc. Deploys Its Network Platform Supporting SmartSky's Air to Ground Network",
    excerpt:
      "Fieldforce supports SmartSky's air-to-ground rollout with digitized asset management and real-time operational analytics.",
    date: "2019-10-19",
    category: "News and Press Releases",
    tags: ["Aviation", "5G", "Asset Management", "Deployment"],
    featuredImage: "/images/blog/smartsky-network.jpg",
    heroImage: "/images/blog/smartsky-network.jpg",
    author: authors.press,
    sourceUrl:
      "https://getfieldforce.com/resources/blog/fieldforce-inc-deploys-its-network-platform-supporting-smartskys",
    cta: {
      title: "Digitize complex rollout programs",
      body: "Manage assets, workflows, and analytics across distributed infrastructure at scale.",
      primaryLabel: "See deployment capabilities",
      primaryHref: "/platform/sites",
    },
    content: [
      {
        type: "paragraph",
        text: "Fieldforce announced deployment of its platform to support SmartSky Networks' next-generation air-to-ground communications rollout.",
      },
      {
        type: "paragraph",
        text: "The platform was configured around SmartSky's existing processes and unified management of ground assets and aircraft-based radios in one system.",
      },
      {
        type: "paragraph",
        text: "Integrated financial systems and real-time analytics provide faster issue detection and stronger execution control.",
      },
    ],
  },
  {
    slug: "fieldforce-inc-continues-mission-to-enable-networks-of-the-future",
    title: "Fieldforce Inc. Continues Mission to Enable Networks of the Future",
    excerpt:
      "Fieldforce expanded its Executive Advisory Board with telecom leaders to guide strategy and product direction.",
    date: "2019-10-18",
    category: "News and Press Releases",
    tags: ["Leadership", "Telecom", "Company News"],
    featuredImage: "/images/blog/advisory-board.jpg",
    heroImage: "/images/blog/advisory-board.jpg",
    author: authors.press,
    sourceUrl:
      "https://getfieldforce.com/resources/blog/fieldforce-inc-continues-mission-to-enable-networks-of-the-future",
    cta: {
      title: "Build with Fieldforce leadership expertise",
      body: "Partner with a team shaped by operators and network veterans.",
      primaryLabel: "Learn about Fieldforce",
      primaryHref: "/about",
    },
    content: [
      {
        type: "paragraph",
        text: "Fieldforce announced its Executive Advisory Board to strengthen strategic guidance and product leadership as the company scales.",
      },
      {
        type: "paragraph",
        text: "The board includes senior telecom and technology leaders with extensive experience in network engineering, operations, and digital transformation.",
      },
      {
        type: "heading",
        text: "Highlighted advisory expertise",
      },
      {
        type: "list",
        items: [
          "Alex Shalaby - operator growth and international telecom leadership.",
          "Limond Grindstaff - wireless network engineering and technology scaling.",
          "Dave Flessas - service assurance and network operations systems.",
          "Noah Kindler - software product leadership across mobility and enterprise technology.",
        ],
      },
    ],
  },
  {
    slug: "fieldforce-inc-deploys-its-network-platform-supporting-smartskys-air-to-ground-network-2",
    title:
      "Fieldforce Inc. Deploys its Network Platform Supporting SmartSky's Air-to-Ground Network",
    excerpt:
      "Fieldforce streamlined SmartSky's rollout execution and digital asset operations through a configurable cloud platform.",
    date: "2019-10-02",
    category: "News and Press Releases",
    tags: ["Aviation", "Digital Transformation", "Asset Operations"],
    featuredImage: "/images/blog/air-ground-network.jpg",
    heroImage: "/images/blog/air-ground-network.jpg",
    author: authors.press,
    sourceUrl:
      "https://getfieldforce.com/resources/blog/fieldforce-inc-deploys-its-network-platform-supporting-smartskys-air-to-ground-network-2/",
    cta: {
      title: "Turn fragmented field data into action",
      body: "Centralize deployment evidence, assets, and operational analytics.",
      primaryLabel: "Request a demo",
      primaryHref: "/demo",
    },
    content: [
      {
        type: "paragraph",
        text: "Fieldforce reported deployment of its platform to accelerate SmartSky's next-generation air-to-ground network rollout.",
      },
      {
        type: "paragraph",
        text: "The partnership digitized asset management and field operations activities and improved visibility into deployment performance.",
      },
      {
        type: "paragraph",
        text: "By mapping the platform to customer workflows, teams reduced operational complexity while improving execution speed.",
      },
    ],
  },
];

export const sortedBlogPosts = [...blogPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

export const blogCategoryOptions = Array.from(
  new Set(sortedBlogPosts.map((post) => post.category)),
);

export function getBlogPostBySlug(slug: string) {
  return sortedBlogPosts.find((post) => post.slug === slug);
}

export function getRelatedBlogPosts(slug: string, count = 3) {
  const current = getBlogPostBySlug(slug);
  if (!current) return sortedBlogPosts.slice(0, count);

  return sortedBlogPosts
    .filter((post) => post.slug !== slug)
    .sort((a, b) => {
      const aScore = a.category === current.category ? 1 : 0;
      const bScore = b.category === current.category ? 1 : 0;
      return bScore - aScore;
    })
    .slice(0, count);
}

export function getReadingTime(content: BlogContentBlock[]) {
  const words = content.reduce((total, block) => {
    if (block.type === "list") {
      return total + block.items.join(" ").split(/\s+/).length;
    }
    return total + block.text.split(/\s+/).length;
  }, 0);

  return Math.max(2, Math.round(words / 220));
}
