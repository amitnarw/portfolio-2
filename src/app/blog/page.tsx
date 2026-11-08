import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { ArrowLeft } from "lucide-react";

import { BlogCard } from "@/components/shared/blog-card";
import { PremiumButton1 } from "@/components/shared/premium-button-1";

import { blogArticles, type BlogPost } from "@/lib/blog-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog and Articles",
  description:
    "Notes on Next.js, AI, PostgreSQL and building web apps, written by Amit Narwal.",
  alternates: { canonical: "https://amitnarwal.com/blog" },
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="mx-auto w-full max-w-350 px-6 lg:px-12">
          {/* Back link */}
          <div className="mb-8">
            <PremiumButton1
              href="/"
              className="group gap-2 px-6 py-3 border-foreground/20 hover:border-primary hover:bg-primary/5 transition-all duration-300"
            >
              <ArrowLeft
                size={16}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              <span className="text-sm font-medium">Back to Home</span>
            </PremiumButton1>
          </div>

          {/* Page header */}
          <div className="mb-12">
            <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[0.95] tracking-tight text-foreground">
              Blog & Articles
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Insights on design, development, and technology from my experience
              building digital products.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogArticles.map((article, index) => (
              <BlogCard key={article.title} article={article as BlogPost} index={index} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
