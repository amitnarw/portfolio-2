"use client";

import SectionHeader from "@/components/shared/section-header";
import { useEffect, useRef, useState } from "react";

const aboutData = [
  {
    title: "20+",
    description: "FULL-STACK APPS COMPLETED",
  },
  {
    title: "3+",
    description: "AI-DRIVEN PRODUCTS LIVE",
  },
  {
    title: "9+",
    description: "GLOBAL CLIENTS SERVED",
  },
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="relative overflow-hidden text-foreground dark:bg-card mt-16"
      aria-label="About section"
      ref={sectionRef}
    >
      {/* Noise texture overlay */}
      <div className="absolute inset-0 pointer-events-none" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-6 lg:px-0 lg:py-8">
        <SectionHeader title="About Me" subtitle="" backgroundText="ABOUT" />

        <div className="space-y-6 flex flex-row justify-between">
          {/* Header */}
          <div className="space-y-4">
            <p className="text-[clamp(1.1rem,2vw,1.5rem)] leading-relaxed text-muted-foreground/80">
              Hi, I'm a passionate full-stack developer with expertise in modern
              web technologies. I specialize in building fast, scalable, and
              user-friendly applications that help businesses grow their digital
              presence.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-6">
              {aboutData.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center bg-radial from-transparent to-primary/10 border border-primary/50 dark:border-primary/20"
                >
                  <div className="flex flex-col gap-1 items-start p-6">
                    <h1 className="text-4xl">{item.title}</h1>
                    <p className="text-xs">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
