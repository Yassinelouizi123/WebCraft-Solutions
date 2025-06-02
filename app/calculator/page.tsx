"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, ArrowRight, Calculator, Check, Clock } from "lucide-react"
import { sendQuoteEmail, type QuoteFormData } from "@/lib/emailjs"
import { toast } from "sonner"

// Project types and their base prices
const projectTypes = [
  {
    id: "basic",
    name: "Basic Website",
    basePrice: 800,
    maxPages: 5,
    description: "Simple, informational website with basic features",
  },
  {
    id: "business",
    name: "Business Website",
    basePrice: 1500,
    maxPages: 10,
    description: "Professional website with CMS and advanced features",
  },
  {
    id: "ecommerce",
    name: "E-commerce Store",
    basePrice: 2500,
    maxPages: 20,
    description: "Full-featured online store with product management",
  },
  {
    id: "webapp",
    name: "Web Application",
    basePrice: 3500,
    maxPages: 15,
    description: "Custom web application with user accounts and advanced functionality",
  },
]

// Features available for each project type
const projectFeatures = {
  basic: [
    { id: "contact", name: "Contact Form", price: 100 },
    { id: "gallery", name: "Image Gallery", price: 150 },
    { id: "responsive", name: "Responsive Design", price: 200 },
    { id: "seo", name: "Basic SEO", price: 200 },
    { id: "analytics", name: "Google Analytics", price: 100 },
  ],
  business: [
    { id: "contact", name: "Contact Form", price: 100 },
    { id: "gallery", name: "Image Gallery", price: 150 },
    { id: "responsive", name: "Responsive Design", price: 200 },
    { id: "seo", name: "Advanced SEO", price: 300 },
    { id: "analytics", name: "Google Analytics", price: 100 },
    { id: "cms", name: "Content Management System", price: 400 },
    { id: "blog", name: "Blog Section", price: 300 },
    { id: "social", name: "Social Media Integration", price: 200 },
  ],
  ecommerce: [
    { id: "responsive", name: "Responsive Design", price: 200 },
    { id: "seo", name: "Advanced SEO", price: 300 },
    { id: "analytics", name: "Google Analytics", price: 100 },
    { id: "cms", name: "Content Management System", price: 400 },
    { id: "products", name: "Product Management", price: 500 },
    { id: "cart", name: "Shopping Cart", price: 400 },
    { id: "payment", name: "Payment Gateway", price: 300 },
    { id: "inventory", name: "Inventory Management", price: 400 },
    { id: "shipping", name: "Shipping Integration", price: 300 },
    { id: "discounts", name: "Discount System", price: 200 },
  ],
  webapp: [
    { id: "responsive", name: "Responsive Design", price: 200 },
    { id: "user", name: "User Authentication", price: 500 },
    { id: "dashboard", name: "User Dashboard", price: 600 },
    { id: "api", name: "API Integration", price: 500 },
    { id: "database", name: "Database Design", price: 700 },
    { id: "admin", name: "Admin Panel", price: 800 },
    { id: "notifications", name: "Notification System", price: 400 },
    { id: "search", name: "Search Functionality", price: 300 },
    { id: "analytics", name: "Analytics Dashboard", price: 400 },
  ],
}

// Design complexity multipliers
const designComplexity = [
  { id: "simple", name: "Simple Design", multiplier: 1.0 },
  { id: "custom", name: "Custom Design", multiplier: 1.3 },
  { id: "premium", name: "Premium Design", multiplier: 1.5 },
]

// Timeline options and their multipliers
const timelineOptions = [
  { id: "standard", name: "Standard (8-12 weeks)", multiplier: 1.0 },
  { id: "accelerated", name: "Accelerated (4-8 weeks)", multiplier: 1.2 },
  { id: "rush", name: "Rush (2-4 weeks)", multiplier: 1.5 },
]

