import { PremiumButton } from "@/components/shared/premium-button";
import Image from "next/image";
import { HireMe } from "../shared/hire-me";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-[calc(100dvh+50px)] w-full overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background curve gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-white dark:bg-background" />

        <svg
          className="absolute inset-x-0 top-0 h-[calc(100dvh+50px)] w-full"
          viewBox="0 0 1440 720"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <filter
              id="hero-curve-glow"
              x="-20%"
              y="-80%"
              width="140%"
              height="260%"
            >
              <feGaussianBlur stdDeviation="42" />
            </filter>
            <filter
              id="hero-curve-soft"
              x="-20%"
              y="-80%"
              width="140%"
              height="260%"
            >
              <feGaussianBlur stdDeviation="42" />
            </filter>
            <linearGradient id="hero-curve-line" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(255,214,116,0.95)" />
              <stop offset="100%" stopColor="rgba(255,236,191,0.85)" />
            </linearGradient>
          </defs>

          <path
            d="M 0 220 A 800 500 0 0 0 1440 220"
            fill="none"
            stroke="rgba(255,209,97,0.02)"
            strokeWidth="550"
            strokeLinecap="round"
            filter="url(#hero-curve-glow)"
          />
          <path
            d="M 0 220 A 800 500 0 0 0 1440 220"
            fill="none"
            stroke="rgba(255,209,97,0.10)"
            strokeWidth="450"
            strokeLinecap="round"
            filter="url(#hero-curve-glow)"
          />
          <path
            d="M 0 220 A 800 500 0 0 0 1440 220"
            fill="none"
            stroke="rgba(255,209,97,0.20)"
            strokeWidth="350"
            strokeLinecap="round"
            filter="url(#hero-curve-soft)"
          />
          <path
            d="M 0 220 A 800 500 0 0 0 1440 220"
            fill="none"
            stroke="rgba(255,229,168,0.30)"
            strokeWidth="150"
            strokeLinecap="round"
            filter="url(#hero-curve-soft)"
          />
        </svg>

        <div className="absolute left-1/2 top-[52%] h-240 w-880 max-w-none -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(255,225,150,0.22)_0%,rgba(255,238,203,0.1)_44%,transparent_78%)] blur-[110px]" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex h-full max-w-350 flex-col justify-between px-6 pt-20 pb-5 lg:px-12 lg:pt-28 lg:pb-8">
        <div className="mt-10 flex sm:hidden flex-col justify-between gap-6 sm:flex-row items-center z-2 w-full">
          <h2
            className="animate-slide-in-right max-w-72 text-right text-sm leading-relaxed text-foreground/80 sm:text-foreground/60 self-end sm:self-auto hidden sm:block"
            style={{ animationDelay: "0.5s", animationFillMode: "both" }}
          >
            Freelance expert specializing in
            <br />
            <strong>React, Next.js, AI Integration,</strong>
            <br />
            and high-performance Full Stack
            <br />
            Application Architecture.
          </h2>
          <h2
            className="animate-slide-in-right text-sm text-center leading-relaxed text-foreground/80 sm:text-foreground/60 self-end sm:self-auto block sm:hidden"
            style={{ animationDelay: "0.5s", animationFillMode: "both" }}
          >
            Freelance expert specializing in{" "}
            <strong className="italic font-serif tracking-wider">
              React, Next.js, AI Integration,
            </strong>{" "}
            and high-performance Full Stack Application Architecture.
          </h2>
          <HireMe />
        </div>

        {/* ─ "Hey, there" text ─ */}
        <div className="flex justify-center animate-fade-in-up mb-30 sm:mb-0 z-2">
          <div
            className="font-serif italic text-[clamp(2.5rem,6vw,5rem)] text-foreground/90 tracking-wide leading-none flex flex-row gap-25 sm:gap-40 items-center pl-5 sm:pl-10"
            aria-hidden="true"
          >
            <span>Hey,</span>
            <div className="flex flex-row items-start">
              <span></span>
              <span className="ml-2 sm:ml-4">there</span>
            </div>
          </div>
        </div>

        {/* Animated Person Image Container */}
        <div className="flex flex-1 items-center justify-center min-h-0 absolute bottom-0 w-full z-1 left-1/2 -translate-x-1/2 pointer-events-none">
          <div
            className="h-[60dvh] sm:h-[88dvh] w-full sm:w-auto z-10 animate-fade-in-up"
            style={{ animationDelay: "0.3s", animationFillMode: "both" }}
          >
            <div className="h-full w-full animate-float">
              <Image
                src="/my-img.png"
                alt="Amit Narwal"
                height={800}
                width={800}
                priority
                className="h-full w-full sm:w-auto object-contain object-bottom sm:object-top pointer-events-auto"
                style={{
                  maskImage:
                    "linear-gradient(to top, transparent 0%, black 20%)",
                  WebkitMaskImage:
                    "linear-gradient(to top, transparent 0%, black 20%)",
                }}
              />
            </div>
          </div>
        </div>

        <div className="mb-6 sm:mb-10 hidden sm:flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center z-2 w-full">
          <HireMe />
          <h2
            className="animate-slide-in-right max-w-72 text-right text-sm leading-relaxed text-foreground/80 sm:text-foreground/60 self-end sm:self-auto"
            style={{ animationDelay: "0.5s", animationFillMode: "both" }}
          >
            Freelance expert specializing in
            <br />
            <strong>React, Next.js, AI Integration,</strong>
            <br />
            and high-performance Full Stack
            <br />
            Application Architecture.
          </h2>
        </div>

        {/* ─ Bottom section ─ */}
        <div className="shrink-0 mb-10 z-2 relative">
          {/* Name + Title row */}
          <div className="flex items-start justify-between gap-4 flex-row sm:items-end w-full">
            <div
              className="animate-slide-in-left w-full sm:w-auto"
              style={{ animationDelay: "0.6s", animationFillMode: "both" }}
            >
              <h1
                style={{ fontFamily: "var(--font-bebas-neue)" }}
                className="text-[clamp(3.5rem,10vw,5.5rem)] font-normal uppercase leading-[0.85] tracking-tight text-foreground"
              >
                <span className="sr-only">
                  Freelance Full Stack Developer & AI Engineer{" "}
                </span>
                <span aria-hidden="true">I AM</span>
                <br aria-hidden="true" />
                <span className="block">AMIT NARWAL</span>
              </h1>
            </div>

            <div
              className="animate-slide-in-right self-end sm:self-auto"
              style={{ animationDelay: "0.8s", animationFillMode: "both" }}
            >
              <p
                style={{ fontFamily: "var(--font-bebas-neue)" }}
                className="text-right text-[clamp(2rem,6vw,3.5rem)] font-normal uppercase leading-none tracking-tight text-foreground"
                aria-hidden="true"
              >
                FULL
                <br />
                STACK
                <br />
                DEVELOPER
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
