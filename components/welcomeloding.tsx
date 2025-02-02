"use client";

import React, { useEffect, useState } from "react";
import { Loader } from "lucide-react"; // You can use any spinner component

const WelcomeLoading = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading for 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Hide the loading screen after 5 seconds
    }, 5000);

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, []);

  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-background text-foreground ${
        loading ? "opacity-100" : "opacity-0 pointer-events-none"
      } transition-opacity duration-500`}
    >
      {/* Welcome Loading Screen */}
      {loading ? (
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="animate-pulse">
            <Loader size={64} className="text-purple-500" />
          </div>
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
            Welcome to the Platform!
          </h1>
          <p className="text-lg text-muted-foreground">
            We&lsquo;re preparing everything for you. Please wait...
          </p>
        </div>
      ) : (
        // After loading, the main content or page will appear here
        <div className="min-h-screen bg-background text-foreground p-6">
          {/* Main Content after loading */}
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
            Enjoy exploring our documentation and community!
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            Start browsing the tutorials, guides, and API documentation right away.
          </p>
        </div>
      )}
    </div>
  );
};

export default WelcomeLoading;
