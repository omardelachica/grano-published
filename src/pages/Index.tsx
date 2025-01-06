import { Navbar } from "@/components/Navbar";
import { FeaturedCard } from "@/components/FeaturedCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Coffee, Users, BookOpen, ArrowRight, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-cream font-inter">
      <Navbar />
      
      {/* Hero Section with Search */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-playfair text-4xl md:text-6xl text-espresso mb-6 leading-tight">
              Discover the World of Specialty Coffee
            </h1>
            <p className="text-slate text-lg mb-8 max-w-2xl mx-auto">
              Connect with artisanal roasters, explore unique beans, and embark on a journey of taste and sustainability.
            </p>
            <div className="max-w-2xl mx-auto relative">
              <Input 
                type="text" 
                placeholder="Search for specialty coffee shops, roasters, or beans..." 
                className="pl-12 h-14 bg-white/90 border-espresso/20 focus:border-espresso"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-espresso/50 h-5 w-5" />
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Buttons */}
      <section className="py-12 bg-white/50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Button 
              className="h-auto py-6 bg-espresso hover:bg-espresso/90 flex flex-col items-center gap-3"
            >
              <Coffee className="h-6 w-6" />
              <span>Explore Coffee</span>
            </Button>
            <Button 
              className="h-auto py-6 bg-forest hover:bg-forest/90 flex flex-col items-center gap-3"
            >
              <Users className="h-6 w-6" />
              <span>Join the Community</span>
            </Button>
            <Button 
              className="h-auto py-6 bg-burgundy hover:bg-burgundy/90 flex flex-col items-center gap-3"
            >
              <BookOpen className="h-6 w-6" />
              <span>Log Coffee Experiences</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Roasters & Coffee */}
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

      {/* Testimonials */}
      <section className="py-20 bg-espresso text-cream">
        <div className="container">
          <h2 className="font-playfair text-3xl text-gold mb-12 text-center">What Coffee Lovers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/5 p-6 rounded-lg">
                <div className="flex gap-1 text-gold mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-cream/90 mb-4">
                  "Grano has transformed how I discover and enjoy specialty coffee. The community insights are invaluable!"
                </p>
                <div className="text-gold/80 text-sm">- Coffee Enthusiast</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Message */}
      <section className="py-20 bg-forest text-cream">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-playfair text-3xl mb-6">Committed to Sustainability</h2>
            <p className="text-cream/90 mb-8">
              We believe in supporting sustainable coffee practices that benefit both our planet and coffee communities worldwide. Every bean tells a story of environmental stewardship and fair trade.
            </p>
            <Button className="bg-cream text-forest hover:bg-cream/90">
              Learn About Our Impact <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-espresso text-cream py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-playfair text-xl text-gold mb-4">About Grano</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-cream/80 hover:text-cream">Our Story</a></li>
                <li><a href="#" className="text-cream/80 hover:text-cream">Mission</a></li>
                <li><a href="#" className="text-cream/80 hover:text-cream">Team</a></li>
                <li><a href="#" className="text-cream/80 hover:text-cream">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-playfair text-xl text-gold mb-4">Explore</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-cream/80 hover:text-cream">Roasters</a></li>
                <li><a href="#" className="text-cream/80 hover:text-cream">Coffee Guide</a></li>
                <li><a href="#" className="text-cream/80 hover:text-cream">Brewing Tips</a></li>
                <li><a href="#" className="text-cream/80 hover:text-cream">Events</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-playfair text-xl text-gold mb-4">Community</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-cream/80 hover:text-cream">Blog</a></li>
                <li><a href="#" className="text-cream/80 hover:text-cream">Forum</a></li>
                <li><a href="#" className="text-cream/80 hover:text-cream">Newsletter</a></li>
                <li><a href="#" className="text-cream/80 hover:text-cream">Social Impact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-playfair text-xl text-gold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-cream/80 hover:text-cream">Support</a></li>
                <li><a href="#" className="text-cream/80 hover:text-cream">Partner With Us</a></li>
                <li><a href="#" className="text-cream/80 hover:text-cream">Press</a></li>
                <li><a href="#" className="text-cream/80 hover:text-cream">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-cream/10 text-center text-cream/60">
            <p>&copy; {new Date().getFullYear()} Grano. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;