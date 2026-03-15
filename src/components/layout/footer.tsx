import Link from "next/link";
import { Linkedin } from "lucide-react";
import { PremiumButton1 } from "@/components/shared/premium-button-1";
import PremiumButton2 from "@/components/shared/premium-button-2";
import { AnimatedNavLink } from "@/components/shared/nav-link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-white pt-10" id="contact">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 flex justify-center">
        <div className="absolute -bottom-64 h-150 w-xl rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-64 h-128 w-lg rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-54 h-96 w-md rounded-full bg-secondary/15 blur-2xl" />
        <div className="absolute -bottom-54 h-70 w-40 rounded-full bg-secondary/40 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-350 flex-col gap-10 px-6 py-12 lg:px-12">
        <div className="flex flex-row items-end justify-between">
          <div className="space-y-10">
          <p className="max-w-xs text-4xl font-heading tracking-[0.15em] text-white">
            Scaling <span className="font-serif italic text-orange-400 text-5xl tracking-normal">Start-ups</span> for <span className="font-serif italic text-primary text-5xl tracking-normal">Growth</span>
          </p>
          <PremiumButton2 label="Get in touch" href="mailto:amitnarwal115@gmail.com" reverse />
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm uppercase tracking-[0.18em] text-white/65">
          {footerLinks.map((link) => (
            <AnimatedNavLink href={link.href} label={link.label} />
          ))}
        </div>
        </div>

        <div className="h-px w-full bg-white/20 mt-5" />

        <div className="flex flex-col items-start justify-between gap-5 text-sm text-white/65 md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <span>@copyright 2026</span>
            <span>All Rights Reserved</span>
          </div>

          <div className="flex items-center gap-3">
            <PremiumButton1
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              ariaLabel="LinkedIn"
              className="h-10 w-10 bg-white text-black border-0"
            >
              <Linkedin size={18} />
            </PremiumButton1>
            <PremiumButton1
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              ariaLabel="X"
              className="h-10 w-10 bg-white text-black border-0"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M18.901 2H22L15.233 9.736L23.194 22H16.959L12.074 14.579L5.581 22H2.48L9.719 13.727L2 2H8.394L12.81 8.783L18.901 2ZM17.813 20.026H19.53L7.46 3.87H5.618L17.813 20.026Z" />
              </svg>
            </PremiumButton1>
          </div>

          <div className="flex items-center gap-5">
            <Link
              href="/terms"
              className="transition-colors hover:text-white"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
