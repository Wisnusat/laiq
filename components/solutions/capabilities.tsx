import React from 'react'
import Image from "next/image"
import laiqLogo from "@/public/images/logo-alt.jpg"

function Capabilities() {
  return (
    <section className="bg-[#054d90] py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-shrink-0 flex items-center justify-between w-full md:w-auto mb-8 md:mb-0">
          <Image src={laiqLogo} alt="LAIQ Logo" width={400} height={400} className="h-1/2 w-1/2 object-contain" />
        </div>
        <div className="flex-1 w-full">
          <h2 className="text-white text-4xl font-normal mb-8">Core Capabilities</h2>
          <div className="text-white text-lg space-y-6 border-l-2 border-white pl-8">
            <div>
              <span className="font-normal">Interactive Troubleshooting</span><br />
              Engineers get guided, step-by-step diagnostics tailored to machine context.
            </div>
            <div>
              <span className="font-normal">Dynamic Checklists</span><br />
              No more static PDFs — checklists adapt to historical issues and real-time sensor input.
            </div>
            <div>
              <span className="font-normal">Prognostic Health Management</span><br />
              Forecast failures, prioritize risks, and plan interventions with confidence.
            </div>
            <div>
              <span className="font-normal">Instant Report Generation</span><br />
              One-click postmortems and compliance-ready summaries.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Capabilities