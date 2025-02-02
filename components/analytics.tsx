"use client";

import { motion } from "framer-motion";
import { LineChart } from "@/components/line-chart";
import { TrendingUp, BarChart3, PieChart, Users, Briefcase, Lightbulb } from "lucide-react";

export default function Analytics() {
  return (
    <section className="space-y-10 py-8">
      <motion.div
        className="text-center space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold tracking-tight text-foreground">
          BusinessSolution Growth Analytics (2022-2025)
        </h2>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Tracking our progress and impact over the years with data-driven insights.
        </p>
      </motion.div>

      <motion.div
        className="bg-card/50 backdrop-blur-lg border border-border rounded-xl shadow-md p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-4 text-center">
          <h3 className="text-lg font-semibold text-foreground">Growth Overview</h3>
        </div>
        <div className="h-[300px]">
          <LineChart />
        </div>
      </motion.div>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "Revenue Growth",
            description: "Steady increase in revenue from 2022 to 2025, showcasing our expanding market reach.",
            icon: TrendingUp,
          },
          {
            title: "User Engagement",
            description: "Higher engagement levels each year, demonstrating our growing user base.",
            icon: BarChart3,
          },
          {
            title: "Service Expansion",
            description: "New services and offerings added annually to cater to diverse business needs.",
            icon: PieChart,
          },
          {
            title: "Internship Programs",
            description: "Offering internships in IT, sales, ML, HR, and consulting to shape future professionals.",
            icon: Users,
          },
          {
            title: "Business Consulting",
            description: "Providing expert business strategies and consulting services to help companies thrive.",
            icon: Briefcase,
          },
          {
            title: "Innovation & Technology",
            description: "Fostering a culture of innovation with cutting-edge technological solutions.",
            icon: Lightbulb,
          },
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          >
            <div className="bg-card/50 backdrop-blur-lg border border-border rounded-xl shadow-md p-6 text-center">
              <div className="flex flex-col items-center mb-4">
                <item.icon className="h-10 w-10 text-primary mb-2" />
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              </div>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </section>
    </section>
  );
}