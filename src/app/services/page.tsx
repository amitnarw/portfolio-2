import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { 
  Code2, 
  Cpu, 
  Layers, 
  BrainCircuit, 
  Sparkles, 
  Blocks, 
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Zap,
  Globe,
  Monitor,
  Database,
  Search,
  MessageSquare,
  ShieldCheck,
  Star,
  Coffee,
  Heart
} from "lucide-react";
import { PremiumButton1 } from "@/components/shared/premium-button-1";
import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Engineering Services | Amit Narwal",
  description: "Crafting future-proof digital products with AI integration, high-end frontend engineering, and scalable cloud architecture.",
};

const services = [
  {
    id: "ai",
    title: "AI Integration",
    subtitle: "Smarter Workflows",
    description: "I help businesses leverage the power of Artificial Intelligence to automate repetitive tasks and gain deeper insights from data. From custom RAG systems to agentic workflows.",
    icon: BrainCircuit,
    color: "from-blue-500/10 to-purple-500/10",
    borderColor: "hover:border-purple-500/50",
    tag: "Most Popular",
    features: ["LLM Implementations", "RAG Systems", "Vector Databases", "Agentic Workflows"],
    span: "lg:col-span-2"
  },
  {
    id: "frontend",
    title: "High-End Frontend",
    subtitle: "Cinematic Experiences",
    description: "Pixel-perfect, ultra-fast user interfaces with focus on Core Web Vitals, accessibility, and high-end motion design.",
    icon: Code2,
    color: "from-orange-500/10 to-red-500/10",
    borderColor: "hover:border-red-500/50",
    features: ["Next.js/React", "Framer Motion", "Tailwind CSS"],
    span: "lg:col-span-1"
  },
  {
    id: "backend",
    title: "Cloud Architecture",
    subtitle: "Total Scalability",
    description: "Secure, distributed backend architectures capable of handling heavy loads with 99.9% uptime and low latency.",
    icon: Database,
    color: "from-green-500/10 to-emerald-500/10",
    borderColor: "hover:border-emerald-500/50",
    features: ["Node/Python", "PostgreSQL", "Redis"],
    span: "lg:col-span-1"
  },
  {
    id: "product",
    title: "Product Strategy",
    subtitle: "Concept to Reality",
    description: "Turning abstract ideas into concrete products. I work closely with founders to define roadmaps and build MVPs that win.",
    icon: Layers,
    color: "from-cyan-500/10 to-blue-500/10",
    borderColor: "hover:border-blue-500/50",
    features: ["MVP Scoping", "UI/UX Research", "Brand Identity"],
    span: "lg:col-span-2"
  }
];

const processSteps = [
  {
    number: "01",
    title: "Discovery & Audit",
    description: "Defining the problem space and auditing existing systems to map out a clear technical strategy for your unique needs.",
    icon: Search
  },
  {
    number: "02",
    title: "Design & Prototyping",
    description: "Rapid iterations on UI/UX mockups. Ensuring the feel is right before code is ever written. No guesswork involved.",
    icon: Monitor
  },
  {
    number: "03",
    title: "Sprint-Based Development",
    description: "Building in transparent, week-long sprints with constant feedback loops and staging environment access.",
    icon: Code2
  },
  {
    number: "04",
    title: "QA & Global Deployment",
    description: "Rigorous testing and performance tuning to ensure 99th percentile speed and reliability across all regions.",
    icon: Zap
  }
];

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer: "Timelines vary based on complexity. A robust MVP typically takes 4-8 weeks, while smaller features can be handled in 1-2 weeks. I prioritize sustainable speed without compromising on quality."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Absolutely. I provide flexible maintenance arrangements, from ad-hoc support to monthly retainers, ensuring your application remains updated, secure, and performant."
  },
  {
    question: "Which tech stack do you prefer for scaling?",
    answer: "My primary choice is Next.js, TypeScript, and Tailwind CSS for the frontend, with Node.js/Python and PostgreSQL for the backend. However, I always choose the best tool for your specific problem."
  },
  {
    question: "Can you work with my existing team?",
    answer: "Yes, I often join existing engineering teams as a senior contributor or lead to help push complex features or architectural revamps across the finish line."
  }
];

