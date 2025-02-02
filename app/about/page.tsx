"use client";

import React from "react";
import Image from "next/image";
import { Calendar, User, MapPin, BarChart, Award, Globe } from "lucide-react";
import heroimage from './about.png';

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

          {/* Content Wrapper */}
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between z-10 space-y-12 lg:space-y-0">

            {/* Left Side Content */}
            <div className="text-center lg:text-left space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                Proda: Empowering the Digital Future with Scalable and Intelligent Innovation
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground">
                At Proda, we transform challenges into opportunities with AI-driven solutions and hyper-scalable platforms designed for tomorrow.
              </p>
              <div className="mt-8">
                <a
                  href="#vision"
                  className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:opacity-90 transition-all duration-300"
                >
                  Discover Our Vision
                </a>
              </div>
            </div>

            {/* Right Side Image or Visual Element */}
            <div className="lg:w-1/2 w-full">
              <div className="relative w-full h-full">
                <Image
                  src={heroimage}
                  alt="Community Illustration"
                  className="max-w-full h-auto"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </section>
        


        {/* Vision and Mission */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto space-y-12">
            <h2 className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Vision and Mission
            </h2>
            <p className="text-xl text-muted-foreground text-center">
              At Proda, we strive to build a smarter, more connected world with technology that adapts to your needs.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Vision Cards */}
              {[
                {
                  icon: <Globe size={32} />,
                  title: "Global Transformation",
                  description: "Leading global digital innovation with smart, adaptive platforms."
                },
                {
                  icon: <User size={32} />,
                  title: "Customer-Centric",
                  description: "Focusing on seamless, secure, and personalized digital ecosystems."
                },
                {
                  icon: <Calendar size={32} />,
                  title: "Sustainable Practices",
                  description: "Committed to eco-friendly technologies and ethical operations."
                },
                {
                  icon: <BarChart size={32} />,
                  title: "Future Innovation",
                  description: "Integrating quantum computing, blockchain, and advanced AI."
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-xl hover:scale-[1.02] transition-all duration-300 border border-white/10"
                >
                  <div className="flex items-center justify-center mb-4 text-purple-500">{item.icon}</div>
                  <h3 className="text-2xl font-semibold text-center">{item.title}</h3>
                  <p className="text-sm text-muted-foreground text-center">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-background/50 px-4 border-t border-white/10">
          <div className="max-w-7xl mx-auto space-y-12">
            <h2 className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground text-center">
              These principles drive every decision we make and every product we build.
            </p>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
              {[
                { title: "Innovation", icon: <Award size={32} />, description: "Pioneering new technologies." },
                { title: "Sustainability", icon: <Globe size={32} />, description: "Minimizing our footprint." },
                { title: "Collaboration", icon: <User size={32} />, description: "Working better together." },
                { title: "Security", icon: <Calendar size={32} />, description: "Ensuring safe platforms." },
                { title: "Customer Focus", icon: <MapPin size={32} />, description: "Empowering end-users." }
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

        {/* Achievements Section */}
        <section className="py-20 px-4 bg-background/50 border-t border-white/10">
          <div className="max-w-7xl mx-auto space-y-12">
            <h2 className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Our Achievements
            </h2>
            <p className="text-xl text-muted-foreground text-center">
              Milestones that define our journey toward innovation and excellence.
            </p>
            <div className="relative overflow-hidden">
              <div className="space-y-8">
                {[
                  {
                    year: "2015",
                    title: "Proda Founded",
                    description: "Launched with a vision to redefine digital ecosystems."
                  },
                  {
                    year: "2018",
                    title: "Global SaaS Launch",
                    description: "Debuted our flagship SaaS platform for scalable businesses."
                  },
                  {
                    year: "2020",
                    title: "AI Breakthrough",
                    description: "Integrated machine learning for real-time predictive analytics."
                  },
                  {
                    year: "2023",
                    title: "Carbon Neutral Data Centers",
                    description: "Achieved sustainability goals with 100% renewable energy."
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-6 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-xl border border-white/10"
                  >
                    <div className="text-3xl font-bold text-purple-500">{item.year}</div>
                    <div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto space-y-12">
            <h2 className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Cutting-Edge Technology
            </h2>
            <p className="text-xl text-muted-foreground text-center">
              At Proda, we harness the power of innovation to deliver unparalleled solutions.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <BarChart size={32} />,
                  title: "AI & Machine Learning",
                  description: "Empowering decisions with advanced predictive analytics."
                },
                {
                  icon: <MapPin size={32} />,
                  title: "Edge Computing",
                  description: "Real-time data processing for better performance."
                },
                {
                  icon: <Award size={32} />,
                  title: "Cloud-Native Architecture",
                  description: "Scalable, secure, and adaptive platforms."
                },
                {
                  icon: <User size={32} />,
                  title: "Quantum Computing",
                  description: "Driving the next era of computational capabilities."
                },
              ].map((tech, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-xl hover:scale-[1.02] transition-all duration-300 border border-white/10"
                >
                  <div className="flex items-center justify-center mb-4 text-purple-500">{tech.icon}</div>
                  <h3 className="text-2xl font-semibold text-center">{tech.title}</h3>
                  <p className="text-sm text-muted-foreground text-center">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sustainability Section */}
        <section className="py-20 px-4 bg-background/50 border-t border-white/10">
          <div className="max-w-7xl mx-auto space-y-12">
            <h2 className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Sustainability Commitment
            </h2>
            <p className="text-xl text-muted-foreground text-center">
              Proda is dedicated to building a greener and cleaner digital future.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Globe size={32} />,
                  title: "Carbon-Neutral Operations",
                  description: "100% powered by renewable energy since 2023."
                },
                {
                  icon: <Award size={32} />,
                  title: "Energy Efficiency",
                  description: "Reduced data center energy consumption by 70%."
                },
                {
                  icon: <User size={32} />,
                  title: "Eco-Friendly Initiatives",
                  description: "Recycling and digital waste management programs."
                },
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

        {/* Global Reach Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto space-y-12">
            <h2 className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Global Reach
            </h2>
            <p className="text-xl text-muted-foreground text-center">
              Proda operates globally, connecting businesses across continents.
            </p>
            {/* World Map */}
            <div className="relative h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d58965416.507178485!2d-15.165643942742333!3d4.596883927261746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1732522877778!5m2!1sen!2sin"
                width="100%"
                height="100%"
                className="rounded-xl"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-center text-sm text-muted-foreground">
              Explore our operations in over 30 countries, with cutting-edge data centers on every continent.
            </p>
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
                  quote: "Proda revolutionized our operations with its AI-driven solutions.",
                  author: "John Doe, CEO of TechCo"
                },
                {
                  quote: "Exceptional uptime and outstanding support. Proda delivers!",
                  author: "Jane Smith, CTO of InnovateCorp"
                },
                {
                  quote: "The hyper-scalability of Proda's platforms transformed our growth potential.",
                  author: "Emily Johnson, Head of IT, GlobalSolutions"
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
