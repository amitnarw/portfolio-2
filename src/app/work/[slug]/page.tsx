import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Globe, Github, Calendar, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { PremiumButton1 } from "@/components/shared/premium-button-1";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { selectedWorkProjects } from "@/lib/selected-work-data";
import { blogArticles } from "@/lib/blog-data";

const siteUrl = "https://amitnarwal.com";

export function generateStaticParams() {
  return selectedWorkProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = selectedWorkProjects.find((p) => p.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} Case Study`,
    description: project.metaDescription,
    keywords: [...project.tags, project.title, "Amit Narwal", "case study"],
    authors: [{ name: "Amit Narwal" }],
    alternates: {
      canonical: `${siteUrl}/work/${project.slug}`,
    },
    openGraph: {
      type: "article",
      url: `${siteUrl}/work/${project.slug}`,
      title: `${project.title} | Amit Narwal`,
      description: project.description,
      images: [
        {
          url: project.image,
          alt: project.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Amit Narwal`,
      description: project.description,
      images: [project.image],
    },
  };
}

const relatedBlogSlugs: Record<string, string[]> = {
  intesters: ["building-scalable-apis-nodejs", "ui-ux-best-practices-2025"],
  "exaldia-ai-seo-tools": [
    "modernizing-nextjs-seo-geo",
    "latest-ai-models-ranking-2026",
    "agentic-ai-workflows-2025",
  ],
  "web-mcp": [
    "agentic-ai-workflows-2025",
    "building-scalable-apis-nodejs",
    "nextjs-vulnerabilities-security-guide-2026",
  ],
  "ai-autofill-chrome-extension": [
    "agentic-ai-workflows-2025",
    "ui-ux-best-practices-2025",
  ],
  "portfolio-website": [
    "modernizing-nextjs-seo-geo",
    "nextjs-16-2-performance-agent-ready",
    "ui-ux-best-practices-2025",
  ],
  "cbr-painters-australia": [
    "modernizing-nextjs-seo-geo",
    "ui-ux-best-practices-2025",
  ],
};

