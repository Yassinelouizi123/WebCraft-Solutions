export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  image: string
  category: string
  author: string
  readTime: string
  tags: string[]
  slug: string
  featured?: boolean
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "10 Essential Web Design Trends for 2024",
    excerpt:
      "Discover the latest design trends that will make your website stand out in 2024, from minimalist layouts to bold typography.",
    content: `
# 10 Essential Web Design Trends for 2024

Web design is constantly evolving, and 2024 brings exciting new trends that can help your website stand out from the competition. Here are the top 10 trends you should consider implementing:

## 1. Minimalist Design with Bold Typography

Clean, minimalist designs continue to dominate, but with a twist - bold, expressive typography that makes a statement.

## 2. Dark Mode Optimization

With more users preferring dark mode, ensuring your website looks great in both light and dark themes is essential.

## 3. Micro-Interactions

Subtle animations and micro-interactions enhance user experience and make websites feel more responsive and engaging.

## 4. AI-Powered Personalization

Websites are becoming smarter, using AI to personalize content and experiences for individual users.

## 5. Sustainable Web Design

Eco-friendly design practices that reduce energy consumption and carbon footprint are becoming increasingly important.

## 6. Advanced CSS Grid Layouts

Complex, magazine-style layouts are easier to achieve with modern CSS Grid techniques.

## 7. 3D Elements and Immersive Experiences

Three-dimensional elements and immersive experiences are becoming more accessible with WebGL and CSS 3D transforms.

## 8. Voice User Interface Integration

Voice search and voice commands are being integrated into web experiences.

## 9. Augmented Reality (AR) Features

AR is moving from mobile apps to web browsers, creating new possibilities for product visualization.

## 10. Inclusive and Accessible Design

Accessibility is no longer optional - it's a fundamental requirement for modern web design.

These trends represent the future of web design, focusing on user experience, performance, and accessibility.
    `,
    date: "2024-01-15",
    image: "/placeholder.svg?height=400&width=600",
    category: "Design",
    author: "Mohammed Louizi",
    readTime: "5 min read",
    tags: ["Web Design", "Trends", "UI/UX", "2024"],
    slug: "web-design-trends-2024",
    featured: true,
  },
  {
    id: "2",
    title: "Why Your Business Needs a Mobile-First Website",
    excerpt:
      "Learn why mobile-first design is crucial for your business success in today's digital landscape and how to implement it effectively.",
    content: `
# Why Your Business Needs a Mobile-First Website

With over 60% of web traffic coming from mobile devices, having a mobile-first website is no longer optional - it's essential for business success.

## The Mobile Revolution

Mobile usage has surpassed desktop browsing, and this trend continues to grow. Your customers are primarily accessing your website from their smartphones and tablets.

## Benefits of Mobile-First Design

### 1. Better User Experience
Mobile-first design ensures your website works perfectly on smaller screens, providing a seamless experience for mobile users.

### 2. Improved SEO Rankings
Google uses mobile-first indexing, meaning the mobile version of your website is considered the primary version for ranking purposes.

### 3. Faster Loading Times
Mobile-first websites are typically optimized for performance, resulting in faster loading times across all devices.

### 4. Higher Conversion Rates
A well-designed mobile experience leads to better engagement and higher conversion rates.

## How to Implement Mobile-First Design

1. **Start with Mobile Wireframes**: Design for the smallest screen first
2. **Progressive Enhancement**: Add features for larger screens
3. **Touch-Friendly Interface**: Ensure buttons and links are easily tappable
4. **Optimize Images**: Use responsive images that load quickly on mobile
5. **Test Thoroughly**: Test on real devices, not just browser dev tools

## Common Mobile-First Mistakes to Avoid

- Hiding important content on mobile
- Making buttons too small
- Using non-mobile-friendly navigation
- Ignoring page load speed
- Not optimizing forms for mobile input

Investing in mobile-first design is investing in your business's future success.
    `,
    date: "2024-01-10",
    image: "/placeholder.svg?height=400&width=600",
    category: "Development",
    author: "Mohammed Louizi",
    readTime: "7 min read",
    tags: ["Mobile-First", "Responsive Design", "Business", "Strategy"],
    slug: "mobile-first-website-business",
  },
  {
    id: "3",
    title: "SEO Best Practices for Small Business Websites",
    excerpt:
      "Simple yet effective SEO strategies to help your small business rank higher in search results and attract more customers.",
    content: `
# SEO Best Practices for Small Business Websites

Search Engine Optimization doesn't have to be complicated. Here are proven strategies that work for small businesses.

## Understanding SEO Basics

SEO is about making your website more visible in search engine results when people search for products or services related to your business.

## On-Page SEO Essentials

### 1. Keyword Research
- Use tools like Google Keyword Planner
- Focus on local keywords
- Target long-tail keywords with less competition

### 2. Title Tags and Meta Descriptions
- Include your main keyword in the title tag
- Write compelling meta descriptions
- Keep titles under 60 characters

### 3. Header Structure
- Use H1 for main headings
- Structure content with H2, H3 tags
- Include keywords naturally in headers

### 4. Content Quality
- Write for your audience, not search engines
- Create valuable, informative content
- Update content regularly

## Local SEO for Small Businesses

### Google My Business
- Claim and optimize your listing
- Add accurate business information
- Encourage customer reviews
- Post regular updates

### Local Citations
- Ensure consistent NAP (Name, Address, Phone) across directories
- List your business in relevant local directories
- Get listed in industry-specific directories

## Technical SEO

### Website Speed
- Optimize images
- Use caching
- Choose reliable hosting
- Minimize HTTP requests

### Mobile Optimization
- Ensure responsive design
- Test mobile usability
- Optimize for mobile page speed

### SSL Certificate
- Secure your website with HTTPS
- This is a ranking factor for Google

## Content Marketing Strategy

### Blog Regularly
- Write about topics your customers care about
- Answer frequently asked questions
- Share industry insights and tips

### Local Content
- Write about local events
- Create location-specific pages
- Highlight community involvement

## Measuring SEO Success

- Set up Google Analytics
- Monitor keyword rankings
- Track organic traffic growth
- Measure conversion rates

Remember, SEO is a long-term strategy. Be patient and consistent with your efforts.
    `,
    date: "2024-01-05",
    image: "/placeholder.svg?height=400&width=600",
    category: "SEO",
    author: "Mohammed Louizi",
    readTime: "6 min read",
    tags: ["SEO", "Small Business", "Google", "Marketing"],
    slug: "seo-best-practices-small-business",
  },
  {
    id: "4",
    title: "The Complete Guide to E-commerce Website Development",
    excerpt:
      "Everything you need to know about building a successful e-commerce website that converts visitors into customers.",
    content: `
# The Complete Guide to E-commerce Website Development

Building an e-commerce website requires careful planning and attention to detail. This comprehensive guide covers everything you need to know.

## Planning Your E-commerce Website

### Define Your Goals
- What products will you sell?
- Who is your target audience?
- What's your budget and timeline?
- How will you handle fulfillment?

### Choose Your Platform
- **Shopify**: User-friendly, hosted solution
- **WooCommerce**: WordPress-based, highly customizable
- **Custom Development**: Maximum flexibility and control

## Essential E-commerce Features

### Product Management
- Product catalog with categories
- Inventory management
- Product variations (size, color, etc.)
- High-quality product images
- Detailed product descriptions

### Shopping Cart and Checkout
- Persistent shopping cart
- Guest checkout option
- Multiple payment methods
- Secure checkout process
- Order confirmation and tracking

### User Account Management
- User registration and login
- Order history
- Wishlist functionality
- Account settings

## Payment Processing

### Popular Payment Gateways
- **Stripe**: Developer-friendly, global reach
- **PayPal**: Widely trusted by consumers
- **Square**: Great for businesses with physical locations

### Security Considerations
- PCI DSS compliance
- SSL certificates
- Secure payment processing
- Regular security updates

## Design and User Experience

### Homepage Design
- Clear value proposition
- Featured products
- Easy navigation
- Search functionality
- Trust signals (reviews, security badges)

### Product Pages
- High-quality images with zoom
- Detailed descriptions
- Customer reviews
- Related products
- Clear call-to-action buttons

### Mobile Optimization
- Responsive design
- Touch-friendly interface
- Mobile payment options
- Fast loading times

## SEO for E-commerce

### Product SEO
- Optimize product titles and descriptions
- Use high-quality, unique images
- Implement structured data markup
- Create SEO-friendly URLs

### Category Pages
- Optimize category descriptions
- Use breadcrumb navigation
- Implement filters and sorting
- Avoid duplicate content

## Performance Optimization

### Speed Optimization
- Optimize images
- Use content delivery networks (CDN)
- Implement caching
- Minimize HTTP requests

### Scalability
- Choose scalable hosting
- Optimize database queries
- Plan for traffic spikes
- Monitor performance metrics

## Marketing and Conversion

### Email Marketing
- Abandoned cart recovery
- Welcome email series
- Product recommendations
- Promotional campaigns

### Social Proof
- Customer reviews and ratings
- User-generated content
- Trust badges and certifications
- Social media integration

## Analytics and Tracking

### Essential Metrics
- Conversion rate
- Average order value
- Cart abandonment rate
- Customer lifetime value
- Traffic sources

### Tools to Use
- Google Analytics
- Google Search Console
- Heatmap tools (Hotjar, Crazy Egg)
- A/B testing platforms

## Launch and Beyond

### Pre-Launch Checklist
- Test all functionality
- Check payment processing
- Verify shipping calculations
- Test on multiple devices
- Set up analytics tracking

### Post-Launch Activities
- Monitor performance
- Gather customer feedback
- Optimize based on data
- Plan for growth and scaling

Building a successful e-commerce website is an ongoing process that requires continuous optimization and improvement.
    `,
    date: "2023-12-28",
    image: "/placeholder.svg?height=400&width=600",
    category: "E-commerce",
    author: "Mohammed Louizi",
    readTime: "10 min read",
    tags: ["E-commerce", "Online Store", "Conversion", "Sales"],
    slug: "complete-guide-ecommerce-development",
  },
  {
    id: "5",
    title: "How to Choose the Right Web Hosting for Your Website",
    excerpt: "A comprehensive guide to selecting the perfect hosting solution for your website's needs and budget.",
    content: `
# How to Choose the Right Web Hosting for Your Website

Choosing the right web hosting is crucial for your website's performance, security, and success. Here's everything you need to know.

## Types of Web Hosting

### Shared Hosting
**Best for**: Small websites, blogs, personal sites
**Pros**: Affordable, easy to use, managed by provider
**Cons**: Limited resources, potential performance issues

### VPS Hosting
**Best for**: Growing websites, medium traffic
**Pros**: More control, better performance, scalable
**Cons**: More expensive, requires technical knowledge

### Dedicated Hosting
**Best for**: Large websites, high traffic, enterprise
**Pros**: Maximum control, best performance, security
**Cons**: Most expensive, requires technical expertise

### Cloud Hosting
**Best for**: Websites with variable traffic
**Pros**: Scalable, reliable, pay-as-you-use
**Cons**: Can be complex, costs can vary

## Key Factors to Consider

### Performance
- **Uptime Guarantee**: Look for 99.9% or higher
- **Loading Speed**: Fast servers and SSD storage
- **Server Location**: Choose servers close to your audience
- **CDN Integration**: Content delivery network support

### Security
- **SSL Certificates**: Free SSL included
- **Backups**: Regular automated backups
- **Security Monitoring**: Malware scanning and removal
- **Firewall Protection**: DDoS protection

### Support
- **24/7 Support**: Available when you need help
- **Multiple Channels**: Phone, chat, email support
- **Knowledge Base**: Comprehensive documentation
- **Response Time**: Quick resolution of issues

### Scalability
- **Easy Upgrades**: Ability to scale resources
- **Traffic Handling**: Can handle traffic spikes
- **Resource Allocation**: CPU, RAM, storage limits
- **Bandwidth**: Sufficient data transfer limits

## Popular Hosting Providers

### Budget-Friendly Options
- **Hostinger**: Great value for money
- **Namecheap**: Affordable with good features
- **Bluehost**: WordPress recommended

### Premium Options
- **SiteGround**: Excellent support and performance
- **WP Engine**: Managed WordPress hosting
- **Kinsta**: High-performance managed hosting

### Cloud Providers
- **DigitalOcean**: Developer-friendly cloud hosting
- **AWS**: Enterprise-grade cloud services
- **Google Cloud**: Scalable cloud platform

## Hosting for Different Website Types

### Personal Blogs
- Shared hosting is usually sufficient
- Look for WordPress optimization
- Consider managed WordPress hosting

### Business Websites
- VPS or cloud hosting recommended
- Ensure good uptime and support
- Consider staging environments

### E-commerce Sites
- Need robust security features
- SSL certificates essential
- Consider dedicated resources
- PCI compliance important

### High-Traffic Sites
- Dedicated or cloud hosting
- CDN integration crucial
- Load balancing capabilities
- Scalability options

## Red Flags to Avoid

### Unrealistic Promises
- "Unlimited" everything
- Extremely cheap prices
- Guaranteed #1 ranking

### Poor Support
- No phone support
- Slow response times
- Outsourced support

### Hidden Costs
- Setup fees
- Expensive renewals
- Extra charges for basic features

## Making Your Decision

### Assess Your Needs
1. What type of website are you building?
2. How much traffic do you expect?
3. What's your technical expertise level?
4. What's your budget?

### Research and Compare
- Read reviews from multiple sources
- Check uptime monitoring sites
- Test customer support
- Compare features and pricing

### Start Small and Scale
- Begin with what you need now
- Choose a provider that allows easy upgrades
- Monitor your website's performance
- Scale up as your needs grow

## Migration Considerations

If you're switching hosts:
- Backup your website completely
- Check for migration assistance
- Plan for minimal downtime
- Update DNS settings carefully
- Test everything after migration

Remember, the cheapest option isn't always the best. Invest in reliable hosting that supports your website's goals and growth.
    `,
    date: "2023-12-20",
    image: "/placeholder.svg?height=400&width=600",
    category: "Hosting",
    author: "Mohammed Louizi",
    readTime: "8 min read",
    tags: ["Web Hosting", "Performance", "Security", "Guide"],
    slug: "choose-right-web-hosting",
  },
  {
    id: "6",
    title: "React vs Next.js: Which Should You Choose?",
    excerpt: "Compare React and Next.js to understand which framework is best for your next web development project.",
    content: `
# React vs Next.js: Which Should You Choose?

Both React and Next.js are powerful tools for building modern web applications, but they serve different purposes. Here's a comprehensive comparison.

## What is React?

React is a JavaScript library for building user interfaces, particularly web applications. It focuses on creating reusable UI components and managing application state.

### React Strengths
- **Component-Based**: Reusable UI components
- **Virtual DOM**: Efficient rendering and updates
- **Large Ecosystem**: Extensive third-party libraries
- **Flexibility**: Can be used for various types of applications
- **Learning Resources**: Abundant tutorials and documentation

### React Limitations
- **Configuration Overhead**: Requires setup for routing, bundling, etc.
- **SEO Challenges**: Client-side rendering by default
- **Performance**: May require optimization for large applications
- **Tooling Decisions**: Need to choose additional tools and libraries

## What is Next.js?

Next.js is a React framework that provides additional features and optimizations out of the box, including server-side rendering, static site generation, and more.

### Next.js Strengths
- **Server-Side Rendering (SSR)**: Better SEO and initial load times
- **Static Site Generation (SSG)**: Pre-built pages for optimal performance
- **File-Based Routing**: Automatic routing based on file structure
- **Built-in Optimization**: Image optimization, code splitting, etc.
- **API Routes**: Full-stack capabilities with API endpoints
- **Zero Configuration**: Works out of the box with minimal setup

### Next.js Limitations
- **Learning Curve**: Additional concepts to learn beyond React
- **Opinionated**: Less flexibility in some architectural decisions
- **Deployment**: Best experience with Vercel (though works elsewhere)
- **Bundle Size**: Can be larger than vanilla React apps

## Feature Comparison

### Rendering Methods

**React**
- Client-Side Rendering (CSR) by default
- Can implement SSR with additional setup
- Requires third-party solutions for static generation

**Next.js**
- Multiple rendering options: SSR, SSG, CSR, ISR
- Automatic optimization based on page requirements
- Built-in static generation capabilities

### Routing

**React**
- Requires React Router or similar library
- Manual setup and configuration
- More flexibility in routing structure

**Next.js**
- File-based routing system
- Automatic route generation
- Built-in dynamic routing
- Less configuration required

### Performance

**React**
- Manual optimization required
- Code splitting with React.lazy
- Image optimization needs third-party solutions

**Next.js**
- Automatic code splitting
- Built-in image optimization
- Performance optimizations out of the box
- Automatic static optimization

### SEO

**React**
- Poor SEO with default CSR
- Requires SSR setup for better SEO
- Meta tag management needs additional libraries

**Next.js**
- Excellent SEO with SSR/SSG
- Built-in Head component for meta tags
- Automatic sitemap generation

## When to Choose React

### Use React When:
- Building a single-page application (SPA)
- You need maximum flexibility and control
- Working on a project with specific architectural requirements
- Building a mobile app with React Native
- You have a team experienced with custom React setups
- SEO is not a primary concern

### React is Great For:
- Admin dashboards
- Internal tools
- Progressive Web Apps (PWAs)
- Applications with complex state management
- Projects requiring custom build configurations

## When to Choose Next.js

### Use Next.js When:
- Building a marketing website or blog
- SEO is crucial for your project
- You want faster development with less configuration
- Building an e-commerce site
- You need both static and dynamic content
- Performance is a top priority

### Next.js is Great For:
- Corporate websites
- E-commerce platforms
- Blogs and content sites
- Landing pages
- Documentation sites
- Full-stack applications

## Migration Considerations

### React to Next.js
- Relatively straightforward migration
- May need to refactor routing
- Can adopt Next.js features gradually
- Existing React components work with minimal changes

### Next.js to React
- More complex migration
- Need to set up build tools and routing
- Lose built-in optimizations
- May require significant refactoring

## Performance Comparison

### Initial Load Time
- **React**: Slower initial load (client-side rendering)
- **Next.js**: Faster initial load (server-side rendering)

### Subsequent Navigation
- **React**: Faster (already loaded)
- **Next.js**: Fast (optimized prefetching)

### SEO Performance
- **React**: Poor without additional setup
- **Next.js**: Excellent out of the box

## Learning Path

### If You're New to React:
1. Learn React fundamentals first
2. Build a few React projects
3. Then explore Next.js for additional features

### If You Know React:
- Next.js will feel familiar
- Focus on learning Next.js-specific features
- Understand different rendering methods

## Conclusion

**Choose React if:**
- You need maximum flexibility
- Building a complex SPA
- Have specific architectural requirements
- SEO is not important

**Choose Next.js if:**
- You want faster development
- SEO is important
- Building a content-heavy site
- Want built-in optimizations

Both are excellent choices, and the decision often comes down to your specific project requirements, team expertise, and long-term goals.
    `,
    date: "2023-12-15",
    image: "/placeholder.svg?height=400&width=600",
    category: "Development",
    author: "Mohammed Louizi",
    readTime: "9 min read",
    tags: ["React", "Next.js", "JavaScript", "Framework"],
    slug: "react-vs-nextjs-comparison",
  },
]

export const getBlogPosts = (): BlogPost[] => {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug)
}

export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter((post) => post.featured)
}

export const getBlogPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter((post) => post.category === category)
}

export const getBlogCategories = (): string[] => {
  const categories = blogPosts.map((post) => post.category)
  return [...new Set(categories)]
}

export const searchBlogPosts = (query: string): BlogPost[] => {
  const lowercaseQuery = query.toLowerCase()
  return blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.content.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery)),
  )
}
