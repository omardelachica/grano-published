import { Navbar } from "@/components/Navbar";
import { FeaturedCard } from "@/components/FeaturedCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-cream font-inter">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-fraunces text-4xl md:text-6xl text-coffee mb-6 leading-tight">
              Discover the World of Specialty Coffee
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Connect with artisanal roasters, explore unique beans, and embark on a journey of taste and sustainability.
            </p>
            <Button className="bg-coffee hover:bg-coffee-dark text-white">
              Start Exploring <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="font-fraunces text-3xl text-coffee mb-12 text-center">Featured Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeaturedCard
              title="Ethiopian Yirgacheffe"
              description="Floral and bright with notes of bergamot and jasmine"
              image="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80"
            />
            <FeaturedCard
              title="Roaster Spotlight"
              description="Meet the artisans behind your favorite brews"
              image="https://images.unsplash.com/photo-1442550528053-c431ecb55509?auto=format&fit=crop&q=80"
            />
            <FeaturedCard
              title="Brewing Guides"
              description="Perfect your pour-over technique"
              image="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80"
            />
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-coffee text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <h3 className="font-fraunces text-xl">Curated Selection</h3>
              <p className="text-cream-dark">Handpicked coffees from the world's finest roasters</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-fraunces text-xl">Expert Guidance</h3>
              <p className="text-cream-dark">Learn from industry professionals and fellow enthusiasts</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-fraunces text-xl">Sustainable Impact</h3>
              <p className="text-cream-dark">Supporting ethical sourcing and environmental responsibility</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;