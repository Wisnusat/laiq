"use client"

import Link from "next/link"
import Image from "next/image"
import MobileMenu from "./mobile-menu"
import { usePathname } from "next/navigation"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Our Solutions", href: "/solutions" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 ml-2">
            <Image 
              src="/images/logo.png" 
              alt="Laiq Logo" 
              width={96}
              height={96}
              className="h-12 w-auto md:h-20"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12 mr-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-base font-normal transition-colors ${isActive ? "text-[#054d90] font-bold" : "text-gray-700 hover:text-[#054d90]/90"}`}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* Mobile Navigation */}
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
