import AboutSection from "@/components/AboutSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import Hero from "@/components/Hero";
import JoinPortfolioSection from "@/components/JoinPortfolioSection";
import ServicesTicker from "@/components/ServicesTicker";
import SouthernPhilosophySection from "@/components/SouthernPhilosophySection";

export default function Home() {
  return (
    <div>
      <main>
          <Hero />
          <AboutSection />
          <FeaturedProjects />
          <ServicesTicker />
          <JoinPortfolioSection />
          <SouthernPhilosophySection />
      </main>
    </div>
  );
}
