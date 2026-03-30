"use client";

import { selectedWorkProjects } from "@/lib/selected-work-data";
import SectionHeader from "@/components/shared/section-header";
import PremiumButton2 from "@/components/shared/premium-button-2";
import ProjectCard from "@/components/shared/project-card";

export default function SelectedWork() {
  // Get first 4 featured projects
  const featuredProjects = selectedWorkProjects.slice(0, 4);

  return (
    <section
      id="selected-work"
      className="relative overflow-hidden bg-background text-foreground"
      aria-label="Selected work section"
    >
      <div className="relative mx-auto w-full max-w-7xl px-6 py-6 lg:px-0 lg:py-8">
        <SectionHeader
          title="Selected Work"
          subtitle="Featured projects"
          backgroundText="PROJECTS"
        />

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <PremiumButton2 href="/work" />
        </div>
      </div>
    </section>
  );
}
