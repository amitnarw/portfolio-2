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
const siteUrl = "https://yourname.dev"; // TODO: Replace with your actual domain
const siteName = "Amit Narwal | Full Stack Developer";
const siteDescription =
  "I'm Amit Narwal, a full stack developer who builds web apps with React, Next.js, Node.js, PostgreSQL, and MongoDB. I work with both the PERN and MERN stacks. Open to freelance work and full-time roles.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | Amit Narwal`,
  },
  description: siteDescription,
  keywords: [
    "Amit Narwal",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "MERN Stack Developer",
    "PERN Stack Developer",
    "PostgreSQL",
    "MongoDB",
    "TypeScript",
    "JavaScript",
    "Frontend Developer",
    "Backend Developer",
    "Freelance Developer",
    "Software Engineer",
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
    // creator: "@yourtwitterhandle",
  },
  alternates: {
    canonical: siteUrl,
  },
};

// Structured data for search engines
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Amit Narwal",
  url: siteUrl,
  jobTitle: "Full Stack Developer",
  description: siteDescription,
  knowsAbout: [
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "REST API",
    "GraphQL",
    "Git",
    "Docker",
  ],
  sameAs: [
    "https://github.com/yourusername",
    "https://linkedin.com/in/yourusername",
    // "https://twitter.com/yourusername",
  ],
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
            __html: JSON.stringify([personSchema, websiteSchema]),
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
