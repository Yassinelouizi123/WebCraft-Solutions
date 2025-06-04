"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, FileText, Briefcase, Code, BookOpen, X } from "lucide-react"
import { useRouter } from "next/navigation"

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
    content: "Custom websites that elevate your brand. Professional web development services.",
    type: "page",
    url: "/",
  },
  {
    id: "about",
    title: "About Mohammed Louizi",
    content: "Passionate web developer with 5+ years of experience creating exceptional digital experiences.",
    type: "page",
    url: "/#about",
  },
  {
    id: "portfolio-websites",
    title: "Portfolio Websites",
    content: "Stunning portfolio sites for designers, artists, and creative professionals.",
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
    id: "blogs-personal",
    title: "Blogs & Personal Sites",
    content: "Content-focused websites with easy-to-use content management systems.",
    type: "service",
    url: "/#services",
    category: "Content",
  },
  {
    id: "landing-pages",
    title: "Landing Pages",
    content: "High-converting landing pages for marketing campaigns and product launches.",
    type: "service",
    url: "/#services",
    category: "Marketing",
  },
  {
    id: "seo-optimization",
    title: "SEO Optimization",
    content: "Improve your search engine rankings and drive more organic traffic.",
    type: "service",
    url: "/#services",
    category: "SEO",
  },
  {
    id: "Anime Threads",
    title: "Anime Threads",
    content: "Trendy anime-inspired clothing brand offering stylish apparel for fans and fashion-forward individuals.",
    type: "project",
    url: "/projects",
    category: "store",
  },
  {
    id: "stylehub-fashion",
    title: "StyleHub Fashion",
    content: "Full-featured clothing store with payment integration and inventory management.",
    type: "project",
    url: "/projects",
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
  {
    id: "mobile-first-website",
    title: "Why Your Business Needs a Mobile-First Website",
    content: "Learn why mobile-first design is crucial for your business success.",
    type: "blog",
    url: "/blog",
    category: "Development",
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

export default function SearchDropdown() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchableContent[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      setIsOpen(false)
      return
    }

    const searchResults = simpleSearch(query)
    setResults(searchResults.slice(0, 6))
    setIsOpen(searchResults.length > 0)
    setSelectedIndex(-1)
  }, [query])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setSelectedIndex(-1)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || results.length === 0) return

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev))
        break
      case "ArrowUp":
        e.preventDefault()
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1))
        break
      case "Enter":
        e.preventDefault()
        if (selectedIndex >= 0 && selectedIndex < results.length) {
          handleResultClick(results[selectedIndex])
        }
        break
      case "Escape":
        setIsOpen(false)
        setSelectedIndex(-1)
        inputRef.current?.blur()
        break
    }
  }

  const handleResultClick = (result: SearchableContent) => {
    setQuery("")
    setIsOpen(false)
    setSelectedIndex(-1)
    router.push(result.url)
    inputRef.current?.blur()
  }

  const clearSearch = () => {
    setQuery("")
    setResults([])
    setIsOpen(false)
    setSelectedIndex(-1)
    inputRef.current?.focus()
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
    <div ref={searchRef} className="relative w-full md:w-64 lg:w-80">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          ref={inputRef}
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query && setIsOpen(results.length > 0)}
          className="pl-10 pr-10 w-full"
          autoComplete="off"
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-background border border-border rounded-md shadow-lg z-50 max-h-96 overflow-y-auto">
          {results.map((result, index) => (
            <div
              key={result.id}
              className={`flex items-start space-x-3 p-3 cursor-pointer transition-colors border-b border-border last:border-b-0 ${
                index === selectedIndex
                  ? "bg-accent text-accent-foreground"
                  : "hover:bg-accent hover:text-accent-foreground"
              }`}
              onClick={() => handleResultClick(result)}
              onMouseEnter={() => setSelectedIndex(index)}
            >
              <div className="flex-shrink-0 mt-1">{getIcon(result.type)}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <h3 className="text-sm font-medium truncate">{result.title}</h3>
                  <Badge variant="secondary" className={`text-xs ${getTypeColor(result.type)}`}>
                    {result.type}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2">{result.content}</p>
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
    </div>
  )
}
