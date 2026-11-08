export type Discipline = {
  num: string;
  name: string;
  promise: string;
  capabilities: string[];
  proof: { title: string; slug: string; result: string };
};

export type Engagement = {
  num: string;
  name: string;
  duration: string;
  includes: string[];
  outcome: string;
};

export type Phase = {
  num: string;
  name: string;
  desc: string;
  deliverable: string;
  timeframe: string;
};

export type CaseStudy = {
  discipline: string;
  title: string;
  slug: string;
  image: string;
  imageAlt: string;
  problem: string;
  built: string;
  result: string;
};

export const CONTACT_EMAIL = "amitnarwal115@gmail.com";
export const SCOPING_HREF = `mailto:${CONTACT_EMAIL}`;

export const disciplines: Discipline[] = [
  {
    num: "01",
    name: "Product Engineering",
    promise: "Web products that ship, not demos.",
    capabilities: [
      "Next.js & React",
      "TypeScript architecture",
      "SaaS dashboards",
      "Design systems",
      "E-commerce flows",
      "Core Web Vitals",
    ],
    proof: {
      title: "Exaldia AI SEO Tools",
      slug: "exaldia-ai-seo-tools",
      result: "Live product, paying users",
    },
  },
  {
    num: "02",
    name: "AI Systems",
    promise: "AI that does real work, not demos.",
    capabilities: [
      "LLM product features",
      "RAG & vector search",
      "Agents & tool calling",
      "MCP & browser automation",
      "Evals & guardrails",
      "Workflow automation",
    ],
    proof: {
      title: "Web MCP",
      slug: "web-mcp",
      result: "Open source, on npm",
    },
  },
  {
    num: "03",
    name: "Backend & Cloud",
    promise: "Infrastructure that holds under load.",
    capabilities: [
      "API design",
      "PostgreSQL & modelling",
      "Auth & permissions",
      "Queues & jobs",
      "AWS deployment",
      "Caching & observability",
    ],
    proof: {
      title: "InTesters",
      slug: "intesters",
      result: "Live product, real testers",
    },
  },
];

export const engagements: Engagement[] = [
  {
    num: "01",
    name: "Sprint",
    duration: "1–2 weeks",
    includes: ["Scope audit", "Prototype", "Tech spec"],
    outcome: "A decision and a plan, not a pitch.",
  },
  {
    num: "02",
    name: "Build",
    duration: "4–8 weeks",
    includes: ["Full product", "Design + engineering", "Launch"],
    outcome: "Idea to live product.",
  },
  {
    num: "03",
    name: "Partner",
    duration: "Monthly",
    includes: ["Roadmap features", "Performance cover", "On-call support"],
    outcome: "A senior pair of hands, on demand.",
  },
];

export const phases: Phase[] = [
  {
    num: "01",
    name: "Discover",
    desc: "Audit the problem, map the flows, and agree what done looks like.",
    deliverable: "Tech spec",
    timeframe: "Week 1",
  },
  {
    num: "02",
    name: "Design",
    desc: "Clickable interface before code. No guesswork in production.",
    deliverable: "Clickable UI",
    timeframe: "Week 2–3",
  },
  {
    num: "03",
    name: "Build",
    desc: "Sprint-based engineering with demos you can click every week.",
    deliverable: "Staging link",
    timeframe: "Week 3–6",
  },
  {
    num: "04",
    name: "Ship",
    desc: "QA, performance tuning, monitoring, and a clean handover.",
    deliverable: "Live product",
    timeframe: "Week 6–8",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    discipline: "Product Engineering",
    title: "Exaldia AI SEO Tools",
    slug: "exaldia-ai-seo-tools",
    image: "/hrseo.jpg",
    imageAlt: "Exaldia AI SEO Tools dashboard showing keyword research and rank tracking",
    problem: "Marketers were paying for five separate tools to do keyword, ranking, and content work.",
    built: "One Next.js dashboard: keyword research, rank tracking, backlinks, and an AI writer.",
    result: "A live product with paying users.",
  },
  {
    discipline: "AI Systems",
    title: "Web MCP",
    slug: "web-mcp",
    image: "/web-mcp.jpg",
    imageAlt: "Web MCP driving a Chromium browser alongside a local server",
    problem: "AI assistants could read the web but could not use it — clicks, forms, logins stayed manual.",
    built: "An open-source MCP server that drives a real Chromium browser on your machine.",
    result: "Ships on npm; one command configures the major AI clients.",
  },
  {
    discipline: "Backend & Cloud",
    title: "InTesters",
    slug: "intesters",
    image: "/intesters.png",
    imageAlt: "InTesters dashboard tracking a Play Store closed test over 14 days",
    problem: "New Android devs are locked out of production until 12 testers stay 14 days.",
    built: "A full product: tester pool, developer dashboard, milestones, and refunds.",
    result: "Live and used to unlock production access.",
  },
];

export const guarantee =
  "Every build ships with sub-second loads, green Core Web Vitals, accessible markup, and monitoring after launch.";
