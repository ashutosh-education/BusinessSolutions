"use client";

import React, { useState, useEffect } from "react";
import Hero from "@/components/hero"
import Features from "@/components/features"
import ContactForm from "@/components/contact-form"
import Testimonials from "@/components/Testimonial";
import WelcomeLoading from "@/components/welcomeloding";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <WelcomeLoading />}
      <div style={{ display: isLoading ? 'none' : 'block' }}>
        <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba{255,255,255,0))]"></div>
          <div className="spotlight"></div>
          <div className="relative">
            <div className="container mx-auto px-4 py-16 space-y-24">
              <Hero />
              <Features />
              <Testimonials />
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

