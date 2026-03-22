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

const siteUrl = "https://amitnarwal.dev";

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
          className="mx-auto w-full max-w-4xl px-6 lg:px-12"
          itemScope
          itemType="http://schema.org/BlogPosting"
        >
          {/* Back link & Breadcrumb Area */}
          <div className="mb-10">
            <PremiumButton1
              href="/blog"
              className="group gap-2 px-6 py-3 border-foreground/20 hover:border-primary hover:bg-primary/5 transition-all duration-300"
            >
              <ArrowLeft
                size={16}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              <span className="text-sm font-medium">Back to Articles</span>
            </PremiumButton1>
          </div>

          {/* Header */}
          <header className="mb-10">
            <Badge
              variant="outline"
              className="animated-border-gradient px-4! py-1! mb-6 text-xs"
            >
              {article.category}
            </Badge>

            <h1
              className="text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight text-foreground mb-6"
              itemProp="headline"
            >
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User size={16} className="text-primary" />
                <span itemProp="author" itemScope itemType="http://schema.org/Person">
                  <span itemProp="name" className="font-semibold text-foreground/80">Amit Narwal</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-primary" />
                <time dateTime={new Date(article.date).toISOString()} itemProp="datePublished">
                  {article.date}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-primary" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </header>

          {/* Hero Image */}
          <div className="relative aspect-video w-full overflow-hidden rounded-3xl mb-12 shadow-2xl shadow-primary/10 border border-primary/20">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              itemProp="image"
              priority
            />
          </div>

          {/* Content Body */}
          <div
            className="prose prose-lg dark:prose-invert max-w-none text-foreground/90 font-medium leading-loose"
            itemProp="articleBody"
          >
            {article.content}
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
                Amit Narwal is a highly sought-after <strong>Freelance Full Stack & AI Developer</strong> specializing in enterprise-grade Next.js architectures, scalable APIs, and tailored Machine Learning integrations. Based on core engineering principles, he empowers businesses to dominate their digital landscape.
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
