import SectionHeader from "@/components/shared/section-header";

const experiences = [
  {
    company: "Designing Solutions",
    role: "MERN Stack + AI Developer",
    period: "Jan 2024 - Now",
  },
  {
    company: "Kreeda Studios",
    role: "MERN Stack Developer",
    period: "Jan 2023 - Jan 2024",
  },
  {
    company: "Freelancing",
    role: "App Developer (Drag & Drop platform)",
    period: "Jan 2020 - Dec 2022",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-accent text-foreground dark:bg-card py-20"
      aria-label="Experience section"
    >
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/2 via-transparent to-black/6 dark:from-white/2 dark:to-black/30" />

      <div className="relative mx-auto w-full max-w-350 px-6 py-14 lg:px-12 lg:py-16">
        <SectionHeader
          title="Professional background"
          subtitle="4+ years of experience"
          backgroundText="EXPERIENCE"
        />

        <div className="mt-10 group/item">
          {experiences.map((item, index) => (
            <div
              key={item.company}
              className="grid grid-cols-1 gap-4 py-7 border-b border-foreground/5 last:border-none sm:grid-cols-[1fr_auto] sm:items-center transition-all duration-500 hover:bg-foreground/[0.03] hover:px-4 hover:mx-[-16px] hover:rounded-lg"
            >
              <div>
                <h3 className="text-[clamp(1.2rem,1.5vw,2rem)] font-medium leading-[1.15] text-foreground transition-colors duration-300 hover:text-primary">
                  {item.company}
                </h3>
                <p className="mt-2 text-[clamp(1rem,1.2vw,1.5rem)] font-normal leading-[1.2] text-muted-foreground/70">
                  {item.role}
                </p>
              </div>
              <p className="text-left text-[clamp(1.2rem,1.5vw,2rem)] font-normal leading-none text-muted-foreground/80 sm:text-right transition-all duration-300 hover:text-foreground hover:translate-x-[-8px]">
                {item.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
