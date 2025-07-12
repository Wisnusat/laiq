import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LAIQ - AI Driven Uptime",
  description:
    "LAIQ empowers your maintenance teams with sensor-less AI-powered diagnostics, troubleshooting, and prognostics — cutting downtime and preserving technical know-how.",
  keywords: "AI maintenance, industrial uptime, predictive maintenance, troubleshooting, industrial AI, laiq",
  authors: [{ name: "LAIQ" }],
  openGraph: {
    title: "LAIQ - AI Driven Uptime Solutions",
    description: "Empowering maintenance teams with AI-powered diagnostics and troubleshooting",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