export default function QuoteCalculator() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [projectType, setProjectType] = useState("basic")
  const [pages, setPages] = useState(3)
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])
  const [design, setDesign] = useState("simple")
  const [timeline, setTimeline] = useState("standard")
  const [contentReady, setContentReady] = useState(false)
  const [hosting, setHosting] = useState(false)
  const [maintenance, setMaintenance] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [company, setCompany] = useState("")
  const [message, setMessage] = useState("")
  const [totalPrice, setTotalPrice] = useState(0)
  const [basePrice, setBasePrice] = useState(0)
  const [featuresPrice, setFeaturesPrice] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // Calculate price whenever relevant inputs change
  useEffect(() => {
    const selectedProject = projectTypes.find((p) => p.id === projectType)
    if (!selectedProject) return

    // Calculate base price based on project type and number of pages
    const basePricePerPage = selectedProject.basePrice / 3 // Assuming 3 pages is the base
    const calculatedBasePrice = selectedProject.basePrice + (pages > 3 ? ((pages - 3) * basePricePerPage) / 2 : 0)
    setBasePrice(calculatedBasePrice)

    // Calculate features price
    const featuresList = projectFeatures[projectType as keyof typeof projectFeatures]
    const featuresPriceSum = selectedFeatures.reduce((sum, featureId) => {
      const feature = featuresList.find((f) => f.id === featureId)
      return sum + (feature ? feature.price : 0)
    }, 0)
    setFeaturesPrice(featuresPriceSum)

    // Apply multipliers
    const designMultiplier = designComplexity.find((d) => d.id === design)?.multiplier || 1
    const timelineMultiplier = timelineOptions.find((t) => t.id === timeline)?.multiplier || 1
    const contentMultiplier = contentReady ? 1 : 1.1

    // Calculate total price
    let total = (calculatedBasePrice + featuresPriceSum) * designMultiplier * timelineMultiplier * contentMultiplier

    // Add hosting and maintenance if selected
    if (hosting) total += 200
    if (maintenance) total += 100 * pages

    setTotalPrice(Math.round(total))
  }, [projectType, pages, selectedFeatures, design, timeline, contentReady, hosting, maintenance])

  // Save quote to localStorage
  const saveQuote = () => {
    const quote = {
      projectType,
      pages,
      selectedFeatures,
      design,
      timeline,
      contentReady,
      hosting,
      maintenance,
      totalPrice,
      date: new Date().toISOString(),
    }

    try {
      localStorage.setItem("savedQuote", JSON.stringify(quote))
      toast.success("Quote saved successfully! You can access it later.")
    } catch (error) {
      console.error("Error saving quote:", error)
      toast.error("Could not save quote. Please try again.")
    }
  }

  // Handle form submission with EmailJS
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Get the selected project type name
    const projectTypeName = projectTypes.find((p) => p.id === projectType)?.name || ""

    // Get selected features names
    const featuresList = projectFeatures[projectType as keyof typeof projectFeatures]
    const selectedFeatureNames = selectedFeatures.map((id) => {
      const feature = featuresList.find((f) => f.id === id)
      return feature ? feature.name : ""
    })

    // Create detailed project summary
    const projectSummary = `
Project Type: ${projectTypeName}
Number of Pages: ${pages}
Design Complexity: ${designComplexity.find((d) => d.id === design)?.name}
Timeline: ${timelineOptions.find((t) => t.id === timeline)?.name}
Content Ready: ${contentReady ? "Yes" : "No"}
Hosting Setup: ${hosting ? "Yes" : "No"}
Maintenance Plan: ${maintenance ? "Yes" : "No"}

Selected Features:
${selectedFeatureNames.map((name) => `• ${name}`).join("\n")}

Price Breakdown:
• Base Price: $${basePrice}
• Features: $${featuresPrice}
• Design Multiplier: ${designComplexity.find((d) => d.id === design)?.multiplier}x
• Timeline Multiplier: ${timelineOptions.find((t) => t.id === timeline)?.multiplier}x
${hosting ? "• Hosting Setup: $200" : ""}
${maintenance ? `• Maintenance Plan: $${100 * pages}/year` : ""}

Total Estimated Cost: $${totalPrice}
    `.trim()

    // Create quote data object for EmailJS
    const quoteData: QuoteFormData = {
      name,
      email,
      company: company || "Not provided",
      phone: phone || "Not provided",
      projectType: projectTypeName,
      websiteType: projectTypeName,
      pages: pages.toString(),
      timeline: timelineOptions.find((t) => t.id === timeline)?.name || "",
      budget: `$${totalPrice}`,
      features: selectedFeatureNames,
      designPreference: designComplexity.find((d) => d.id === design)?.name || "",
      contentReady: contentReady ? "Yes" : "No",
      hostingNeeded: hosting ? "Yes" : "No",
      description: message || "No additional information provided",
      inspiration: "Generated from Quote Calculator",
      targetAudience: "To be discussed",
      goals: "To be discussed",
    }

    try {
      // Send email using EmailJS
      const success = await sendQuoteEmail(quoteData)

      setIsSubmitting(false)

      if (success) {
        setSubmitted(true)
        toast.success("Quote request submitted successfully!")

        // Save the submitted quote to localStorage
        const submittedQuote = {
          projectType,
          pages,
          selectedFeatures,
          design,
          timeline,
          contentReady,
          hosting,
          maintenance,
          totalPrice,
          date: new Date().toISOString(),
          customerInfo: { name, email, phone, company },
          projectSummary,
        }
        localStorage.setItem("lastSubmittedQuote", JSON.stringify(submittedQuote))
      } else {
        toast.error("There was an error sending your quote request. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting quote:", error)
      setIsSubmitting(false)
      toast.error("There was an error sending your quote request. Please try again.")
    }
  }

  // Get current project features
  const currentFeatures = projectFeatures[projectType as keyof typeof projectFeatures]

  // Handle feature selection
  const toggleFeature = (featureId: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(featureId) ? prev.filter((id) => id !== featureId) : [...prev, featureId],
    )
  }

  // Get selected project
  const selectedProjectType = projectTypes.find((p) => p.id === projectType)

  // If form is submitted, show success message
  if (submitted) {
    return (
      <div className="container mx-auto py-32 px-4">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <div className="mx-auto bg-green-100 p-3 rounded-full mb-4">
              <Check className="h-6 w-6 text-green-600" />
            </div>
            <CardTitle className="text-center text-2xl">Quote Request Submitted!</CardTitle>
            <CardDescription className="text-center">
              Thank you for your interest. We'll review your project details and get back to you within 24 hours with a
              detailed proposal.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-4">
              Your estimated project cost: <strong>${totalPrice}</strong>
            </p>
            <p className="text-sm text-gray-500 mb-4">
              A detailed quote has been sent to  us 
            </p>
            <div className="bg-gray-50 p-4 rounded-lg text-left text-sm">
              <h4 className="font-semibold mb-2">Project Summary:</h4>
              <p>
                <strong>Project:</strong> {projectTypes.find((p) => p.id === projectType)?.name}
              </p>
              <p>
                <strong>Pages:</strong> {pages}
              </p>
              <p>
                <strong>Timeline:</strong> {timelineOptions.find((t) => t.id === timeline)?.name}
              </p>
              <p>
                <strong>Features:</strong> {selectedFeatures.length} selected
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center space-x-4">
            <Button variant="outline" onClick={() => window.location.reload()}>
              Calculate Another Quote
            </Button>
            <Button onClick={() => router.push("/")}>Return to Homepage</Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
            <Link href="/" className="inline-flex items-center text-blue-800 hover:text-blue-900 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
        </div>
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">Project Quote Calculator</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get an instant estimate for your web project. Select your requirements and see pricing in real-time.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main calculator area */}
          <div className="flex-grow">
            {/* Step indicators */}
            <div className="mb-8">
              <div className="flex items-center justify-between max-w-md mx-auto">
                {[1, 2, 3, 4].map((s) => (
                  <div
                    key={s}
                    className={`flex flex-col items-center ${s < step ? "text-green-600" : s === step ? "text-blue-600" : "text-gray-400"}`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                        s < step
                          ? "bg-green-100 border-green-600"
                          : s === step
                            ? "bg-blue-100 border-blue-600"
                            : "bg-gray-100 border-gray-300"
                      } border-2`}
                    >
                      {s < step ? <Check className="h-5 w-5" /> : s}
                    </div>
                    <span className="text-sm hidden sm:block">
                      {s === 1 ? "Project Type" : s === 2 ? "Features" : s === 3 ? "Details" : "Contact"}
                    </span>
                  </div>
                ))}
              </div>
              <div className="relative h-1 max-w-md mx-auto mt-4 bg-gray-200 rounded">
                <div className="absolute h-1 bg-blue-600 rounded" style={{ width: `${(step - 1) * 33.33}%` }}></div>
              </div>
            </div>

            {/* Step 1: Project Type */}
            {step === 1 && (
              <div className="animate-fadeIn">
                <h2 className="text-2xl font-semibold mb-6">1. Select Project Type</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 ">
                  {projectTypes.map((type) => (
                    <Card
                      key={type.id}
                      className={`cursor-pointer transition-all max-w-[400px]  max-h-[160px] ${
                        projectType === type.id ? "ring-2 ring-blue-600 bg-blue-50" : "hover:bg-gray-50"
                      }`}
                      onClick={() => setProjectType(type.id)}
                    >
                      <CardHeader>
                        <CardTitle>{type.name}</CardTitle>
                        <CardDescription>Starting at ${type.basePrice}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p>{type.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mb-8">
                  <Label htmlFor="pages" className="text-lg mb-2 block">
                    Number of Pages: {pages}
                  </Label>
                  <div className="flex items-center gap-4">
                    <span className="text-sm">3</span>
                    <Slider
                      id="pages"
                      min={3}
                      max={selectedProjectType?.maxPages || 10}
                      step={1}
                      value={[pages]}
                      onValueChange={(value) => setPages(value[0])}
                      className="flex-grow"
                    />
                    <span className="text-sm">{selectedProjectType?.maxPages || 10}</span>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button onClick={() => setStep(2)}>
                    Continue
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2: Features */}
            {step === 2 && (
              <div className="animate-fadeIn">
                <h2 className="text-2xl font-semibold mb-6">2. Select Features</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {currentFeatures.map((feature) => (
                    <div
                      key={feature.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-all ${
                        selectedFeatures.includes(feature.id) ? "bg-blue-50 border-blue-300" : "hover:bg-gray-50"
                      }`}
                      onClick={() => toggleFeature(feature.id)}
                    >
                      <div className="flex items-start gap-3">
                        <Checkbox
                          checked={selectedFeatures.includes(feature.id)}
                          onCheckedChange={() => toggleFeature(feature.id)}
                          className="mt-1"
                        />
                        <div>
                          <div className="font-medium">{feature.name}</div>
                          <div className="text-sm text-gray-500">+${feature.price}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => setStep(1)}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                  <Button onClick={() => setStep(3)}>
                    Continue
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Project Details */}
            {step === 3 && (
              <div className="animate-fadeIn">
                <h2 className="text-2xl font-semibold mb-6">3. Project Details</h2>

                <div className="space-y-6 mb-8">
                  <div>
                    <Label className="text-lg mb-2 block">Design Complexity</Label>
                    <RadioGroup
                      value={design}
                      onValueChange={setDesign}
                      className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                    >
                      {designComplexity.map((option) => (
                        <div key={option.id} className="flex items-center space-x-2">
                          <RadioGroupItem value={option.id} id={`design-${option.id}`} />
                          <Label htmlFor={`design-${option.id}`} className="cursor-pointer">
                            {option.name}
                            <span className="block text-xs text-gray-500">
                              {option.id === "simple" && "Basic templates with minimal customization"}
                              {option.id === "custom" && "Tailored design with custom elements"}
                              {option.id === "premium" && "Unique, high-end design with animations"}
                            </span>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-lg mb-2 block">Timeline</Label>
                    <RadioGroup
                      value={timeline}
                      onValueChange={setTimeline}
                      className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                    >
                      {timelineOptions.map((option) => (
                        <div key={option.id} className="flex items-center space-x-2">
                          <RadioGroupItem value={option.id} id={`timeline-${option.id}`} />
                          <Label htmlFor={`timeline-${option.id}`} className="cursor-pointer">
                            {option.name}
                            <span className="block text-xs text-gray-500">
                              {option.multiplier > 1
                                ? `+${Math.round((option.multiplier - 1) * 100)}% cost`
                                : "Standard rate"}
                            </span>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Switch id="content-ready" checked={contentReady} onCheckedChange={setContentReady} />
                      <Label htmlFor="content-ready" className="cursor-pointer">
                        Content Ready
                        <span className="block text-xs text-gray-500">
                          I have all text and images ready for the website
                        </span>
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Switch id="hosting" checked={hosting} onCheckedChange={setHosting} />
                      <Label htmlFor="hosting" className="cursor-pointer">
                        Hosting Setup (+$200)
                        <span className="block text-xs text-gray-500">Domain, hosting, and SSL setup</span>
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Switch id="maintenance" checked={maintenance} onCheckedChange={setMaintenance} />
                      <Label htmlFor="maintenance" className="cursor-pointer">
                        Maintenance Plan (+${100 * pages}/year)
                        <span className="block text-xs text-gray-500">Updates, backups, and security monitoring</span>
                      </Label>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => setStep(2)}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                  <Button onClick={() => setStep(4)}>
                    Continue
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 4: Contact Information */}
            {step === 4 && (
              <div className="animate-fadeIn">
                <h2 className="text-2xl font-semibold mb-6">4. Your Information</h2>

                <form onSubmit={handleSubmit} className="space-y-6 mb-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone (optional)</Label>
                      <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div>
                      <Label htmlFor="company">Company (optional)</Label>
                      <Input id="company" value={company} onChange={(e) => setCompany(e.target.value)} />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Additional Information</Label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us more about your project, specific requirements, or questions..."
                      className="h-32"
                    />
                  </div>

                  <div className="flex justify-between">
                    <Button type="button" variant="outline" onClick={() => setStep(3)}>
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back
                    </Button>
                    <div className="space-x-2">

                      <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <span className="animate-spin mr-2">⏳</span>
                            Submitting...
                          </>
                        ) : (
                          <>Submit Quote Request</>
                        )}
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Price summary sidebar */}
          <div className="lg:w-80">
            <div className="sticky top-24">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calculator className="mr-2 h-5 w-5" />
                    Price Estimate
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Base Price:</span>
                      <span className="font-medium">${basePrice}</span>
                    </div>

                    {featuresPrice > 0 && (
                      <div className="flex justify-between items-center">
                        <span>Features:</span>
                        <span className="font-medium">+${featuresPrice}</span>
                      </div>
                    )}

                    {design !== "simple" && (
                      <div className="flex justify-between items-center">
                        <span>Design Complexity:</span>
                        <span className="font-medium">
                          +$
                          {Math.round((designComplexity.find((d) => d.id === design)?.multiplier || 1 - 1) * basePrice)}
                        </span>
                      </div>
                    )}

                    {timeline !== "standard" && (
                      <div className="flex justify-between items-center">
                        <span>Timeline:</span>
                        <span className="font-medium">
                          +$
                          {Math.round(
                            (timelineOptions.find((t) => t.id === timeline)?.multiplier || 1 - 1) * basePrice,
                          )}
                        </span>
                      </div>
                    )}

                    {!contentReady && (
                      <div className="flex justify-between items-center">
                        <span>Content Creation:</span>
                        <span className="font-medium">+${Math.round(0.1 * basePrice)}</span>
                      </div>
                    )}

                    {hosting && (
                      <div className="flex justify-between items-center">
                        <span>Hosting Setup:</span>
                        <span className="font-medium">+$200</span>
                      </div>
                    )}

                    {maintenance && (
                      <div className="flex justify-between items-center">
                        <span>Maintenance (Annual):</span>
                        <span className="font-medium">+${100 * pages}</span>
                      </div>
                    )}

                    <div className="pt-4 border-t">
                      <div className="flex justify-between items-center text-lg font-bold">
                        <span>Total Estimate:</span>
                        <span>${totalPrice}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        This is an estimate. Final pricing may vary based on specific requirements.
                      </p>
                    </div>

                    <div className="flex items-center text-sm text-gray-600 mt-4">
                      <Clock className="h-4 w-4 mr-2" />
                      Estimated Timeline:{" "}
                      {timeline === "standard" ? "8-12 weeks" : timeline === "accelerated" ? "4-8 weeks" : "2-4 weeks"}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
