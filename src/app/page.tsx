import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import DigitalBanking from "@/components/digital-banking";
import Footer from "@/components/footer";
import MarqueeText from "@/components/marquee-text";
import MarqueeStar from "@/components/marquee-star";
import SkillsMarquee from "@/components/skills-marquee";

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
        <DigitalBanking />
        <MarqueeText marqueeItems={marqueeItems} />
        <Footer />
      </main>
    </>
  );
}
