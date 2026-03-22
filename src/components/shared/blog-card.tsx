"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { PremiumButton1 } from "./premium-button-1";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";

export type Article = {
  slug?: string;
  image: string;
  title: string;
  category: string;
  date?: string;
  readTime?: string;
  excerpt?: string;
};

export function BlogCard({
  article,
  index,
}: {
  article: Article;
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
      itemScope
      itemType="http://schema.org/BlogPosting"
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-card hover:shadow-2xl shadow-primary/40 border border-primary/40 dark:border-primary/20 transition-all duration-500 hover:-translate-y-1"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: "all 0.6s ease-out",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-muted/30">
        <Image
          src={article.image}
          alt={article.title}
          itemProp="image"
          fill
          className="object-cover transition-transform duration-700 ease-out"
          style={{
            transform: isHovered ? "scale(1.1)" : "scale(1)",
          }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Subtle hover overlay using global primary color */}
        <div className="absolute inset-0 bg-black/5 transition-colors duration-500 group-hover:bg-black/10" />
        <div className="absolute inset-0 bg-primary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 mix-blend-overlay" />
        <div className="absolute inset-0 bg-linear-to-t from-background/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6 sm:p-8 bg-card">
        {/* Category matching the Tags styling from the analyzed image */}
        <div className="mb-5 flex flex-wrap items-center gap-3 text-[11px] font-bold uppercase tracking-[0.15em] text-muted-foreground transition-colors duration-300">
          <Badge
            variant="outline"
            className="animated-border-gradient-small sm:animated-border-gradient text-[10px] sm:text-[11px] px-2! sm:px-3! py-1!"
          >
            {article.category}
          </Badge>
          {article.date && (
            <time dateTime={new Date(article.date).toISOString()} itemProp="datePublished" className="flex items-center gap-1 group-hover:text-secondary">
              {article.date}
            </time>
          )}
          {article.readTime && (
            <>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/50 hidden xs:block"></span>
              <span className="flex items-center gap-1 group-hover:text-secondary">{article.readTime}</span>
            </>
          )}
        </div>

        {/* Title */}
        <h3 className="mb-3 text-[1.35rem] leading-[1.3] font-extrabold text-foreground transition-colors duration-300 group-hover:text-primary" itemProp="headline">
          {article.title}
        </h3>

        {/* Excerpt */}
        {article.excerpt && (
          <p className="mb-8 text-sm leading-relaxed text-muted-foreground line-clamp-3" itemProp="abstract">
            {article.excerpt}
          </p>
        )}

        {/* Read More Button using PremiumButton1 */}
        <div className="mt-auto flex items-center justify-start">
          <PremiumButton1
            href={article.slug ? `/blog/${article.slug}` : "#"}
            className={cn(
              "px-5 py-2.5 text-[11px] font-bold uppercase tracking-widest",
              "border border-border bg-transparent text-foreground transition-all duration-300",
              "hover:border-primary hover:bg-primary/10 hover:text-primary",
            )}
          >
            Read More
          </PremiumButton1>
        </div>
      </div>
    </article>
  );
}
