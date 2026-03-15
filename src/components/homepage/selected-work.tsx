"use client";

import Link from "next/link";
import { selectedWorkProjects } from "@/lib/selected-work-data";
import SectionHeader from "@/components/shared/section-header";
import PremiumButton2 from "@/components/shared/premium-button-2";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof selectedWorkProjects)[0];
  index: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <article
      ref={cardRef}
      className="group relative overflow-hidden rounded-2xl bg-card dark:bg-accent p-6 transition-all duration-300 hover:shadow-xl"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transition: "all 0.7s ease-out",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col gap-8 md:flex-row">
        {/* Content */}
        <div className="flex-1">
          <h3 className="text-[clamp(1.5rem,2.5vw,2.5rem)] font-medium leading-tight text-foreground">
            {project.title}
          </h3>
          
          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="rounded-full bg-muted px-4 py-1 text-xs font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </div>

        {/* Image */}
        <div className="flex-1">
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-700 ease-out"
              style={{
                transform: isHovered ? "scale(1.05)" : "scale(1)",
              }}
            />
          </div>
        </div>
      </div>
    </article>
  );
}

export default function SelectedWork() {
  // Get first 4 featured projects
  const featuredProjects = selectedWorkProjects.slice(0, 4);

  return (
    <section
      id="selected-work"
      className="relative overflow-hidden bg-background text-foreground py-20"
      aria-label="Selected work section"
    >
      <div className="relative mx-auto w-full max-w-350 px-6 py-14 lg:px-12 lg:py-16">
        <SectionHeader
          title="SELECTED WORK"
          subtitle="Featured projects"
          backgroundText="PROJECTS"
        />

        {/* Projects Grid */}
        <div className="mt-10 grid grid-cols-1 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View all button */}
        <div className="mt-12 flex justify-center">
          <PremiumButton2 href="/work" />
        </div>
      </div>
    </section>
  );
}
