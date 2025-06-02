"use client"

import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Heart, Linkedin, Mail, Phone } from "lucide-react"

export default function Footer() {
  const router = useRouter()
  const pathname = usePathname()
  const currentYear = new Date().getFullYear()

  const handleSectionClick = (sectionId: string) => {
    // If we're not on the home page, navigate to home first
    if (pathname !== "/") {
      router.push(`/#${sectionId}`)
      return
    }

    // If we're on the home page, scroll to the section
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  const footerLinks = {
    services: [
      { name: "Portfolio Websites", sectionId: "services" },
      { name: "Business Websites", sectionId: "services" },
      { name: "E-commerce Stores", sectionId: "services" },
      { name: "Website Redesigns", sectionId: "services" },
    ],
    company: [
      { name: "About", sectionId: "about" },
      { name: "Portfolio", sectionId: "portfolio" },
      { name: "Process", sectionId: "process" },
      { name: "Contact", sectionId: "contact" },
    ],
    resources: [
      { name: "Blog", href: "/blog" },
      { name: "FAQ", href: "/faq" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-inter font-bold mb-4">WebCraft Solutions</h3>
            <p className="text-gray-400 mb-4">
              Creating custom websites that elevate your brand and drive business growth.
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=louizimohammed456@gmail.com&su=Website%20Development%20Inquiry&body=Hi%20Mohammed%2C%0A%0AI'm%20interested%20in%20discussing%20a%20website%20development%20project.%0A%0ABest%20regards" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-sm"
                >
                  louizimohammed456@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-4 w-4" />
                <a 
                  href="https://wa.me/212631093503" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-sm"
                >
                  +212 6 31 09 35 03
                </a>
              </div>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/mohammed-louizi5483b6271"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-inter font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleSectionClick(link.sectionId)}
                    className="text-gray-400 hover:text-white transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-inter font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleSectionClick(link.sectionId)}
                    className="text-gray-400 hover:text-white transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-inter font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {currentYear} WebCraft Solutions. All rights reserved.</p>
          <p className="text-gray-400 text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> by Mohammed Louizi
          </p>
        </div>
      </div>
    </footer>
  )
}
