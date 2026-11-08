"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import { disciplines, SCOPING_HREF } from "../content";
import { CONTAINER, Eyebrow, Reveal, Shell } from "../atoms";
import { cn } from "@/lib/utils";

/**
 * I — Accordion Stack.
 * Compact, expandable discipline rows. One open at a time.
 */
export default function AccordionStack() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Shell>
      <div className={cn(CONTAINER, "py-16 lg:py-24")}>
        <Reveal>
          <Eyebrow>Services</Eyebrow>
          <h2 className="mt-5 font-serif text-[clamp(3rem,5.5vw,5rem)] italic leading-[0.98] tracking-tight">
            Tap a discipline
          </h2>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <div className="border-t border-foreground/10">
            {disciplines.map((d, i) => {
              const isOpen = open === i;
              return (
                <div key={d.num} className="border-b border-foreground/10">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer items-center justify-between gap-6 py-7 text-left"
                  >
                    <span className="flex items-baseline gap-5">
                      <span
                        className={cn(
                          "font-mono text-xs font-semibold tracking-[0.3em] transition-colors",
                          isOpen ? "text-orange-600 dark:text-primary" : "text-muted-foreground",
                        )}
                      >
                        {d.num}
                      </span>
                      <span className="font-heading text-[clamp(1.75rem,4vw,3rem)] uppercase leading-none tracking-[0.02em]">
                        {d.name}
                      </span>
                    </span>
                    <span
                      aria-hidden
                      className={cn(
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                        isOpen
                          ? "rotate-45 border-primary bg-primary text-background"
                          : "border-foreground/15 text-muted-foreground",
                      )}
                    >
                      <Plus className="h-5 w-5" />
                    </span>
                  </button>
                  <div
                    aria-hidden={!isOpen}
                    className={cn(
                      "grid transition-[grid-template-rows] duration-300 ease-out",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="grid gap-8 pb-9 sm:grid-cols-2">
                        <div>
                          <p className="text-base text-muted-foreground">{d.promise}</p>
                          <Link
                            href={`/work/${d.proof.slug}`}
                            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold underline decoration-primary decoration-2 underline-offset-4 transition-colors hover:text-orange-700 dark:hover:text-primary"
                          >
                            Proof: {d.proof.title}
                            <ArrowUpRight className="h-4 w-4" aria-hidden />
                          </Link>
                        </div>
                        <ul>
                          {d.capabilities.map((cap) => (
                            <li
                              key={cap}
                              className="border-t border-foreground/10 py-2.5 text-[15px] font-medium"
                            >
                              {cap}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Not sure which you need?{" "}
            <a
              href={SCOPING_HREF}
              className="font-semibold text-foreground underline decoration-primary decoration-2 underline-offset-4 transition-colors hover:text-orange-700 dark:hover:text-primary"
            >
              Start with a 20-min scoping call.
            </a>
          </p>
        </Reveal>
      </div>
    </Shell>
  );
}
