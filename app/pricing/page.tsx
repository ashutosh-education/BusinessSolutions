"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, BookmarkPlus, Share2, X } from "lucide-react";

const PricingPage = () => {
  const [selectedPlan, setSelectedPlan] = useState("basic");
  const [estimateCost, setEstimateCost] = useState(19);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Detect user's system preference for dark mode
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(mediaQuery.matches);
    mediaQuery.addEventListener("change", (e) => setIsDarkMode(e.matches));
  }, []);

  const pricingPlans = [
    {
      id: 1,
      title: "Starter Plan",
      price: "$19/month",
      description:
        "Great for individuals or small teams starting their journey. Start your business with all the essential tools and scale as you grow.",
      features: ["Access to basic features", "1 Project", "Email Support", "Limited Cloud Storage"],
      buttonText: "Get Started",
    },
    {
      id: 2,
      title: "Professional Plan",
      price: "$49/month",
      description:
        "Perfect for growing businesses. Unlock advanced features with additional support, tools, and scalable options.",
      features: ["All features", "10 Projects", "Priority Support", "Advanced Cloud Storage"],
      buttonText: "Upgrade Now",
    },
    {
      id: 3,
      title: "Enterprise Plan",
      price: "$99/month",
      description:
        "For large teams and enterprises. Offers fully customizable features, enhanced security, and dedicated customer support.",
      features: ["Unlimited Projects", "Dedicated Support", "Advanced Security", "Custom Integrations"],
      buttonText: "Contact Sales",
    },
  ];

  // Estimator logic
  const handleFeatureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = parseInt(event.target.value, 10);
    setEstimateCost(selectedValue);
  };

  return (
    <div
      className={`min-h-screen ${isDarkMode ? "bg-dark-bg text-light-text" : "bg-light-bg text-dark-text"} relative overflow-hidden`}
    >
      <section className="relative flex items-center justify-center min-h-screen px-6 bg-gradient-to-r from-purple-500/20 via-transparent to-blue-500/20 animate-gradient-xy">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-50"></div>
        <motion.div
          className="relative z-10 text-center space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-900 dark:from-purple-300 dark:to-indigo-700">
            Discover Scalable, Transparent Pricing Plans Built for Your Business Growth
          </h1>
          <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200">
            Explore the perfect pricing plan for your business size and scale with ease as your company evolves.
          </p>
          <button
            onClick={() =>
              window.scrollTo({ top: document.getElementById("pricing-plans")?.offsetTop, behavior: "smooth" })
            }
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300"
          >
            Explore Our Plans
          </button>
        </motion.div>
      </section>


      {/* Pricing Overview Section */}
      <section className="py-20 px-4 bg-background" id="pricing-plans">
        <div className="max-w-7xl mx-auto text-center space-y-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-muted-foreground">
            Our Pricing Plans - A Plan for Every Need
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Scalable", "Customizable", "Transparent Pricing"].map((benefit, index) => (
              <motion.div
                key={index}
                className="p-8 backdrop-blur-xl bg-background/50 border border-white/10 rounded-xl hover:scale-[1.05] transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex justify-center">
                  <CheckCircle className="text-purple-500 text-4xl" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{benefit}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {benefit === "Scalable"
                    ? "Scale as your business grows with flexible options, offering more storage and features."
                    : benefit === "Customizable"
                      ? "Tailor your plan based on your unique needs, with custom add-ons and integrations."
                      : "Pay for only what you use with our transparent pricing structure, no hidden fees."}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.id}
              className={`p-8 backdrop-blur-xl bg-background/50 border border-white/10 rounded-xl ${selectedPlan === plan.title.toLowerCase() ? "scale-[1.05] shadow-lg" : "hover:scale-[1.02]"
                } transition-all duration-300`}
              onClick={() => setSelectedPlan(plan.title.toLowerCase())}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold">{plan.title}</h3>
              <p className="text-lg text-muted-foreground">{plan.price}</p>
              <p className="mt-4">{plan.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle size={16} /> {feature}
                  </li>
                ))}
              </ul>
              <button
                className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300"
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cost Estimator */}
      <section className="py-20 bg-background text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-muted-foreground">Interactive Cost Estimator - Customize Your Plan</h2>
        <div className="mt-6">
          <div className="flex justify-center items-center gap-6">
            <div>
              <label htmlFor="storage" className="text-lg font-semibold">Select Features</label>
              <div className="mt-4">
                <input
                  type="range"
                  id="storage"
                  min="19"
                  max="99"
                  value={estimateCost}
                  onChange={handleFeatureChange}
                  className="w-64"
                />
                <p className="mt-2">Estimated Cost: ${estimateCost}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-background text-center space-y-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-muted-foreground">Why Choose Proda?</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <motion.div
            className="p-8 backdrop-blur-xl bg-background/50 border border-white/10 rounded-xl hover:scale-[1.05] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <BookmarkPlus className="text-purple-500 text-4xl" />
            <h3 className="mt-6 text-xl font-semibold">Scalable Solutions</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Proda grows with you. Whether you&lsquo;re a startup or an enterprise, we offer scalable solutions to fit your needs.
            </p>
          </motion.div>
          <motion.div
            className="p-8 backdrop-blur-xl bg-background/50 border border-white/10 rounded-xl hover:scale-[1.05] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <Share2 className="text-purple-500 text-4xl" />
            <h3 className="mt-6 text-xl font-semibold">Seamless Collaboration</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Collaborate with your team in real-time and manage projects efficiently with Proda tools.
            </p>
          </motion.div>
          <motion.div
            className="p-8 backdrop-blur-xl bg-background/50 border border-white/10 rounded-xl hover:scale-[1.05] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <X className="text-purple-500 text-4xl" />
            <h3 className="mt-6 text-xl font-semibold">No Hidden Fees</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              We believe in transparency. With Proda, there are no hidden fees, and you only pay for what you use.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-center">
        <h2 className="text-3xl font-semibold">Ready to Get Started?</h2>
        <p className="mt-4">Select a plan or get in touch with our sales team to discuss your custom needs.</p>
        <div className="mt-6 flex justify-center space-x-8">
          <button className="px-6 py-3 bg-blue-600 rounded-full hover:scale-105 transition-all duration-300">
            Start Your Free Trial
          </button>
          <button className="px-6 py-3 bg-gray-800 rounded-full hover:scale-105 transition-all duration-300">
            Contact Sales
          </button>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
