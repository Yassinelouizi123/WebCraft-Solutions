"use client"

import type React from "react"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Inter, Roboto } from "next/font/google"
import { Toaster } from "react-hot-toast"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
})

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()

  useEffect(() => {
    // Handle hash navigation when the page loads
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1)
      if (hash) {
        // Small delay to ensure the page has loaded
        setTimeout(() => {
          const element = document.getElementById(hash)
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
        }, 100)
      }
    }

    // Handle initial load
    handleHashChange()

    // Handle hash changes
    window.addEventListener("hashchange", handleHashChange)

    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>WebCraft Solutions - Custom Websites That Elevate Your Brand</title>
        <meta
          name="description"
          content="Professional freelance web developer creating fast, beautiful, and responsive websites. Specializing in custom websites for businesses, e-commerce, and portfolios."
        />
        <meta
          name="keywords"
          content="web development, custom websites, responsive design, freelance developer, React, Next.js, WordPress"
        />
        <meta name="author" content="WebCraft Solutions" />
        <meta property="og:title" content="WebCraft Solutions - Custom Websites That Elevate Your Brand" />
        <meta
          property="og:description"
          content="Professional freelance web developer creating fast, beautiful, and responsive websites."
        />
        <meta property="og:type" content="website" />
      </head>
      <body className={`${inter.variable} ${roboto.variable} font-roboto antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 5000,
              className: "toast",
              success: {
                className: "toast-success",
              },
              error: {
                className: "toast-error",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
