"use client";

import PremiumButton2 from "@/components/shared/premium-button-2";
import { BlogCard } from "@/components/shared/blog-card";

import { blogArticles } from "@/lib/blog-data";

const homepageArticles = blogArticles.slice(0, 3);

export default function BlogArticles() {
  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: homepageArticles.map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "BlogPosting",
        headline: article.title,
        image: article.image,
        datePublished: new Date(article.date).toISOString(),
        description: article.excerpt,
        author: {
          "@type": "Person",
          name: "Amit Narwal",
        },
      },
    })),
  };

  return (
    <section
      id="blog"
      className="relative overflow-hidden text-foreground py-20"
      aria-label="Blog and articles section"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />
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
          {homepageArticles.map((article, index) => (
            <BlogCard key={article.title} article={article as any} index={index} />
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
