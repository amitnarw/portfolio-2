"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PremiumButton2Props {
  label?: string;
  href: string;
  className?: string;
  reverse?: boolean;
}

export default function PremiumButton2({
  label = "View all work",
  href,
  className = "",
  reverse = false,
}: PremiumButton2Props) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-foreground/20 px-8 py-3 text-sm font-medium uppercase tracking-wide text-foreground transition-all duration-300",
        className,
        reverse ? "bg-background" : "bg-tranparent",
      )}
    >
      <span className="relative z-10 flex items-center gap-2 text-foreground transition-colors duration-300 group-hover:text-white dark:group-hover:text-black">
        {label}
        <ArrowUpRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </span>
      <div className="absolute inset-0 -translate-x-[101%] transition-transform duration-300 group-hover:translate-x-0 bg-foreground" />
    </Link>
  );
}
