"use client";

import SectionHeader from "@/components/shared/section-header";
import { PremiumButton } from "@/components/shared/premium-button";
import { useEffect, useRef, useState } from "react";
import { Sparkles } from "lucide-react";

const highlights = [
  "4+ years of experience in full-stack development",
  "Built 50+ projects for clients worldwide",
  "Specialized in React, Next.js, and AI integration",
  "Expert in performance optimization",
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
      className="relative overflow-hidden text-foreground dark:bg-card py-20"
      aria-label="About section"
      ref={sectionRef}
    >
      <div className="relative mx-auto w-full max-w-350 px-6 py-14 lg:px-12 lg:py-16">
        <SectionHeader
          title="About Me"
          subtitle="Get to know me"
          backgroundText="ABOUT"
        />

        <div
          className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease-out",
          }}
        >
          {/* Left - Main content */}
          <div className="space-y-6">
            <h3 className="text-[clamp(1.5rem,2.5vw,2.5rem)] font-medium leading-tight text-foreground">
              I build digital experiences that{" "}
              <span className="text-primary">convert</span> and{" "}
              <span className="text-primary">impress</span>
            </h3>

            <p className="text-[clamp(1rem,1.3vw,1.15rem)] leading-relaxed text-muted-foreground/80">
              I'm a passionate full-stack developer with expertise in modern web
              technologies. I specialize in building fast, scalable, and
              user-friendly applications that help businesses grow their digital
              presence.
            </p>

            <p className="text-[clamp(1rem,1.3vw,1.15rem)] leading-relaxed text-muted-foreground/80">
              My approach combines technical excellence with creative
              problem-solving to deliver solutions that not only work perfectly
              but also provide exceptional user experiences.
            </p>
          </div>

          {/* Right - Highlights */}
          <div
            className="space-y-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(30px)",
              transition: "all 0.8s ease-out 0.2s",
            }}
          >
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-xl border border-foreground/10 bg-card/50 p-4 transition-all duration-500 hover:border-primary/30 hover:bg-card/80"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transitionDelay: `${0.3 + index * 0.1}s`,
                }}
              >
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <Sparkles size={14} strokeWidth={2} />
                </div>
                <p className="text-[clamp(0.95rem,1.2vw,1.1rem)] text-foreground/80">
                  {highlight}
                </p>
              </div>
            ))}
            <div className="pt-4">
              <PremiumButton text="Hire Me" reverse />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
