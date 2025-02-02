"use client";

import React from "react";
import { PlayCircle, Monitor, Layers, BarChart } from "lucide-react";

const TutorialPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Grid Background with Gradient */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-blue-500/20 animate-gradient-xy"></div>

      {/* Spotlight Effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent animate-pulse"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-purple-500/30 rounded-full blur-[10rem] animate-spotlight"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-24 px-4 bg-background/50 border-b border-white/10">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0">
            {/* Left Side Content */}
            <div className="text-center lg:text-left space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                Tutorials That Empower Your Learning
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground">
                Discover in-depth tutorials that make complex topics simple, intuitive, and actionable.
              </p>
              <div className="mt-8">
                <a
                  href="#tutorials"
                  className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:opacity-90 transition-all duration-300"
                >
                  Explore Tutorials
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Tutorials Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto space-y-12">
            <h2 className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Featured Tutorials
            </h2>
            <p className="text-xl text-muted-foreground text-center">
              A curated collection of tutorials to help you master new skills.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <PlayCircle size={32} />,
                  title: "Video Tutorials",
                  description: "Watch step-by-step guides on various topics.",
                },
                {
                  icon: <Monitor size={32} />,
                  title: "Web Development",
                  description: "Master the latest front-end and back-end frameworks.",
                },
                {
                  icon: <Layers size={32} />,
                  title: "UI/UX Design",
                  description: "Learn to create stunning and user-friendly interfaces.",
                },
                {
                  icon: <BarChart size={32} />,
                  title: "Data Analysis",
                  description: "Explore tools and techniques for data-driven decisions.",
                },
              ].map((tutorial, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-xl hover:scale-[1.02] transition-all duration-300 border border-white/10"
                >
                  <div className="flex items-center justify-center mb-4 text-purple-500">{tutorial.icon}</div>
                  <h3 className="text-2xl font-semibold text-center">{tutorial.title}</h3>
                  <p className="text-sm text-muted-foreground text-center">{tutorial.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Step-by-Step Learning */}
        <section className="py-20 bg-background/50 px-4 border-t border-white/10">
          <div className="max-w-7xl mx-auto space-y-12">
            <h2 className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Step-by-Step Learning
            </h2>
            <p className="text-xl text-muted-foreground text-center">
              Follow a structured path for efficient learning.
            </p>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
              {[
                { step: "1", title: "Beginner", description: "Start with the basics." },
                { step: "2", title: "Intermediate", description: "Build upon your knowledge." },
                { step: "3", title: "Advanced", description: "Dive into complex concepts." },
                { step: "4", title: "Projects", description: "Apply your skills to real-world tasks." },
                { step: "5", title: "Mastery", description: "Achieve expertise in your field." },
              ].map((level, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-xl hover:scale-[1.02] transition-all duration-300 border border-white/10"
                >
                  <div className="text-3xl font-bold text-purple-500 text-center">{level.step}</div>
                  <h3 className="text-xl font-semibold text-center">{level.title}</h3>
                  <p className="text-sm text-muted-foreground text-center">{level.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 bg-background/50 border-t border-white/10">
          <div className="max-w-7xl mx-auto space-y-12">
            <h2 className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              What Our Learners Say
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  quote: "These tutorials made learning effortless and fun!",
                  author: "Alex Turner, Web Developer",
                },
                {
                  quote: "The structured approach helped me grasp complex concepts.",
                  author: "Sophia Lee, Data Analyst",
                },
                {
                  quote: "I achieved my career goals thanks to these tutorials.",
                  author: "John Carter, UI/UX Designer",
                },
              ].map((testimonial, idx) => (
                 <div
                  key={idx}
                  className="p-6 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-xl border border-white/10"
                >
                  <p className="italic text-muted-foreground">&quot;{testimonial.quote}&quot;</p>
                  <p className="mt-4 text-right text-purple-500 font-semibold">- {testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TutorialPage;
