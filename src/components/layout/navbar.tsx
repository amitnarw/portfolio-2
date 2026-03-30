"use client";

import { useState, useEffect } from "react";
import type { MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { ThemeToggleButton } from "@/components/layout/theme-toggle-button";
import { PremiumButton1 } from "@/components/shared/premium-button-1";
import NavLinkNew from "../shared/nav-link";
import { PremiumButton } from "../shared/premium-button";

type StartViewTransition = (callback: () => void | Promise<void>) => {
  ready: Promise<void>;
};

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Works", href: "/work" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname();
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

  // Track active section using Intersection Observer - for on-page navigation
  useEffect(() => {
    // Only use Intersection Observer on the home page
    if (pathname !== "/") return;

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

    const sections = ["home", "about", "services", "work"]; // IDs to track
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [pathname]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileOpen]);

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

    document.documentElement.style.setProperty(
      "--theme-transition-x",
      `${x}px`,
    );
    document.documentElement.style.setProperty(
      "--theme-transition-y",
      `${y}px`,
    );

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

  const openMail = () => {
    window.open("mailto:amitnarwal115@gmail.com");
  };

  return (
    <header
      className={cn(
        "fixed py-2 top-0 left-0 right-0 z-50 isolate transition-all duration-500",
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 backdrop-blur-xl mask-[linear-gradient(to_top,transparent_0%,black_70%,black_100%)] [-webkit-mask-image:linear-gradient(to_top,transparent_0%,black_70%,black_100%)]",
          isScrolled && !isMobileOpen ? "opacity-100" : "opacity-0",
        )}
      />

      <nav
        className={cn(
          "relative z-50 mx-auto flex items-center justify-between rounded-full px-6 py-3 lg:px-10 transition-all duration-500 ease-out",
          isScrolled && !isMobileOpen
            ? "bg-foreground/80 backdrop-blur-2xl text-background shadow-2xl max-w-[70dvw] sm:max-w-250"
            : "bg-transparent text-foreground max-w-full sm:max-w-350",
          isMobileOpen && "pointer-events-none",
        )}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className={cn(
            "relative pointer-events-auto font-serif italic text-2xl tracking-wide transition-opacity hover:opacity-70",
            isMobileOpen
              ? "text-white"
              : isScrolled
                ? "text-background"
                : "text-foreground",
          )}
        >
          Amit Narwal.
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <NavLinkNew
                href={link.href}
                label={link.label}
                isScrolled={isScrolled}
                isActive={
                  (pathname === "/" && link.href.includes("#") && link.href.endsWith(activeSection.replace("#", ""))) ||
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href))
                }
              />
            </li>
          ))}
        </ul>

        {/* CTA Buttons & Theme Toggle */}
        <div className="hidden items-center gap-3 md:inline-flex">
          <PremiumButton1
            href="mailto:amitnarwal115@gmail.com"
            className={cn(
              "px-6 py-2.5",
              isScrolled
                ? "border border-background/25 bg-background text-foreground hover:shadow-md"
                : "border border-border bg-foreground text-background hover:shadow-lg",
            )}
          >
            Contact
          </PremiumButton1>

          <ThemeToggleButton
            theme={theme}
            size="lg"
            isScrolled={isScrolled}
            onToggle={toggleTheme}
          />
        </div>

        {/* Mobile Header Actions */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={cn(
              "relative z-50 pointer-events-auto flex h-10 w-10 flex-col items-center justify-center gap-1.5 transition-all",
              isMobileOpen
                ? "text-white"
                : isScrolled
                  ? "text-background"
                  : "text-foreground",
            )}
            aria-label="Toggle menu"
            aria-expanded={isMobileOpen}
          >
            <span
              className={cn(
                "h-0.5 w-6 transition-all duration-300 ease-out bg-current",
                isMobileOpen ? "translate-y-1 rotate-45" : "",
              )}
            />
            <span
              className={cn(
                "h-0.5 w-6 transition-all duration-300 ease-out bg-current",
                isMobileOpen ? "-translate-y-1 -rotate-45" : "",
              )}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/60 backdrop-blur-3xl transition-all duration-500 ease-in-out md:hidden overflow-hidden",
          isMobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex h-full flex-col px-8 pt-32 pb-8">
          {/* Theme Toggle at Top Right */}
          <div
            className={cn(
              "absolute top-7 right-18 transition-all duration-500 delay-100",
              isMobileOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-4 opacity-0",
            )}
          >
            <ThemeToggleButton
              theme={theme}
              isScrolled={true}
              onToggle={toggleTheme}
              className="text-white"
            />
          </div>

          {/* Main Links */}
          <nav className="flex flex-col gap-3 items-start">
            {navLinks.map((link, index) => {
              const isActive =
                (pathname === "/" && link.href.includes("#") && link.href.endsWith(activeSection.replace("#", ""))) ||
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    setIsMobileOpen(false);
                    if (link.href.startsWith("/#")) {
                      const id = link.href.replace("/#", "");
                      const element = document.getElementById(id);
                      if (element) {
                        e.preventDefault();
                        element.scrollIntoView({ behavior: "smooth" });
                        window.history.pushState(null, "", link.href);
                      }
                    }
                  }}
                  className={cn(
                    "text-5xl font-semibold tracking-wide transition-all duration-500 font-heading",
                    isMobileOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0",
                    isActive ? "text-white" : "text-white/40 hover:text-white",
                  )}
                  style={{
                    transitionDelay: `${index * 50}ms`,
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Contact Button */}
          <div
            className={cn(
              "mt-auto mb-6 transition-all duration-500 delay-300",
              isMobileOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0",
            )}
          >
            <PremiumButton text="Contact Me" onClick={openMail} />
          </div>

          {/* Legal Links (Bottom) */}
          <div className="flex flex-col gap-4 border-t border-white/10 pt-8 pb-4">
            <div
              className={cn(
                "flex justify-between items-center transition-all duration-500 delay-400",
                isMobileOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0",
              )}
            >
              <Link
                href="/privacy"
                onClick={() => setIsMobileOpen(false)}
                className="text-sm font-medium text-white/50 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                onClick={() => setIsMobileOpen(false)}
                className="text-sm font-medium text-white/50 hover:text-white transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>

            <div
              className={cn(
                "flex items-center justify-between transition-all duration-500 delay-500",
                isMobileOpen ? "opacity-100" : "opacity-0",
              )}
            >
              <span className="text-xs text-white/30">
                © {new Date().getFullYear()} Amit Narwal.
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
