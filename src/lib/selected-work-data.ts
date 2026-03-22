export type WorkProject = {
  id: string;
  title: string;
  image: string;
  description: string;
  tags: string[];
  siteUrl?: string;
};

export const selectedWorkProjects: WorkProject[] = [
  {
    id: "inTesters",
    title: "InTesters - Play Store Testing",
    image: "/intesters.png",
    description:
      "Accelerate your Play Store launch with InTesters. We provide real Android tester communities to meet Google's closed testing requirements in 14 days, ensuring a seamless transition to production.",
    tags: ["Android", "Play Console", "Beta Testing", "App Development"],
    siteUrl: "https://intesters.com",
  },
  {
    id: "ai_chrome_extension",
    title: "AI Auto-fill Chrome Extension",
    image: "/autofill-chrome_extension.jpg",
    description:
      "Boost productivity with an AI-powered Chrome Extension. Automate complex form-filling and repetitive data entry using advanced LLMs and context-aware automation for a seamless browsing experience.",
    tags: ["AI", "Chrome Extension", "Automation", "LLM", "JavaScript"],
    siteUrl: "#",
  },
  // {
  //   id: "invoice-generator",
  //   title: "Invoice Generator",
  //   image: "/invoice-generator.webp",
  //   description:
  //     "A professional Invoice Management and Billing platform with a SaaS-inspired analytics dashboard. Automate your billing workflows, track real-time revenue KPIs, and generate high-quality PDF invoices.",
  //   tags: ["Next.js", "Dashboard", "SaaS", "Data Visualization", "TypeScript"],
  //   siteUrl: "https://invoice-generator-115.vercel.app",
  // },
  {
    id: "portfolio",
    title: "Portfolio website",
    image: "/portfolio.webp",
    description:
      "A premium developer portfolio engineered for maximum SEO and performance. Featuring a sleek bento-grid layout, fluid Framer Motion animations, and a focus on visual storytelling.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "SEO-Optimized", "UI/UX"],
    siteUrl: "#",
  },
];
