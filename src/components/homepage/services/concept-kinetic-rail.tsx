"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { disciplines, caseStudies, SCOPING_HREF } from "./content";
import { cn } from "@/lib/utils";

export default function ConceptKineticRail() {
  const [activeIndex, setActiveIndex] = useState(0);

  const total = disciplines.length;
  const currentDiscipline = disciplines[activeIndex];
  const currentCaseStudy = caseStudies[activeIndex] || caseStudies[0];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full">
      {/* Top Deck Navigation Controls */}
      <div className="flex items-center justify-between pb-8">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-bold text-primary">
            0{activeIndex + 1} / 0{total}
          </span>
          <div className="flex gap-1.5">
            {disciplines.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
                  activeIndex === idx ? "w-8 bg-primary" : "w-2 bg-foreground/20 hover:bg-foreground/40"
                )}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrev}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-foreground/15 bg-background text-foreground transition-all hover:border-primary hover:text-primary active:scale-95"
            aria-label="Previous service"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-foreground/15 bg-background text-foreground transition-all hover:border-primary hover:text-primary active:scale-95"
            aria-label="Next service"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Main Panoramic Showcase Slide */}
      <div className="relative overflow-hidden rounded-3xl border border-foreground/10 bg-accent/30 p-8 sm:p-12 backdrop-blur-md dark:bg-card/50 shadow-xl transition-all duration-500">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Left Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Discipline {currentDiscipline.num}
            </div>

            <h3
              className="text-4xl sm:text-6xl font-medium tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-bebas-neue)" }}
            >
              {currentDiscipline.name}
            </h3>

            <p className="font-serif text-xl sm:text-2xl italic text-primary">
              &ldquo;{currentDiscipline.promise}&rdquo;
            </p>

            <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
              {currentCaseStudy.problem} , {currentCaseStudy.built}
            </p>

            {/* Capabilities Matrix */}
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
                Included Capabilities
              </p>
              <div className="flex flex-wrap gap-2">
                {currentDiscipline.capabilities.map((cap) => (
                  <span
                    key={cap}
                    className="rounded-full border border-foreground/10 bg-background/80 px-3 py-1 text-xs font-medium text-foreground"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={SCOPING_HREF}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105 active:scale-95"
              >
                <span>Hire for this discipline</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>

              <Link
                href={`/work/${currentDiscipline.proof.slug}`}
                className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground"
              >
                <span>View {currentDiscipline.proof.title}</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Image / Mockup Card */}
          <div className="lg:col-span-5">
            <div className="group relative overflow-hidden rounded-2xl border border-foreground/15 bg-background shadow-2xl">
              <div className="relative aspect-video w-full overflow-hidden bg-neutral-900">
                <Image
                  src={currentCaseStudy.image}
                  alt={currentCaseStudy.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs font-mono text-primary uppercase">
                    Proven In Production
                  </p>
                  <p className="text-sm font-semibold mt-0.5">
                    {currentCaseStudy.title}
                  </p>
                  <p className="text-xs text-zinc-300">
                    {currentCaseStudy.result}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

