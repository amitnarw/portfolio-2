/* eslint-disable @next/next/no-img-element */
"use client";

import MarqueeStar from "@/components/homepage/marquee-star";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useIsDarkTheme } from "@/hooks/use-is-dark-theme";
import { useState } from "react";
import { Button } from "../ui/button";

const DEVICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const techStack = [
  {
    name: "HTML",
    wordmark: `${DEVICON_BASE}/html5/html5-original-wordmark.svg`,
  },
  {
    name: "CSS",
    wordmark: `${DEVICON_BASE}/css3/css3-original-wordmark.svg`,
  },
  {
    name: "React.js",
    wordmark: `${DEVICON_BASE}/react/react-original-wordmark.svg`,
  },
  {
    name: "Next.js",
    wordmark: `${DEVICON_BASE}/nextjs/nextjs-original-wordmark.svg`,
  },
  {
    name: "Node.js",
    wordmark: `${DEVICON_BASE}/nodejs/nodejs-original-wordmark.svg`,
  },
  {
    name: "Express.js",
    wordmark: `${DEVICON_BASE}/express/express-original-wordmark.svg`,
  },
  {
    name: "Prisma",
    wordmark: `${DEVICON_BASE}/prisma/prisma-original-wordmark.svg`,
  },
  {
    name: "Sequelize",
    wordmark: `${DEVICON_BASE}/sequelize/sequelize-original-wordmark.svg`,
  },
  {
    name: "MySQL",
    wordmark: `${DEVICON_BASE}/mysql/mysql-original-wordmark.svg`,
  },
  {
    name: "PostgreSQL",
    wordmark: `${DEVICON_BASE}/postgresql/postgresql-original-wordmark.svg`,
  },
  {
    name: "MongoDB",
    wordmark: `${DEVICON_BASE}/mongodb/mongodb-original-wordmark.svg`,
  },
  {
    name: "Supabase",
    wordmark: `${DEVICON_BASE}/supabase/supabase-original-wordmark.svg`,
  },
  {
    name: "Google",
    wordmark: `${DEVICON_BASE}/google/google-original-wordmark.svg`,
  },
  {
    name: "Zustand",
    wordmark: `${DEVICON_BASE}/zustand/zustand-original.svg`,
  },
  {
    name: "Docker",
    wordmark: `${DEVICON_BASE}/docker/docker-original-wordmark.svg`,
  },
  {
    name: "Nginx",
    wordmark: `${DEVICON_BASE}/nginx/nginx-original.svg`,
  },
  {
    name: "AWS",
    wordmark: `${DEVICON_BASE}/amazonwebservices/amazonwebservices-original-wordmark.svg`,
  },
  {
    name: "Vercel",
    wordmark: `${DEVICON_BASE}/vercel/vercel-original-wordmark.svg`,
  },
  {
    name: "Redis",
    wordmark: `${DEVICON_BASE}/redis/redis-original-wordmark.svg`,
  },
  {
    name: "GraphQL",
    wordmark: `${DEVICON_BASE}/graphql/graphql-plain-wordmark.svg`,
  },
  {
    name: "Git",
    wordmark: `${DEVICON_BASE}/git/git-original-wordmark.svg`,
  },
  {
    name: "NPM",
    wordmark: `${DEVICON_BASE}/npm/npm-original-wordmark.svg`,
  },
];

export default function SkillsMarquee() {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const isDarkTheme = useIsDarkTheme();
  const loopedTechStack = [...techStack, ...techStack];

  const mutedFilter = isDarkTheme
    ? "grayscale(1) brightness(1) invert(1)"
    : "grayscale(1) brightness(1)";

  return (
    <TooltipProvider>
      <section
        aria-label="Tech stack marquee"
        className="relative overflow-hidden bg-linear-to-b from-white to-zinc-100 dark:from-white/10 dark:to-zinc-100/10 p-6 sm:px-12"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          setIsPaused(false);
          setHoveredItem(null);
        }}
      >
        {/* Left fade gradient */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 sm:w-32 bg-linear-to-r from-background to-transparent" />
        {/* Right fade gradient */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 sm:w-32 bg-linear-to-l from-background to-transparent" />
        <div
          className={`flex min-w-max whitespace-nowrap items-center justify-center animate-tech-stack-marquee ${isPaused ? "paused" : ""}`}
        >
          {loopedTechStack.map((item, index) => (
            <div key={`${item.name}-${index}`} className="contents">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    type="button"
                    variant="ghost"
                    className="cursor-pointer inline-flex items-center"
                    aria-label={item.name}
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <img
                      src={item.wordmark}
                      alt={item.name}
                      className={`w-40 sm:w-80 h-14 max-w-none transition-all duration-300 ease-out ${
                        hoveredItem === item.name
                          ? "opacity-100 scale-125"
                          : "opacity-75 scale-100"
                      }`}
                      style={{
                        filter:
                          hoveredItem === item.name ? "none" : mutedFilter,
                      }}
                    />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top">{item.name}</TooltipContent>
              </Tooltip>
              <span className="inline-flex items-center">
                <MarqueeStar size={30} className="text-orange-300" />
              </span>
            </div>
          ))}
        </div>
      </section>
    </TooltipProvider>
  );
}
