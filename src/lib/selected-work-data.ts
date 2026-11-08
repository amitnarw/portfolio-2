export type WorkProject = {
  slug: string;
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  description: string;
  metaDescription: string;
  overview: string[];
  highlights: string[];
  tags: string[];
  siteUrl?: string;
  repoUrl?: string;
  year: string;
  role: string;
  status: string;
  kind: "website" | "app";
};

export const selectedWorkProjects: WorkProject[] = [
  {
    slug: "intesters",
    id: "inTesters",
    title: "InTesters - Play Store Testing",
    image: "/intesters.png",
    imageAlt:
      "InTesters dashboard showing a Play Store closed test with testers and a 14 day progress bar on a real device",
    description:
      "An Android app testing service. Real testers join your closed test on Google Play and stay for the full 14 days, so you can meet Google's 12 tester requirement and move your app to production.",
    metaDescription:
      "How InTesters helps Android developers meet Google Play's 12 tester, 14 day closed testing requirement and unlock production access.",
    overview: [
      "InTesters helps Android developers get past Google Play's closed testing requirement. New personal developer accounts need 12 testers who stay active for 14 days before production access is unlocked, and InTesters provides that pool of real devices and real activity.",
      "I built the whole product end to end across 2025 to 2026. It runs two tracks: a free handshake test where testers join your internal track, and a paid professional test with guaranteed participation and feedback. Both come with a dashboard so developers and testers can follow progress day by day.",
    ],
    highlights: [
      "Closed testing flow for both internal and production tracks",
      "Tester dashboard with progress, feedback and reward tracking",
      "Developer dashboard showing tester count and days completed",
      "Email and notifications for milestones and feedback",
      "Refund when production access is not unlocked",
    ],
    tags: ["Android", "Play Console", "Beta Testing", "App Development"],
    siteUrl: "https://intesters.com",
    year: "2025 to 2026",
    role: "Solo developer, built end to end",
    status: "Live product",
    kind: "website",
  },
  {
    slug: "exaldia-ai-seo-tools",
    id: "hrseo",
    title: "Exaldia AI SEO Tools",
    image: "/hrseo.jpg",
    imageAlt:
      "Exaldia AI SEO Tools dashboard showing keyword research results and a rank tracking chart",
    description:
      "An SEO platform with AI tools built in. You can research keywords, track rankings, check backlinks and write content from one dashboard. Built for marketers and agencies who would rather not pay for five separate tools.",
    metaDescription:
      "Exaldia is an AI SEO platform for keyword research, rank tracking, backlink checks and content from one dashboard.",
    overview: [
      "Exaldia is an AI powered SEO platform for marketers and agencies. It brings keyword research, rank tracking, backlink analysis and content generation into one workspace, so a team can plan and ship an SEO strategy without jumping between tools.",
      "The dashboard covers niche discovery, keyword scoring, SERP checks, workspace reports and an AI content generator. Pricing starts with a professional tier for growing businesses, billed monthly or yearly.",
    ],
    highlights: [
      "Keyword research and suggestions with difficulty and volume scores",
      "Rank tracking across search engines with alerts",
      "Backlink monitoring and profile analysis",
      "AI content generator with structure and optimisation scoring",
      "Business model mapper for monetisation insight per keyword",
      "Performance and progress reports",
    ],
    tags: ["Next.js", "AI", "SEO", "Dashboard", "Full Stack"],
    siteUrl: "https://hrseo.vercel.app",
    year: "2025 to 2026",
    role: "Solo developer, built end to end",
    status: "Live product",
    kind: "website",
  },
  {
    slug: "web-mcp",
    id: "web_mcp",
    title: "Web MCP Browser Automation for AI",
    image: "/web-mcp.jpg",
    imageAlt:
      "Web MCP running in a local terminal while a Chromium browser window shows a page being controlled by an AI",
    description:
      "An open source MCP server that gives your AI a real browser. It can open pages, click buttons, fill forms and read the results while you watch. Install it with npm, run one setup command, and it configures OpenCode, Cursor, Claude Code and other MCP clients for you.",
    metaDescription:
      "Web MCP is an open source MCP server that gives AI assistants a real browser for browsing and form filling on your machine.",
    overview: [
      "Web MCP is an open source Model Context Protocol server that gives AI assistants a real browser. Instead of fetching pages into text, it drives Chromium on your own machine, opening pages, clicking buttons, filling forms and reading the result just like you would.",
      "It runs as a local server, so your sessions and logins stay on your machine. One setup command writes the config for OpenCode, Cursor, Claude Code, Windsurf, Zed and the rest, and several AI tools can share one browser in separate tabs.",
    ],
    highlights: [
      "Opens and drives pages in a real Chromium window you can watch",
      "Clicks, types, selects and reads results with selector based actions",
      "Keeps cookies and logins local to your machine",
      "One command configures the major MCP clients",
      "Supports several AI agents sharing one browser in separate tabs",
    ],
    tags: ["MCP", "Node.js", "Browser Automation", "Open Source", "npm"],
    siteUrl: "https://www.npmjs.com/package/@amitnarw/web-mcp",
    repoUrl: "https://github.com/amitnarw/web-mcp",
    year: "2025 to 2026",
    role: "Solo developer, built end to end",
    status: "Open source, active",
    kind: "app",
  },
  {
    slug: "ai-autofill-chrome-extension",
    id: "ai_chrome_extension",
    title: "AI Auto-fill Chrome Extension",
    image: "/autofill-chrome_extension.jpg",
    imageAlt:
      "AI Auto-fill Chrome Extension populating a long registration form automatically",
    description:
      "A Chrome extension that fills long forms for you. It reads the page, works out what each field is asking for and types the answer, so you can skip repetitive data entry on signup, checkout and job forms.",
    metaDescription:
      "A Chrome extension that fills long forms by reading each field and typing the answer for you on signup and checkout.",
    overview: [
      "AI Auto-fill is a Chrome extension that reads a page and fills long forms for you. It works out what each field is asking for and enters an answer, so you do not have to type the same details out every time.",
      "It is a JavaScript extension with an LLM backed filling flow. It works on signup, checkout and job application forms.",
    ],
    highlights: [
      "Fills multi field forms from context, not just saved values",
      "Works on signup, checkout and job application forms",
      "JavaScript extension with an LLM backed filling flow",
      "Fills fields in the page you are on, no separate workflow",
    ],
    tags: ["AI", "Chrome Extension", "Automation", "LLM", "JavaScript"],
    year: "2025 to 2026",
    role: "Solo developer, built end to end",
    status: "Shipped build",
    kind: "app",
  },
  {
    slug: "portfolio-website",
    id: "portfolio",
    title: "Portfolio website",
    image: "/portfolio.webp",
    imageAlt:
      "Amit Narwal portfolio website showing the bento grid selected work section and hero",
    description:
      "My own portfolio site. Built with Next.js and Tailwind CSS, with fast page loads, clean structure and search friendly markup.",
    metaDescription:
      "Amit Narwal's portfolio: a Next.js site with a bento project grid, experience timeline, services and blog.",
    overview: [
      "This is my own portfolio site. It is a single page Next.js app with a bento style project grid, an Experience timeline, a services section and a blog. It is aimed at potential clients and at ranking for relevant AI and search queries.",
      "Focus is on performance, real content and structured data. It ships JSON-LD for Person, ProfessionalService and WebSite, a blog with an answer engine summary, a sitemap driven by posts, and a case study page for every project so both search engines and answer engines can cite them.",
    ],
    highlights: [
      "Next.js 16 app router with Tailwind CSS v4",
      "Bento grid selected work section with external and internal links",
      "JSON-LD schemas for Person, Service and WebSite",
      "Blog with an answer engine executive summary",
      "Dynamic sitemap and robots rules",
    ],
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "SEO", "Responsive Design"],
    siteUrl: "https://amitnarwal.com",
    year: "2025 to 2026",
    role: "Solo developer, built end to end",
    status: "Live site",
    kind: "website",
  },
  {
    slug: "cbr-painters-australia",
    id: "cbr_painters_australia",
    title: "CBR Painters Australia",
    image: "/cbr_painters_australia.webp",
    imageAlt:
      "CBR Painters Australia homepage with a painting hero image and a free quote form",
    description:
      "A business website for a painting company. It covers their services and makes it easy for customers to call or email for a quote.",
    metaDescription:
      "CBR Painters Australia business website covering services, process, projects gallery and a free quote form.",
    overview: [
      "CBR Painters is a business website for a painting company serving the Canberra region and surrounding states. It covers residential, commercial, industrial, strata, epoxy flooring and special finishes, and highlights a decade of experience.",
      "The site walks customers through the process, shows recent projects and partner suppliers, and ends with a free quote form plus clear contact details. It is built with Next.js and tuned for local search.",
    ],
    highlights: [
      "Service pages for six painting categories",
      "Process section from consultation to final walk through",
      "Project gallery and partner logo trust bar",
      "Free quote form with phone, email and postcode",
      "Local focus across Canberra, ACT, NSW and QLD",
    ],
    tags: [
      "Landing Page",
      "Business Website",
      "Next.js",
      "Responsive Design",
      "Lead Generation",
    ],
    siteUrl: "https://cbr-painters.vercel.app",
    year: "2025 to 2026",
    role: "Solo developer, built end to end",
    status: "Client project",
    kind: "website",
  },
];
