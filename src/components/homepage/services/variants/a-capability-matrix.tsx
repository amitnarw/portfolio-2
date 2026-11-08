import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { disciplines, guarantee, SCOPING_HREF } from "../content";
import { CONTAINER, Eyebrow, Reveal, Shell } from "../atoms";
import { cn } from "@/lib/utils";

/**
 * A — Capability Matrix (Atlas + Airborne + Deadwater system).
 * 3 disciplines × capability ledger, huge serif title, hairlines only.
 */
export default function CapabilityMatrix() {
  return (
    <Shell>
      <div className={cn(CONTAINER, "py-16 lg:py-24")}>
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <Eyebrow>Services — 03</Eyebrow>
            <h2 className="mt-5 font-serif text-[clamp(3.5rem,6vw,5.5rem)] italic leading-[0.95] tracking-tight">
              What I actually do
            </h2>
          </Reveal>
          <Reveal delay={90} className="lg:col-span-5 lg:pt-16">
            <p className="max-w-md text-lg leading-snug text-muted-foreground">
              I build the whole product — the interface, the AI, and the
              infrastructure under it. Three disciplines, one owner.
            </p>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              3 disciplines · 18 capabilities
            </p>
          </Reveal>
        </div>

        <div className="mt-14">
          {disciplines.map((d, i) => (
            <Reveal key={d.num} delay={i * 80}>
              <div className="group grid gap-8 border-t border-foreground/10 py-10 transition-colors duration-300 hover:bg-foreground/[0.02] lg:grid-cols-12 lg:py-12">
                <div className="lg:col-span-5 lg:pr-10">
                  <p className="font-mono text-xs font-semibold tracking-[0.3em] text-muted-foreground transition-colors group-hover:text-orange-600 dark:group-hover:text-primary">
                    {d.num}
                  </p>
                  <h3 className="mt-3 font-heading text-[clamp(2.5rem,4.5vw,4rem)] uppercase leading-[0.9] tracking-[0.02em]">
                    {d.name}
                  </h3>
                  <p className="mt-3 text-base text-muted-foreground">
                    {d.promise}
                  </p>
                  <Link
                    href={`/work/${d.proof.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground underline decoration-primary decoration-2 underline-offset-4 transition-colors hover:text-orange-700 dark:hover:text-primary"
                  >
                    Proof: {d.proof.title}
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
                <ul className="grid gap-x-8 sm:grid-cols-2 lg:col-span-7">
                  {d.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="border-t border-foreground/10 py-3.5 text-[15px] font-medium"
                    >
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={180}>
          <div className="flex flex-col gap-4 border-t border-foreground/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Not sure which you need? {guarantee}
            </p>
            <a
              href={SCOPING_HREF}
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em]"
            >
              <span className="border-b-2 border-primary pb-1 transition-colors group-hover:text-orange-700 dark:group-hover:text-primary">
                Book a 20-min scoping call
              </span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
            </a>
          </div>
        </Reveal>
      </div>
    </Shell>
  );
}
