import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Palette, ShoppingCart, FileText, Megaphone, RefreshCw, Search, Settings, Building } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Palette,
      title: "Portfolio Websites",
      description:
        "Stunning portfolio sites for designers, artists, and creative professionals to showcase their work.",
      features: ["Custom Design", "Gallery Integration", "Contact Forms"],
    },
    {
      icon: Building,
      title: "Business Websites",
      description: "Professional websites for restaurants, salons, shops, and local businesses.",
      features: ["Mobile Responsive", "Online Booking", "Location Maps"],
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Stores",
      description: "Full-featured online stores with payment processing and inventory management.",
      features: ["Payment Gateway", "Product Catalog", "Order Management"],
    },
    {
      icon: FileText,
      title: "Blogs & Personal Sites",
      description: "Content-focused websites with easy-to-use content management systems.",
      features: ["CMS Integration", "SEO Optimized", "Social Sharing"],
    },
    {
      icon: Megaphone,
      title: "Landing Pages",
      description: "High-converting landing pages for marketing campaigns and product launches.",
      features: ["A/B Testing", "Analytics", "Lead Capture"],
    },
    {
      icon: RefreshCw,
      title: "Website Redesigns",
      description: "Modernize your existing website with fresh design and improved functionality.",
      features: ["Modern Design", "Performance Boost", "Mobile Optimization"],
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Improve your search engine rankings and drive more organic traffic.",
      features: ["Keyword Research", "Technical SEO", "Content Strategy"],
    },
    {
      icon: Settings,
      title: "Maintenance & Hosting",
      description: "Ongoing support, updates, and reliable hosting for your website.",
      features: ["Regular Updates", "Security Monitoring", "Performance Optimization"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-inter font-bold text-gray-900 dark:text-white mb-4">
              My Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive web development services to bring your digital vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="card-hover group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-800 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-inter">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center mb-4">{service.description}</CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
