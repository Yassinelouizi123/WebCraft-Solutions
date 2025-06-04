"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Eye, ArrowLeft, Filter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProjectsPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const projects = [
    {
      title: "Anime Threads ",
      type: "Clothing Store",
      description:
        "Trendy anime-inspired clothing brand offering stylish apparel for fans and fashion-forward individuals. Features a responsive online store, detailed product displays, and seamless checkout experience.",
      image: "/Anime Threads.png?height=400&width=600",
      tags: ["E-commerce", "Responsive", "Anime", "Clothing"],
      category: "business",
      year: "2024",
      features: ["Online Store", "Product Showcase", "Secure Checkout", "Mobile Responsive"],
    },
    {
      title: "StyleHub Fashion",
      type: "E-commerce Store",
      description:
        "Full-featured clothing store with payment integration, inventory management, and user accounts. Built with modern e-commerce best practices.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "E-commerce", "Payment Gateway", "Fashion"],
      category: "ecommerce",
      year: "2024",
      features: ["Shopping Cart", "Payment Processing", "User Accounts", "Inventory Management"],
    },
    {
      title: "FitLife Gym",
      type: "Fitness Studio",
      description:
        "Dynamic fitness studio website with class schedules, membership plans, and trainer profiles. Includes booking system for classes.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "Booking", "Membership", "Fitness"],
      category: "business",
      year: "2024",
      features: ["Class Scheduling", "Membership Plans", "Trainer Profiles", "Online Booking"],
    },
    {
      title: "LegalPro Services",
      type: "Professional Services",
      description:
        "Professional law firm website with case studies, consultation booking, and attorney profiles. Optimized for professional credibility.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["WordPress", "Professional", "Contact Forms", "Legal"],
      category: "professional",
      year: "2023",
      features: ["Case Studies", "Consultation Booking", "Attorney Profiles", "Legal Resources"],
    },
    {
      title: "TechStart Landing",
      type: "Tech Startup",
      description:
        "High-converting landing page for SaaS product with lead generation, analytics integration, and A/B testing capabilities.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Landing Page", "Analytics", "SaaS"],
      category: "landing",
      year: "2024",
      features: ["Lead Generation", "Analytics", "A/B Testing", "Conversion Optimization"],
    },
    {
      title: "Sarah Chen Portfolio",
      type: "Personal Portfolio",
      description:
        "Creative portfolio for graphic designer showcasing projects, skills, and client testimonials. Features smooth animations and gallery.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Portfolio", "Creative", "Gallery", "Design"],
      category: "portfolio",
      year: "2023",
      features: ["Project Gallery", "Skill Showcase", "Client Testimonials", "Contact Integration"],
    },
    {
      title: "Creative Minds Agency",
      type: "Creative Agency",
      description:
        "Modern agency website with team showcase, project case studies, and service offerings. Built for creative professionals.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Agency", "Team", "Case Studies", "Creative"],
      category: "business",
      year: "2023",
      features: ["Team Showcase", "Case Studies", "Service Pages", "Client Portal"],
    },
    {
      title: "Local Coffee Co.",
      type: "Local Business",
      description:
        "Cozy coffee shop website with location info, online ordering, and menu display. Features local SEO optimization.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Local Business", "Online Ordering", "Location", "Coffee"],
      category: "business",
      year: "2024",
      features: ["Online Ordering", "Menu Display", "Location Info", "Local SEO"],
    },
    {
      title: "EduLearn Platform",
      type: "Educational Platform",
      description:
        "Online learning platform with course management, student progress tracking, and interactive lessons.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Education", "LMS", "React", "Learning"],
      category: "webapp",
      year: "2024",
      features: ["Course Management", "Progress Tracking", "Interactive Lessons", "Student Portal"],
    },
    {
      title: "HealthCare Plus",
      type: "Healthcare Website",
      description: "Medical practice website with appointment booking, doctor profiles, and patient resources.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Healthcare", "Booking", "Medical", "Professional"],
      category: "professional",
      year: "2023",
      features: ["Appointment Booking", "Doctor Profiles", "Patient Resources", "HIPAA Compliant"],
    },
    {
      title: "GreenEarth NGO",
      type: "Non-Profit Website",
      description:
        "Environmental non-profit website with donation system, volunteer registration, and impact tracking.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Non-Profit", "Donations", "Environmental", "Volunteer"],
      category: "nonprofit",
      year: "2023",
      features: ["Donation System", "Volunteer Registration", "Impact Tracking", "Event Management"],
    },
    {
      title: "AutoDealer Pro",
      type: "Car Dealership",
      description:
        "Car dealership website with inventory management, financing calculator, and appointment scheduling.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Automotive", "Inventory", "Calculator", "Business"],
      category: "business",
      year: "2024",
      features: ["Inventory Management", "Financing Calculator", "Appointment Scheduling", "Vehicle Search"],
    },
  ]

  const categories = [
    { value: "all", label: "All Projects" },
    { value: "business", label: "Business" },
    { value: "ecommerce", label: "E-commerce" },
    { value: "portfolio", label: "Portfolio" },
    { value: "professional", label: "Professional" },
    { value: "landing", label: "Landing Pages" },
    { value: "webapp", label: "Web Apps" },
    { value: "nonprofit", label: "Non-Profit" },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Link href="/" className="inline-flex items-center text-blue-800 hover:text-blue-900 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-inter font-bold text-gray-900 dark:text-white mb-4">
              All Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore my complete portfolio of web development projects across various industries and technologies
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <Button variant="outline" className="mb-2">
              <Filter className="h-4 w-4 mr-2" />
              All Projects
            </Button>
            {categories.slice(1).map((category) => (
              <Button key={category.value} variant="ghost" className="mb-2">
                {category.label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="card-hover group overflow-hidden">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-800">
                      {project.year}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      {project.title === "Anime Threads " ? (
                        <Button
                          size="sm"
                          className="bg-white text-black hover:bg-gray-100 flex-1"
                          onClick={() => window.open('https://anime-threads-store.vercel.app/', '_blank')}
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          Live Demo
                        </Button>
                      ) : (
                        <Button size="sm" className="bg-white text-black hover:bg-gray-100 flex-1">
                          <Eye className="h-4 w-4 mr-1" />
                          Live Demo
                        </Button>
                      )}
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white text-white bg-black/20 hover:bg-white hover:text-black flex-1"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Case Study
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-3">
                    <h3 className="font-inter font-semibold text-xl text-gray-900 dark:text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">{project.type}</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                    <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h2 className="text-2xl font-inter font-bold text-gray-900 dark:text-white mb-4">
                  Ready to Start Your Project?
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Let's discuss how I can help bring your vision to life with a custom web solution.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/quote">
                    <Button size="lg" className="bg-blue-800 hover:bg-blue-900 text-white">
                      Get Custom Quote
                    </Button>
                  </Link>
                  <Link href="/#contact">
                    <Button size="lg" variant="outline">
                      Contact Me
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
