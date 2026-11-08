import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { caseStudies, SCOPING_HREF } from "../content";
import { CONTAINER, Eyebrow, Reveal, Shell } from "../atoms";
import { cn } from "@/lib/utils";

/**
 * D — Staggered Proof List (Harsh Shah + Bellevoire).
 * Indented rows, project image at the seam, serif name + outcome.
 * Alternating offsets create asymmetry without clutter.
 */
const OFFSETS = ["", "lg:ml-[8%]", "lg:ml-[16%]"];

export default function ProofStaggered() {
  return (
    <Shell>
      <div className={cn(CONTAINER, "py-16 lg:py-24")}>
        <Reveal>
          <Eyebrow>Services</Eyebrow>
          <h2 className="mt-5 font-serif text-[clamp(3rem,5.5vw,5rem)] italic leading-[0.98] tracking-tight">
            Proof, not promises
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
            Each discipline below is anchored to a product already in the wild.
          </p>
        </Reveal>

        <div className="mt-14 space-y-12">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.slug} delay={i * 90}>
              <article className={cn("grid gap-6 lg:grid-cols-12 lg:items-center", OFFSETS[i])}>
                <Link href={`/work/${cs.slug}`} className="group block lg:col-span-5">
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
                <div className="lg:col-span-7 lg:pl-6">
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")} — {cs.discipline}
                  </p>
                  <h3 className="mt-3 font-serif text-[clamp(1.75rem,3vw,2.5rem)] italic leading-tight">
                    {cs.title}
                  </h3>
                  <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-muted-foreground">
                    {cs.built}
                  </p>
                  <p className="mt-2 text-sm font-semibold">
                    Result: {cs.result}
                  </p>
                  <Link
                    href={`/work/${cs.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold underline decoration-primary decoration-2 underline-offset-4 transition-colors hover:text-orange-700 dark:hover:text-primary"
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
          <p className="mt-14 text-center text-sm text-muted-foreground">
            Want a product like these?{" "}
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
