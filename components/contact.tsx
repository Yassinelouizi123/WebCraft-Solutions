"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageSquare, Phone, Mail, MapPin, Clock, HelpCircle, Github, Linkedin } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { sendContactEmail, type ContactFormData } from "@/lib/emailjs"
import { toast } from "react-hot-toast"

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields")
      return
    }

    setIsSubmitting(true)

    try {
      const success = await sendContactEmail(formData)

      if (success) {
        toast.success("Message sent successfully! I'll get back to you within 24 hours.")
        setFormData({
          name: "",
          email: "",
          projectType: "",
          budget: "",
          message: "",
        })
      } else {
        toast.error("Failed to send message. Please try again or contact me directly.")
      }
    } catch (error) {
      console.error("Contact form error:", error)
      toast.error("An error occurred. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const faqs = [
    {
      question: "How much does a website cost?",
      answer:
        "Website costs vary based on complexity and features. Basic websites start at $800, while custom e-commerce sites can range from $3,000-$5,000+. I provide detailed quotes after understanding your specific needs.",
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "Timeline depends on project scope. Simple websites take 2-3 weeks, while complex e-commerce sites may take 6-8 weeks. I provide realistic timelines during our initial consultation.",
    },
    {
      question: "Do you offer website maintenance?",
      answer:
        "Yes! I offer ongoing maintenance packages including updates, security monitoring, backups, and technical support to keep your website running smoothly.",
    },
    {
      question: "Can you help with hosting and domain setup?",
      answer:
        "I can help you choose the right hosting solution and set up your domain. I work with reliable hosting providers to ensure optimal performance.",
    },
    {
      question: "How many revisions are included?",
      answer:
        "Each package includes a specific number of revisions. Basic packages include 2 rounds, Standard includes 3 rounds, and Premium includes unlimited revisions during development.",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-inter font-bold text-gray-900 dark:text-white mb-4">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ready to elevate your online presence? Get in touch and let's discuss your project
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-2xl font-inter">Send Me a Message</CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="projectType">Project Type</Label>
                      <Select onValueChange={(value) => setFormData({ ...formData, projectType: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="business">Business Website</SelectItem>
                          <SelectItem value="ecommerce">E-commerce Store</SelectItem>
                          <SelectItem value="portfolio">Portfolio Website</SelectItem>
                          <SelectItem value="landing">Landing Page</SelectItem>
                          <SelectItem value="redesign">Website Redesign</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-1000">Under $1,000</SelectItem>
                          <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                          <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                          <SelectItem value="5000-plus">$5,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      rows={12}
                      placeholder="Tell me about your project, goals, and any specific requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-blue-800 hover:bg-blue-900 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <MessageSquare className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & FAQ */}
            <div className="space-y-8">
              {/* Contact Information */}
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-2xl font-inter">Get In Touch</CardTitle>
                  <CardDescription>Multiple ways to reach me for your convenience</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-800 dark:text-purple-400" />
                    <a
                      href="mailto:louizimohammed456@gmail.com"
                      className="hover:text-blue-800 dark:hover:text-purple-400 transition-colors"
                    >
                      louizimohammed456@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-800 dark:text-purple-400" />
                    <a
                      href="tel:+212631093503"
                      className="hover:text-blue-800 dark:hover:text-purple-400 transition-colors"
                    >
                      +212 6 31 09 35 03
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-blue-800 dark:text-purple-400" />
                    <span>Morocco (Remote Available)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-blue-800 dark:text-purple-400" />
                    <span>Mon-Fri: 9AM-6PM GMT</span>
                  </div>

                  <div className="pt-4 border-t">
                    <Button
                      className="w-full bg-green-600 hover:bg-green-700 text-white mb-4"
                      onClick={() => window.open(`https://wa.me/212631093503`, "_blank")}
                    >
                      <MessageSquare className="h-5 w-5 mr-2" />
                      WhatsApp Chat
                    </Button>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        className="flex-1"
                        onClick={() => window.open("https://linkedin.com/in/mohammed-louizi5483b6271", "_blank")}
                      >
                        <Linkedin className="h-4 w-4 mr-1" />
                        LinkedIn
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1"
                        onClick={() => window.open("https://github.com/LouiziM", "_blank")}
                      >
                        <Github className="h-4 w-4 mr-1" />
                        GitHub
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Section */}
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-2xl font-inter flex items-center">
                    <HelpCircle className="h-6 w-6 mr-2" />
                    Frequently Asked Questions
                  </CardTitle>
                  <CardDescription>
                    <Link
                      href="/faq"
                      className="text-blue-800 hover:text-blue-900 dark:text-purple-400 dark:hover:text-purple-300"
                    >
                      View all FAQs →
                    </Link>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible>
                    {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-gray-600 dark:text-gray-300">{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
