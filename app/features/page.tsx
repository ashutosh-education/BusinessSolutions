"use client";
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChevronDown } from 'lucide-react'; // For the scroll button icon

// Define proper interfaces
interface DetailedInfo {
  description: string;
  subServices: string[];
}

interface Feature {
  title: string;
  description: string;
  link: string;
  icon?: any;
  image: string;
}

interface DetailedInfoMap {
  [key: string]: DetailedInfo;
}

const features: Feature[] = [
  {
    title: "Comprehensive Internship Programs",
    description: "Hands-on training in IT, Sales, HR, Soft Skills, and more.",
    link: "https://forms.google.com/your-form-link", // Add your Google Form link here
    image: "https://img.freepik.com/free-photo/human-resource-hiring-recruiter-select-career-concept_53876-21141.jpg",
  },
  {
    title: "Consulting Services",
    description: "Expert consulting in strategy, HR, and technology solutions.",
    link: "/features",
    image: "https://img.freepik.com/free-vector/strategic-consulting-concept-illustration_114360-9336.jpg",
  },
  {
    title: "Business Development Support",
    description: "Help businesses improve their sales, marketing strategies, and professional networks to drive growth.",
    link: "https://forms.google.com/your-form-link",
    image: "https://img.freepik.com/free-photo/two-business-men-celebrating-deal_158595-5256.jpg",
  },
  {
    title: "Entrepreneurship Guidance",
    description: "Support for startups with business planning, market analysis, funding strategies, and growth tactics.",
    link: "https://forms.google.com/your-form-link",
    image: "https://img.freepik.com/free-photo/male-graphic-designer-holding-spiral-notepad-with-text_1170-1104.jpg",
  },
  {
    title: "Resume Building & Career Guidance",
    description: "Create impactful resumes and receive career coaching to navigate the job market confidently.",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdVxAA0WCLerfT37S-HhVBx9ZisxmFX7HpFZtKazEM1JHFV4Q/viewform",
    image: "https://img.freepik.com/free-vector/choice-worker-concept_23-2148631103.jpg",
  },
  {
    title: "Project-Based Learning",
    description: "Work on real-world projects to enhance your skills and apply theoretical knowledge in practical situations.",
    link: "https://forms.google.com/your-form-link",
    image: "https://img.freepik.com/free-photo/3d-cartoon-scene-depicting-variety-people-multitasking_23-2151294452.jpg",
  },
  {
    title: "Certification Programs",
    description: "Earn globally recognized certifications in various fields, increasing your professional value and credibility.",
    link: "https://forms.google.com/your-form-link",
    image: "https://img.freepik.com/free-vector/online-certification-illustration-concept_23-2148573389.jpg",
  },
  {
    title: "Mentorship & Networking",
    description: "Connect with industry experts, gain advice, and build valuable professional relationships through mentoring and networking programs.",
    link: "https://forms.google.com/your-form-link",
    image: "https://img.freepik.com/free-vector/social-media-network-with-avatars_24908-56301.jpg",
  },
  {
    title: "Soft Skills & Leadership Training",
    description: "Enhance your communication, negotiation, and leadership skills through interactive training and personalized development.",
    link: "https://forms.google.com/your-form-link",
    image: "https://img.freepik.com/free-photo/leadership-teamwork-management-support-strategy-concept_53876-13723.jpg",
  },
];

