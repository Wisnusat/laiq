import React from "react";

function Culture() {
  return (
    <section className="bg-[#054d90] py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-white text-3xl font-normal mb-6">
              Culture Values
            </h2>
          </div>
          <div className="flex flex-row items-start gap-8">
            <div className="flex flex-col items-center text-white text-2xl font-normal tracking-widest mr-4">
              <span>L</span>
              <span>A</span>
              <span>I</span>
              <span>Q</span>
            </div>
            <div className="text-white text-lg font-normal space-y-2">
              <div>Learn continuously</div>
              <div>Adapt with purpose</div>
              <div>Innovate with integrity</div>
              <div>Quality in everything we do</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Culture;
