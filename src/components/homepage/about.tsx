"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import MarqueeStar from "@/components/homepage/marquee-star";
import { cn } from "@/lib/utils";

const aboutIntro =
  "I build fast, scalable web apps and AI-powered products for founders who need software that actually ships.";

const aboutStats = [
  { value: "20", suffix: "+", label: "Apps shipped" },
  { value: "3", suffix: "+", label: "AI products live" },
  { value: "9", suffix: "+", label: "Clients worldwide" },
];

/** Fade-up reveal on first intersection. */
function Reveal({
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
        "transition-all duration-700 ease-out",
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/** Small uppercase label with an amber rule. */
function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
      <span aria-hidden className="h-[2px] w-8 bg-primary" />
      {children}
    </p>
  );
}

/** Bebas Neue numeral with an amber "+" suffix. */
function StatNumber({
  value,
  suffix = "+",
  className,
}: {
  value: string;
  suffix?: string;
  className?: string;
}) {
  return (
    <span
      className={cn("font-heading leading-none tracking-[0.02em]", className)}
    >
      {value}
      <span className="text-orange-500 dark:text-primary">{suffix}</span>
    </span>
  );
}

export default function About() {
  return (
    <section id="about" aria-label="About section" className="bg-background">
      <div className="mx-auto w-full max-w-350 px-6 py-14 lg:px-12 lg:py-20">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-[#0B0B0C] px-6 py-12 text-[#FFF6E0] dark:bg-[#131315] dark:ring-1 dark:ring-white/10 sm:px-10 lg:px-14 lg:py-16">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
            <MarqueeStar
              size={150}
              className="absolute -bottom-12 -left-12 text-primary/15"
            />
          </div>

          <div className="relative grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow>About</Eyebrow>
              <h2 className="mt-5 font-serif text-[clamp(2.75rem,4.5vw,4.25rem)] italic leading-[1.02] tracking-tight">
                About Me
              </h2>
              <p className="mt-5 text-sm text-white/60">
                Amit Narwal — Full-stack &amp; AI Developer
              </p>
            </div>
            <div className="lg:col-span-7">
              <p className="max-w-2xl text-[clamp(1.3rem,2vw,1.8rem)] leading-snug text-white/85">
                {aboutIntro}
              </p>
              <ul className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
                {aboutStats.map((stat) => (
                  <li key={stat.label}>
                    <StatNumber
                      value={stat.value}
                      suffix={stat.suffix}
                      className="text-4xl sm:text-5xl lg:text-6xl"
                    />
                    <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">
                      {stat.label}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
