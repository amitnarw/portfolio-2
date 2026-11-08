"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export const CONTAINER = "mx-auto w-full max-w-350 px-6 lg:px-12";

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
      { threshold: 0.12 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-600 ease-out motion-reduce:transition-none",
        visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0",
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/** 11px uppercase label with one amber rule. */
export function Eyebrow({
  children,
  onDark = false,
  center = false,
  className,
}: {
  children: ReactNode;
  onDark?: boolean;
  center?: boolean;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em]",
        onDark ? "text-primary" : "text-muted-foreground",
        center && "justify-center",
        className,
      )}
    >
      <span aria-hidden className="h-[2px] w-8 bg-primary" />
      {children}
      {center && <span aria-hidden className="h-[2px] w-8 bg-primary" />}
    </p>
  );
}

/** Shared warm-paper / ink shell. Theme-aware via tokens. */
export function Shell({
  children,
  className,
  label = "Services section",
}: {
  children: ReactNode;
  className?: string;
  label?: string;
}) {
  return (
    <section
      id="services"
      aria-label={label}
      className={cn(
        "border-y border-foreground/10 bg-[#FFFBF1] text-foreground dark:bg-[#0A0A0C]",
        className,
      )}
    >
      {children}
    </section>
  );
}
