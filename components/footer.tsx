import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Github, Youtube, Mail, Phone, MapPin, Clock } from "lucide-react"

export default function Footer() {
  const footerSections = [
    {
      title: "Company",
      links: [
        { href: "/about", label: "About Us" },
        { href: "/careers", label: "Careers" },
        { href: "/contact", label: "Contact" },
        { href: "/blog", label: "Blog" },
        { href: "/community", label: "Community" },
        { href: "/testimonials", label: "Testimonials" },
      ],
    },
    {
      title: "Services",
      links: [
        { href: "/consulting", label: "Consulting" },
        { href: "/digital-transformation", label: "Digital Transformation" },
        { href: "/cloud-solutions", label: "Cloud Solutions" },
        { href: "/analytics", label: "Data Analytics" },
      ],
    },
    {
      title: "Legal",
      links: [
        { href: "/privacy-policy", label: "Privacy Policy" },
        { href: "/terms-of-service", label: "Terms of Service" },
        { href: "/cookie-policy", label: "Cookie Policy" },
        { href: "/disclaimer", label: "Disclaimer" },
      ],
    },
  ]

  const contactInfo = {
    address: "123 Business Avenue, Silicon Valley, CA 94025",
    email: "contact@businesssolutions.com",
    phone: "+1 (555) 123-4567",
    hours: "Mon - Fri: 9:00 AM - 6:00 PM",
  }

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook", color: "#1877F2" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter", color: "#1DA1F2" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "#0A66C2" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram", color: "#E4405F" },
    { icon: Github, href: "https://github.com", label: "Github", color: "#181717" },
    { icon: Youtube, href: "https://youtube.com", label: "Youtube", color: "#FF0000" },
  ]

  return (
    <footer className="border-t border-border bg-gradient-to-b from-background/50 to-background backdrop-blur-xl">
      <div className="container mx-auto px-4 py-16">
        {/* Newsletter Section with Modern Design */}
        <div className="mb-16 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-muted-foreground">Stay ahead with the latest insights and updates</p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg bg-background border border-border w-full md:w-64"
              />
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-3">
            <Link href="/" className="inline-block mb-4">
              <img
                src="https://html-stuffs.vercel.app/images/android-chrome-512x512.png"
                alt="BusinessSolutions Logo"
                width={180}
                height={40}
                className="h-auto w-auto"
              />
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              Empowering businesses with innovative solutions for sustainable growth and success.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-6 grid grid-cols-3 gap-8">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold mb-3 text-foreground">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link 
                        href={link.href} 
                        className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="md:col-span-3">
            <h3 className="font-semibold mb-3 text-foreground">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-5 h-5" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-foreground">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-5 h-5" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-foreground">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Clock className="w-5 h-5" />
                <span>{contactInfo.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-muted-foreground text-sm">
              <p>&copy; {new Date().getFullYear()} BusinessSolutions. All rights reserved.</p>
              <p className="mt-1">Made with ❤️ for the future of business</p>
            </div>
            
            <div className="flex items-center gap-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon 
                    className="w-5 h-5" 
                    aria-label={social.label}
                    style={{ stroke: social.color }}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

