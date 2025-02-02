import Link from "next/link"

export default function Footer() {
  const footerSections = [
    {
      title: "Product",
      links: [
        { href: "/features", label: "Features" },
        { href: "/pricing", label: "Pricing" },
        { href: "/tutorials", label: "Tutorials" },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "/about", label: "About Us" },
        { href: "/careers", label: "Careers" },
        { href: "/contact", label: "Contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { href: "/blog", label: "Blog" },
        { href: "/docs", label: "Documentation" },
        { href: "/community", label: "Community" },
      ],
    },
    {
      title: "Legal",
      links: [
        { href: "/privacy-policy", label: "Privacy Policy" },
        { href: "/terms-of-service", label: "Terms of Service" },
        { href: "/cookie-policy", label: "Cookie Policy" },
      ],
    },
  ]

  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-3 text-foreground">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-muted-foreground hover:text-foreground">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; 2025 Business Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

