import AuroraBackground from "@/components/AuroraBackground";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="noise" />
      <AuroraBackground />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      <main className="relative">
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
