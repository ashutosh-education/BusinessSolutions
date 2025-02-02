"use client";

import { motion } from "framer-motion";
import { Users, LinkIcon, MessageSquare, Code2 } from "lucide-react";

const features = [
  {
    title: "Invite your team",
    description:
      "Proda allows multiple code edits, invite every member of your team and work directly on the code canvas.",
    icon: Users,
  },
  {
    title: "Share project link",
    description: "Share your dart project as links, control access and conquer git clone.",
    icon: LinkIcon,
  },
  {
    title: "Live feedbacks",
    description: "Receive live feedbacks, wave goodbye to slack notifications and stay productive.",
    icon: MessageSquare,
  },
  {
    title: "Advanced intellisense",
    description:
      "Work 10X faster with our advanced intellisense, code auto-completer, AI debugging and lots more.",
    icon: Code2,
  },
];

export default function Features() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="rounded-lg border bg-card/50 backdrop-blur-lg p-4 shadow-md">
            <div className="flex items-center space-x-4 mb-3">
              <feature.icon className="h-8 w-8 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground">{feature.description}</p>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
