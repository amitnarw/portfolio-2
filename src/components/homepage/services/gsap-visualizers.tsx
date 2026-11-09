"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Sparkles, Play, RefreshCw, Zap, Terminal, CheckCircle } from "lucide-react";

/* -------------------------------------------------------------------------- */
/* 1. Full Stack AI: Neural Node Pipeline Visualizer                           */
/* -------------------------------------------------------------------------- */
export function AiPipelineVisualizer() {
  const [pulse, setPulse] = useState(0);
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((s) => (s >= 3 ? 1 : s + 1));
      setPulse((p) => p + 1);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-foreground/10 bg-[#0B0B0E] p-4 text-white shadow-inner select-none">
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,217,118,0.3) 1px, transparent 0)",
          backgroundSize: "16px 16px",
        }}
      />

      <div className="relative z-10 flex items-center justify-between pb-3 border-b border-white/10 text-[11px] font-mono text-zinc-400">
        <span className="flex items-center gap-1.5 text-primary">
          <Sparkles className="h-3 w-3 animate-spin" style={{ animationDuration: "6s" }} />
          AI Neural Pipeline
        </span>
        <span className="text-[10px] text-zinc-500 font-mono">Stream Active</span>
      </div>

      {/* Pipeline Stages */}
      <div className="relative z-10 py-5 flex items-center justify-between gap-2 sm:gap-4">
        {/* Step 1 */}
        <div
          onClick={() => setActiveStep(1)}
          className={cn(
            "cursor-pointer flex-1 rounded-xl p-3 border transition-all duration-300 text-center",
            activeStep === 1
              ? "border-primary bg-primary/15 shadow-[0_0_20px_rgba(255,217,118,0.25)] scale-102"
              : "border-white/10 bg-white/5 opacity-60 hover:opacity-100"
          )}
        >
          <div className="text-[10px] font-mono uppercase text-zinc-400">Input</div>
          <div className="text-xs sm:text-sm font-semibold text-white mt-0.5">Prompt & Context</div>
        </div>

        {/* Animated Connector Line */}
        <div className="relative w-6 sm:w-12 h-[2px] bg-white/10 shrink-0 overflow-hidden">
          <div
            className="absolute inset-y-0 w-6 bg-primary blur-[1px] animate-slide-stream"
          />
        </div>

        {/* Step 2 */}
        <div
          onClick={() => setActiveStep(2)}
          className={cn(
            "cursor-pointer flex-1 rounded-xl p-3 border transition-all duration-300 text-center",
            activeStep === 2
              ? "border-primary bg-primary/15 shadow-[0_0_20px_rgba(255,217,118,0.25)] scale-102"
              : "border-white/10 bg-white/5 opacity-60 hover:opacity-100"
          )}
        >
          <div className="text-[10px] font-mono uppercase text-primary">Model</div>
          <div className="text-xs sm:text-sm font-semibold text-white mt-0.5">LLM & Agents</div>
        </div>

        {/* Animated Connector Line */}
        <div className="relative w-6 sm:w-12 h-[2px] bg-white/10 shrink-0 overflow-hidden">
          <div
            className="absolute inset-y-0 w-6 bg-primary blur-[1px] animate-slide-stream [animation-delay:0.5s]"
          />
        </div>

        {/* Step 3 */}
        <div
          onClick={() => setActiveStep(3)}
          className={cn(
            "cursor-pointer flex-1 rounded-xl p-3 border transition-all duration-300 text-center",
            activeStep === 3
              ? "border-primary bg-primary/15 shadow-[0_0_20px_rgba(255,217,118,0.25)] scale-102"
              : "border-white/10 bg-white/5 opacity-60 hover:opacity-100"
          )}
        >
          <div className="text-[10px] font-mono uppercase text-zinc-400">Ship</div>
          <div className="text-xs sm:text-sm font-semibold text-white mt-0.5">Full Stack UI</div>
        </div>
      </div>

      {/* Simulated Live Output Stream */}
      <div className="relative z-10 rounded-lg bg-black/60 p-2.5 font-mono text-[11px] text-zinc-300 border border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-2 truncate">
          <span className="text-primary font-bold">›</span>
          <span className="truncate">
            {activeStep === 1 && "Ingesting user intent & dynamic document vector state..."}
            {activeStep === 2 && "Synthesizing response with automated tool calling & reasoning..."}
            {activeStep === 3 && "Rendered in streaming reactive UI in 140ms with zero jank."}
          </span>
        </div>
        <span className="hidden sm:inline-block shrink-0 rounded bg-primary/20 px-1.5 py-0.5 text-[9px] font-bold text-primary">
          LIVE
        </span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 2. Frontend Engineering: Kinetic Motion & Physics Playground                */
