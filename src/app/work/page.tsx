import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { selectedWorkProjects } from "@/lib/selected-work-data";
import ProjectCard from "@/components/shared/project-card";

const siteUrl = "https://amitnarwal.com";

export const metadata: Metadata = {
  title: "Selected Work and Case Studies",
  description:
    "Case studies of six projects by Amit Narwal, from a Play Store testing service and an AI SEO platform to the open source Web MCP browser automation server.",
  keywords: [
    "Amit Narwal projects",
    "selected work",
    "Next.js case study",
    "Web MCP",
    "InTesters",
    "AI SEO tools",
    "full stack portfolio",
  ],
  alternates: { canonical: `${siteUrl}/work` },
  openGraph: {
    type: "website",
    url: `${siteUrl}/work`,
    title: "Selected Work and Case Studies",
    description:
      "Selected projects by Amit Narwal, from Play Store testing tools to an open source browser automation server.",
    images: [{ url: `${siteUrl}/portfolio.webp`, alt: "Amit Narwal selected work" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Selected Work and Case Studies",
    description:
      "Selected projects by Amit Narwal, from Play Store testing tools to an open source browser automation server.",
  },
};

export default function WorkPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: selectedWorkProjects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteUrl}/work/${project.slug}`,
      name: project.title,
      description: project.description,
    })),
  };

  const webMcpSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Web MCP",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Windows, macOS, Linux",
    url: "https://www.npmjs.com/package/@amitnarw/web-mcp",
    codeRepository: "https://github.com/amitnarw/web-mcp",
    license: "https://opensource.org/licenses/MIT",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description:
      "An open source MCP server that gives AI assistants a real browser for browsing, clicking and form filling on your own machine.",
  };

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([itemListSchema, webMcpSchema]) }}
      />
      <main className="bg-background text-foreground">
        <section className="mx-auto w-full max-w-350 px-6 pb-16 pt-28 lg:px-12 lg:pb-24 lg:pt-32">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-foreground/10 pb-8">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                Portfolio
              </p>
              <h1 className="mt-2 text-[clamp(2.2rem,4.8vw,4.8rem)] font-medium uppercase leading-none tracking-tight">
                All Work
              </h1>
            </div>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-foreground/20 px-6 py-2 text-xs font-medium uppercase tracking-wide text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              Back to home
            </Link>
          </div>

          <h2 className="sr-only">Projects</h2>
          <p className="mt-10 max-w-2xl text-muted-foreground">
            Six projects ranging from a Google Play testing service and an AI SEO
            platform to the open source Web MCP browser automation server. Each
            has its own case study with overview, highlights and the tech behind
            it.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {selectedWorkProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
