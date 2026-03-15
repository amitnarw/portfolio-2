import { cn } from "@/lib/utils";
import { JSX } from "react";

const MarqueeText = ({
  marqueeItems,
  className,
}: {
  marqueeItems: JSX.Element[];
  className?: string;
}) => {
  return (
    <div className="relative overflow-hidden py-6">
      {/* Left fade gradient */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 sm:w-40 bg-gradient-to-r from-background to-transparent" />
      {/* Right fade gradient */}
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 sm:w-40 bg-gradient-to-l from-background to-transparent" />
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 flex min-w-max animate-footer-marquee whitespace-nowrap text-2xl sm:text-8xl font-heading uppercase tracking-[0.12em] text-foreground/20">
          {marqueeItems}
        </div>
        <div
          aria-hidden="true"
          className="absolute left-0 top-1/2 -translate-y-1/2 flex min-w-max animate-footer-marquee-alt whitespace-nowrap text-2xl sm:text-8xl font-heading uppercase tracking-[0.12em] text-foreground/20"
        >
          {marqueeItems}
        </div>
      </div>
      <div className={cn("h-10 sm:h-14", className)} />
    </div>
  );
};

export default MarqueeText;
