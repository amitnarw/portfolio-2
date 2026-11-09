import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { disciplines, SCOPING_HREF } from "../content";
import { CONTAINER, Eyebrow, Reveal, Shell } from "../atoms";
import { cn } from "@/lib/utils";

/**
 * E , Split Sticky Statement (Glean + Deadwater).
 * Sticky statement + CTA left; disciplines scroll right.
 * Sticky disabled on mobile where it would crush content.
 */
export default function SplitSticky() {
  return (
    <Shell>
      <div className={cn(CONTAINER, "py-16 lg:py-24")}>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <Eyebrow>Services</Eyebrow>
                <h2 className="mt-5 font-serif text-[clamp(3rem,5vw,4.75rem)] italic leading-[0.98] tracking-tight">
                  Three disciplines. One owner.
                </h2>
                <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
                  No handoffs, no &ldquo;design team&rdquo; and
                  &ldquo;dev team&rdquo; who never met. Everything here is
                  built end to end.
                </p>
                <a
                  href={SCOPING_HREF}
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em]"
                >
                  <span className="border-b-2 border-primary pb-1 transition-colors group-hover:text-orange-700 dark:group-hover:text-primary">
                    Book a 20-min scoping call
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                </a>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-7">
            {disciplines.map((d, i) => (
              <Reveal key={d.num} delay={i * 80}>
                <article className="border-t border-foreground/10 py-10 first:border-t-0 first:pt-0 last:pb-0 lg:py-12">
                  <p className="font-mono text-xs font-semibold tracking-[0.3em] text-orange-600 dark:text-primary">
                    {d.num}
                  </p>
                  <h3 className="mt-3 font-heading text-[clamp(2.5rem,4vw,3.75rem)] uppercase leading-[0.9] tracking-[0.02em]">
                    {d.name}
                  </h3>
                  <p className="mt-3 text-base text-muted-foreground">
                    {d.promise}
                  </p>
                  <ul className="mt-6 grid gap-x-8 sm:grid-cols-2">
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
                    Proof: {d.proof.title} , {d.proof.result}
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Shell>
  );
}
