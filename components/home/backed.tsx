import { Button } from "@/components/ui/button"

export default function BackedBySection() {
  const achievements = [
    "$800K committed by IMI Precision Engineering",
    "Supported by EDB New Ventures",
    "Validated with IPIC (Philippines) — USD 110K/year LOI with $500K+ value per plant",
  ]

  return (
    <section className="bg-[#054d90] py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start">
          <div className="flex md:flex-row flex-col w-full md:items-center items-start justify-between mb-12">
            <h2 className="text-4xl lg:text-5xl font-normal text-white leading-tight whitespace-nowrap md:mb-0 mb-4">
              Backed by <br /> industry leaders
            </h2>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-white text-lg">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-10 w-full">
            <Button
              size="lg"
              className="bg-white text-[#054d90] hover:bg-gray-100 font-bold rounded-full px-10 py-4 text-sm uppercase tracking-wide border-0"
            >
              EXPLORE THE PLATFORM
            </Button>
            <Button
              size="lg"
              className="bg-white text-[#054d90] hover:bg-gray-100 font-bold rounded-full px-10 py-4 text-sm uppercase tracking-wide border-0"
            >
              MEET THE TEAM
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}