import Link from "next/link";
import { Linkedin } from "lucide-react";
import { CtaPillLink } from "@/components/cta-pill-link";

export default function Footer() {
  return (
    <footer className="bg-black text-white" id="contact">
      <div className="mx-auto flex w-full max-w-350 flex-col gap-10 px-6 py-12 lg:px-12">
        <div className="space-y-4">
          <p className="max-w-xl text-sm tracking-[0.2em] text-white/70">
            Scaling Start-ups for <span className="font-serif italic">Growth</span>
          </p>
          <a
            href="mailto:amitnarwal115@gmail.com"
            className="block text-lg font-medium tracking-wide text-white/85 transition-opacity hover:opacity-70"
          >
            amitnarwal115@gmail.com
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm uppercase tracking-[0.18em] text-white/65">
          <a href="#home" className="transition-colors hover:text-white">
            Home
          </a>
          <a href="#about" className="transition-colors hover:text-white">
            About
          </a>
          <a href="#blog" className="transition-colors hover:text-white">
            Blog
          </a>
          <a
            href="#services"
            className="transition-colors hover:text-white"
          >
            Services
          </a>
          <a href="#works" className="transition-colors hover:text-white">
            Work
          </a>
        </div>

        <div className="h-px w-full bg-white/20" />

        <div className="flex flex-col items-start justify-between gap-5 text-sm text-white/65 md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <span>@copyright 2026</span>
            <span>All Rights Reserved</span>
          </div>

          <div className="flex items-center gap-3">
            <CtaPillLink
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              ariaLabel="LinkedIn"
              className="h-10 w-10 bg-white text-black"
            >
              <Linkedin size={18} />
            </CtaPillLink>
            <CtaPillLink
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              ariaLabel="X"
              className="h-10 w-10 bg-white text-black"
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
            </CtaPillLink>
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
