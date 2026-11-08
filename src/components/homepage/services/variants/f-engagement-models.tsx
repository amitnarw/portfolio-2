import { ArrowUpRight } from "lucide-react";
import { engagements, SCOPING_HREF } from "../content";
import { CONTAINER, Eyebrow, Reveal, Shell } from "../atoms";
import { cn } from "@/lib/utils";

/**
 * F — Engagement Models.
 * Sells three ways to hire, not skill lists.
 */
export default function EngagementModels() {
  return (
    <Shell>
      <div className={cn(CONTAINER, "py-16 lg:py-24")}>
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Eyebrow>Ways to work</Eyebrow>
              <h2 className="mt-5 font-serif text-[clamp(3rem,5.5vw,5rem)] italic leading-[0.98] tracking-tight">
                Three ways in.<br />Same standard.
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground lg:col-span-5 lg:pb-2">
              Pick the shape that fits your stage. Every engagement includes
              performance, accessibility, and monitoring after launch.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-px border border-foreground/10 bg-foreground/10 lg:grid-cols-3">
          {engagements.map((e, i) => (
            <Reveal key={e.num} delay={i * 80} className="bg-[#FFFBF1] dark:bg-[#0A0A0C]">
              <article className="flex h-full flex-col p-7 lg:p-9">
                <p className="font-mono text-xs font-semibold tracking-[0.3em] text-muted-foreground">
                  {e.num}
                </p>
                <h3 className="mt-3 font-heading text-[clamp(2.25rem,3.5vw,3.25rem)] uppercase leading-[0.9] tracking-[0.02em]">
                  {e.name}
                </h3>
                <p className="font-serif text-xl italic text-muted-foreground">
                  {e.duration}
                </p>
                <ul className="mt-7 flex-1">
                  {e.includes.map((item) => (
                    <li
                      key={item}
                      className="border-t border-foreground/10 py-3.5 text-[15px] font-medium"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm leading-relaxed">
                  <span className="font-semibold text-orange-700 dark:text-primary">
                    Outcome:
                  </span>{" "}
                  {e.outcome}
                </p>
                <a
                  href={SCOPING_HREF}
                  className="group mt-7 inline-flex items-center gap-2 border-t border-foreground/10 pt-6 text-sm font-semibold uppercase tracking-[0.2em]"
                >
                  <span className="border-b-2 border-primary pb-1 transition-colors group-hover:text-orange-700 dark:group-hover:text-primary">
                    Start here
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Shell>
  );
}
