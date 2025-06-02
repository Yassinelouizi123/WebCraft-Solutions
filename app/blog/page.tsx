"use client"

import { useEffect, useState, useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowLeft, User, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getBlogPosts, getBlogCategories, searchBlogPosts } from "@/lib/blog-data"

export default function BlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Add state for search and category filter
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const allBlogPosts = getBlogPosts()
  const categories = ["All", ...getBlogCategories()]

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    let posts = allBlogPosts

    if (searchQuery) {
      posts = searchBlogPosts(searchQuery)
    }

    if (selectedCategory !== "All") {
      posts = posts.filter((post) => post.category === selectedCategory)
    }

    return posts
  }, [searchQuery, selectedCategory, allBlogPosts])

  // Update the featured post to use the first filtered post
  const featuredPost = filteredPosts[0] || allBlogPosts[0]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Link href="/" className="inline-flex items-center text-blue-800 hover:text-blue-900 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-inter font-bold text-gray-900 dark:text-white mb-4">
              Web Development Blog
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Tips, tutorials, and insights about web development, design, and digital marketing
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <div className="w-full max-w-md mx-auto mb-4">
              <input
                type="text"
                placeholder="Search blog posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === selectedCategory ? "default" : "outline"}
                className="mb-2"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <Card className="mb-12 overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    width={600}
                    height={400}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <Badge className="mb-4">{featuredPost.category}</Badge>
                  <h2 className="text-3xl font-inter font-bold text-gray-900 dark:text-white mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
                    <User className="h-4 w-4 mr-2" />
                    <span className="mr-4">{featuredPost.author}</span>
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="mr-4">{new Date(featuredPost.date).toLocaleDateString()}</span>
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Button className="bg-blue-800 hover:bg-blue-900">Read Full Article</Button>
                </div>
              </div>
            </Card>
          )}

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, index) => (
              <Card key={index} className="card-hover overflow-hidden">
                <div className="relative">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-inter line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Add no results message */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-300 text-lg">No blog posts found matching your criteria.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("All")
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}

          {/* Newsletter Signup */}
          <Card className="mt-16 bg-gradient-to-r from-blue-800 to-purple-600 text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-inter font-bold mb-4">Stay Updated</h2>
              <p className="text-xl mb-6 opacity-90">
                Get the latest web development tips and tutorials delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg text-gray-900"
                />
                <Button className="bg-white text-blue-800 hover:bg-gray-100">Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
