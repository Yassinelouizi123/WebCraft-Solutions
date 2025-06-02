import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getBlogPosts } from "@/lib/blog-data"

export default function Blog() {
  const blogPosts = getBlogPosts().slice(0, 3) // Get the 3 most recent posts

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-inter font-bold text-gray-900 dark:text-white mb-4">
              Latest Blog Posts
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest web development tips, trends, and insights
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="card-hover">
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">{post.category}</span>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <CardTitle className="text-xl font-inter hover:text-blue-800 dark:hover:text-purple-400 transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{post.excerpt}</CardDescription>
                  <Button variant="outline" className="group">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/blog">
              <Button size="lg" className="bg-blue-800 hover:bg-blue-900 text-white">
                View All Posts
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
