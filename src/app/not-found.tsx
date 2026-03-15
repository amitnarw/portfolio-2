"use client";

import { useEffect, useRef, useState } from "react";
import { CtaPillLink } from "@/components/layout/cta-pill-link";
import { ThemeToggleButton } from "@/components/layout/theme-toggle-button";
import UFO from "@/components/shared/ufo";

type HoverPart = "left" | "center" | "right" | null;

export default function NotFound() {
  const backgroundClouds = [
    { top: "8%", width: 360, height: 128, duration: 92, delay: -36, opacity: 0.14 },
    { top: "18%", width: 300, height: 112, duration: 78, delay: -54, opacity: 0.12 },
    { top: "31%", width: 420, height: 140, duration: 108, delay: -12, opacity: 0.1 },
  ];
  const foregroundClouds = [
    { top: "13%", width: 430, height: 142, duration: 56, delay: -20, opacity: 0.24 },
    { top: "24%", width: 380, height: 126, duration: 62, delay: -42, opacity: 0.22 },
    { top: "34%", width: 340, height: 114, duration: 52, delay: -8, opacity: 0.2 },
  ];

  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") {
      return "light";
    }
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [showCursor, setShowCursor] = useState(false);
  const [hoverPart, setHoverPart] = useState<HoverPart>(null);
  const targetX = useRef(0);
  const targetY = useRef(0);

  useEffect(() => {
    if (!showCursor) {
      return;
    }

    let rafId = 0;

    const animateCursor = () => {
      setCursorX((prevX) => prevX + (targetX.current - prevX) * 0.18);
      setCursorY((prevY) => prevY + (targetY.current - prevY) * 0.18);
      rafId = window.requestAnimationFrame(animateCursor);
    };

    rafId = window.requestAnimationFrame(animateCursor);
    return () => window.cancelAnimationFrame(rafId);
  }, [showCursor]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const isOver404 = hoverPart !== null;
  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  };

  return (
    <main
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background pointer-fine:cursor-none"
      onMouseMove={(event) => {
        targetX.current = event.clientX;
        targetY.current = event.clientY;
        if (!showCursor) {
          setCursorX(event.clientX);
          setCursorY(event.clientY);
          setShowCursor(true);
        }
      }}
      onMouseLeave={() => {
        setShowCursor(false);
        setHoverPart(null);
      }}
    >
      <div className="absolute right-4 top-4 z-30 md:right-6 md:top-6">
        <ThemeToggleButton theme={theme} onToggle={toggleTheme} size="lg" />
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 -top-28 h-136 w-136 rounded-full bg-foreground/10 blur-2xl animate-[orbFloat_12s_ease-in-out_infinite]" />
        <div className="absolute -bottom-32 -right-20 h-120 w-120 rounded-full bg-foreground/10 blur-2xl animate-[orbFloat_14s_ease-in-out_infinite_reverse]" />

        <div className="absolute inset-0 z-0">
          {backgroundClouds.map((cloud, index) => (
            <div
              key={`back-cloud-${index}`}
              className="absolute -left-[38%]"
              style={{
                top: cloud.top,
                animation: `cloudTraverse ${cloud.duration}s linear ${cloud.delay}s infinite`,
              }}
            >
              <div
                className="relative"
                style={{
                  width: `${cloud.width}px`,
                  height: `${cloud.height}px`,
                  opacity: cloud.opacity,
                  animation: `cloudBob ${7 + index * 1.2}s ease-in-out ${index * -0.8}s infinite`,
                }}
              >
                <span className="absolute inset-x-[9%] bottom-[8%] h-[58%] rounded-full bg-foreground blur-sm" />
                <span className="absolute left-[6%] top-[24%] h-[44%] w-[31%] rounded-full bg-foreground blur-sm" />
                <span className="absolute left-[31%] top-[5%] h-[58%] w-[39%] rounded-full bg-foreground blur-sm" />
                <span className="absolute right-[8%] top-[21%] h-[42%] w-[30%] rounded-full bg-foreground blur-sm" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="z-10 flex w-full max-w-240 items-center justify-center overflow-hidden animate-[fadeRise_900ms_cubic-bezier(.2,.7,.1,1)_both]"
        onMouseLeave={() => setHoverPart(null)}
      >
        <span
          className="text-[15rem] sm:text-[27rem] text-center leading-none select-none font-heading text-muted-foreground/20"
          onMouseEnter={() => setHoverPart("left")}
        >
          404
        </span>
      </div>

      <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
        {foregroundClouds.map((cloud, index) => (
          <div
            key={`front-cloud-${index}`}
            className="absolute -left-[44%]"
            style={{
              top: cloud.top,
              animation: `cloudTraverse ${cloud.duration}s linear ${cloud.delay}s infinite`,
            }}
          >
            <div
              className="relative"
              style={{
                width: `${cloud.width}px`,
                height: `${cloud.height}px`,
                opacity: cloud.opacity,
                animation: `cloudBob ${5.8 + index * 0.9}s ease-in-out ${index * -0.6}s infinite`,
              }}
            >
              <span className="absolute inset-x-[7%] bottom-[8%] h-[60%] rounded-full bg-foreground/95 blur-[1px]" />
              <span className="absolute left-[5%] top-[26%] h-[44%] w-[30%] rounded-full bg-foreground/95 blur-[1px]" />
              <span className="absolute left-[29%] top-[4%] h-[60%] w-[40%] rounded-full bg-foreground/95 blur-[1px]" />
              <span className="absolute right-[7%] top-[22%] h-[43%] w-[30%] rounded-full bg-foreground/95 blur-[1px]" />
            </div>
          </div>
        ))}
      </div>

      <div className="z-10 mt-6 flex flex-col items-center">
        <h1 className="text-center text-2xl md:text-4xl text-foreground/70 font-serif">Page not found</h1>
        <CtaPillLink
          href="/"
          className="px-6 py-2.5 bg-foreground text-background mt-5"
        >
          Go home
        </CtaPillLink>
      </div>

      {showCursor ? (
        <div
          aria-hidden="true"
          className="pointer-events-none fixed left-0 top-0 z-50 hidden -translate-x-1/2 -translate-y-1/2 pointer-fine:block"
          style={{ transform: `translate(${cursorX}px, ${cursorY}px)` }}
        >
          <span
            className={`relative block mix-blend-exclusion transition-all duration-300 ease-out ${
              isOver404
                ? "h-37 w-37 overflow-visible rounded-[40px]"
                : "h-4 w-4 overflow-hidden rounded-full"
            }`}
          >
            <span
              className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground transition-all duration-300 ease-out ${
                isOver404 ? "h-36.5 w-36.5 opacity-0" : "h-4 w-4 opacity-100"
              }`}
            />
            <span
              className={`absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out ${
                isOver404
                  ? "opacity-100 scale-100 animate-[ufoIdle_1.45s_ease-in-out_infinite]"
                  : "opacity-0 scale-75"
              }`}
            >
              <UFO className="h-full w-full rotate-2 text-foreground" />
            </span>
          </span>
        </div>
      ) : null}
    </main>
  );
}
