"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X, User } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Update with your business links
  const navItems = [
    { href: "/features", label: "Services" },
    { href: "/community", label: "Solutions" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/careers", label: "Careers" }, // Optional section for hiring
    { href: "/blog", label: "Blog" },
  ];

  // Inline Button component
  const Button = ({
    children,
    variant = "default",
    size = "default",
    asChild = false,
    ...props
  }: {
    children: React.ReactNode;
    variant?: "default" | "ghost" | "icon";
    size?: "default" | "icon";
    asChild?: boolean;
    [key: string]: unknown;
  }) => {
    const baseClasses =
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
    const variants = {
      default: "bg-primary text-white hover:bg-primary/90",
      ghost: "bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700",
      icon: "p-2",
    };
    const sizes = {
      default: "px-4 py-2",
      icon: "h-8 w-8",
    };
    const Comp = asChild ? "div" : "button";
    return (
      <Comp
        className={`${baseClasses} ${variants[variant]} ${sizes[size]}`}
        {...props}
      >
        {children}
      </Comp>
    );
  };

  return (
    <nav className="border-b border-border bg-background/50 backdrop-blur-lg supports-[backdrop-filter]:bg-background/20 sticky top-0 z-50">
      <div className="container flex h-16 items-center px-4">
        <Link href="/" className="flex items-center space-x-2">
          <img 
            src="https://html-stuffs.vercel.app/images/android-chrome-512x512.png" 
            alt="BusinessSolutions Logo" 
            className="h-8 w-auto transform transition-transform hover:scale-110"
          />
          <span className="font-bold text-foreground text-lg tracking-wide transform transition-transform hover:scale-110">BusinessSolutions</span>
        </Link>
        <div className="hidden md:flex items-center space-x-6 ml-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
          
          {/* Profile Button */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/profile">
              <div className="relative w-9 h-9 rounded-full bg-purple-500/20 backdrop-blur-lg flex items-center justify-center overflow-hidden hover:bg-purple-500/30 transition-colors">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-transparent"
                />
                {/* Replace with actual profile image if available */}
                <User className="h-5 w-5 text-foreground z-10" />
              </div>
            </Link>
          </motion.div>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-border">
          <div className="container py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {/* Removed Login/Get Started sections */}
          </div>
        </div>
      )}
    </nav>
  );
}
