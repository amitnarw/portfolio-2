import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { disciplines, SCOPING_HREF } from "../content";
import { CONTAINER, Eyebrow, Reveal, Shell } from "../atoms";
import { cn } from "@/lib/utils";

/**
 * B — Discipline Index / Poster (Last Studio + Debut).
 * Giant Bebas rows with capability line. Hairlines only.
 */
export default function DisciplineIndex() {
  return (
    <Shell>
      <div className={cn(CONTAINER, "py-16 lg:py-24")}>
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Services</Eyebrow>
              <h2 className="mt-5 font-heading text-[clamp(3.5rem,8vw,7rem)] uppercase leading-[0.85] tracking-tight">
                My Expertise
              </h2>
            </div>
            <p className="max-w-xs pb-2 text-sm leading-relaxed text-muted-foreground">
              Three disciplines. Eighteen capabilities. One person to call.
            </p>
          </div>
        </Reveal>

        <div className="mt-12">
          {disciplines.map((d, i) => (
            <Reveal key={d.num} delay={i * 80}>
              <Link
                href={`/work/${d.proof.slug}`}
                className="group grid gap-4 border-t border-foreground/10 py-9 transition-colors duration-300 hover:bg-foreground/[0.02] last:border-b lg:grid-cols-12 lg:items-baseline"
              >
                <span className="font-mono text-xs font-semibold tracking-[0.3em] text-muted-foreground transition-colors group-hover:text-orange-600 dark:group-hover:text-primary lg:col-span-1">
                  {d.num}
                </span>
                <span className="font-heading text-[clamp(2.75rem,6vw,5.5rem)] uppercase leading-[0.88] tracking-tight lg:col-span-6">
                  {d.name}
                </span>
                <span className="lg:col-span-4">
                  <span className="block text-sm leading-relaxed text-muted-foreground">
                    {d.capabilities.join(" · ")}
                  </span>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold">
                    Proof: {d.proof.title}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </span>
                <span aria-hidden className="hidden justify-end lg:col-span-1 lg:flex">
                  <ArrowUpRight className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-orange-600 dark:group-hover:text-primary" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
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
