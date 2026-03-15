"use client";

import SectionHeader from "@/components/shared/section-header";
import { Code2, Globe, Bot, Zap, Cpu, Layers } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Frontend Development",
    description: "Building responsive, interactive interfaces with React and Next.js that deliver exceptional user experiences.",
    icon: Code2,
  },
  {
    title: "Backend Development",
    description: "Creating robust APIs and server-side applications using Node.js and modern frameworks.",
    icon: Cpu,
  },
  {
    title: "Full-Stack Solutions",
    description: "End-to-end development combining frontend and backend expertise for complete web applications.",
    icon: Layers,
  },
  {
    title: "AI Integration",
    description: "Implementing intelligent features and machine learning capabilities into your applications.",
    icon: Bot,
  },
  {
    title: "Chrome Extensions",
    description: "Developing custom browser extensions to enhance productivity and functionality.",
    icon: Globe,
  },
  {
    title: "Performance Tuning",
    description: "Optimizing code and infrastructure for blazing-fast load times and smooth performance.",
    icon: Zap,
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
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
    <div
      ref={cardRef}
      className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-card/50 p-6 sm:p-8 transition-all duration-700 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
      }}
    >
      {/* Hover gradient effect */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-secondary/10" />
        <div className="absolute inset-0 bg-linear-to-t from-primary/5 to-transparent" />
      </div>

      {/* Corner accent */}
      <div className="absolute -right-4 -top-4 h-24 w-24 opacity-0 transition-all duration-500 group-hover:opacity-100">
        <div className="absolute right-0 top-0 h-px w-16 bg-primary/40" />
        <div className="absolute right-0 top-0 h-16 w-px bg-primary/40" />
      </div>
      <div className="absolute -bottom-4 -left-4 h-24 w-24 opacity-0 transition-all duration-500 group-hover:opacity-100">
        <div className="absolute bottom-0 left-0 h-px w-16 bg-primary/40" />
        <div className="absolute bottom-0 left-0 h-16 w-px bg-primary/40" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="mb-4 inline-flex rounded-xl bg-foreground/5 p-3 text-foreground/70 transition-all duration-500 group-hover:bg-primary/20 group-hover:text-primary">
          <service.icon size={28} strokeWidth={1.5} />
        </div>

        <h3 className="mb-3 text-[clamp(1.3rem,2vw,1.8rem)] font-medium leading-tight text-foreground transition-all duration-300 group-hover:translate-x-1">
          {service.title}
        </h3>

        <p className="text-[clamp(0.9rem,1.2vw,1.1rem)] leading-relaxed text-muted-foreground/80 transition-all duration-300 group-hover:text-foreground/70">
          {service.description}
        </p>
      </div>

      {/* Bottom line accent */}
      <div className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full" />
    </div>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-accent text-foreground dark:bg-card py-20"
      aria-label="Services section"
    >
      {/* Background texture */}
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />

      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/2 via-transparent to-black/6 dark:from-white/2 dark:to-black/30" />

      <div className="relative mx-auto w-full max-w-350 px-6 py-14 lg:px-12 lg:py-16">
        <SectionHeader
          title="Services"
          subtitle="What I offer"
          backgroundText="SERVICES"
        />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
