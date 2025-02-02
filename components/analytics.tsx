"use client";

import { motion } from "framer-motion";
import { LineChart } from "@/components/line-chart";
import { Scan, ArrowUpDown, Box } from "lucide-react";

export default function Analytics() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <motion.div
        className="col-span-full md:col-span-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-card/50 backdrop-blur-lg border border-border rounded-lg shadow-md p-6">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-foreground">Market Research</h2>
          </div>
          <div className="h-[300px]">
            <LineChart />
          </div>
        </div>
      </motion.div>

      {[
        {
          title: "UPC Scanner",
          description: "Explore in-depth analytics on brand performance in the marketplace.",
          icon: Scan,
        },
        {
          title: "Reverse Sourcing",
          description: "Explore in-depth analytics on brand performance in the marketplace.",
          icon: ArrowUpDown,
        },
        {
          title: "Brand Lookup",
          description: "Explore in-depth analytics on brand performance in the marketplace.",
          icon: Box,
        },
      ].map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
        >
          <div className="bg-card/50 backdrop-blur-lg border border-border rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <item.icon className="h-8 w-8 text-primary mr-4" />
              <h2 className="text-lg font-semibold text-foreground">{item.title}</h2>
            </div>
            <p className="text-muted-foreground">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
