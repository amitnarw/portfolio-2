"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { disciplines, SCOPING_HREF } from "../content";
import { CONTAINER, Eyebrow, Reveal, Shell } from "../atoms";
import { cn } from "@/lib/utils";

/**
 * J , Sticky Scroll Chapters.
 * Sticky scrollspy index left; one discipline panel per scroll beat right.
 */
export default function ScrollChapters() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = refs.current.indexOf(
              entry.target as HTMLElement,
            );
            if (index !== -1) setActive(index);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" },
    );
    refs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (index: number) => {
    refs.current[index]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Shell>
      <div className={cn(CONTAINER, "py-16 lg:py-24")}>
        <Reveal>
          <Eyebrow>Services</Eyebrow>
          <h2 className="mt-5 font-serif text-[clamp(3rem,5.5vw,5rem)] italic leading-[0.98] tracking-tight">
            Read it in order
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <ol className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
                  {disciplines.map((d, i) => (
                    <li key={d.num}>
                      <button
                        type="button"
                        onClick={() => scrollTo(i)}
                        aria-current={active === i ? "true" : undefined}
                        className={cn(
                          "flex cursor-pointer items-center gap-3 whitespace-nowrap px-4 py-2.5 text-left text-sm font-semibold transition-colors lg:border-l-2 lg:px-5",
                          active === i
                            ? "rounded-full bg-primary/10 text-foreground lg:rounded-none lg:border-primary lg:bg-transparent"
                            : "text-muted-foreground hover:text-foreground lg:border-foreground/10",
                        )}
                      >
                        <span
                          aria-hidden
                          className={cn(
                            "h-2 w-2 shrink-0 rounded-full transition-colors",
                            active === i ? "bg-primary" : "bg-foreground/20",
                          )}
                        />
                        {d.num} , {d.name}
                      </button>
                    </li>
                  ))}
                </ol>
                <a
                  href={SCOPING_HREF}
                  className="group mt-8 hidden items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] lg:inline-flex"
                >
                  <span className="border-b-2 border-primary pb-1 transition-colors group-hover:text-orange-700 dark:group-hover:text-primary">
                    Book a scoping call
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                </a>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-8">
            {disciplines.map((d, i) => (
              <article
                key={d.num}
                ref={(el) => {
                  refs.current[i] = el;
                }}
                data-index={i}
                className="scroll-mt-32 border-t border-foreground/10 py-12 first:border-t-0 first:pt-0 lg:scroll-mt-28"
              >
                <p className="font-mono text-xs font-semibold tracking-[0.3em] text-orange-600 dark:text-primary">
                  {d.num} / {String(disciplines.length).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-heading text-[clamp(2.75rem,5vw,4.5rem)] uppercase leading-[0.9] tracking-[0.02em]">
                  {d.name}
                </h3>
                <p className="mt-3 font-serif text-xl italic text-muted-foreground">
                  {d.promise}
                </p>
                <ul className="mt-8 grid gap-x-8 sm:grid-cols-2">
                  {d.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="border-t border-foreground/10 py-4 text-[15px] font-medium"
                    >
                      {cap}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/work/${d.proof.slug}`}
                  className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold underline decoration-primary decoration-2 underline-offset-4 transition-colors hover:text-orange-700 dark:hover:text-primary"
                >
                  Proof: {d.proof.title} , {d.proof.result}
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              </article>
            ))}

            <a
              href={SCOPING_HREF}
              className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] lg:hidden"
            >
              <span className="border-b-2 border-primary pb-1 transition-colors group-hover:text-orange-700 dark:group-hover:text-primary">
                Book a scoping call
              </span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </Shell>
  );
}
