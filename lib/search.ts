import Fuse from "fuse.js"

export interface SearchableContent {
  id: string
  title: string
  content: string
  type: "page" | "service" | "project" | "blog"
  url: string
  category?: string
}

// Define searchable content
export const searchableContent: SearchableContent[] = [
  // Pages
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

  // Services
  {
    id: "portfolio-websites",
    title: "Portfolio Websites",
    content:
      "Stunning portfolio sites for designers, artists, and creative professionals to showcase their work. Custom design, gallery integration, contact forms.",
    type: "service",
    url: "/#services",
    category: "Design",
  },
  {
    id: "business-websites",
    title: "Business Websites",
    content:
      "Professional websites for restaurants, salons, shops, and local businesses. Mobile responsive, online booking, location maps.",
    type: "service",
    url: "/#services",
    category: "Business",
  },
  {
    id: "ecommerce-stores",
    title: "E-commerce Stores",
    content:
      "Full-featured online stores with payment processing and inventory management. Payment gateway, product catalog, order management.",
    type: "service",
    url: "/#services",
    category: "E-commerce",
  },
  {
    id: "blogs-personal",
    title: "Blogs & Personal Sites",
    content:
      "Content-focused websites with easy-to-use content management systems. CMS integration, SEO optimized, social sharing.",
    type: "service",
    url: "/#services",
    category: "Content",
  },
  {
    id: "landing-pages",
    title: "Landing Pages",
    content:
      "High-converting landing pages for marketing campaigns and product launches. A/B testing, analytics, lead capture.",
    type: "service",
    url: "/#services",
    category: "Marketing",
  },
  {
    id: "website-redesigns",
    title: "Website Redesigns",
    content:
      "Modernize your existing website with fresh design and improved functionality. Modern design, performance boost, mobile optimization.",
    type: "service",
    url: "/#services",
    category: "Redesign",
  },
  {
    id: "seo-optimization",
    title: "SEO Optimization",
    content:
      "Improve your search engine rankings and drive more organic traffic. Keyword research, technical SEO, content strategy.",
    type: "service",
    url: "/#services",
    category: "SEO",
  },
  {
    id: "maintenance-hosting",
    title: "Maintenance & Hosting",
    content:
      "Ongoing support, updates, and reliable hosting for your website. Regular updates, security monitoring, performance optimization.",
    type: "service",
    url: "/#services",
    category: "Support",
  },

  // Projects
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
    content:
      "Full-featured clothing store with payment integration and inventory management. React, e-commerce, payment gateway.",
    type: "project",
    url: "/projects",
    category: "E-commerce",
  },
  {
    id: "fitlife-gym",
    title: "FitLife Gym",
    content:
      "Dynamic fitness studio website with class schedules and membership plans. Next.js, booking system, membership management.",
    type: "project",
    url: "/projects",
    category: "Fitness",
  },

  // Blog posts
  {
    id: "web-design-trends-2024",
    title: "10 Essential Web Design Trends for 2024",
    content:
      "Discover the latest design trends that will make your website stand out in 2024, from minimalist layouts to bold typography.",
    type: "blog",
    url: "/blog",
    category: "Design",
  },
  {
    id: "mobile-first-website",
    title: "Why Your Business Needs a Mobile-First Website",
    content:
      "Learn why mobile-first design is crucial for your business success in todays digital landscape and how to implement it effectively.",
    type: "blog",
    url: "/blog",
    category: "Development",
  },
  {
    id: "seo-best-practices",
    title: "SEO Best Practices for Small Business Websites",
    content:
      "Simple yet effective SEO strategies to help your small business rank higher in search results and attract more customers.",
    type: "blog",
    url: "/blog",
    category: "SEO",
  },
]

// Fuse.js configuration
const fuseOptions = {
  keys: [
    { name: "title", weight: 0.4 },
    { name: "content", weight: 0.3 },
    { name: "category", weight: 0.2 },
    { name: "type", weight: 0.1 },
  ],
  threshold: 0.3,
  includeScore: true,
  includeMatches: true,
}

const fuse = new Fuse(searchableContent, fuseOptions)

export const searchContent = (query: string): SearchableContent[] => {
  if (!query.trim()) return []

  try {
    const results = fuse.search(query.trim())
    return results.map((result) => result.item)
  } catch (error) {
    console.error("Search error:", error)
    return []
  }
}

export const simpleSearch = (query: string): SearchableContent[] => {
  if (!query.trim()) return []

  const lowercaseQuery = query.toLowerCase().trim()

  return searchableContent.filter(
    (item) =>
      item.title.toLowerCase().includes(lowercaseQuery) ||
      item.content.toLowerCase().includes(lowercaseQuery) ||
      (item.category && item.category.toLowerCase().includes(lowercaseQuery)),
  )
}

export const getContentByType = (type: SearchableContent["type"]): SearchableContent[] => {
  return searchableContent.filter((item) => item.type === type)
}

export const getContentByCategory = (category: string): SearchableContent[] => {
  return searchableContent.filter((item) => item.category === category)
}
