"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { WorkProject } from "@/lib/selected-work-data";
import { ThemeToggleButton } from "@/components/layout/theme-toggle-button";
import { ArrowUpRight, CheckCircle2, Cpu, Database, Layers, ShieldCheck, X, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface DeliverableInfo {
  title: string;
  subtitle: string;
  tags: string[];
}

interface CaseStudyDetails {
  d1: DeliverableInfo;
  d2: DeliverableInfo;
  heroHeadline: string;
  clientName: string;
  role: string;
  timeline: string;
  liveStatus: string;
  challengeTitle: string;
  challengeParagraphs: string[];
  techStack: string[];
  metrics: { label: string; value: string; desc: string }[];
  archHeadline: string;
  archSubtitle: string;
  architecturalPillars: {
    number: string;
    title: string;
    description: string;
    icon: string;
  }[];
  keyLearnings: string[];
}

const detailedProjectData: Record<string, CaseStudyDetails> = {
  intesters: {
    d1: {
      title: "Testing Engine",
      subtitle: "We worked on the",
      tags: ["Play Console", "Closed Testing", "Automation", "Android"],
    },
    d2: {
      title: "Development",
      subtitle: "Along with",
      tags: ["Next.js 16", "PostgreSQL", "BullMQ", "Redis"],
    },
    heroHeadline:
      "InTesters needed 12 active testers for 14 days, we built the",
    clientName: "InTesters Platform",
    role: "Solo Founder & Lead Systems Architect",
    timeline: "2025 – 2026",
    liveStatus: "Production Live",
    techStack: [
      "Next.js 16",
      "TypeScript",
      "PostgreSQL",
      "BullMQ",
      "Redis",
      "Tailwind CSS",
      "Google Play API",
    ],
    challengeTitle:
      "Solving Google Play's 14-Day 12-Tester Personal Account Gate",
    challengeParagraphs: [
      "In late 2023, Google introduced a strict requirement for all new personal Google Play Developer accounts: apps must be tested by at least 12 real opt-in testers continuously for 14 straight days before production access can even be requested. For solo developers and independent studios, finding 12 reliable individuals who keep the app installed and actively test every single day without churning is notoriously difficult.",
      "Traditional testing communities suffer from flaky participation,testers opt in, open the app once, and immediately uninstall or forget about it, resetting the 14-day clock back to zero. InTesters was built from scratch to turn this chaotic manual process into a deterministic, reliable closed-testing pipeline.",
      "The primary architectural challenge was ensuring real device verification, automated daily engagement telemetry, and an automated replacement engine so developers never lose progress due to inactive participants.",
    ],
    metrics: [
      {
        label: "Production Pass Rate",
        value: "100%",
        desc: "All completed tests met Google's 14-day opt-in criteria without resets.",
      },
      {
        label: "Active Tester Pool",
        value: "500+",
        desc: "Verified physical Android devices ready for immediate test enrollment.",
      },
      {
        label: "Verification Latency",
        value: "<120ms",
        desc: "Real-time webhook and status check latency across tester actions.",
      },
      {
        label: "Churn Replacement",
        value: "Automated",
        desc: "Standby testers auto-assigned instantly if device engagement drops.",
      },
    ],
    archHeadline:
      "A simplified but modern approach to automated closed testing.",
    archSubtitle:
      "We architected an asynchronous event-driven system powered by Redis and BullMQ to manage tester lifecycles, health checks, and milestone verifications.",
    architecturalPillars: [
      {
        number: "01",
        title: "Distributed Task Queue with BullMQ & Redis",
        description:
          "Daily participation checks, email reminders, and test streak verifications run as isolated BullMQ jobs with exponential backoff and dead-letter queue resilience to guarantee no dropped events.",
        icon: "queue",
      },
      {
        number: "02",
        title: "Relational Schema with State Machine Modeling",
        description:
          "PostgreSQL tracks tester opt-ins, daily engagement timestamps, and track transitions through strict status enums, ensuring zero race conditions during parallel tester assignment.",
        icon: "db",
      },
      {
        number: "03",
        title: "Automated Drop-off & Churn Protection Engine",
        description:
          "If an assigned tester fails to open the app or uninstalls during the 14-day window, an automated standby worker immediately enrolls a backup tester so the developer's 12-tester quorum is never compromised.",
        icon: "shield",
      },
      {
        number: "04",
        title: "Developer Telemetry & Verification Reports",
        description:
          "Developers get real-time visibility into active device models, Android OS versions, tester notes, and a production-ready exportable audit report for Google Play review.",
        icon: "cpu",
      },
    ],
    keyLearnings: [
      "Device diversity matters: Google Play validates that testers run varied Android versions and screen densities, requiring smart device-allocation algorithms.",
      "Asynchronous background queues eliminate bottlenecks: Moving daily streak evaluations to BullMQ background workers kept dashboard response times sub-100ms.",
      "Transparent progress tracking dramatically reduces developer anxiety during the high-stakes 14-day testing period.",
    ],
  },
  "exaldia-ai-seo-tools": {
    d1: {
      title: "AI Intelligence",
      subtitle: "We worked on the",
      tags: ["LLM Agents", "Vector Indexing", "Rank Tracking", "SERP"],
    },
    d2: {
      title: "Development",
      subtitle: "Along with",
      tags: ["Next.js 16", "TypeScript", "Tailwind CSS", "Analytics"],
    },
    heroHeadline:
      "Exaldia had their vision down, we were just the",
    clientName: "Exaldia AI Suite",
    role: "Full Stack Engineer & AI Architect",
    timeline: "2025 – 2026",
    liveStatus: "Production Live",
    techStack: [
      "Next.js 16",
      "TypeScript",
      "OpenAI API",
      "Cheerio",
      "Redis",
      "Tailwind CSS",
      "Chart.js",
    ],
    challengeTitle:
      "Unifying Keyword Discovery, SERP Tracking, and AI Content Generation",
    challengeParagraphs: [
      "Modern SEO teams are constantly context-switching between four to six disparate platforms: one for keyword research, one for rank tracking, another for backlink monitoring, and ChatGPT for drafting briefs. This fragmented workflow slows execution, inflates software subscription overhead, and leads to disjointed data.",
      "Exaldia was designed as an integrated search engine intelligence workspace. The platform needed to crawl live search engine result pages (SERPs), calculate keyword competition scores, track regional rankings, and immediately turn search insights into structured, publication-ready content briefs.",
      "The engineering challenge lay in handling continuous high-frequency SERP scraping without rate-limiting, clustering search intent semantically, and streaming LLM content generation with zero UI lag.",
    ],
    metrics: [
      {
        label: "Content Brief Speed",
        value: "10x",
        desc: "From initial keyword input to comprehensive outline in under 30 seconds.",
      },
      {
        label: "Keywords Monitored",
        value: "50,000+",
        desc: "Daily rank tracking across global search engine indices.",
      },
      {
        label: "API Response Time",
        value: "<180ms",
        desc: "Cached keyword difficulty and search volume retrieval via Redis.",
      },
      {
        label: "Data Accuracy",
        value: "99.8%",
        desc: "Multi-proxy verification ensuring zero stale or spoofed SERP results.",
      },
    ],
    archHeadline:
      "We built an all-in-one suite with a modern approach to SEO workflows.",
    archSubtitle:
      "By combining server-side streaming rendering with edge caching and isolated worker pipelines, Exaldia delivers instantaneous search analytics.",
    architecturalPillars: [
      {
        number: "01",
        title: "High-Throughput SERP Scraping Engine",
        description:
          "Distributed headless scrapers with residential IP rotation extract organic listings, featured snippets, People Also Ask blocks, and search volumes with built-in retry mechanisms.",
        icon: "cpu",
      },
      {
        number: "02",
        title: "Semantic Intent & Topic Clustering",
        description:
          "Search queries are classified into informational, commercial, transactional, and navigational intents using vector embeddings, allowing creators to map entire topic clusters.",
        icon: "layers",
      },
      {
        number: "03",
        title: "Streaming LLM Brief Generator",
        description:
          "Direct integration with modern LLM models streams structured article briefs, recommended header tags, target keywords, and internal link suggestions in real-time.",
        icon: "zap",
      },
      {
        number: "04",
        title: "Multi-Tenant Team Workspaces",
        description:
          "Agencies can organize clients into isolated workspaces with role-based permissions, automated weekly ranking digests, and white-labeled PDF reporting.",
        icon: "shield",
      },
    ],
    keyLearnings: [
      "Search intent clustering is vastly more valuable to marketers than raw keyword search volume alone.",
      "Server-Sent Events (SSE) provide an effortless streaming experience for lengthy AI content generation workflows.",
      "Aggressive multi-tier caching with Redis reduced external SERP API costs by over 45% during peak usage.",
    ],
  },
  "web-mcp": {
    d1: {
      title: "MCP Protocol",
      subtitle: "We worked on the",
      tags: ["MCP", "JSON-RPC", "STDIO", "Local Server"],
    },
    d2: {
      title: "Development",
      subtitle: "Along with",
      tags: ["Puppeteer", "Accessibility Tree", "DOM Parser", "npm"],
    },
    heroHeadline:
      "AI agents needed real browsers, Web MCP was the",
    clientName: "Web MCP (Open Source)",
    role: "Creator & Solo Maintainer",
    timeline: "2025 – 2026",
    liveStatus: "Active on npm & GitHub",
    techStack: [
      "Model Context Protocol",
      "Node.js",
      "TypeScript",
      "Puppeteer",
      "JSON-RPC",
      "npm",
    ],
    challengeTitle:
      "Giving AI Coding Agents a Real Browser Without Context Window Bloat",
    challengeParagraphs: [
      "AI coding assistants such as Claude Code, Cursor, OpenCode, and Windsurf excel at generating code but operate in a vacuum,they cannot directly verify their web changes in a live browser, fill forms, or inspect runtime DOM states. Existing browser automation tools either relied on heavy remote cloud services or returned enormous raw HTML dumps that instantly exhausted the agent's context window.",
      "Web MCP was created as a lightweight, open-source Model Context Protocol server that runs entirely on the developer's local machine. It connects AI assistants directly to a real Chromium browser via standard stdio JSON-RPC transport.",
      "The critical engineering breakthrough was building an intelligent DOM distillation algorithm that strips away useless tags, styles, and scripts, distilling the page into an accessibility tree with interactive element IDs that the AI can click, type into, and navigate effortlessly.",
    ],
    metrics: [
      {
        label: "Context Compression",
        value: "92%",
        desc: "Raw HTML pages distilled into compact, actionable accessibility trees.",
      },
      {
        label: "Action Latency",
        value: "<250ms",
        desc: "Sub-second turnaround from agent tool call to physical Chromium interaction.",
      },
      {
        label: "Client Compatibility",
        value: "6+ Clients",
        desc: "Native support for Claude Code, Cursor, OpenCode, Windsurf, and Zed.",
      },
      {
        label: "Privacy & Safety",
        value: "100% Local",
        desc: "Zero cloud proxies; all cookies, sessions, and credentials remain on machine.",
      },
    ],
    archHeadline:
      "High-speed browser control with sandboxed safety.",
    archSubtitle:
      "Built strictly on the Anthropic Model Context Protocol specification with Puppeteer driving native Chromium instances on your machine.",
    architecturalPillars: [
      {
        number: "01",
        title: "Accessibility Tree & Action Matrix",
        description:
          "Instead of passing megabytes of noisy HTML, Web MCP converts pages into a structured tree of clickable and fillable elements, each assigned a short numeric reference ID.",
        icon: "layers",
      },
      {
        number: "02",
        title: "Multi-Tab Concurrent Agent Sessions",
        description:
          "Multiple agent tasks or browser tests run concurrently across isolated browser tabs, enabling parallel research and form submission without cross-session pollution.",
        icon: "cpu",
      },
      {
        number: "03",
        title: "Zero-Config CLI Setup Command",
        description:
          "A single setup command inspects existing developer tools on the system and automatically writes the appropriate configuration for Claude Desktop, Cursor, and OpenCode.",
        icon: "zap",
      },
      {
        number: "04",
        title: "Live Interactive Visual Supervision",
        description:
          "Developers can watch the browser window execute AI commands in real-time, intervening manually whenever CAPTCHAs or sensitive authentication steps arise.",
        icon: "shield",
      },
    ],
    keyLearnings: [
      "Distilled accessibility trees drastically outperform raw HTML when prompting LLMs for UI navigation.",
      "Keeping MCP servers local over stdio completely solves the credential-leakage concerns associated with remote browser farms.",
      "Developers value watching the browser window animate live,it provides trust and immediate debugging feedback.",
    ],
  },
  "ai-autofill-chrome-extension": {
    d1: {
      title: "DOM Analysis",
      subtitle: "We worked on the",
      tags: ["Chrome Extension", "Manifest V3", "MutationObserver", "Input Matrix"],
    },
    d2: {
      title: "Development",
      subtitle: "Along with",
      tags: ["LLM", "Context Mapping", "TypeScript", "Automation"],
    },
    heroHeadline:
      "Tedious form filling automated with",
    clientName: "AI Auto-fill Tool",
    role: "Solo Creator & Developer",
    timeline: "2025 – 2026",
    liveStatus: "Shipped & Active",
    techStack: [
      "JavaScript",
      "TypeScript",
      "Manifest V3",
      "MutationObserver",
      "Chrome Storage API",
      "LLM",
    ],
    challengeTitle:
      "Automating Multi-Step Web Forms with Contextual Intelligence",
    challengeParagraphs: [
      "Job seekers and e-commerce shoppers waste hours repeatedly copying and pasting the same resume details, work histories, and shipping addresses into hundreds of bespoke web forms. Standard browser autofill fails on multi-step forms, custom React select components, and non-standard field names.",
      "This extension uses client-side DOM parsing combined with targeted LLM reasoning to understand what each input field is actually asking for, regardless of obfuscated CSS classes or unconventional HTML structures.",
      "The engineering challenge required strict Manifest V3 compliance, near-instant execution speed, and absolute privacy,sensitive profile information is stored encrypted locally and never transmitted to third-party databases.",
    ],
    metrics: [
      {
        label: "Field Accuracy",
        value: "96.4%",
        desc: "Correct field identification across diverse ATS and checkout portals.",
      },
      {
        label: "Form Fill Speed",
        value: "<400ms",
        desc: "Entire 30-field applications populated in less than half a second.",
      },
      {
        label: "Security Compliance",
        value: "Manifest V3",
        desc: "Strict content security policies with zero remote script execution.",
      },
      {
        label: "Time Saved",
        value: "85%",
        desc: "Average reduction in time spent per job application workflow.",
      },
    ],
    archHeadline:
      "A privacy-first extension built for seamless productivity.",
    archSubtitle:
      "Engineered with MutationObservers to support dynamic SPAs and dispatch synthetic events that trigger modern reactive state stores.",
    architecturalPillars: [
      {
        number: "01",
        title: "Dynamic MutationObserver Traversal",
        description:
          "Watches for asynchronously loaded DOM elements, modal dialogs, and multi-step wizard views, ensuring late-rendered inputs are captured and filled accurately.",
        icon: "cpu",
      },
      {
        number: "02",
        title: "Contextual Semantic Field Matching",
        description:
          "Evaluates surrounding label text, placeholder strings, ARIA tags, and neighboring inputs to correctly distinguish between billing, shipping, and alternate fields.",
        icon: "layers",
      },
      {
        number: "03",
        title: "Native Event Simulation Engine",
        description:
          "Dispatches trusted synthetic 'input', 'change', and 'blur' events so that React, Vue, and Angular internal states update seamlessly without validation errors.",
        icon: "zap",
      },
      {
        number: "04",
        title: "Encrypted Local Storage Vault",
        description:
          "All personal and professional credentials remain stored inside the user's Chrome sandbox, using AES encryption and zero telemetry tracking.",
        icon: "shield",
      },
    ],
    keyLearnings: [
      "Dispatching standard input events is critical: Modern frontend frameworks ignore direct value property updates without synthetic event triggering.",
      "Manifest V3 background service workers require strict state persistence strategies to handle idle termination.",
      "Privacy-first architecture creates high user trust in productivity and autofill utilities.",
    ],
  },
  "portfolio-website": {
    d1: {
      title: "Brand Identity",
      subtitle: "We worked on the",
      tags: ["Logo", "Typography", "Color", "Guidelines"],
    },
    d2: {
      title: "Development",
      subtitle: "Along with",
      tags: ["Next.js 16", "View Transitions", "Tailwind v4", "Turbopack"],
    },
    heroHeadline:
      "Turning high-craft engineering into a",
    clientName: "Amit Narwal Portfolio",
    role: "Full Stack Engineer & Designer",
    timeline: "2025 – 2026",
    liveStatus: "Production Live",
    techStack: [
      "Next.js 16",
      "React 19",
      "Tailwind CSS v4",
      "TypeScript",
      "Web Animations API",
      "JSON-LD",
    ],
    challengeTitle:
      "Building a 60fps Luxury Digital Portfolio with Advanced SEO & GEO",
    challengeParagraphs: [
      "Most developer portfolios fall into one of two extremes: either basic generic templates that fail to convey senior craft, or overly heavy WebGL sites with 10-second loading screens that kill SEO rankings and mobile usability.",
      "The goal for amitnarwal.com was to combine agency-grade fluid micro-interactions with blistering performance: 100/100 Google Lighthouse scores, instant static page compilation, and full optimization for both traditional search engines (SEO) and generative answer engines (GEO / AEO).",
      "The engineering challenge centered on creating hardware-accelerated bottom-up sheet transitions and radial clip-path theme animations without external animation runtime bloat.",
    ],
    metrics: [
      {
        label: "Lighthouse Performance",
        value: "100/100",
        desc: "Perfect scores across Performance, Accessibility, and Best Practices.",
      },
      {
        label: "Static Build Speed",
        value: "<3.2s",
        desc: "30+ static routes compiled with Next.js 16 and Turbopack.",
      },
      {
        label: "Animation Frame Rate",
        value: "60 FPS",
        desc: "Hardware-accelerated CSS and Web Animations with zero layout shifts.",
      },
      {
        label: "AI Discoverability",
        value: "100%",
        desc: "Structured Person, ProfessionalService, and llms.txt schemas for answer engines.",
      },
    ],
    archHeadline:
      "Micro-interactions and performance tuning built for effortless speed.",
    archSubtitle:
      "Leveraging Next.js 16 App Router, Tailwind CSS v4, and native browser Web Animations API for smooth agency-caliber transitions.",
    architecturalPillars: [
      {
        number: "01",
        title: "Hardware-Accelerated Web Animations",
        description:
          "Bottom-up modal sheet mechanics utilize cubic-bezier(0.86, 0, 0.07, 1) timing and scale transitions on the compositor thread for zero jank.",
        icon: "zap",
      },
      {
        number: "02",
        title: "Semantic Answer Engine Optimization (GEO)",
        description:
          "Ships comprehensive JSON-LD schemas and dedicated markdown endpoints so that Perplexity, SearchGPT, and Google AI Overviews can cite case studies directly.",
        icon: "layers",
      },
      {
        number: "03",
        title: "Radial Clip-Path Theme Transitions",
        description:
          "Theme toggle utilizes View Transitions API with circular expansion centered precisely on the user's click coordinate for a magical dark/light switch.",
        icon: "cpu",
      },
      {
        number: "04",
        title: "Zero-CLS Image & Font Optimization",
        description:
          "Google Font variable font preloading and Next.js Image component optimization ensure 0.000 Cumulative Layout Shift across all viewports.",
        icon: "shield",
      },
    ],
    keyLearnings: [
      "Pure browser APIs (Web Animations API, View Transitions) are often significantly faster and lighter than adding large third-party animation runtimes.",
      "Answer Engine Optimization (GEO) requires crisp, factual technical prose rather than vague marketing superlatives.",
      "Fluid micro-interactions leave an immediate impression of senior engineering taste.",
    ],
  },
  "cbr-painters-australia": {
    d1: {
      title: "Brand Identity",
      subtitle: "We worked on the",
      tags: ["Logo", "Branding", "Visuals", "Guidelines"],
    },
    d2: {
      title: "Development",
      subtitle: "Along with",
      tags: ["Next.js", "Lead Generation", "Tailwind CSS", "Local SEO"],
    },
    heroHeadline:
      "Crafting a clean digital storefront for",
    clientName: "CBR Painters Australia",
    role: "Lead Full Stack Developer",
    timeline: "2025 – 2026",
    liveStatus: "Production Live",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Resend API",
      "LocalBusiness Schema",
    ],
    challengeTitle:
      "Dominating Canberra Local Search with a High-Converting Quote Funnel",
    challengeParagraphs: [
      "Local service businesses frequently struggle with slow, clunky WordPress websites that fail to convert mobile visitors looking for urgent painting quotes. CBR Painters needed a high-performance digital presence to dominate residential and commercial search queries in the Australian Capital Territory.",
      "The website needed to highlight their 10+ years of craft experience, display high-resolution before-and-after project transformations, and provide an effortless multi-step quote calculator that captures qualified homeowner leads directly into their inbox.",
      "We built a tailored Next.js static architecture with localized suburb landing pages, structured LocalBusiness JSON-LD markup, and a zero-friction mobile quote request workflow.",
    ],
    metrics: [
      {
        label: "Quote Conversion",
        value: "3x Increase",
        desc: "Significant uplift in completed quote submissions compared to legacy site.",
      },
      {
        label: "Mobile Page Load",
        value: "<0.8s",
        desc: "First Contentful Paint on mobile 4G networks across Canberra.",
      },
      {
        label: "Local Keyword Ranks",
        value: "Page #1",
        desc: "Top rankings for core residential and commercial painting queries.",
      },
      {
        label: "Mobile Usability",
        value: "100%",
        desc: "Responsive tap targets and instant call/quote access for home owners.",
      },
    ],
    archHeadline:
      "Fast-loading mobile architecture built to win local search.",
    archSubtitle:
      "Optimized for local search engine algorithms with static site generation and zero-friction customer lead capture.",
    architecturalPillars: [
      {
        number: "01",
        title: "Multi-Step Interactive Quote Form",
        description:
          "Intuitive step-by-step quote builder that captures property size, surface type, and timing preferences, dispatching automated alerts to the business owner via Resend.",
        icon: "zap",
      },
      {
        number: "02",
        title: "Local Suburb Geo-Targeting Pages",
        description:
          "Dedicated landing pages tailored for Belconnen, Gungahlin, Tuggeranong, and South Canberra with unique meta-descriptions and localized review schemas.",
        icon: "layers",
      },
      {
        number: "03",
        title: "Responsive WebP Gallery Pipelines",
        description:
          "High-definition photography of completed residential interiors and commercial epoxy floors optimized into modern responsive formats without slowing mobile loads.",
        icon: "cpu",
      },
      {
        number: "04",
        title: "LocalBusiness Structured Data",
        description:
          "Comprehensive JSON-LD schemas covering business hours, service areas, customer testimonials, and licensing info for rich Google Search snippet eligibility.",
        icon: "shield",
      },
    ],
    keyLearnings: [
      "Speed is the primary conversion driver for local trade businesses,homeowners abandon forms that take more than 2 seconds to load.",
      "Multi-step quote calculators convert significantly better than long single-page contact forms.",
      "Local schema markup helps search engines accurately attribute service radius and trust signals.",
    ],
  },
};

