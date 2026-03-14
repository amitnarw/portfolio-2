import { ArrowRight, Plus, Briefcase, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarGroup,
} from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { PremiumButton } from "./premium-button";

export default function DigitalBanking() {
  return (
    <section className="mx-auto w-full max-w-350 px-6 py-20 lg:px-12 bg-white">
      {/* Top Header Section */}
      
      <div className="mb-12 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
        <div className="max-w-2xl">
          <Badge
            variant="secondary"
            className="mb-6 rounded-none px-0 text-sm font-bold tracking-[0.15em] uppercase bg-transparent text-secondary border-none hover:bg-transparent"
          >
            Digital Banking
          </Badge>
          <h2 className="text-4xl font-normal leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Discover the{" "}
            <span className="relative inline-block">
              freedom
              <svg
                className="absolute -bottom-2 left-0 w-full text-secondary/30"
                viewBox="0 0 120 20"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 15Q30 5 60 12T118 8"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
            <br />
            of banking on your terms
          </h2>
        </div>

        <div className="flex max-w-sm flex-col items-start gap-6 lg:items-end lg:text-right">
          <p className="text-sm leading-relaxed text-muted-foreground lg:text-base">
            Get business banking, card, bill pay, travel, and reimbursements —
            all in one scalable solution
          </p>

          <PremiumButton text="Get Demo Account" />
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid h-auto grid-cols-1 gap-4 lg:grid-cols-12 lg:h-[600px]">
        {/* Personal Card */}
        <Card className="group relative col-span-1 flex min-h-[500px] flex-col overflow-hidden rounded-[2.5rem] p-0 border-none lg:col-span-8">
          {/* Background */}
          <div
            className="absolute inset-0 bg-accent-fade bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80')",
            }}
          />
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/20 to-transparent" />

          {/* Content */}
          <div className="relative z-10 flex h-full flex-col justify-between p-8 lg:p-12">
            <div className="max-w-md text-white">
              <h3 className="mb-4 text-3xl font-medium md:text-5xl">
                Personal
              </h3>
              <p className="text-sm leading-relaxed text-white/90 md:text-base md:leading-relaxed">
                The all-in-one plan for banking, saving, investing, and travel.
                Home or away, local or global — move freely between countries
                and currencies
              </p>
            </div>

            {/* Bottom Section inside Card */}
            <div className="mt-8 flex items-end justify-between">
              {/* Floating Widget */}
              <div className="w-max rounded-[2.5rem] bg-white p-4 shadow-2xl sm:p-5">
                <div className="grid grid-cols-3 gap-3">
                  {/* Plus Button */}
                  <Button
                    variant="secondary"
                    size="icon"
                    className="h-13 w-13 rounded-full bg-secondary text-white shadow-sm transition-transform hover:scale-105 hover:bg-secondary/90"
                  >
                    <Plus className="h-6 w-6" />
                  </Button>
                  {/* Date Box */}
                  <div className="relative flex h-13 w-13 flex-col items-center justify-center rounded-2xl bg-muted text-foreground">
                    <div className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-accent-hot" />
                    <span className="text-xl font-medium">23</span>
                  </div>
                  {/* Briefcase Box */}
                  <div className="flex h-13 w-13 items-center justify-center rounded-full border border-border bg-transparent text-foreground">
                    <Briefcase className="h-5 w-5" />
                  </div>

                  {/* Avatars Grid */}
                  <AvatarGroup className="h-13 w-13 flex flex-wrap items-center justify-center content-center gap-1 overflow-hidden rounded-2xl bg-muted p-1 space-x-0">
                    {[1, 2, 3, 4].map((i) => (
                      <Avatar
                        key={i}
                        className="h-[20px] w-[20px] rounded-full p-0 border-none ring-0"
                      >
                        <AvatarImage
                          src={`https://i.pravatar.cc/100?img=${i}`}
                          alt={`User ${i}`}
                        />
                        <AvatarFallback>U{i}</AvatarFallback>
                      </Avatar>
                    ))}
                  </AvatarGroup>
                  {/* Logo Box */}
                  <div className="flex h-13 w-13 items-center justify-center rounded-full bg-white text-black shadow-sm ring-1 ring-gray-100">
                    <div className="flex flex-col text-[10px] font-bold leading-none tracking-tighter">
                      <span>rB</span>
                      <span>aJ</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Right Next Button */}
              <Button
                size="icon"
                className="h-14 w-14 rounded-full bg-foreground text-background shadow-lg transition-transform hover:scale-105 hover:bg-foreground/90"
              >
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Business Card */}
        <Card className="group relative col-span-1 flex min-h-[250px] items-end overflow-hidden rounded-[2.5rem] bg-secondary p-8 border-none lg:col-span-2 lg:min-h-full lg:items-center lg:justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center brightness-110 saturate-150 transition-transform duration-700 group-hover:scale-105 mix-blend-overlay"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&w=800&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent lg:bg-linear-to-l" />
          <h3
            className="relative z-10 text-4xl font-medium text-white lg:-rotate-180 text-nowrap"
            style={{ writingMode: "vertical-rl" }}
          >
            Business
          </h3>
        </Card>

        {/* Freelance Card */}
        <Card className="group relative col-span-1 flex min-h-[250px] items-end overflow-hidden rounded-[2.5rem] bg-primary p-8 border-none lg:col-span-2 lg:min-h-full lg:items-center lg:justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 mix-blend-overlay opacity-60"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1557672199-6e8c4b2b4e61?auto=format&fit=crop&w=800&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent lg:bg-linear-to-l" />
          <h3
            className="relative z-10 text-4xl font-medium text-white lg:-rotate-180 text-nowrap"
            style={{ writingMode: "vertical-rl" }}
          >
            Freelance
          </h3>
        </Card>
      </div>
    </section>
  );
}
