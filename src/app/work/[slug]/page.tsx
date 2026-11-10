import { Metadata } from "next";
import { notFound } from "next/navigation";
import { selectedWorkProjects } from "@/lib/selected-work-data";
import SohubCaseStudy from "@/components/work/sohub-case-study";

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
    title: `${project.title} Case Study | Amit Narwal`,
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

  const projectIndex = selectedWorkProjects.findIndex(
    (p) => p.slug === project.slug
  );
  const nextProject =
    selectedWorkProjects[(projectIndex + 1) % selectedWorkProjects.length];

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
            project.slug === "ai-autofill-chrome-extension"
              ? "Chrome"
              : "Windows, macOS, Linux",
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
      {
        "@type": "ListItem",
        position: 2,
        name: "Work",
        item: `${siteUrl}/work`,
      },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([creativeWorkSchema, breadcrumbSchema]),
        }}
      />
      <SohubCaseStudy project={project} nextProject={nextProject} />
    </>
  );
}
