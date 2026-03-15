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
    id: "bon-seours",
    title: "Bon Secours Mercy Health",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80",
    description:
      "At Bon Secours Mercy Health, we are committed to transforming the way health care is delivered — combining compassion, excellence, and innovation to serve communities with dignity and care.",
    tags: ["Branding", "Design", "Development"],
    siteUrl: "#",
  },
  {
    id: "medibank",
    title: "Medibank Employee Experience",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=900&q=80",
    description:
      "At Medibank, we believe that great customer care starts with a great employee experience. Our people are the heart of everything we do — their well-being, growth, and sense of purpose shape the quality of care we provide.",
    tags: ["Branding", "Design", "Development"],
    siteUrl: "#",
  },
  {
    id: "saas-analytics",
    title: "SaaS Analytics Dashboard",
    image:
      "https://images.unsplash.com/photo-1551281044-8b6db4028a9d?auto=format&fit=crop&w=900&q=80",
    description:
      "A full dashboard with live KPIs, role-based access, and reporting workflows.",
    tags: ["Design", "Development"],
    siteUrl: "#",
  },
  {
    id: "healthcare-booking",
    title: "Healthcare Booking Platform",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
    description:
      "Appointment booking and patient records interface with clean scheduling UX.",
    tags: ["Design", "Development"],
    siteUrl: "#",
  },
];
