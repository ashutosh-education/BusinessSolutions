"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/blog", label: "Blog" },
    { href: "/docs", label: "Documentation" },
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/tutorials", label: "Tutorials" },
    { href: "/community", label: "Community" },
    { href: "/about", label: "About" },
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
          <div className="h-6 w-6 bg-primary rounded-sm" />
          <span className="font-bold text-foreground">Proda</span>
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
          <Button variant="ghost" asChild className="hidden md:inline-flex">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild className="hidden md:inline-flex">
            <Link href="/login">Get started</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
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
            <Link
              href="/login"
              className="block text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
            <Button asChild className="w-full" onClick={() => setIsMenuOpen(false)}>
              <Link href="/login">Get started</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
