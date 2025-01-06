import { Coffee, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CallToAction = () => {
  return (
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
            className="h-auto py-6 bg-burgundy hover:bg-burgundy/90 flex flex-col items-center gap-3"
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
  );
};