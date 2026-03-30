import Link from "next/link";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { selectedWorkProjects } from "@/lib/selected-work-data";
import ProjectCard from "@/components/shared/project-card";

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background text-foreground">
        <section className="mx-auto w-full max-w-350 px-6 pb-16 pt-28 lg:px-12 lg:pb-24 lg:pt-32">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-foreground/10 pb-8">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                Portfolio
              </p>
              <h1 className="mt-2 text-[clamp(2.2rem,4.8vw,4.8rem)] font-medium uppercase leading-none tracking-tight">
                All Work
              </h1>
            </div>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-foreground/20 px-6 py-2 text-xs font-medium uppercase tracking-wide text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              Back to home
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {selectedWorkProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
