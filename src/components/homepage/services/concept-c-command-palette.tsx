"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Search, Terminal, Sparkles, CornerDownLeft, Command, Play, Check } from "lucide-react";

interface ServiceCommand {
  id: number;
  num: string;
  name: string;
  tag: string;
  subtitle: string;
  shortcut: string;
}

const commands: ServiceCommand[] = [
  {
    id: 0,
    num: "01",
    name: "Full Stack AI Development",
    tag: "AI & Full Stack",
    subtitle: "Autonomous LLM reasoning, RAG vector chains, and streaming UI",
    shortcut: "⌘ 1",
  },
  {
    id: 1,
    num: "02",
    name: "Frontend & Creative Motion",
    tag: "Frontend",
    subtitle: "Physics-based spring motion, micro-interactions, and accessible UI",
    shortcut: "⌘ 2",
  },
  {
    id: 2,
    num: "03",
    name: "Backend & Systems Architecture",
    tag: "Backend",
    subtitle: "PostgreSQL schemas, Redis queues, and resilient REST/GraphQL APIs",
    shortcut: "⌘ 3",
  },
  {
    id: 3,
    num: "04",
    name: "Performance & Sub-Second Tuning",
    tag: "Optimization",
    subtitle: "Zero layout shift, 100/100 Core Web Vitals, and tuned search indexing",
    shortcut: "⌘ 4",
  },
  {
    id: 4,
    num: "05",
    name: "Custom Chrome Extensions",
    tag: "Automation",
    subtitle: "Manifest V3 extensions for complex workflow automation and scraping",
    shortcut: "⌘ 5",
  },
];

