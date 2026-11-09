import Link from "next/link";
import { disciplines, guarantee, SCOPING_HREF } from "../content";
import {
  LabSection,
  Reveal,
  SectionFooter,
  SectionHeader,
} from "./atoms";
import { CONTAINER, HEADER_LEAD } from "./container";
import { cn } from "@/lib/utils";

/**
 * C , Basement What We Do.
 * The flattest of the three. Name, one paragraph, four short bullets,
 * one inline proof link. Maximum air, minimum ink.
 */
export default function Basement({ id }: { id: string }) {
  return (
    <LabSection id={id} label="Services , Basement style">
      <div className={cn(CONTAINER, "py-16 lg:py-24")}>
        <SectionHeader lead={HEADER_LEAD} />

        <div className="mt-14 space-y-16 lg:mt-20 lg:space-y-20">
          {disciplines.map((d, i) => (
            <Reveal key={d.name} delay={i * 80}>
              <article className="grid gap-8 lg:grid-cols-12 lg:gap-14">
                <div className="lg:col-span-7">
                  <h3 className="text-[26px] font-semibold leading-snug tracking-[-0.015em] lg:text-[28px]">
                    {d.name}
                  </h3>
                  <p className="mt-3 max-w-xl text-[17px] leading-relaxed text-foreground/70">
                    {d.promise} From scope to launch, one senior pair of hands
                    covers interface, logic, and deploy , no handoffs, no
                    guesswork in production.
                  </p>
                  <ul className="mt-8 grid gap-x-10 gap-y-3.5 sm:grid-cols-2">
                    {d.capabilities.slice(0, 4).map((cap) => (
                      <li
                        key={cap}
                        className="flex items-baseline gap-3 text-[15px] font-medium leading-snug text-foreground/85"
                      >
                        <span aria-hidden className="h-[2px] w-4 shrink-0 translate-y-[-3px] bg-primary" />
                        {cap}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-8 text-sm text-muted-foreground">
                    Built{" "}
                    <Link
                      href={`/work/${d.proof.slug}`}
                      className="inline-flex items-center gap-1.5 font-semibold text-foreground underline decoration-primary decoration-2 underline-offset-4 transition-colors hover:text-orange-700 dark:hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                    >
                      {d.proof.title}
                      <span aria-hidden className="transition-transform">
                        →
                      </span>
                    </Link>{" "}
                    , {d.proof.result.toLowerCase()}.
                  </p>
                </div>
                <div className="hidden lg:col-span-5 lg:block" aria-hidden="true" />
              </article>
            </Reveal>
          ))}
        </div>

        <SectionFooter guarantee={guarantee} href={SCOPING_HREF} />
      </div>
    </LabSection>
  );
}
