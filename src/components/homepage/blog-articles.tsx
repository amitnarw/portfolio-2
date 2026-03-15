"use client";

import Link from "next/link";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import PremiumButton2 from "@/components/shared/premium-button-2";

const articles = [
  {
    image:
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=1200&q=80",
    date: "October 3, 2024",
    readTime: "6 min read",
    title: "Where Creative Design Meets Smart Development Solutions",
    excerpt:
      "This blog bridges the gap between creativity and technology. Learn how design thinking drives modern digital products.",
    category: "Design",
  },
  {
    image:
      "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=80",
    date: "January 8, 2025",
    readTime: "10 min read",
    title: "Exploring Innovation Through Design and Web Development",
    excerpt:
      "Dive into the latest trends, tools, and techniques shaping the future of design and development.",
    category: "Innovation",
  },
  {
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=80",
    date: "March 24, 2025",
    readTime: "14 min read",
    title: "Design Ideas, Development Tips, and Creative Solutions",
    excerpt:
      "Your go-to space for actionable insights on design trends, development practices, and creative problem solving.",
    category: "Tutorial",
  },
];

function BlogCard({
  article,
  index,
}: {
  article: (typeof articles)[0];
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
      className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-card/50 transition-all duration-300 hover:border-primary/30"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: "all 0.6s ease-out",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl">
        <img
          src={article.image}
          alt={article.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out"
          style={{
            transform: isHovered ? "scale(1.08)" : "scale(1)",
          }}
        />

        {/* Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Category badge */}
        <div className="absolute left-4 top-4 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-primary-foreground">
          {article.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        {/* Meta info */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            {article.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {article.readTime}
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-3 text-[clamp(1.1rem,1.4vw,1.4rem)] font-semibold leading-tight text-foreground transition-all duration-300 group-hover:text-primary">
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground/80 line-clamp-2 transition-all duration-300 group-hover:text-foreground/70">
          {article.excerpt}
        </p>

        {/* Read more */}
        <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
          <span>Read Article</span>
          <ArrowUpRight
            size={14}
            className="transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full" />
    </article>
  );
}

export default function BlogArticles() {
  return (
    <section
      id="blog"
      className="relative overflow-hidden bg-muted/40 text-foreground py-20"
      aria-label="Blog and articles section"
    >
      {/* Background texture */}
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

      <div className="relative mx-auto w-full max-w-350 px-6 py-14 lg:px-12 lg:py-16">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[clamp(2.3rem,5.2vw,4.6rem)] font-semibold leading-[0.95] tracking-tight text-foreground">
            Blog & Articles
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Insights on design, development, and technology from my experience
            building digital products.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <BlogCard key={article.title} article={article} index={index} />
          ))}
        </div>

        {/* View all button */}
        <div className="mt-12 flex justify-center">
          <PremiumButton2 label="View all articles" href="/blog" />
        </div>
      </div>
    </section>
  );
}
