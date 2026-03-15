"use client";

import SectionHeader from "@/components/shared/section-header";
import { Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote: "Working with this developer was an absolute pleasure. The attention to detail and commitment to quality exceeded our expectations. The project was delivered on time and exceeded all requirements.",
    author: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
  },
  {
    quote: "Outstanding work! The web application they built has transformed our business operations. Their understanding of both frontend and backend technologies is remarkable.",
    author: "Michael Chen",
    role: "Founder, DataFlow Solutions",
  },
  {
    quote: "The best developer we've worked with. Clear communication, innovative solutions, and a product that actually works. Highly recommend for any project.",
    author: "Emily Rodriguez",
    role: "Product Manager, Innovate Labs",
  },
];

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 150);
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
      className="relative overflow-hidden rounded-2xl border border-foreground/10 bg-card/50 p-6 sm:p-8 transition-all duration-700 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
      }}
    >
      {/* Quote icon */}
      <div className="absolute right-6 top-6 text-primary/20">
        <Quote size={48} strokeWidth={1} />
      </div>

      <div className="relative z-10">
        <p className="mb-6 text-[clamp(1rem,1.4vw,1.25rem)] leading-relaxed text-foreground/80 italic">
          "{testimonial.quote}"
        </p>

        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary font-semibold text-lg">
            {testimonial.author.charAt(0)}
          </div>
          <div>
            <p className="font-medium text-foreground">{testimonial.author}</p>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-accent text-foreground dark:bg-card py-20"
      aria-label="Testimonials section"
    >
      {/* Background texture */}
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />

      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/2 via-transparent to-black/6 dark:from-white/2 dark:to-black/30" />

      <div className="relative mx-auto w-full max-w-350 px-6 py-14 lg:px-12 lg:py-16">
        <SectionHeader
          title="Testimonials"
          subtitle="Client feedback"
          backgroundText="REVIEWS"
        />

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.author}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
