import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Users } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-playfair text-4xl text-espresso">
            <img 
              src="/lovable-uploads/b8d7326a-7a29-47b6-85f3-e89e65e462dd.png" 
              alt="Granos Logo" 
              className="h-24"
            />
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/explore">
              <Button variant="ghost">Explore</Button>
            </Link>
            <Link to="/roasters">
              <Button variant="ghost">
                <Users className="w-4 h-4 mr-2" />
                Producers
              </Button>
            </Link>
            <Link to="/auth">
              <Button>Sign In</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}