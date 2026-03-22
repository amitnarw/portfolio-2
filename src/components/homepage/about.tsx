"use client";

import SectionHeader from "@/components/shared/section-header";
import { useEffect, useRef, useState } from "react";

const aboutData = [
  {
    title: "5M+",
    description: "SUCCESS PROJECT",
  },
  {
    title: "3K+",
    description: "PRODUCT LAUNCHED",
  },
  {
    title: "9+",
    description: "CLIENTS WORLDWIDE",
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
      className="relative overflow-hidden text-foreground dark:bg-card mt-30"
      aria-label="About section"
      ref={sectionRef}
    >
      {/* Noise texture overlay */}
      <div className="absolute inset-0 pointer-events-none" />

      <div className="relative mx-auto w-full max-w-350 px-6 py-14 lg:px-12 lg:py-16">
        <SectionHeader title="About Me" subtitle="" backgroundText="ABOUT" />

        <div className="space-y-12 flex flex-row justify-between">
          {/* Header */}
          <div className="space-y-4">
            <p className="text-[clamp(1.1rem,2vw,1.5rem)] leading-relaxed text-muted-foreground/80">
              Hi, I'm a passionate full-stack developer with expertise in modern
              web technologies. I specialize in building fast, scalable, and
              user-friendly applications that help businesses grow their digital
              presence.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10">
              {aboutData.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center bg-radial from-transparent to-primary/10 border border-primary/50 dark:border-primary/20"
                >
                  <div className="flex flex-col items-start p-10">
                    <h1 className="text-5xl">{item.title}</h1>
                    <p className="text-sm">{item.description}</p>
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
