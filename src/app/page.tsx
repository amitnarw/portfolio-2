import { Metadata } from "next";
import Navbar from "@/components/layout/navbar";
import Hero from "@/components/homepage/hero";
import Footer from "@/components/layout/footer";
import MarqueeStar from "@/components/homepage/marquee-star";
import SkillsMarquee from "@/components/homepage/skills-marquee";
import About from "@/components/homepage/about";
import Services from "@/components/homepage/services";
import SelectedWork from "@/components/homepage/selected-work";
import Experience from "@/components/homepage/experience";
import BlogArticles from "@/components/homepage/blog-articles";
import { Marquee } from "@/components/ui/marquee";

export const metadata: Metadata = {
  alternates: { canonical: "https://amitnarwal.com" },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="homepage-root" className="min-h-screen bg-background text-foreground transition-none">
        <Hero />
        <SkillsMarquee />
        <About />
        <Services />
        <SelectedWork />
        <Experience />
        {/* <Testimonials /> */}
        <BlogArticles />
        <Marquee
          className="pointer-events-none z-0 text-2xl sm:text-8xl font-heading uppercase tracking-[0.12em] text-foreground/20"
          fade
          duration={10}
          gap={2}
          items={[
            <span key="contact">Contact Me</span>,
            <MarqueeStar key="star" size={50} className="text-orange-400" />,
          ]}
        />
        <Footer />
      </main>
    </>
  );
}
