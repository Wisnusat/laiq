import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#054d90] text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 mb-4 md:mb-0">
            <Image 
              src="/images/logo-alt.jpg" 
              alt="Laiq Logo" 
              width={40}
              height={48}
              className="h-12 w-auto"
            />
          </Link>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <p className="text-sm text-white/80 mb-1">Interested in partnering or piloting LAIQ?</p>
            <p className="text-sm text-white/80">
              Email us at{" "}
              <a href="mailto:hello@laiq.ai" className="text-white/80 hover:text-[#054d90]/90 transition-colors">
                hello@laiq.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
