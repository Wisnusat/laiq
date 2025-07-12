import { Card, CardContent } from "@/components/ui/card"

export default function WhyLaiqSection() {
  const features = [
    {
      title: "Sensor-less, low-friction deployment",
    },
    {
      title: "Dynamic checklists and AI-guided troubleshooting",
    },
    {
      title: "Prescriptive and prognostic maintenance",
    },
    {
      title: "Built by founders with real-world industrial and AI scale-up experience",
    },
  ]

  return (
    <section className="bg-[#054d90] py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:text-left text-center mb-8">
          <h2 className="text-4xl lg:text-5xl font-normal text-white">Why LAIQ?</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/95 rounded-2xl border-0 shadow-lg p-8 flex justify-center items-center">
              <CardContent className="p-0 text-center space-y-4">
                <h3 className="font-normal text-[#054d90] text-xl leading-tight">{feature.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
