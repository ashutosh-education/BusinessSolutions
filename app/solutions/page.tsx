'use client';

import React, { useState } from "react";
import { 
  Users, Award, MessageSquare, Star, Code, Briefcase, 
  BookOpen, Shield, GraduationCap, TrendingUp, 
  Lightbulb, Building, Handshake, Cloud, BarChart, Trophy,
  Check, Heart, Target, Zap
} from "lucide-react";

type SolutionItem = {
  name: string;
  icon: JSX.Element;
  description: string;
  features?: string[];
};

type SectionData = {
  title: string;
  description: string;
  items: SolutionItem[];
};

type SolutionSections = {
  [key in 'students' | 'professionals' | 'startups' | 'businesses']: SectionData;
};

const SolutionsPage = () => {
  const [activeSection, setActiveSection] = useState<keyof SolutionSections>('students');

  const solutionSections: SolutionSections = {
    students: {
      title: "For Students & Recent Graduates",
      description: "Launch your career with hands-on experience and expert mentorship.",
      items: [
        { name: "IT Internships", icon: <Code />, description: "Full-stack development, cloud computing, and data science tracks with 94% placement rate.", features: ["3-6 month programs", "Real project experience", "Industry mentors", "Certification"] },
        { name: "Business Development", icon: <Briefcase />, description: "Learn sales strategies and client relationship management through real projects.", features: ["Sales methodology", "Client management", "Revenue strategies", "Pipeline building"] },
        { name: "HR Training", icon: <Users />, description: "Master recruitment processes and organizational development fundamentals.", features: ["Talent acquisition", "Employee relations", "HR analytics", "Compliance"] },
        { name: "Career Guidance", icon: <GraduationCap />, description: "Resume building, LinkedIn optimization, and interview preparation.", features: ["1-on-1 mentoring", "Mock interviews", "Portfolio review", "Job search strategy"] }
      ]
    },
    professionals: {
      title: "For Professionals",
      description: "Advance your career with upskilling certifications and leadership training.",
      items: [
        { name: "IT Certifications", icon: <Code />, description: "Globally recognized certifications in cloud computing, data science, and cybersecurity." },
        { name: "Leadership Development", icon: <Star />, description: "Advanced communication, team management, and strategic thinking skills." },
        { name: "Career Transition", icon: <TrendingUp />, description: "Structured guidance for successful career pivots and industry transitions." }
      ]
    },
    startups: {
      title: "For Startups & Entrepreneurs",
      description: "Transform your ideas into scalable businesses with expert guidance.",
      items: [
        { name: "Business Planning", icon: <Lightbulb />, description: "Comprehensive business strategy development with market validation." },
        { name: "Funding Guidance", icon: <Briefcase />, description: "Investment pitch preparation and funding strategy optimization." },
        { name: "Market Research", icon: <Shield />, description: "Deep market analysis and competitive positioning strategies." }
      ]
    },
    businesses: {
      title: "For Established Businesses",
      description: "Scale and innovate in competitive markets with expert consulting.",
      items: [
        { name: "Business Strategy", icon: <Building />, description: "Transform operations and drive sustainable growth through expert consulting." },
        { name: "HR Solutions", icon: <Handshake />, description: "Build and retain high-performing teams with proven HR strategies." },
        { name: "Digital Transformation", icon: <Cloud />, description: "Modernize IT infrastructure and implement digital innovation." }
      ]
    }
  };

  const statistics = [
    { value: "15K+", label: "Success Stories" },
    { value: "94%", label: "Placement Rate" },
    { value: "200+", label: "Corporate Partners" },
    { value: "50+", label: "Countries" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      {/* Hero Section - Updated for better mobile responsiveness */}
      <section className="relative min-h-[90vh] py-20 flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://html-stuffs.vercel.app/images/banner.jpg" 
            alt="Hero Background"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-purple-900/60 mix-blend-multiply" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Transform Your Future Today
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-8">
            Join over 15,000 success stories who transformed their careers through our expert-led programs
            and industry-recognized certifications.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white font-semibold hover:opacity-90 transition-all text-sm sm:text-base">
              Start Your Journey
            </button>
            <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all text-sm sm:text-base">
              Browse Programs
            </button>
          </div>
          
          {/* Statistics - Updated grid for mobile */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 mt-8 sm:mt-16">
            {statistics.map((stat, idx) => (
              <div key={idx} className="p-2 sm:p-4 rounded-lg bg-white/10 backdrop-blur-sm">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm sm:text-base text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Navigation - Updated for mobile */}
      <nav className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 py-2 sm:py-4">
          <div className="flex gap-2 sm:gap-4 overflow-x-auto no-scrollbar">
            {Object.entries(solutionSections).map(([key, section]) => (
              <button
                key={key}
                onClick={() => setActiveSection(key as keyof SolutionSections)}
                className={`px-3 sm:px-4 py-2 text-sm sm:text-base whitespace-nowrap rounded-lg transition-all ${
                  activeSection === key
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                    : "text-muted-foreground hover:text-white"
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Solutions Content - Updated for mobile */}
      <main className="max-w-7xl mx-auto px-3 sm:px-4 py-8 sm:py-16">
        <div className="space-y-8 sm:space-y-16">
          <section>
            <div className="text-center mb-8 sm:mb-12 px-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                {solutionSections[activeSection].title}
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground mt-3 sm:mt-4 max-w-3xl mx-auto">
                {solutionSections[activeSection].description}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
              {solutionSections[activeSection].items.map((item, idx) => (
                <div key={idx} className="p-4 sm:p-6 rounded-xl bg-gradient-to-r from-purple-500/5 to-blue-500/5 border border-white/10 hover:border-purple-500/50 transition-all">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="p-2 sm:p-3 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-400">
                      {item.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold">{item.name}</h3>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">{item.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {item.features?.map((feature, fidx) => (
                      <li key={fidx} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                        <Check className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-4 sm:mt-6 w-full py-2 px-4 rounded-lg border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-all text-sm sm:text-base">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us Section - Updated for mobile */}
          <section className="pt-8 sm:pt-16 border-t border-white/10">
            <div className="text-center mb-8 sm:mb-12 px-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Why Choose BusinessSolution?
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground mt-3 sm:mt-4 max-w-2xl mx-auto">
                Join thousands of successful professionals who transformed their careers with our comprehensive solutions
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
              {[
                { icon: <Trophy />, title: "Industry Recognition", description: "Globally accepted certifications and accreditations" },
                { icon: <Target />, title: "Personalized Growth", description: "Customized learning paths for your goals" },
                { icon: <Zap />, title: "Practical Experience", description: "Real-world projects and hands-on training" },
                { icon: <Heart />, title: "Lifetime Support", description: "Ongoing career guidance and resources" }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-6 rounded-xl bg-gradient-to-r from-purple-500/5 to-blue-500/5 border border-white/10 text-center hover:border-purple-500/50 transition-all"
                >
                  <div className="flex justify-center text-purple-400 mb-3 sm:mb-4">{item.icon}</div>
                  <h3 className="text-sm sm:text-base font-semibold mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default SolutionsPage;