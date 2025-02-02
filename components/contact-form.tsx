"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null); // Tracks success or failure

  // Create a ref to the form element
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "f96e4598-d9c3-496f-b638-7aab30407525");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      setIsSubmitting(false);
      setIsSuccess(true);
      setShowToast(true);
      // Reset the form using the ref
      formRef.current?.reset();
      setTimeout(() => setShowToast(false), 2000); // 2 seconds timeout for the toast
    } else {
      setIsSubmitting(false);
      setIsSuccess(false);
      setShowToast(true);
      // Reset the form using the ref
      formRef.current?.reset();
      setTimeout(() => setShowToast(false), 2000); // 2 seconds timeout for the toast
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-12"
    >
      <div className="max-w-md mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-foreground">Contact Us</h2>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 border rounded-md bg-background border-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 border rounded-md bg-background border-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <textarea
            name="message"
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

      {/* Centered Toast for success/failure */}
      {showToast && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className={`fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50`}
        >
          <motion.div
            className={`px-6 py-4 rounded-lg shadow-lg text-white text-sm ${
              isSuccess ? "bg-green-500" : "bg-red-500"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="font-medium">
              {isSuccess ? "Message Sent!" : "Submission Failed!"}
            </div>
            <div className="text-gray-200">
              {isSuccess
                ? "We'll get back to you as soon as possible."
                : "There was an error. Please try again later."}
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
}
