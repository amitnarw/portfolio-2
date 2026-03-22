import { cn } from "@/lib/utils";
import { JSX } from "react";
import { Marquee } from "@/components/ui/marquee";

const MarqueeText = ({
  marqueeItems,
  className,
}: {
  marqueeItems: JSX.Element[];
  className?: string;
}) => {
  return (
    <Marquee
      className={cn(
        "pointer-events-none z-0 [--duration:120s] text-2xl sm:text-8xl font-heading uppercase tracking-[0.12em] text-foreground/20",
        className
      )}
      fade
      pauseOnHover
    >
      {marqueeItems}
    </Marquee>
  );
};

export default MarqueeText;
