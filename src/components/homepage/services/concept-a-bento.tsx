"use client";

import { useState, useRef, useEffect, MouseEvent } from "react";
import { cn } from "@/lib/utils";
import { Sparkles, Play, RefreshCw, Layers, Zap, Globe, Cpu, Code2 } from "lucide-react";

/* -------------------------------------------------------------------------- */
/* A1: Draggable Node Graph (AI Development)                                 */
/* -------------------------------------------------------------------------- */
interface NodeItem {
  id: string;
  label: string;
  x: number;
  y: number;
  role: string;
}

function AiFlowGraph() {
  const containerRef = useRef<SVGSVGElement>(null);
  const [nodes, setNodes] = useState<NodeItem[]>([
    { id: "1", label: "Prompt", x: 40, y: 55, role: "User Intent" },
    { id: "2", label: "Router", x: 130, y: 30, role: "Agent Core" },
    { id: "3", label: "LLM", x: 230, y: 30, role: "Reasoning" },
    { id: "4", label: "RAG", x: 180, y: 85, role: "Vector DB" },
    { id: "5", label: "UI Stream", x: 320, y: 55, role: "Reactive State" },
  ]);
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [packetPos, setPacketPos] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPacketPos((prev) => (prev + 1) % 100);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const handlePointerDown = (id: string) => {
    setDraggingId(id);
  };

  const handlePointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    if (!draggingId || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scaleX = 370 / rect.width;
    const scaleY = 120 / rect.height;
    const clientX = (e.clientX - rect.left) * scaleX;
    const clientY = (e.clientY - rect.top) * scaleY;

    setNodes((prev) =>
      prev.map((n) =>
        n.id === draggingId
          ? {
              ...n,
              x: Math.max(30, Math.min(340, clientX)),
              y: Math.max(20, Math.min(100, clientY)),
            }
          : n
      )
    );
  };

  const handlePointerUp = () => {
    setDraggingId(null);
  };

  const n1 = nodes[0];
  const n2 = nodes[1];
  const n3 = nodes[2];
  const n4 = nodes[3];
  const n5 = nodes[4];

  return (
    <div className="relative w-full rounded-2xl border border-foreground/10 bg-background/60 p-3 select-none">
      <div className="flex items-center justify-between pb-2 text-[11px] font-mono text-muted-foreground">
        <span className="flex items-center gap-1.5 text-primary">
          <Sparkles className="h-3 w-3 animate-spin" style={{ animationDuration: "8s" }} />
          Autonomous Pipeline (Drag Nodes)
        </span>
        <span className="text-[10px] text-muted-foreground/80 font-mono">
          {activeTooltip || "Grab any node to reshape graph"}
        </span>
      </div>

      <svg
        ref={containerRef}
        viewBox="0 0 370 120"
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        className="w-full h-[105px] touch-none cursor-grab active:cursor-grabbing"
      >
        <defs>
          <linearGradient id="edgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Connecting Edges */}
        <path
          d={`M ${n1.x} ${n1.y} Q ${(n1.x + n2.x) / 2} ${(n1.y + n2.y) / 2 - 10} ${n2.x} ${n2.y}`}
          stroke="currentColor"
          className="text-foreground/20"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d={`M ${n2.x} ${n2.y} L ${n3.x} ${n3.y}`}
          stroke="currentColor"
          className="text-foreground/20"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d={`M ${n2.x} ${n2.y} L ${n4.x} ${n4.y}`}
          stroke="currentColor"
          className="text-foreground/20"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d={`M ${n4.x} ${n4.y} L ${n3.x} ${n3.y}`}
          stroke="currentColor"
          className="text-foreground/20"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d={`M ${n3.x} ${n3.y} Q ${(n3.x + n5.x) / 2} ${(n3.y + n5.y) / 2 + 10} ${n5.x} ${n5.y}`}
          stroke="currentColor"
          className="text-foreground/20"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Orbiting Animated Packet */}
        {(() => {
          const t = packetPos / 100;
          let px = n1.x;
          let py = n1.y;
          if (t < 0.3) {
            const p = t / 0.3;
            px = n1.x + (n2.x - n1.x) * p;
            py = n1.y + (n2.y - n1.y) * p;
          } else if (t < 0.6) {
            const p = (t - 0.3) / 0.3;
            px = n2.x + (n3.x - n2.x) * p;
            py = n2.y + (n3.y - n2.y) * p;
          } else {
            const p = (t - 0.6) / 0.4;
            px = n3.x + (n5.x - n3.x) * p;
            py = n3.y + (n5.y - n3.y) * p;
          }
          return (
            <circle
              cx={px}
              cy={py}
              r="3.5"
              className="fill-primary drop-shadow-[0_0_8px_var(--color-primary)]"
            />
          );
        })()}

        {/* Draggable Nodes */}
        {nodes.map((node) => (
          <g
            key={node.id}
            transform={`translate(${node.x}, ${node.y})`}
            onPointerDown={(e) => {
              e.stopPropagation();
              handlePointerDown(node.id);
            }}
            onMouseEnter={() => setActiveTooltip(`${node.label} → ${node.role}`)}
            onMouseLeave={() => setActiveTooltip(null)}
            className="cursor-pointer transition-transform hover:scale-110"
          >
            <circle
              r="14"
              className={cn(
                "stroke-2 transition-colors",
                draggingId === node.id
                  ? "fill-primary stroke-primary text-primary-foreground"
                  : "fill-background stroke-primary/70"
              )}
            />
            <text
              y="3"
              textAnchor="middle"
              className={cn(
                "text-[8.5px] font-mono font-bold pointer-events-none select-none",
                draggingId === node.id ? "fill-black" : "fill-foreground"
              )}
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* A2: Spring Physics Playground (Frontend & Motion)                          */
/* -------------------------------------------------------------------------- */
function SpringPhysicsToy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [target, setTarget] = useState({ x: 0, y: 0 });
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const [metrics, setMetrics] = useState({ stiffness: 180, damping: 14, speed: 0 });

  // Spring animation tick
  useEffect(() => {
    let animId: number;
    const tick = () => {
      const k = metrics.stiffness;
      const d = metrics.damping;
      const mass = 1;

      setPos((current) => {
        const ax = (-k * (current.x - target.x) - d * velocity.x) / mass;
        const ay = (-k * (current.y - target.y) - d * velocity.y) / mass;

        const newVx = velocity.x + ax * 0.016;
        const newVy = velocity.y + ay * 0.016;
        setVelocity({ x: newVx, y: newVy });

        const currentSpeed = Math.round(Math.sqrt(newVx * newVx + newVy * newVy));
        setMetrics((m) => ({ ...m, speed: currentSpeed }));

        return {
          x: current.x + newVx * 0.016,
          y: current.y + newVy * 0.016,
        };
      });

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [target, velocity.x, velocity.y, metrics.stiffness, metrics.damping]);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const clickX = e.clientX - rect.left - cx;
    const clickY = e.clientY - rect.top - cy;

    // Launch target
    setTarget({ x: clickX * 0.7, y: clickY * 0.7 });
    setTimeout(() => {
      setTarget({ x: 0, y: 0 });
    }, 280);
  };

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      className="relative w-full h-[155px] rounded-2xl border border-foreground/10 bg-background/60 p-3 flex flex-col justify-between cursor-crosshair select-none overflow-hidden"
    >
      <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground">
        <span className="text-primary font-medium">Click Card to Trigger Physics</span>
        <span className="text-[10px]">60 FPS Spring</span>
      </div>

      {/* Physics Object */}
      <div className="relative flex-1 flex items-center justify-center">
        {/* Center Origin Mark */}
        <div className="absolute h-2 w-2 rounded-full border border-foreground/20" />

        <div
          className="relative flex items-center justify-center rounded-2xl border-2 border-primary bg-primary/20 shadow-[0_0_20px_var(--color-primary)] transition-colors duration-200"
          style={{
            transform: `translate(${pos.x}px, ${pos.y}px)`,
            width: "56px",
            height: "56px",
          }}
        >
          <Code2 className="h-6 w-6 text-primary" />
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground">
        <span>k: {metrics.stiffness} · c: {metrics.damping}</span>
        <span className="text-primary font-semibold">Velocity: {metrics.speed}px/s</span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* A3: HTTP Request Lifecycle (Backend & APIs)                                */
/* -------------------------------------------------------------------------- */
function HttpRequestRace() {
  const [clickCount, setClickCount] = useState(0);
  const [isFiring, setIsFiring] = useState(false);
  const [isCached, setIsCached] = useState(false);
  const [timing, setTiming] = useState({ dns: "2ms", gw: "7ms", db: "15ms", total: "24ms" });

  const handleFire = () => {
    if (isFiring) return;
    setIsFiring(true);
    const nextCount = clickCount + 1;
    setClickCount(nextCount);

    const hitCache = nextCount % 3 === 0;
    setIsCached(hitCache);

    if (hitCache) {
      setTiming({ dns: "1ms", gw: "1ms", db: "SKIPPED", total: "2ms" });
      setTimeout(() => setIsFiring(false), 400);
    } else {
      const randDb = Math.floor(12 + Math.random() * 8);
      const total = 2 + 7 + randDb;
      setTiming({ dns: "2ms", gw: "7ms", db: `${randDb}ms`, total: `${total}ms` });
      setTimeout(() => setIsFiring(false), 700);
    }
  };

  return (
    <div className="w-full h-[155px] rounded-2xl border border-foreground/10 bg-background/60 p-3 flex flex-col justify-between select-none">
      <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground">
        <span className="text-primary font-medium">Request Pipeline</span>
        <button
          type="button"
          onClick={handleFire}
          disabled={isFiring}
          className="cursor-pointer inline-flex items-center gap-1 rounded bg-primary/20 px-2 py-0.5 text-[10px] font-semibold text-primary hover:bg-primary hover:text-black transition-colors"
        >
          <Play className="h-2.5 w-2.5 fill-current" />
          Fire Request
        </button>
      </div>

      {/* 3 Step Timeline */}
      <div className="py-1">
        <div className="flex items-center justify-between text-[10px] font-mono text-foreground/80 pb-1">
          <span>Client</span>
          <span>Gateway</span>
          <span>Database</span>
        </div>
        <div className="relative h-2 w-full rounded-full bg-foreground/10 overflow-hidden">
          <div
            className={cn(
              "absolute inset-y-0 rounded-full bg-primary transition-all duration-500",
              isFiring ? "w-full" : "w-0"
            )}
          />
        </div>
        <div className="flex items-center justify-between text-[9px] font-mono text-muted-foreground pt-1">
          <span>{timing.dns}</span>
          <span>{timing.gw}</span>
          <span>{timing.db}</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] font-mono">
        <span className="text-muted-foreground">Latency:</span>
        {isCached ? (
          <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 font-bold text-emerald-400">
            CACHE HIT ⚡ {timing.total}
          </span>
        ) : (
          <span className="font-bold text-primary">{timing.total} Roundtrip</span>
        )}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* A4: Score Builder Arc (Performance & Speed)                                */
/* -------------------------------------------------------------------------- */
function LighthouseScoreArc() {
  const [bundleSize, setBundleSize] = useState(25); // KB

  // Score drops if bundle is huge
  const score = Math.max(82, Math.min(100, Math.round(100 - (bundleSize - 25) * 0.4)));

  return (
    <div className="w-full h-[155px] rounded-2xl border border-foreground/10 bg-background/60 p-3 flex flex-col justify-between select-none">
      <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground">
        <span className="text-primary font-medium">Core Web Vitals</span>
        <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-[10px] font-bold text-emerald-400">
          SCORE: {score}/100
        </span>
      </div>

      {/* Speedometer Arc */}
      <div className="flex items-center justify-center py-0.5">
        <div className="relative flex flex-col items-center">
          <svg className="w-28 h-14" viewBox="0 0 100 50">
            <path
              d="M 10 50 A 40 40 0 0 1 90 50"
              fill="none"
              stroke="currentColor"
              className="text-foreground/10"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <path
              d="M 10 50 A 40 40 0 0 1 90 50"
              fill="none"
              stroke="var(--color-primary)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray="126"
              strokeDashoffset={126 - (126 * score) / 100}
              className="transition-all duration-300"
            />
          </svg>
          <span className="text-xs font-mono font-bold text-foreground -mt-3">
            {score === 100 ? "0.4s LCP" : "1.2s LCP"}
          </span>
        </div>
      </div>

      {/* Interactive Bundle Size Slider */}
      <div className="flex items-center gap-2">
        <span className="text-[10px] font-mono text-muted-foreground shrink-0">Bundle:</span>
        <input
          type="range"
          min="25"
          max="70"
          value={bundleSize}
          onChange={(e) => setBundleSize(Number(e.target.value))}
          className="w-full accent-primary cursor-pointer h-1 bg-foreground/10 rounded-lg"
        />
        <span className="text-[10px] font-mono text-primary font-semibold shrink-0">
          {bundleSize}kb
        </span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* A5: DOM Inspector Mockup (Browser Extensions)                              */
/* -------------------------------------------------------------------------- */
function BrowserDomInspector() {
  const [isActive, setIsActive] = useState(true);
  const [selectedEl, setSelectedEl] = useState<string>("header");

  return (
    <div className="w-full h-[155px] rounded-2xl border border-foreground/10 bg-background/60 p-3 flex flex-col justify-between select-none">
      <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground">
        <span className="text-primary font-medium">Extension Inspector</span>
        <button
          type="button"
          onClick={() => setIsActive(!isActive)}
          className={cn(
            "cursor-pointer rounded-full px-2 py-0.5 text-[9px] font-bold transition-all",
            isActive ? "bg-primary text-black" : "bg-muted text-muted-foreground"
          )}
        >
          {isActive ? "ACTIVE" : "STANDBY"}
        </button>
      </div>

      {/* Mini Page Elements */}
      <div className="rounded-xl border border-foreground/10 bg-background/90 p-2 space-y-1.5">
        <div
          onClick={() => setSelectedEl("header")}
          className={cn(
            "h-4 rounded px-1.5 text-[9px] font-mono flex items-center justify-between cursor-pointer transition-all",
            isActive && selectedEl === "header"
              ? "border border-primary bg-primary/20 text-primary"
              : "bg-foreground/5 text-muted-foreground"
          )}
        >
          <span>&lt;header.navbar&gt;</span>
          <span className="text-[8px]">120px</span>
        </div>

        <div
          onClick={() => setSelectedEl("hero")}
          className={cn(
            "h-5 rounded px-1.5 text-[9px] font-mono flex items-center justify-between cursor-pointer transition-all",
            isActive && selectedEl === "hero"
              ? "border border-primary bg-primary/20 text-primary"
              : "bg-foreground/5 text-muted-foreground"
          )}
        >
          <span>&lt;section#hero&gt;</span>
          <span className="text-[8px]">840px</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground">
        <span>Hook: DOM Mutation</span>
        <span className="text-primary font-medium">Node: &lt;{selectedEl}&gt;</span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Main Concept A Component                                                   */
/* -------------------------------------------------------------------------- */
export default function ConceptABento() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-12 gap-4">
        {/* Card 1: Full Stack AI (Span 7) */}
        <div className="col-span-12 lg:col-span-7 rounded-3xl border border-foreground/10 bg-accent/20 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 hover:shadow-xl dark:bg-card/40">
          <div className="flex items-center justify-between pb-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <Layers className="h-3.5 w-3.5" />
              AI & Full Stack
            </span>
            <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
              Live Proof Canvas
            </span>
          </div>

          <AiFlowGraph />

          <div className="pt-3">
            <h4
              className="text-2xl sm:text-3xl font-medium tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-bebas-neue)" }}
            >
              Full Stack AI Development
            </h4>
            <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
              Connecting clean, scalable architecture with autonomous LLM reasoning and real-time streaming interfaces.
            </p>
          </div>
        </div>

        {/* Card 2: Frontend & Motion (Span 5) */}
        <div className="col-span-12 lg:col-span-5 rounded-3xl border border-foreground/10 bg-accent/20 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 hover:shadow-xl dark:bg-card/40">
          <div className="flex items-center justify-between pb-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <Code2 className="h-3.5 w-3.5" />
              Frontend
            </span>
            <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
              Interactive Physics
            </span>
          </div>

          <SpringPhysicsToy />

          <div className="pt-3">
            <h4
              className="text-2xl sm:text-3xl font-medium tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-bebas-neue)" }}
            >
              Frontend & Creative Motion
            </h4>
            <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
              Precision interfaces with authentic spring physics, fluid micro-interactions, and zero layout jitter.
            </p>
          </div>
        </div>

        {/* Card 3: Backend & APIs (Span 4) */}
        <div className="col-span-12 sm:col-span-6 lg:col-span-4 rounded-3xl border border-foreground/10 bg-accent/20 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 hover:shadow-xl dark:bg-card/40">
          <div className="flex items-center justify-between pb-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-foreground/10 bg-background/80 px-3 py-1 text-xs font-medium text-foreground">
              <Cpu className="h-3.5 w-3.5 text-primary" />
              Backend
            </span>
            <span className="font-mono text-[10px] text-muted-foreground">24ms avg</span>
          </div>

          <HttpRequestRace />

          <div className="pt-3">
            <h4
              className="text-2xl font-medium tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-bebas-neue)" }}
            >
              Backend & API Architecture
            </h4>
            <p className="mt-1 text-xs text-muted-foreground">
              Resilient APIs, relational schemas, caching tiers, and server systems built to scale.
            </p>
          </div>
        </div>

        {/* Card 4: Performance & Optimization (Span 4) */}
        <div className="col-span-12 sm:col-span-6 lg:col-span-4 rounded-3xl border border-foreground/10 bg-accent/20 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 hover:shadow-xl dark:bg-card/40">
          <div className="flex items-center justify-between pb-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-foreground/10 bg-background/80 px-3 py-1 text-xs font-medium text-foreground">
              <Zap className="h-3.5 w-3.5 text-primary" />
              Optimization
            </span>
            <span className="font-mono text-[10px] text-emerald-400">100/100</span>
          </div>

          <LighthouseScoreArc />

          <div className="pt-3">
            <h4
              className="text-2xl font-medium tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-bebas-neue)" }}
            >
              Performance & Sub-Second Tuning
            </h4>
            <p className="mt-1 text-xs text-muted-foreground">
              Every millisecond tuned: sub-second TTFB, zero shift, and green Core Web Vitals.
            </p>
          </div>
        </div>

        {/* Card 5: Custom Chrome Extensions (Span 4) */}
        <div className="col-span-12 lg:col-span-4 rounded-3xl border border-foreground/10 bg-accent/20 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 hover:shadow-xl dark:bg-card/40">
          <div className="flex items-center justify-between pb-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-foreground/10 bg-background/80 px-3 py-1 text-xs font-medium text-foreground">
              <Globe className="h-3.5 w-3.5 text-primary" />
              Extensions
            </span>
            <span className="font-mono text-[10px] text-primary">Manifest V3</span>
          </div>

          <BrowserDomInspector />

          <div className="pt-3">
            <h4
              className="text-2xl font-medium tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-bebas-neue)" }}
            >
              Custom Chrome Extensions
            </h4>
            <p className="mt-1 text-xs text-muted-foreground">
              Browser-native tools, workflow automations, and web scrapers running on your machine.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

