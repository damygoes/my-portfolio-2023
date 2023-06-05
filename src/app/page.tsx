"use client";
import Projects from "@/pages/projects/page";
import About from "../pages/about/page";
import Experience from "../pages/experience/page";
import HeroSection from "../pages/hero/page";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="flex flex-col items-start text-black w-full min-h-screen px-32 py-16">
      <HeroSection />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
}
