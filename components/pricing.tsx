"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"
import Link from "next/link"

export default function Pricing() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const plans = [
    {
      name: "Basic Package",
      price: "$800 - $1,200",
      description: "Perfect for small businesses and personal websites",
      features: [
        "3-5 pages",
        "Responsive design",
        "Basic SEO optimization",
        "Contact form",
        "Social media integration",
        "30 days support",
      ],
      popular: false,
    },
    {
      name: "Standard Package",
      price: "$1,500 - $2,500",
      description: "Ideal for growing businesses with advanced needs",
      features: [
        "5-10 pages",
        "Custom design",
        "Advanced SEO",
        "Contact forms & integrations",
        "Blog/CMS setup",
        "Analytics setup",
        "60 days support",
      ],
      popular: true,
    },
    {
      name: "Premium Package",
      price: "$3,000 - $5,000+",
      description: "Complete solution for established businesses",
      features: [
        "Unlimited pages",
        "E-commerce functionality",
        "Custom features",
        "Advanced integrations",
        "Performance optimization",
        "Ongoing support",
        "90 days support",
      ],
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-inter font-bold text-gray-900 dark:text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose the perfect package for your project needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative card-hover ${plan.popular ? "ring-2 ring-purple-500 scale-105" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-inter">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-blue-800 dark:text-purple-400 my-4">{plan.price}</div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full mt-8 ${
                      plan.popular ? "bg-purple-500 hover:bg-purple-600" : "bg-blue-800 hover:bg-blue-900"
                    } text-white`}
                    size="lg"
                    onClick={scrollToContact}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Need something custom? Let's discuss your specific requirements.
            </p>
            <Link href="/quote">
              <Button variant="outline" size="lg">
                Request Custom Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
