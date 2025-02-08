"use client";

import React from "react";
import { motion } from "framer-motion";

const WelcomeLoading = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.2 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.5 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const circleVariants = {
    animate: {
      scale: [1, 1.2, 1],
      rotate: [0, 360],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="fixed inset-0 bg-[#030014] flex items-center justify-center z-[9999]"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden'
      }}
    >
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          {/* Animated circles around the logo */}
          <div className="relative">
            <motion.div
              variants={circleVariants}
              animate="animate"
              className="absolute inset-0 border-2 border-purple-500 rounded-full -m-8"
            />
            <motion.div
              variants={circleVariants}
              animate="animate"
              className="absolute inset-0 border-2 border-blue-500 rounded-full -m-16"
              style={{ animationDelay: "0.2s" }}
            />
            
            {/* Center Logo */}
            <motion.div
              variants={itemVariants}
              className="relative w-32 h-32 md:w-40 md:h-40 bg-white rounded-full shadow-2xl flex items-center justify-center"
            >
              <img
                src="https://html-stuffs.vercel.app/images/android-chrome-512x512.png" // Add your logo path here
                alt="Logo"
                width={100}
                height={100}
                className="w-24 h-24 md:w-32 md:h-32 object-contain"
              />
            </motion.div>
          </div>

          {/* Loading Text */}
          <motion.h1
            variants={itemVariants}
            className="mt-8 text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500"
          >
            BusninessSolutions
          </motion.h1>

          {/* Loading Progress */}
          <motion.div
            variants={itemVariants}
            className="mt-6 w-64 md:w-96 h-2 bg-gray-200 rounded-full overflow-hidden"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 5, ease: "linear" }}
              className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
            />
          </motion.div>

          {/* Loading Message */}
          <motion.p
            variants={itemVariants}
            className="mt-4 text-sm md:text-lg text-muted-foreground"
          >
            Preparing your experience...
          </motion.p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full">
            <motion.div
              animate={{
                rotate: 360,
                transition: { duration: 20, repeat: Infinity, ease: "linear" }
              }}
              className="w-full h-full border-[1px] border-purple-500/20 rounded-full"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WelcomeLoading;
