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

const DEVICON_BASE =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

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
    name: "Redux",
    wordmark: `${DEVICON_BASE}/redux/redux-original-wordmark.svg`,
  },
  {
    name: "Docker",
    wordmark: `${DEVICON_BASE}/docker/docker-original-wordmark.svg`,
  },
  {
    name: "Nginx",
    wordmark: `${DEVICON_BASE}/nginx/nginx-original-wordmark.svg`,
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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const isDarkTheme = useIsDarkTheme();
  const loopedTechStack = [...techStack, ...techStack];

  const mutedFilter = isDarkTheme
    ? "grayscale(1) brightness(0) invert(1)"
    : "grayscale(1) brightness(0.22)";

  return (
    <TooltipProvider>
      <section
        aria-label="Tech stack marquee"
        className="relative overflow-hidden bg-linear-to-b from-white to-zinc-100 dark:from-white/10 dark:to-zinc-100/10 p-6 sm:px-12"
      >
        <div
          className="flex min-w-max animate-tech-stack-marquee whitespace-nowrap items-center"
          style={{
            animationPlayState: hoveredIndex !== null ? "paused" : "running",
          }}
        >
          {loopedTechStack.map((item, index) => (
            <div key={`${item.name}-${index}`} className="contents">
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    type="button"
                    className="mr-10 cursor-pointer inline-flex items-center"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    aria-label={item.name}
                  >
                    <img
                      src={item.wordmark}
                      alt={item.name}
                      className={`w-10 h-auto max-w-none transition-[transform,filter,opacity] duration-500 ease-out ${
                        hoveredIndex === index
                          ? "scale-110 opacity-100"
                          : "scale-100 opacity-75"
                      }`}
                      style={{
                        filter:
                          hoveredIndex === index ? "none" : mutedFilter,
                      }}
                    />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="top">{item.name}</TooltipContent>
              </Tooltip>
              <span className="mr-20 inline-flex items-center">
                <MarqueeStar size={20} className="text-orange-300" />
              </span>
            </div>
          ))}
        </div>
      </section>
    </TooltipProvider>
  );
}
