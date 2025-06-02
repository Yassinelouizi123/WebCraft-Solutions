import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Technologies() {
  const techCategories = [
    {
      title: "Frontend",
      technologies: ["React", "Next.js", "React Native", "ThreeJS", "jQuery", "Bootstrap", "MUI"],
    },
    {
      title: "Backend",
      technologies: ["Express.js", "NestJS", "Flask", "Spring Boot", "Hibernate", "SQLAlchemy"],
    },
    {
      title: "Databases",
      technologies: ["MySQL", "SQL Server", "MongoDB", "Firebase"],
    },
    {
      title: "Languages & Tools",
      technologies: ["JavaScript", "Python", "Java", "C++", "Git", "Docker", "Figma"],
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-inter font-bold text-gray-900 dark:text-white mb-4">
              Technologies I Use
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Cutting-edge tools and technologies to build modern, scalable websites
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techCategories.map((category, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <CardTitle className="text-xl font-inter text-center">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
