"use client";

import { useEffect, useRef, useState } from "react";
import { PremiumButton1 } from "@/components/shared/premium-button-1";
import { ThemeToggleButton } from "@/components/layout/theme-toggle-button";
import UFO from "@/components/shared/ufo";

type HoverPart = "left" | "center" | "right" | null;

export default function NotFound() {
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
      {/* Premium animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base gradient mesh */}
        <div 
          className="absolute inset-0 opacity-60"
          style={{
            background: theme === 'dark' 
              ? `radial-gradient(ellipse 80% 50% at 20% 40%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
                 radial-gradient(ellipse 60% 40% at 80% 60%, rgba(168, 85, 247, 0.12) 0%, transparent 50%),
                 radial-gradient(ellipse 100% 80% at 50% 100%, rgba(236, 72, 153, 0.08) 0%, transparent 40%)`
              : `radial-gradient(ellipse 80% 50% at 20% 40%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
                 radial-gradient(ellipse 60% 40% at 80% 60%, rgba(168, 85, 247, 0.06) 0%, transparent 50%),
                 radial-gradient(ellipse 100% 80% at 50% 100%, rgba(236, 72, 153, 0.04) 0%, transparent 40%)`
          }}
        />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full animate-[orbFloat_20s_ease-in-out_infinite] pointer-events-none"
          style={{
            background: theme === 'dark'
              ? 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0.05) 40%, transparent 70%)'
              : 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, rgba(59, 130, 246, 0.03) 40%, transparent 70%)',
            filter: 'blur(40px)'
          }}
        />
        <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] rounded-full animate-[orbFloat_25s_ease-in-out_infinite_reverse] pointer-events-none"
          style={{
            background: theme === 'dark'
              ? 'radial-gradient(circle, rgba(168, 85, 247, 0.18) 0%, rgba(168, 85, 247, 0.05) 40%, transparent 70%)'
              : 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, rgba(168, 85, 247, 0.03) 40%, transparent 70%)',
            filter: 'blur(50px)'
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full animate-[orbFloat_30s_ease-in-out_infinite] pointer-events-none"
          style={{
            background: theme === 'dark'
              ? 'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, rgba(236, 72, 153, 0.02) 50%, transparent 70%)'
              : 'radial-gradient(circle, rgba(236, 72, 153, 0.06) 0%, rgba(236, 72, 153, 0.01) 50%, transparent 70%)',
            filter: 'blur(60px)'
          }}
        />

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Row 1 - Small dots */}
          <div className="absolute w-1 h-1 rounded-full animate-[floatParticle_8s_ease-in-out_infinite]" style={{ top: '15%', left: '10%', animationDelay: '0s', background: theme === 'dark' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.2)' }} />
          <div className="absolute w-1.5 h-1.5 rounded-full animate-[floatParticle_12s_ease-in-out_infinite]" style={{ top: '25%', left: '25%', animationDelay: '1s', background: theme === 'dark' ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.15)' }} />
          <div className="absolute w-1 h-1 rounded-full animate-[floatParticle_10s_ease-in-out_infinite]" style={{ top: '18%', left: '45%', animationDelay: '2s', background: theme === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.12)' }} />
          <div className="absolute w-2 h-2 rounded-full animate-[floatParticle_14s_ease-in-out_infinite]" style={{ top: '30%', left: '70%', animationDelay: '3s', background: theme === 'dark' ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.2)' }} />
          <div className="absolute w-1 h-1 rounded-full animate-[floatParticle_9s_ease-in-out_infinite]" style={{ top: '20%', left: '90%', animationDelay: '4s', background: theme === 'dark' ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.15)' }} />
          
          {/* Row 2 - Medium dots */}
          <div className="absolute w-1.5 h-1.5 rounded-full animate-[floatParticle_11s_ease-in-out_infinite]" style={{ top: '45%', left: '5%', animationDelay: '5s', background: theme === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)' }} />
          <div className="absolute w-1 h-1 rounded-full animate-[floatParticle_7s_ease-in-out_infinite]" style={{ top: '55%', left: '15%', animationDelay: '6s', background: theme === 'dark' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.18)' }} />
          <div className="absolute w-2.5 h-2.5 rounded-full animate-[floatParticle_15s_ease-in-out_infinite]" style={{ top: '50%', left: '35%', animationDelay: '0.5s', background: theme === 'dark' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.08)' }} />
          <div className="absolute w-1 h-1 rounded-full animate-[floatParticle_9s_ease-in-out_infinite]" style={{ top: '60%', left: '55%', animationDelay: '1.5s', background: theme === 'dark' ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.15)' }} />
          <div className="absolute w-1.5 h-1.5 rounded-full animate-[floatParticle_13s_ease-in-out_infinite]" style={{ top: '48%', left: '80%', animationDelay: '2.5s', background: theme === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.12)' }} />
          <div className="absolute w-1 h-1 rounded-full animate-[floatParticle_8s_ease-in-out_infinite]" style={{ top: '58%', left: '95%', animationDelay: '3.5s', background: theme === 'dark' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.18)' }} />
          
          {/* Row 3 - Small dots */}
          <div className="absolute w-2 h-2 rounded-full animate-[floatParticle_10s_ease-in-out_infinite]" style={{ top: '75%', left: '8%', animationDelay: '4.5s', background: theme === 'dark' ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.15)' }} />
          <div className="absolute w-1 h-1 rounded-full animate-[floatParticle_12s_ease-in-out_infinite]" style={{ top: '82%', left: '20%', animationDelay: '5.5s', background: theme === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)' }} />
          <div className="absolute w-1.5 h-1.5 rounded-full animate-[floatParticle_8s_ease-in_out_infinite]" style={{ top: '78%', left: '38%', animationDelay: '6.5s', background: theme === 'dark' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.18)' }} />
          <div className="absolute w-1 h-1 rounded-full animate-[floatParticle_14s_ease-in-out_infinite]" style={{ top: '88%', left: '52%', animationDelay: '7s', background: theme === 'dark' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.08)' }} />
          <div className="absolute w-2 h-2 rounded-full animate-[floatParticle_11s_ease-in-out_infinite]" style={{ top: '72%', left: '72%', animationDelay: '1.2s', background: theme === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.12)' }} />
          <div className="absolute w-1 h-1 rounded-full animate-[floatParticle_9s_ease-in-out_infinite]" style={{ top: '85%', left: '88%', animationDelay: '2.2s', background: theme === 'dark' ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.15)' }} />
        </div>

        {/* Subtle grid pattern for depth */}
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
          style={{
            backgroundImage: theme === 'dark'
              ? `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`
              : `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="absolute right-4 top-4 z-30 md:right-6 md:top-6">
        <ThemeToggleButton theme={theme} onToggle={toggleTheme} size="lg" />
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

      <div className="z-10 mt-6 flex flex-col items-center">
        <h1 className="text-center text-2xl md:text-4xl text-foreground/70 font-serif">Page not found</h1>
        <PremiumButton1
          href="/"
          className="px-6 py-2.5 bg-foreground text-background mt-5"
        >
          Go home
        </PremiumButton1>
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
