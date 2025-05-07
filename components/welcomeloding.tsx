"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WelcomeLoading = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Set dimensions after component mounts
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });

    // Optional: Update dimensions on window resize
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8, 
        staggerChildren: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.5 }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const orbitVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={containerVariants}
        className="fixed inset-0 w-screen h-screen bg-[#030014] flex items-center justify-center z-[9999] overflow-hidden"
      >
        {/* Background Gradient Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: Math.random() * 0.5 + 0.3,
                scale: Math.random() * 0.5 + 0.5,
                x: Math.random() * (dimensions.width || 1000), // Fallback value
                y: Math.random() * (dimensions.height || 800), // Fallback value
              }}
              transition={{
                duration: Math.random() * 2 + 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute w-1 h-1 bg-white rounded-full"
            />
          ))}
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center">
            {/* Orbital Rings */}
            <div className="relative">
              {[1, 2, 3].map((ring) => (
                <motion.div
                  key={ring}
                  variants={orbitVariants}
                  animate="animate"
                  className={`absolute inset-0 border-2 border-purple-500/30 rounded-full`}
                  style={{
                    margin: `-${ring * 2}rem`,
                    animationDelay: `${ring * 0.2}s`,
                    width: `${ring * 8 + 100}%`,
                    height: `${ring * 8 + 100}%`,
                  }}
                />
              ))}

              {/* Main Logo Container */}
              <motion.div
                variants={floatingVariants}
                animate="animate"
                className="relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"
              >
                <motion.div
                  variants={pulseVariants}
                  animate="animate"
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl"
                />
                <div className="relative w-full h-full bg-white/10 backdrop-blur-sm rounded-full shadow-2xl flex items-center justify-center border border-white/20">
                  <img
                    src="https://html-stuffs.vercel.app/images/android-chrome-512x512.png"
                    alt="Logo"
                    className="w-3/4 h-3/4 object-contain"
                  />
                </div>
              </motion.div>
            </div>

            {/* Text and Progress Section */}
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="mt-12 text-center"
            >
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 mb-6"
              >
                RausBytes
              </motion.h1>

              {/* Enhanced Progress Bar */}
              <div className="relative w-64 md:w-96 h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-[length:200%_100%]"
                />
              </div>

              {/* Loading Messages */}
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mt-6 text-white/70 text-lg md:text-xl"
              >
                Preparing your experience...
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default WelcomeLoading;
