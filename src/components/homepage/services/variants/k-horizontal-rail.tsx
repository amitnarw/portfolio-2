"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { disciplines, SCOPING_HREF } from "../content";
import { CONTAINER, Eyebrow, Reveal, Shell } from "../atoms";
import { cn } from "@/lib/utils";

/**
 * K , Horizontal Rail.
 * Scroll-snap panels with visible arrows + counter. Keyboard reachable
 * because panels are regular DOM in focus order.
 */
export default function HorizontalRail() {
  const railRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const onScroll = () => {
      const step = rail.querySelector<HTMLElement>("[data-panel]")?.offsetWidth ?? 1;
      const gap = 24;
      const next = Math.round(rail.scrollLeft / (step + gap));
      setIndex(Math.min(next, disciplines.length - 1));
    };
    rail.addEventListener("scroll", onScroll, { passive: true });
    return () => rail.removeEventListener("scroll", onScroll);
  }, []);

  const go = (direction: 1 | -1) => {
    const next = Math.min(
      Math.max(index + direction, 0),
      disciplines.length - 1,
    );
    const panel = railRef.current?.querySelectorAll<HTMLElement>("[data-panel]")[next];
    panel?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  };

  return (
    <Shell>
      <div className={cn(CONTAINER, "py-16 lg:py-24")}>
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Services</Eyebrow>
              <h2 className="mt-5 font-serif text-[clamp(3rem,5.5vw,5rem)] italic leading-[0.98] tracking-tight">
                Swipe the disciplines
              </h2>
            </div>
            <div className="flex items-center gap-3 pb-1">
              <span className="font-mono text-xs tracking-[0.25em] text-muted-foreground">
                {String(index + 1).padStart(2, "0")} / {String(disciplines.length).padStart(2, "0")}
              </span>
              <button
                type="button"
                onClick={() => go(-1)}
                disabled={index === 0}
                aria-label="Previous discipline"
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-foreground/15 transition-colors hover:border-primary disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ArrowLeft className="h-5 w-5" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                disabled={index === disciplines.length - 1}
                aria-label="Next discipline"
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-foreground/15 transition-colors hover:border-primary disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ArrowUpRight className="h-5 w-5 rotate-180" aria-hidden />
              </button>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={120}>
        <div
          ref={railRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 lg:px-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {disciplines.map((d) => (
            <article
              key={d.num}
              data-panel
              className="w-[85%] shrink-0 snap-start border-t-2 border-foreground/15 pt-8 sm:w-[60%] lg:w-[38%]"
            >
              <p className="font-heading text-[clamp(4rem,7vw,6rem)] leading-none text-orange-600 dark:text-primary">
                {d.num}
              </p>
              <h3 className="mt-2 font-heading text-[clamp(2rem,3vw,2.75rem)] uppercase leading-[0.95] tracking-[0.02em]">
                {d.name}
              </h3>
              <p className="mt-3 text-base text-muted-foreground">{d.promise}</p>
              <ul className="mt-6">
                {d.capabilities.map((cap) => (
                  <li
                    key={cap}
                    className="border-t border-foreground/10 py-3 text-[15px] font-medium"
                  >
                    {cap}
                  </li>
                ))}
              </ul>
              <Link
                href={`/work/${d.proof.slug}`}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold underline decoration-primary decoration-2 underline-offset-4 transition-colors hover:text-orange-700 dark:hover:text-primary"
              >
                Proof: {d.proof.title}
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </article>
          ))}

          <div className="flex w-[60%] shrink-0 snap-start items-center justify-center border-t-2 border-primary/40 pt-8 lg:w-[30%]">
            <a
              href={SCOPING_HREF}
              className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em]"
            >
              <span className="border-b-2 border-primary pb-1 transition-colors group-hover:text-orange-700 dark:group-hover:text-primary">
                Book a scoping call
              </span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
            </a>
          </div>
        </div>
      </Reveal>
    </Shell>
  );
}
