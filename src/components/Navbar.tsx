import { User } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed w-full bg-cream/80 backdrop-blur-md z-50 border-b border-espresso/10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/b8d7326a-7a29-47b6-85f3-e89e65e462dd.png" 
              alt="Grano" 
              className="h-8"
            />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="font-inter text-slate hover:text-espresso transition-colors">Discover</a>
            <a href="#" className="font-inter text-slate hover:text-espresso transition-colors">Roasters</a>
            <a href="#" className="font-inter text-slate hover:text-espresso transition-colors">Journal</a>
            <a href="#" className="font-inter text-slate hover:text-espresso transition-colors">About</a>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-espresso hover:bg-espresso/10">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};