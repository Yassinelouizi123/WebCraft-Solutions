"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Palette, Zap, Calculator } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Hero() {
  const router = useRouter()

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio")
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const goToCalculator = () => {
    router.push("/calculator")
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-bg"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-purple-300/20 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-24 h-24 bg-blue-300/20 rounded-full animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-12 h-12 bg-white/15 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-inter font-bold mb-4 sm:mb-6 leading-tight px-4 sm:px-0">
            Custom Websites That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
              Elevate Your Brand
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            I design and develop fast, beautiful, and responsive websites tailored to your needs
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-12 px-4 sm:px-0">
            <Button
              size="lg"
              className="bg-white text-blue-800 hover:bg-gray-100 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
              onClick={scrollToContact}
            >
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white bg-white/10 hover:bg-white hover:text-blue-800 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
              onClick={scrollToPortfolio}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white bg-white/10 hover:bg-white hover:text-blue-800 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
              onClick={goToCalculator}
            >
              <Calculator className="mr-2 h-5 w-5" />
              Project Calculator
            </Button>
          </div>

          {/* Feature Icons */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 text-gray-300 mb-16">
            <div className="flex items-center gap-2 justify-center">
              <Code className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="text-sm sm:text-base">Clean Code</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <Palette className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="text-sm sm:text-base">Custom Design</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <Zap className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="text-sm sm:text-base">Fast Loading</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
