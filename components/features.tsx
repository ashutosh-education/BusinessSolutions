"use client";

import { motion } from "framer-motion";
import { Users, LinkIcon, MessageSquare, Code2, Briefcase, Lightbulb, ClipboardCheck, BookOpen, Globe, Settings } from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Comprehensive Internship Programs",
    description: "Hands-on training in IT, Sales, HR, Soft Skills, and more.",
    link: "/features",
    icon: Briefcase,
    image: "https://img.freepik.com/free-photo/human-resource-hiring-recruiter-select-career-concept_53876-21141.jpg",
  },
  {
    title: "Consulting Services",
    description: "Expert guidance for businesses in strategy, HR, and technology.",
    link: "/features",
    icon: Lightbulb,
    image: "https://img.freepik.com/free-vector/strategic-consulting-concept-illustration_114360-9336.jpg",
  },
  {
    title: "Soft Skills & Leadership Training",
    description: "Improve communication, negotiation, and leadership skills.",
    link: "/features",
    icon: ClipboardCheck,
    image: "https://img.freepik.com/free-photo/executive-manager-standing-beside-monitor-showing-marketing-graphs-explaining-company-strategy-business-meeting-startup-office-diverse-businesspeople-working-financial-presentation_482257-27813.jpg",
  },
  {
    title: "Resume Building & Career Guidance",
    description: "Get assistance in crafting impactful resumes and career planning.",
    link: "/features",
    icon: BookOpen,
    image: "https://img.freepik.com/free-vector/choice-worker-concept_23-2148631103.jpg",
  },
  {
    title: "Project-Based Learning",
    description: "Engage in real-world projects to gain hands-on experience.",
    link: "/features",
    icon: Users,
    image: "https://img.freepik.com/free-vector/company-providing-management-training-office-space-business-incubator-business-training-programs-shared-administrative-service-concept-bright-vibrant-violet-isolated-illustration_335657-867.jpg",
  },
  {
    title: "Business Development Support",
    description: "Help in sales strategies, marketing, and professional networking.",
    link: "/features",
    icon: LinkIcon,
    image: "https://img.freepik.com/free-photo/two-business-men-celebrating-deal_158595-5256.jpg",
  },
  {
    title: "Certification Programs",
    description: "Recognized certifications to boost your credibility and career prospects.",
    link: "/features",
    icon: MessageSquare,
    image: "https://img.freepik.com/free-vector/online-certification-with-books-computer_23-2148573034.jpg",
  },
  {
    title: "Mentorship & Networking",
    description: "Connect with industry experts and expand your professional circle.",
    link: "/features",
    icon: Globe,
    image: "https://img.freepik.com/free-vector/illustration-business-people_53876-6306.jpg",
  },
  {
    title: "Customizable Training Modules",
    description: "Tailored training programs for businesses and individuals.",
    link: "/features",
    icon: Settings,
    image: "https://img.freepik.com/free-photo/daily-life-business-people-office_53876-47111.jpg",
  },
  {
    title: "Entrepreneurship Guidance",
    description: "Support for startups with business planning, funding strategies, and market analysis.",
    link: "/features",
    icon: Briefcase,
    image: "https://img.freepik.com/free-photo/male-graphic-designer-holding-spiral-notepad-with-text_1170-1104.jpg",
  },
  {
    title: "Corporate Training Solutions",
    description: "Customized training programs for businesses to enhance employee skills and productivity.",
    link: "/features",
    icon: ClipboardCheck,
    image: "https://img.freepik.com/free-vector/flat-design-business-people-working-together_23-2149163556.jpg",
  },
  {
    title: "Realtime Project Monitoring",
    description: "Track your progress and get feedback on your projects in real-time.",
    link: "/features",
    icon: Code2,
    image: "https://img.freepik.com/free-photo/two-colleagues-working-late-office-blue-light-night-view_482257-32812.jpg",
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