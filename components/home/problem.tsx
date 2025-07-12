export default function ProblemSection() {
    const problems = [
      "80%+ of industrial maintenance is still reactive",
      "$1.5M/year lost per plant in unplanned downtime",
      "Critical knowledge lives in the minds of retiring engineers",
      "SOPs, RCAs, and BDAs often go unused",
    ]
  
    return (
      <section className="bg-[#054d90] py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="flex md:flex-row flex-col items-center gap-y-4">
            <h2 className="text-white text-base font-medium text-center">
              Trusted by innovators across industrial sectors
            </h2>
            <div className="flex flex-row gap-8 md:ml-8 ml-0">
              {[...Array(4)].map((_, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-full w-16 h-10"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-normal text-white leading-tight">The Problem <br /> We Solve</h2>
              <p className="text-white/80 text-lg max-w-96">
                LAIQ fixes this by turning factory data into frontline intelligence.
              </p>
            </div>
  
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-white text-lg">{problem}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
  