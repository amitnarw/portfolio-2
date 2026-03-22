"use client";

import { selectedWorkProjects } from "@/lib/selected-work-data";
import SectionHeader from "@/components/shared/section-header";
import PremiumButton2 from "@/components/shared/premium-button-2";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { PremiumButton1 } from "../shared/premium-button-1";
import { cn } from "@/lib/utils";

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
      { threshold: 0.1 },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <article
      ref={cardRef}
      className="group relative overflow-hidden rounded-2xl bg-radial from-transparent to-primary/20 transition-all duration-300 hover:shadow-xl p-1 group"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transition: "all 0.7s ease-out",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col">
        {/* Image */}
        <div className="flex-1">
          <div className="relative aspect-video overflow-hidden rounded-2xl group/image">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 ease-out"
              style={{
                transform: isHovered ? "scale(1.1)" : "scale(1)",
              }}
              sizes="(max-width: 768px) 80vw, 40vw"
            />

            <div className="absolute inset-0 bg-black/5 transition-colors duration-500 group-hover:bg-black/10" />
            <div className="absolute inset-0 bg-linear-to-t from-background/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>
        </div>

        <div className="flex flex-col gap-5 items-start justify-between h-full p-4">
          {/* Content */}
          <div className="flex-1">
            <h3 className="text-[clamp(1.8rem,2.2vw,2.2rem)] font-medium leading-tight text-foreground font-heading">
              {project.title}
            </h3>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <Badge
                  variant="outline"
                  key={tagIndex}
                  className="animated-border-gradient-small sm:animated-border-gradient text-[10px] sm:text-xs px-2! sm:px-4! py-1!"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Description */}
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </div>

          <PremiumButton1
            href={project.siteUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "px-6 py-2.5",
              "border border-border bg-foreground text-background hover:shadow-lg",
            )}
          >
            View Project
          </PremiumButton1>
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
      className="relative overflow-hidden bg-background text-foreground"
      aria-label="Selected work section"
    >
      <div className="relative mx-auto w-full max-w-350 px-6 py-14 lg:px-12 lg:py-16">
        <SectionHeader
          title="Selected Work"
          subtitle="Featured projects"
          backgroundText="PROJECTS"
        />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <PremiumButton2 href="/work" />
        </div>
      </div>
    </section>
  );
}
