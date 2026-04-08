import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import ScanReveals from "@/components/ScanReveals";
import WhoFor from "@/components/WhoFor";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <ScanReveals />
        <WhoFor />
      </main>
      <Footer />
    </>
  );
}
