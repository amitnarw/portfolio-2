export type WorkProject = {
  id: string;
  title: string;
  year: string;
  image: string;
  description: string;
  siteUrl?: string;
};

export const selectedWorkProjects: WorkProject[] = [
  {
    id: "saas-analytics",
    title: "SaaS Analytics Dashboard",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1551281044-8b6db4028a9d?auto=format&fit=crop&w=900&q=80",
    description:
      "A full dashboard with live KPIs, role-based access, and reporting workflows.",
    siteUrl: "#",
  },
  {
    id: "healthcare-booking",
    title: "Healthcare Booking Platform",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
    description:
      "Appointment booking and patient records interface with clean scheduling UX.",
    siteUrl: "#",
  },
  {
    id: "real-estate",
    title: "Real Estate Listing Portal",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80",
    description:
      "Property search platform with filters, maps, and agent lead capture flows.",
    siteUrl: "#",
  },
  {
    id: "restaurant",
    title: "Restaurant Ordering Website",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80",
    description:
      "High-converting online menu with cart, checkout, and order tracking.",
    siteUrl: "#",
  },
  {
    id: "edtech",
    title: "EdTech Learning Platform",
    year: "2022",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
    description:
      "Course catalog, progress tracking, and interactive lesson dashboards.",
    siteUrl: "#",
  },
  {
    id: "agency",
    title: "Creative Agency Website",
    year: "2021",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    description:
      "Marketing website focused on storytelling, lead generation, and brand trust.",
    siteUrl: "#",
  },
];