export default async function WorkCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = selectedWorkProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const projectIndex = selectedWorkProjects.findIndex((p) => p.slug === project.slug);
  const otherProjects = selectedWorkProjects.filter((p) => p.slug !== project.slug);
  const relatedProjects = [
    ...otherProjects.slice(projectIndex % otherProjects.length),
    ...otherProjects.slice(0, projectIndex % otherProjects.length),
  ].slice(0, 2);

  const relatedPosts = (relatedBlogSlugs[project.slug] || [])
    .map((s) => blogArticles.find((a) => a.slug === s))
    .filter(Boolean);

  const creativeWorkSchema = {
    "@context": "https://schema.org",
    "@type": project.kind === "app" ? "SoftwareApplication" : "CreativeWork",
    name: project.title,
    description: project.overview.join(" "),
    url: `${siteUrl}/work/${project.slug}`,
    image: `${siteUrl}${project.image}`,
    dateCreated: "2025-01-01",
    dateModified: "2026-11-08",
    creator: {
      "@type": "Person",
      name: "Amit Narwal",
      url: siteUrl,
    },
    author: {
      "@type": "Person",
      name: "Amit Narwal",
      url: siteUrl,
    },
    keywords: project.tags.join(", "),
    ...(project.kind === "app"
      ? {
          applicationCategory:
            project.slug === "ai-autofill-chrome-extension"
              ? "BrowserApplication"
              : "DeveloperApplication",
          operatingSystem:
            project.slug === "ai-autofill-chrome-extension" ? "Chrome" : "Windows, macOS, Linux",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          ...(project.repoUrl ? { codeRepository: project.repoUrl } : {}),
        }
      : {}),
    ...(project.siteUrl ? { sameAs: project.siteUrl } : {}),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Work", item: `${siteUrl}/work` },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `${siteUrl}/work/${project.slug}`,
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
            __html: JSON.stringify([creativeWorkSchema, breadcrumbSchema]),
          }}
        />

        <article className="mx-auto w-full max-w-6xl px-6 lg:px-12">
          {/* Back link */}
          <div className="mb-10">
            <PremiumButton1
              href="/work"
              className="group gap-2 px-4 py-2 sm:px-6 sm:py-3 border-foreground/20 hover:border-primary hover:bg-primary/5 transition-all duration-300"
            >
              <ArrowLeft
                size={14}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              <span className="text-xs sm:text-sm font-medium">Back to all work</span>
            </PremiumButton1>
          </div>

          <nav
            aria-label="Breadcrumb"
            className="mb-10 text-sm text-muted-foreground flex flex-wrap items-center gap-1"
          >
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/work" className="hover:text-foreground">
              Work
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-foreground">{project.title}</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Badge
                variant="outline"
                className="animated-border-gradient px-4 py-1 text-xs font-semibold"
              >
                {project.status}
              </Badge>
              <div className="flex items-center gap-4 text-sm text-muted-foreground font-medium">
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-primary/70" />
                  <time>{project.year}</time>
                </div>
                <div className="flex items-center gap-2 border-l border-foreground/10 pl-4">
                  <User size={14} className="text-primary/70" />
                  <span>{project.role}</span>
                </div>
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-wide text-foreground mb-6 font-heading">
              {project.title}
            </h1>

            <p className="text-lg leading-relaxed text-muted-foreground mb-8 max-w-3xl">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag, i) => (
                <Badge key={i} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              {project.siteUrl ? (
                <PremiumButton1
                  href={project.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  ariaLabel={`Visit ${project.title} live`}
                  className="px-6 py-2.5 border border-border bg-foreground text-background hover:shadow-lg"
                >
                  <Globe size={14} /> Visit live site
                </PremiumButton1>
              ) : null}
              {project.repoUrl ? (
                <PremiumButton1
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  ariaLabel={`View ${project.title} source`}
                  className="px-6 py-2.5 border border-foreground/20 hover:border-primary hover:bg-primary/5"
                >
                  <Github size={14} /> View source
                </PremiumButton1>
              ) : null}
            </div>
          </header>

          {/* Hero image */}
          <div className="relative w-full aspect-video overflow-hidden rounded-2xl shadow-xl shadow-primary/5 border border-primary/10 mb-12">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Quick facts */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 p-6 rounded-2xl bg-muted/40 border border-foreground/10">
            <div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Year</p>
              <p className="font-medium">{project.year}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Role</p>
              <p className="font-medium">{project.role}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Status</p>
              <p className="font-medium">{project.status}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Stack</p>
              <p className="font-medium">{project.tags.slice(0, 3).join(", ")}</p>
            </div>
          </section>

          {/* Overview */}
          <section className="mb-12">
            <h2 className="text-[1.75rem] font-heading tracking-[0.07em] text-foreground mb-4">Overview</h2>
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              {project.overview.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </section>

          {/* What I built */}
          <section className="mb-12">
            <h2 className="text-[1.75rem] font-heading tracking-[0.07em] text-foreground mb-4">What I built</h2>
            <ul className="space-y-2">
              {project.highlights.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-foreground/90 leading-relaxed"
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Tech stack */}
          <section className="mb-12">
            <h2 className="text-[1.75rem] font-heading tracking-[0.07em] text-foreground mb-4">Tech stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <Badge key={i} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </section>

          {/* Related work */}
          {relatedProjects.length > 0 ? (
            <section className="mb-12">
              <h2 className="text-[1.75rem] font-heading tracking-[0.07em] text-foreground mb-4">
                More from my work
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedProjects.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/work/${rp.slug}`}
                    className="group rounded-2xl border border-foreground/10 p-5 hover:border-primary hover:bg-primary/5 transition-all"
                  >
                    <h3 className="font-bold text-foreground group-hover:text-primary">
                      {rp.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                      {rp.description}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}

          {/* Related reading */}
          {relatedPosts.length > 0 ? (
            <section className="mb-12">
              <h2 className="text-[1.75rem] font-heading tracking-[0.07em] text-foreground mb-4">
                Related reading
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedPosts.map((post) => (
                  <Link
                    key={post!.slug}
                    href={`/blog/${post!.slug}`}
                    className="group rounded-2xl border border-foreground/10 p-5 hover:border-primary hover:bg-primary/5 transition-all"
                  >
                    <h3 className="font-bold text-foreground group-hover:text-primary">
                      {post!.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                      {post!.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}

          {/* CTA */}
          <aside className="mt-16 p-8 rounded-3xl bg-secondary/5 border border-secondary/20 text-center sm:text-left">
            <h2 className="text-[1.75rem] font-heading tracking-[0.07em] mb-2">Have a similar project?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I build full stack web apps and AI integrations for businesses and
              founders. If you want something like this, I would be happy to talk.
            </p>
            <PremiumButton1
              href="/#contact"
              className="px-6 py-2.5 border border-border bg-foreground text-background hover:shadow-lg"
            >
              Talk to me
            </PremiumButton1>
          </aside>
        </article>
      </main>
      <Footer />
    </>
  );
}
