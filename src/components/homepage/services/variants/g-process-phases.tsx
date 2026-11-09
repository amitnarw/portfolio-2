import { ArrowUpRight } from "lucide-react";
import { phases, SCOPING_HREF } from "../content";
import { CONTAINER, Eyebrow, Reveal, Shell } from "../atoms";
import { cn } from "@/lib/utils";

/**
 * G , Process Phases.
 * Sells the method: 4 steps, each with a tangible deliverable.
 */
export default function ProcessPhases() {
  return (
    <Shell>
      <div className={cn(CONTAINER, "py-16 lg:py-24")}>
        <Reveal>
          <Eyebrow>How we work</Eyebrow>
          <h2 className="mt-5 max-w-3xl font-serif text-[clamp(3rem,5.5vw,5rem)] italic leading-[0.98] tracking-tight">
            No black boxes. You always know what&apos;s next.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px border border-foreground/10 bg-foreground/10 sm:grid-cols-2 lg:grid-cols-4">
          {phases.map((p, i) => (
            <Reveal key={p.num} delay={i * 80} className="bg-[#FFFBF1] dark:bg-[#0A0A0C]">
              <article className="flex h-full flex-col p-7">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-heading text-4xl leading-none text-orange-600 dark:text-primary">
                    {p.num}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {p.timeframe}
                  </span>
                </div>
                <h3 className="mt-5 font-heading text-3xl uppercase leading-none tracking-[0.02em]">
                  {p.name}
                </h3>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
                <p className="mt-7 border-t border-foreground/10 pt-4 text-sm">
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    You get:
                  </span>{" "}
                  <span className="font-semibold">{p.deliverable}</span>
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              Demos every week, on a staging link. No surprises at launch.
            </p>
            <a
              href={SCOPING_HREF}
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em]"
            >
              <span className="border-b-2 border-primary pb-1 transition-colors group-hover:text-orange-700 dark:group-hover:text-primary">
                Start with a scoping call
              </span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
            </a>
          </div>
        </Reveal>
      </div>
    </Shell>
  );
}
