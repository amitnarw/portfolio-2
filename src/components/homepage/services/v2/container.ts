/**
 * Server-safe constants for the services lab. Kept out of atoms.tsx
 * (which has "use client") because importing string constants from a
 * client module into server components yields undefined at render ,
 * which silently drops the page container and renders full-bleed.
 */
export const CONTAINER = "mx-auto w-full max-w-350 px-6 lg:px-12";

export const HEADER_LEAD =
  "Three disciplines, one owner , the interface, the AI, and the infrastructure under it.";
