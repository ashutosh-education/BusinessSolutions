"use client"

import * as React from "react"
import { Moon, Sun } from 'lucide-react'
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  // Toggle between light and dark themes
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  return (
    <div className="relative">
      {/* Button to toggle between light and dark themes */}
      <button
        onClick={toggleTheme}
        className="p-2 bg-transparent border border-transparent rounded-full focus:outline-none flex items-center justify-center"
        aria-label="Toggle theme"
      >
        {/* Sun icon for light theme */}
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        {/* Moon icon for dark theme */}
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </button>
    </div>
  )
}
