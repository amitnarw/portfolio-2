import { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogArticles } from "@/lib/blog-data";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { PremiumButton1 } from "@/components/shared/premium-button-1";

const siteUrl = "https://amitnarwal.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = blogArticles.find((p) => p.slug === slug);

  if (!article) {
    return {};
  }

  return {
    title: `${article.title} | Amit Narwal`,
    description: article.excerpt,
    keywords: [
      article.category,
      "Amit Narwal Blog",
      "Freelance Full Stack Developer",
      "Next.js Best Practices",
      "AI Web Development",
    ],
    authors: [{ name: "Amit Narwal" }],
    openGraph: {
      type: "article",
      url: `${siteUrl}/blog/${article.slug}`,
      title: article.title,
      description: article.excerpt,
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = blogArticles.find((p) => p.slug === slug);

  if (!article) {
    notFound();
  }

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    image: article.image,
    datePublished: new Date(article.date).toISOString(),
    author: {
      "@type": "Person",
      name: "Amit Narwal",
      url: siteUrl,
      jobTitle: "Freelance Full Stack & AI Developer",
    },
    publisher: {
      "@type": "Organization",
      name: "Amit Narwal Services",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/favicon.ico`,
      },
    },
    description: article.excerpt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${article.slug}`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${siteUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `${siteUrl}/blog/${article.slug}`,
      },
    ],
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([blogPostingSchema, breadcrumbSchema]),
          }}
        />

        <article
          className="mx-auto w-full max-w-6xl px-6 lg:px-12"
          itemScope
          itemType="http://schema.org/BlogPosting"
        >
          {/* Back link & Breadcrumb Area */}
          <div className="mb-10">
            <PremiumButton1
              href="/blog"
              className="group gap-2 px-4 py-2 sm:px-6 sm:py-3 border-foreground/20 hover:border-primary hover:bg-primary/5 transition-all duration-300"
            >
              <ArrowLeft
                size={14}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              <span className="text-xs sm:text-sm font-medium">
                Back to Articles
              </span>
            </PremiumButton1>
          </div>

          {/* Header */}
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Badge
                variant="outline"
                className="animated-border-gradient px-4 py-1 text-xs font-semibold"
              >
                {article.category}
              </Badge>
              <div className="flex items-center gap-4 text-sm text-muted-foreground font-medium">
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-primary/70" />
                  <time
                    dateTime={new Date(article.date).toISOString()}
                    itemProp="datePublished"
                  >
                    {article.date}
                  </time>
                </div>
                <div className="flex items-center gap-2 border-l border-foreground/10 pl-4">
                  <Clock size={14} className="text-primary/70" />
                  <span>{article.readTime} read</span>
                </div>
              </div>
            </div>

            <h1
              className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-wide text-foreground mb-8 font-heading"
              itemProp="headline"
            >
              {article.title}
            </h1>

            <div className="flex items-center gap-3.5 pt-4 border-t border-foreground/5">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20 shadow-lg shadow-primary/5">
                <Image
                  src="/my-img.png"
                  alt="Amit Narwal"
                  fill
                  className="object-cover scale-110"
                />
              </div>
              <div className="flex flex-col">
                <span
                  itemProp="author"
                  itemScope
                  itemType="http://schema.org/Person"
                  className="text-sm font-bold text-foreground"
                >
                  <span itemProp="name">Amit Narwal</span>
                </span>
                <span className="text-xs text-muted-foreground">
                  Freelance Full Stack & AI Developer
                </span>
              </div>
            </div>
          </header>

          <div className="relative">
            {/* Main Content Area */}
            <div className="min-w-0 relative">
              {/* Hero Image */}
              <div className="relative aspect-4/3 w-full md:w-[45%] lg:w-[40%] xl:w-[35%] float-none md:float-left md:mr-8 lg:mr-10 mb-8 md:mb-10 overflow-hidden rounded-2xl shadow-xl shadow-primary/5 border border-primary/10">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  itemProp="image"
                  priority
                />
              </div>

              {/* Content Body */}
              <div
                className="prose prose-lg dark:prose-invert max-w-none w-full text-foreground/90 font-medium leading-relaxed [&>div:first-child]:flow-root [&>*:nth-child(2)]:clear-left [&>*:nth-child(2)]:pt-2 sm:[&>*:nth-child(2)]:pt-8"
                itemScope
                itemType="http://schema.org/Article"
                itemProp="articleBody"
              >
                {article.content}
              </div>
              <div className="clear-both"></div>
            </div>
          </div>

          {/* AEO Author Bio / Grounding */}
          <aside className="mt-20 p-8 rounded-3xl bg-secondary/5 border border-secondary/20 flex flex-col sm:flex-row gap-8 items-center sm:items-start text-center sm:text-left">
            <div className="relative w-24 h-24 rounded-full overflow-hidden shrink-0 border-2 border-primary">
              <Image
                src="/my-img.png"
                alt="Amit Narwal"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">About Amit Narwal</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Amit Narwal is a highly sought-after{" "}
                <strong>Freelance Full Stack & AI Developer</strong>{" "}
                specializing in enterprise-grade Next.js architectures, scalable
                APIs, and tailored Machine Learning integrations. Based on core
                engineering principles, he empowers businesses to dominate their
                digital landscape.
              </p>
              <Link
                href="/#services"
                className="inline-block text-sm font-bold uppercase tracking-widest text-primary hover:text-primary/80 transition-colors"
              >
                Work with Amit &rarr;
              </Link>
            </div>
          </aside>
        </article>
      </main>
      <Footer />
    </>
  );
}
