import Link from "next/link";
import { ReactNode } from "react";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: ReactNode;
};

export const blogArticles: BlogPost[] = [
  {
    slug: "how-to-build-mcp-server-browser-automation",
    image: "/web-mcp.jpg",
    date: "April 4, 2026",
    readTime: "14 min read",
    title:
      "How to Build an MCP Server for Browser Automation: From STDIO to Headless Chromium",
    excerpt:
      "A hands-on breakdown of building @amitnarw/web-mcp: protocol lifecycle, managing isolated browser tabs, bidirectional JSON-RPC, and securing agent execution.",
    category: "AI Engineering",
    content: (
      <>
        <div className="p-8 mb-10 rounded-3xl bg-primary/5 border border-primary/20">
          <h2 className="text-[1.75rem] mb-4 text-primary font-heading tracking-[0.07em]">
            Executive Summary
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Most LLM web search tools merely fetch raw HTML into strings. While
            sufficient for static docs, modern web applications require
            authenticated sessions, client-side rendering, and interactive form
            submission.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Building <strong>@amitnarw/web-mcp</strong> taught me how to bridge
            the Model Context Protocol (MCP) with Chromium automation, creating
            a persistent, local-first browser agent that AI assistants (Claude
            Code, Cursor, OpenCode) can safely control.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-medium">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              Stdio & SSE transport lifecycle
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              Tab pooling & session isolation
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              Selector resilience & snapshot parsing
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              Sandboxed execution boundaries
            </li>
          </ul>
        </div>

        <h2 className="text-3xl mt-12 mb-6 font-heading tracking-[0.04em]">
          1. Understanding MCP Transport Protocols
        </h2>
        <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
          The Model Context Protocol establishes a standardized client-server
          contract over JSON-RPC 2.0. In desktop workflows, the default transport
          is <code>stdio</code>. The AI client launches your server as a child
          process and communicates via standard input/output streams.
        </p>
        <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
          A common pitfall is logging debugging information with{" "}
          <code>console.log()</code>. In a stdio server, any stdout output that
          is not valid JSON-RPC immediately breaks the protocol parser. All
          logging must be strictly redirected to <code>process.stderr</code>.
        </p>
        <div className="p-6 mb-8 rounded-2xl bg-secondary/10 border border-foreground/10">
          <pre className="text-sm overflow-x-auto text-foreground font-mono">
            {`import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";

const server = new Server(
  { name: "web-mcp", version: "1.0.0" },
  { capabilities: { tools: {} } }
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "navigate",
      description: "Navigate active tab to a target URL",
      inputSchema: {
        type: "object",
        properties: { url: { type: "string" } },
        required: ["url"],
      },
    },
  ],
}));`}
          </pre>
        </div>

        <h2 className="text-3xl mt-12 mb-6 font-heading tracking-[0.04em]">
          2. Managing the Chromium Lifecycle
        </h2>
        <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
          Spawning a new browser process on every agent invocation is too slow.
          In <strong>Web MCP</strong>, I designed a singleton browser manager
          that keeps Chromium warm while dynamically provisioning separate
          browser contexts or tabs for distinct agent tasks.
        </p>
        <p className="mb-8 leading-relaxed text-muted-foreground text-lg">
          By persisting the user data directory locally, users remain logged
          into development staging environments and dashboards. AI agents can
          re-use valid cookies and local storage tokens without requiring
          raw credentials in their system prompt.
        </p>

        <h2 className="text-3xl mt-12 mb-6 font-heading tracking-[0.04em]">
          3. Turning Visual Pages into Agent-Readable State
        </h2>
        <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
          Passing raw HTML directly to an LLM wastes thousands of context
          tokens on scripts, SVG paths, and CSS rules. Web MCP converts the DOM
          into an accessibility tree representation:
        </p>
        <ul className="list-disc pl-6 space-y-3 mb-8 text-lg text-muted-foreground">
          <li>
            <strong>Element Filtering</strong>: Strips invisible nodes, tracking
            pixels, and non-semantic styling containers.
          </li>
          <li>
            <strong>Deterministic Element IDs</strong>: Labels interactive
            buttons, inputs, and links with compact numeric selectors (`[id=14]`)
            so the agent can trigger clicks without writing brittle XPath queries.
          </li>
          <li>
            <strong>Viewport State</strong>: Informs the model whether an element
            is currently scrolled into view or requires scrolling.
          </li>
        </ul>

        <h2 className="text-3xl mt-12 mb-6 font-heading tracking-[0.04em]">
          4. Security Boundaries for Autonomous Browsing
        </h2>
        <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
          Giving an AI agent a browser with active credentials introduces real
          security risks, notably prompt injection from untrusted web pages.
          Web MCP implements three critical safety controls:
        </p>
        <ol className="list-decimal pl-6 space-y-3 mb-8 text-lg text-muted-foreground">
          <li>
            <strong>Domain Whitelisting & Confirmation</strong>: Restricts
            out-of-scope external redirects unless explicitly permitted.
          </li>
          <li>
            <strong>Non-Destructive Actions Default</strong>: Dangerous actions
            such as submitting checkout forms or clearing accounts require explicit
            confirmation payloads.
          </li>
          <li>
            <strong>Isolated Profile Storage</strong>: Dedicated browser
            profiles keep test workflows separated from the developer's primary
            personal browsing accounts.
          </li>
        </ol>
      </>
    ),
  },
  {
    slug: "ai-coding-agents-better-frontends",
    image: "/agent_workflows_v.jpeg",
    date: "April 2, 2026",
    readTime: "12 min read",
    title:
      "How I Get AI Coding Agents to Build Better Frontends: Context, Rules, and Design Systems",
    excerpt:
      "Why naive agent prompts yield messy CSS, and how structured token systems, AGENTS.md, visual verification loops, and deterministic component contracts produce production-ready UI.",
    category: "AI Engineering",
    content: (
      <>
        <div className="p-8 mb-10 rounded-3xl bg-primary/5 border border-primary/20">
          <h2 className="text-[1.75rem] mb-4 text-primary font-heading tracking-[0.07em]">
            The Frontend Agent Dilemma
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Most developers complain that AI coding assistants generate
            generic, purple-gradient, poorly aligned web interfaces. The problem
            isn't the model's intelligence,it's the absence of architectural
            constraints.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            By establishing clear design system boundaries, component token
            rules, and visual verification steps, you can guide coding agents to
            produce polished, accessible, production-grade interfaces.
          </p>
        </div>

        <h2 className="text-3xl mt-12 mb-6 font-heading tracking-[0.04em]">
          1. Constraining the Design Token Space
        </h2>
        <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
          When an LLM has open-ended freedom to invent colors and arbitrary
          pixel values (`w-[387px]`, `bg-[#6366f1]`), visual consistency
          degrades rapidly. In Tailwind CSS and modern styling engines, the
          solution is strict token gating:
        </p>
        <ul className="list-disc pl-6 space-y-3 mb-8 text-lg text-muted-foreground">
          <li>
            Provide a compact <code>theme.config</code> snippet in your agent instructions.
          </li>
          <li>
            Explicitly forbid arbitrary Tailwind brackets (`[#...]`, `[13px]`)
            in favour of semantic tokens (`bg-background`, `text-primary`, `space-y-4`).
          </li>
          <li>
            Define fixed layout containers (`max-w-7xl`, `mx-auto`) so pages
            maintain structural harmony across screen breakpoints.
          </li>
        </ul>

        <h2 className="text-3xl mt-12 mb-6 font-heading tracking-[0.04em]">
          2. The Two-Phase Prompting Workflow
        </h2>
        <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
          Never ask an agent to build a complete frontend component in a single
          prompt. Complex UI requires state management, responsive grids,
          accessibility attributes, and animations,too many concerns for one pass.
        </p>
        <div className="p-6 mb-8 rounded-2xl bg-secondary/10 border border-foreground/10">
          <h3 className="text-lg font-bold mb-3 text-foreground">
            Phase 1: Component Contract & TypeScript Interface
          </h3>
          <p className="text-muted-foreground mb-4 text-sm">
            Specify the props, variant types, and data dependencies before
            generating JSX:
          </p>
          <pre className="text-sm overflow-x-auto text-foreground font-mono">
            {`interface BentoCardProps {
  title: string;
  badge?: string;
  metric?: { value: string; label: string };
  href?: string;
  variant?: "compact" | "wide" | "hero";
}`}
          </pre>
        </div>
        <p className="mb-8 leading-relaxed text-muted-foreground text-lg">
          Once the props contract is locked, Phase 2 implements the markup.
          Because the data contract is clear, the model focuses 100% of its
          reasoning on layout, semantic HTML, and hover micro-interactions.
        </p>

        <h2 className="text-3xl mt-12 mb-6 font-heading tracking-[0.04em]">
          3. Enforcing Semantic HTML & Accessibility Checks
        </h2>
        <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
          Agents default to generating nested <code>&lt;div&gt;</code> soup. To
          prevent this, add strict guidelines in your repo instructions:
        </p>
        <ol className="list-decimal pl-6 space-y-3 mb-8 text-lg text-muted-foreground">
          <li>
            Require semantic landmarks: <code>&lt;article&gt;</code>,{" "}
            <code>&lt;nav&gt;</code>, <code>&lt;aside&gt;</code>, and{" "}
            <code>&lt;main&gt;</code>.
          </li>
          <li>
            All interactive non-link click targets must use proper{" "}
            <code>&lt;button&gt;</code> tags with <code>type="button"</code>.
          </li>
          <li>
            Require accessible labels (<code>aria-label</code> or visual text)
            for all icon-only triggers.
          </li>
        </ol>
      </>
    ),
  },
  {
    slug: "make-ai-agents-understand-codebase",
    image: "/agentic_ai_workflows.png",
    date: "March 29, 2026",
    readTime: "11 min read",
    title:
      "How to Make AI Agents Understand Your Existing Codebase Before Coding",
    excerpt:
      "Stop agent hallucinations on existing projects: context budgeting, AST indexing, architecture maps, and deterministic repository packing.",
    category: "AI Engineering",
    content: (
      <>
        <div className="p-8 mb-10 rounded-3xl bg-primary/5 border border-primary/20">
          <h2 className="text-[1.75rem] mb-4 text-primary font-heading tracking-[0.07em]">
            The Context Degradation Problem
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Long-context windows (1M+ tokens) give a false sense of security.
            Dumping an entire codebase into an LLM degrades recall accuracy,
            inflates latency, and increases cost by orders of magnitude.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            High-performing AI workflows rely on <strong>structured context pruning</strong>:
            giving coding agents deterministic architecture maps, AST symbol
            indexes, and clear boundaries before they write a single line of code.
          </p>
        </div>

        <h2 className="text-3xl mt-12 mb-6 font-heading tracking-[0.04em]">
          1. The Living Architectural Map: PROJECT_CONTEXT.md
        </h2>
        <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
          Every production codebase should maintain a concise architectural
          summary file in its root. This document serves as a high-density index
          that agents read on startup:
        </p>
        <ul className="list-disc pl-6 space-y-3 mb-8 text-lg text-muted-foreground">
          <li>
            <strong>Core Domain Models</strong>: The primary entities, schemas,
            and database relationships.
          </li>
          <li>
            <strong>Key Entry Points</strong>: Route handlers, queue workers,
            and layout boundaries.
          </li>
          <li>
            <strong>Technical Constraints</strong>: Framework versions, styling
            engine, database clients, and testing conventions.
          </li>
        </ul>

        <h2 className="text-3xl mt-12 mb-6 font-heading tracking-[0.04em]">
          2. Repository Packing & AST Indexing
        </h2>
        <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
          Tools like Repomix or tree-sitter based AST parsers allow you to
          extract TypeScript types, class declarations, and function signatures
          without including the implementation bodies.
        </p>
        <p className="mb-8 leading-relaxed text-muted-foreground text-lg">
          An agent examining a 2,000-line service only needs the exported type
          contracts to understand how to interact with it. Feeding only the
          interface definitions reduces context token usage by over 80% while
          eliminating hallucinations about parameter types.
        </p>

        <h2 className="text-3xl mt-12 mb-6 font-heading tracking-[0.04em]">
          3. Read-First Agent Execution Protocols
        </h2>
        <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
          Configure agent systems with a strict read-before-write mandate:
        </p>
        <div className="p-6 mb-8 rounded-2xl bg-secondary/10 border border-foreground/10">
          <ol className="list-decimal pl-6 space-y-3 text-muted-foreground text-base">
            <li>
              <strong>Discover</strong>: Search directory trees and identify
              neighboring files that follow the established conventions.
            </li>
            <li>
              <strong>Read & Cross-Check</strong>: Inspect import paths, utility
              helpers, and existing design tokens.
            </li>
            <li>
              <strong>Plan First</strong>: Output a bulleted diff plan before
              touching any files on disk.
            </li>
            <li>
              <strong>Verify</strong>: Run typescript checks and linting
              immediately following every write operation.
            </li>
          </ol>
        </div>
      </>
    ),
  },
  {
    slug: "nextjs-16-2-performance-agent-ready",
    image: "/nextjs_16_2_v.jpeg",
    date: "March 20, 2026",
    readTime: "12 min read",
    title:
      "Next.js 16: Turbopack Maturity, Server Action Security, and AI-Ready Architectures",
    excerpt:
      "A factual deep-dive into Turbopack production builds, fine-grained cache life directives, V8 compile cache improvements, and building agent-ready endpoints.",
    category: "Next.js",
    content: (
      <>
        <div className="p-8 mb-10 rounded-3xl bg-primary/5 border border-primary/20">
          <h2 className="text-[1.75rem] mb-4 text-primary font-heading tracking-[0.07em]">
            Architectural Evolution in Next.js
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Next.js 16 solidifies Turbopack as the default engine for production
            builds while refining the React Server Components caching model with
            fine-grained <code>cacheLife</code> and <code>cacheTag</code> directives.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-medium">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              Turbopack memory efficiency & incremental builds
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              Declarative `use cache` primitives
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              Server Actions origin validation
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              Streaming AI endpoints via Vercel AI SDK
            </li>
          </ul>
        </div>

        <h2 className="text-3xl mt-12 mb-6 font-heading tracking-[0.04em]">
          Turbopack in Production: Beyond Fast Refresh
        </h2>
        <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
          While Turbopack initially proved its value in local dev server startup
          times, Next.js 16 brings Turbopack to production bundling. The Rust-based
          engine builds dependency graphs with persistent disk caching and
          reduced peak memory footprints, preventing out-of-memory errors on
          large monorepos in CI/CD.
        </p>

        <h2 className="text-3xl mt-12 mb-6 font-heading tracking-[0.04em]">
          Declarative Caching with 'use cache'
        </h2>
        <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
          Previous versions of Next.js relied heavily on fetch-level caching
          heuristics that were difficult to reason about. Next.js 16 embraces
          the explicit <code>'use cache'</code> directive at the function or
          component level:
        </p>
        <div className="p-6 mb-8 rounded-2xl bg-secondary/10 border border-foreground/10">
          <pre className="text-sm overflow-x-auto text-foreground font-mono">
            {`import { cacheLife, cacheTag } from "next/cache";

export async function getLiveMetrics(projectId: string) {
  "use cache";
  cacheLife("minutes");
  cacheTag(\`metrics-\${projectId}\`);

  return await fetchMetricsFromDatabase(projectId);
}`}
          </pre>
        </div>
        <p className="mb-8 leading-relaxed text-muted-foreground text-lg">
          This shifts caching from implicit network interception to explicit
          architectural intent, making invalidation deterministic with{" "}
          <code>revalidateTag()</code>.
        </p>

        <h2 className="text-3xl mt-12 mb-6 font-heading tracking-[0.04em]">
          Hardening Server Actions
        </h2>
        <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
          Server Actions provide great developer ergonomics, but treat them as
          public POST endpoints. Next.js enforces strict origin header checks
          by default. Always combine this with schema validation:
        </p>
        <ul className="list-disc pl-6 space-y-3 mb-8 text-lg text-muted-foreground">
          <li>
            Parse and validate input payloads using Zod or Valibot before
            invoking business logic.
          </li>
          <li>
            Enforce session authentication checks directly inside the action
            body rather than relying solely on middleware.
          </li>
          <li>
            Return structured errors with specific codes to prevent leaking
            internal database stack traces to clients.
          </li>
        </ul>
      </>
    ),
  },
  {
    slug: "litellm-supply-chain-attack-teampcp",
    image: "/litellm_attack_v.jpeg",
    date: "March 26, 2026",
    readTime: "11 min read",
    title:
      "Technical Analysis: The LiteLLM Supply Chain Attack & CI/CD Pipeline Hardening",
    excerpt:
      "A forensic analysis of the TeamPCP security incident: how a compromised CI/CD dependency bypassed static checks, harvested environment variables, and how to defend AI gateways.",
    category: "Security",
    content: (
      <>
        <div className="p-8 mb-10 rounded-3xl bg-red-500/5 border border-red-500/20">
          <h2 className="text-[1.75rem] mb-4 text-red-500 font-heading tracking-[0.07em]">
            Security Incident Breakdown
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            The security incident involving LiteLLM in late March 2026 highlighted
            critical vulnerabilities in AI infrastructure supply chains. Contrary
            to initial speculation of simple PyPI dependency confusion, the
            breach originated from a compromised dependency within the CI/CD
            pipeline itself.
          </p>
        </div>

        <h2 className="text-3xl mt-12 mb-6 font-heading tracking-[0.04em]">
          The Root Cause: Compromised CI/CD Action
        </h2>
        <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
          LiteLLM's official post-mortem confirmed that the incident was traced
          to a compromised external scanning action (Aqua Trivy dependency in
          their automated release workflow). Attackers injected malicious code
          that executed during the build process on the GitHub Actions runner.
        </p>
        <p className="mb-8 leading-relaxed text-muted-foreground text-lg">
          Because the runner environment had access to release secrets and
          publishing tokens, the malicious payload was able to capture
          environment variables and attempt exfiltration to an external C2
          endpoint during automated test runs.
        </p>

        <h2 className="text-3xl mt-12 mb-6 font-heading tracking-[0.04em]">
          Payload Mechanics & Target Scope
        </h2>
        <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
          AI gateway services are prime targets for supply chain attackers
          because they aggregate high-value secrets:
        </p>
        <ul className="list-disc pl-6 space-y-3 mb-8 text-lg text-muted-foreground">
          <li>
            <strong>Frontier LLM API Keys</strong>: OpenAI, Anthropic, Cohere,
            and Google Gemini credentials.
          </li>
          <li>
            <strong>Cloud Provider Credentials</strong>: AWS Bedrock IAM keys
            and Azure OpenAI resource keys.
          </li>
          <li>
            <strong>Package Manager Publishing Secrets</strong>: PyPI and npm
            tokens that could be leveraged for downstream propagation.
          </li>
        </ul>

        <h2 className="text-3xl mt-12 mb-6 font-heading tracking-[0.04em]">
          How to Protect Your AI CI/CD Pipelines
        </h2>
        <div className="p-6 mb-8 rounded-2xl bg-secondary/10 border border-foreground/10">
          <ol className="list-decimal pl-6 space-y-3 text-muted-foreground text-base">
            <li>
              <strong>Pin Actions by Commit Hash</strong>: Never use mutable tags
              like <code>@v2</code> or <code>@main</code>. Pin to full 40-character
              commit SHAs: <code>uses: actions/checkout@b4ffde...</code>.
            </li>
            <li>
              <strong>Adopt OIDC for Cloud Authentication</strong>: Eliminate
              static AWS secret keys or long-lived API tokens in CI runners. Use
              OpenID Connect (OIDC) federation to exchange short-lived tokens.
            </li>
            <li>
              <strong>Isolate Build and Release Jobs</strong>: Never expose
              production deployment secrets in general PR testing workflows.
            </li>
            <li>
              <strong>Outbound Egress Filtering</strong>: Restrict GitHub Actions
              runner network egress using tools like StepSecurity to block
              unauthorized external socket connections.
            </li>
          </ol>
        </div>
      </>
    ),
  },
  {
    slug: "modernizing-nextjs-seo-geo",
    image: "/nextjs_seo_v.jpeg",
    date: "March 15, 2026",
    readTime: "12 min read",
    title:
      "Next.js for Modern Search: Technical SEO, JSON-LD Schemas, and AEO Readiness",
    excerpt:
      "How to structure Next.js App Router applications for traditional search engines and AI answer engines using verified structured data and dynamic sitemaps.",
    category: "React/SEO",
    content: (
      <>
        <div className="p-8 mb-10 rounded-3xl bg-primary/5 border border-primary/20">
          <h2 className="text-[1.75rem] mb-4 text-primary font-heading tracking-[0.07em]">
            From Keywords to Knowledge Entities
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Search has transformed. While Googlebot still crawls HTML for ranking
            signals, answer engines (Perplexity, ChatGPT Search, Google AI
            Overviews) index structured entities and direct citations.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Optimizing modern Next.js apps requires pairing traditional core web
            vitals with machine-readable JSON-LD schemas and clear semantic
            content architecture.
          </p>
        </div>

        <h2 className="text-3xl mt-12 mb-6 font-heading tracking-[0.04em]">
          1. Dynamic Next.js Metadata API
        </h2>
        <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
          The App Router provides <code>generateMetadata()</code> for asynchronous,
          page-specific metadata resolution. Always provide canonical URLs,
          social graph fallbacks, and descriptive robots directives:
        </p>
        <div className="p-6 mb-8 rounded-2xl bg-secondary/10 border border-foreground/10">
          <pre className="text-sm overflow-x-auto text-foreground font-mono">
            {`export async function generateMetadata({ params }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return {
    title: \`\${post.title} | Amit Narwal\`,
    description: post.excerpt,
    alternates: {
      canonical: \`https://amitnarwal.com/blog/\${post.slug}\`,
    },
    openGraph: {
      type: "article",
      url: \`https://amitnarwal.com/blog/\${post.slug}\`,
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image, width: 1200, height: 630 }],
    },
  };
}`}
          </pre>
        </div>

        <h2 className="text-3xl mt-12 mb-6 font-heading tracking-[0.04em]">
          2. Entity Grounding with JSON-LD Schemas
        </h2>
        <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
          LLMs and crawler knowledge graphs consume Schema.org microdata to
          understand relationships between authors, organizations, and technical
          articles:
        </p>
        <ul className="list-disc pl-6 space-y-3 mb-8 text-lg text-muted-foreground">
          <li>
            <strong>BlogPosting / TechArticle</strong>: Declares explicit
            headline, publish date, author reference, and publisher credentials.
          </li>
          <li>
            <strong>BreadcrumbList</strong>: Enables search engines to accurately
            map your site hierarchy in search result snippets.
          </li>
          <li>
            <strong>Person & ProfessionalService</strong>: Grounds developer
            identity, services offered, and portfolio provenance.
          </li>
        </ul>

        <h2 className="text-3xl mt-12 mb-6 font-heading tracking-[0.04em]">
          3. Dynamic Sitemap & Robots Routing
        </h2>
        <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
          In Next.js, <code>sitemap.ts</code> and <code>robots.ts</code> live
          directly in your <code>src/app/</code> root. They generate fresh,
          valid XML feeds dynamically without requiring manual build-step
          scripts, ensuring newly published content is immediately indexable.
        </p>
      </>
    ),
  },
  {
    slug: "redis-bullmq-job-queues-guide",
    image: "/redis_bullmq.jpeg",
    date: "February 24, 2026",
    readTime: "14 min read",
    title:
      "Redis + BullMQ: Architecting Bulletproof Distributed Job Queues in Production",
    excerpt:
      "A production engineering guide to Lua-backed atomic state transitions, sandboxed Node.js worker pools, backoff retry policies, and telemetry with BullMQ.",
    category: "Backend",
    content: (
      <>
        <div className="p-8 mb-10 rounded-3xl bg-primary/5 border border-primary/20">
          <h2 className="text-[1.75rem] mb-4 text-primary font-heading tracking-[0.07em]">
            The Problem with In-Memory Async Tasks
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Running heavy tasks,video encoding, report generation, or multi-step
            AI calls,inside HTTP request lifecycles blocks the Node.js event
            loop and risks silent task failure whenever a server restarts.
            BullMQ coupled with Redis provides an atomic, distributed queue
            architecture built for 100% durability.
          </p>
        </div>

        <h2 className="text-3xl mt-12 mb-6 font-heading tracking-[0.04em]">
          1. Atomic Transitions via Lua Scripts
        </h2>
        <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
          BullMQ avoids race conditions across distributed worker clusters by
          executing all queue state transitions through Redis Lua scripts.
          Moving a job from <code>waiting</code> to <code>active</code>, renewing
          a lock token, or failing a job is evaluated atomically on the Redis
          server, guaranteeing that no job is executed twice by concurrent workers.
        </p>

        <h2 className="text-3xl mt-12 mb-6 font-heading tracking-[0.04em]">
          2. Sandboxed Workers: CPU Isolation
        </h2>
        <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
          Standard BullMQ workers run in the same Node.js process as your
          application. If a task hits an unhandled exception or blocks the CPU
          with heavy computation, it can freeze queue heartbeats and mark healthy
          jobs as stalled.
        </p>
        <p className="mb-8 leading-relaxed text-muted-foreground text-lg">
          Sandboxed workers solve this by isolating jobs into dedicated child
          processes. The parent worker coordinates with Redis while child
          processes execute the workload:
        </p>
        <div className="p-6 mb-8 rounded-2xl bg-secondary/10 border border-foreground/10">
          <pre className="text-sm overflow-x-auto text-foreground font-mono">
            {`import { Worker } from "bullmq";
import path from "node:path";

// Sandboxed worker points to an isolated file executed in a child process
const processorPath = path.join(__dirname, "report-processor.js");

const worker = new Worker("reportQueue", processorPath, {
  connection: { host: "127.0.0.1", port: 6379 },
  concurrency: 5,
  useWorkerThreads: true,
});

worker.on("completed", (job) => {
  console.log(\`Job \${job.id} completed successfully\`);
});`}
          </pre>
        </div>

        <h2 className="text-3xl mt-12 mb-6 font-heading tracking-[0.04em]">
          3. Retries, Backoff, and Dead Letter Queues
        </h2>
        <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
          Network glitches and third-party rate limits are inevitable in
          production. BullMQ provides built-in exponential backoff:
        </p>
        <div className="p-6 mb-8 rounded-2xl bg-secondary/10 border border-foreground/10">
          <pre className="text-sm overflow-x-auto text-foreground font-mono">
            {`await queue.add("generateReport", data, {
  attempts: 4,
  backoff: {
    type: "exponential",
    delay: 2000, // 2s, 4s, 8s, 16s
  },
  removeOnComplete: 1000,
  removeOnFail: false, // Keep failed jobs for telemetry investigation
});`}
          </pre>
        </div>
      </>
    ),
  },
  {
    slug: "postgresql-performance-optimization-2026",
    image: "/postgres_opt.jpeg",
    date: "February 10, 2026",
    readTime: "13 min read",
    title:
      "PostgreSQL Performance: AIO Internals, B-Tree Skip Scans, and UUIDv7 Indexing",
    excerpt:
      "Real-world tuning for high-throughput Postgres: Linux io_uring asynchronous I/O, skip scan query planner mechanics, and eliminating B-tree fragmentation with sequential UUIDv7.",
    category: "Database",
    content: (
      <>
        <div className="p-8 mb-10 rounded-3xl bg-primary/5 border border-primary/20">
          <h2 className="text-[1.75rem] mb-4 text-primary font-heading tracking-[0.07em]">
            Modern Database Engineering
          </h2>
          <p className="text-muted-foreground leading-relaxed font-semibold">
            High performance begins with data layout and hardware I/O efficiency,
            not premature query rewriting.
          </p>
        </div>

        <h2 className="text-3xl mt-12 mb-6 font-heading tracking-[0.04em]">
          1. Asynchronous I/O Subsystem Architecture
        </h2>
        <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
          Historically, PostgreSQL relied on traditional synchronous POSIX read
          and write calls. A background worker executing a sequential scan or
          fetching heap pages would block waiting for the storage controller.
        </p>
        <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
          Modern PostgreSQL builds integrate asynchronous I/O (AIO) backed by
          Linux <code>io_uring</code>. By submitting batch read requests
          concurrently without blocking worker threads, analytical queries on
          NVMe storage achieve significantly higher throughput without
          modifying application SQL.
        </p>

        <h2 className="text-3xl mt-12 mb-6 font-heading tracking-[0.04em]">
          2. UUIDv7: Eliminating B-Tree Index Fragmentation
        </h2>
        <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
          Random UUIDv4 identifiers cause severe B-tree page splits. Because
          random values insert uniformly across the entire index tree, leaf
          pages quickly exceed capacity, splitting into half-empty pages and
          ballooning disk usage.
        </p>
        <p className="mb-8 leading-relaxed text-muted-foreground text-lg">
          <strong>UUIDv7</strong> addresses this by placing a millisecond-precision
          UNIX timestamp in the most significant bits:
        </p>
        <ul className="list-disc pl-6 space-y-3 mb-8 text-lg text-muted-foreground">
          <li>
            <strong>Monotonic Ordering</strong>: New rows append to the
            right-most leaf pages of the index, matching the sequential insertion
            characteristics of integer serials.
          </li>
          <li>
            <strong>Cache Locality</strong>: Recent write working sets remain
            clustered in Postgres <code>shared_buffers</code> rather than
            churning random memory pages.
          </li>
          <li>
            <strong>Zero Collision Penalty</strong>: Maintains distributed UUID
            generation benefits across client applications without centralized
            sequence locks.
          </li>
        </ul>

        <h2 className="text-3xl mt-12 mb-6 font-heading tracking-[0.04em]">
          3. Practical Memory & Work Tuning
        </h2>
        <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
          Avoid applying generic formulas blindly. Tailor settings to your
          workload:
        </p>
        <div className="p-6 mb-8 rounded-2xl bg-secondary/10 border border-foreground/10">
          <ul className="space-y-4 text-sm text-foreground">
            <li>
              <strong>shared_buffers</strong>: Allocate ~25% of total system RAM
              on dedicated database servers. Going higher (e.g. 50%+) often
              causes double-buffering competition with the Linux page cache.
            </li>
            <li>
              <strong>work_mem</strong>: Set conservatively based on{" "}
              <code>max_connections</code>. Complex queries with multiple joins
              and sorts can consume multiple <code>work_mem</code> allocations
              per session.
            </li>
            <li>
              <strong>random_page_cost</strong>: Set to 1.1 on modern NVMe SSDs.
              The default 4.0 assumes spinning platters and unnecessarily penalizes
              index scans.
            </li>
          </ul>
        </div>
      </>
    ),
  },
];
