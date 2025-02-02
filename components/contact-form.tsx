"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setShowToast(true);

    setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-12"
    >
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-foreground">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 border rounded-md bg-background border-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 border rounded-md bg-background border-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <textarea
            placeholder="Your Message"
            required
            className="w-full px-4 py-2 border rounded-md bg-background border-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            rows={5}
          />
          <button
            type="submit"
            className="w-full px-4 py-2 font-medium text-white bg-primary rounded-md hover:bg-primary/90 disabled:opacity-50"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      {showToast && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm rounded-lg px-4 py-2 shadow-lg">
          <div className="font-medium">Message sent!</div>
          <div className="text-gray-400">We&apos;ll get back to you as soon as possible.</div>
        </div>
      )}
    </motion.section>
  );
}
