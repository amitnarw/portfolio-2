"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Activity, Gauge, BarChart2, Zap, Play, CheckCircle2 } from "lucide-react";

export default function ConceptBMissionControl() {
  const [activePanel, setActivePanel] = useState<number | null>(null);

  // Panel 1: Neural Waveform state
  const [waveOffset, setWaveOffset] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setWaveOffset((p) => (p + 1) % 40), 50);
    return () => clearInterval(id);
  }, []);

  // Panel 2: Tachometer FPS needle state
  const [fpsNeedle, setFpsNeedle] = useState(60);

  // Panel 3: Waterfall bar heights
  const [bars, setBars] = useState([25, 45, 80, 55, 30]);
  const handleReplayWaterfall = () => {
    setBars([10, 15, 20, 15, 10]);
    setTimeout(() => setBars([28, 50, 95, 60, 35]), 300);
  };

  // Panel 4: Speed dial score
  const [gaugeScore, setGaugeScore] = useState(100);
  const handleJitterGauge = () => {
    setGaugeScore(88);
    setTimeout(() => setGaugeScore(100), 400);
  };

  // Panel 5: Task pipeline state
  const [taskStatus, setTaskStatus] = useState<"idle" | "running" | "done">("idle");
  const handleRunTask = () => {
    setTaskStatus("running");
    setTimeout(() => setTaskStatus("done"), 600);
    setTimeout(() => setTaskStatus("idle"), 2200);
  };

  const panels = [
    {
      id: 0,
      label: "AI Neural Engine",
      tag: "LLM PIPELINE",
      title: "Full Stack AI Development",
      deliverable: "Autonomous tool calling & streaming UI",
    },
    {
      id: 1,
      label: "Motion Physics",
      tag: "60 FPS CORE",
      title: "Frontend & Creative Motion",
      deliverable: "Physics-based micro-interactions & zero jank",
    },
    {
      id: 2,
      label: "API Throughput",
      tag: "LATENCY <25MS",
      title: "Backend & Systems Architecture",
      deliverable: "PostgreSQL, Redis caching & resilient endpoints",
    },
    {
      id: 3,
      label: "Core Web Vitals",
      tag: "PERFECT 100",
      title: "Performance & Sub-Second Tuning",
      deliverable: "Sub-second TTFB, zero shifts, maximum SEO",
    },
    {
      id: 4,
      label: "Browser Automation",
      tag: "MANIFEST V3",
      title: "Custom Chrome Extensions",
      deliverable: "Automated scraping & workflow superpowers",
    },
  ];

  return (
    <div className="w-full">
      {/* Top Telemetry Status Header */}
      <div className="flex items-center justify-between pb-4 border-b border-foreground/10 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-foreground font-semibold">MISSION CONTROL HUD</span>
          <span className="text-muted-foreground hidden sm:inline">, Live Telemetry Bay</span>
        </div>
        <div className="text-primary font-semibold">
          {activePanel !== null ? `CHANNEL 0${activePanel + 1} ENGAGED` : "ALL CHANNELS ACTIVE"}
        </div>
      </div>

      {/* 5 Vertical Telemetry Bays */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-px border border-foreground/10 bg-foreground/10 rounded-2xl overflow-hidden mt-4">
        {/* Panel 1: AI Oscilloscope */}
        <div
          onMouseEnter={() => setActivePanel(0)}
          onMouseLeave={() => setActivePanel(null)}
          className={cn(
            "p-5 bg-background flex flex-col justify-between min-h-[300px] transition-all duration-300",
            activePanel !== null && activePanel !== 0 && "opacity-45"
          )}
        >
          <div>
            <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground pb-2 border-b border-foreground/5">
              <span>01 // NEURAL</span>
              <Activity className="h-3.5 w-3.5 text-primary" />
            </div>
            <p className="mt-2 text-xs font-mono uppercase tracking-wider text-primary">
              AI Inference
            </p>
            <h4
              className="text-xl font-medium tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-bebas-neue)" }}
            >
              Full Stack AI
            </h4>
          </div>

          {/* Oscilloscope Waveform Canvas */}
          <div className="my-4 rounded-xl border border-foreground/10 bg-accent/20 p-2.5 h-[110px] flex flex-col justify-between overflow-hidden">
            <svg viewBox="0 0 100 40" className="w-full h-14">
              <path
                d={`M 0 20 Q 20 ${activePanel === 0 ? "5" : "12"} 40 20 T 80 20 T 120 20`}
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="2"
                strokeDasharray="4 2"
                style={{ transform: `translateX(-${waveOffset}px)` }}
                className="transition-transform duration-75"
              />
            </svg>
            <div className="flex items-center justify-between text-[9px] font-mono text-muted-foreground">
              <span>FREQ: 1.4GHz</span>
              <span className="text-primary font-bold">142ms</span>
            </div>
          </div>

          <p className="text-[11px] text-muted-foreground leading-relaxed">
            Autonomous tool calling, RAG pipelines, and full-stack model integration.
          </p>
        </div>

        {/* Panel 2: FPS Tachometer */}
        <div
          onMouseEnter={() => setActivePanel(1)}
          onMouseLeave={() => setActivePanel(null)}
          className={cn(
            "p-5 bg-background flex flex-col justify-between min-h-[300px] transition-all duration-300",
            activePanel !== null && activePanel !== 1 && "opacity-45"
          )}
        >
          <div>
            <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground pb-2 border-b border-foreground/5">
              <span>02 // MOTION</span>
              <Gauge className="h-3.5 w-3.5 text-primary" />
            </div>
            <p className="mt-2 text-xs font-mono uppercase tracking-wider text-primary">
              Kinetic Engine
            </p>
            <h4
              className="text-xl font-medium tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-bebas-neue)" }}
            >
              Frontend Motion
            </h4>
          </div>

          {/* Tachometer Arc */}
          <div className="my-4 rounded-xl border border-foreground/10 bg-accent/20 p-2.5 h-[110px] flex flex-col items-center justify-center">
            <div className="text-center">
              <span className="font-mono text-3xl font-bold text-foreground">
                {activePanel === 1 ? "60" : "59.8"}
              </span>
              <span className="text-[10px] font-mono text-primary ml-1">FPS</span>
            </div>
            <div className="w-24 h-1.5 rounded-full bg-foreground/10 mt-2 overflow-hidden">
              <div className="h-full bg-primary rounded-full w-[95%]" />
            </div>
            <span className="text-[9px] font-mono text-muted-foreground mt-1">Zero Jank</span>
          </div>

          <p className="text-[11px] text-muted-foreground leading-relaxed">
            Fluid spring transitions, micro-interactions, and accessible UI engineering.
          </p>
        </div>

        {/* Panel 3: API Waterfall Bars */}
        <div
          onMouseEnter={() => setActivePanel(2)}
          onMouseLeave={() => setActivePanel(null)}
          className={cn(
            "p-5 bg-background flex flex-col justify-between min-h-[300px] transition-all duration-300",
            activePanel !== null && activePanel !== 2 && "opacity-45"
          )}
        >
          <div>
            <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground pb-2 border-b border-foreground/5">
              <span>03 // NETWORK</span>
              <BarChart2 className="h-3.5 w-3.5 text-primary" />
            </div>
            <p className="mt-2 text-xs font-mono uppercase tracking-wider text-primary">
              Throughput
            </p>
            <h4
              className="text-xl font-medium tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-bebas-neue)" }}
            >
              Backend & APIs
            </h4>
          </div>

          {/* Waterfall Columns */}
          <div
            onClick={handleReplayWaterfall}
            className="my-4 rounded-xl border border-foreground/10 bg-accent/20 p-2.5 h-[110px] flex flex-col justify-between cursor-pointer group"
          >
            <div className="flex items-end justify-between h-14 px-1 gap-1">
              {bars.map((b, i) => (
                <div
                  key={i}
                  style={{ height: `${b}%` }}
                  className="w-3 rounded-t bg-primary/70 transition-all duration-500 group-hover:bg-primary"
                />
              ))}
            </div>
            <div className="flex justify-between text-[9px] font-mono text-muted-foreground">
              <span>Click: Re-ping</span>
              <span className="text-primary font-bold">&lt; 24ms</span>
            </div>
          </div>

          <p className="text-[11px] text-muted-foreground leading-relaxed">
            Postgres schemas, Redis queues, and resilient API architectures.
          </p>
        </div>

        {/* Panel 4: Lighthouse Gauge */}
        <div
          onMouseEnter={() => setActivePanel(3)}
          onMouseLeave={() => setActivePanel(null)}
          className={cn(
            "p-5 bg-background flex flex-col justify-between min-h-[300px] transition-all duration-300",
            activePanel !== null && activePanel !== 3 && "opacity-45"
          )}
        >
          <div>
            <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground pb-2 border-b border-foreground/5">
              <span>04 // VITALS</span>
              <Zap className="h-3.5 w-3.5 text-primary" />
            </div>
            <p className="mt-2 text-xs font-mono uppercase tracking-wider text-primary">
              Optimization
            </p>
            <h4
              className="text-xl font-medium tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-bebas-neue)" }}
            >
              Performance
            </h4>
          </div>

          {/* Speed Dial */}
          <div
            onClick={handleJitterGauge}
            className="my-4 rounded-xl border border-foreground/10 bg-accent/20 p-2.5 h-[110px] flex flex-col items-center justify-center cursor-pointer"
          >
            <div className="relative flex flex-col items-center">
              <span className="font-mono text-3xl font-bold text-emerald-400">
                {gaugeScore}
              </span>
              <span className="text-[9px] font-mono uppercase text-muted-foreground">
                Lighthouse Score
              </span>
            </div>
            <span className="text-[9px] font-mono text-primary mt-1">Sub-second LCP</span>
          </div>

          <p className="text-[11px] text-muted-foreground leading-relaxed">
            Zero bundle bloat, perfect Core Web Vitals, and tuned search indexing.
          </p>
        </div>

        {/* Panel 5: Task Queue */}
        <div
          onMouseEnter={() => setActivePanel(4)}
          onMouseLeave={() => setActivePanel(null)}
          className={cn(
            "p-5 bg-background flex flex-col justify-between min-h-[300px] transition-all duration-300",
            activePanel !== null && activePanel !== 4 && "opacity-45"
          )}
        >
          <div>
            <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground pb-2 border-b border-foreground/5">
              <span>05 // WORKFLOW</span>
              <Play className="h-3.5 w-3.5 text-primary" />
            </div>
            <p className="mt-2 text-xs font-mono uppercase tracking-wider text-primary">
              Automation
            </p>
            <h4
              className="text-xl font-medium tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-bebas-neue)" }}
            >
              Chrome Tooling
            </h4>
          </div>

          {/* Queue Runner */}
          <div
            onClick={handleRunTask}
            className="my-4 rounded-xl border border-foreground/10 bg-accent/20 p-2.5 h-[110px] flex flex-col justify-between cursor-pointer"
          >
            <div className="space-y-1.5 text-[9px] font-mono">
              <div className="flex justify-between items-center">
                <span>Task 01: DOM Extract</span>
                <span className="text-emerald-400">DONE</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Task 02: Auto-Fill</span>
                <span className={taskStatus === "running" ? "text-primary animate-pulse" : "text-muted-foreground"}>
                  {taskStatus === "running" ? "RUNNING" : "QUEUED"}
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center text-[9px] font-mono border-t border-foreground/10 pt-1">
              <span>Trigger: Click</span>
              <span className="text-primary font-bold">EXEC</span>
            </div>
          </div>

          <p className="text-[11px] text-muted-foreground leading-relaxed">
            Custom browser extensions to automate complex scraping and workflows.
          </p>
        </div>
      </div>
    </div>
  );
}

