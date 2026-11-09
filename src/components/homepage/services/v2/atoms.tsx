"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Fade-up reveal on first intersection. Disabled for reduced motion. */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out motion-reduce:transition-none",
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/** 11px uppercase label with one amber rule. Text stays muted for contrast on warm paper. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
      <span aria-hidden className="h-[2px] w-8 shrink-0 bg-primary" />
      {children}
    </p>
  );
}

/** Shared section header , identical across A/B/C so only execution differs. */
export function SectionHeader({ lead }: { lead: string }) {
  return (
    <Reveal>
      <Eyebrow>Capabilities</Eyebrow>
      <h2 className="mt-5 font-serif text-[clamp(2.75rem,5vw,4.25rem)] italic leading-[1.02] tracking-tight">
        What I build for you
      </h2>
      <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
        {lead}
      </p>
    </Reveal>
  );
}

/** Warm-paper / ink shell. id is configurable so the lab can render three
 *  sections without duplicate id="services" anchors. */
export function LabSection({
  children,
  id,
  label,
  className,
}: {
  children: ReactNode;
  id: string;
  label: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-label={label}
      className={cn(
        "bg-[#FFFBF1] text-foreground dark:bg-[#0A0A0C]",
        className,
      )}
    >
      {children}
    </section>
  );
}

/** Shared footer: guarantee + scoping CTA. Text link, no pill button. */
export function SectionFooter({
  guarantee,
  href,
}: {
  guarantee: string;
  href: string;
}) {
  return (
    <Reveal delay={120}>
      <div className="mt-16 flex flex-col gap-4 border-t border-foreground/10 pt-8 sm:flex-row sm:items-center sm:justify-between lg:mt-20">
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
          {guarantee}
        </p>
        <a
          href={href}
          className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          <span className="border-b-2 border-primary pb-1 transition-colors group-hover:text-orange-700 dark:group-hover:text-primary">
            Book a scoping call
          </span>
          <span aria-hidden className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
            →
          </span>
        </a>
      </div>
    </Reveal>
  );
}

