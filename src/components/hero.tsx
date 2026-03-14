import { PremiumButton } from "./premium-button";
import Image from "next/image";

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
          className="absolute inset-x-0 top-0 h-dvh w-full"
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
              <feGaussianBlur stdDeviation="20" />
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
            filter="url(#hero-curve-glow)"
          />
          <path
            d="M 0 220 A 800 500 0 0 0 1440 220"
            fill="none"
            stroke="rgba(255,229,168,0.30)"
            strokeWidth="150"
            strokeLinecap="round"
            filter="url(#hero-curve-soft)"
          />
          {/* <path
            d="M 0 220 A 800 500 0 0 0 1440 220"
            fill="none"
            stroke="rgba(255,229,168,0.5)"
            strokeWidth="80"
            strokeLinecap="round"
            filter="url(#hero-curve-soft)"
          /> */}
        </svg>

        {/* <div className="absolute left-1/2 top-[52%] h-240 w-880 max-w-none -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(255,225,150,0.22)_0%,rgba(255,238,203,0.1)_44%,transparent_78%)] blur-[110px]" /> */}
      </div>

      {/* Content */}
      <div className="relative mx-auto flex h-full max-w-350 flex-col justify-between px-6 pt-20 pb-5 lg:px-12 lg:pt-28 lg:pb-8">
        {/* ─ "Hey, there" text ─ */}
        <div className="flex justify-center animate-fade-in-up z-2">
          <h2 className="font-serif italic text-[clamp(2.5rem,6vw,5rem)] text-foreground/90 tracking-wide leading-none flex flex-row gap-40 items-center pl-10">
            <span>Hey,</span>
            <div className="flex flex-row items-start">
              <span></span>
              <span className="ml-4">there</span>
            </div>
          </h2>
        </div>

        {/* Person image goes here later */}
        <div className="flex flex-1 items-center justify-center min-h-0 absolute bottom-0 w-full z-1 left-1/2 -translate-x-1/2">
          <div className="h-[88dvh] w-auto z-10">
            <Image
              src="/my-img.png"
              alt="my-img"
              height={600}
              width={600}
              className="h-full w-auto object-contain"
              style={{
                maskImage: "linear-gradient(to top, transparent 0%, black 20%)",
                WebkitMaskImage:
                  "linear-gradient(to top, transparent 0%, black 20%)",
              }}
            />
          </div>
        </div>

        <div className="mb-10 flex flex-col items-center justify-between gap-2 sm:flex-row sm:items-center z-2">
          <PremiumButton text="Hire Me" />
          <p
            className="animate-slide-in-right max-w-60 text-right text-xs sm:text-sm leading-relaxed text-foreground/60"
            style={{ animationDelay: "0.5s", animationFillMode: "both" }}
          >
            Specialized in React, Node.js,
            <br />
            PostgreSQL, MongoDB, and Full
            <br />
            Stack Development.
          </p>
        </div>

        {/* ─ Bottom section ─ */}
        <div className="shrink-0 mb-10 z-2">
          {/* Name + Title row */}
          <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-end">
            <div
              className="animate-slide-in-left"
              style={{ animationDelay: "0.6s", animationFillMode: "both" }}
            >
              <h1
                style={{ fontFamily: "var(--font-bebas-neue)" }}
                className="text-[clamp(2.5rem,6vw,5.5rem)] font-normal uppercase leading-[0.85] tracking-tight text-foreground"
              >
                I AM
                <br />
                <span className="block">AMIT NARWAL</span>
              </h1>
            </div>

            <div
              className="animate-slide-in-right"
              style={{ animationDelay: "0.8s", animationFillMode: "both" }}
            >
              <p
                style={{ fontFamily: "var(--font-bebas-neue)" }}
                className="text-right text-[clamp(1.5rem,4vw,3.5rem)] font-normal uppercase leading-none tracking-tight text-foreground"
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
