"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "@/components/hero"
import Features from "@/components/features"
import ContactForm from "@/components/contact-form"
import Testimonials from "@/components/Testimonial";
import WelcomeLoading from "@/components/welcomeloding";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Reduced loading time for better UX

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <WelcomeLoading />
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="min-h-screen bg-background text-foreground relative">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            <div className="spotlight"></div>
            <div className="relative">
              <div className="container mx-auto px-4 py-16 space-y-32">
                <Hero />
                <Features />
                <ImageShowcase />
                <Testimonials />
                <ContactForm />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const ImageShowcase = () => (
  <section className="py-16">
    <h2 className="text-3xl font-bold text-center mb-12">Our Work in Action</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          className="relative rounded-2xl overflow-hidden border border-border bg-card"
        >
          <div className="aspect-video relative">
            <img
              src={`/work-${i}.jpg`}
              alt={`Project ${i}`}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <div className="p-4">
            <h3 className="font-semibold mb-2">Project Title {i}</h3>
            <p className="text-sm text-muted-foreground">
              Brief description of the project and its impact on the client's business.
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

