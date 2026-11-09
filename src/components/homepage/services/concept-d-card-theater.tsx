"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, RotateCw, Sparkles, Code2, Cpu, Zap, Globe } from "lucide-react";

interface ServiceCardData {
  id: number;
  num: string;
  name: string;
  tag: string;
  desc: string;
  Icon: any;
  backCanvas: {
    title: string;
    actionLabel: string;
    spec: string;
  };
}

const cardsData: ServiceCardData[] = [
  {
    id: 0,
    num: "01",
    name: "Full Stack AI Development",
    tag: "AI & Full Stack",
    desc: "Autonomous LLM reasoning, RAG vector chains, and streaming UI built for production speed.",
    Icon: Sparkles,
    backCanvas: {
      title: "Interactive AI Node Graph",
      actionLabel: "Autonomous Prompt Routing",
      spec: "142ms inference · 0 jank",
    },
  },
  {
    id: 1,
    num: "02",
    name: "Frontend & Creative Motion",
    tag: "Frontend",
    desc: "Precision interfaces with authentic spring physics, fluid micro-interactions, and zero layout jitter.",
    Icon: Code2,
    backCanvas: {
      title: "Spring Physics Engine",
      actionLabel: "Physics Easing Simulator",
      spec: "60 FPS · cubic-bezier(0.34, 1.56)",
    },
  },
  {
    id: 2,
    num: "03",
    name: "Backend & Systems Architecture",
    tag: "Backend",
    desc: "Resilient APIs, relational schemas, caching tiers, and server systems built to scale seamlessly.",
    Icon: Cpu,
    backCanvas: {
      title: "High Throughput Highway",
      actionLabel: "PostgreSQL & Redis Caching",
      spec: "<24ms edge latency",
    },
  },
  {
    id: 3,
    num: "04",
    name: "Performance & Sub-Second Tuning",
    tag: "Optimization",
    desc: "Every millisecond tuned: sub-second TTFB, zero layout shift, and green Core Web Vitals.",
    Icon: Zap,
    backCanvas: {
      title: "Lighthouse Speedometer",
      actionLabel: "Core Web Vitals Dial",
      spec: "100/100 perfect score",
    },
  },
  {
    id: 4,
    num: "05",
    name: "Custom Chrome Extensions",
    tag: "Automation",
    desc: "Browser-native tools, workflow automations, and web scrapers running directly on your machine.",
    Icon: Globe,
    backCanvas: {
      title: "Manifest V3 Sandbox",
      actionLabel: "DOM Script Execution",
      spec: "Automated workflow tools",
    },
  },
];

export default function ConceptDCardTheater() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const activeCard = cardsData[activeIdx];

  const handlePrev = () => {
    setIsFlipped(false);
    setActiveIdx((prev) => (prev === 0 ? cardsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsFlipped(false);
    setActiveIdx((prev) => (prev === cardsData.length - 1 ? 0 : prev + 1));
  };

  // Flip toggle
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="w-full flex flex-col items-center select-none">
      {/* Top Controls Bar */}
      <div className="flex items-center justify-between w-full max-w-xl pb-6">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-bold text-primary">
            0{activeIdx + 1} / 0{cardsData.length}
          </span>
          <div className="flex gap-1.5">
            {cardsData.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setIsFlipped(false);
                  setActiveIdx(idx);
                }}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
                  activeIdx === idx ? "w-8 bg-primary" : "w-2 bg-foreground/20 hover:bg-foreground/40"
                )}
                aria-label={`Go to card ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrev}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-foreground/15 bg-background text-foreground transition-all hover:border-primary hover:text-primary active:scale-95"
            aria-label="Previous service"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-foreground/15 bg-background text-foreground transition-all hover:border-primary hover:text-primary active:scale-95"
            aria-label="Next service"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* 3D Perspective Flip Stage */}
      <div className="relative w-full max-w-xl h-[340px] perspective-1000">
        <div
          className={cn(
            "relative w-full h-full duration-700 preserve-3d transition-transform rounded-3xl",
            isFlipped && "rotate-y-180"
          )}
        >
          {/* Card Front Face */}
          <div className="absolute inset-0 backface-hidden rounded-3xl border border-foreground/15 bg-accent/25 p-7 sm:p-8 flex flex-col justify-between shadow-2xl backdrop-blur-md dark:bg-card/50">
            <div>
              <div className="flex items-center justify-between pb-4">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                  <activeCard.Icon className="h-3.5 w-3.5" />
                  {activeCard.tag}
                </span>
                <span className="font-mono text-sm font-bold text-muted-foreground">
                  {activeCard.num}
                </span>
              </div>

              <h4
                className="text-3xl sm:text-4xl font-medium tracking-tight text-foreground mt-2"
                style={{ fontFamily: "var(--font-bebas-neue)" }}
              >
                {activeCard.name}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {activeCard.desc}
              </p>
            </div>

            {/* Bottom Flip Trigger */}
            <div className="flex items-center justify-between border-t border-foreground/10 pt-4">
              <span className="text-xs font-mono text-muted-foreground">
                Click to explore interactive canvas
              </span>
              <button
                type="button"
                onClick={handleFlip}
                className="cursor-pointer inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-2 text-xs font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground active:scale-95"
              >
                <RotateCw className="h-3.5 w-3.5" />
                Flip Card
              </button>
            </div>
          </div>

          {/* Card Back Face (The Interactive Canvas) */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-3xl border border-primary/40 bg-accent/35 p-7 sm:p-8 flex flex-col justify-between shadow-2xl backdrop-blur-md dark:bg-card/60">
            <div>
              <div className="flex items-center justify-between pb-3">
                <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
                  {activeCard.backCanvas.title}
                </span>
                <button
                  type="button"
                  onClick={handleFlip}
                  className="cursor-pointer text-xs font-mono text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
                >
                  <RotateCw className="h-3 w-3" /> Flip Back
                </button>
              </div>

              {/* Interactive Back Simulation Area */}
              <div className="my-3 rounded-2xl border border-foreground/10 bg-background/80 p-4 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-foreground font-semibold">
                    {activeCard.backCanvas.actionLabel}
                  </span>
                  <span className="text-emerald-400 font-bold">ACTIVE</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-foreground/10 overflow-hidden">
                  <div className="h-full bg-primary rounded-full animate-pulse w-3/4" />
                </div>
                <p className="text-[11px] text-muted-foreground">
                  Spec: {activeCard.backCanvas.spec}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-foreground/10 pt-4">
              <span className="text-xs font-mono text-primary">
                Production-grade implementation
              </span>
              <button
                type="button"
                onClick={handleFlip}
                className="cursor-pointer text-xs font-semibold text-muted-foreground hover:text-foreground"
              >
                Done Exploring →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

