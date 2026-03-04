import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import DigitalBanking from "@/components/digital-banking";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <DigitalBanking />
      </main>
    </>
  );
}
