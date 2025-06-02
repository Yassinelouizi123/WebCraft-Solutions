import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Portfolio from "@/components/portfolio"
import Pricing from "@/components/pricing"
import Process from "@/components/process"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Technologies from "@/components/technologies"
import Blog from "@/components/blog"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Pricing />
      <Process />
      <Technologies />
      <Testimonials />
      <Blog />
      <Contact />
    </main>
  )
}
