"use client";

import { useEffect, useState } from "react";
import { ThemeToggleButton } from "@/components/layout/theme-toggle-button";

export default function LabHeader() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-350 items-center justify-between gap-4 px-6 py-3 lg:px-12">
        <p className="text-xs font-semibold uppercase tracking-[0.25em]">
          Services Lab V2
          <span className="hidden text-muted-foreground sm:inline">
            {" "}
            / 3 directions
          </span>
        </p>
        <div className="flex items-center gap-3">
          <span className="hidden text-xs text-muted-foreground sm:block">
            Toggle to preview dark &amp; light
          </span>
          <ThemeToggleButton theme={theme} onToggle={toggleTheme} />
        </div>
      </div>
    </header>
  );
}
