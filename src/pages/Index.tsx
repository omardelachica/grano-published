import { Navbar } from "@/components/Navbar";
import { FeaturedCard } from "@/components/FeaturedCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-cream font-inter">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-playfair text-4xl md:text-6xl text-espresso mb-6 leading-tight">
              Discover the World of Specialty Coffee
            </h1>
            <p className="text-slate text-lg mb-8 max-w-2xl mx-auto">
              Connect with artisanal roasters, explore unique beans, and embark on a journey of taste and sustainability.
            </p>
            <Button className="bg-forest hover:bg-forest/90 text-white">
              Start Exploring <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="font-playfair text-3xl text-espresso mb-12 text-center">Featured Experiences</h2>
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
      <section className="py-20 bg-espresso text-cream">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <h3 className="font-playfair text-xl text-gold">Curated Selection</h3>
              <p className="text-cream/80">Handpicked coffees from the world's finest roasters</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-playfair text-xl text-gold">Expert Guidance</h3>
              <p className="text-cream/80">Learn from industry professionals and fellow enthusiasts</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-playfair text-xl text-gold">Sustainable Impact</h3>
              <p className="text-cream/80">Supporting ethical sourcing and environmental responsibility</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;