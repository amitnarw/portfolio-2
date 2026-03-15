import Link from "next/link";
import { selectedWorkProjects } from "@/lib/selected-work-data";

export default function SelectedWork() {
  const loopProjects = [...selectedWorkProjects, ...selectedWorkProjects];

  return (
    <section
      id="selected-work"
      className="relative overflow-hidden bg-accent text-foreground dark:bg-card py-20"
      aria-label="Selected work section"
    >
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/2 via-transparent to-black/6 dark:from-white/2 dark:to-black/30" />

      <div className="relative mx-auto w-full max-w-350 px-6 py-14 lg:px-12 lg:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-6 top-1 text-[clamp(3.6rem,13vw,8.2rem)] font-semibold uppercase leading-none tracking-[0.06em] text-foreground/10 dark:text-foreground/5 lg:left-12"
        >
          SELECTED WORK
        </div>

        <div className="relative flex flex-col justify-between gap-4 pt-4 sm:flex-row sm:items-start">
          <h2 className="text-[clamp(2.2rem,4.2vw,3.7rem)] font-medium uppercase leading-none tracking-tight">
            SELECTED WORK
          </h2>

          <p className="w-fit pb-1 text-[clamp(1.3rem,1.9vw,2rem)] font-normal leading-none text-muted-foreground dark:text-foreground/90">
            Websites I built
          </p>
        </div>

        <div className="relative mt-10 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-12 bg-linear-to-r from-accent to-transparent dark:from-card" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-12 bg-linear-to-l from-accent to-transparent dark:from-card" />

          <div className="flex w-max gap-4 animate-selected-work-marquee hover:[animation-play-state:paused]">
            {loopProjects.map((project, index) => (
              <article
                key={`${project.id}-${index}`}
                className="group w-[240px] shrink-0 bg-background/95 p-3 ring-1 ring-black/10 dark:bg-background/30 dark:ring-white/10"
              >
                <div
                  className="h-[320px] w-full bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url('${project.image}')` }}
                  aria-hidden="true"
                />
                <div className="mt-2 flex items-center justify-between">
                  <h3 className="text-sm font-medium text-foreground/90 transition-colors group-hover:text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-sm font-semibold text-foreground/70">{project.year}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/work"
            className="inline-flex items-center justify-center rounded-full border border-foreground/20 px-8 py-3 text-sm font-medium uppercase tracking-wide text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            View all work
          </Link>
        </div>
      </div>
    </section>
  );
}
