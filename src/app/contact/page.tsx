import ContactPage from "@/components/contact"
import type { Metadata } from "next"
import { generateMetadata } from "../seo-config"

export const metadata: Metadata = generateMetadata({
  title: "Contact Us | Get in Touch with Aarambh Urban",
  description:
    "Contact Aarambh Urban for architectural and urban planning services in Surat, Gujarat. Reach out to discuss your project needs.",
  path: "/contact",
  imagePath: "/img/contact-og.jpg",
})



export default function Contact() {
  return (<ContactPage />)
 
}

