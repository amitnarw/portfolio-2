import MarqueeStar from "@/components/marquee-star";

const techStack = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "REST API",
  "tRPC",
  "Socket.IO",
  "RBAC",
  "Prisma",
  "Sequelize",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "AI Integration",
  "Payment Gateway",
  "Chrome Extension",
  "Docker",
  "AWS EC2",
  "Vercel",
  "cPanel",
  "Git",
];

export default function SkillsMarquee() {
  const loopedTechStack = [...techStack, ...techStack];

  return (
    <section
      aria-label="Tech stack marquee"
      className="relative overflow-hidden bg-linear-to-b from-white to-zinc-100 py-4"
    >
      <div className="flex min-w-max animate-footer-marquee whitespace-nowrap">
        {loopedTechStack.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-4 pr-7 text-sm tracking-[0.08em] text-foreground/70 sm:text-base"
          >
            <span>{item}</span>
            <MarqueeStar size={30} className="text-orange-300" />
          </span>
        ))}
      </div>
    </section>
  );
}
