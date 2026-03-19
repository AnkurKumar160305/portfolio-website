import { Splash } from "@/components/Splash";
import { Hero } from "@/components/Hero";
import { Achievements } from "@/components/Achievements";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Navigation } from "@/components/Navigation";

export default function Home() {
  return (
    <main className="relative min-h-screen text-slate-100 selection:bg-blue-500/30">
      <Splash />
      <AnimatedBackground />
      <Navigation />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 space-y-32">
        <Hero />
        <Achievements />
        <Projects />
        <Skills />
        <Education />
        <Footer />
      </div>
    </main>
  );
}
