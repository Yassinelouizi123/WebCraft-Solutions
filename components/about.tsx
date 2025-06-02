import { Badge } from "@/components/ui/badge"
import { User, Award, Clock, Users } from "lucide-react"
import Image from "next/image"

export default function About() {
  const technologies = ["JavaScript", "Python", "React", "Next.js", "Express.js", "MongoDB", "SQL Server", "ThreeJS"]

  const stats = [
    { icon: Clock, label: "5+ Years", description: "Experience" },
    { icon: Users, label: "100+", description: "Happy Clients" },
    { icon: Award, label: "150+", description: "Projects Completed" },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-inter font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Hi, I'm Mohammed Louizi - a passionate web developer with 5+ years of experience creating exceptional
              digital experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image and Stats */}
            <div className="space-y-8">
              <div className="relative">
                <div className="w-80 h-80 mx-auto relative">
                  <Image
                    src="/placeholder.svg?height=320&width=320"
                    alt="Mohammed Louizi - Professional Developer"
                    width={320}
                    height={320}
                    className="rounded-full object-cover shadow-2xl"
                  />
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center">
                    <User className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                    <stat.icon className="h-8 w-8 text-blue-800 dark:text-purple-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.label}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{stat.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6">
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  With over 5 years of experience in web development, I specialize in creating custom websites that not
                  only look stunning but also perform exceptionally. I work closely with individuals, small businesses,
                  and startups to bring their digital visions to life.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  My approach combines modern design principles with cutting-edge technology to deliver websites that
                  are fast, responsive, and optimized for search engines. Every project is tailored to meet your
                  specific needs and business goals.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-inter font-semibold text-gray-900 dark:text-white mb-4">
                  Technologies I Use
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-sm py-1 px-3">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-800">
                <p className="text-blue-800 dark:text-blue-300 font-medium">
                  "I believe in creating websites that not only meet today's needs but are built to scale and evolve
                  with your business."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
