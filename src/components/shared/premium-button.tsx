"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PremiumButton({
  onClick,
  className,
  text,
  reverse = false,
}: {
  onClick?: () => void;
  className?: string;
  text?: string;
  reverse?: boolean;
}) {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "group relative flex items-center justify-center overflow-hidden rounded-2xl p-1 h-14 shadow-xl shadow-black/5 transition-all duration-300 hover:scale-[1.02] hover:bg-foreground/90 active:scale-[0.98]",
        reverse ? "bg-background dark:bg-foreground" : "bg-foreground dark:bg-background",
        className,
      )}
    >
      {/* Inner Square */}
      <div className="pointer-events-none absolute left-1 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-xl bg-primary text-foreground transition-all duration-500 ease-out group-hover:left-[calc(100%-3.25rem)] z-1">
        <svg
          className="size-10"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Double dotted right chevron */}
          <circle cx="9" cy="7" r="1.25" />
          <circle cx="13" cy="7" r="1.25" />
          <circle cx="11" cy="9.5" r="1.25" />
          <circle cx="15" cy="9.5" r="1.25" />
          <circle cx="13" cy="12" r="1.25" />
          <circle cx="17" cy="12" r="1.25" />
          <circle cx="11" cy="14.5" r="1.25" />
          <circle cx="15" cy="14.5" r="1.25" />
          <circle cx="9" cy="17" r="1.25" />
          <circle cx="13" cy="17" r="1.25" />
        </svg>
      </div>

      {/* Button Text */}
      <span className={cn("relative pl-15 pr-5 text-sm tracking-wide transition-transform duration-500 ease-out group-hover:-translate-x-10", reverse ? "text-foreground dark:text-background" : "text-background dark:text-foreground")}>
        {text}
      </span>
    </Button>
  );
}
