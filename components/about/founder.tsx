import React from "react";

function Founder() {
  return (
    <section
      className="relative min-h-[400px] flex items-center bg-cover bg-center"
      style={{ backgroundImage: "url(/images/alt-bg.jpg)" }}
    >
      <div
        className="absolute inset-0 bg-[#054d90] opacity-50 z-0"
        aria-hidden="true"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-white text-3xl font-normal mb-6">
              Co-Founders
            </h2>
            <p className="text-white text-xl italic font-semibold mb-2">
              Dr. Lan Song Oscar – CTO
            </p>
            <p className="text-white text-base font-normal mb-2">
              12 patents | $13M+ raised | AIoT/deep-tech expert
            </p>
            <p className="text-white text-base font-normal mb-2">
              Built and deployed industrial AI at scale across Asia
            </p>
            <p className="text-white text-base font-normal">
              PhD in Integrated Circuit Design (NTU)
            </p>
          </div>
          <div>
            <p className="text-white text-xl italic font-semibold mb-2">
              Syed Ali Ridha Madihid – CEO
            </p>
            <p className="text-white text-base font-normal mb-2">
              3x logistics tech founder | 2 successful exits (Janio, Luwjistik)
            </p>
            <p className="text-white text-base font-normal mb-2">
              Scaled regional SaaS businesses to profitability
            </p>
            <p className="text-white text-base font-normal">
              Board member and tech innovator with strong SEA roots
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Founder;
