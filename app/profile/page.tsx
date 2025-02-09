'use client';

import React, { useEffect, useState } from 'react';
import { User, Award, Target, Eye, Trophy, Users, Building2, Mail, Phone, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const ProfilePage = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  // Add these color definitions at the top level of the component
  const bgColor = isDarkMode ? 'bg-[#120826]' : 'bg-gray-50';
  const textColor = isDarkMode ? 'text-white' : 'text-gray-800';
  const cardBg = isDarkMode ? 'bg-purple-900/20' : 'bg-white/90';
  const descriptionText = isDarkMode ? 'text-purple-200' : 'text-gray-700';
  const cardTitleText = isDarkMode ? 'text-white' : 'text-gray-900';
  const tagText = isDarkMode ? 'text-purple-200' : 'text-gray-700';
  const tagBg = isDarkMode ? 'bg-purple-900/50' : 'bg-purple-100';
  const tagBorder = isDarkMode ? 'border-purple-500/30' : 'border-purple-200';
  const tagHover = isDarkMode ? 'hover:bg-purple-800/50' : 'hover:bg-purple-200';
  const iconColor = isDarkMode ? 'text-purple-300' : 'text-purple-500';

  // Replace or update your existing toggle button click handler
  const handleThemeToggle = () => {
    setIsDarkMode(prev => !prev);
  };

  useEffect(() => {
    // Simulating content loading
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <div className={`min-h-screen ${bgColor} flex items-center justify-center`}>
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-12 h-12 bg-purple-500"
        />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`min-h-screen relative overflow-hidden ${bgColor} transition-colors duration-300`}
    >
      {/* Animated background effect */}
      <div className="absolute inset-0 w-full h-full">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className={`absolute inset-0 opacity-30 ${
            isDarkMode 
              ? 'bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-purple-800 via-transparent to-transparent'
              : 'bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-purple-300 via-transparent to-transparent'
          }`}
        />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 p-4 md:p-8">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Profile header */}
          <motion.div 
            className="flex flex-col md:flex-row items-center gap-8 mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            {/* Profile image with static background and rotating award badge */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="w-48 h-48 rounded-full bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 p-1">
                <div className={`w-full h-full rounded-full ${isDarkMode ? 'bg-[#1a0f2e]' : 'bg-white'} flex items-center justify-center overflow-hidden`}>
                  <User size={100} className={isDarkMode ? 'text-purple-300' : 'text-purple-500'} />
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-2 -right-2 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center"
              >
                <Award className="text-white" size={24} />
              </motion.div>
            </motion.div>

            {/* Update text colors in the header section */}
            <div className="text-center md:text-left">
              <h1 className={`text-3xl md:text-4xl font-bold ${textColor} mb-2 animate-slideInDown`}>
                Ashutosh Kumar Singh
              </h1>
              <h2 className={`text-xl ${isDarkMode ? 'text-purple-300' : 'text-purple-600'} mb-4 animate-slideInRight`}>
                Business Analyst | Founder
              </h2>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-slideInUp">
                <span className={`px-4 py-2 rounded-full ${tagBg} backdrop-blur-lg ${tagText} border ${tagBorder} ${tagHover} transition-all`}>
                  Business Solutions
                </span>
                <span className={`px-4 py-2 rounded-full ${tagBg} backdrop-blur-lg ${tagText} border ${tagBorder} ${tagHover} transition-all`}>
                  Education Solutions Colleges
                </span>
              </div>
            </div>
          </motion.div>

          {/* Cards container */}
          <motion.div 
            className="flex flex-col gap-12 max-w-6xl mx-auto"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.3 }
              }
            }}
            initial="hidden"
            animate="show"
          >
            {/* About Section - Image Right */}
            <motion.div 
              className={`group ${cardBg} backdrop-blur-xl rounded-3xl p-10 
              hover:bg-purple-800/30 transition-all duration-500 
              border border-purple-500/20 hover:border-purple-500/40
              flex flex-col md:flex-row gap-12 items-center 
              hover:shadow-2xl hover:shadow-purple-500/10`}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex-1 space-y-6">
                <h3 className={`text-3xl font-bold ${cardTitleText} 
                  group-hover:text-purple-600 transition-colors`}>
                  About Me
                </h3>
                <p className={`${descriptionText} text-lg leading-relaxed`}>
                  A visionary leader with deep understanding of business strategy, 
                  process optimization, and education technology. Instrumental in 
                  transforming organizations and educational institutions through 
                  innovative solutions.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className={`px-8 py-4 rounded-full ${tagBg} ${tagText} 
                  border ${tagBorder} ${tagHover} transition-all 
                  flex items-center gap-3 text-lg`}
                >
                  <User size={24} />
                  <span>View Full Bio</span>
                </motion.button>
              </div>
              <motion.div
                className="w-full md:w-2/5 aspect-square relative"
                whileHover={{ rotate: 5 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-tr from-purple-600 
                  to-indigo-600 rounded-2xl transform rotate-3 opacity-20`} />
                <div className={`w-full h-full rounded-2xl ${cardBg} p-8 
                  flex items-center justify-center relative overflow-hidden 
                  group-hover:shadow-lg transition-all duration-500`}>
                  <User size={150} className={`${iconColor} transform 
                    group-hover:scale-110 transition-transform duration-500`} />
                </div>
              </motion.div>
            </motion.div>

            {/* Mission & Vision Section */}
            <motion.div 
              className={`${cardBg} backdrop-blur-xl rounded-3xl p-10 hover:bg-purple-800/30 
              transition-all duration-500 border border-purple-500/20 hover:border-purple-500/40`}
              whileHover={{ scale: 1.02 }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className={`text-3xl font-bold ${cardTitleText}`}>Mission & Vision</h3>
                  <div className={`${descriptionText} space-y-4`}>
                    <div className="flex items-start gap-4">
                      <div className={`p-3 ${tagBg} rounded-full`}>
                        <Target className={iconColor} size={24} />
                      </div>
                      <div>
                        <h4 className={`text-xl font-semibold ${cardTitleText}`}>Our Mission</h4>
                        <p>Empowering businesses and educational institutions through innovative solutions</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className={`p-3 ${tagBg} rounded-full`}>
                        <Eye className={iconColor} size={24} />
                      </div>
                      <div>
                        <h4 className={`text-xl font-semibold ${cardTitleText}`}>Our Vision</h4>
                        <p>Creating a future where technology and education seamlessly integrate</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                    alt="Team collaboration"
                    className="rounded-xl object-cover w-full h-full"
                  />
                </div>
              </div>
            </motion.div>

            {/* Achievements Section */}
            <motion.div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Trophy size={40} />,
                  title: "Industry Recognition",
                  value: "25+",
                  description: "Awards & Honors"
                },
                {
                  icon: <Users size={40} />,
                  title: "Global Reach",
                  value: "10K+",
                  description: "Students Impacted"
                },
                {
                  icon: <Building2 size={40} />,
                  title: "Partner Institutions",
                  value: "100+",
                  description: "Trusted Partners"
                }
              ].map((achievement, index) => (
                <motion.div
                  key={index}
                  className={`${cardBg} rounded-xl p-6 text-center hover:bg-purple-800/30 
                  transition-all duration-500 border border-purple-500/20`}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`${iconColor} flex justify-center mb-4`}>
                    {achievement.icon}
                  </div>
                  <h4 className={`text-4xl font-bold ${cardTitleText} mb-2`}>
                    {achievement.value}
                  </h4>
                  <p className={`${descriptionText} text-lg`}>
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Testimonials Section */}
            <motion.div 
              className={`${cardBg} backdrop-blur-xl rounded-3xl p-10`}
              whileHover={{ scale: 1.01 }}
            >
              <h3 className={`text-3xl font-bold ${cardTitleText} mb-8 text-center`}>
                Client Testimonials
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    name: "John Doe",
                    role: "CEO, Tech Solutions",
                    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
                    text: "Outstanding vision and execution in transforming our educational infrastructure."
                  },
                  {
                    name: "Jane Smith",
                    role: "Director, Education Institute",
                    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
                    text: "Brought innovative solutions that revolutionized our learning approach."
                  }
                ].map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className={`p-6 rounded-xl border border-purple-500/20 
                    hover:border-purple-500/40 transition-all`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <img 
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h4 className={`font-semibold ${cardTitleText}`}>{testimonial.name}</h4>
                        <p className={descriptionText}>{testimonial.role}</p>
                      </div>
                    </div>
                    <p className={`${descriptionText} italic`}>"{testimonial.text}"</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Section */}
            <motion.div 
              className={`${cardBg} backdrop-blur-xl rounded-3xl p-10`}
              whileHover={{ scale: 1.01 }}
            >
              <h3 className={`text-3xl font-bold ${cardTitleText} mb-8 text-center`}>
                Let's Connect
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Mail className={iconColor} size={24} />
                    <p className={descriptionText}>contact@businesssolutions.com</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className={iconColor} size={24} />
                    <p className={descriptionText}>+1 (555) 123-4567</p>
                  </div>
                  <div className="flex gap-4">
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1 }}
                      className={`p-3 ${tagBg} rounded-full`}
                    >
                      <Linkedin className={iconColor} size={24} />
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1 }}
                      className={`p-3 ${tagBg} rounded-full`}
                    >
                      <Twitter className={iconColor} size={24} />
                    </motion.a>
                  </div>
                </div>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className={`w-full p-3 rounded-lg ${cardBg} border border-purple-500/20 
                    focus:border-purple-500/40 outline-none ${textColor}`}
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className={`w-full p-3 rounded-lg ${cardBg} border border-purple-500/20 
                    focus:border-purple-500/40 outline-none ${textColor}`}
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="w-full py-3 bg-purple-600 text-white rounded-lg 
                    hover:bg-purple-700 transition-colors"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Add custom styles for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInDown {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideInRight {
          from { transform: translateX(-20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fadeIn { animation: fadeIn 1s ease-out; }
        .animate-slideInDown { animation: slideInDown 1s ease-out; }
        .animate-slideInRight { animation: slideInRight 1s ease-out; }
        .animate-slideInUp { animation: slideInUp 1s ease-out; }
      `}</style>
    </motion.div>
  );
};

export default ProfilePage;