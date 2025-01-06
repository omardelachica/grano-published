import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { CallToAction } from "@/components/CallToAction";
import { FeaturedSection } from "@/components/FeaturedSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { SustainabilitySection } from "@/components/SustainabilitySection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-cream font-inter">
      <Navbar />
      <HeroSection />
      <CallToAction />
      <FeaturedSection />
      <TestimonialsSection />
      <SustainabilitySection />
      <Footer />
    </div>
  );
};

export default Index;