import { PremiumButton } from "./premium-button";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-dvh w-full overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 -top-150 bg-[radial-gradient(ellipse_100%_60%_at_50%_50%,var(--color-glow-base)_0%,color-mix(in_srgb,var(--color-primary)_50%,transparent)_40%,transparent_80%)]" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex h-full max-w-350 flex-col justify-between px-6 pt-20 pb-5 lg:px-12 lg:pt-24 lg:pb-8">
        {/* ─ "Hey, there" text ─ */}
        <div className="flex justify-center animate-fade-in-up">
          <h2 className="font-serif italic text-[clamp(2.5rem,6vw,5rem)] text-foreground/90 tracking-wide leading-none flex flex-row gap-40 items-center pl-10">
            <span>Hey,</span>
            <div className="flex flex-row items-start"><span></span><span className="ml-4">there</span></div>
          </h2>
        </div>

        {/* Person image goes here later */}
        <div className="flex flex-1 items-center justify-center min-h-0 absolute bottom-0 w-full -z-10 left-1/2 -translate-x-1/2">
          <div className="h-[85dvh] w-auto z-10">
            <Image
              src="/my-img.png"
              alt="my-img"
              height={600}
              width={600}
              className="h-full w-auto object-contain"
              style={{ maskImage: 'linear-gradient(to top, transparent 0%, black 20%)', WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 20%)' }}
            />
          </div>
        </div>

        <div className="mb-5 flex flex-col items-center justify-between gap-2 sm:flex-row sm:items-center">
          <PremiumButton text="Hire Me" />
          <p
            className="animate-slide-in-right max-w-[240px] text-right text-xs sm:text-sm leading-relaxed text-foreground/60"
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
        <div className="shrink-0">
          {/* Badge + specialization row */}

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
