"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, FileText, Briefcase, Code, BookOpen } from "lucide-react"
import { useRouter } from "next/navigation"

// Add this interface and search function directly in the component:
interface SearchableContent {
  id: string
  title: string
  content: string
  type: "page" | "service" | "project" | "blog"
  url: string
  category?: string
}

const searchableContent: SearchableContent[] = [
  {
    id: "home",
    title: "Home - WebCraft Solutions",
    content:
      "Custom websites that elevate your brand. Professional web development services including business websites, e-commerce stores, portfolios, and more.",
    type: "page",
    url: "/",
  },
  {
    id: "about",
    title: "About Mohammed Louizi",
    content:
      "Passionate web developer with 5+ years of experience creating exceptional digital experiences. Specializing in React, Next.js, Python, and modern web technologies.",
    type: "page",
    url: "/#about",
  },
  {
    id: "portfolio-websites",
    title: "Portfolio Websites",
    content: "Stunning portfolio sites for designers, artists, and creative professionals to showcase their work.",
    type: "service",
    url: "/#services",
    category: "Design",
  },
  {
    id: "business-websites",
    title: "Business Websites",
    content: "Professional websites for restaurants, salons, shops, and local businesses.",
    type: "service",
    url: "/#services",
    category: "Business",
  },
  {
    id: "ecommerce-stores",
    title: "E-commerce Stores",
    content: "Full-featured online stores with payment processing and inventory management.",
    type: "service",
    url: "/#services",
    category: "E-commerce",
  },
  {
    id: "web-design-trends-2024",
    title: "10 Essential Web Design Trends for 2024",
    content: "Discover the latest design trends that will make your website stand out in 2024.",
    type: "blog",
    url: "/blog",
    category: "Design",
  },
]

const simpleSearch = (query: string): SearchableContent[] => {
  if (!query.trim()) return []

  const lowercaseQuery = query.toLowerCase().trim()

  return searchableContent.filter(
    (item) =>
      item.title.toLowerCase().includes(lowercaseQuery) ||
      item.content.toLowerCase().includes(lowercaseQuery) ||
      (item.category && item.category.toLowerCase().includes(lowercaseQuery)),
  )
}

export default function SearchDialog() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchableContent[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsOpen(true)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      return
    }

    setIsLoading(true)
    try {
      const searchResults = simpleSearch(query)
      setResults(searchResults.slice(0, 8))
    } catch (error) {
      console.error("Search failed:", error)
      setResults([])
    } finally {
      setIsLoading(false)
    }
  }, [query])

  const handleResultClick = (result: SearchableContent) => {
    setIsOpen(false)
    setQuery("")
    router.push(result.url)
  }

  const getIcon = (type: SearchableContent["type"]) => {
    switch (type) {
      case "page":
        return <FileText className="h-4 w-4" />
      case "service":
        return <Briefcase className="h-4 w-4" />
      case "project":
        return <Code className="h-4 w-4" />
      case "blog":
        return <BookOpen className="h-4 w-4" />
      default:
        return <Search className="h-4 w-4" />
    }
  }

  const getTypeColor = (type: SearchableContent["type"]) => {
    switch (type) {
      case "page":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "service":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "project":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      case "blog":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="relative w-full justify-start text-sm text-muted-foreground md:w-40 lg:w-64"
          onClick={() => setIsOpen(true)}
        >
          <Search className="mr-2 h-4 w-4" />
          Search...
        </Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-[550px]"
        onOpenAutoFocus={(e) => {
          e.preventDefault()
          setTimeout(() => {
            const input = document.querySelector('input[placeholder*="Search"]') as HTMLInputElement
            if (input) {
              input.focus()
              input.select()
            }
          }, 100)
        }}
      >
        <DialogHeader>
          <DialogTitle>Search WebCraft Solutions</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            placeholder="Search for services, projects, blog posts..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full"
            autoFocus
            autoComplete="off"
            onFocus={(e) => e.target.select()}
          />

          {isLoading && (
            <div className="flex items-center justify-center py-6">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-800"></div>
            </div>
          )}

          {!isLoading && query && results.length === 0 && (
            <div className="text-center py-6 text-gray-500 dark:text-gray-400">No results found for "{query}"</div>
          )}

          {!isLoading && results.length > 0 && (
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {results.map((result) => (
                <div
                  key={result.id}
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors"
                  onClick={() => handleResultClick(result)}
                >
                  <div className="flex-shrink-0 mt-1">{getIcon(result.type)}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">{result.title}</h3>
                      <Badge variant="secondary" className={`text-xs ${getTypeColor(result.type)}`}>
                        {result.type}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">{result.content}</p>
                    {result.category && (
                      <Badge variant="outline" className="text-xs mt-1">
                        {result.category}
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {!query && (
            <div className="text-center py-6 text-gray-500 dark:text-gray-400 text-sm">
              Start typing to search for services, projects, and blog posts...
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
