import AboutPage from "@/components/about-section"

import type { Metadata } from "next"
import { generateMetadata } from "../seo-config"

export const metadata: Metadata = generateMetadata({
  title: "About Aarambh Urban | Our Story & Values",
  description:
    "Learn about Aarambh Urban's journey, our team, and our vision for creating exceptional architectural designs in Surat, Gujarat.",
  path: "/about",
  imagePath: "/img/about-og.jpg",
})

export default function About() {
 return(<AboutPage/>)
}

