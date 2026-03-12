"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      setIsScrolled(window.scrollY > 20);
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

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl shadow-sm border-b border-border/50"
          : "bg-transparent",
      )}
    >
      <nav
        className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-12"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-serif italic text-2xl tracking-wide text-foreground transition-opacity hover:opacity-70"
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
                    "relative text-sm text-muted-foreground transition-colors hover:text-foreground after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full",
                    activeSection === link.href ? "after:w-full text-foreground" : ""
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
            className="rounded-full border border-border bg-foreground text-background px-6 py-2.5 text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Contact
          </a>
          {/* Theme Toggle Button */}
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full border-border"
            aria-label="Toggle theme"
          >
            <Sun
              className={cn(
                "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0",
              )}
            />
            <Moon
              className={cn(
                "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100",
              )}
            />
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-foreground transition-colors hover:bg-muted md:hidden"
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
          isMobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-xl px-6 py-6">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={cn(
                    "block text-base font-medium transition-colors",
                    activeSection === link.href
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
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
                className="inline-flex rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-background transition-all hover:scale-105"
              >
                Contact
              </a>
            </li>
            <li>
              <Button
                variant="outline"
                onClick={toggleTheme}
                className="w-full justify-center gap-2"
              >
                {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
                {theme === "light" ? "Dark" : "Light"} Mode
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
