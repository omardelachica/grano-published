import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";
import { AuthForm } from "@/components/auth/AuthForm";

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
        // For test account, directly sign up and sign in
        if (email === "test@test.com" && password === "Test1234") {
          const { error: signUpError } = await supabase.auth.signUp({
            email,
            password,
            options: {
              data: {
                username,
              },
            },
          });

          if (signUpError) throw signUpError;

          // Wait a moment before signing in
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
        } else {
          const { error } = await supabase.auth.signUp({
            email,
            password,
            options: {
              data: {
                username,
              },
            },
          });

          if (error) throw error;

          toast({
            title: "Check your email",
            description: "We sent you a confirmation link. Please verify your email before logging in.",
          });
        }
      } else {
        // Handle sign in
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (signInError) {
          toast({
            variant: "destructive",
            title: "Invalid credentials",
            description: "Please check your email and password.",
          });
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
            className="mx-auto h-48 w-auto"
          />
          <h2 className="mt-6 text-3xl font-playfair font-bold text-espresso">
            {isSignUp ? "Create your account" : "Welcome back"}
          </h2>
        </div>
        <AuthForm
          isSignUp={isSignUp}
          isLoading={isLoading}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          username={username}
          setUsername={setUsername}
          onSubmit={handleSubmit}
          onGoogleSignIn={handleGoogleSignIn}
          onToggleMode={() => setIsSignUp(!isSignUp)}
        />
      </div>
    </div>
  );
};

export default Auth;