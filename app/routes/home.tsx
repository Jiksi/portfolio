import { useRef } from "react";
import type { Route } from "./+types/home";
import { motion } from "motion/react";
import { useMouseSpotlight } from "~/hooks/useMouseSpotlight";
import { Navigation } from "~/components/layout/Navigation";
import { Footer } from "~/components/layout/Footer";
import { HeroSection } from "~/components/home/HeroSection";
import { WorkSection } from "~/components/home/WorkSection";
import { ContactSection } from "~/components/home/ContactSection";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Zhicxi Azis Pramana | Software Engineer" },
    { name: "description", content: "Portfolio of Zhicxi Azis Pramana, a software engineer." },
  ];
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { maskImage } = useMouseSpotlight();

  return (
    <div ref={containerRef}>
      <div className="grid-overlay-container">
        <motion.div 
          className="grid-overlay" 
          style={{
            maskImage: maskImage,
            WebkitMaskImage: maskImage,
          }}
        />
      </div>
      
      <main className="container">
        <Navigation />
        <HeroSection />
        <WorkSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
