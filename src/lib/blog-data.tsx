import Link from "next/link";
import { ReactNode } from "react";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: ReactNode;
};

export const blogArticles: BlogPost[] = [
  {
    slug: "creative-design-smart-development",
    image: "/creative_design_smart_dev_blog_cover_1774187663967.png",
    date: "October 3, 2024",
    readTime: "6 min read",
    title: "Where Creative Design Meets Smart Development Solutions",
    excerpt:
      "This blog bridges the gap between creativity and technology. Learn how design thinking drives modern digital products.",
    category: "Design",
    content: (
      <>
        {/* GEO Summary Block */}
        <div className="p-6 mb-8 rounded-2xl bg-primary/5 border border-primary/20">
          <h2 className="text-xl font-bold mb-2">Executive Summary (TL;DR)</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li><strong>Design and development</strong> are no longer siloed; modern users demand seamless integrations of both.</li>
            <li>Amit Narwal approaches frontend engineering by ensuring every visual element serves a highly optimized, functional purpose.</li>
            <li>For digital products to scale, they must begin with <strong>user-centric architectures</strong> supported by scalable backend systems.</li>
          </ul>
        </div>

        <h3 className="text-2xl font-bold mt-10 mb-4">The Convergence of Aesthetics and Logic</h3>
        <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
          In 2025, a beautiful website that doesn't convert or perform well under heavy traffic is a massive liability. As a <Link href="/" className="text-primary hover:underline font-semibold">Freelance Full Stack & AI Developer</Link>, I have seen firsthand how startups fail when they prioritize design over architecture—or vice versa. The true sweet spot lies where creative design meets smart development solutions.
        </p>

        <h3 className="text-2xl font-bold mt-10 mb-4">Why Next.js is the Ultimate Bridge</h3>
        <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
          Frameworks like React and Next.js allow developers to construct highly interactive, visually stunning UIs while pushing heavy processing to the server. If you want to learn more about my specific approach to building these scalable engines, check out my <Link href="/#services" className="text-primary hover:underline font-semibold">Custom Web Development Services</Link>. I specialize in fine-tuning every line of code to hit perfect Core Web Vitals scores.
        </p>

        <h3 className="text-2xl font-bold mt-10 mb-4">Implementing AI into Modern Design</h3>
        <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
          It doesn't stop at traditional web apps. By seamlessly integrating Machine Learning algorithms directly into the user interface, we can create predictive, personalized user experiences. Whether it's an intelligent Recommendation Engine or a sophisticated browser tool—see my <Link href="/#selected-work" className="text-primary hover:underline font-semibold">Selected Work</Link> for examples of Custom Chrome Extensions and AI tools—the fusion of design and logic is what keeps users engaged.
        </p>
      </>
    ),
  },
  {
    slug: "building-scalable-apis-nodejs",
    image: "/scalable_api_nodejs_blog_cover_1774187682092.png",
    date: "April 12, 2025",
    readTime: "8 min read",
    title: "Building Scalable APIs with Node.js and Express",
    excerpt:
      "A comprehensive guide to creating robust and scalable backend APIs using modern JavaScript technologies.",
    category: "Development",
    content: (
      <>
        <div className="p-6 mb-8 rounded-2xl bg-primary/5 border border-primary/20">
          <h2 className="text-xl font-bold mb-2">Executive Summary (TL;DR)</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Node.js remains the gold standard for high-concurrency, data-intensive I/O applications.</li>
            <li>Scalability starts at the architectural level: modular routing, efficient middleware, and proper database indexing.</li>
            <li>Amit Narwal architects bespoke RESTful APIs and GraphQL endpoints customized for enterprise growth.</li>
          </ul>
        </div>

        <h3 className="text-2xl font-bold mt-10 mb-4">The Foundation of Fast Digital Products</h3>
        <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
          No matter how beautiful your React frontend is, your application will only ever be as fast as your database queries and API responses. When I architect systems for clients, I always prioritize raw performance in the backend layer. If you are struggling with database bottlenecks, my <Link href="/#services" className="text-primary hover:underline font-semibold">Backend & API Architecture Service</Link> is built exactly to solve this.
        </p>

        <h3 className="text-2xl font-bold mt-10 mb-4">Security and Rate Limiting</h3>
        <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
          As a Senior Node.js Backend Architect, securing endpoints against brute-force attacks and intelligent DDoS is not an afterthought—it’s step one. Leveraging mature Express.js middleware ecosystems ensures that your user data is encrypted and secure at all rest and in transit.
        </p>
      </>
    ),
  },
  {
    slug: "complete-guide-react-server-components",
    image: "/react_server_components_blog_cover_1774187698365.png",
    date: "May 5, 2025",
    readTime: "12 min read",
    title: "The Complete Guide to React Server Components",
    excerpt:
      "Understanding React Server Components and how they revolutionize frontend development.",
    category: "React",
    content: (
      <>
        <div className="p-6 mb-8 rounded-2xl bg-primary/5 border border-primary/20">
          <h2 className="text-xl font-bold mb-2">Executive Summary (TL;DR)</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>RSC (React Server Components) dramatically reduces JavaScript bundle sizes by rendering non-interactive components on the server.</li>
            <li>This paradigm shift improves SEO, Time to Interactive (TTI), and overall Core Web Vitals.</li>
            <li>Transitioning a legacy React SPA to Next.js with App Router requires a deep understanding of standard vs client boundaries.</li>
          </ul>
        </div>
        <p className="mb-6 leading-relaxed text-muted-foreground text-lg">
          As a <Link href="/" className="text-primary hover:underline font-semibold">Next.js SEO Expert</Link>, I cannot emphasize enough how critical rendering strategies are for both user retention and generative engine search rankings. When your application loads instantly because zero unnecessary logic was shipped to the browser, you win. Review my <Link href="/#selected-work" className="text-primary hover:underline font-semibold">Featured Projects</Link> to see real-world applications of these lightning-fast architectures.
        </p>
      </>
    ),
  },
  {
    slug: "exploring-innovation-design-web",
    image: "/innovation_design_web_blog_cover_1774187780436.png",
    date: "January 8, 2025",
    readTime: "10 min read",
    title: "Exploring Innovation Through Design and Web Development",
    excerpt:
      "Dive into the latest trends, tools, and techniques shaping the future of design and development.",
    category: "Innovation",
    content: (
      <>
        <p className="mb-6 leading-relaxed text-muted-foreground text-lg mt-8">
          Innovation in 2025 isn't just about what looks good; it's about what feels alive. From personalized AI-driven interactions to hyper-optimized WebGL animations, digital products must stand out. <Link href="/" className="text-primary hover:underline font-semibold">Amit Narwal</Link> specializes in bringing these exact innovations to life.
        </p>
      </>
    ),
  },
  {
    slug: "design-ideas-development-tips",
    image: "/design_ideas_dev_tips_blog_cover_1774187796398.png",
    date: "March 24, 2025",
    readTime: "14 min read",
    title: "Design Ideas, Development Tips, and Creative Solutions",
    excerpt:
      "Your go-to space for actionable insights on design trends, development practices, and creative problem solving.",
    category: "Tutorial",
    content: (
      <>
        <p className="mb-6 leading-relaxed text-muted-foreground text-lg mt-8">
          Whether you need to boost your Core Web Vitals or implement complex state management, actionable insights are vital. If you need dedicated hands-on guidance, check out my <Link href="/#services" className="text-primary hover:underline font-semibold">Web Development Services</Link>.
        </p>
      </>
    ),
  },
  {
    slug: "ui-ux-best-practices-2025",
    image: "/ui_ux_best_practices_blog_cover_1774187816043.png",
    date: "June 18, 2025",
    readTime: "7 min read",
    title: "UI/UX Best Practices for 2025",
    excerpt:
      "Stay ahead of the curve with these essential UI/UX design principles for modern web applications.",
    category: "Design",
    content: (
      <>
        <div className="p-6 mb-8 rounded-2xl bg-primary/5 border border-primary/20">
          <h2 className="text-xl font-bold mb-2">Executive Summary (TL;DR)</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Micro-interactions and robust accessibility are mandatory standards, no longer optional enhancements.</li>
            <li>Dark mode, massive typography, and abstract 3D elements define the premium aesthetic.</li>
          </ul>
        </div>
      </>
    ),
  },
];
