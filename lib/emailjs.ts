import emailjs from "emailjs-com"

// EmailJS configuration
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "your_service_id"
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "your_template_id"
const EMAILJS_QUOTE_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_QUOTE_TEMPLATE_ID || "your_quote_template_id"
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "your_public_key"

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY)

export interface ContactFormData {
  name: string
  email: string
  projectType?: string
  budget?: string
  message: string
}

export interface QuoteFormData {
  name: string
  email: string
  company?: string
  phone?: string
  projectType: string
  websiteType?: string
  pages?: string
  timeline?: string
  budget?: string
  features: string[]
  designPreference?: string
  contentReady?: string
  hostingNeeded?: string
  description: string
  inspiration?: string
  targetAudience?: string
  goals?: string
}

export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      project_type: formData.projectType || "Not specified",
      budget: formData.budget || "Not specified",
      message: formData.message,
      to_name: "WebCraft Solutions",
    }

    const response = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)

    return response.status === 200
  } catch (error) {
    console.error("Error sending contact email:", error)
    return false
  }
}

export const sendQuoteEmail = async (formData: QuoteFormData): Promise<boolean> => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company || "Not provided",
      phone: formData.phone || "Not provided",
      project_type: formData.projectType,
      website_type: formData.websiteType || "Not specified",
      pages: formData.pages || "Not specified",
      timeline: formData.timeline || "Not specified",
      budget: formData.budget || "Not specified",
      features: formData.features.join(", ") || "None selected",
      design_preference: formData.designPreference || "Not specified",
      content_ready: formData.contentReady || "Not specified",
      hosting_needed: formData.hostingNeeded || "Not specified",
      description: formData.description,
      inspiration: formData.inspiration || "Not provided",
      target_audience: formData.targetAudience || "Not provided",
      goals: formData.goals || "Not provided",
      to_name: "WebCraft Solutions",
    }

    const response = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_QUOTE_TEMPLATE_ID, templateParams)

    return response.status === 200
  } catch (error) {
    console.error("Error sending quote email:", error)
    return false
  }
}
