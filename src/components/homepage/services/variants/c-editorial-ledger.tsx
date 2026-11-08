import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { disciplines, guarantee, SCOPING_HREF } from "../content";
import { CONTAINER, Eyebrow, Reveal, Shell } from "../atoms";
import { cn } from "@/lib/utils";

/**
 * C — Editorial Ledger (PostGeneric + Holland Design).
 * One mixed serif/sans statement, then serif rows with outcome right.
 */
export default function EditorialLedger() {
  return (
    <Shell>
      <div className={cn(CONTAINER, "py-16 lg:py-24")}>
        <Reveal className="max-w-3xl">
          <Eyebrow>Services</Eyebrow>
          <p className="mt-6 font-serif text-[clamp(2rem,4vw,3.5rem)] italic leading-[1.05] tracking-tight">
            I build the whole product —{" "}
            <span className="not-italic">the interface, the AI,</span>{" "}
            <span className="not-italic">and the infrastructure under it.</span>
          </p>
        </Reveal>

        <div className="mt-14">
          {disciplines.map((d, i) => (
            <Reveal key={d.num} delay={i * 70}>
              <Link
                href={`/work/${d.proof.slug}`}
                className="group grid gap-3 border-t border-foreground/10 py-8 transition-colors duration-300 hover:bg-foreground/[0.02] last:border-b lg:grid-cols-12 lg:items-baseline"
              >
                <span className="font-serif text-3xl italic lg:col-span-5 lg:text-4xl">
                  {d.name}
                </span>
                <span className="text-[15px] leading-relaxed text-muted-foreground lg:col-span-5">
                  {d.promise} {d.capabilities.join(" · ")}.
                </span>
                <span className="flex items-center gap-1.5 text-sm font-semibold lg:col-span-2 lg:justify-end">
                  {d.proof.title}
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-orange-600 dark:group-hover:text-primary" aria-hidden />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              {guarantee}
            </p>
            <a
              href={SCOPING_HREF}
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em]"
            >
              <span className="border-b-2 border-primary pb-1 transition-colors group-hover:text-orange-700 dark:group-hover:text-primary">
                Start a project
              </span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
            </a>
          </div>
        </Reveal>
      </div>
    </Shell>
  );
}
