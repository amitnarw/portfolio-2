"use client";

import SectionHeader from "@/components/shared/section-header";
import { Code2, Globe, Bot, Zap, Cpu, Layers } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Full Stack Development + AI & ML",
    description: "Time to unleash the Creator of new within you",
    icon: Layers,
    className: "col-span-8",
    tag: "UI/UX",
  },
  {
    title: "Frontend",
    description: "Building responsive, interactive interfaces.",
    icon: Code2,
    className: "col-span-4",
    tag: "UI/UX",
  },
  {
    title: "Backend",
    description: "Creating robust APIs and server applications.",
    icon: Cpu,
    className: "col-span-4",
    tag: "Server",
  },
  {
    title: "Performance",
    description: "Optimizing code for blazing-fast load times.",
    icon: Zap,
    className: "col-span-4",
    tag: "Optimization",
  },
  {
    title: "Chrome Extensions",
    description:
      "Developing custom browser extensions for seamless workflow enhancements and productivity tools.",
    icon: Globe,
    className: "col-span-4",
    tag: "Optimization",
  },
];

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  return (
    <div
      className={cn(
        "animated-border-gradient relative overflow-hidden rounded-3xl md:rounded-4xl p-6 md:p-8 transition-all duration-800 ease-out flex flex-col gap-4 hover:-translate-y-1",
        service.className,
      )}
    >
      <div className="flex justify-between items-start z-10">
        <div
          className={cn(
            "font-medium tracking-wide",
            "px-4 py-1.5 text-xs rounded-full border border-black/30",
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
        <p className="text-sm md:text-base">{service.description}</p>
      </div>

      <div className="absolute -bottom-8 -right-8 pointer-events-none transform -rotate-12 text-primary/20">
        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-linear-to-tl from-primary/20 to-primary/5 blur-2xl translate-y-2"></div>
        <service.icon size={120} strokeWidth={1} />
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="relative mx-auto w-full max-w-350 px-6 py-14 lg:px-12 lg:py-16"
      aria-label="Services section"
    >
      <div className="relative mx-auto w-full">
        <div className="mb-12">
          <SectionHeader
            title="Services"
            subtitle="Expertise"
            backgroundText="SERVICES"
          />
        </div>

        <div className="grid grid-cols-12 gap-4">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
