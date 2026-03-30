"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavLinkNewProps {
  href: string;
  label: string;
  isActive?: boolean;
  isScrolled?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function NavLinkNew({
  href,
  label,
  isActive = false,
  isScrolled = false,
  className = "",
  onClick,
}: NavLinkNewProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
        if (onClick) onClick();
        // Update URL hash without jumping
        window.history.pushState(null, "", href);
      }
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={cn(
        "relative text-sm transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:after:w-full",
        isScrolled
          ? "text-background/70 hover:text-background after:bg-background"
          : "text-muted-foreground hover:text-foreground after:bg-foreground",
        isActive
          ? isScrolled
            ? "after:w-full text-background"
            : "after:w-full text-foreground"
          : "",
        className,
      )}
    >
      {label}
    </Link>
  );
}

interface AnimatedNavLinkProps {
  href: string;
  label: string;
  className?: string;
  onClick?: () => void;
}

export function AnimatedNavLink({
  href,
  label,
  className = "",
  onClick,
}: AnimatedNavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
        if (onClick) onClick();
        // Update URL hash without jumping
        window.history.pushState(null, "", href);
      }
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={cn(
        "relative text-sm uppercase tracking-[0.18em] transition-colors text-white/65 hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-white/80 after:transition-all after:duration-300 hover:after:w-full",
        className,
      )}
    >
      {label}
    </Link>
  );
}
