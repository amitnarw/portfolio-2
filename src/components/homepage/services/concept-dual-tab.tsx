"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Clock, Calendar, Sparkles } from "lucide-react";
import { disciplines, engagements, SCOPING_HREF } from "./content";
import { cn } from "@/lib/utils";

export default function ConceptDualTab() {
  const [tab, setTab] = useState<"disciplines" | "models">("disciplines");

  return (
    <div className="w-full">
      {/* Top Segmented Controller */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-10 border-b border-foreground/10">
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-primary font-semibold">
            Service Framework
          </p>
          <h3 className="mt-1 font-serif text-2xl sm:text-3xl italic text-foreground">
            {tab === "disciplines"
              ? "Engineered for speed and reliability"
              : "Flexible collaboration models for founders"}
          </h3>
        </div>

        {/* Pill Selector */}
        <div className="inline-flex rounded-full border border-foreground/15 bg-accent/40 p-1 backdrop-blur-sm dark:bg-card/60">
          <button
            type="button"
            onClick={() => setTab("disciplines")}
            className={cn(
              "cursor-pointer rounded-full px-5 py-2 text-xs font-semibold transition-all duration-300",
              tab === "disciplines"
                ? "bg-primary text-primary-foreground shadow-md"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            01 / Core Disciplines
          </button>
          <button
            type="button"
            onClick={() => setTab("models")}
            className={cn(
              "cursor-pointer rounded-full px-5 py-2 text-xs font-semibold transition-all duration-300",
              tab === "models"
                ? "bg-primary text-primary-foreground shadow-md"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            02 / Ways to Work (Models)
          </button>
        </div>
      </div>

      {/* Tab 1: Core Disciplines */}
      {tab === "disciplines" ? (
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {disciplines.map((d) => (
            <div
              key={d.num}
              className="group flex flex-col justify-between rounded-3xl border border-foreground/10 bg-accent/20 p-7 sm:p-8 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 hover:shadow-xl dark:bg-card/40"
            >
              <div>
                <div className="flex items-center justify-between pb-6">
                  <span className="font-mono text-xs font-bold tracking-widest text-primary">
                    {d.num}
                  </span>
                  <span className="rounded-full border border-foreground/10 px-3 py-1 text-[11px] font-medium text-muted-foreground">
                    End-to-End
                  </span>
                </div>

                <h4
                  className="text-3xl font-medium tracking-tight text-foreground"
                  style={{ fontFamily: "var(--font-bebas-neue)" }}
                >
                  {d.name}
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {d.promise}
                </p>

                {/* Capabilities pills */}
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {d.capabilities.map((cap) => (
                    <span
                      key={cap}
                      className="rounded-md border border-foreground/10 bg-background/60 px-2.5 py-1 text-xs text-foreground/85"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Proof link */}
              <div className="mt-8 pt-5 border-t border-foreground/10 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                    Live Proof
                  </p>
                  <p className="text-xs font-semibold text-foreground">
                    {d.proof.title}
                  </p>
                </div>
                <Link
                  href={`/work/${d.proof.slug}`}
                  className="group/btn flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground"
                >
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Tab 2: Engagement Models */
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {engagements.map((eng) => (
            <div
              key={eng.num}
              className="flex flex-col justify-between rounded-3xl border border-foreground/10 bg-accent/20 p-7 sm:p-8 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 hover:shadow-xl dark:bg-card/40"
            >
              <div>
                <div className="flex items-center justify-between pb-6">
                  <span className="font-mono text-xs font-bold tracking-widest text-primary">
                    {eng.num}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold text-primary">
                    <Clock className="h-3 w-3" />
                    {eng.duration}
                  </span>
                </div>

                <h4
                  className="text-3xl font-medium tracking-tight text-foreground"
                  style={{ fontFamily: "var(--font-bebas-neue)" }}
                >
                  {eng.name}
                </h4>
                <p className="mt-1 text-sm font-medium text-primary">
                  {eng.outcome}
                </p>

                <div className="mt-6 space-y-2.5">
                  <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    What is Included:
                  </p>
                  {eng.includes.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-foreground/85">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-foreground/10">
                <a
                  href={SCOPING_HREF}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-foreground/15 bg-background py-3 text-xs font-semibold text-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary"
                >
                  <span>Select Model</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