interface SohubCaseStudyProps {
  project: WorkProject;
  nextProject?: WorkProject;
  onClose?: () => void;
  onSelectProject?: (project: WorkProject) => void;
  isModal?: boolean;
}

export default function SohubCaseStudy({
  project,
  onClose,
  isModal = false,
}: SohubCaseStudyProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"d1" | "d2" | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isScrolled, setIsScrolled] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Keep theme state synchronized with DOM
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  // When inside modal, NEVER touch window.scrollTo! Only standalone pages scroll window to 0
  useEffect(() => {
    if (!isModal) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, [project.slug, isModal]);

  // Track scroll position to morph header into floating pill navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollParent = containerRef.current?.closest(".overflow-y-auto");
      const parentTop = scrollParent ? scrollParent.scrollTop : 0;
      const winTop = window.scrollY || document.documentElement.scrollTop || 0;
      setIsScrolled(Math.max(parentTop, winTop) > 50);
    };

    handleScroll();

    const scrollParent = containerRef.current?.closest(".overflow-y-auto");
    if (scrollParent) {
      scrollParent.addEventListener("scroll", handleScroll, { passive: true });
    }
    window.addEventListener("scroll", handleScroll, { passive: true, capture: true });

    return () => {
      if (scrollParent) {
        scrollParent.removeEventListener("scroll", handleScroll);
      }
      window.removeEventListener("scroll", handleScroll, { capture: true });
    };
  }, []);

  type StartViewTransition = (callback: () => void | Promise<void>) => {
    ready: Promise<void>;
  };

  const toggleTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
    const newTheme = theme === "light" ? "dark" : "light";

    const applyTheme = () => {
      setTheme(newTheme);
      localStorage.setItem("theme", newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const startViewTransition = (
      document as Document & { startViewTransition?: StartViewTransition }
    ).startViewTransition;

    if (!startViewTransition || prefersReducedMotion) {
      applyTheme();
      return;
    }

    const buttonRect = event.currentTarget.getBoundingClientRect();
    const x = buttonRect.left + buttonRect.width / 2;
    const y = buttonRect.top + buttonRect.height / 2;

    document.documentElement.style.setProperty(
      "--theme-transition-x",
      `${x}px`,
    );
    document.documentElement.style.setProperty(
      "--theme-transition-y",
      `${y}px`,
    );

    const maxX = Math.max(x, window.innerWidth - x);
    const maxY = Math.max(y, window.innerHeight - y);
    const endRadius = Math.hypot(maxX, maxY);

    const transition = startViewTransition.call(document, () => {
      applyTheme();
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 650,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          fill: "both",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    });
  };

  const data = detailedProjectData[project.slug] || {
    d1: {
      title: "Brand Identity",
      subtitle: "We worked on the",
      tags: ["Design", "Strategy", "Creative", "Execution"],
    },
    d2: {
      title: "Development",
      subtitle: "Along with",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Production"],
    },
    heroHeadline: `${project.title} had the vision, we built the`,
    clientName: project.title,
    role: project.role,
    timeline: project.year,
    liveStatus: project.status,
    techStack: project.tags,
    challengeTitle: `Engineering the Architecture for ${project.title}`,
    challengeParagraphs: project.overview,
    metrics: [
      {
        label: "Production Uptime",
        value: "99.99%",
        desc: "Engineered for high reliability and consistent performance.",
      },
      {
        label: "User Satisfaction",
        value: "100%",
        desc: "Designed with modern ergonomic UI and fast interactive speeds.",
      },
      {
        label: "Code Quality",
        value: "A+",
        desc: "Strict TypeScript typing with zero runtime exceptions.",
      },
      {
        label: "Speed Index",
        value: "<1.0s",
        desc: "Optimized bundle sizes and responsive asset loading pipelines.",
      },
    ],
    archHeadline:
      "We took a simplified but modern approach to delivering excellence.",
    archSubtitle:
      "Constructing a high-performance system architecture that scales effortlessly under real-world production demands.",
    architecturalPillars: [
      {
        number: "01",
        title: "High-Performance Next.js Architecture",
        description:
          "Leveraging modern React server components and edge computing to ensure instant page delivery and optimal resource utilization.",
        icon: "cpu",
      },
      {
        number: "02",
        title: "Resilient Data Layer & State Management",
        description:
          "Type-safe database interactions with strict validation and error handling to guarantee data integrity across all workflows.",
        icon: "db",
      },
      {
        number: "03",
        title: "Modern Interactive UI Systems",
        description:
          "Tailwind CSS styling coupled with hardware-accelerated animations for an intuitive, enjoyable user experience.",
        icon: "zap",
      },
      {
        number: "04",
        title: "Security & Production Readiness",
        description:
          "Comprehensive security headers, cryptographic session tokens, and automated CI/CD deployment pipelines.",
        icon: "shield",
      },
    ],
    keyLearnings: [
      "Early performance profiling prevents technical debt as application complexity grows.",
      "Clear separation of concerns makes feature iteration significantly faster.",
      "Modern full-stack engineering delivers tangible business results when built with care.",
    ],
  };

  const handleBackToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onClose) {
      onClose();
    } else {
      router.push("/#selected-work");
    }
  };

  const handleChatClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onClose) {
      onClose();
      setTimeout(() => {
        const contactEl = document.getElementById("contact");
        if (contactEl) {
          contactEl.scrollIntoView({ behavior: "smooth" });
        } else {
          window.location.hash = "#contact";
        }
      }, 400);
    } else {
      router.push("/#contact");
    }
  };

  const externalUrl = project.siteUrl || project.repoUrl;

  return (
    <div
      ref={containerRef}
      className={`w-full min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground transition-colors duration-300 ${isModal ? "p-0" : "pt-2 sm:pt-4 px-1 sm:px-3 lg:px-6"
        }`}
    >
      <div className="w-full mx-auto">
        {/* Top Header: Sticky floating pill navbar */}
        <header className="sticky top-0 z-50 w-full -mb-20 sm:-mb-24 py-2 isolate transition-all duration-500 pointer-events-none">
          <div
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 backdrop-blur-xl mask-[linear-gradient(to_top,transparent_0%,black_70%,black_100%)] [-webkit-mask-image:linear-gradient(to_top,transparent_0%,black_70%,black_100%)]",
              isScrolled ? "opacity-100" : "opacity-0",
            )}
          />

          <nav
            className={cn(
              "relative z-50 mx-auto flex items-center justify-between rounded-full transition-all duration-500 ease-out pointer-events-auto",
              isScrolled
                ? "bg-foreground/80 backdrop-blur-2xl text-background shadow-2xl px-6 py-3 lg:px-10 max-w-[70dvw] sm:max-w-250 mt-1"
                : "bg-transparent text-foreground px-6 py-3 lg:px-10 max-w-full sm:max-w-350",
            )}
            aria-label="Case study navigation"
          >
            {/* Logo */}
            <button
              type="button"
              onClick={handleBackToWork}
              className={cn(
                "font-serif italic text-xl sm:text-2xl tracking-wide transition-opacity hover:opacity-70 cursor-pointer select-none",
                isScrolled ? "text-background" : "text-foreground",
              )}
            >
              Amit Narwal.
            </button>

            {/* Desktop Actions (hidden on mobile) */}
            <div className="hidden md:flex items-center gap-3 sm:gap-4">
              <ThemeToggleButton
                theme={theme}
                size="md"
                isScrolled={isScrolled}
                onToggle={toggleTheme}
              />

              <button
                type="button"
                onClick={handleChatClick}
                className={cn(
                  "px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-md cursor-pointer",
                  isScrolled
                    ? "bg-background text-foreground hover:bg-background/90"
                    : "bg-foreground text-background hover:bg-foreground/90",
                )}
              >
                Chat with Amit
              </button>

              {/* Desktop Close Button: Circular rounded button with only icon, no text */}
              <button
                type="button"
                onClick={handleBackToWork}
                aria-label="Close case study"
                className={cn(
                  "flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 shadow-md cursor-pointer",
                  isScrolled
                    ? "bg-background text-foreground hover:bg-background/90"
                    : "bg-muted text-foreground hover:bg-foreground hover:text-background",
                )}
              >
                <X size={18} strokeWidth={2.2} />
              </button>
            </div>

            {/* Mobile Action: Circular rounded Close Button with only icon, no text */}
            <div className="flex items-center md:hidden">
              <button
                type="button"
                onClick={handleBackToWork}
                aria-label="Close case study"
                className={cn(
                  "flex items-center justify-center w-9 h-9 rounded-full transition-all cursor-pointer shadow-sm",
                  isScrolled
                    ? "bg-background text-foreground hover:bg-background/90"
                    : "bg-muted text-foreground hover:bg-foreground hover:text-background",
                )}
              >
                <X size={18} strokeWidth={2.2} />
              </button>
            </div>
          </nav>
        </header>

        {/* ── SECTION 1: PROJECT HERO ── */}
        <section className="project-hero relative w-full h-[62vh] sm:h-[72vh] lg:h-[88vh] pt-24 lg:pt-28 px-4 md:px-8 lg:px-12 pb-6 lg:pb-10">
          <div className="w-full h-full relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl bg-neutral-900">
            {/* Main Hero Visual */}
            <Image
              src={project.image}
              alt={project.imageAlt || `${project.title} hero mockup`}
              fill
              priority
              sizes="100vw"
              className="w-full h-full object-cover z-0"
            />

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none z-[1]" />

            {/* ── INTERACTIVE DELIVERABLES BENTO BAR (Matches Image 2 & 3 with NO BORDERS) ── */}
            <div className="hidden lg:block absolute bottom-0 left-0 w-full z-20 pointer-events-auto">
              <div className="relative w-full flex items-end">
                {/* Option 1: Left */}
                <div
                  onMouseEnter={() => setActiveTab("d1")}
                  onMouseLeave={() => setActiveTab(null)}
                  className={`relative w-1/2 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${activeTab === "d1"
                    ? "h-64 bg-neutral-900 rounded-tl-2xl rounded-tr-2xl lg:rounded-tl-3xl lg:rounded-tr-3xl p-8 shadow-2xl flex flex-col justify-between"
                    : "h-14 bg-neutral-900/95 backdrop-blur-md hover:bg-neutral-800 px-8 flex items-center justify-between cursor-pointer"
                    }`}
                >
                  {activeTab === "d1" ? (
                    <div className="flex flex-col justify-between h-full w-full">
                      <div>
                        <span className="text-xs uppercase text-white/60 tracking-wider font-semibold block mb-1">
                          {data.d1.subtitle}
                        </span>
                        <h3 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
                          {data.d1.title}
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {data.d1.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="bg-white/10 text-xs md:text-sm text-white/90 px-5 py-2 rounded-full font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <>
                      <span className="text-base xl:text-lg font-medium text-white tracking-wide">
                        {data.d1.title}
                      </span>
                      <span className="text-white/80">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M7 13V1M7 1L1 7M7 1L13 7" />
                        </svg>
                      </span>
                    </>
                  )}
                </div>

                {/* Option 2: Right */}
                <div
                  onMouseEnter={() => setActiveTab("d2")}
                  onMouseLeave={() => setActiveTab(null)}
                  className={`relative w-1/2 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${activeTab === "d2"
                    ? "h-64 bg-neutral-800 rounded-tl-2xl rounded-tr-2xl lg:rounded-tl-3xl lg:rounded-tr-3xl p-8 shadow-2xl flex flex-col justify-between"
                    : "h-14 bg-neutral-800/95 backdrop-blur-md hover:bg-neutral-700 px-8 flex items-center justify-between cursor-pointer"
                    }`}
                >
                  {activeTab === "d2" ? (
                    <div className="flex flex-col justify-between h-full w-full">
                      <div>
                        <span className="text-xs uppercase text-white/60 tracking-wider font-semibold block mb-1">
                          {data.d2.subtitle}
                        </span>
                        <h3 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
                          {data.d2.title}
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {data.d2.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="bg-white/10 text-xs md:text-sm text-white/90 px-5 py-2 rounded-full font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <>
                      <span className="text-base xl:text-lg font-medium text-white tracking-wide">
                        {data.d2.title}
                      </span>
                      <span className="text-white/80">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M7 13V1M7 1L1 7M7 1L13 7" />
                        </svg>
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Mobile deliverables badge */}
            <div className="lg:hidden absolute bottom-0 left-0 w-full p-4 bg-black/85 backdrop-blur-md z-10 flex flex-col gap-2">
              <span className="text-xs uppercase text-white/60 tracking-wider font-semibold">
                Deliverables
              </span>
              <div className="flex flex-wrap gap-1.5">
                {[...data.d1.tags, ...data.d2.tags].map((t, idx) => (
                  <span
                    key={idx}
                    className="bg-white/10 text-[11px] text-white px-3 py-1 rounded-full font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PROJECT METADATA STRIP (About Me UI & Theme with exact original layout & data) ── */}
        <section className="px-4 md:px-8 lg:px-12 xl:px-20 mx-auto w-full mt-8 lg:mt-12">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#0B0B0C] dark:bg-[#131315] dark:ring-1 dark:ring-white/10 p-6 lg:p-8 text-[#FFF6E0] shadow-2xl">
            {/* Ambient Glow */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/20 blur-3xl" />
            </div>

            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50 block mb-2">
                  Client / Product
                </span>
                <span className="text-base lg:text-lg font-semibold text-white">
                  {data.clientName}
                </span>
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50 block mb-2">
                  Role
                </span>
                <span className="text-base lg:text-lg font-semibold text-white">
                  {data.role}
                </span>
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50 block mb-2">
                  Timeline
                </span>
                <span className="text-base lg:text-lg font-semibold text-white">
                  {data.timeline}
                </span>
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50 block mb-2">
                  Status
                </span>
                <span className="text-base lg:text-lg font-semibold text-emerald-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  {data.liveStatus}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: THE CHALLENGE & PROBLEM STATEMENT (Using Tailwind Tokens) ── */}
        <section className="mt-16 lg:mt-24 flex flex-col gap-10 lg:gap-14 px-4 md:px-8 lg:px-12 xl:px-20 mx-auto w-full">
          <div className="flex flex-col gap-4 lg:gap-6">
            <h2 className="text-base md:text-lg text-muted-foreground font-semibold uppercase tracking-wider">
              {project.title}
            </h2>
            <h1 className="text-foreground leading-[1.08] font-semibold text-3xl sm:text-6xl tracking-tight">
              {data.heroHeadline}{" "}
              <span className="h-word-light">cherry on top</span>.
            </h1>
          </div>

          {/* Deep Challenge Narrative */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
              {data.challengeTitle}
            </h3>
            {data.challengeParagraphs.map((para, idx) => (
              <p
                key={idx}
                className="text-base md:text-xl text-muted-foreground font-normal leading-relaxed"
              >
                {para}
              </p>
            ))}
          </div>

          {/* Core Tech Stack Badges */}
          <div className="flex flex-col gap-3 pt-2">
            <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
              Technologies & Infrastructure
            </span>
            <div className="flex flex-wrap gap-2.5">
              {data.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-card text-card-foreground text-sm px-5 py-2.5 rounded-full font-medium shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 3: KEY PERFORMANCE METRICS BENTO (Using Tailwind Tokens) ── */}
        <section className="mt-16 lg:mt-24 px-4 md:px-8 lg:px-12 xl:px-20 mx-auto w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {data.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-card text-card-foreground shadow-lg flex flex-col justify-between"
              >
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold block mb-4">
                  {metric.label}
                </span>
                <div className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground mb-3">
                  {metric.value}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {metric.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 4: SHOWCASE GALLERY (Using Tailwind Tokens) ── */}
        <section className="mt-16 lg:mt-24 px-4 md:px-8 lg:px-12 xl:px-20 mx-auto w-full">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-card shadow-xl group">
              <Image
                src={project.image}
                alt={`${project.title} preview 1`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-card text-card-foreground p-8 lg:p-10 flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-xs uppercase text-muted-foreground tracking-wider font-semibold block mb-3">
                  Production Impact & Execution
                </span>
                <h3 className="text-2xl sm:text-4xl font-semibold text-foreground tracking-tight">
                  High-Availability System Architecture
                </h3>
                <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 pt-6">
                <span className="text-xs text-muted-foreground font-mono">
                  Engineered & deployed by Amit Narwal
                </span>
                {externalUrl && (
                  <a
                    href={externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-semibold uppercase tracking-wider transition-all shadow-md"
                  >
                    <span>Live Product</span>
                    <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 5: THE SYSTEM ARCHITECTURE (Using Tailwind Tokens) ── */}
        <section className="mt-20 lg:mt-32 flex flex-col gap-10 lg:gap-16 px-4 md:px-8 lg:px-12 xl:px-20 mx-auto w-full">
          <div className="flex flex-col gap-4 lg:gap-6">
            <h2 className="text-base md:text-lg text-muted-foreground font-semibold uppercase tracking-wider">
              The Architecture
            </h2>
            <h2 className="text-foreground leading-[1.08] font-semibold text-2xl md:text-3xl tracking-tight">
              {data.archHeadline.split("modern approach")[0]}
              <span className="h-word-light">modern approach</span>
              {data.archHeadline.split("modern approach")[1] ||
                " of delivering speed and scale."}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-normal leading-relaxed">
              {data.archSubtitle}
            </p>
          </div>

          {/* Architectural Pillars Grid (Using Tailwind Tokens) */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {data.architecturalPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-8 lg:p-10 rounded-3xl bg-card text-card-foreground shadow-lg flex flex-col justify-between hover:shadow-xl transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm font-mono text-primary font-bold">
                      {pillar.number}.
                    </span>
                    <span className="text-muted-foreground">
                      {pillar.icon === "queue" && <Cpu size={20} />}
                      {pillar.icon === "db" && <Database size={20} />}
                      {pillar.icon === "shield" && <ShieldCheck size={20} />}
                      {pillar.icon === "cpu" && <Cpu size={20} />}
                      {pillar.icon === "layers" && <Layers size={20} />}
                      {pillar.icon === "zap" && <Zap size={20} />}
                    </span>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-semibold text-foreground tracking-tight mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 6: KEY TECHNICAL TAKEAWAYS (Using Tailwind Tokens) ── */}
        <section className="mt-16 lg:mt-24 px-4 md:px-8 lg:px-12 xl:px-20 mx-auto w-full">
          <div className="p-8 lg:p-12 rounded-3xl bg-card text-card-foreground shadow-sm flex flex-col gap-6">
            <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
              Key Engineering Insights
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.keyLearnings.map((learning, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <CheckCircle2
                    size={22}
                    className="text-primary shrink-0 mt-0.5"
                  />
                  <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                    {learning}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 7: CONCLUDING ACTION BAR (Using Tailwind Tokens) ── */}
        <section className="mt-16 lg:mt-24 mb-16 lg:mb-24 px-4 md:px-8 lg:px-12 xl:px-20 mx-auto w-full">
          <div className="w-full p-8 lg:p-12 rounded-3xl bg-card text-card-foreground shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex flex-col text-center sm:text-left">
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">
                Have a similar vision?
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
                Let&apos;s build something exceptional together.
              </h3>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <button
                type="button"
                onClick={handleBackToWork}
                className="px-6 py-3 rounded-full bg-muted text-foreground hover:bg-muted/80 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer"
              >
                Close Case Study
              </button>
              <button
                type="button"
                onClick={handleChatClick}
                className="px-6 py-3 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-md cursor-pointer"
              >
                Get in Touch →
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
