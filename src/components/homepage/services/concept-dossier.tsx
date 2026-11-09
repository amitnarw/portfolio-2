"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";
import { disciplines, SCOPING_HREF, guarantee } from "./content";
import { cn } from "@/lib/utils";

export default function ConceptDossier() {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="w-full">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Sticky Left Column */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Direct Founder Engineering
            </div>

            <h3 className="font-serif text-[clamp(2.5rem,4.5vw,4.25rem)] italic leading-[0.98] tracking-tight text-foreground">
              Three disciplines. <br />
              <span className="text-primary not-italic font-heading tracking-wide uppercase">
                One senior owner.
              </span>
            </h3>

            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
              No agency overhead, no fragmented teams that never speak. From architecture to pixel-level motion and AI model routing, every line is crafted end-to-end.
            </p>

            <div className="pt-2">
              <a
                href={SCOPING_HREF}
                className="group inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 active:scale-95"
              >
                <span>Book a 20-min scoping call</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>

            <div className="rounded-2xl border border-foreground/10 bg-accent/30 p-5 backdrop-blur-sm dark:bg-card/40">
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                The Build Guarantee
              </p>
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                {guarantee}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Dossier Rows */}
        <div className="lg:col-span-7 space-y-4">
          {disciplines.map((d, index) => {
            const isOpen = activeTab === index;
            return (
              <div
                key={d.num}
                className={cn(
                  "group relative overflow-hidden rounded-3xl border transition-all duration-300",
                  isOpen
                    ? "border-primary/40 bg-accent/40 shadow-xl dark:bg-card/70"
                    : "border-foreground/10 bg-background/50 hover:border-foreground/20 hover:bg-accent/20 dark:bg-card/30"
                )}
              >
                {/* Header row / trigger */}
                <button
                  type="button"
                  onClick={() => setActiveTab(isOpen ? -1 : index)}
                  className="flex w-full cursor-pointer items-center justify-between p-6 sm:p-8 text-left"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span className="font-mono text-sm font-bold tracking-widest text-primary">
                      {d.num}
                    </span>
                    <div>
                      <h4
                        className="text-2xl sm:text-4xl font-medium tracking-tight text-foreground"
                        style={{ fontFamily: "var(--font-bebas-neue)" }}
                      >
                        {d.name}
                      </h4>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {d.promise}
                      </p>
                    </div>
                  </div>

                  <div
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-transform duration-300",
                      isOpen
                        ? "rotate-90 border-primary bg-primary text-primary-foreground"
                        : "border-foreground/20 text-muted-foreground group-hover:border-foreground/40"
                    )}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </button>

                {/* Expanded Drawer Details */}
                {isOpen && (
                  <div className="border-t border-foreground/10 px-6 sm:px-8 pb-8 pt-6 animate-in fade-in-50 slide-in-from-top-2 duration-300">
                    <div className="space-y-6">
                      <div>
                        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                          Core Capabilities
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {d.capabilities.map((cap) => (
                            <span
                              key={cap}
                              className="rounded-full border border-foreground/10 bg-background/80 px-3.5 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                            >
                              {cap}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Deliverables checklist */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        <div className="flex items-center gap-2.5 text-xs text-foreground/80">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                          <span>Production-grade TypeScript & tests</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-xs text-foreground/80">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                          <span>Sub-second TTFB & Core Web Vitals</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-xs text-foreground/80">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                          <span>Direct Slack / Discord communication</span>
                        </div>
                        <div className="flex items-center gap-2.5 text-xs text-foreground/80">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                          <span>Weekly interactive staging previews</span>
                        </div>
                      </div>

                      {/* Proof Anchor */}
                      <div className="flex items-center justify-between rounded-xl border border-primary/20 bg-primary/5 p-4">
                        <div>
                          <p className="text-xs uppercase tracking-wider text-muted-foreground">
                            Proof of Delivery
                          </p>
                          <p className="text-sm font-semibold text-foreground">
                            {d.proof.title}{" "}
                            <span className="font-normal text-muted-foreground">
                              — {d.proof.result}
                            </span>
                          </p>
                        </div>
                        <Link
                          href={`/work/${d.proof.slug}`}
                          className="group/link inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline underline-offset-4"
                        >
                          <span>View Project</span>
                          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

