"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      business: "Restaurant Owner",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "WebCraft Solutions transformed our online presence completely. Our new website is beautiful, fast, and has increased our online reservations by 40%. Highly recommended!",
    },
    {
      name: "Mike Chen",
      business: "E-commerce Store Owner",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The e-commerce site they built for us is fantastic. The design is modern, the checkout process is smooth, and our sales have increased significantly since launch.",
    },
    {
      name: "Emily Rodriguez",
      business: "Fitness Studio Owner",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Professional, responsive, and delivered exactly what we needed. The booking system integration works perfectly and our members love the new site.",
    },
    {
      name: "David Thompson",
      business: "Law Firm Partner",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Exceptional work on our law firm website. The professional design and easy navigation have helped us attract more clients. Great communication throughout the project.",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-inter font-bold text-gray-900 dark:text-white mb-4">
              What Clients Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Don't just take my word for it - hear from satisfied clients
            </p>
          </div>

          <div className="relative">
            <Card className="card-hover">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                <div className="flex items-center justify-center space-x-4">
                  <Image
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-gray-900 dark:text-white">{testimonials[currentIndex].name}</div>
                    <div className="text-gray-600 dark:text-gray-400">{testimonials[currentIndex].business}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? "bg-blue-800" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
