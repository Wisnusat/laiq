import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import HeroSection from "@/components/home/hero"
import ProblemSection from "@/components/home/problem"
import WhyLaiqSection from "@/components/home/why"
import BackedBySection from "@/components/home/backed"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemSection />
      <WhyLaiqSection />
      <BackedBySection />
      <Footer isTransparent={false} />
    </main>
  )
}
