"use client";

import { motion } from "framer-motion";
import { Users, LinkIcon, MessageSquare, Code2, Briefcase, Lightbulb, ClipboardCheck, BookOpen, Globe, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Comprehensive Internship Programs",
    description: "Hands-on training in IT, Sales, HR, Soft Skills, and more.",
    link: "/features/internship",
    icon: Briefcase,
    image: "https://img.freepik.com/free-photo/human-resource-hiring-recruiter-select-career-concept_53876-21141.jpg",
  },
  {
    title: "Consulting Services",
    description: "Expert guidance for businesses in strategy, HR, and technology.",
    link: "/features/consulting",
    icon: Lightbulb,
    image: "https://img.freepik.com/free-photo/business-people-shaking-hands-together_53876-30568.jpg",
  },
  {
    title: "Soft Skills & Leadership Training",
    description: "Improve communication, negotiation, and leadership skills.",
    link: "/features/soft-skills",
    icon: ClipboardCheck,
    image: "https://img.freepik.com/free-photo/medium-shot-people-working-together_23-2150170465.jpg",
  },
  {
    title: "Resume Building & Career Guidance",
    description: "Get assistance in crafting impactful resumes and career planning.",
    link: "/features/resume-building",
    icon: BookOpen,
    image: "/images/resume-building.jpg",
  },
  {
    title: "Project-Based Learning",
    description: "Engage in real-world projects to gain hands-on experience.",
    link: "/features/project-based-learning",
    icon: Users,
    image: "/images/project-based-learning.jpg",
  },
  {
    title: "Business Development Support",
    description: "Help in sales strategies, marketing, and professional networking.",
    link: "/features/business-development",
    icon: LinkIcon,
    image: "/images/business-development.jpg",
  },
  {
    title: "Certification Programs",
    description: "Recognized certifications to boost your credibility and career prospects.",
    link: "/features/certification",
    icon: MessageSquare,
    image: "/images/certification.jpg",
  },
  {
    title: "Mentorship & Networking",
    description: "Connect with industry experts and expand your professional circle.",
    link: "/features/mentorship",
    icon: Globe,
    image: "/images/mentorship.jpg",
  },
  {
    title: "Customizable Training Modules",
    description: "Tailored training programs for businesses and individuals.",
    link: "/features/customizable-training",
    icon: Settings,
    image: "/images/customizable-training.jpg",
  },
  {
    title: "Entrepreneurship Guidance",
    description: "Support for startups with business planning, funding strategies, and market analysis.",
    link: "/features/entrepreneurship",
    icon: Briefcase,
    image: "/images/entrepreneurship.jpg",
  },
  {
    title: "Corporate Training Solutions",
    description: "Customized training programs for businesses to enhance employee skills and productivity.",
    link: "/features/corporate-training",
    icon: ClipboardCheck,
    image: "/images/corporate-training.jpg",
  },
  {
    title: "Realtime Project Monitoring",
    description: "Track your progress and get feedback on your projects in real-time.",
    link: "/features/realtime-project-monitoring",
    icon: Code2,
    image: "/images/realtime-project-monitoring.jpg",
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
            <Link href={feature.link || "/features"}>
              <div className="rounded-xl border bg-card/50 backdrop-blur-lg p-6 shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <feature.icon className="h-10 w-10 text-primary mb-3" />
                <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{feature.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}