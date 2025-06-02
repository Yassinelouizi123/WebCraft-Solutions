"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
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
              Terms of Service
            </h1>
            <p className="text-gray-600 dark:text-gray-300">Last updated: January 2024</p>
          </div>

          <Card>
            <CardContent className="p-8 prose prose-lg dark:prose-invert max-w-none">
              <h2>Agreement to Terms</h2>
              <p>
                By accessing and using WebCraft Solutions services, you accept and agree to be bound by the terms and
                provision of this agreement.
              </p>

              <h2>Services</h2>
              <p>WebCraft Solutions provides web development services including but not limited to:</p>
              <ul>
                <li>Website design and development</li>
                <li>E-commerce solutions</li>
                <li>Website maintenance and support</li>
                <li>SEO optimization</li>
                <li>Consulting services</li>
              </ul>

              <h2>Payment Terms</h2>
              <ul>
                <li>50% deposit required before project commencement</li>
                <li>Final payment due upon project completion</li>
                <li>Late payments may incur additional fees</li>
                <li>Refunds are subject to project completion status</li>
              </ul>

              <h2>Project Timeline</h2>
              <p>
                Project timelines are estimates and may vary based on project complexity, client feedback, and content
                availability.
              </p>

              <h2>Intellectual Property</h2>
              <p>
                Upon full payment, clients receive full ownership of the completed website. WebCraft Solutions retains
                the right to showcase completed work in portfolios.
              </p>

              <h2>Limitation of Liability</h2>
              <p>
                WebCraft Solutions shall not be liable for any indirect, incidental, special, or consequential damages
                resulting from the use of our services.
              </p>

              <h2>Contact Information</h2>
              <p>
                For questions about these Terms of Service, contact us at{" "}
                <a href="mailto:louizimohammed456@gmail.com">louizimohammed456@gmail.com</a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