/* -------------------------------------------------------------------------- */
export function KineticMotionVisualizer() {
  const [shape, setShape] = useState<"cube" | "pill" | "sphere">("cube");
  const [rotate, setRotate] = useState(0);

  const handleMorph = () => {
    setRotate((r) => r + 90);
    setShape((s) => (s === "cube" ? "pill" : s === "pill" ? "sphere" : "cube"));
  };

  return (
    <div className="relative w-full h-[160px] overflow-hidden rounded-2xl border border-foreground/10 bg-[#0B0B0E] p-4 text-white shadow-inner flex flex-col justify-between select-none">
      <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
        <span className="text-primary font-medium">Kinetic Motion Engine</span>
        <button
          type="button"
          onClick={handleMorph}
          className="cursor-pointer flex items-center gap-1 rounded-md bg-white/10 px-2 py-0.5 text-[10px] text-white hover:bg-primary hover:text-black transition-colors"
        >
          <RefreshCw className="h-2.5 w-2.5" />
          Morph Shape
        </button>
      </div>

      {/* Animated Center Geometry */}
      <div className="flex items-center justify-center py-2">
        <div
          onClick={handleMorph}
          className="cursor-pointer relative flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group"
          style={{
            transform: `rotate(${rotate}deg)`,
          }}
        >
          {/* Ambient Glow */}
          <div className="absolute inset-0 rounded-full bg-primary/25 blur-xl group-hover:bg-primary/40 transition-colors" />

          {/* Morphing Body */}
          <div
            className={cn(
              "relative z-10 border-2 border-primary bg-gradient-to-tr from-primary/30 via-white/10 to-primary/50 shadow-[0_0_25px_rgba(255,217,118,0.35)] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex items-center justify-center text-xs font-mono font-bold text-primary",
              shape === "cube" && "w-16 h-16 rounded-2xl",
              shape === "pill" && "w-28 h-12 rounded-full",
              shape === "sphere" && "w-16 h-16 rounded-full"
            )}
          >
            <span style={{ transform: `rotate(-${rotate}deg)` }} className="transition-transform duration-700">
              60 FPS
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
        <span>Spring Easing: cubic-bezier(0.34, 1.56)</span>
        <span className="text-primary font-semibold">Zero Jitter</span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 3. Backend & API: High-Throughput Stream Highway                           */
/* -------------------------------------------------------------------------- */
export function ApiHighwayVisualizer() {
  const [burstCount, setBurstCount] = useState(1280);
  const [isBursting, setIsBursting] = useState(false);

  const handleBurst = () => {
    setIsBursting(true);
    setBurstCount((b) => b + 140);
    setTimeout(() => setIsBursting(false), 800);
  };

  return (
    <div className="relative w-full h-[160px] overflow-hidden rounded-2xl border border-foreground/10 bg-[#0B0B0E] p-4 text-white shadow-inner flex flex-col justify-between select-none">
      <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
        <span className="text-primary font-medium">API Throughput</span>
        <button
          type="button"
          onClick={handleBurst}
          className="cursor-pointer flex items-center gap-1 rounded-md bg-white/10 px-2 py-0.5 text-[10px] text-white hover:bg-primary hover:text-black transition-colors"
        >
          <Zap className="h-2.5 w-2.5 fill-current" />
          Test Burst
        </button>
      </div>

      {/* Traffic Highway */}
      <div className="relative py-2">
        <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 pb-1">
          <span>Client (Edge)</span>
          <span className="text-primary">Latency 28ms</span>
          <span>Postgres DB</span>
        </div>

        {/* Cable */}
        <div className="relative h-2 w-full rounded-full bg-white/10 overflow-hidden">
          {/* Animated packets */}
          <div
            className={cn(
              "absolute inset-y-0 rounded-full bg-primary blur-[1px]",
              isBursting
                ? "w-16 animate-slide-stream [animation-duration:0.4s]"
                : "w-10 animate-slide-stream [animation-duration:1.1s]"
            )}
          />
        </div>
      </div>

      {/* Counter */}
      <div className="flex items-center justify-between text-[11px] font-mono">
        <span className="text-zinc-400">Throughput Metric:</span>
        <span className="font-bold text-primary">{burstCount.toLocaleString()} req/s</span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 4. Performance & Optimization: Interactive 120 FPS Speedometer              */
/* -------------------------------------------------------------------------- */
export function PerformanceDialVisualizer() {
  const [speed, setSpeed] = useState<number>(100);

  return (
    <div className="relative w-full h-[160px] overflow-hidden rounded-2xl border border-foreground/10 bg-[#0B0B0E] p-4 text-white shadow-inner flex flex-col justify-between select-none">
      <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
        <span className="text-primary font-medium">Lighthouse Score</span>
        <span className="rounded bg-emerald-500/20 px-1.5 py-0.2 text-[10px] font-bold text-emerald-400">
          PERFECT 100
        </span>
      </div>

      {/* Speedometer Gauges */}
      <div className="flex items-center justify-around py-1">
        <div className="text-center">
          <div className="text-2xl font-mono font-bold text-primary tracking-tight">
            {speed}
            <span className="text-xs text-zinc-400 ml-0.5">/100</span>
          </div>
          <div className="text-[10px] font-mono text-zinc-400 uppercase">Speed Index</div>
        </div>

        <div className="h-8 w-[1px] bg-white/10" />

        <div className="text-center">
          <div className="text-2xl font-mono font-bold text-emerald-400 tracking-tight">
            0.4<span className="text-xs ml-0.5">s</span>
          </div>
          <div className="text-[10px] font-mono text-zinc-400 uppercase">First Paint</div>
        </div>

        <div className="h-8 w-[1px] bg-white/10" />

        <div className="text-center">
          <div className="text-2xl font-mono font-bold text-primary tracking-tight">
            0.00
          </div>
          <div className="text-[10px] font-mono text-zinc-400 uppercase">Zero CLS</div>
        </div>
      </div>

      {/* Interactive Range Slider */}
      <div className="flex items-center gap-3">
        <span className="text-[10px] font-mono text-zinc-400 shrink-0">Tune:</span>
        <input
          type="range"
          min="80"
          max="100"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          className="w-full accent-primary cursor-pointer h-1.5 bg-white/10 rounded-lg"
        />
        <span className="text-[10px] font-mono text-primary font-bold">{speed}%</span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 5. Custom Chrome Extensions: Browser Automation Sandbox                    */
/* -------------------------------------------------------------------------- */
export function ExtensionSandboxVisualizer() {
  const [activeTask, setActiveTask] = useState<string>("Ready");
  const [isRunning, setIsRunning] = useState(false);

  const runAutomation = (task: string) => {
    setIsRunning(true);
    setActiveTask(task);
    setTimeout(() => {
      setActiveTask(`${task} ✓ Done (42ms)`);
      setIsRunning(false);
    }, 700);
  };

  return (
    <div className="relative w-full h-[160px] overflow-hidden rounded-2xl border border-foreground/10 bg-[#0B0B0E] p-4 text-white shadow-inner flex flex-col justify-between select-none">
      <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
        <span className="text-primary font-medium">Browser Sandbox</span>
        <span className="text-[10px] text-zinc-500 font-mono">Manifest V3</span>
      </div>

      {/* Extension Toolbar Action Pills */}
      <div className="flex flex-wrap gap-2 py-1">
        <button
          type="button"
          onClick={() => runAutomation("Auto-Fill Form")}
          disabled={isRunning}
          className="cursor-pointer rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-mono text-zinc-300 transition-all hover:border-primary hover:bg-primary/20 hover:text-white active:scale-95"
        >
          ⚡ Auto-Fill
        </button>
        <button
          type="button"
          onClick={() => runAutomation("DOM Scraper")}
          disabled={isRunning}
          className="cursor-pointer rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-mono text-zinc-300 transition-all hover:border-primary hover:bg-primary/20 hover:text-white active:scale-95"
        >
          🔍 DOM Scraper
        </button>
        <button
          type="button"
          onClick={() => runAutomation("Workflow Hook")}
          disabled={isRunning}
          className="cursor-pointer rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-mono text-zinc-300 transition-all hover:border-primary hover:bg-primary/20 hover:text-white active:scale-95"
        >
          🤖 Auto-Bot
        </button>
      </div>

      {/* Terminal Bar */}
      <div className="rounded-lg bg-black/60 p-2 font-mono text-[10px] text-zinc-300 border border-white/5 flex items-center justify-between truncate">
        <span className="truncate">
          <span className="text-primary font-bold">›</span> {activeTask}
        </span>
        {isRunning && <span className="h-2 w-2 rounded-full bg-primary animate-ping" />}
      </div>
    </div>
  );
}
