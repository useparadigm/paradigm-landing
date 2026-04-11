import Nav from "@/components/Nav";
import ScrollAnimation from "@/components/ScrollAnimation";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Comparison from "@/components/Comparison";
import ScanReveals from "@/components/ScanReveals";
import WhoFor from "@/components/WhoFor";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <ScrollAnimation />
        <Problem />
        <HowItWorks />
        <Comparison />
        <ScanReveals />
        <WhoFor />
      </main>
      <Footer />
    </>
  );
}
