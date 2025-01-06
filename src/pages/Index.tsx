import { HeroSection } from "@/components/HeroSection";
import { CallToAction } from "@/components/CallToAction";
import { FeaturedSection } from "@/components/FeaturedSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { SustainabilitySection } from "@/components/SustainabilitySection";

const Index = () => {
  return (
    <div className="min-h-screen bg-cream font-inter">
      <HeroSection />
      <CallToAction />
      <FeaturedSection />
      <TestimonialsSection />
      <SustainabilitySection />
    </div>
  );
};

export default Index;