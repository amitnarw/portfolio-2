import { PremiumButton } from "./premium-button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-dvh w-full overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_60%_at_50%_50%,var(--color-glow-base)_0%,var(--color-glow-fade)_40%,transparent_80%)]" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex h-full max-w-[1400px] flex-col justify-between px-6 pt-20 pb-5 lg:px-12 lg:pt-24 lg:pb-8">
        {/* ─ "Hey, there" text ─ */}
        <div className="flex justify-center animate-fade-in-up">
          <h2 className="font-serif italic text-[clamp(2.5rem,6vw,5rem)] text-foreground/90 tracking-wide leading-none">
            Hey, there
          </h2>
        </div>

        {/* Person image goes here later */}
        <div className="flex flex-1 items-center justify-center min-h-0">
          <img src="/my-img.png" alt="my-img" className="h-[70dvh]" />
          <div className="relative w-[min(40vh,300px)] aspect-square rounded-full animate-float">
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,var(--color-glow-base)_0%,transparent_70%)]" />
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
