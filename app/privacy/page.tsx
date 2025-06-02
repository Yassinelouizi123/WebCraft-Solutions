"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-blue-800 hover:text-blue-900 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-inter font-bold text-gray-900 dark:text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600 dark:text-gray-300">Last updated: January 2024</p>
          </div>

          <Card>
            <CardContent className="p-8 prose prose-lg dark:prose-invert max-w-none">
              <h2>Information We Collect</h2>
              <p>
                When you visit WebCraft Solutions or use our services, we may collect certain information about you,
                including:
              </p>
              <ul>
                <li>Personal information you provide (name, email, phone number)</li>
                <li>Project details and requirements you share</li>
                <li>Website usage data and analytics</li>
                <li>Communication records and correspondence</li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide web development services and support</li>
                <li>Communicate about your projects and services</li>
                <li>Improve our website and services</li>
                <li>Send relevant updates and marketing communications (with consent)</li>
              </ul>

              <h2>Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties without your
                consent, except as described in this policy or as required by law.
              </p>

              <h2>Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction.
              </p>

              <h2>Cookies</h2>
              <p>
                Our website may use cookies to enhance your experience. You can choose to disable cookies through your
                browser settings.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:louizimohammed456@gmail.com">louizimohammed456@gmail.com</a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
