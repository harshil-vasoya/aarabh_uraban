import ServicesPage from "@/components/service"

import type { Metadata } from "next"
import { generateMetadata } from "../seo-config"

export const metadata: Metadata = generateMetadata({
  title: "Our Services | Architectural Planning, Interior Design & More",
  description:
    "Explore our comprehensive range of architectural and design services including architectural planning, urban planning, interior design, landscaping, and construction management.",
  path: "/services",
  imagePath: "/img/services-og.jpg",
})

export default function Services() {
 return(<ServicesPage/>)
}

