import React from "react";
import Hero from "@/components/hero"
import Features from "@/components/features"
import Analytics from "@/components/analytics"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <div>
      <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba{255,255,255,0))]"></div>
        <div className="spotlight"></div>
        <div className="relative">
          <div className="container mx-auto px-4 py-16 space-y-24">
            <Hero />
            <Features />
            <Analytics />
            <ContactForm />
          </div>
        </div>
      </div>
    </div>

  )
}