export default function ConceptCCommandPalette() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [query, setQuery] = useState("");

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIdx((prev) => (prev + 1) % commands.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIdx((prev) => (prev - 1 + commands.length) % commands.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const activeCmd = commands[selectedIdx];

  // Token stream state for Canvas 1
  const [streamText, setStreamText] = useState("");
  useEffect(() => {
    if (selectedIdx !== 0) return;
    const full = "Generating architecture: Next.js 16 + RAG Agent + Vector embeddings in 140ms...";
    setStreamText("");
    let i = 0;
    const interval = setInterval(() => {
      if (i < full.length) {
        setStreamText((t) => t + full[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 28);
    return () => clearInterval(interval);
  }, [selectedIdx]);

  // Bezier curve handle state for Canvas 2
  const [bezierHandle, setBezierHandle] = useState(65);

  // Split slider state for Canvas 4
  const [splitPos, setSplitPos] = useState(50);

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-4xl rounded-3xl border border-foreground/15 bg-background/95 backdrop-blur-2xl shadow-2xl overflow-hidden select-none">
        {/* Search Command Input Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-foreground/10 bg-accent/20">
          <div className="flex items-center gap-3 w-full">
            <Search className="h-4 w-4 text-primary shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="What can I engineer for you? (Use ↑↓ arrow keys to navigate)"
              className="w-full bg-transparent outline-none text-xs sm:text-sm text-foreground placeholder:text-muted-foreground font-mono"
            />
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-[10px] font-mono text-muted-foreground border border-foreground/15 rounded-md px-2 py-0.5">
            <Command className="h-3 w-3" />
            <span>K</span>
          </div>
        </div>

        {/* Split Body: Commands List (Left) + Live Interactive Canvas (Right) */}
        <div className="grid grid-cols-1 md:grid-cols-12 min-h-[360px]">
          {/* Left Column: Services Commands */}
          <div className="md:col-span-6 p-3 border-r border-foreground/10 space-y-1">
            <p className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
              Services & Capabilities
            </p>

            {commands
              .filter((c) => c.name.toLowerCase().includes(query.toLowerCase()))
              .map((cmd) => {
                const isSelected = selectedIdx === cmd.id;
                return (
                  <div
                    key={cmd.id}
                    onClick={() => setSelectedIdx(cmd.id)}
                    onMouseEnter={() => setSelectedIdx(cmd.id)}
                    className={cn(
                      "flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all duration-200 border",
                      isSelected
                        ? "border-primary/40 bg-primary/10 shadow-sm"
                        : "border-transparent hover:bg-accent/40"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={cn(
                          "font-mono text-xs font-bold",
                          isSelected ? "text-primary" : "text-muted-foreground"
                        )}
                      >
                        {cmd.num}
                      </span>
                      <div>
                        <h4
                          className={cn(
                            "text-sm font-semibold transition-colors",
                            isSelected ? "text-foreground" : "text-muted-foreground"
                          )}
                        >
                          {cmd.name}
                        </h4>
                        <p className="text-[11px] text-muted-foreground/80 line-clamp-1">
                          {cmd.tag}
                        </p>
                      </div>
                    </div>
                    <span className="hidden sm:inline-block font-mono text-[10px] text-muted-foreground border border-foreground/10 px-1.5 py-0.5 rounded">
                      {cmd.shortcut}
                    </span>
                  </div>
                );
              })}
          </div>

          {/* Right Column: Live Interactive Canvas */}
          <div className="md:col-span-6 p-6 bg-accent/15 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-foreground/10">
                <span className="text-primary font-bold">CANVAS: {activeCmd.tag}</span>
                <span className="text-[10px] text-muted-foreground">INTERACTIVE</span>
              </div>

              <div className="pt-2">
                <h4
                  className="text-2xl font-medium tracking-tight text-foreground"
                  style={{ fontFamily: "var(--font-bebas-neue)" }}
                >
                  {activeCmd.name}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                  {activeCmd.subtitle}
                </p>
              </div>
            </div>

            {/* Embedded Live Canvas depending on selected command */}
            <div className="my-4 rounded-2xl border border-foreground/10 bg-background/80 p-4 min-h-[170px] flex flex-col justify-center">
              {selectedIdx === 0 && (
                <div className="font-mono text-xs text-zinc-300 space-y-2">
                  <div className="flex items-center gap-2 text-primary text-[11px]">
                    <Sparkles className="h-3 w-3" />
                    Autonomous LLM Output
                  </div>
                  <div className="min-h-[45px] text-foreground font-mono text-[11px] leading-relaxed">
                    {streamText}
                    <span className="inline-block w-1.5 h-3.5 bg-primary ml-1 animate-pulse" />
                  </div>
                  <div className="text-[10px] text-muted-foreground border-t border-foreground/10 pt-2 flex justify-between">
                    <span>Latency: 140ms</span>
                    <span className="text-emerald-400">Tokens: 64/s</span>
                  </div>
                </div>
              )}

              {selectedIdx === 1 && (
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs font-mono text-muted-foreground">
                    <span>Bezier Curve Easing:</span>
                    <span className="text-primary font-bold">cubic-bezier(0.{bezierHandle})</span>
                  </div>
                  <div className="relative h-12 flex items-center justify-center">
                    <svg viewBox="0 0 100 30" className="w-full h-8 overflow-visible">
                      <path
                        d={`M 10 25 Q ${bezierHandle} 0 90 25`}
                        fill="none"
                        stroke="var(--color-primary)"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-muted-foreground">Adjust Tension:</span>
                    <input
                      type="range"
                      min="20"
                      max="90"
                      value={bezierHandle}
                      onChange={(e) => setBezierHandle(Number(e.target.value))}
                      className="w-full accent-primary cursor-pointer h-1 bg-foreground/10 rounded-lg"
                    />
                  </div>
                </div>
              )}

              {selectedIdx === 2 && (
                <div className="space-y-2 text-xs font-mono">
                  <p className="text-[10px] uppercase text-muted-foreground">Query Execution Plan</p>
                  <div className="space-y-1.5 text-[11px]">
                    <div className="flex justify-between p-1 rounded bg-foreground/5">
                      <span className="text-primary">Index Scan on users_pkey</span>
                      <span>0.04ms</span>
                    </div>
                    <div className="flex justify-between p-1 rounded bg-foreground/5">
                      <span className="text-foreground">Hash Join on org_id</span>
                      <span>0.12ms</span>
                    </div>
                  </div>
                  <div className="text-[10px] text-emerald-400 pt-1 flex justify-between">
                    <span>Total Plan Cost: 0.16ms</span>
                    <span>100% Cached</span>
                  </div>
                </div>
              )}

              {selectedIdx === 3 && (
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-muted-foreground">Unoptimized: 3.8s</span>
                    <span className="text-emerald-400 font-bold">Optimized: 0.4s</span>
                  </div>
                  <div className="relative h-3 w-full rounded-full bg-foreground/10 overflow-hidden">
                    <div
                      style={{ width: `${splitPos}%` }}
                      className="h-full bg-primary rounded-full transition-all"
                    />
                  </div>
                  <div className="flex items-center gap-2 pt-1">
                    <span className="text-[10px] text-muted-foreground">Slide:</span>
                    <input
                      type="range"
                      min="10"
                      max="100"
                      value={splitPos}
                      onChange={(e) => setSplitPos(Number(e.target.value))}
                      className="w-full accent-primary cursor-pointer h-1"
                    />
                    <span className="text-[10px] text-primary">{splitPos}%</span>
                  </div>
                </div>
              )}

              {selectedIdx === 4 && (
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex justify-between items-center text-[10px] text-muted-foreground">
                    <span>Mini Browser Sandbox</span>
                    <span className="text-primary">Active</span>
                  </div>
                  <div className="rounded border border-foreground/10 p-2 space-y-1 text-[11px]">
                    <p className="text-emerald-400">✓ Injected content script</p>
                    <p className="text-foreground">⚡ Automating form submission</p>
                  </div>
                  <div className="text-[10px] text-muted-foreground flex justify-between">
                    <span>Manifest V3</span>
                    <span>Chrome / Edge</span>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Action Footer */}
            <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground pt-2 border-t border-foreground/10">
              <span>Press Enter to select</span>
              <span className="text-primary font-bold flex items-center gap-1">
                EXECUTE <CornerDownLeft className="h-3 w-3" />
              </span>
            </div>
          </div>
        </div>

        {/* Global Footer Shortcuts */}
        <div className="flex items-center justify-between px-5 py-2.5 bg-accent/30 border-t border-foreground/10 text-[10px] font-mono text-muted-foreground">
          <div className="flex items-center gap-4">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>Esc Reset</span>
          </div>
          <span className="text-primary font-semibold">100% Keyboard Navigable</span>
        </div>
      </div>
    </div>
  );
}

