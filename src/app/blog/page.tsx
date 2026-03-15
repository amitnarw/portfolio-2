import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { ArrowUpRight, Clock, Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";

const allArticles = [
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
  {
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    date: "April 12, 2025",
    readTime: "8 min read",
    title: "Building Scalable APIs with Node.js and Express",
    excerpt:
      "A comprehensive guide to creating robust and scalable backend APIs using modern JavaScript technologies.",
    category: "Development",
  },
  {
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    date: "May 5, 2025",
    readTime: "12 min read",
    title: "The Complete Guide to React Server Components",
    excerpt:
      "Understanding React Server Components and how they revolutionize frontend development.",
    category: "React",
  },
  {
    image:
      "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&w=1200&q=80",
    date: "June 18, 2025",
    readTime: "7 min read",
    title: "UI/UX Best Practices for 2025",
    excerpt:
      "Stay ahead of the curve with these essential UI/UX design principles for modern web applications.",
    category: "Design",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="mx-auto w-full max-w-350 px-6 lg:px-12">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

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
            {allArticles.map((article, index) => (
              <article
                key={article.title}
                className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-card/50 transition-all duration-300 hover:border-primary/30"
              >
                {/* Image container */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

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
                  <h2 className="mt-3 text-[clamp(1.1rem,1.4vw,1.4rem)] font-semibold leading-tight text-foreground transition-all duration-300 group-hover:text-primary">
                    {article.title}
                  </h2>

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
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
