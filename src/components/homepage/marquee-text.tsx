import React, { JSX } from "react";

const MarqueeText = ({ marqueeItems }: { marqueeItems: JSX.Element[] }) => {
  return (
    <div className="relative overflow-hidden border-b border-border/60 py-6">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-0 top-2 flex min-w-max animate-footer-marquee whitespace-nowrap text-2xl sm:text-8xl font-heading uppercase tracking-[0.12em] text-foreground/20">
          {marqueeItems}
        </div>
        <div
          aria-hidden="true"
          className="absolute left-0 top-0 flex min-w-max animate-footer-marquee-alt whitespace-nowrap text-2xl sm:text-8xl font-heading uppercase tracking-[0.12em] text-foreground/20"
        >
          {marqueeItems}
        </div>
      </div>
      <div className="h-10 sm:h-14" />
    </div>
  );
};

export default MarqueeText;
