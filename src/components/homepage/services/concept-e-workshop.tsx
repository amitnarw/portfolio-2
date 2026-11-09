"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";

interface StationItem {
  id: number;
  num: string;
  name: string;
  tag: string;
  promise: string;
  deliverables: string[];
}

const stations: StationItem[] = [
  {
    id: 0,
    num: "01",
    name: "Full Stack AI Development",
    tag: "AI & Full Stack",
    promise: "Connecting clean, scalable architecture with autonomous LLM reasoning and real-time streaming interfaces.",
    deliverables: [
      "Prompt-to-UI reactive architecture",
      "LLM integration with real guardrails & evals",
      "End-to-end delivery from schema to deployed features",
    ],
  },
  {
    id: 1,
    num: "02",
    name: "Frontend & Creative Motion",
    tag: "Frontend",
    promise: "Precision interfaces with authentic spring physics, fluid micro-interactions, and zero layout jitter.",
    deliverables: [
      "Physics-based spring animation systems",
      "Accessible, responsive semantic markup",
      "Pixel-perfect Next.js & React engineering",
    ],
  },
  {
    id: 2,
    num: "03",
    name: "Backend & Systems Architecture",
    tag: "Backend",
    promise: "Resilient APIs, relational schemas, caching tiers, and server systems built to scale seamlessly.",
    deliverables: [
      "High-throughput REST & GraphQL endpoints",
      "PostgreSQL schemas with Prisma/Drizzle",
      "Redis BullMQ queues & background workers",
    ],
  },
  {
    id: 3,
    num: "04",
    name: "Performance & Sub-Second Tuning",
    tag: "Optimization",
    promise: "Obsessive tuning for sub-second page loads, 0 layout shifts, and perfect 100/100 Core Web Vitals.",
    deliverables: [
      "Sub-second TTFB & Core Web Vitals audit",
      "Zero bundle bloat & modern code-splitting",
      "Automated edge caching & server-side rendering",
    ],
  },
  {
    id: 4,
    num: "05",
    name: "Custom Chrome Extensions",
    tag: "Automation",
    promise: "Building powerful browser tools to automate complex workflows and add unique superpowers.",
    deliverables: [
      "Manifest V3 architecture & security compliance",
      "Automated DOM scraping & form auto-filling",
      "Local storage sync & cross-tab communication",
    ],
  },
];

