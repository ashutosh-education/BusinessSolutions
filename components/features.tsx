"use client";

import { motion } from "framer-motion";
import { Users, LinkIcon, MessageSquare, Code2, Briefcase, Lightbulb, ClipboardCheck, BookOpen, Globe, Settings } from "lucide-react";

const features = [
  {
    title: "Comprehensive Internship Programs",
    description: "Hands-on training in IT, Sales, Machine Learning, HR, Soft Skills, and more.",
    icon: Briefcase,
  },
  {
    title: "Consulting Services",
    description: "Expert guidance for businesses in strategy, HR, and technology.",
    icon: Lightbulb,
  },
  {
    title: "Soft Skills & Leadership Training",
    description: "Improve communication, negotiation, and leadership skills.",
    icon: ClipboardCheck,
  },
  {
    title: "Tech & AI Solutions",
    description: "Cutting-edge Machine Learning and AI solutions for businesses.",
    icon: Code2,
  },
  {
    title: "Resume Building & Career Guidance",
    description: "Get assistance in crafting impactful resumes and career planning.",
    icon: BookOpen,
  },
  {
    title: "Project-Based Learning",
    description: "Engage in real-world projects to gain hands-on experience.",
    icon: Users,
  },
  {
    title: "Business Development Support",
    description: "Help in sales strategies, marketing, and professional networking.",
    icon: LinkIcon,
  },
  {
    title: "Certification Programs",
    description: "Recognized certifications to boost your credibility and career prospects.",
    icon: MessageSquare,
  },
  {
    title: "Mentorship & Networking",
    description: "Connect with industry experts and expand your professional circle.",
    icon: Globe,
  },
  {
    title: "Customizable Training Modules",
    description: "Tailored training programs for businesses and individuals.",
    icon: Settings,
  },
  {
    title: "Entrepreneurship Guidance",
    description: "Support for startups with business planning, funding strategies, and market analysis.",
    icon: Briefcase,
  },
  {
    title: "Corporate Training Solutions",
    description: "Customized training programs for businesses to enhance employee skills and productivity.",
    icon: ClipboardCheck,
  },
  
];

export default function Features() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <motion.div
        key={feature.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        >
        <div className="rounded-xl border bg-card/50 backdrop-blur-lg p-6 shadow-md flex flex-col items-center text-center">
          <feature.icon className="h-10 w-10 text-primary mb-3" />
          <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
          <p className="text-sm text-muted-foreground mt-2">{feature.description}</p>
        </div>
        </motion.div>
      ))}
      </div>
    </section>
  );
}