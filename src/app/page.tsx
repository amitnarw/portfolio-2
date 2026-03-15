import Navbar from "@/components/layout/navbar";
import Hero from "@/components/homepage/hero";
import Footer from "@/components/layout/footer";
import MarqueeText from "@/components/homepage/marquee-text";
import MarqueeStar from "@/components/homepage/marquee-star";
import SkillsMarquee from "@/components/homepage/skills-marquee";
import About from "@/components/homepage/about";
import Services from "@/components/homepage/services";
import SelectedWork from "@/components/homepage/selected-work";
import Experience from "@/components/homepage/experience";
import Testimonials from "@/components/homepage/testimonials";
import BlogArticles from "@/components/homepage/blog-articles";

export default function Home() {
  const marqueeItems = Array.from({ length: 14 }, (_, i) => (
    <span
      key={`marquee-${i}`}
      className="pr-8 flex flex-row items-center gap-10"
    >
      <span>Contact Me</span>
      <MarqueeStar size={50} className="text-orange-400" />
    </span>
  ));

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SkillsMarquee />
        <About />
        <Services />
        <SelectedWork />
        <Experience />
        <Testimonials />
        <BlogArticles />
        <MarqueeText marqueeItems={marqueeItems} className="py-0" />
        <Footer />
      </main>
    </>
  );
}
