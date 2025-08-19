import AboutSection from "@/components/AboutSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import Hero from "@/components/Hero";
import ServicesTicker from "@/components/ServicesTicker";

export default function Home() {
  return (
    <div >
      <main>
          <Hero />
          <AboutSection />
          <FeaturedProjects />
          <ServicesTicker />
      </main>
      <footer >
        
      </footer>
    </div>
  );
}
