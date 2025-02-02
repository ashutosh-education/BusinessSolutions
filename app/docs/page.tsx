"use client";

import React from "react";
import { Search, GithubIcon } from "lucide-react";

const DocumentationPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-background/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              Comprehensive Documentation for Developers
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground">
              Everything you need to get started, from tutorials to detailed API references.
            </p>
            <div className="mt-8 flex space-x-4 justify-center lg:justify-start">
              <a
                href="#overview"
                className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:opacity-90 transition-all duration-300"
              >
                Start Here
              </a>
              <a
                href="#search"
                className="px-6 py-3 text-lg font-semibold text-purple-500 bg-transparent border border-purple-500 rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                Search Docs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-16 px-4 bg-background/50 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
            Overview
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            Learn about the key concepts and structures that make up our system. This section is perfect for getting started.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Introduction",
                description: "Get introduced to our platform and how to begin using it.",
                link: "#introduction",
              },
              {
                title: "Quick Start Guide",
                description: "A simple guide to get up and running quickly.",
                link: "#quick-start",
              },
              {
                title: "Best Practices",
                description: "Learn the best practices for working with our platform.",
                link: "#best-practices",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-white/10 hover:scale-[1.02] transition-all duration-300"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                <a
                  href={item.link}
                  className="text-sm text-purple-500 mt-4 block hover:underline"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorials Section */}
      <section id="tutorials" className="py-16 px-4 bg-background/50 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
            Tutorials
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            Step-by-step tutorials to help you navigate and utilize our platform effectively.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Creating Your First App",
                description: "A beginner-friendly guide to building your first app on our platform.",
                link: "#first-app",
              },
              {
                title: "Advanced Features",
                description: "Unlock advanced features and enhance your project with extra functionality.",
                link: "#advanced-features",
              },
              {
                title: "API Integrations",
                description: "Learn how to integrate third-party APIs into your project.",
                link: "#api-integrations",
              },
            ].map((tutorial, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-white/10 hover:scale-[1.02] transition-all duration-300"
              >
                <h3 className="text-xl font-semibold">{tutorial.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{tutorial.description}</p>
                <a
                  href={tutorial.link}
                  className="text-sm text-purple-500 mt-4 block hover:underline"
                >
                  Start Tutorial
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Reference Section */}
      <section id="api" className="py-16 px-4 bg-background/50 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
            API Reference
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            Detailed API documentation to help you integrate our platform into your applications.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Authentication",
                description: "Learn how to authenticate with our API using keys or OAuth.",
                link: "#authentication",
              },
              {
                title: "Endpoints Overview",
                description: "A complete overview of all available API endpoints.",
                link: "#endpoints",
              },
              {
                title: "Rate Limits & Pagination",
                description: "Understand rate limits and how to handle large data sets with pagination.",
                link: "#rate-limits",
              },
            ].map((apiDoc, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-white/10 hover:scale-[1.02] transition-all duration-300"
              >
                <h3 className="text-xl font-semibold">{apiDoc.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{apiDoc.description}</p>
                <a
                  href={apiDoc.link}
                  className="text-sm text-purple-500 mt-4 block hover:underline"
                >
                  View API Docs
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section id="search" className="py-16 px-4 bg-background/50 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
            Search the Docs
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            Quickly find the information you&#39;re looking for by searching our documentation.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="relative w-1/2">
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-purple-500">
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-12 px-4 bg-background/50 border-t border-white/10 text-center">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Company Name. All Rights Reserved.
          </p>
          <div className="mt-6">
            <a href="https://github.com/your-company" className="text-purple-500">
              <GithubIcon size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DocumentationPage;
