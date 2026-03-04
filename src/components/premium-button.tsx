"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PremiumButton({
  onClick,
  className,
  text,
}: {
  onClick?: () => void;
  className?: string;
  text?: string;
}) {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "group relative flex h-auto items-center rounded-2xl bg-foreground p-1 text-background shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all hover:scale-[1.02] active:scale-[0.98] hover:bg-foreground/90 cursor-pointer",
        className,
      )}
    >
      {/* Inner Neon Square */}
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-foreground transition-transform group-hover:scale-105">
        <svg
          width="24"
          height="24"
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
      <span className="tracking-wide text-sm px-4">{text}</span>
    </Button>
  );
}
