// app/community/page.tsx
'use client';

import React from "react";
import { Users, Award, MessageSquare, Star } from "lucide-react";
import Image from "next/image";
import comunittyimage from './about.png';

const CommunityPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-background/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              Join the Community – Collaborate, Learn, and Grow Together!
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground">
              Engage in meaningful discussions, share expertise, and connect with like-minded individuals.
            </p>
            <div className="mt-8 flex space-x-4 justify-center lg:justify-start">
              <a
                href="#signup"
                className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:opacity-90 transition-all duration-300"
              >
                Sign Up
              </a>
              <a
                href="#login"
                className="px-6 py-3 text-lg font-semibold text-purple-500 bg-transparent border border-purple-500 rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                Login
              </a>
            </div>
          </div>
          {/* Hero Image */}
          <div>
            <Image
              src={comunittyimage}
              alt="Community Illustration"
              className="max-w-full h-auto"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Categories & Topics */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              Explore Topics and Join Discussions
            </h2>
            <p className="text-lg text-muted-foreground text-center mt-2">
              Choose a category to get started or view trending discussions below.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "General Discussions", icon: <Users size={32} /> },
                { name: "Beginner’s Corner", icon: <Award size={32} /> },
                { name: "Advanced Topics", icon: <Star size={32} /> },
                { name: "Q&A and Troubleshooting", icon: <MessageSquare size={32} /> },
                { name: "Feedback & Suggestions", icon: <Star size={32} /> },
              ].map((category, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-white/10 hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="flex items-center justify-center mb-4 text-purple-500">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-center">{category.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trending Topics */}
        <section className="py-16 bg-background/50 border-t border-white/10 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              Trending Topics
            </h2>
            <p className="text-lg text-muted-foreground text-center mt-2">
              Discover the hottest discussions in the community.
            </p>
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[...Array(4)].map((_, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-white/10 hover:scale-[1.02] transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold">
                    {`Trending Topic ${idx + 1}`}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    A brief description of the discussion topic. Click to join the conversation and share your thoughts.
                  </p>
                  <div className="mt-4 flex space-x-4">
                    <button className="text-purple-500 hover:text-blue-500">Join</button>
                    <button className="text-muted-foreground hover:text-white">Share</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* User Engagement */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              Engage, Earn, and Grow
            </h2>
            <p className="text-lg text-muted-foreground text-center mt-2">
              Participate in discussions, earn badges, and track your contributions.
            </p>
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Create Posts", description: "Share your knowledge with rich formatting tools." },
                { title: "Upvote & Like", description: "Support great content with upvotes and likes." },
                { title: "Earn Badges", description: "Get rewarded for active participation and contributions." },
                { title: "Follow Experts", description: "Stay updated by following top contributors." }
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-white/10 hover:scale-[1.02] transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-center">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground text-center mt-2">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Live Events */}
        <section className="py-16 bg-background/50 border-t border-white/10 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              Live Events & AMAs
            </h2>
            <p className="text-lg text-muted-foreground text-center mt-2">
              Join live discussions and Q&A sessions with experts.
            </p>
            <div className="mt-12 flex flex-col items-center">
              <button className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:opacity-90 transition-all duration-300">
                View Upcoming Events
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CommunityPage;
