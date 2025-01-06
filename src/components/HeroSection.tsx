import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const HeroSection = () => {
  return (
    <section className="pt-16 pb-12 md:pt-32 md:pb-24">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-6xl text-espresso mb-4 md:mb-6 leading-tight">
            Discover the World of Specialty Coffee
          </h1>
          <p className="text-slate text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Connect with artisanal roasters, explore unique beans, and embark on a journey of taste and sustainability.
          </p>
          <div className="max-w-2xl mx-auto relative px-4">
            <Input 
              type="text" 
              placeholder="Search coffee shops, roasters, or beans..." 
              className="pl-12 h-12 md:h-14 bg-white/90 border-espresso/20 focus:border-espresso text-sm md:text-base"
            />
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-espresso/50 h-5 w-5" />
          </div>
        </div>
      </div>
    </section>
  );
};