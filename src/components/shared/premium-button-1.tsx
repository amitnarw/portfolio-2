import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import type { MouseEventHandler } from "react";

type PremiumButton1Props = {
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export function PremiumButton1({
  href,
  children,
  className,
  target,
  rel,
  ariaLabel,
  onClick,
}: PremiumButton1Props) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center rounded-full border text-sm font-medium transition-all duration-300 hover:scale-105",
        className,
      )}
    >
      {children}
    </Link>
  );
}
