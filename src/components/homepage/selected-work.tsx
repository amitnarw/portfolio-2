"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { selectedWorkProjects, WorkProject } from "@/lib/selected-work-data";
import SohubCaseStudy from "@/components/work/sohub-case-study";
import { PremiumButton1 } from "@/components/shared/premium-button-1";
import { ArrowRight } from "lucide-react";
import SectionHeader from "../shared/section-header";

export default function SelectedWork() {
  const projects = selectedWorkProjects.slice(0, 6);
  const [mounted, setMounted] = useState(false);
  const [activeProject, setActiveProject] = useState<WorkProject | null>(null);

  const modalSheetRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const isClosingRef = useRef(false);
  const savedScrollY = useRef(0);

  useEffect(() => {
    setMounted(true);
    return () => {
      document.body.style.overflow = "";
      const homepageEl = document.getElementById("homepage-root");
      if (homepageEl) {
        homepageEl.style.filter = "";
        homepageEl.style.transform = "";
      }
    };
  }, []);

  const openModal = (project: WorkProject) => {
    isClosingRef.current = false;

    // Save exact scroll position where the user was on the homepage
    savedScrollY.current =
      window.scrollY ||
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    setActiveProject(project);

    // Sync URL without router page reload
    try {
      window.history.pushState(
        { modal: true, slug: project.slug },
        "",
        `/work/${project.slug}`
      );
    } catch {
      // fallback
    }

    // Lock body scroll
    document.body.style.overflow = "hidden";

    // Run exact sohub.digital Web Animations API in next frame
    requestAnimationFrame(() => {
      const homepageEl = document.getElementById("homepage-root");
      const sheetEl = modalSheetRef.current;
      const backdropEl = backdropRef.current;

      if (sheetEl) {
        sheetEl.scrollTop = 0;
      }

      // 1. Background Homepage Animation: translateY(-35%) + brightness(0.12) + blur(16px)
      if (homepageEl) {
        homepageEl.animate(
          [
            { filter: "brightness(1) blur(0px)", transform: "translateY(0)" },
            {
              filter: "brightness(0.12) blur(16px)",
              transform: "translateY(-35%)",
            },
          ],
          {
            duration: 1200,
            easing: "cubic-bezier(0.86, 0, 0.07, 1)",
            fill: "forwards",
          }
        );
      }

      // 2. Incoming Sheet Animation: translateY(100%) scale(0.85) -> translateY(0) scale(1)
      if (sheetEl) {
        const sheetAnim = sheetEl.animate(
          [
            { transform: "translateY(100%) scale(0.85)" },
            { transform: "translateY(0) scale(1)" },
          ],
          {
            duration: 1200,
            easing: "cubic-bezier(0.86, 0, 0.07, 1)",
            fill: "forwards",
          }
        );
        sheetAnim.onfinish = () => {
          sheetEl.style.transform = "none";
        };

        // Border radius: 4rem -> 0 with 800ms delay and 400ms ease-out
        const radAnim = sheetEl.animate(
          [{ borderRadius: "4rem" }, { borderRadius: "0rem" }],
          {
            delay: 800,
            duration: 400,
            easing: "ease-out",
            fill: "forwards",
          }
        );
        radAnim.onfinish = () => {
          sheetEl.style.borderRadius = "0rem";
        };
      }

      // 3. Backdrop overlay: opacity 0 -> 1
      if (backdropEl) {
        backdropEl.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 1200,
          easing: "cubic-bezier(0.86, 0, 0.07, 1)",
          fill: "forwards",
        });
      }
    });
  };

  const closeModal = (updateHistory: boolean = true) => {
    if (isClosingRef.current) return;
    isClosingRef.current = true;

    const homepageEl = document.getElementById("homepage-root");
    const sheetEl = modalSheetRef.current;
    const backdropEl = backdropRef.current;

    if (updateHistory && window.location.pathname.startsWith("/work/")) {
      try {
        window.history.pushState(null, "", "/");
      } catch {
        // fallback
      }
    }

    // 1. Sheet corner radius returns to 4rem immediately
    if (sheetEl) {
      sheetEl.animate([{ borderRadius: "0rem" }, { borderRadius: "4rem" }], {
        duration: 350,
        easing: "ease-in",
        fill: "forwards",
      });

      // 2. Sheet slides down to translateY(100%) scale(0.85)
      const sheetAnim = sheetEl.animate(
        [
          { transform: "translateY(0) scale(1)" },
          { transform: "translateY(100%) scale(0.85)" },
        ],
        {
          duration: 1100,
          easing: "cubic-bezier(0.86, 0, 0.07, 1)",
          fill: "forwards",
        }
      );

      sheetAnim.onfinish = () => {
        setActiveProject(null);
        document.body.style.overflow = "";
        isClosingRef.current = false;
        if (homepageEl) {
          homepageEl.style.filter = "";
          homepageEl.style.transform = "";
        }
        // Restore exact scroll position on the homepage
        window.scrollTo({
          top: savedScrollY.current,
          left: 0,
          behavior: "instant",
        });
      };
    } else {
      setActiveProject(null);
      document.body.style.overflow = "";
      isClosingRef.current = false;
      window.scrollTo({
        top: savedScrollY.current,
        left: 0,
        behavior: "instant",
      });
    }

    // 3. Homepage restores: translateY(-35%) -> translateY(0)
    if (homepageEl) {
      const homeAnim = homepageEl.animate(
        [
          {
            filter: "brightness(0.12) blur(16px)",
            transform: "translateY(-35%)",
          },
          { filter: "brightness(1) blur(0px)", transform: "translateY(0)" },
        ],
        {
          duration: 1100,
          easing: "cubic-bezier(0.86, 0, 0.07, 1)",
          fill: "forwards",
        }
      );
      homeAnim.onfinish = () => {
        homepageEl.style.filter = "";
        homepageEl.style.transform = "";
        window.scrollTo({
          top: savedScrollY.current,
          left: 0,
          behavior: "instant",
        });
      };
    }

    // 4. Backdrop fades out
    if (backdropEl) {
      backdropEl.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 1100,
        easing: "cubic-bezier(0.86, 0, 0.07, 1)",
        fill: "forwards",
      });
    }
  };

  // Keyboard and browser back listeners
  useEffect(() => {
    if (!activeProject) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    const handlePopState = () => {
      closeModal(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [activeProject]);

  return (
    <>
      <section
        id="selected-work"
        className="home-projects relative mx-auto w-full max-w-350 px-6 py-14 lg:px-12 lg:py-16"
        aria-label="Selected Work section"
      >
        <SectionHeader
          title="Selected Work"
          subtitle=""
          backgroundText="PROJECTS"
        />

        {/* 2-column Projects Grid (NO BORDERS) */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 w-full gap-4 lg:gap-6">
          {projects.map((project, index) => {
            const externalUrl = project.siteUrl || project.repoUrl;

            return (
              <div
                key={project.id || project.slug}
                onClick={(e) => {
                  e.preventDefault();
                  openModal(project);
                }}
                className="group relative w-full aspect-video h-auto rounded-2xl lg:rounded-3xl overflow-hidden cursor-pointer select-none transition-transform duration-300 ease-spring hover:scale-[1.02] shadow-md hover:shadow-2xl bg-muted"
              >
                {/* External Link Button (Image 2 Icon with NO BORDER) */}
                {externalUrl && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      window.open(externalUrl, "_blank", "noopener,noreferrer");
                    }}
                    title={`Open ${project.title} live link`}
                    aria-label={`Open ${project.title} live link in a new tab`}
                    className="absolute top-4 right-4 lg:top-6 lg:right-6 z-10 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-black/60 hover:bg-white text-white hover:text-black flex items-center justify-center backdrop-blur-md transition-all duration-300 hover:scale-110 shadow-xl group/btn cursor-pointer"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 lg:w-5.5 lg:h-5.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </button>
                )}

                {/* Bottom Gradient overlay */}
                <div className="z-[1] absolute w-full left-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

                {/* Project Image */}
                <Image
                  src={project.image}
                  alt={project.imageAlt || `${project.title} project by Amit Narwal`}
                  fill
                  priority={index < 2}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-full rounded-2xl lg:rounded-3xl z-0 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Title & Sliding Horizontal Arrow from sohub.digital */}
                <div className="absolute bottom-4 lg:bottom-8 z-[2] left-4 lg:left-8 flex flex-row items-center overflow-hidden w-[calc(100%-2rem)] lg:w-[calc(100%-4rem)] pointer-events-none">
                  {/* Horizontal Arrow SVG sliding in from left on hover */}
                  <span className="hidden lg:block w-4 lg:w-6 arrow-svg -translate-x-full group-hover:translate-x-0 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] text-white mr-3 shrink-0">
                    <svg
                      width="100%"
                      viewBox="0 0 271 226"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M271 113L157.575 226L136.762 205.265L214.658 127.662L-8.66836e-06 127.662V98.338L214.657 98.338L136.763 20.7349L157.575 0L271 113Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>

                  {/* Project title sliding right on hover */}
                  <h3 className="text-2xl sm:text-3xl text-white tracking-tight font-semibold lg:-translate-x-9 lg:group-hover:translate-x-0 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] drop-shadow-md">
                    {project.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Work button */}
        <div className="mt-14 flex justify-center">
          <PremiumButton1
            href="/work"
            className="group gap-2 px-8 py-3.5 border-foreground/20 hover:border-primary hover:bg-primary/5 transition-all duration-300"
          >
            <span className="text-sm font-semibold uppercase tracking-wider">
              Explore All Case Studies
            </span>
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </PremiumButton1>
        </div>
      </section>

      {/* ── FULL-SCREEN CASE STUDY MODAL PORTAL (Exact sohub.digital animation & NO BORDERS) ── */}
      {mounted &&
        activeProject &&
        createPortal(
          <div
            id="work-modal-portal"
            className="fixed inset-0 z-[9999] overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-label={`${activeProject.title} case study`}
          >
            {/* Dark Dull + Blur Backdrop */}
            <div
              ref={backdropRef}
              onClick={() => closeModal()}
              className="fixed inset-0 z-[1] bg-black/60 backdrop-blur-md opacity-0"
            />

            {/* Modal Sheet Container animating with exact cubic-bezier and scale (NO BORDERS) */}
            <div
              ref={modalSheetRef}
              className="relative z-[2] w-full h-full overflow-y-auto bg-background text-foreground shadow-[0_-25px_100px_rgba(0,0,0,0.95)] will-change-transform"
              style={{
                transform: "translateY(100%) scale(0.85)",
                borderRadius: "4rem",
              }}
            >
              <SohubCaseStudy
                project={activeProject}
                isModal={true}
                onClose={() => closeModal()}
              />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
