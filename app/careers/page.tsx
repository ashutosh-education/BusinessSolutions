"use client";

import React from "react";
import { MapPin } from "lucide-react";
import Image from "next/image";
import heroimage from './about.png';

const CareerPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-background/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              Join Our Team – Build the Future with Us!
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground">
              Explore exciting opportunities and be part of a dynamic, innovative team.
            </p>
            <div className="mt-8 flex space-x-4 justify-center lg:justify-start">
              <a
                href="#open-positions"
                className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:opacity-90 transition-all duration-300"
              >
                View Open Positions
              </a>
              <a
                href="#signup"
                className="px-6 py-3 text-lg font-semibold text-purple-500 bg-transparent border border-purple-500 rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                Apply Now
              </a>
            </div>
          </div>
          {/* Hero Image */}
          <div>
            <Image
              src={heroimage}
              alt="Community Illustration"
              className="max-w-full h-auto"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 px-4 bg-background/50 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
            Why Work With Us?
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            We are a team of passionate individuals committed to creating innovative solutions and growing together. Join us to unlock new opportunities, grow your career, and make a real impact.
          </p>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation at Heart",
                description: "We're always pushing boundaries and experimenting with new ideas to make an impact.",
              },
              {
                title: "Work-Life Balance",
                description: "Enjoy a flexible work schedule with plenty of room for personal growth.",
              },
              {
                title: "Inclusive Culture",
                description: "We value diversity and inclusion in all aspects of our business.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-white/10 hover:scale-[1.02] transition-all duration-300"
              >
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="py-16 px-4 bg-background/50 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
            Open Positions
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            We&lsquo;re always on the lookout for talented individuals. Here are our current openings. Apply today!
          </p>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                position: "Software Engineer",
                location: "Remote",
                description: "Join our engineering team and help us build cutting-edge software solutions.",
                requirements: [
                  "Bachelor's degree in Computer Science or related field",
                  "2+ years of experience in software development",
                  "Strong problem-solving skills",
                ],
              },
              {
                position: "Product Manager",
                location: "San Francisco, CA",
                description: "Lead product development and strategy, ensuring our product meets customer needs.",
                requirements: [
                  "Experience managing product lifecycles",
                  "Strong leadership and communication skills",
                  "Ability to work cross-functionally",
                ],
              },
              {
                position: "UX/UI Designer",
                location: "New York, NY",
                description: "Design intuitive and visually appealing user experiences for our digital products.",
                requirements: [
                  "Proven experience in UX/UI design",
                  "Familiarity with design tools like Figma, Sketch, or Adobe XD",
                  "Strong portfolio showcasing design work",
                ],
              },
            ].map((job, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-white/10 hover:scale-[1.02] transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold">{job.position}</h3>
                <p className="text-sm text-muted-foreground mt-2">{job.description}</p>
                <p className="text-sm text-muted-foreground mt-2 flex items-center space-x-2">
                  <MapPin size={16} /> <span>{job.location}</span>
                </p>
                <ul className="mt-4 list-disc text-left space-y-2 text-sm text-muted-foreground">
                  {job.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
                <div className="mt-6 flex justify-center">
                  <a
                    href="#apply"
                    className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:opacity-90 transition-all duration-300"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-background/50 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
            Benefits and Perks
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            We offer a comprehensive benefits package that supports the well-being of our employees.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Health & Wellness",
                description: "Comprehensive health, dental, and vision insurance, along with wellness programs.",
              },
              {
                title: "Retirement Plans",
                description: "Generous 401(k) matching and financial planning assistance.",
              },
              {
                title: "Professional Development",
                description: "Opportunities for career growth, training, and certifications.",
              },
              {
                title: "Paid Time Off",
                description: "Flexible PTO to recharge and maintain work-life balance.",
              },
              {
                title: "Team Outings & Events",
                description: "Regular team-building events, happy hours, and company-wide celebrations.",
              },
            ].map((perk, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-white/10 hover:scale-[1.02] transition-all duration-300"
              >
                <h3 className="text-xl font-semibold">{perk.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{perk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section id="apply" className="py-16 px-4 bg-background/50 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
            Ready to Join Us?
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            We&lsquo;re excited to hear from you! Apply today and take the next step in your career journey.
          </p>
          <div className="mt-12 flex justify-center">
            <a
              href="mailto:careers@company.com"
              className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:opacity-90 transition-all duration-300"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;
