"use client";

import SectionHeader from "@/components/shared/section-header";
import { Code2, Globe, Bot, Zap, Cpu, Layers } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Full Stack",
    description: "End-to-end development combining frontend and backend expertise for complete web applications.",
    icon: Layers,
    gridArea: "1 / 1 / 3 / 3", // Large card - row 1-3, column 1-3
    color: "bg-primary",
  },
  {
    title: "AI Applications Developer",
    description: "Implementing intelligent features and machine learning capabilities into your applications.",
    icon: Bot,
    gridArea: "1 / 3 / 3 / 4", // Vertical card - row 1-3, column 3-4
    color: "bg-secondary",
  },
  {
    title: "Frontend Development",
    description: "Building responsive, interactive interfaces with React and Next.js.",
    icon: Code2,
    gridArea: "3 / 1 / 4 / 2", // Small card - row 3-4, column 1-2
    color: "bg-card",
  },
  {
    title: "Backend Development",
    description: "Creating robust APIs and server-side applications using Node.js.",
    icon: Cpu,
    gridArea: "3 / 2 / 4 / 3", // Small card - row 3-4, column 2-3
    color: "bg-card",
  },
  {
    title: "Chrome Extensions",
    description: "Developing custom browser extensions to enhance productivity.",
    icon: Globe,
    gridArea: "3 / 3 / 4 / 4", // Small card - row 3-4, column 3-4
    color: "bg-card",
  },
  {
    title: "Performance Tuning",
    description: "Optimizing code and infrastructure for blazing-fast load times.",
    icon: Zap,
    gridArea: "4 / 1 / 5 / 4", // Horizontal card - row 4-5, column 1-4
    color: "bg-card",
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
      className={`${service.color} group relative overflow-hidden rounded-xl border border-foreground/10 p-3 sm:p-4 transition-all duration-700 ease-out`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        gridArea: service.gridArea,
      }}
    >
      {/* Content */}
      <div className="relative z-10">
        <div className="mb-2 inline-flex rounded-lg bg-foreground/5 p-1.5 text-foreground/70 transition-all duration-500 group-hover:bg-foreground/10 group-hover:text-primary">
          <service.icon size={20} strokeWidth={1.5} />
        </div>

        <h3 className={`mb-1 font-medium leading-tight text-foreground transition-all duration-300 group-hover:translate-x-1 ${
          service.gridArea.includes("1 / 1 / 3 / 3") ? "text-[clamp(1.2rem,2vw,1.6rem)]" : // Large
          service.gridArea.includes("1 / 3 / 3 / 4") ? "text-[clamp(1rem,1.5vw,1.2rem)]" : // Vertical
          service.gridArea.includes("4 / 1 / 5 / 4") ? "text-[clamp(1.1rem,1.8vw,1.4rem)]" : // Horizontal
          "text-[clamp(0.9rem,1.2vw,1rem)]" // Small
        }`}>
          {service.title}
        </h3>

        <p className={`leading-relaxed text-muted-foreground/80 transition-all duration-300 group-hover:text-foreground/70 ${
          service.gridArea.includes("1 / 1 / 3 / 3") ? "text-[clamp(0.85rem,1vw,1rem)]" : // Large
          service.gridArea.includes("1 / 3 / 3 / 4") ? "text-[clamp(0.8rem,0.9vw,0.9rem)]" : // Vertical
          service.gridArea.includes("4 / 1 / 5 / 4") ? "text-[clamp(0.85rem,1vw,1rem)]" : // Horizontal
          "text-[clamp(0.75rem,0.8vw,0.85rem)]" // Small
        }`}>
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
      className="relative overflow-hidden bg-accent text-foreground dark:bg-card py-12"
      aria-label="Services section"
    >
      {/* Background texture */}
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />

      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/2 via-transparent to-black/6 dark:from-white/2 dark:to-black/30" />

      <div className="relative mx-auto w-full max-w-350 px-4 py-6 lg:px-6 lg:py-8">
        <SectionHeader
          title="Services"
          subtitle="What I offer"
          backgroundText="SERVICES"
        />

        <div className="mt-6 grid grid-cols-3 grid-rows-4 gap-3 lg:gap-4">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
