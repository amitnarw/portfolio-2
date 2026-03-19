"use client";

import SectionHeader from "@/components/shared/section-header";
import { useEffect, useRef, useState } from "react";

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
      className="relative overflow-hidden text-foreground dark:bg-card py-20"
      aria-label="About section"
      ref={sectionRef}
    >
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.05%22/%3E%3C/svg%3E")'
        }}
      />

      <div className="relative mx-auto w-full max-w-350 px-6 py-14 lg:px-12 lg:py-16">
        <SectionHeader
          title="About Me"
          subtitle=""
          backgroundText="ABOUT"
        />

        <div
          className="space-y-12 flex flex-row justify-between"
        >
          {/* Header */}
          <div className="space-y-4">
            <p className="text-[clamp(1.1rem,2vw,1.5rem)] leading-relaxed text-muted-foreground/80 max-w-2xl">
              Hi, I'm a passionate full-stack developer with expertise in modern web technologies. I specialize in building fast, scalable, and user-friendly applications that help businesses grow their digital presence.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="text-[clamp(2.5rem,6vw,5rem)] font-black text-primary font-heading">4+</div>
              <div className="text-[clamp(0.5rem,1vw,1rem)] font-medium text-foreground">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-[clamp(2.5rem,6vw,5rem)] font-black text-primary font-heading">20+</div>
              <div className="text-[clamp(0.5rem,1vw,1rem)] font-medium text-foreground">Completed Projects</div>
            </div>
            <div className="text-center">
              <div className="text-[clamp(2.5rem,6vw,5rem)] font-black text-primary font-heading">9+</div>
              <div className="text-[clamp(0.5rem,1vw,1rem)] font-medium text-foreground">Clients Worldwide</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
