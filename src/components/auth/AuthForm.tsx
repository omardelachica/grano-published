import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FcGoogle } from "react-icons/fc";
import { AuthFormProps } from "./types";

export const AuthForm = ({
  isSignUp,
  isLoading,
  email,
  setEmail,
  password,
  setPassword,
  username,
  setUsername,
  onSubmit,
  onGoogleSignIn,
  onToggleMode,
}: AuthFormProps) => {
  return (
    <form className="mt-8 space-y-6" onSubmit={onSubmit}>
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
        {isLoading ? "Loading..." : isSignUp ? "Create account" : "Sign in"}
      </Button>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-espresso/20"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-cream text-espresso/60">Or continue with</span>
        </div>
      </div>

      <Button
        type="button"
        variant="outline"
        className="w-full"
        onClick={onGoogleSignIn}
      >
        <FcGoogle className="mr-2 h-5 w-5" />
        Google
      </Button>

      <div className="text-center mt-4">
        <button
          type="button"
          onClick={onToggleMode}
          className="text-espresso/80 hover:text-espresso text-sm"
        >
          {isSignUp
            ? "Already have an account? Sign in"
            : "Need an account? Sign up"}
        </button>
      </div>
    </form>
  );
};