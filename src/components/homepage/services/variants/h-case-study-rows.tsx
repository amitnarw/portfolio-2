import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { caseStudies, SCOPING_HREF } from "../content";
import { CONTAINER, Eyebrow, Reveal, Shell } from "../atoms";
import { cn } from "@/lib/utils";

/**
 * H — Case-Study Rows.
 * Alternating image rows; problem → built → result. Proof-led.
 */
export default function CaseStudyRows() {
  return (
    <Shell>
      <div className={cn(CONTAINER, "py-16 lg:py-24")}>
        <Reveal>
          <Eyebrow>Services</Eyebrow>
          <h2 className="mt-5 font-serif text-[clamp(3rem,5.5vw,5rem)] italic leading-[0.98] tracking-tight">
            Skills, with receipts
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
            Every discipline below already shipped as a real product. Here is
            what each one solved.
          </p>
        </Reveal>

        <div className="mt-14">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.slug} delay={i * 80}>
              <article className="grid items-center gap-8 border-t border-foreground/10 py-12 first:border-t-0 lg:grid-cols-12">
                <Link
                  href={`/work/${cs.slug}`}
                  className={cn(
                    "group block lg:col-span-5",
                    i % 2 === 1 && "lg:order-2",
                  )}
                >
                  <div className="overflow-hidden rounded-2xl">
                    <Image
                      src={cs.image}
                      alt={cs.imageAlt}
                      width={960}
                      height={600}
                      className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                </Link>
                <div className={cn("lg:col-span-7", i % 2 === 1 ? "lg:order-1 lg:pr-6" : "lg:pl-6")}>
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    {cs.discipline}
                  </p>
                  <h3 className="mt-3 font-serif text-[clamp(1.75rem,3vw,2.5rem)] italic leading-tight">
                    {cs.title}
                  </h3>
                  <dl className="mt-6 space-y-4">
                    <div className="grid gap-1 sm:grid-cols-[110px_1fr] sm:gap-4">
                      <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                        Problem
                      </dt>
                      <dd className="text-[15px] leading-relaxed">{cs.problem}</dd>
                    </div>
                    <div className="grid gap-1 sm:grid-cols-[110px_1fr] sm:gap-4">
                      <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                        Built
                      </dt>
                      <dd className="text-[15px] leading-relaxed">{cs.built}</dd>
                    </div>
                    <div className="grid gap-1 sm:grid-cols-[110px_1fr] sm:gap-4">
                      <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                        Result
                      </dt>
                      <dd className="text-[15px] font-semibold text-orange-700 dark:text-primary">
                        {cs.result}
                      </dd>
                    </div>
                  </dl>
                  <Link
                    href={`/work/${cs.slug}`}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold underline decoration-primary decoration-2 underline-offset-4 transition-colors hover:text-orange-700 dark:hover:text-primary"
                  >
                    Read the case study
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Your product could be the next row.{" "}
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
