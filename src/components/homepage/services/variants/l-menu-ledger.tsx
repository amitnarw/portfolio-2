import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { disciplines, guarantee, SCOPING_HREF } from "../content";
import { CONTAINER, Eyebrow, Reveal, Shell } from "../atoms";
import { cn } from "@/lib/utils";

/**
 * L — Menu Ledger.
 * Centered restaurant-menu treatment with dotted leaders.
 */
export default function MenuLedger() {
  return (
    <Shell>
      <div className={cn(CONTAINER, "py-16 lg:py-24")}>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow center>Services</Eyebrow>
          <h2 className="mt-5 font-serif text-[clamp(3rem,6vw,5.5rem)] italic leading-[0.95] tracking-tight">
            The menu
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Three disciplines, in the order engineers actually use them.
          </p>
        </Reveal>

        <Reveal delay={120} className="mx-auto mt-14 max-w-3xl">
          <ul className="space-y-9">
            {disciplines.map((d) => (
              <li key={d.num}>
                <Link
                  href={`/work/${d.proof.slug}`}
                  className="group flex items-baseline gap-4"
                >
                  <span className="font-mono text-xs font-semibold tracking-[0.3em] text-muted-foreground transition-colors group-hover:text-orange-600 dark:group-hover:text-primary">
                    {d.num}
                  </span>
                  <span className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] italic leading-tight transition-colors group-hover:text-orange-700 dark:group-hover:text-primary">
                    {d.name}
                  </span>
                  <span
                    aria-hidden
                    className="mx-1 hidden flex-1 border-b-2 border-dotted border-foreground/25 sm:block"
                  />
                  <span className="hidden text-right text-sm font-medium text-muted-foreground sm:block">
                    {d.capabilities.slice(0, 3).join(" · ")}
                  </span>
                  <ArrowUpRight
                    aria-hidden
                    className="h-4 w-4 shrink-0 self-center text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-orange-600 dark:group-hover:text-primary"
                  />
                </Link>
                <p className="mt-2 pl-12 text-sm leading-relaxed text-muted-foreground sm:pl-14">
                  {d.promise}{" "}
                  <span className="text-foreground/70">
                    {d.capabilities.slice(3).join(" · ")}.
                  </span>{" "}
                  <span className="font-semibold text-foreground">
                    Proof: {d.proof.title}
                  </span>
                  .
                </p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={200} className="mx-auto mt-14 max-w-2xl border-t border-foreground/10 pt-8 text-center">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {guarantee}
          </p>
          <a
            href={SCOPING_HREF}
            className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em]"
          >
            <span className="border-b-2 border-primary pb-1 transition-colors group-hover:text-orange-700 dark:group-hover:text-primary">
              Start a project
            </span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
          </a>
        </Reveal>
      </div>
    </Shell>
  );
}
