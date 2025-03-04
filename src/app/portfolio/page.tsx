import type { Metadata } from "next"
import { generateMetadata } from "../seo-config"
import PortfolioPage from "@/components/portfolio"

export const metadata: Metadata = generateMetadata({
  title: "Our Portfolio | Architectural & Design Projects",
  description:
    "Browse through our completed architectural, urban planning, and interior design projects across Gujarat and beyond.",
  path: "/portfolio",
  imagePath: "/img/portfolio-og.jpg",
})




export default function Portfolio() {
return(<PortfolioPage/>)
}

