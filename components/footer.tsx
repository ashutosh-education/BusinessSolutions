import Link from "next/link"
import { Mail, Phone, MapPin, Clock, ChevronRight, Send, Award, Shield, Users, } from "lucide-react"
import { SiFacebook, SiX, SiInstagram, SiGithub, SiYoutube } from '@icons-pack/react-simple-icons'
import { LinkedinIcon } from "lucide-react"

export default function Footer() {
  const companyStats = [
    { number: "10K+", label: "Clients Worldwide", icon: Users },
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "99.9%", label: "Service Uptime", icon: Shield },
  ]

  const contactInfo = {
    address: "123 Business Avenue, Silicon Valley, CA 94025",
    email: "contact@businesssolutions.com",
    phone: "+1 (555) 123-4567",
    hours: "Mon - Fri: 9:00 AM - 6:00 PM",
  }

  const socialLinks = [
    { icon: SiFacebook, href: "#", label: "Facebook", color: "#1877F2" },
    { icon: SiX, href: "#", label: "X", color: "#000000" },
    { icon: LinkedinIcon, href: "#", label: "LinkedIn", color: "#0A66C2" },
    { icon: SiInstagram, href: "#", label: "Instagram", color: "#E4405F" },
    { icon: SiGithub, href: "#", label: "Github", color: "#181717" },
    { icon: SiYoutube, href: "#", label: "Youtube", color: "#FF0000" },
  ]

  return (
    <footer className="relative border-t border-border bg-gradient-to-b from-background/50 to-background backdrop-blur-xl">
      {/* Stats Section */}
      <div className="absolute -top-20 left-0 right-0 mx-auto px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-2xl backdrop-blur-sm border border-border">
            {companyStats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-4 p-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold">{stat.number}</h4>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-32 pb-16">
        {/* Newsletter Section */}
        <div className="mb-16 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Let's Stay Connected
              </h3>
              <p className="text-muted-foreground max-w-md">
                Join our community and receive exclusive insights, updates, and special offers.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="px-4 py-3 pr-12 rounded-lg bg-background border border-border w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <img
                src="https://html-stuffs.vercel.app/images/android-chrome-512x512.png"
                alt="BusinessSolutions Logo"
                width={180}
                height={40}
                className="h-auto w-auto"
              />
            </Link>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Empowering businesses with innovative solutions for sustainable growth and success. 
              We believe in creating lasting partnerships and delivering exceptional value.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 group"
                >
                  <social.icon 
                    className="w-5 h-5 group-hover:scale-110 transition-transform"
                    style={{ stroke: social.color }}
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-5 grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">Solutions</h3>
              <ul className="space-y-3">
                {["Digital Marketing", "Web Development", "Cloud Services", "AI Solutions", "Data Analytics"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-muted-foreground hover:text-foreground flex items-center gap-2 group">
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      <span>{item}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-3">
                {["About Us", "Careers", "Case Studies", "Blog", "Contact"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-muted-foreground hover:text-foreground flex items-center gap-2 group">
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      <span>{item}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-3">
            <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm text-muted-foreground group cursor-pointer">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 group-hover:text-primary transition-colors" />
                <span className="group-hover:text-foreground transition-colors">{contactInfo.address}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground group cursor-pointer">
                <Mail className="w-5 h-5 group-hover:text-primary transition-colors" />
                <a href={`mailto:${contactInfo.email}`} className="group-hover:text-foreground transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground group cursor-pointer">
                <Phone className="w-5 h-5 group-hover:text-primary transition-colors" />
                <a href={`tel:${contactInfo.phone}`} className="group-hover:text-foreground transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground group cursor-pointer">
                <Clock className="w-5 h-5 group-hover:text-primary transition-colors" />
                <span className="group-hover:text-foreground transition-colors">{contactInfo.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div>
              <p>&copy; {new Date().getFullYear()} BusinessSolutions. All rights reserved.</p>
            </div>
            <div className="flex items-center gap-6">
              <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-foreground transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