const stats = [
  { label: "Projects Completed", value: "40+", icon: Star },
  { label: "Lines of Code", value: "2.4M+", icon: Code2 },
  { label: "Happy Clients", value: "100%", icon: Heart },
  { label: "Coffee Consumed", value: "∞", icon: Coffee },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background text-foreground scroll-smooth overflow-x-hidden">
        {/* Subtle Noise Texture Overlay */}
        <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.04] mix-blend-overlay" 
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        />

        {/* Hero Section */}
        <section className="relative pt-32 pb-16 lg:pt-56 lg:pb-24 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[160px] rounded-full -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 blur-[140px] rounded-full translate-y-1/4 -translate-x-1/4" />
          </div>
          
          <div className="mx-auto w-full max-w-350 px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row gap-16 lg:items-end justify-between">
              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-8 animate-fade-in-up">
                  <Sparkles size={12} strokeWidth={3} />
                  <span>Available for New Projects</span>
                </div>
                
                <h1 className="text-[clamp(3rem,9vw,7.5rem)] font-heading leading-[0.8] tracking-tighter uppercase mb-10 animate-fade-in-up">
                  Engineering <br /> 
                  <span className="text-muted-foreground/30 italic font-serif normal-case tracking-normal">Exceptional</span>  <br />
                  Digital Products.
                </h1>
                
                <div className="flex flex-col md:flex-row md:items-center gap-10 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
                  <p className="text-xl md:text-2xl text-muted-foreground/80 max-w-xl leading-relaxed">
                    I translate complex business requirements into high-performance technical solutions that drive growth.
                  </p>
                  <div className="h-20 w-px bg-foreground/10 hidden md:block" />
                  <div className="flex flex-col gap-4">
                     <span className="text-sm font-bold opacity-40 uppercase tracking-widest">Collaborated with</span>
                     <div className="flex gap-6 items-center opacity-60">
                        <Globe size={24} />
                        <Zap size={24} />
                        <Cpu size={24} />
                        <Layers size={24} />
                     </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Badge */}
              <div className="lg:mb-10 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
                <Link href="mailto:amitnarwal115@gmail.com" className="group relative flex items-center justify-center w-48 h-48 rounded-full border border-foreground/10 hover:border-primary transition-colors duration-500">
                  <div className="absolute inset-2 rounded-full border border-dashed border-foreground/10 animate-[spin_20s_linear_infinite] group-hover:border-primary/50" />
                  <div className="flex flex-col items-center text-center p-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">Let's talk</span>
                    <ArrowRight size={24} className="mt-2 transition-transform group-hover:translate-x-2" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 border-y border-foreground/5 bg-foreground/2">
           <div className="mx-auto w-full max-w-350 px-6 lg:px-12">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <div className="flex items-center gap-3 mb-2">
                       <stat.icon size={16} className="text-primary" />
                       <span className="text-3xl md:text-4xl font-heading uppercase">{stat.value}</span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</span>
                  </div>
                ))}
              </div>
           </div>
        </section>

        {/* Interactive List Services */}
        <section className="py-24 relative border-y border-foreground/5 bg-background overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3 -z-10" />
          
          <div className="mx-auto w-full max-w-6xl px-6 lg:px-12">
            <div className="flex flex-col mb-16 lg:mb-24">
               <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4 block animate-fade-in-up">[ 01. CAPABILITIES ]</span>
               <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-8">
                 <h2 className="text-4xl md:text-6xl font-heading uppercase leading-none max-w-2xl">
                   Domain <br/><span className="text-muted-foreground">Expertise.</span>
                 </h2>
                 <p className="text-lg text-muted-foreground/80 max-w-md lg:text-right">
                   Multidisciplinary technical proficiency designed to ship robust, scalable, and premium digital solutions.
                 </p>
               </div>
            </div>

            <div className="flex flex-col border-t border-foreground/10">
              {services.map((service, idx) => (
                <div key={service.id} className="group relative flex flex-col lg:flex-row items-start lg:items-center justify-between py-12 lg:py-16 border-b border-foreground/10 hover:bg-muted/30 transition-all duration-500 gap-8 px-6 lg:px-12 -mx-6 lg:-mx-12 cursor-pointer overflow-hidden">
                   {/* Background accent on hover */}
                   <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
                   
                   <div className="flex items-center gap-8 lg:w-5/12">
                     <div className="flex flex-col items-center">
                       <span className="text-sm font-mono text-muted-foreground/40 group-hover:text-primary transition-colors mb-2">0{idx + 1}</span>
                       <div className="w-px h-12 bg-foreground/10 group-hover:bg-primary/50 transition-colors" />
                     </div>
                     <div>
                       <span className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-3 block">{service.subtitle}</span>
                       <h3 className="text-3xl lg:text-5xl font-heading uppercase leading-[0.85] group-hover:translate-x-4 transition-transform duration-500">
                         {service.title}
                       </h3>
                     </div>
                   </div>
                   
                   <div className="lg:w-5/12">
                     <p className="text-base text-muted-foreground/80 leading-relaxed mb-6">
                       {service.description}
                     </p>
                     <div className="flex flex-wrap gap-2">
                       {service.features.map(feature => (
                         <span key={feature} className="text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-foreground/10 bg-background/50 group-hover:border-primary/40 group-hover:text-foreground transition-all duration-300 shadow-sm">
                           {feature}
                         </span>
                       ))}
                     </div>
                   </div>
                   
                   <div className="hidden lg:flex lg:w-2/12 justify-end">
                      <div className="w-20 h-20 rounded-full border border-foreground/10 bg-card flex items-center justify-center group-hover:bg-primary group-hover:text-background group-hover:border-primary transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(var(--primary),0.4)]">
                         <ArrowRight size={28} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                      </div>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Scrolling Social Proof Marquee */}
        <div className="py-12 border-y border-foreground/5 bg-muted/20 overflow-hidden relative">
          <div className="flex animate-marquee whitespace-nowrap gap-24 items-center" 
            style={{ "--duration": "60s", "--gap": "6rem" } as React.CSSProperties}>
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="flex items-center gap-10 text-3xl font-heading opacity-10 grayscale uppercase tracking-tighter">
                <div className="flex items-center gap-4"><Globe size={32} /> SOLUTIONS</div>
                <span className="text-primary">•</span>
                <div className="flex items-center gap-4"><Zap size={32} strokeWidth={1} /> AGILITY</div>
                <span className="text-primary">•</span>
                <div className="flex items-center gap-4"><ShieldCheck size={32} strokeWidth={1} /> SECURITY</div>
                <span className="text-primary">•</span>
                <div className="flex items-center gap-4"><BrainCircuit size={32} strokeWidth={1} /> AI-FIRST</div>
                <span className="text-primary">•</span>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Pipeline Grid */}
        <section className="pt-24 lg:pt-32 bg-foreground text-background relative border-t border-foreground/10 overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-size-[60px_60px] pointer-events-none" />
          
          <div className="mx-auto w-full max-w-6xl px-6 lg:px-12 mb-16 lg:mb-24 relative z-10">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
              <div className="max-w-3xl">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-5 block">[ 02. METHODOLOGY ]</span>
                <h2 className="text-5xl md:text-7xl font-heading uppercase leading-[0.9] mb-6">
                  The Engineering <br/> <span className="text-primary italic font-serif normal-case tracking-normal">Pipeline.</span>
                </h2>
                <p className="text-xl text-background/60 max-w-xl leading-relaxed">
                  A highly disciplined and systemic workflow built to eliminate creative entropy and scale development reliably.
                </p>
              </div>
              <div className="hidden lg:flex items-center gap-6">
                 <div className="w-px h-16 bg-background/20" />
                 <div className="w-20 h-20 rounded-full border border-background/20 flex items-center justify-center animate-[spin_12s_linear_infinite]">
                    <Search size={28} className="text-primary" />
                 </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-background/10 relative z-10 bg-foreground/90 backdrop-blur-md">
            <div className="absolute top-1/2 left-0 w-full h-px bg-background/5 hidden lg:block -translate-y-1/2" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 lg:divide-x divide-background/10 relative">
              {processSteps.map((step, idx) => (
                 <div key={step.number} className="group p-10 lg:p-14 relative overflow-hidden bg-foreground hover:bg-[#111] transition-colors duration-700">
                   {/* Abstract Shape Background */}
                   <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-primary/5 rounded-full blur-[50px] group-hover:bg-primary/20 transition-all duration-700" />
                   
                   <div className="mb-14 flex justify-between items-start">
                     <span className="text-6xl lg:text-7xl font-heading text-background/10 group-hover:text-primary transition-colors duration-500">{step.number}</span>
                     <div className="w-14 h-14 rounded-full border border-background/10 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors duration-500">
                       <step.icon size={24} className="text-background/30 group-hover:text-primary transition-colors duration-500" />
                     </div>
                   </div>
                   
                   <h3 className="text-2xl font-heading uppercase mb-5 z-10 relative">{step.title}</h3>
                   <p className="text-background/50 leading-relaxed text-base group-hover:text-background/80 transition-colors duration-500 z-10 relative min-h-[5rem]">
                     {step.description}
                   </p>
                   
                   <div className="mt-14 h-1 w-0 bg-primary group-hover:w-full transition-all duration-700 ease-out" />
                 </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ - Bento Accordion */}
        <section className="py-24 lg:py-48">
          <div className="mx-auto w-full max-w-350 px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-4">
                <h2 className="text-5xl md:text-6xl font-heading uppercase mb-6 leading-[0.9]">Common <br /> Queries.</h2>
                <p className="text-lg text-muted-foreground/80 mb-8">Quick answers to frequently asked technical and logistical questions.</p>
                <div className="flex items-center gap-4 p-6 rounded-3xl bg-muted/50 border border-foreground/5">
                   <div className="p-3 rounded-xl bg-primary text-background">
                     <MessageSquare size={20} />
                   </div>
                   <div>
                     <span className="text-xs font-bold uppercase tracking-widest block">Still curious?</span>
                     <Link href="mailto:amitnarwal115@gmail.com" className="text-sm font-bold text-primary underline">Message me directly</Link>
                   </div>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-4">
                {faqs.map((faq, index) => (
                  <details key={index} className="group overflow-hidden rounded-4xl border border-foreground/5 bg-card/40 backdrop-blur-md transition-all duration-500 hover:border-primary/40">
                    <summary className="flex cursor-pointer items-center justify-between p-8 md:p-10">
                      <h3 className="text-xl md:text-2xl font-medium pr-8">{faq.question}</h3>
                      <div className="h-14 w-14 shrink-0 rounded-full border border-foreground/10 flex items-center justify-center transition-all duration-500 group-open:rotate-180 group-hover:bg-primary group-hover:text-background group-hover:border-primary">
                        <ChevronDown size={24} strokeWidth={1} />
                      </div>
                    </summary>
                    <div className="px-8 pb-10 md:px-10">
                      <p className="text-lg md:text-xl text-muted-foreground/80 leading-relaxed max-w-3xl">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final High-Impact CTA */}
        <section className="pb-24 lg:pb-48">
          <div className="mx-auto w-full max-w-350 px-6 lg:px-12">
            <div className="relative overflow-hidden rounded-[3.5rem] bg-foreground px-10 py-20 lg:p-32 text-center text-background">
              {/* Complex Glowing Orbs */}
              <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/20 blur-[180px] -translate-x-1/2 -translate-y-1/2 animate-pulse" />
              <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-400/10 blur-[150px] translate-x-1/4 translate-y-1/4" />
              
              <div className="relative z-10 max-w-5xl mx-auto">
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/60 mb-10 block animate-pulse">Taking bookings for Q3 2024</span>
                <h2 className="text-[clamp(2.5rem,8.5vw,7.5rem)] font-heading leading-[0.85] tracking-tighter uppercase mb-12">
                  Let's Build <br /> Something <span className="text-primary italic font-serif normal-case tracking-normal">Timeless.</span>
                </h2>
                
                <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                  <PremiumButton1 
                    href="mailto:amitnarwal115@gmail.com"
                    className="px-16 py-6 bg-primary text-background border-none hover:shadow-[0_0_60px_rgba(var(--primary),0.4)] text-2xl font-black uppercase tracking-widest transition-all hover:scale-105"
                  >
                    Start Project
                  </PremiumButton1>
                  <Link href="/blog" className="group flex items-center gap-4 text-lg font-bold uppercase tracking-[0.2em] text-background/50 hover:text-background transition-all">
                    VIEW LAB NOTES <ArrowRight size={22} className="transition-transform group-hover:translate-x-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
