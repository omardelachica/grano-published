import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export const Navbar = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      navigate("/");
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error signing out",
        description: error.message,
      });
    }
  };

  return (
    <nav className="fixed w-full bg-cream/80 backdrop-blur-md z-50 border-b border-espresso/10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="/lovable-uploads/b8d7326a-7a29-47b6-85f3-e89e65e462dd.png"
              alt="Grano"
              className="h-24 w-auto"
            />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="font-inter text-slate hover:text-espresso transition-colors"
            >
              Discover
            </a>
            <a
              href="#"
              className="font-inter text-slate hover:text-espresso transition-colors"
            >
              Roasters
            </a>
            <a
              href="#"
              className="font-inter text-slate hover:text-espresso transition-colors"
            >
              Journal
            </a>
            <a
              href="#"
              className="font-inter text-slate hover:text-espresso transition-colors"
            >
              About
            </a>
          </div>
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-espresso hover:bg-espresso/10"
                >
                  <User className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="text-espresso"
                  onClick={handleSignOut}
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <Button
                variant="default"
                className="bg-espresso hover:bg-espresso/90"
                onClick={() => navigate("/auth")}
              >
                Sign In
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};