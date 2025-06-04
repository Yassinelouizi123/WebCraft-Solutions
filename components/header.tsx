"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Menu, X, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import SearchDropdown from "@/components/search-dropdown"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // Start with solid background by default to prevent flash
  const [isAtTop, setIsAtTop] = useState(false)
  const { theme, setTheme } = useTheme()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const checkPosition = () => {
      setIsAtTop(window.pageYOffset === 0)
    }

    // Check position immediately on mount after DOM is ready
    checkPosition()

    window.addEventListener("scroll", checkPosition)

    return () => {
      window.removeEventListener("scroll", checkPosition)
    }
  }, [])

  const handleSectionClick = (sectionId: string) => {
    setIsMenuOpen(false)

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

  const scrollToContact = () => {
    handleSectionClick("contact")
  }

  const navItems = [
    { sectionId: "about", label: "About" },
    { sectionId: "services", label: "Services" },
    { sectionId: "portfolio", label: "Portfolio" },
    { sectionId: "pricing", label: "Pricing" },
    { sectionId: "contact", label: "Contact" },
  ]

  // Determine if nav should be transparent
  const shouldBeTransparent = isAtTop && pathname === "/"

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        !shouldBeTransparent ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4 ">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className={`text-2xl font-inter font-bold transition-colors duration-200 ${
              !shouldBeTransparent
                ? "text-purple-700 dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300"
                : "text-white hover:text-gray-200"
            }`}
          >
            WebCraft Solutions
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.sectionId}
                onClick={() => handleSectionClick(item.sectionId)}
                className={`font-medium transition-colors duration-200 ${
                  !shouldBeTransparent
                    ? "text-purple-700 dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300"
                    : "text-white hover:text-gray-200"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <SearchDropdown />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`transition-colors duration-200 ${
                !shouldBeTransparent
                  ? "text-purple-700 dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                  : "text-white hover:text-gray-200 hover:bg-white/10"
              }`}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <Button
              className={`transition-colors duration-200 ${
                !shouldBeTransparent ? "bg-purple-700 hover:bg-purple-800 text-white" : "bg-white text-blue-800 hover:bg-gray-100"
              }`}
              onClick={scrollToContact}
            >
              Get Free Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`transition-colors duration-200 ${
                !shouldBeTransparent
                  ? "text-purple-700 dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                  : "text-white hover:text-gray-200 hover:bg-white/10"
              }`}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`transition-colors duration-200 ${
                !shouldBeTransparent
                  ? "text-purple-700 dark:text-purple-400 hover:text-purple-900 dark:hover:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                  : "text-white hover:text-gray-200 hover:bg-white/10"
              }`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden fixed top-0 left-0 right-0 bottom-0 z-40 bg-black/50 backdrop-blur-sm">
            <div className="bg-white dark:bg-gray-900 w-full shadow-2xl">
              {/* Mobile Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                <Link
                  href="/"
                  className="text-xl font-bold text-purple-700 dark:text-purple-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  WebCraft Solutions
                </Link>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="text-gray-600 dark:text-gray-400 hover:text-purple-700 dark:hover:text-purple-400"
                  >
                    <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-600 dark:text-gray-400 hover:text-purple-700 dark:hover:text-purple-400"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>
              </div>

              {/* Mobile Content */}
              <div className="p-6 space-y-6">
                {/* Mobile Search */}
                <div className="w-full">
                  <SearchDropdown />
                </div>

                {/* Navigation Links */}
                <div className="space-y-1">
                  {navItems.map((item, index) => (
                    <button
                      key={item.sectionId}
                      onClick={() => handleSectionClick(item.sectionId)}
                      className="w-full text-left px-4 py-3 rounded-lg text-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-700 dark:hover:text-purple-400 transition-all duration-200 border border-transparent hover:border-purple-200 dark:hover:border-purple-700"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Button
                    className="w-full py-3 text-lg font-semibold bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-lg hover:shadow-xl transition-all duration-200"
                    onClick={scrollToContact}
                  >
                    Get Free Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}