"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Terminal,
  Zap,
  Cpu,
  Layers,
  Globe,
  Play,
  RotateCcw,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function ConceptBento() {
  // Card 1 interactive state
  const [activeTab, setActiveTab] = useState<"ui" | "code">("ui");
  const [simulatedCount, setSimulatedCount] = useState(42);

  // Card 2 interactive terminal state
  const [isRunningAgent, setIsRunningAgent] = useState(false);
  const [agentLogs, setAgentLogs] = useState<string[]>([
    "Ready. Click 'Run Task' to trigger simulated agent.",
  ]);

  const handleRunAgent = () => {
    setIsRunningAgent(true);
    setAgentLogs(["Connecting to Model & MCP Server..."]);
    setTimeout(() => {
      setAgentLogs((prev) => [...prev, "Spawning headless Chromium browser..."]);
    }, 400);
    setTimeout(() => {
      setAgentLogs((prev) => [
        ...prev,
        "Automated workflow completed in 142ms.",
      ]);
      setIsRunningAgent(false);
    }, 900);
  };

  // Card 5 extension switch state
  const [extAutoFill, setExtAutoFill] = useState(true);
  const [extScraper, setExtScraper] = useState(true);

  return (
    <div className="w-full">
      <div className="grid grid-cols-12 gap-5">
        {/* Card 1: Full Stack Product Engineering (Large 8 col) */}
        <div className="col-span-12 lg:col-span-8 rounded-3xl border border-foreground/10 bg-gradient-to-b from-accent/30 to-background p-6 sm:p-8 flex flex-col justify-between transition-all hover:border-primary/40 dark:from-card/60 dark:to-card/20 shadow-sm">
          <div>
            <div className="flex items-center justify-between pb-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                <Layers className="h-3.5 w-3.5" />
                Product Engineering
              </span>

              {/* Mini Segmented Switcher */}
              <div className="flex items-center rounded-lg border border-foreground/10 bg-background/80 p-0.5 text-xs">
                <button
                  type="button"
                  onClick={() => setActiveTab("ui")}
                  className={cn(
                    "rounded-md px-2.5 py-1 transition-all cursor-pointer",
                    activeTab === "ui"
                      ? "bg-primary text-primary-foreground font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  Interactive UI
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("code")}
                  className={cn(
                    "rounded-md px-2.5 py-1 transition-all cursor-pointer",
                    activeTab === "code"
                      ? "bg-primary text-primary-foreground font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  Architecture
                </button>
              </div>
            </div>

            <h4
              className="text-2xl sm:text-4xl font-medium tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-bebas-neue)" }}
            >
              From Product Concept to High-Velocity Code
            </h4>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-xl">
              Turn ideas into resilient full-stack applications with Next.js, TypeScript, and clean modular codebases that your team can scale without rewrites.
            </p>
          </div>

          {/* Interactive Widget Area */}
          <div className="my-6 rounded-2xl border border-foreground/10 bg-background/90 p-4 sm:p-5 backdrop-blur-md">
            {activeTab === "ui" ? (
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                    Reactive State Simulation
                  </p>
                  <p className="text-lg font-semibold text-foreground mt-0.5">
                    Metric Counter:{" "}
                    <span className="text-primary font-mono font-bold">
                      {simulatedCount} units
                    </span>
                  </p>
                  <p className="text-xs text-muted-foreground">
                    State persisted · Zero re-render leak
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSimulatedCount((c) => c + 1)}
                    className="cursor-pointer rounded-lg bg-primary/20 px-3 py-1.5 text-xs font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground active:scale-95"
                  >
                    + Increment
                  </button>
                  <button
                    type="button"
                    onClick={() => setSimulatedCount(42)}
                    className="cursor-pointer rounded-lg border border-foreground/10 px-2 py-1.5 text-xs text-muted-foreground hover:text-foreground"
                    title="Reset"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="font-mono text-xs text-muted-foreground leading-relaxed overflow-x-auto">
                <span className="text-primary font-semibold">export type</span>{" "}
                ProductSystem = &#123;
                <br />
                &nbsp;&nbsp;framework:{" "}
                <span className="text-emerald-500">&quot;Next.js 16 App Router&quot;</span>;
                <br />
                &nbsp;&nbsp;performance:{" "}
                <span className="text-orange-400">&quot;Sub-second LCP&quot;</span>;
                <br />
                &nbsp;&nbsp;typeSafety:{" "}
                <span className="text-sky-400">true</span>;
                <br />
                &#125;;
              </div>
            )}
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
              <span className="rounded-md border border-foreground/10 px-2.5 py-1">
                Next.js
              </span>
              <span className="rounded-md border border-foreground/10 px-2.5 py-1">
                TypeScript
              </span>
              <span className="rounded-md border border-foreground/10 px-2.5 py-1">
                Tailwind CSS
              </span>
              <span className="rounded-md border border-foreground/10 px-2.5 py-1">
                Design Systems
              </span>
            </div>
            <Link
              href="/work/exaldia-ai-seo-tools"
              className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
            >
              <span>Exaldia Case Study</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Card 2: Applied AI & Autonomous Systems (4 col) */}
        <div className="col-span-12 lg:col-span-4 rounded-3xl border border-foreground/10 bg-gradient-to-b from-accent/30 to-background p-6 sm:p-8 flex flex-col justify-between transition-all hover:border-primary/40 dark:from-card/60 dark:to-card/20 shadow-sm">
          <div>
            <div className="flex items-center justify-between pb-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                <Cpu className="h-3.5 w-3.5" />
                AI Systems & Agents
              </span>
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>

            <h4
              className="text-2xl sm:text-3xl font-medium tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-bebas-neue)" }}
            >
              Autonomous Agents & LLMs
            </h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Production AI tooling, RAG, tool calling, and MCP server automation that do real work.
            </p>
          </div>

          {/* Interactive Mini Terminal */}
          <div className="my-5 rounded-xl border border-foreground/10 bg-[#0B0B0C] p-3 text-xs font-mono text-zinc-300">
            <div className="flex items-center justify-between pb-2 border-b border-zinc-800 text-[10px] text-zinc-400">
              <span className="flex items-center gap-1.5">
                <Terminal className="h-3 w-3 text-primary" />
                agent-worker.mcp
              </span>
              <button
                type="button"
                onClick={handleRunAgent}
                disabled={isRunningAgent}
                className="cursor-pointer inline-flex items-center gap-1 rounded bg-primary/20 px-2 py-0.5 text-primary hover:bg-primary hover:text-black transition-colors"
              >
                <Play className="h-2.5 w-2.5 fill-current" />
                Run Task
              </button>
            </div>
            <div className="mt-2 min-h-[58px] space-y-1">
              {agentLogs.map((log, i) => (
                <div key={i} className="text-[11px] text-zinc-300 flex items-start gap-1">
                  <span className="text-primary">›</span> {log}
                </div>
              ))}
            </div>
          </div>

          <Link
            href="/work/web-mcp"
            className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
          >
            <span>Web MCP (Open Source on npm)</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Card 3: Performance & Core Web Vitals (4 col) */}
        <div className="col-span-12 sm:col-span-6 lg:col-span-4 rounded-3xl border border-foreground/10 bg-accent/20 p-6 flex flex-col justify-between transition-all hover:border-primary/40 dark:bg-card/40">
          <div>
            <div className="flex items-center justify-between pb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-foreground/10 bg-background px-3 py-1 text-xs font-medium text-foreground">
                <Zap className="h-3.5 w-3.5 text-primary" />
                Core Web Vitals
              </span>
              <span className="font-mono text-xs font-bold text-emerald-500">
                100/100
              </span>
            </div>

            <h4
              className="text-2xl sm:text-3xl font-medium tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-bebas-neue)" }}
            >
              Performance Tuning
            </h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Obsessive optimization. Sub-second TTFB, 0 layout shifts, and SEO architecture built for top rankings.
            </p>
          </div>

          {/* Metric Badges */}
          <div className="my-5 grid grid-cols-3 gap-2">
            <div className="rounded-xl border border-foreground/10 bg-background/70 p-2.5 text-center">
              <p className="font-mono text-xs font-bold text-emerald-500">0.6s</p>
              <p className="text-[10px] text-muted-foreground uppercase">LCP</p>
            </div>
            <div className="rounded-xl border border-foreground/10 bg-background/70 p-2.5 text-center">
              <p className="font-mono text-xs font-bold text-emerald-500">0.00</p>
              <p className="text-[10px] text-muted-foreground uppercase">CLS</p>
            </div>
            <div className="rounded-xl border border-foreground/10 bg-background/70 p-2.5 text-center">
              <p className="font-mono text-xs font-bold text-emerald-500">12ms</p>
              <p className="text-[10px] text-muted-foreground uppercase">FID</p>
            </div>
          </div>

          <p className="text-xs text-muted-foreground">
            Zero bloat guarantee on every client build.
          </p>
        </div>

        {/* Card 4: Backend & Cloud Infrastructure (4 col) */}
        <div className="col-span-12 sm:col-span-6 lg:col-span-4 rounded-3xl border border-foreground/10 bg-accent/20 p-6 flex flex-col justify-between transition-all hover:border-primary/40 dark:bg-card/40">
          <div>
            <div className="flex items-center justify-between pb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-foreground/10 bg-background px-3 py-1 text-xs font-medium text-foreground">
                <Globe className="h-3.5 w-3.5 text-primary" />
                Cloud Systems
              </span>
              <span className="flex items-center gap-1 font-mono text-[11px] text-emerald-500">
                <Check className="h-3 w-3" /> 99.9% Uptime
              </span>
            </div>

            <h4
              className="text-2xl sm:text-3xl font-medium tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-bebas-neue)" }}
            >
              Backend & Scalable APIs
            </h4>
            <p className="mt-1 text-sm text-muted-foreground">
              PostgreSQL schemas, queues, auth, and cloud infrastructure that hold under real production load.
            </p>
          </div>

          <div className="my-5 rounded-xl border border-foreground/10 bg-background/60 p-3 space-y-2 text-xs">
            <div className="flex justify-between items-center text-muted-foreground">
              <span>Database</span>
              <span className="font-mono text-foreground font-semibold">PostgreSQL + Prisma</span>
            </div>
            <div className="flex justify-between items-center text-muted-foreground">
              <span>Job Queues</span>
              <span className="font-mono text-foreground font-semibold">Redis BullMQ</span>
            </div>
            <div className="flex justify-between items-center text-muted-foreground">
              <span>Global Latency</span>
              <span className="font-mono text-emerald-500 font-semibold">&lt; 45ms</span>
            </div>
          </div>

          <Link
            href="/work/intesters"
            className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
          >
            <span>InTesters Case Study</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Card 5: Custom Extensions & Tooling (4 col) */}
        <div className="col-span-12 lg:col-span-4 rounded-3xl border border-foreground/10 bg-accent/20 p-6 flex flex-col justify-between transition-all hover:border-primary/40 dark:bg-card/40">
          <div>
            <div className="flex items-center justify-between pb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-foreground/10 bg-background px-3 py-1 text-xs font-medium text-foreground">
                <Globe className="h-3.5 w-3.5 text-primary" />
                Browser Extensions
              </span>
              <span className="font-mono text-xs text-primary">Manifest V3</span>
            </div>

            <h4
              className="text-2xl sm:text-3xl font-medium tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-bebas-neue)" }}
            >
              Custom Browser Tooling
            </h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Automate complex workflows, scrape dynamic data, and build web productivity superpowers.
            </p>
          </div>

          {/* Interactive Extension Toolbar Mockup */}
          <div className="my-5 rounded-xl border border-foreground/10 bg-background/70 p-3 space-y-2.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-foreground font-medium">Smart Auto-fill Extension</span>
              <button
                type="button"
                onClick={() => setExtAutoFill(!extAutoFill)}
                className={cn(
                  "cursor-pointer rounded-full px-2 py-0.5 text-[10px] font-bold transition-all",
                  extAutoFill ? "bg-emerald-500/20 text-emerald-500" : "bg-muted text-muted-foreground"
                )}
              >
                {extAutoFill ? "ACTIVE" : "OFF"}
              </button>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-foreground font-medium">DOM Data Harvester</span>
              <button
                type="button"
                onClick={() => setExtScraper(!extScraper)}
                className={cn(
                  "cursor-pointer rounded-full px-2 py-0.5 text-[10px] font-bold transition-all",
                  extScraper ? "bg-emerald-500/20 text-emerald-500" : "bg-muted text-muted-foreground"
                )}
              >
                {extScraper ? "ACTIVE" : "OFF"}
              </button>
            </div>
          </div>

          <p className="text-xs text-muted-foreground">
            Chrome Web Store verified & enterprise ready.
          </p>
        </div>
      </div>
    </div>
  );
}

