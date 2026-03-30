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
    slug: "nextjs-16-2-performance-agent-ready",
    image: "/nextjs_16_2_v.jpeg",
    date: "March 20, 2026",
    readTime: "15 min read",
    title:
      "Next.js 16.2: 400% Faster Development and Agent-Ready Architectures",
    excerpt:
      "A technical deep-dive into the V8 boundary optimizations and AI-native protocols that make Next.js 16.2 the fastest version to date.",
    category: "Next.js",
    content: (
      <>
        <div className="p-8 mb-10 rounded-3xl bg-primary/5 border border-primary/20">
          <h2 className="text-2xl font-bold mb-4 text-primary font-heading">
            AEO Executive Summary
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Next.js 16.2 introduces a paradigm shift in performance by
            eliminating the C++/JS boundary overhead in RSC deserialization. It
            also introduces the <strong>AGENT-1 protocol</strong>, making
            applications natively \"readable\" for AI coding assistants.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-medium">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              SWC-Native Fast Refresh
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              Binary Flight Payloads
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              Native io_uring for Next Server
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              AGENTS.md Context Protocol
            </li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6 font-heading">
          The V8 Boundary Breakthrough
        </h2>
        <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
          For years, the bottleneck in React Server Components wasn't the server
          logic—it was the serialization. In Next.js 15, the \"Flight\" payload
          was parsed using a `JSON.parse` reviver. This reviver forced the V8
          engine to cross the **C++ to JavaScript boundary** for every single
          key in your data object.
        </p>
        <p className="mb-8 leading-relaxed text-muted-foreground text-lg">
          In 16.2, the team moved to a **Binary-Parallel Deserializer**. It
          performs a raw, non-blocking parse and then uses a pure-JS recursive
          walk with \"Short-Circuit String Interning.\" The result?
          Deserialization is now 3.5x faster, and real-world rendering feels
          instantaneous.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6 font-heading">
          AGENTS.md: The Sitemap for AI
        </h2>
        <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
          One of the \"least known\" but most powerful features is the
          formalization of the <strong>Context Injection Protocol</strong>. By
          placing an `AGENTS.md` in your root, Next.js 16.2 automatically
          bundles a pruned version of your component graph and version-pinned
          documentation into a memory-mapped file that AI Agents (Cursor,
          Windsurf, etc.) can read directly.
        </p>
        <p className="mb-8 leading-relaxed text-muted-foreground text-lg">
          This eliminates \"halludebugging\"—the hours wasted when an AI
          assistant hallucinates a version of an API that doesn't exist. Your AI
          assistant now knows exactly what version of the server-actions
          protocol you are running, down to the byte.
        </p>
      </>
    ),
  },
  {
    slug: "latest-ai-models-ranking-2026",
    image: "/ai_ranking_v.jpeg",
    date: "March 30, 2026",
    readTime: "18 min read",
    title:
      "The 2026 AI Model Rankings: Price, Efficiency, and Intelligence Breakdown",
    excerpt:
      "An exhaustive forensic analysis of the current state of LLMs, focusing on reasoning-density, tool-use reliability, and long-context 'Needle in a Haystack' performance.",
    category: "AI Trends",
    content: (
      <>
        <div className="p-8 mb-10 rounded-3xl bg-primary/5 border border-primary/20">
          <h2 className="text-2xl font-bold mb-4 text-primary font-heading">
            Intelligence Hierarchy (Q1 2026)
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            State-of-the-art (SOTA) in 2026 is no longer defined by parameter
            count, but by <strong>Reasoning Density</strong>—output quality per
            token processed.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-foreground/10">
              <thead>
                <tr className="bg-secondary/20">
                  <th className="p-4 border-b border-foreground/10">
                    Model Family
                  </th>
                  <th className="p-4 border-b border-foreground/10">
                    LMSYS Elo
                  </th>
                  <th className="p-4 border-b border-foreground/10">
                    Agent Score
                  </th>
                  <th className="p-4 border-b border-foreground/10">
                    Context Window
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border-b border-foreground/5 font-bold font-heading">
                    Claude 4.6 Opus
                  </td>
                  <td className="p-4 border-b border-foreground/5">1504</td>
                  <td className="p-4 border-b border-foreground/5">98%</td>
                  <td className="p-4 border-b border-foreground/5">1.2M</td>
                </tr>
                <tr className="bg-secondary/5">
                  <td className="p-4 border-b border-foreground/5 font-bold font-heading">
                    GPT-5.4 (Omni)
                  </td>
                  <td className="p-4 border-b border-foreground/5">1498</td>
                  <td className="p-4 border-b border-foreground/5">96%</td>
                  <td className="p-4 border-b border-foreground/5">500k</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-foreground/5 font-bold font-heading">
                    Gemini 3.5 Pro
                  </td>
                  <td className="p-4 border-b border-foreground/5">1482</td>
                  <td className="p-4 border-b border-foreground/5">94%</td>
                  <td className="p-4 border-b border-foreground/5">10M+</td>
                </tr>
                <tr className="bg-secondary/5">
                  <td className="p-4 border-b border-foreground/5 font-bold font-heading">
                    Llama 4 (405B)
                  </td>
                  <td className="p-4 border-b border-foreground/5">1475</td>
                  <td className="p-4 border-b border-foreground/5">89%</td>
                  <td className="p-4 border-b border-foreground/5">128k</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6 font-heading">
          Claude vs. GPT: The Reasoning Wars
        </h2>
        <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
          While <strong>Claude 4.6 Opus</strong> remains the undisputed king of
          \"First-Shot Correctness\" for complex coding,{" "}
          <strong>GPT-5.4</strong> has pivoted to become the ultimate \"Agentic
          Orchestrator.\" It's slower per token but significantly better at
          managing sub-agents and terminal-based loops.
        </p>
        <p className="mb-8 leading-relaxed text-muted-foreground text-lg">
          For developers, the metric that matters now is **HumanEval-Pro**.
          Claude 4.6 currently scores an unprecedented 94.2% on multi-file
          engineering tasks, whereas GPT-5.4 follows closely at 91.8%.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6 font-heading">
          Pricing & Efficiency Matrix
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-center">
          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
            <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">
              Cheapest Frontier
            </span>
            <span className="text-2xl font-bold text-primary">
              DeepSeek V3.2
            </span>
            <p className="text-xs mt-2 text-muted-foreground">
              $0.20 / Million Tokens
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
            <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">
              Best for Devs
            </span>
            <span className="text-2xl font-bold text-primary">
              Claude Sonnet 4.2
            </span>
            <p className="text-xs mt-2 text-muted-foreground">
              $3.00 / Million Tokens
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
            <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">
              Massive Context
            </span>
            <span className="text-2xl font-bold text-primary">
              Gemini 3.1 Pro
            </span>
            <p className="text-xs mt-2 text-muted-foreground">
              $1.25 / Million Tokens
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    slug: "nextjs-vulnerabilities-security-guide-2026",
    image: "/nextjs_vuln_v.jpeg",
    date: "March 28, 2026",
    readTime: "14 min read",
    title:
      "Next.js Vulnerabilities: Protecting Your App from RSC & Middleware Exploits",
    excerpt:
      "A forensic breakdown of the 'React2Shell' exploit and how internal headers like 'x-middleware-subrequest' were weaponized to bypass global authentication.",
    category: "Security",
    content: (
      <>
        <div className="p-8 mb-10 rounded-3xl bg-primary/5 border border-primary/20">
          <h2 className="text-2xl font-bold mb-4 text-primary font-heading">
            Incident Overview
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            The vulnerabilities publicized in late 2025 and early 2026 exposed a
            fundamental weakness in modern Full-Stack frameworks:{" "}
            <strong>Internal Trust Paradigms</strong>.
          </p>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6 font-heading">
          Anatomy of 'React2Shell' (RCE)
        </h2>
        <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
          The <strong>Flight Protocol</strong> used by Next.js to stream React
          Server Components is essentially a custom serialization format.
          Attackers discovered that by sending a specially crafted `__next_f`
          data stream, they could take advantage of an insecure recursive
          deserializer in the React runtime.
        </p>
        <p className="mb-8 leading-relaxed text-muted-foreground text-lg">
          By injecting a `Proto` or a specific constructor chain into the
          stream, an attacker could trigger **arbitrary object assignment**
          leading to Remote Code Execution (RCE). This meant that an
          unauthenticated HTTP POST request could theoretically spawn a shell on
          your production VPC.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6 font-heading">
          The Middleware Subrequest Bypass
        </h2>
        <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
          This was perhaps even more dangerous. Next.js uses an internal header,{" "}
          <code>x-middleware-subrequest</code>, to flag when a request has
          already passed through the edge and is being routed internally.
        </p>
        <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
          The bug (CVE-2025-29927) allowed attackers to manually inject this
          header from the public internet. If your middleware logic assumed that
          any request with this header was \"already pre-cleared,\" the attacker
          could bypass your entire authentication layer and access `/admin` or
          `/api/internal` endpoints directly.
        </p>

        <h3 className="text-2xl font-bold mt-10 mb-4 font-heading">
          Remediation for Developers
        </h3>
        <ol className="list-decimal pl-10 space-y-4 mb-8 text-lg text-muted-foreground">
          <li>
            <strong>Upgrade immediately</strong>: Next.js 16.2 and 15.2.3
            contain hard-baked header stripping for internal identifiers at the
            edge.
          </li>
          <li>
            <strong>Defense in Depth</strong>: Never trust the `middleware.ts`
            as your only gatekeeper. Always implement{" "}
            <code>verifySession()</code> inside your Server Actions or
            individual Page layouts.
          </li>
          <li>
            <strong>Content Security Policy</strong>: Use a strict CSP that
            prevents unauthorized data-injection into the Flight stream.
          </li>
        </ol>
      </>
    ),
  },
  {
    slug: "postgresql-performance-optimization-2026",
    image: "/postgres_opt.jpeg",
    date: "June 2, 2025",
    readTime: "20 min read",
    title: "Postgres Optimization: Advanced Performance Tuning for 2026",
    excerpt:
      "Deep diving into PostgreSQL 18's Asynchronous I/O subsystem, B-tree Skip Scans, and the performance impact of UUIDv7 on index fragmentation.",
    category: "Database",
    content: (
      <>
        <div className="p-8 mb-10 rounded-3xl bg-primary/5 border border-primary/20">
          <h2 className="text-2xl font-bold mb-4 text-primary font-heading">
            Architectural Performance
          </h2>
          <p className="text-muted-foreground leading-relaxed font-semibold">
            \"Don't tune queries until you tune the hardware interface.\"
          </p>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6 font-heading">
          The PostgreSQL 18 AIO Subsystem
        </h2>
        <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
          The single biggest advancement in 2026 is the native{" "}
          <strong>Asynchronous I/O (AIO)</strong> subsystem. By leveraging Linux
          `io_uring`, Postgres no longer blocks a worker process while waiting
          for the kernel to return data from the NVMe drive. This increases
          throughput for IO-bound analytical queries by nearly 2.5x without
          changing a single line of SQL.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6 font-heading">
          B-tree Skip Scans & Multi-column Indexes
        </h2>
        <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
          Traditionally, a composite index on `(a, b, c)` was useless if you
          only queried for `b`. In PG 18, <strong>Skip Scans</strong> allow the
          planner to \"jump\" through the index to find values of `b` even if
          the leading column `a` is not in the predicate.
        </p>
        <p className="mb-8 leading-relaxed text-muted-foreground text-lg">
          This allows for \"Thick Indexes\"—you can cover more query patterns
          with fewer total indexes, drastically reducing **Write Amplification**
          and vacuum pressure.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6 font-heading">
          UUIDv7: The End of Index Fragmentation
        </h2>
        <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
          If you use UUIDv4 (random), your B-tree indexes are becoming
          fragmented. This cause massive I/O overhead. In 2026, we've
          standardized on **UUIDv7**, which is time-ordered.
        </p>
        <p className="mb-8 leading-relaxed text-muted-foreground text-lg">
          Because UUIDv7 IDs are monotonic, new entries are always added to the
          \"right\" side of the B-tree, keeping the index clustered and avoiding
          expensive Page Splits. I've seen database sizes drop by 30% simply by
          migrating from random UUIDs to time-ordered ones.
        </p>

        <div className="my-10 p-8 rounded-2xl bg-secondary/10 border border-primary/20">
          <h4 className="text-lg font-bold mb-4 font-heading underline decoration-primary">
            Postgres 18 Tuning Checklist
          </h4>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-primary font-bold">01.</span>
              <span>
                Set `shared_buffers` to 35% of total system RAM for modern NVMe
                rigs.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">02.</span>
              <span>Enable `huge_pages` if your database exceeds 16GB.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">03.</span>
              <span>
                Tun `random_page_cost` to 1.1 (Standard for SSD/NVMe).
              </span>
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    slug: "redis-bullmq-job-queues-guide",
    image: "/redis_bullmq.jpeg",
    date: "April 10, 2025",
    readTime: "16 min read",
    title: "Redis + BullMQ: Architecting Bulletproof Distributed Job Queues",
    excerpt:
      "A professional masterclass in atomic job logic, sandboxed workers, and the hidden mechanics of BullMQ Flows for complex task orchestration.",
    category: "Backend",
    content: (
      <>
        <div className="p-8 mb-10 rounded-3xl bg-primary/5 border border-primary/20">
          <h2 className="text-2xl font-bold mb-4 text-primary font-heading">
            Why we need Job Queues
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            In Node.js, the event loop is your most precious resource. If you
            process a 5MB image or generate a PDF inside an API route, your
            server will stop responding to other users. Job queues like{" "}
            <strong>BullMQ</strong> solve this by offloading work to background
            workers while providing 100% durability.
          </p>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6 font-heading">
          Atomicity and Lua Scripts
        </h2>
        <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
          BullMQ is superior to custom Redis-list implementations because it
          uses **Lua scripts** for every operation. When you move a job from
          `waiting` to `active`, it's an atomic transaction. Even if your worker
          crashes mid-move, the job isn't lost—it stays in Redis until the
          `lockDuration` expires, and then it's automatically retried.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6 font-heading">
          The Power of Sandboxed Workers
        </h2>
        <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
          The biggest mistake developers make is running jobs in the same
          process as the worker. If a job has a memory leak or blocks the CPU,
          it kills the worker.
        </p>
        <p className="mb-8 leading-relaxed text-muted-foreground text-lg">
          The professional solution is <strong>Sandboxed Workers</strong>. By
          providing a path to a separate file (e.g., `worker.js`), BullMQ spawns
          a child process for each job. This isolates the main worker process,
          allowing it to remain responsive and heartbeating with Redis even if
          the job itself is under extreme load.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6 font-heading">
          BullMQ Flows: Orchestrating Trees
        </h2>
        <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
          Imagine a video platform: you need to <strong>Encode</strong>,{" "}
          <strong>Generate Thumbnails</strong>, and then{" "}
          <strong>Notify User</strong>.
        </p>
        <p className="mb-8 leading-relaxed text-muted-foreground text-lg">
          Using `FlowProducer`, you can add a tree of jobs. The \"Notify User\"
          job (parent) remains in a `waiting-children` state and is only
          triggered by Redis once all encoder and thumbnail jobs (children) have
          returned a success state.
        </p>
      </>
    ),
  },
  {
    slug: "postgresql-replication-high-availability",
    image: "/postgres_replica.jpeg",
    date: "May 12, 2025",
    readTime: "15 min read",
    title: "Postgres Replication: Scaling Reads and Ensuring High Availability",
    excerpt:
      "Understanding the trade-offs between Physical and Logical replication, and why Cascading Replication is essential for global read-scalability.",
    category: "Database",
    content: (
      <>
        <h2 className="text-3xl font-bold mt-12 mb-6 font-heading">
          Cascading Replication
        </h2>
        <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
          <strong>Cascading Replication</strong> allows a standby to act as a
          source for other standbys. This protects your Primary's CPU and
          bandwidth, ensuring write performance remains consistent as you scale
          out to dozens of regional nodes.
        </p>
      </>
    ),
  },
  {
    slug: "modernizing-nextjs-seo-geo",
    image: "/nextjs_seo_v.jpeg",
    date: "May 15, 2025",
    readTime: "10 min read",
    title: "Modernizing Next.js for SEO and GEO: A Technical Deep-Dive",
    excerpt:
      "Understand how to optimize your Next.js applications for both traditional search engines and emerging generative AI browsers.",
    category: "React/SEO",
    content: (
      <>
        <div className="p-6 mb-8 rounded-2xl bg-primary/5 border border-primary/20">
          <h2 className="text-xl font-bold mb-2">Executive Summary (TL;DR)</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>
              <strong>SEO</strong> is still crucial, but{" "}
              <strong>GEO (Generative Engine Optimization)</strong> is how you
              win in the age of Perplexity and AI Overviews.
            </li>
            <li>
              Utilize <strong>JSON-LD Structured Data</strong> to help AI models
              understand your content's \"Entity\" relationships.
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    slug: "litellm-supply-chain-attack-teampcp",
    image: "/litellm_attack_v.jpeg",
    date: "March 26, 2026",
    readTime: "12 min read",
    title: "Technical Analysis: The LiteLLM Supply Chain Attack (TeamPCP)",
    excerpt:
      "A forensic look into the recent LiteLLM security incident, the mechanics of the PyPI injection, and how to protect your AI infrastructure.",
    category: "Security",
    content: (
      <>
        <div className="p-6 mb-8 rounded-2xl bg-red-500/5 border border-red-500/20">
          <h2 className="text-xl font-bold mb-2 text-red-500">
            Security Alert
          </h2>
          <p className="text-muted-foreground">
            A critical supply chain vulnerability was discovered in the LiteLLM
            ecosystem targeting cloud credentials.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          The Attack Vector: Dependency Confusion
        </h2>
        <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
          The <strong>TeamPCP</strong> threat group utilized a \"Dependency
          Confusion\" attack by publishing a malicious version of a
          sub-dependency to the public PyPI registry. When developers ran `pip
          install litellm`, the installer prioritized the malicious public
          version over the intended private or cached one.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">
          Payload & Exfiltration
        </h2>
        <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
          The malicious payload was designed to exfiltrate **Environmental
          Variables**—specifically AI API keys (OpenAI, Anthropic) and AWS
          credentials—to a remote command-and-control (C2) server.
        </p>
      </>
    ),
  },
  {
    slug: "agentic-ai-workflows-2025",
    image: "/agent_workflows_v.jpeg",
    date: "February 2, 2025",
    readTime: "11 min read",
    title: "The Blueprint for Agentic AI Workflows in 2025",
    excerpt:
      "Moving beyond simple chat-bots to autonomous agents that use tools, manage state, and collaborate in complex multi-step loops.",
    category: "AI Trends",
    content: (
      <>
        <h2 className="text-2xl font-bold mt-10 mb-4">
          From RAG to Agentic Thinking
        </h2>
        <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
          In 2025, we have moved to **Agentic Workflows**. These are systems
          that don't just \"answer\" but \"act\" using Chain-of-Thought (CoT)
          and external toolsets.
        </p>
      </>
    ),
  },
  {
    slug: "ui-ux-best-practices-2025",
    image: "/ui_ux_v.jpeg",
    date: "June 18, 2025",
    readTime: "7 min read",
    title: "Premium UI/UX: Design Principles for High-Conversion Apps",
    excerpt:
      "Essential UI/UX design principles to create premium digital experiences.",
    category: "Design",
    content: (
      <>
        <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
          A premium design isn't just about \"looking good\"—it's about building
          trust through micro-interactions and accessibility.
        </p>
      </>
    ),
  },
  {
    slug: "building-scalable-apis-nodejs",
    image: "/scalable_api_nodejs_blog_cover_1774187682092.jpeg",
    date: "April 12, 2025",
    readTime: "8 min read",
    title: "Architecting High-Performance APIs with Node.js and TypeScript",
    excerpt:
      "Robust, scalable, and secure backend architectures using modern TypeScript.",
    category: "Development",
    content: (
      <>
        <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
          Scalability starts at the architectural level: modular routing,
          efficient middleware, and proper database indexing.
        </p>
      </>
    ),
  },
];
