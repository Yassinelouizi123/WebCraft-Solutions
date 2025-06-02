import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  const projects = [
    {
      title: "Bella Vista Restaurant",
      type: "Restaurant Website",
      description: "Modern restaurant website with online reservations and menu showcase",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["WordPress", "Responsive", "Booking System"],
    },
    {
      title: "StyleHub Fashion",
      type: "E-commerce Store",
      description: "Full-featured clothing store with payment integration and inventory management",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["React", "E-commerce", "Payment Gateway"],
    },
    {
      title: "FitLife Gym",
      type: "Fitness Studio",
      description: "Dynamic fitness studio website with class schedules and membership plans",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Next.js", "Booking", "Membership"],
    },
    {
      title: "LegalPro Services",
      type: "Professional Services",
      description: "Professional law firm website with case studies and consultation booking",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["WordPress", "Professional", "Contact Forms"],
    },
    {
      title: "TechStart Landing",
      type: "Tech Startup",
      description: "High-converting landing page for SaaS product with lead generation",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["React", "Landing Page", "Analytics"],
    },
    {
      title: "Sarah Chen Portfolio",
      type: "Personal Portfolio",
      description: "Creative portfolio for graphic designer showcasing projects and skills",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Portfolio", "Creative", "Gallery"],
    },
    {
      title: "Creative Minds Agency",
      type: "Creative Agency",
      description: "Modern agency website with team showcase and project case studies",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Agency", "Team", "Case Studies"],
    },
    {
      title: "Local Coffee Co.",
      type: "Local Business",
      description: "Cozy coffee shop website with location info and online ordering",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Local Business", "Online Ordering", "Location"],
    },
  ]

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-inter font-bold text-gray-900 dark:text-white mb-4">
              My Portfolio
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Recent projects showcasing my expertise in creating diverse web solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="card-hover group overflow-hidden">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      <Button size="sm" className="bg-white text-black hover:bg-gray-100 flex-1">
                        <Eye className="h-4 w-4 mr-1" />
                        Live
                      </Button>
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
                <CardContent className="p-4">
                  <div className="mb-2">
                    <h3 className="font-inter font-semibold text-lg text-gray-900 dark:text-white">{project.title}</h3>
                    <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">{project.type}</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/projects">
              <Button size="lg" className="bg-blue-800 hover:bg-blue-900 text-white">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
