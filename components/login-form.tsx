"use client";

import { useState } from "react";

export default function LoginForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false);
    setToastMessage(
      isLogin ? "Logged in successfully! Welcome to Proda." : "Account created successfully! Welcome to Proda."
    );

    setTimeout(() => setToastMessage(""), 3000); // Hide toast after 3 seconds
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-6 border rounded-lg shadow-md">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            className="w-full px-4 py-2 border rounded-md bg-background border-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-foreground mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            className="w-full px-4 py-2 border rounded-md bg-background border-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        {!isLogin && (
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-foreground mb-1">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              required
              className="w-full px-4 py-2 border rounded-md bg-background border-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        )}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full px-4 py-2 rounded-md text-white bg-primary ${
            isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-primary/90"
          }`}
        >
          {isLoading ? "Processing..." : isLogin ? "Log in" : "Sign up"}
        </button>
        <p className="text-center text-sm">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-primary underline focus:outline-none"
          >
            {isLogin ? "Sign up" : "Log in"}
          </button>
        </p>
      </form>
      {toastMessage && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-4 py-2 rounded-lg shadow-lg">
          {toastMessage}
        </div>
      )}
    </div>
  );
}
