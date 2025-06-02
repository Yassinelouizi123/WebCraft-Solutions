import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Palette, Code, Rocket } from "lucide-react"

export default function Process() {
  const steps = [
    {
      icon: Search,
      title: "Discovery",
      description:
        "We start by understanding your business, goals, and target audience to create the perfect strategy.",
      details: ["Requirements gathering", "Competitor analysis", "Goal setting", "Timeline planning"],
    },
    {
      icon: Palette,
      title: "Design",
      description: "Creating wireframes and mockups that bring your vision to life with modern, user-friendly designs.",
      details: ["Wireframing", "Visual design", "User experience", "Client feedback"],
    },
    {
      icon: Code,
      title: "Development",
      description:
        "Building your website with clean, efficient code and the latest technologies for optimal performance.",
      details: ["Frontend development", "Backend integration", "Testing", "Optimization"],
    },
    {
      icon: Rocket,
      title: "Deployment",
      description:
        "Launching your website and ensuring everything runs smoothly with ongoing support and optimization.",
      details: ["Domain setup", "Hosting configuration", "SEO setup", "Training & support"],
    },
  ]

  return (
    <section id="process" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-inter font-bold text-gray-900 dark:text-white mb-4">My Process</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A proven 4-step approach to deliver exceptional websites that exceed expectations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="card-hover h-full">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-800 to-purple-600 rounded-full flex items-center justify-center">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <CardTitle className="text-xl font-inter">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-800 to-purple-600 transform -translate-y-1/2 z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
