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
 * A , Area 17 Capabilities.
 * Three columns side by side. Name + one sentence + vertical capability
 * list, proof anchored to the bottom of each column.
 * No numbers, no hairlines-per-item, no Bebas.
 */
export default function Area17({ id }: { id: string }) {
  return (
    <LabSection id={id} label="Services , Area 17 style">
      <div className={cn(CONTAINER, "py-16 lg:py-24")}>
        <SectionHeader lead={HEADER_LEAD} />

        <div className="mt-14 grid gap-12 border-t border-foreground/10 pt-12 sm:mt-16 lg:mt-20 lg:grid-cols-3 lg:gap-0 lg:pt-16">
          {disciplines.map((d, i) => (
            <Reveal
              key={d.name}
              delay={i * 80}
              className={cn(
                "flex flex-col",
                i > 0 &&
                "border-t border-foreground/10 pt-12 lg:border-l lg:border-t-0 lg:pt-0 lg:pl-10 lg:pr-10",
                i === 2 && "lg:pr-0",
                i === 0 && "lg:pr-10",
              )}
            >
              <h3 className="text-[22px] font-semibold leading-snug tracking-[-0.01em]">
                {d.name}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                {d.promise}
              </p>
              <ul className="mt-8 mb-10 space-y-3.5">
                {d.capabilities.map((cap) => (
                  <li
                    key={cap}
                    className="text-[15px] font-medium leading-snug text-foreground/85"
                  >
                    {cap}
                  </li>
                ))}
              </ul>
              <Link
                href={`/work/${d.proof.slug}`}
                className="group mt-auto border-t border-foreground/10 pt-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                <span className="block text-[12px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                  Built
                </span>
                <span className="mt-1.5 flex items-center justify-between gap-3">
                  <span>
                    <span className="block text-[15px] font-semibold leading-tight">
                      {d.proof.title}
                    </span>
                    <span className="mt-1 block text-[13px] leading-snug text-muted-foreground">
                      {d.proof.result}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className="shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-orange-700 dark:group-hover:text-primary"
                  >
                    →
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <SectionFooter guarantee={guarantee} href={SCOPING_HREF} />
      </div>
    </LabSection>
  );
}
