import { Coffee, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CallToAction = () => {
  return (
    <section className="py-8 md:py-12 bg-white/50">
      <div className="container px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <Button 
            className="h-auto py-4 md:py-6 bg-espresso hover:bg-espresso/90 flex flex-col items-center gap-2 md:gap-3"
          >
            <Coffee className="h-5 w-5 md:h-6 md:w-6" />
            <span className="text-sm md:text-base">Explore Coffee</span>
          </Button>
          <Button 
            className="h-auto py-4 md:py-6 bg-burgundy hover:bg-burgundy/90 flex flex-col items-center gap-2 md:gap-3"
          >
            <Users className="h-5 w-5 md:h-6 md:w-6" />
            <span className="text-sm md:text-base">Join the Community</span>
          </Button>
          <Button 
            className="h-auto py-4 md:py-6 bg-burgundy hover:bg-burgundy/90 flex flex-col items-center gap-2 md:gap-3 sm:col-span-2 md:col-span-1"
          >
            <BookOpen className="h-5 w-5 md:h-6 md:w-6" />
            <span className="text-sm md:text-base">Log Coffee Experiences</span>
          </Button>
        </div>
      </div>
    </section>
  );
};