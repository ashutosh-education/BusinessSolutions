"use client";

import React from "react";
import { Globe, Users, Briefcase, BookOpen, MessageCircle, Award, BarChart, Clock, Heart } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Grid Background with Gradient */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-blue-500/20 animate-gradient-xy"></div>

      {/* Spotlight Effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent animate-pulse"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-blue-500/30 rounded-full blur-[10rem] animate-spotlight"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-24 px-4 bg-background/50 border-b border-white/10">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between z-10 space-y-12 lg:space-y-0">
            {/* Left Side Content */}
            <div className="text-center lg:text-left space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                BusinessSolutions: Empowering Success Across Domains
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground">
                We provide expert guidance, training, and services in IT, Sales, HR, Consulting, and more. Unlock your potential with tailored solutions for growth.
              </p>
              <div className="mt-8">
                <a
                  href="#services"
                  className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:opacity-90 transition-all duration-300"
                >
                  Explore Our Services
                </a>
              </div>
            </div>

            {/* Right Side Image or Visual Element */}
            <div className="lg:w-1/2 w-full">
              <div className="relative w-full h-full">
                <img
                  src="https://html-stuffs.vercel.app/images/3d_image_of_a_business_profile_name.jpeg"
                  alt="BusinessSolutions Illustration"
                  className="max-w-full h-auto"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4">
          <div className="max-w-7xl mx-auto space-y-12">
            <h2 className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground text-center">
              Tailored solutions to help you grow and succeed in your career or business.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <BookOpen size={32} />,
                  title: "Comprehensive Internship Programs",
                  description: "Hands-on training in IT, Sales, HR, Soft Skills, and more."
                },
                {
                  icon: <Briefcase size={32} />,
                  title: "Consulting Services",
                  description: "Expert guidance for businesses in strategy, HR, and technology."
                },
                {
                  icon: <MessageCircle size={32} />,
                  title: "Soft Skills & Leadership Training",
                  description: "Improve communication, negotiation, and leadership skills."
                },
                {
                  icon: <Award size={32} />,
                  title: "Resume Building & Career Guidance",
                  description: "Craft impactful resumes and plan your career path."
                },
                {
                  icon: <BarChart size={32} />,
                  title: "Project-Based Learning",
                  description: "Engage in real-world projects for hands-on experience."
                },
                {
                  icon: <Globe size={32} />,
                  title: "Business Development Support",
                  description: "Help in sales strategies, marketing, and networking."
                },
                {
                  icon: <Clock size={32} />,
                  title: "Certification Programs",
                  description: "Boost your credibility with recognized certifications."
                },
                {
                  icon: <Users size={32} />,
                  title: "Mentorship & Networking",
                  description: "Connect with industry experts and expand your professional circle."
                },
                {
                  icon: <Award size={32} />,
                  title: "Entrepreneurship Guidance",
                  description: "Support for startups with business planning, market analysis, funding strategies, and growth tactics."
                },
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-xl hover:scale-[1.02] transition-all duration-300 border border-white/10"
                >
                  <div className="flex items-center justify-center mb-4 text-purple-500">{service.icon}</div>
                  <h3 className="text-2xl font-semibold text-center">{service.title}</h3>
                  <p className="text-sm text-muted-foreground text-center">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20 bg-background/50 px-4 border-t border-white/10">
          <div className="max-w-7xl mx-auto space-y-12">
            <h2 className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground text-center">
              Guiding principles that drive our mission and vision.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Heart size={32} />, title: "Integrity", description: "We act with honesty and transparency." },
                { icon: <Globe size={32} />, title: "Innovation", description: "We embrace creativity and cutting-edge solutions." },
                { icon: <Users size={32} />, title: "Collaboration", description: "We believe in teamwork and shared success." },
                { icon: <Award size={32} />, title: "Excellence", description: "We strive for the highest standards in everything we do." },
              ].map((value, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-xl hover:scale-[1.02] transition-all duration-300 border border-white/10"
                >
                  <div className="flex items-center justify-center mb-4 text-purple-500">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-center">{value.title}</h3>
                  <p className="text-sm text-muted-foreground text-center">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-background/50 border-t border-white/10">
          <div className="max-w-7xl mx-auto space-y-12">
            <h2 className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              What Our Clients Say
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  quote: "BusinessSolutions transformed our team with their leadership training.",
                  author: "John Doe, CEO of TechCo"
                },
                {
                  quote: "Their internship programs are top-notch and highly practical.",
                  author: "Jane Smith, HR Manager"
                },
                {
                  quote: "The career guidance I received was invaluable for my professional growth.",
                  author: "Emily Johnson, Software Engineer"
                },
              ].map((testimonial, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-xl border border-white/10"
                >
                  <p className="italic text-muted-foreground">&quot;{testimonial.quote}&ldquo;</p>
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

export default AboutPage;