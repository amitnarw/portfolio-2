"use client";

import { useState, useEffect } from "react";
import type { MouseEvent } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { ThemeToggleButton } from "@/components/theme-toggle-button";

type StartViewTransition = (callback: () => void | Promise<void>) => {
  ready: Promise<void>;
};

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Works", href: "#works" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
    const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Check for saved theme preference - if saved, use that; otherwise default to light
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      // Default to light theme
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Track active section using Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    const sections = ["home", "works", "about", "services", "testimonials"];
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = (event: MouseEvent<HTMLButtonElement>) => {
    const newTheme = theme === "light" ? "dark" : "light";

    const applyTheme = () => {
      setTheme(newTheme);
      localStorage.setItem("theme", newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const startViewTransition = (
      document as Document & { startViewTransition?: StartViewTransition }
    ).startViewTransition;

    if (!startViewTransition || prefersReducedMotion) {
      applyTheme();
      return;
    }

    const buttonRect = event.currentTarget.getBoundingClientRect();
    const x = buttonRect.left + buttonRect.width / 2;
    const y = buttonRect.top + buttonRect.height / 2;

    document.documentElement.style.setProperty("--theme-transition-x", `${x}px`);
    document.documentElement.style.setProperty("--theme-transition-y", `${y}px`);

    const maxX = Math.max(x, window.innerWidth - x);
    const maxY = Math.max(y, window.innerHeight - y);
    const endRadius = Math.hypot(maxX, maxY);

    const transition = startViewTransition.call(document, () => {
      applyTheme();
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 650,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          fill: "both",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    });
  };

  return (
    <header
      className={cn(
        "fixed top-2 left-0 right-0 z-50 transition-all duration-500",
      )}
    >
      <nav
        className={cn(
          "mx-auto flex items-center justify-between rounded-full px-6 py-3 lg:px-10 transition-all duration-500 ease-out",
          isScrolled
            ? "bg-foreground/80 backdrop-blur-2xl text-background shadow-2xl max-w-[70dvw] sm:max-w-250"
            : "bg-transparent text-foreground max-w-full sm:max-w-350",
        )}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className={cn(
            "font-serif italic text-2xl tracking-wide transition-opacity hover:opacity-70",
            isScrolled ? "text-background" : "text-foreground",
          )}
        >
          Amit Narwal.
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={cn(
                  "relative text-sm transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:after:w-full",
                  isScrolled
                    ? "text-background/70 hover:text-background after:bg-background"
                    : "text-muted-foreground hover:text-foreground after:bg-foreground",
                  activeSection === link.href
                    ? isScrolled
                      ? "after:w-full text-background"
                      : "after:w-full text-foreground"
                    : "",
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Buttons & Theme Toggle */}
        <div className="hidden items-center gap-3 md:inline-flex">
          <a
            href="#contact"
            className={cn(
              "rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 hover:scale-105",
              isScrolled
                ? "border border-background/25 bg-background text-foreground hover:shadow-md"
                : "border border-border bg-foreground text-background hover:shadow-lg",
            )}
          >
            Contact
          </a>
          <ThemeToggleButton
            theme={theme}
            size="lg"
            isScrolled={isScrolled}
            onToggle={toggleTheme}
          />
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className={cn(
            "inline-flex items-center justify-center rounded-lg p-2 transition-colors md:hidden",
            isScrolled
              ? "text-background hover:bg-background/10"
              : "text-foreground hover:bg-muted",
          )}
          aria-label="Toggle menu"
          aria-expanded={isMobileOpen}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-500 ease-in-out",
          isMobileOpen ? "max-h-100 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div
          className={cn(
            "px-6 py-6 backdrop-blur-xl",
            isScrolled
              ? "border-t border-background/20 bg-foreground/95"
              : "border-t border-border/50 bg-background/95",
          )}
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={cn(
                    "block text-base font-medium transition-colors",
                    isScrolled
                      ? activeSection === link.href
                        ? "text-background"
                        : "text-background/70 hover:text-background"
                      : activeSection === link.href
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setIsMobileOpen(false)}
                className={cn(
                  "inline-flex rounded-full px-6 py-2.5 text-sm font-medium transition-all hover:scale-105",
                  isScrolled
                    ? "bg-background text-foreground"
                    : "bg-foreground text-background",
                )}
              >
                Contact
              </a>
            </li>
            <li>
              <ThemeToggleButton
                theme={theme}
                isScrolled={isScrolled}
                onToggle={toggleTheme}
                fullWidth
              />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
