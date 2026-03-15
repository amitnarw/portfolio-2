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
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-6 top-1 text-[clamp(3.6rem,13vw,8.2rem)] font-semibold uppercase leading-none tracking-[0.06em] text-foreground/10 dark:text-foreground/5 lg:left-12"
        >
          EXPERIENCE
        </div>

        <div className="relative flex flex-col justify-between gap-4 pt-4 sm:flex-row sm:items-start">
          <h2 className="text-[clamp(2.2rem,4.2vw,3.7rem)] font-medium uppercase leading-none tracking-tight">
            EXPERIENCE
          </h2>

          <p className="w-fit pb-1 text-[clamp(1.3rem,1.9vw,2rem)] font-normal leading-none text-muted-foreground dark:text-foreground/90">
            4+ years of experience
          </p>
        </div>

        <div className="mt-10">
          {experiences.map((item) => (
            <article
              key={item.company}
              className="grid grid-cols-1 gap-4 py-7 border-b border-foreground/5 last:border-none sm:grid-cols-[1fr_auto] sm:items-center"
            >
              <div>
                <h3 className="text-[clamp(1.2rem,1.5vw,2rem)] font-medium leading-[1.15] text-foreground">
                  {item.company}
                </h3>
                <p className="mt-2 text-[clamp(1rem,1.2vw,1.5rem)] font-normal leading-[1.2] text-muted-foreground/70">
                  {item.role}
                </p>
              </div>
              <p className="text-left text-[clamp(1.2rem,1.5vw,2rem)] font-normal leading-none text-muted-foreground/80 sm:text-right">
                {item.period}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
