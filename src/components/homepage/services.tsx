"use client";

import { useEffect, useRef, useState } from "react";
import {
  Layers,
  Sparkles,
  Code2,
  Cpu,
  Zap,
  Globe,
  Database,
  Terminal,
  Shield,
  Gauge,
  Workflow,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/* Visual Tiles for each Card                                                 */
/* -------------------------------------------------------------------------- */
interface ShowcaseTile {
  title: string;
  subtitle: string;
  bg: string;
  textColor: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface ServiceCard {
  num: string;
  title: string;
  subtitle: string;
  bgColor: string;
  tiles: ShowcaseTile[];
}

const servicesData: ServiceCard[] = [
  {
    num: "01",
    title: "Full Stack AI Developer",
    subtitle:
      "Connecting Next.js applications with autonomous AI models, dynamic tool calling, and production-grade architectures that ship.",
    bgColor: "bg-[#282CD5]", // Deep Royal Cobalt Blue
    tiles: [
      {
        title: "Next.js 15",
        subtitle: "App Router",
        bg: "bg-[#D8FF38]",
        textColor: "text-neutral-950",
        icon: Layers,
      },
      {
        title: "AI Agents",
        subtitle: "Tool Calling",
        bg: "bg-[#FFE7BC]",
        textColor: "text-amber-950",
        icon: Sparkles,
      },
      {
        title: "pgvector",
        subtitle: "RAG Pipeline",
        bg: "bg-[#FFDE38]",
        textColor: "text-neutral-950",
        icon: Database,
      },
      {
        title: "TypeScript",
        subtitle: "End-to-End",
        bg: "bg-[#FF453A]",
        textColor: "text-white",
        icon: Terminal,
      },
    ],
  },
  {
    num: "02",
    title: "Frontend Engineering",
    subtitle:
      "Creating fast, pixel-perfect UIs with React and Next.js that look amazing, animate smoothly at 60 FPS, and rank high on search engines.",
    bgColor: "bg-[#FF5519]", // Vibrant Orange
    tiles: [
      {
        title: "Tailwind CSS",
        subtitle: "Design System",
        bg: "bg-[#FFFFFF]",
        textColor: "text-neutral-950",
        icon: Code2,
      },
      {
        title: "60 FPS",
        subtitle: "Spring Physics",
        bg: "bg-[#FFE082]",
        textColor: "text-amber-950",
        icon: Zap,
      },
      {
        title: "Zero CLS",
        subtitle: "Pixel Accuracy",
        bg: "bg-[#A7F3D0]",
        textColor: "text-emerald-950",
        icon: Shield,
      },
      {
        title: "Responsive",
        subtitle: "Mobile to 4K",
        bg: "bg-[#282CD5]",
        textColor: "text-white",
        icon: Globe,
      },
    ],
  },
  {
    num: "03",
    title: "Backend & API Architecture",
    subtitle:
      "The engine under the hood: secure APIs, microservices, and PostgreSQL database schemas built with Node.js and Python to scale with you.",
    bgColor: "bg-[#E62E2E]", // Crimson Red
    tiles: [
      {
        title: "Node & Python",
        subtitle: "Microservices",
        bg: "bg-[#FFFFFF]",
        textColor: "text-neutral-950",
        icon: Cpu,
      },
      {
        title: "PostgreSQL",
        subtitle: "ACID Schemas",
        bg: "bg-[#38BDF8]",
        textColor: "text-neutral-950",
        icon: Database,
      },
      {
        title: "Redis L1",
        subtitle: "Sub-ms Cache",
        bg: "bg-[#FFD166]",
        textColor: "text-amber-950",
        icon: Zap,
      },
      {
        title: "Edge Deploy",
        subtitle: "Global CDN",
        bg: "bg-[#18181B]",
        textColor: "text-white",
        icon: Globe,
      },
    ],
  },
  {
    num: "04",
    title: "Performance & Optimization",
    subtitle:
      "Tired of slow sites? I audit and tune every line of code, bundle, and query to hit perfect Core Web Vitals and 100/100 Lighthouse scores.",
    bgColor: "bg-[#14704B]", // Deep Emerald Teal
    tiles: [
      {
        title: "100 Score",
        subtitle: "Lighthouse",
        bg: "bg-[#FFFFFF]",
        textColor: "text-neutral-950",
        icon: Gauge,
      },
      {
        title: "<100ms INP",
        subtitle: "Instant Paint",
        bg: "bg-[#FDE047]",
        textColor: "text-amber-950",
        icon: Zap,
      },
      {
        title: "Tree Shake",
        subtitle: "Lean Bundles",
        bg: "bg-[#C4B5FD]",
        textColor: "text-purple-950",
        icon: Workflow,
      },
      {
        title: "Edge Cache",
        subtitle: "Fast TTFB",
        bg: "bg-[#FF5519]",
        textColor: "text-white",
        icon: Globe,
      },
    ],
  },
  {
    num: "05",
    title: "Custom Chrome Extensions",
    subtitle:
      "Building powerful Manifest V3 browser tools and background scrapers to automate complex workflows and add unique features to the web.",
    bgColor: "bg-[#3D2C20]", // Warm Espresso Clay
    tiles: [
      {
        title: "Manifest V3",
        subtitle: "Chrome & Edge",
        bg: "bg-[#FFFFFF]",
        textColor: "text-neutral-950",
        icon: Globe,
      },
      {
        title: "Service Worker",
        subtitle: "Background Sync",
        bg: "bg-[#FCA5A5]",
        textColor: "text-red-950",
        icon: Workflow,
      },
      {
        title: "DOM Scraper",
        subtitle: "Data Extraction",
        bg: "bg-[#FEF08A]",
        textColor: "text-amber-950",
        icon: Terminal,
      },
      {
        title: "Secure RPC",
        subtitle: "Cross-Context",
        bg: "bg-[#282CD5]",
        textColor: "text-white",
        icon: Shield,
      },
    ],
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let rafId: number | null = null;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      const totalScrollable = rect.height - windowH;
      const scrolled = -rect.top;

      if (scrolled < 0) {
        // Reset all cards to initial stacked position
        servicesData.forEach((_, i) => {
          const card = cardRefs.current[i];
          if (!card) return;
          const depth = i;
          const translateY = depth * 16;
          const scale = 1 - depth * 0.035;
          card.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
          card.style.opacity = "1";
          card.style.pointerEvents = i === 0 ? "auto" : "none";
          card.style.visibility = "visible";
        });
        setActiveIndex(0);
        return;
      }

      // Progress ranges from 0 to 4 (across the 5 cards)
      const numCards = servicesData.length;
      const progress = Math.max(0, Math.min(numCards - 1, (scrolled / totalScrollable) * (numCards - 0.15)));

      servicesData.forEach((_, i) => {
        const card = cardRefs.current[i];
        if (!card) return;

        if (progress < i) {
          // Card i is waiting in the stacked deck below
          const depth = i - progress;
          const translateY = depth * 16;
          const scale = 1 - depth * 0.035;
          card.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
          card.style.opacity = "1";
          card.style.pointerEvents = "none";
          card.style.visibility = "visible";
        } else if (progress >= i && progress < i + 1) {
          // Card i is ACTIVE and lifting upwards off the stack!
          const liftT = progress - i; // 0 to 1
          const translateY = -liftT * 125; // percent upwards
          const rotateX = liftT * 16; // 3D tilt back (degrees)
          const scale = 1 - liftT * 0.04;

          card.style.transform = `perspective(1000px) translate3d(0, ${translateY}%, 0) rotateX(${rotateX}deg) scale(${scale})`;
          card.style.opacity = "1"; // Always 100% solid - never transparent!
          card.style.pointerEvents = liftT > 0.4 ? "none" : "auto";
          card.style.visibility = "visible";
        } else {
          // Card i has fully lifted off and exited top
          card.style.transform = `perspective(1000px) translate3d(0, -140%, 0) rotateX(20deg)`;
          card.style.opacity = "0";
          card.style.pointerEvents = "none";
          card.style.visibility = "hidden";
        }
      });

      const current = Math.min(numCards - 1, Math.floor(progress));
      setActiveIndex(current);
    };

    const onScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        handleScroll();
        rafId = null;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  const scrollToCard = (index: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const containerTop = scrollTop + rect.top;
    const windowH = window.innerHeight;
    const totalScrollable = containerRef.current.offsetHeight - windowH;
    const targetY = containerTop + (index / (servicesData.length - 1)) * totalScrollable;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative w-full bg-background text-foreground mb-20 sm:mb-28 lg:mb-32"
      style={{ height: "450vh" }}
      aria-label="What I ship - services section"
    >
      {/* Sticky Viewport Frame - balanced padding so header and bottom dots are always visible */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-start items-center pt-28 pb-4 px-4 sm:px-6 lg:px-10 overflow-hidden select-none">
        {/* Section Header */}
        <div className="text-center mb-3 sm:mb-4 shrink-0">
          <p className="items-center gap-3 font-semibold uppercase tracking-[0.3em] text-primary">
            Skills
          </p>
          <h2 className="-mt-1 text-3xl sm:text-5xl lg:text-6xl font-heading tracking-tight text-foreground font-serif italic">
            My Expertise & Services
          </h2>
        </div>

        {/* Card Deck Stage */}
        <div className="relative w-full max-w-5xl h-[380px] sm:h-[410px] lg:h-[430px]">
          {servicesData.map((service, index) => {
            // Z-index: top card has highest z-index so it overlays the cards peeking below it
            const zIndex = (servicesData.length - index) * 10;

            return (
              <div
                key={service.num}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                style={{
                  zIndex,
                  transform: `translate3d(0, ${index * 16}px, 0) scale(${1 - index * 0.035})`,
                  transformOrigin: "top center",
                }}
                className={cn(
                  "absolute inset-x-0 top-0 h-[360px] sm:h-[385px] lg:h-[405px]",
                  "rounded-3xl sm:rounded-4xl p-5 sm:p-7 lg:p-8 text-white shadow-2xl",
                  "flex flex-col justify-between will-change-transform",
                  service.bgColor
                )}
              >
                {/* TOP HALF: Title & Description */}
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-white leading-tight max-w-2xl">
                      {service.title}
                    </h3>
                    <span className="text-lg sm:text-2xl font-bold text-white/90 font-mono shrink-0">
                      ({service.num})
                    </span>
                  </div>

                  <p className="mt-2.5 text-xs sm:text-sm lg:text-base text-white/85 max-w-2xl leading-relaxed">
                    {service.subtitle}
                  </p>
                </div>

                {/* BOTTOM ROW: 3 Tiles on Mobile, 4 Tiles on Desktop (Author badge removed) */}
                <div className="flex items-center justify-end gap-2 sm:gap-3.5 py-2 px-1 overflow-visible">
                  {service.tiles.map((tile, tIdx) => {
                    const IconComponent = tile.icon;
                    return (
                      <div
                        key={tile.title}
                        className={cn(
                          "h-16 w-20 sm:h-20 sm:w-24 rounded-2xl p-2 sm:p-2.5 flex-col justify-between shrink-0 shadow-md",
                          "transition-all duration-200 hover:-translate-y-1.5 hover:shadow-xl cursor-default",
                          tIdx === 3 ? "hidden sm:flex" : "flex",
                          tile.bg,
                          tile.textColor
                        )}
                      >
                        <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" />
                        <div>
                          <div className="text-[11px] sm:text-xs font-bold leading-tight truncate">
                            {tile.title}
                          </div>
                          <div className="text-[9px] sm:text-[10px] opacity-80 leading-none truncate">
                            {tile.subtitle}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Position Indicator - cleanly visible on both desktop & mobile */}
        <div className="mt-4 sm:mt-5 flex items-center gap-2 z-20 shrink-0">
          {servicesData.map((s, idx) => (
            <button
              key={s.num}
              type="button"
              onClick={() => scrollToCard(idx)}
              className={cn(
                "cursor-pointer rounded-full transition-all duration-300",
                activeIndex === idx
                  ? "h-2 w-8 bg-primary"
                  : "h-2 w-2 bg-foreground/20 hover:bg-foreground/40"
              )}
              aria-label={`Jump to card ${s.num}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
