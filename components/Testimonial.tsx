'use client';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    designation: "CEO, Tech Solutions",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    review: "This platform transformed our workflow! Our efficiency increased by 40%, and collaboration has never been easier. Highly recommended!",
    rating: 5,
    linkedIn: "johndoe",
  },
  {
    id: 2,
    name: "Sarah Smith",
    designation: "Marketing Head, Creative Co.",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    review:
      "A game-changer for our business. The UI is sleek, and automation saves us hours every week!",
    rating: 4,
  },
  {
    id: 3,
    name: "David Lee",
    designation: "CTO, NextGen Apps",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    review:
      "Super intuitive and well-designed. Our team adapted quickly, and productivity has skyrocketed!",
    rating: 5,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  if (!mounted) return null;

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={testimonials[index].id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className={`rounded-2xl p-6 sm:p-8 shadow-lg
            ${theme === 'dark' 
              ? 'bg-gray-800 text-white' 
              : 'bg-white text-gray-900'}`}
        >
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
            <div className="relative">
              <img
                src={testimonials[index].avatar}
                alt={testimonials[index].name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 
                  border-purple-500 transition-transform duration-300
                  hover:scale-105"
              />
            </div>
            
            <div className="text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-bold">{testimonials[index].name}</h3>
              <p className={`text-sm sm:text-base ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {testimonials[index].designation}
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-2 mt-2">
                {[...Array(testimonials[index].rating)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-yellow-400"
                  >
                    ★
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          <motion.p 
            className={`text-lg italic text-center sm:text-left leading-relaxed
              ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {testimonials[index].review}
          </motion.p>
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex flex-col items-center gap-4">
        <div className="flex gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setIndex(i);
                setIsAutoPlay(false);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125
                ${i === index 
                  ? 'bg-purple-500 w-6' 
                  : theme === 'dark' ? 'bg-gray-600' : 'bg-gray-300'}`}
            />
          ))}
        </div>
        
        <button
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className={`px-4 py-2 rounded-full text-sm transition-colors duration-300
            ${isAutoPlay 
              ? 'bg-purple-500 text-white hover:bg-purple-600' 
              : theme === 'dark' 
                ? 'bg-gray-700 text-white hover:bg-gray-600' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
        >
          {isAutoPlay ? 'Auto-playing' : 'Paused'}
        </button>
      </div>
    </section>
  );
}