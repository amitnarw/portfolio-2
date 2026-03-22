"use client";

import SectionHeader from "@/components/shared/section-header";
import { Code2, Globe, Zap, Cpu, Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRef } from "react";

const services = [
  {
    title: "Full Stack AI Developer",
    description:
      "Building smart web apps that connect the dots between clean, scalable code and advanced AI models.",
    icon: Layers,
    className: "col-span-12 md:col-span-8",
    tag: "AI & Full Stack",
  },
  {
    title: "Frontend Engineering",
    description:
      "Creating fast, pixel-perfect UIs with React and Next.js that look amazing and rank high on Google.",
    icon: Code2,
    className: "col-span-12 md:col-span-4",
    tag: "Frontend",
  },
  {
    title: "Backend & API Architecture",
    description:
      "The engine under the hood: secure APIs and server systems built with Node.js and Python to grow with you.",
    icon: Cpu,
    className: "col-span-12 md:col-span-4",
    tag: "Backend",
  },
  {
    title: "Performance & Optimization",
    description:
      "Tired of slow sites? I tune every line of code to hit top speeds and perfect Core Web Vitals scores.",
    icon: Zap,
    className: "col-span-12 md:col-span-4",
    tag: "Optimization",
  },
  {
    title: "Custom Chrome Extensions",
    description:
      "Building powerful browser tools to automate your complex workflows and add unique features to the web.",
    icon: Globe,
    className: "col-span-12 md:col-span-4",
    tag: "Extensions",
  },
];

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  return (
    <div
      className={cn(
        "service-card group relative overflow-hidden rounded-3xl md:rounded-4xl p-6 md:p-8 pb-14! transition-all duration-800 ease-out flex flex-col gap-2 hover:-translate-y-1 bg-background border-t border-l border-primary/40 dark:border-primary/20",
        service.className,
      )}
    >
      {/* Base subtle background */}
      <div className="pointer-events-none absolute inset-0 bg-primary/5 transition-opacity duration-300 group-hover/grid:opacity-0" />

      {/* Revealing gradient effect */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/grid:opacity-100"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), color-mix(in srgb, var(--color-primary) 30%, transparent), transparent 60%)`,
        }}
      />

      <div className="flex justify-between items-start z-10 pb-5">
        <div
          className={cn(
            "font-medium tracking-wide",
            "px-4! py-1.5! text-xs rounded-full",
            "animated-border-gradient",
          )}
        >
          {service.tag}
        </div>
      </div>

      <div className="mt-auto flex flex-col gap-2 z-10 relative">
        <h3
          className="text-2xl md:text-4xl font-medium"
          style={{ fontFamily: "var(--font-bebas-neue)" }}
        >
          {service.title}
        </h3>
        <p className="text-sm md:text-base text-muted-foreground/80">
          {service.description}
        </p>
      </div>

      <div className="absolute -bottom-8 -right-8 pointer-events-none transform -rotate-12 text-primary/20 dark:text-primary/10 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 group-hover:text-primary/30">
        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-linear-to-tl from-primary/20 to-primary/5 blur-2xl translate-y-2 transition-opacity duration-500 group-hover:opacity-75"></div>
        <service.icon size={120} strokeWidth={1} />
      </div>
    </div>
  );
}

export default function Services() {
  const gridRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll(".service-card");
    for (const card of cards) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
      (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
    }
  };

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-background text-foreground py-20"
      aria-label="Services section"
    >
      <div className="relative mx-auto w-full max-w-350 px-6 py-14 lg:px-12 lg:py-16">
        <SectionHeader
          title="My Expertise & Services"
          subtitle="What I can do for you"
          backgroundText="SKILLS"
        />
        <div
          ref={gridRef}
          onMouseMove={handleMouseMove}
          className="mt-10 grid grid-cols-12 gap-4 group/grid relative z-10"
        >
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
