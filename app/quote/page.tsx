"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowLeft, Calculator, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"
import { sendQuoteEmail, type QuoteFormData } from "@/lib/emailjs"
import { toast } from "react-hot-toast"

export default function CustomQuotePage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Update the formData state type and add loading state
  const [formData, setFormData] = useState<QuoteFormData>({
    // Basic Info
    name: "",
    email: "",
    company: "",
    phone: "",

    // Project Details
    projectType: "",
    websiteType: "",
    pages: "",
    timeline: "",
    budget: "",

    // Features
    features: [],
    designPreference: "",
    contentReady: "",
    hostingNeeded: "",

    // Additional Details
    description: "",
    inspiration: "",
    targetAudience: "",
    goals: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 4

  const handleFeatureChange = (feature: string, checked: boolean) => {
    if (checked) {
      setFormData({ ...formData, features: [...formData.features, feature] })
    } else {
      setFormData({ ...formData, features: formData.features.filter((f) => f !== feature) })
    }
  }

  // Update the handleSubmit function
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.description) {
      toast.error("Please fill in all required fields")
      return
    }

    setIsSubmitting(true)

    try {
      const success = await sendQuoteEmail(formData)

      if (success) {
        toast.success("Quote request sent successfully! I'll send you a detailed proposal within 24 hours.")
        // Reset form or redirect to success page
        setCurrentStep(1)
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          projectType: "",
          websiteType: "",
          pages: "",
          timeline: "",
          budget: "",
          features: [],
          designPreference: "",
          contentReady: "",
          hostingNeeded: "",
          description: "",
          inspiration: "",
          targetAudience: "",
          goals: "",
        })
      } else {
        toast.error("Failed to send quote request. Please try again or contact me directly.")
      }
    } catch (error) {
      console.error("Quote form error:", error)
      toast.error("An error occurred. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const nextStep = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const features = [
    "Contact Forms",
    "Online Booking System",
    "E-commerce/Shopping Cart",
    "Payment Integration",
    "User Authentication",
    "Blog/CMS",
    "Search Functionality",
    "Social Media Integration",
    "Newsletter Signup",
    "Live Chat",
    "Multi-language Support",
    "Analytics Integration",
    "SEO Optimization",
    "Mobile App Integration",
    "Custom Animations",
    "Third-party API Integration",
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
              Request Custom Quote
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Get a detailed, personalized quote for your web development project
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    step <= currentStep ? "bg-blue-800 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-500"
                  }`}
                >
                  {step < currentStep ? <CheckCircle className="h-5 w-5" /> : step}
                </div>
              ))}
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-blue-800 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-2">
              <span>Basic Info</span>
              <span>Project Details</span>
              <span>Features</span>
              <span>Final Details</span>
            </div>
          </div>

          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calculator className="h-6 w-6 mr-2" />
                Step {currentStep} of {totalSteps}
              </CardTitle>
              <CardDescription>
                {currentStep === 1 && "Let's start with your basic information"}
                {currentStep === 2 && "Tell us about your project requirements"}
                {currentStep === 3 && "Select the features you need"}
                {currentStep === 4 && "Final details to complete your quote"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                {/* Step 1: Basic Information */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
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
                        <Label htmlFor="company">Company/Organization</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Project Details */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="projectType">Project Type *</Label>
                        <Select onValueChange={(value) => setFormData({ ...formData, projectType: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="new">New Website</SelectItem>
                            <SelectItem value="redesign">Website Redesign</SelectItem>
                            <SelectItem value="ecommerce">E-commerce Store</SelectItem>
                            <SelectItem value="webapp">Web Application</SelectItem>
                            <SelectItem value="landing">Landing Page</SelectItem>
                            <SelectItem value="maintenance">Maintenance & Updates</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="websiteType">Website Type</Label>
                        <Select onValueChange={(value) => setFormData({ ...formData, websiteType: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select website type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="business">Business Website</SelectItem>
                            <SelectItem value="portfolio">Portfolio</SelectItem>
                            <SelectItem value="blog">Blog</SelectItem>
                            <SelectItem value="nonprofit">Non-profit</SelectItem>
                            <SelectItem value="restaurant">Restaurant</SelectItem>
                            <SelectItem value="healthcare">Healthcare</SelectItem>
                            <SelectItem value="education">Education</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="pages">Number of Pages</Label>
                        <Select onValueChange={(value) => setFormData({ ...formData, pages: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select page count" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-5">1-5 pages</SelectItem>
                            <SelectItem value="6-10">6-10 pages</SelectItem>
                            <SelectItem value="11-20">11-20 pages</SelectItem>
                            <SelectItem value="21-50">21-50 pages</SelectItem>
                            <SelectItem value="50+">50+ pages</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="timeline">Desired Timeline</Label>
                        <Select onValueChange={(value) => setFormData({ ...formData, timeline: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="asap">ASAP (Rush Job)</SelectItem>
                            <SelectItem value="1-2weeks">1-2 weeks</SelectItem>
                            <SelectItem value="3-4weeks">3-4 weeks</SelectItem>
                            <SelectItem value="1-2months">1-2 months</SelectItem>
                            <SelectItem value="3+months">3+ months</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
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
                          <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                          <SelectItem value="10000+">$10,000+</SelectItem>
                          <SelectItem value="discuss">Let's Discuss</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {/* Step 3: Features */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div>
                      <Label className="text-lg font-semibold mb-4 block">Select Features You Need</Label>
                      <div className="grid md:grid-cols-2 gap-3">
                        {features.map((feature) => (
                          <div key={feature} className="flex items-center space-x-2">
                            <Checkbox
                              id={feature}
                              checked={formData.features.includes(feature)}
                              onCheckedChange={(checked) => handleFeatureChange(feature, checked as boolean)}
                            />
                            <Label htmlFor={feature} className="text-sm">
                              {feature}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label className="text-lg font-semibold mb-4 block">Design Preference</Label>
                      <RadioGroup
                        value={formData.designPreference}
                        onValueChange={(value) => setFormData({ ...formData, designPreference: value })}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="custom" id="custom" />
                          <Label htmlFor="custom">Custom Design (I want something unique)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="template" id="template" />
                          <Label htmlFor="template">Template-based (Faster & more affordable)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="existing" id="existing" />
                          <Label htmlFor="existing">Based on existing design/mockup</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label>Do you have content ready?</Label>
                        <Select onValueChange={(value) => setFormData({ ...formData, contentReady: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="yes">Yes, all content is ready</SelectItem>
                            <SelectItem value="partial">Some content is ready</SelectItem>
                            <SelectItem value="no">No, I need help with content</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Do you need hosting?</Label>
                        <Select onValueChange={(value) => setFormData({ ...formData, hostingNeeded: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="yes">Yes, please include hosting</SelectItem>
                            <SelectItem value="no">No, I have hosting</SelectItem>
                            <SelectItem value="advice">I need advice on hosting</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Final Details */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="description">Project Description *</Label>
                      <Textarea
                        id="description"
                        rows={4}
                        placeholder="Describe your project, goals, and any specific requirements..."
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="inspiration">Inspiration/Reference Websites</Label>
                      <Textarea
                        id="inspiration"
                        rows={3}
                        placeholder="Share URLs of websites you like or describe the style you're looking for..."
                        value={formData.inspiration}
                        onChange={(e) => setFormData({ ...formData, inspiration: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="targetAudience">Target Audience</Label>
                      <Input
                        id="targetAudience"
                        placeholder="Who is your target audience? (e.g., young professionals, families, businesses)"
                        value={formData.targetAudience}
                        onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="goals">Main Goals</Label>
                      <Textarea
                        id="goals"
                        rows={3}
                        placeholder="What do you want to achieve with this website? (e.g., increase sales, showcase portfolio, generate leads)"
                        value={formData.goals}
                        onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                      />
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t">
                  <Button type="button" variant="outline" onClick={prevStep} disabled={currentStep === 1}>
                    Previous
                  </Button>

                  {currentStep < totalSteps ? (
                    <Button type="button" onClick={nextStep}>
                      Next Step
                    </Button>
                  ) : (
                    <Button type="submit" className="bg-blue-800 hover:bg-blue-900" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Clock className="h-4 w-4 mr-2" />
                          Submit Quote Request
                        </>
                      )}
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>

          {/* What Happens Next */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>What Happens Next?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-800 dark:text-blue-300 font-bold">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Review & Analysis</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    I'll review your requirements and analyze the project scope within 24 hours.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-800 dark:text-blue-300 font-bold">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Custom Proposal</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    You'll receive a detailed proposal with timeline, pricing, and project breakdown.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-800 dark:text-blue-300 font-bold">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">Discussion & Start</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    We'll discuss the proposal and start your project once everything is approved.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
