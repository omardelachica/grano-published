import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const HeroSection = () => {
  return (
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
  );
};