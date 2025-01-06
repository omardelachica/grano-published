import { Coffee, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Coffee className="h-6 w-6 text-coffee" />
            <span className="font-fraunces text-xl font-semibold text-coffee">Grano</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-coffee transition-colors">Discover</a>
            <a href="#" className="text-gray-600 hover:text-coffee transition-colors">Roasters</a>
            <a href="#" className="text-gray-600 hover:text-coffee transition-colors">Journal</a>
            <a href="#" className="text-gray-600 hover:text-coffee transition-colors">About</a>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-coffee">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};