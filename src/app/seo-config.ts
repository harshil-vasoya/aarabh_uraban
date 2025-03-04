// SEO Configuration for Aarambh Urban
export const siteConfig = {
    name: "Aarambh Urban",
    description:
      "Architecture & Urban Planning Consultancy in Surat, Gujarat. We turn dreams into reality through thoughtful architectural planning, crafting spaces that harmonize creativity.",
    url: "https://aarambhurban.com",
    ogImage: "/img/og-image.jpg",
    links: {
      facebook: "https://www.facebook.com/Aarambhurban",
      instagram: "https://instagram.com/aarambhurban",
      linkedin: "https://www.linkedin.com/company/aarambh-urban/",
    },
    keywords: [
      "architecture",
      "urban planning",
      "interior design",
      "architectural consultancy",
      "Surat architects",
      "Gujarat architecture firm",
      "construction planning",
      "renovation services",
      "landscaping design",
      "residential architecture",
      "commercial architecture",
    ],
    address: "A-216 Vivanta Icon, L.P. Savani Road, Adajan Gam, Surat -395009",
    phone: "+91 9909010621",
    email: "aarambh.urbans@gmail.com",
  }
  
  // Generate metadata for each page
  export function generateMetadata({
    title,
    description,
    path = "",
    imagePath = "/img/og-image.jpg",
  }: {
    title: string
    description?: string
    path?: string
    imagePath?: string
  }) {
    const metaDescription = description || siteConfig.description
    const url = `${siteConfig.url}${path}`
    const ogUrl = new URL(imagePath, siteConfig.url).toString()
  
    return {
      title: {
        default: title,
        template: `%s | ${siteConfig.name}`,
      },
      description: metaDescription,
      keywords: siteConfig.keywords,
      authors: [{ name: siteConfig.name }],
      creator: siteConfig.name,
      publisher: siteConfig.name,
      metadataBase: new URL(siteConfig.url),
      alternates: {
        canonical: url,
      },
      openGraph: {
        type: "website",
        locale: "en_IN",
        url,
        title,
        description: metaDescription,
        siteName: siteConfig.name,
        images: [
          {
            url: ogUrl,
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description: metaDescription,
        images: [ogUrl],
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    }
  }
  
  