import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[700px] flex items-center bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full">
        <div className="max-w-2xl">
          <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-light leading-tight mb-8">
            AI-Driven Uptime.<br />
            Engineered with<br />
            Human Grit.
          </h1>
          <p className="text-white text-lg sm:text-xl mb-12 max-w-xl">
            LAIQ empowers your maintenance teams with sensor-less, AI-powered diagnostics, troubleshooting, and prognostics — cutting downtime and preserving technical know-how.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Button size="lg" className="bg-[#054d90] hover:bg-[#054d90]/90 text-white rounded-full px-10 py-4 text-sm font-bold uppercase tracking-wide">
              REQUEST DEMO
            </Button>
            <Button
              size="lg"
              className="bg-[#054d90] hover:bg-[#054d90]/90 text-white rounded-full px-10 py-4 text-sm font-bold uppercase tracking-wide"
            >
              DOWNLOAD ONE-PAGER
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-black/10" aria-hidden="true" />
    </section>
  )
}
