"use client"

import { useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, HelpCircle, MessageSquare, Phone } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

export default function FAQPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const faqCategories = [
    {
      title: "General Questions",
      faqs: [
        {
          question: "What services do you offer?",
          answer:
            "I offer comprehensive web development services including custom website design and development, e-commerce solutions, portfolio websites, business websites, landing pages, website redesigns, SEO optimization, and ongoing maintenance and support.",
        },
        {
          question: "How long have you been in business?",
          answer:
            "I have over 5 years of experience in web development and have successfully completed 150+ projects for clients ranging from individuals to small businesses and startups.",
        },
        {
          question: "Do you work with clients internationally?",
          answer:
            "Yes! I work with clients worldwide. I'm based in Morocco but offer remote services globally. I'm available during GMT business hours and can accommodate different time zones for meetings and communication.",
        },
        {
          question: "What makes your services different?",
          answer:
            "I focus on creating custom, high-performance websites tailored to your specific needs. Every project includes responsive design, SEO optimization, and ongoing support. I work closely with clients throughout the process to ensure the final product exceeds expectations.",
        },
      ],
    },
    {
      title: "Pricing & Packages",
      faqs: [
        {
          question: "How much does a website cost?",
          answer:
            "Website costs vary based on complexity and features. Basic websites start at $800-$1,200, Standard packages range from $1,500-$2,500, and Premium solutions start at $3,000-$5,000+. I provide detailed quotes after understanding your specific requirements.",
        },
        {
          question: "Do you offer payment plans?",
          answer:
            "Yes! I typically require a 50% deposit to start the project, with the remaining 50% due upon completion. For larger projects, we can discuss custom payment schedules to fit your budget.",
        },
        {
          question: "What's included in the pricing?",
          answer:
            "All packages include responsive design, basic SEO optimization, contact forms, social media integration, and post-launch support. Higher-tier packages include additional features like e-commerce functionality, advanced SEO, and extended support periods.",
        },
        {
          question: "Are there any hidden fees?",
          answer:
            "No hidden fees! All costs are clearly outlined in the project proposal. The only additional costs might be third-party services like premium plugins, hosting, or domain registration, which are always discussed upfront.",
        },
      ],
    },
    {
      title: "Project Process",
      faqs: [
        {
          question: "How long does it take to build a website?",
          answer:
            "Timeline depends on project scope. Simple websites take 2-3 weeks, standard business websites take 4-6 weeks, and complex e-commerce sites may take 6-8 weeks. I provide realistic timelines during our initial consultation.",
        },
        {
          question: "What information do you need to get started?",
          answer:
            "I'll need details about your business, target audience, preferred design style, content (text and images), any specific functionality requirements, and examples of websites you like. Don't worry if you don't have everything ready - I can guide you through the process.",
        },
        {
          question: "How many revisions are included?",
          answer:
            "Basic packages include 2 rounds of revisions, Standard packages include 3 rounds, and Premium packages include unlimited revisions during the development phase. Additional revisions can be accommodated for a small fee.",
        },
        {
          question: "What happens after the website is launched?",
          answer:
            "After launch, I provide training on how to update your website, ongoing technical support for the specified period, and can handle any necessary updates or maintenance. I also offer ongoing maintenance packages for long-term support.",
        },
      ],
    },
    {
      title: "Technical Questions",
      faqs: [
        {
          question: "What technologies do you use?",
          answer:
            "I use modern technologies including React, Next.js, JavaScript, Python, Express.js, MongoDB, MySQL, and various other tools depending on project requirements. I always choose the best technology stack for each specific project.",
        },
        {
          question: "Will my website be mobile-friendly?",
          answer:
            "All websites I create are fully responsive and optimized for mobile devices, tablets, and desktops. Mobile-first design is a standard part of my development process.",
        },
        {
          question: "Do you provide hosting and domain services?",
          answer:
            "I can help you choose the right hosting solution and set up your domain. I work with reliable hosting providers and can manage the technical setup, or guide you through setting it up yourself if you prefer.",
        },
        {
          question: "Will my website be SEO-friendly?",
          answer:
            "Yes! All websites include basic SEO optimization including proper meta tags, structured data, fast loading times, and mobile optimization. I also offer advanced SEO services for better search engine rankings.",
        },
      ],
    },
    {
      title: "Support & Maintenance",
      faqs: [
        {
          question: "Do you provide ongoing support?",
          answer:
            "Yes! All packages include post-launch support ranging from 30-90 days depending on the package. I also offer ongoing maintenance packages for long-term support, updates, and security monitoring.",
        },
        {
          question: "Can you update my existing website?",
          answer:
            "I offer website redesign services and can update existing websites with new features, improved design, better performance, or enhanced functionality.",
        },
        {
          question: "What if something breaks on my website?",
          answer:
            "During the support period, I'll fix any technical issues at no additional cost. For websites under maintenance contracts, I provide priority support and quick resolution of any problems.",
        },
        {
          question: "Can I update the website content myself?",
          answer:
            "Yes! I can build websites with user-friendly content management systems that allow you to easily update text, images, and other content. I also provide training on how to use these systems.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Link href="/" className="inline-flex items-center text-blue-800 hover:text-blue-900 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-inter font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about my web development services, pricing, and process
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="card-hover">
                <CardHeader>
                  <CardTitle className="text-2xl font-inter flex items-center">
                    <HelpCircle className="h-6 w-6 mr-2 text-blue-800 dark:text-purple-400" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem key={faqIndex} value={`item-${categoryIndex}-${faqIndex}`}>
                        <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact CTA */}
          <Card className="mt-12 bg-gradient-to-r from-blue-800 to-purple-600 text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-inter font-bold mb-4">Still Have Questions?</h2>
              <p className="text-xl mb-6 opacity-90">Can't find the answer you're looking for? I'm here to help!</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#contact">
                  <Button className="bg-white text-blue-800 hover:bg-gray-100">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Send a Message
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-white text-white bg-white/10 hover:bg-white hover:text-blue-800"
                  onClick={() => window.open(`https://wa.me/212631093503`, "_blank")}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  WhatsApp Chat
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quick Links */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card className="text-center p-6">
              <CardHeader>
                <CardTitle className="text-lg">Get a Quote</CardTitle>
                <CardDescription>Ready to start your project?</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/quote">
                  <Button className="w-full bg-blue-800 hover:bg-blue-900">Request Quote</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <CardTitle className="text-lg">View Portfolio</CardTitle>
                <CardDescription>See my previous work</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/projects">
                  <Button variant="outline" className="w-full">
                    Browse Projects
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader>
                <CardTitle className="text-lg">Read Blog</CardTitle>
                <CardDescription>Web development tips & insights</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/blog">
                  <Button variant="outline" className="w-full">
                    Read Articles
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