export default function ConceptEWorkshop() {
  const [stationIdx, setStationIdx] = useState(0);

  const activeStation = stations[stationIdx];

  const handlePrev = () => {
    setStationIdx((prev) => (prev === 0 ? stations.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setStationIdx((prev) => (prev === stations.length - 1 ? 0 : prev + 1));
  };

  // Interactive slider state for Station 3
  const [perfCompare, setPerfCompare] = useState(70);

  // Bezier handle for Station 1
  const [motionTension, setMotionTension] = useState(55);

  return (
    <div className="w-full select-none">
      {/* Top Station Bar Controls */}
      <div className="flex items-center justify-between pb-6">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-bold text-primary">
            STATION 0{stationIdx + 1} // 0{stations.length}
          </span>
          <div className="flex gap-1.5">
            {stations.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setStationIdx(idx)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
                  stationIdx === idx ? "w-8 bg-primary" : "w-2 bg-foreground/20 hover:bg-foreground/40"
                )}
                aria-label={`Jump to station ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrev}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-foreground/15 bg-background text-foreground transition-all hover:border-primary hover:text-primary active:scale-95"
            aria-label="Previous station"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-foreground/15 bg-background text-foreground transition-all hover:border-primary hover:text-primary active:scale-95"
            aria-label="Next station"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Main Full-Width Station Card */}
      <div className="rounded-3xl border border-foreground/10 bg-accent/20 p-6 sm:p-10 backdrop-blur-md shadow-xl dark:bg-card/40 transition-all duration-300">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Workshop Station Narrative (~45%) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center justify-between">
              <span className="font-serif italic text-3xl text-primary font-medium">
                Station {activeStation.num}
              </span>
              <span className="rounded-full border border-foreground/10 bg-background/80 px-3 py-1 text-xs font-mono text-muted-foreground">
                {activeStation.tag}
              </span>
            </div>

            <h3
              className="text-3xl sm:text-5xl font-medium tracking-tight text-foreground leading-[0.95]"
              style={{ fontFamily: "var(--font-bebas-neue)" }}
            >
              {activeStation.name}
            </h3>

            <p className="text-sm leading-relaxed text-muted-foreground">
              {activeStation.promise}
            </p>

            {/* Deliverables Checklist */}
            <div className="space-y-2 pt-2 border-t border-foreground/10">
              <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                Key Deliverables:
              </p>
              {activeStation.deliverables.map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs text-foreground/80">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="mailto:amitnarwal115@gmail.com"
                className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary hover:underline"
              >
                <span>Discuss this capability</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Immersive Station Canvas (~55%) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-foreground/10 bg-background/80 p-5 sm:p-6 min-h-[260px] flex flex-col justify-between shadow-inner">
              <div className="flex items-center justify-between pb-3 border-b border-foreground/10 text-xs font-mono">
                <span className="text-primary font-bold">Interactive Lab Bench</span>
                <span className="text-muted-foreground">Live Simulation</span>
              </div>

              {/* Station 0: Full Scale AI Graph */}
              {stationIdx === 0 && (
                <div className="py-4 space-y-3 font-mono">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-foreground">Prompt → Semantic Router</span>
                    <span className="text-emerald-400">Connected</span>
                  </div>
                  <div className="p-3 rounded-xl bg-accent/40 border border-foreground/10 text-xs space-y-1">
                    <p className="text-primary font-semibold">› Vector Search Pipeline</p>
                    <p className="text-muted-foreground">1.5M embeddings indexed · <span className="text-foreground">18ms cosine similarity</span></p>
                  </div>
                  <div className="flex justify-between text-[11px] text-muted-foreground pt-1">
                    <span>Autonomous Tool Calling</span>
                    <span className="text-primary">100% Type-Safe</span>
                  </div>
                </div>
              )}

              {/* Station 1: Motion Easing Lab */}
              {stationIdx === 1 && (
                <div className="py-4 space-y-4">
                  <div className="flex justify-between items-center text-xs font-mono text-muted-foreground">
                    <span>Spring Tension Lab:</span>
                    <span className="text-primary font-bold">{motionTension} N/m</span>
                  </div>
                  <div className="relative h-16 flex items-center justify-center">
                    <div
                      style={{
                        transform: `scale(${0.8 + motionTension / 100})`,
                      }}
                      className="w-12 h-12 rounded-xl border-2 border-primary bg-primary/20 flex items-center justify-center text-xs font-mono text-primary font-bold transition-all duration-300"
                    >
                      60FPS
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono text-muted-foreground">Tension:</span>
                    <input
                      type="range"
                      min="30"
                      max="100"
                      value={motionTension}
                      onChange={(e) => setMotionTension(Number(e.target.value))}
                      className="w-full accent-primary cursor-pointer h-1.5"
                    />
                  </div>
                </div>
              )}

              {/* Station 2: API Endpoints Schema */}
              {stationIdx === 2 && (
                <div className="py-4 space-y-2 font-mono text-xs">
                  <div className="flex justify-between items-center p-2 rounded-lg bg-accent/40 border border-foreground/10">
                    <span className="text-emerald-400 font-bold">GET</span>
                    <span className="text-foreground">/api/v1/telemetry/stream</span>
                    <span className="text-primary text-[10px]">12ms</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg bg-accent/40 border border-foreground/10">
                    <span className="text-primary font-bold">POST</span>
                    <span className="text-foreground">/api/v1/auth/session</span>
                    <span className="text-primary text-[10px]">24ms</span>
                  </div>
                  <div className="flex justify-between text-[10px] text-muted-foreground pt-1">
                    <span>PostgreSQL Replica Pool</span>
                    <span className="text-emerald-400">Healthy (0.01% err)</span>
                  </div>
                </div>
              )}

              {/* Station 3: Before / After Slider */}
              {stationIdx === 3 && (
                <div className="py-4 space-y-3 font-mono">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Raw Web: 3.8s</span>
                    <span className="text-emerald-400 font-bold">Tuned: 0.4s LCP</span>
                  </div>
                  <div className="relative h-4 w-full rounded-full bg-foreground/10 overflow-hidden">
                    <div
                      style={{ width: `${perfCompare}%` }}
                      className="h-full bg-primary rounded-full transition-all"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] text-muted-foreground">Optimization:</span>
                    <input
                      type="range"
                      min="20"
                      max="100"
                      value={perfCompare}
                      onChange={(e) => setPerfCompare(Number(e.target.value))}
                      className="w-full accent-primary cursor-pointer h-1.5"
                    />
                    <span className="text-xs font-bold text-primary">{perfCompare}%</span>
                  </div>
                </div>
              )}

              {/* Station 4: Browser Automation Script */}
              {stationIdx === 4 && (
                <div className="py-4 space-y-2 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-accent/40 border border-foreground/10 space-y-1">
                    <p className="text-primary text-[11px]">› manifest.json [v3 compliance]</p>
                    <p className="text-foreground text-[11px]">chrome.action.onClicked.addListener()</p>
                    <p className="text-emerald-400 text-[10px]">✓ Background service worker registered</p>
                  </div>
                  <div className="flex justify-between text-[10px] text-muted-foreground pt-1">
                    <span>DOM Query Selectors</span>
                    <span className="text-primary">Automated</span>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between pt-2 border-t border-foreground/10 text-[10px] font-mono text-muted-foreground">
                <span>Direct Hands-On Execution</span>
                <span className="text-primary font-bold">READY TO DEPLOY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

