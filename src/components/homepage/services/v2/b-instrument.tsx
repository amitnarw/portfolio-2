import Image from "next/image";
import Link from "next/link";
import { caseStudies, disciplines, guarantee, SCOPING_HREF } from "../content";
import {
  LabSection,
  Reveal,
  SectionFooter,
  SectionHeader,
} from "./atoms";
import { CONTAINER, HEADER_LEAD } from "./container";
import { cn } from "@/lib/utils";

/**
 * B , Instrument Offerings.
 * Three stacked full-width blocks. Each pairs the discipline with one
 * real case-study image, client name, outcome, and a "View case study"
 * link. Capabilities sit in a two-column grid beside the image.
 */
export default function Instrument({ id }: { id: string }) {
  return (
    <LabSection id={id} label="Services , Instrument style">
      <div className={cn(CONTAINER, "py-16 lg:py-24")}>
        <SectionHeader lead={HEADER_LEAD} />

        <div className="mt-14 lg:mt-20">
          {caseStudies.map((cs) => {
            const discipline =
              disciplines.find((d) => d.name === cs.discipline) ?? disciplines[0];

            return (
              <Reveal key={cs.slug}>
                <article className="grid gap-10 border-t border-foreground/10 py-12 first:border-t-0 first:pt-0 last:pb-0 lg:grid-cols-12 lg:gap-14 lg:py-16">
                  <div className="lg:col-span-7">
                    <h3 className="text-[28px] font-semibold leading-tight tracking-[-0.02em] lg:text-[32px]">
                      {discipline.name}
                    </h3>
                    <p className="mt-3 max-w-lg text-base leading-relaxed text-muted-foreground">
                      {discipline.promise}
                    </p>
                    <ul className="mt-9 grid gap-x-10 gap-y-4 sm:grid-cols-2">
                      {discipline.capabilities.map((cap) => (
                        <li
                          key={cap}
                          className="text-[15px] font-medium leading-snug text-foreground/85"
                        >
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-5">
                    <Link
                      href={`/work/${cs.slug}`}
                      className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                    >
                      <div className="overflow-hidden rounded-2xl">
                        <Image
                          src={cs.image}
                          alt={cs.imageAlt}
                          width={960}
                          height={600}
                          className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                      <span className="mt-5 block">
                        <span className="block text-[15px] font-semibold">
                          {cs.title}
                        </span>
                        <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                          {cs.result}
                        </span>
                        <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground underline decoration-primary decoration-2 underline-offset-4 transition-colors group-hover:text-orange-700 dark:group-hover:text-primary">
                          View case study
                          <span aria-hidden className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                            →
                          </span>
                        </span>
                      </span>
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <SectionFooter guarantee={guarantee} href={SCOPING_HREF} />
      </div>
    </LabSection>
  );
}
