import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";
import { FcGoogle } from "react-icons/fc";

const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isSignUp) {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              username,
            },
          },
        });
        
        if (error) throw error;
        
        // Check if the user needs to verify their email
        if (data?.user?.identities?.length === 0) {
          toast({
            title: "Account already exists",
            description: "Please try logging in or reset your password.",
            variant: "destructive",
          });
        } else {
          if (email === "test@test.com") {
            // For test account, wait a moment before signing in
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            const { error: signInError } = await supabase.auth.signInWithPassword({
              email,
              password,
            });
            
            if (!signInError) {
              toast({
                title: "Success",
                description: "Test account created and signed in successfully.",
              });
              navigate("/");
              return;
            }
          }
          toast({
            title: "Check your email",
            description: "We sent you a confirmation link. Please verify your email before logging in.",
          });
        }
      } else {
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        
        if (signInError) {
          if (signInError.message.includes("Email not confirmed") && email !== "test@test.com") {
            toast({
              title: "Email not verified",
              description: "Please check your email and verify your account before logging in.",
              variant: "destructive",
            });
          } else {
            toast({
              variant: "destructive",
              title: "Invalid credentials",
              description: "Please check your email and password.",
            });
          }
          throw signInError;
        }
        
        navigate("/");
      }
    } catch (error: any) {
      console.error("Auth error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });
      if (error) throw error;
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    }
  };

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <img
            src="/lovable-uploads/b8d7326a-7a29-47b6-85f3-e89e65e462dd.png"
            alt="Grano"
            className="mx-auto h-32 w-auto"
          />
          <h2 className="mt-6 text-3xl font-playfair font-bold text-espresso">
            {isSignUp ? "Create your account" : "Welcome back"}
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {isSignUp && (
              <div>
                <Label htmlFor="username">Username (optional)</Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-1"
                />
              </div>
            )}
            <div>
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1"
                pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                title="Password must be at least 8 characters long and contain at least one letter and one number"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-espresso hover:bg-espresso/90"
            disabled={isLoading}
          >
            {isLoading
              ? "Loading..."
              : isSignUp
              ? "Create account"
              : "Sign in"}
          </Button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-espresso/20"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-cream text-espresso/60">
                Or continue with
              </span>
            </div>
          </div>

          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={handleGoogleSignIn}
          >
            <FcGoogle className="mr-2 h-5 w-5" />
            Google
          </Button>

          <div className="text-center mt-4">
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-espresso/80 hover:text-espresso text-sm"
            >
              {isSignUp
                ? "Already have an account? Sign in"
                : "Need an account? Sign up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;