"use client";

import React, { useState } from "react";
import { MapPin } from "lucide-react";

interface Job {
  position: string;
  location: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

const CareerPage = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (job: Job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  const jobs = [
    {
      position: "Software Engineer",
      location: "Remote",
      description: "Join our engineering team and help us build cutting-edge software solutions.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "2+ years of experience in software development",
        "Strong problem-solving skills",
      ],
      responsibilities: [
        "Develop and maintain scalable software applications.",
        "Collaborate with cross-functional teams to define and design new features.",
        "Write clean, maintainable, and efficient code.",
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
      responsibilities: [
        "Define product vision, strategy, and roadmap.",
        "Work closely with engineering, design, and marketing teams.",
        "Conduct market research and gather customer feedback.",
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
      responsibilities: [
        "Create wireframes, prototypes, and high-fidelity designs.",
        "Collaborate with developers to ensure design feasibility.",
        "Conduct user research and usability testing.",
      ],
    },
  ];

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
            <img
              src="https://html-stuffs.vercel.app/images/10599122-removebg-preview.png"
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
            {jobs.map((job, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-white/10 hover:scale-[1.02] transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold">{job.position}</h3>
                <p className="text-sm text-muted-foreground mt-2">{job.description}</p>
                <p className="text-sm text-muted-foreground mt-2 flex items-center space-x-2">
                  <MapPin size={16} /> <span>{job.location}</span>
                </p>
                <div className="mt-6 flex justify-center space-x-4">
                  <button
                    onClick={() => openModal(job)}
                    className="px-6 py-3 text-lg font-semibold text-purple-500 bg-transparent border border-purple-500 rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
                  >
                    Learn More
                  </button>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSf..."
                    target="_blank"
                    rel="noopener noreferrer"
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

      {/* Job Details Modal */}
      {isModalOpen && selectedJob && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-semibold mb-4">{selectedJob.position}</h3>
            <p className="text-sm text-muted-foreground flex items-center gap-2 mb-4">
              <MapPin size={16} /> <span>{selectedJob.location}</span>
            </p>
            <p className="text-sm text-muted-foreground mb-6">{selectedJob.description}</p>
            <div className="mt-6">
              <h4 className="text-xl font-semibold">Requirements</h4>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-sm text-muted-foreground">
                {selectedJob.requirements.map((req: string, i: number) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <h4 className="text-xl font-semibold">Requirements</h4>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-sm text-muted-foreground">
                {selectedJob.responsibilities.map((resp: string, i: number) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <h4 className="text-xl font-semibold">Responsibilities</h4>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-sm text-muted-foreground">
                {selectedJob.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>
            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={closeModal}
                className="px-6 py-3 text-lg font-semibold text-purple-500 bg-transparent border border-purple-500 rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                Close
              </button>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf..."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:opacity-90 transition-all duration-300"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      )}

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
              href="https://docs.google.com/forms/d/e/1FAIpQLSf..."
              target="_blank"
              rel="noopener noreferrer"
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