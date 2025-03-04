"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Instagram, Linkedin, MapPin, Mail, Phone, ExternalLink, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-20 pb-6 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] bg-repeat"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      <motion.div
        className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-primary/10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Column */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-6"
          >
            <Link href="/">
              <div className="brand-name text-3xl relative inline-block group">
                <span className="text-primary font-bold">Aarambh</span>
                <span className="font-light">Urban</span>
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </Link>
            <p className="text-gray-300 mt-4 pr-4 text-lg leading-relaxed">
              We're a Planning Consultancy, we turn dreams into reality through thoughtful architectural planning,
              crafting spaces that harmonize creativity.
            </p>
            <p className="text-gray-300 text-lg">We measure our success by the results we drive for our clients.</p>

            <div className="pt-4">
              <h4 className="text-lg font-medium mb-4">Subscribe to our newsletter</h4>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus-visible:ring-primary"
                />
                <Button className="bg-primary hover:bg-primary/90">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <h3 className="text-xl font-semibold relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-3 mt-6">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Team", href: "/team" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors relative group flex items-center"
                  >
                    <span className="absolute left-0 w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300"></span>
                    <span className="ml-0 group-hover:ml-6 transition-all duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Column */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <h3 className="text-xl font-semibold relative inline-block">
              Services
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-3 mt-6">
              {[
                { name: "Architectural Planning", href: "/services#architectural" },
                { name: "Urban Planning", href: "/services#urban" },
                { name: "Interior Designing", href: "/services#interior" },
                { name: "Landscaping", href: "/services#landscaping" },
                { name: "Renovation", href: "/services#renovation" },
                { name: "Construction", href: "/services#construction" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors relative group flex items-center"
                  >
                    <span className="absolute left-0 w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300"></span>
                    <span className="ml-0 group-hover:ml-6 transition-all duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-6"
          >
            <h3 className="text-xl font-semibold relative inline-block">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-4 mt-6">
              <motion.li
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="bg-gray-800 p-2 rounded-full">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <a
                  href="mailto:aarambh.urbans@gmail.com"
                  className="text-gray-300 hover:text-primary transition-colors pt-1"
                >
                  aarambh.urbans@gmail.com
                </a>
              </motion.li>
              <motion.li
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="bg-gray-800 p-2 rounded-full">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <a href="tel:+919909010621" className="text-gray-300 hover:text-primary transition-colors pt-1">
                  +91 9909010621
                </a>
              </motion.li>
              <motion.li
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="bg-gray-800 p-2 rounded-full">
                  <ExternalLink className="h-5 w-5 text-primary" />
                </div>
                <a href="tel:+919624001504" className="text-gray-300 hover:text-primary transition-colors pt-1">
                  +91 9624001504
                </a>
              </motion.li>
              <motion.li
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="bg-gray-800 p-2 rounded-full mt-1">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <address className="text-gray-300 not-italic">
                  A-216 Vivanta Icon, <br />
                  L.P. Savani Road, <br />
                  Adajan Gam, <br />
                  Surat -395009
                </address>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Social Media & Copyright Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-16 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-6 md:mb-0">
              <motion.a
                href="https://wa.me/9624001504"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-primary p-3 rounded-full transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                </svg>
              </motion.a>
              <motion.a
                href="https://www.facebook.com/Aarambhurban?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-primary p-3 rounded-full transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://instagram.com/aarambhurban?igshid=ZDc4ODBmNjlmNQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-primary p-3 rounded-full transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/aarambh-urban/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-primary p-3 rounded-full transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">
                © {currentYear} <span className="text-primary font-medium">Aarambh Urban</span>
              </p>
              <p className="text-gray-400 text-sm mt-1">
                Developed by{" "}
                <a
                  href="https://topgrowth.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  TopGrowth IT Solution
                </a>
              </p>
              <p className="text-gray-500">All Rights Reserved</p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

