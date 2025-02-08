import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    designation: "CEO, Tech Solutions",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    review:
      "This platform transformed our workflow! Our efficiency increased by 40%, and collaboration has never been easier. Highly recommended!",
    rating: 5,
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

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-900 py-10 px-5">
      <div className="max-w-3xl w-full relative">
        <motion.div
          key={testimonials[index].id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg text-white"
        >
          <div className="absolute top-2 left-4 text-gray-300 text-4xl">❝</div>
          <div className="flex items-center gap-4 mb-4">
            <img
              src={testimonials[index].avatar}
              alt={testimonials[index].name}
              className="w-14 h-14 rounded-full border-2 border-white"
            />
            <div>
              <h3 className="text-lg font-semibold">{testimonials[index].name}</h3>
              <p className="text-sm text-gray-300">{testimonials[index].designation}</p>
            </div>
          </div>
          <p className="text-gray-200 italic">{testimonials[index].review}</p>
          <div className="flex mt-3">
            {[...Array(testimonials[index].rating)].map((_, i) => (
              <span key={i} className="text-yellow-400 w-5 h-5">★</span>
            ))}
          </div>
          <div className="absolute bottom-2 right-4 text-gray-300 text-4xl">❞</div>
        </motion.div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${i === index ? "bg-white" : "bg-gray-500"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}