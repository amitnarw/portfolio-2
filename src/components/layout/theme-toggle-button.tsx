"use client";

import type { MouseEventHandler } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

type ThemeToggleButtonProps = {
  theme: "light" | "dark";
  onToggle: MouseEventHandler<HTMLButtonElement>;
  isScrolled?: boolean;
  fullWidth?: boolean;
  size?: "sm" | "md" | "lg";
  orientation?: "horizontal" | "vertical";
  className?: string;
};

export function ThemeToggleButton({
  theme,
  onToggle,
  isScrolled = false,
  fullWidth = false,
  size = "md",
  orientation = "horizontal",
  className,
}: ThemeToggleButtonProps) {
  const isDark = theme === "dark";
  const targetMode = isDark ? "light" : "dark";
  const isVertical = orientation === "vertical";

  const sizeStyles = {
    sm: {
      trackHorizontal: "h-5 w-9",
      trackVertical: "h-9 w-5",
      thumb: "left-0.5 top-0.5 h-4 w-4",
      thumbDarkTranslateHorizontal: "translate-x-4",
      thumbDarkTranslateVertical: "translate-y-4",
      icon: "h-2.5 w-2.5",
    },
    md: {
      trackHorizontal: "h-6.5 w-12",
      trackVertical: "h-12 w-6.5",
      thumb: "left-0.5 top-0.5 h-5 w-5",
      thumbDarkTranslateHorizontal: "translate-x-5",
      thumbDarkTranslateVertical: "translate-y-5",
      icon: "h-3 w-3",
    },
    lg: {
      trackHorizontal: "h-8 w-14",
      trackVertical: "h-14 w-8",
      thumb: "left-1 top-1 h-6 w-6",
      thumbDarkTranslateHorizontal: "translate-x-6",
      thumbDarkTranslateVertical: "translate-y-6",
      icon: "h-3.5 w-3.5",
    },
  }[size];

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${targetMode} mode`}
      aria-pressed={isDark}
      className={cn(
        "group relative inline-flex cursor-pointer items-center rounded-full transition-all duration-500 active:scale-[0.96]",
        fullWidth ? "justify-between" : "justify-between",
        isVertical ? "flex-col gap-1" : "flex-row",
        className,
      )}
    >
      <span
        className={cn(
          "pointer-events-none absolute bg-white/25 blur-md transition-all duration-700",
          isVertical
            ? "left-0 -top-8 h-6 w-full rotate-0 group-hover:top-[108%]"
            : "-left-8 top-0 h-full w-6 rotate-12 group-hover:left-[108%]",
        )}
      />

      <span
        className={cn(
          "relative overflow-hidden rounded-full border transition-colors duration-500",
          isVertical ? sizeStyles.trackVertical : sizeStyles.trackHorizontal,
          isScrolled ? "border-background/25" : "border-border/70",
        )}
      >
        <span
          className={cn(
            "absolute inset-0 transition-all duration-500",
            isDark
              ? "bg-[radial-gradient(circle_at_24%_30%,#334a7e_0%,#111a32_55%,#060911_100%)]"
              : "bg-[radial-gradient(circle_at_30%_20%,#ffe8a3_0%,#ffc85c_45%,#ff9f2f_100%)]",
          )}
        />

        <span
          className={cn(
            "absolute inset-0 transition-opacity duration-500",
            isDark ? "opacity-100" : "opacity-0",
          )}
        >
          <span className="absolute left-2 top-1 h-0.5 w-0.5 rounded-full bg-white/85 animate-pulse" />
          <span className="absolute left-3.5 top-3 h-0.5 w-0.5 rounded-full bg-white/75 animate-pulse [animation-delay:150ms]" />
          <span className="absolute right-2.5 top-1.5 h-0.5 w-0.5 rounded-full bg-white/85 animate-pulse [animation-delay:280ms]" />
        </span>

        <span
          className={cn(
            "absolute flex items-center justify-center rounded-full ring-1 shadow-[0_6px_14px_rgba(0,0,0,0.25)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105",
            sizeStyles.thumb,
            isDark
              ? `${isVertical ? sizeStyles.thumbDarkTranslateVertical : sizeStyles.thumbDarkTranslateHorizontal} bg-slate-100 text-slate-900 ring-white/30`
              : `${isVertical ? "translate-y-0" : "translate-x-0"} bg-white text-amber-500 ring-amber-200/80`,
          )}
        >
          <Sun
            className={cn(
              "absolute transition-all duration-500",
              sizeStyles.icon,
              isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100",
            )}
          />
          <Moon
            className={cn(
              "absolute transition-all duration-500",
              sizeStyles.icon,
              isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0",
            )}
          />
        </span>
      </span>
    </button>
  );
}
