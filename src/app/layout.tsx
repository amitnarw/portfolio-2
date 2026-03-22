import type { Metadata } from "next";
import { Poppins, Instrument_Serif, Bebas_Neue } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

// Site config
const siteUrl = "https://amitnarwal.dev"; // Assuming standard format, adjust if needed
const siteName = "Amit Narwal | Freelance Full Stack & AI Developer";
const siteDescription =
  "Hire Amit Narwal, a premium Freelance Full Stack & AI Developer specializing in high-performance web applications using React, Next.js, Node.js, and Machine Learning. Delivering scalable AI solutions, API architecture, and digital excellence.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | Amit Narwal`,
  },
  description: siteDescription,
  keywords: [
    "Amit Narwal",
    "Hire Full Stack Developer",
    "Freelance AI Developer",
    "Machine Learning Engineer",
    "Next.js SEO Expert",
    "React Performance Optimization",
    "Senior Node.js Backend Architect",
    "Custom Chrome Extension Developer",
    "Scalable Web Applications",
    "API Development Solutions",
    "Freelance Software Engineer",
    "Creative Web Developer",
    "Premium Web Design",
  ],
  authors: [{ name: "Amit Narwal", url: siteUrl }],
  creator: "Amit Narwal",
  publisher: "Amit Narwal",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: [`${siteUrl}/og-image.png`],
  },
  alternates: {
    canonical: siteUrl,
  },
};

// Structured data for search engines & AI Models
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Amit Narwal",
  url: siteUrl,
  jobTitle: "Freelance Full Stack & AI Developer",
  description: siteDescription,
  knowsAbout: [
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "Machine Learning",
    "Artificial Intelligence",
    "TypeScript",
    "Tailwind CSS",
    "REST & GraphQL APIs",
    "System Architecture",
  ],
  sameAs: [
    "https://github.com/yourusername",
    "https://linkedin.com/in/yourusername",
  ],
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Amit Narwal - Web & AI Development Services",
  image: `${siteUrl}/my-img.png`,
  description:
    "Premium freelance web development and AI integration services for businesses looking to scale with high-performance digital products.",
  provider: {
    "@type": "Person",
    name: "Amit Narwal",
  },
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Full Stack Application Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI & Machine Learning Integration",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Performance & SEO Optimization",
        },
      },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  description: siteDescription,
  author: {
    "@type": "Person",
    name: "Amit Narwal",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              personSchema,
              websiteSchema,
              professionalServiceSchema,
            ]),
          }}
        />
      </head>
      <body
        className={`${poppins.variable} ${instrumentSerif.variable} ${bebasNeue.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
