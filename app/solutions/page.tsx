import Header from "@/components/layout/header"
import Herosection from "@/components/solutions/hero"
import Capabilities from "@/components/solutions/capabilities"
import Walkthrough from "@/components/solutions/walkthrough"

export default function SolutionsPage() {
  return (
    <main className="bg-white">
      <Header />
      {/* Hero Section */}
      <Herosection />

      {/* Core Capabilities Section */}
      <Capabilities />

      {/* Scalable SaaS Model Section */}
      <Walkthrough />
    </main>
  )
} 