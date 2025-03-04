import HomePage from "../components/home"
import type { Metadata } from "next"
import { generateMetadata } from "./seo-config"

export const metadata: Metadata = generateMetadata({
  title: "Architecture & Urban Planning Consultancy in Surat",
  description:
    "Aarambh Urban is a premier architecture and urban planning consultancy in Surat, Gujarat. We create inspiring spaces that prioritize sustainability and cultural context.",
  imagePath: "/img/home-og.jpg",
})

export default function Home() {
  return(<HomePage/>)
}

