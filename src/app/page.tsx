import Navbar from "@/components/navbar/Navbar";
import HeroSection from "./hero/HeroSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-start text-black w-full min-h-screen p-32">
        <HeroSection />
      </main>
    </div>
  );
}