export default function FeaturesPage() {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const getDetailedInfo = (title: string): DetailedInfo | null => {
    const detailedInfoMap: DetailedInfoMap = {
      "Comprehensive Internship Programs": {
        description: "Our internship programs provide hands-on experience across multiple domains with expert mentorship.",
        subServices: [
          "IT Internships: Full-stack development, cloud computing, and data science tracks  (COMING SOON).",
          "Business Development: Sales strategies, client relationship management",
          "HR Training: Recruitment processes, organizational development",
          "Soft Skills Development: Communication, leadership, and team management"
        ]
      },
      "Consulting Services": {
        description: "Expert consulting in strategy, HR, and technology to help businesses scale and adapt in a competitive market.",
        subServices: [
          "Business Strategy Consulting: In-depth analysis with actionable plans and market research",
          "HR Consulting: Tailored support for recruitment and team building",
          "Technology Consulting: IT infrastructure and digital transformation guidance"
        ]
      },
      "Business Development Support": {
        description: "Help businesses improve their sales, marketing strategies, and professional networks to drive growth.",
        subServices: [
          "Sales Strategy Development: Learn how to create and execute a sales strategy with guidance from experienced sales professionals",
          "Marketing & Branding Strategy: Develop comprehensive marketing plans, digital marketing campaigns, and brand-building strategies",
          "Networking & Partnership Building: Connect with key players in your industry and join exclusive networking events"
        ]
      },
      "Entrepreneurship Guidance": {
        description: "Support for startups with business planning, market analysis, funding strategies, and growth tactics.",
        subServices: [
          "Business Planning & Strategy Development: Develop a comprehensive business plan with actionable steps",
          "Funding and Investment Guidance: Receive advice on securing funding and pitching to investors",
          "Market Research & Competitor Analysis: Learn strategic market positioning for business growth"
        ]
      },
      "Resume Building & Career Guidance": {
        description: "Create impactful resumes and receive career coaching to navigate the job market confidently.",
        subServices: [
          "Professional Resume Building: Work with experts to craft a standout resume",
          "Career Planning & Counselling: Receive one-on-one career guidance and interview preparation",
          "LinkedIn Profile Optimization: Enhance your LinkedIn profile to attract recruiters"
        ]
      },
      "Project-Based Learning": {
        description: "Work on real-world projects to enhance your skills and apply theoretical knowledge in practical situations.",
        subServices: [
          "IT Projects: Develop websites, mobile apps, and software solutions",
          "Business Strategy Projects: Work on strategic planning and market analysis",
          "Data Science Projects: Analyze datasets and build machine learning models"
        ]
      },
      "Certification Programs": {
        description: "Earn globally recognized certifications in various fields, increasing your professional value and credibility.",
        subServices: [
          "IT Certifications: Gain certifications in cloud computing, cybersecurity, and software development",
          "Project Management Certification: Learn key methodologies (Agile, Scrum, PMP)",
          "Digital Marketing Certification: Get certified in SEO, content marketing, and social media strategies"
        ]
      },
      "Mentorship & Networking": {
        description: "Connect with industry experts, gain advice, and build valuable professional relationships through mentoring and networking programs.",
        subServices: [
          "One-on-One Mentorship: Work directly with experienced professionals",
          "Networking Events & Workshops: Attend live networking events",
          "Industry-Specific Guidance: Receive advice specific to your industry"
        ]
      },
      "Soft Skills & Leadership Training": {
        description: "Enhance your communication, negotiation, and leadership skills through interactive training and personalized development.",
        subServices: [
          "Leadership Development Program: Learn leadership skills and decision-making",
          "Communication Skills Development: Build effective communication abilities",
          "Negotiation Skills Workshops: Master the art of negotiation with real-life role-playing"
        ]
      }
    };
    return detailedInfoMap[title] || null;
  };

  const scrollToFeatures = () => {
    document.getElementById('features-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-gray-50/50 to-gray-100/50 
                     dark:from-gray-900/50 dark:to-gray-800/50">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center 
                          backdrop-blur-lg bg-white/30 dark:bg-gray-900/30 
                          border-b border-gray-200/20 dark:border-gray-700/20
                          relative overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
          {/* Left Side: Headings, Descriptions, etc. */}
          <div className="lg:w-1/2 space-y-8 text-left">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
              Empowering Your Future
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">
              Discover our comprehensive services designed to help you grow personally and professionally.
            </p>
            <div className="flex gap-4">
              <button
                onClick={scrollToFeatures}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg 
                         text-lg font-semibold shadow-lg hover:shadow-blue-500/50 
                         transform hover:-translate-y-1 transition-all"
              >
                Explore Services
              </button>
              <a
                href="https://businesssolutions.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-blue-600 text-blue-600 dark:text-white 
                         px-8 py-3 rounded-lg text-lg font-semibold shadow-lg hover:shadow-blue-500/50 
                         transform hover:-translate-y-1 transition-all"
              >
                Visit Us
              </a>
            </div>
          </div>

          {/* Right Side: Company Image */}
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <img
              src="https://html-stuffs.vercel.app/images/heros.jpg"
              alt="Company Illustration"
              className="w-full h-auto rounded-xl shadow-2xl"
            />
          </div>
        </div>

        {/* Scroll Button */}
        <button
          onClick={scrollToFeatures}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce 
                   bg-white dark:bg-gray-800 text-blue-600 dark:text-white p-3 rounded-full 
                   shadow-lg hover:shadow-white/50 transition-all"
        >
          <ChevronDown size={24} />
        </button>
      </section>

      {/* Features Section */}
      <section id="features-section" className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent 
                       bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600">
            Our Services
          </h1>

          <div className="grid grid-cols-1 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative w-full flex flex-col lg:flex-row rounded-2xl overflow-hidden
                         backdrop-blur-md bg-white/5 dark:bg-gray-900/5
                         border border-gray-200/20 dark:border-gray-700/20
                         hover:shadow-2xl transition-all duration-300
                         hover:border-blue-500/30 dark:hover:border-blue-400/30
                         hover:bg-white/10 dark:hover:bg-gray-900/10"
              >
                <div className="lg:w-1/3 relative overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-[300px] lg:h-full object-cover transform 
                             group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent 
                               opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="lg:w-2/3 p-8 flex flex-col justify-between backdrop-blur-sm">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                      {feature.description}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    <button
                      onClick={() => setSelectedFeature(feature)}
                      className="bg-blue-600/90 hover:bg-blue-700 text-white px-8 py-3 
                               rounded-lg transition-all duration-300 text-lg font-semibold 
                               shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1"
                    >
                      Learn More
                    </button>
                    <a
                      href={feature.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600/90 hover:bg-green-700 text-white px-8 py-3 
                               rounded-lg transition-all duration-300 text-lg font-semibold 
                               shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dialog for Detailed Info */}
          <Dialog open={!!selectedFeature} onOpenChange={() => setSelectedFeature(null)}>
            {selectedFeature && (
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto 
                                      backdrop-blur-xl bg-white/95 dark:bg-gray-900/95 
                                      border border-gray-200/50 dark:border-gray-700/50
                                      shadow-2xl">
                <DialogHeader>
                  <DialogTitle className="text-3xl font-bold bg-clip-text text-transparent 
                                        bg-gradient-to-r from-blue-600 to-blue-800 
                                        dark:from-blue-400 dark:to-blue-600 mb-4">
                    {selectedFeature.title}
                  </DialogTitle>
                </DialogHeader>
                <div className="grid md:grid-cols-2 gap-8 p-4">
                  <div className="space-y-6">
                    <DialogDescription className="text-lg text-gray-700 dark:text-gray-300">
                      {getDetailedInfo(selectedFeature.title)?.description || selectedFeature.description}
                    </DialogDescription>
                    {getDetailedInfo(selectedFeature.title)?.subServices && (
                      <div className="backdrop-blur-xl bg-white/50 dark:bg-gray-800/50 
                                    p-6 rounded-lg border border-gray-200/20 dark:border-gray-700/20">
                        <h4 className="font-bold text-xl mb-4 text-gray-800 dark:text-white">
                          Services Included:
                        </h4>
                        <ul className="space-y-3">
                          {getDetailedInfo(selectedFeature.title)?.subServices.map((service, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                            >
                              <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                              <span>{service}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                    <img
                      src={selectedFeature.image}
                      alt={selectedFeature.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </DialogContent>
            )}
          </Dialog>
        </div>
      </section>
    </main>
  );
}