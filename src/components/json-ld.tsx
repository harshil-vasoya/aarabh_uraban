import { siteConfig } from "@/app/seo-config"

export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/img/logo_svg.svg`,
    image: `${siteConfig.url}/img/og-image.jpg`,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "A-216 Vivanta Icon, L.P. Savani Road, Adajan Gam",
      addressLocality: "Surat",
      addressRegion: "Gujarat",
      postalCode: "395009",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "21.1759",
      longitude: "72.7899",
    },
    telephone: siteConfig.phone,
    email: siteConfig.email,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: [siteConfig.links.facebook, siteConfig.links.instagram, siteConfig.links.linkedin],
    priceRange: "₹₹₹",
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  )
}

export function WebsiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  )
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  )
}

