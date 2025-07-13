import React from "react";

function Herosection() {
  return (
    <section
      className="relative min-h-[500px] flex items-center bg-cover bg-center"
      style={{ backgroundImage: "url(/images/alt-bg.jpg)" }}
    >
      {/* Blue overlay */}
      <div
        className="absolute inset-0 bg-[#054d90] opacity-50 z-0"
        aria-hidden="true"
      />
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="max-w-3xl">
          <p className="text-white text-lg mb-4 font-normal">
            From Reactive to Predictive Without Sensors
          </p>
          <h1 className="text-white text-5xl md:text-6xl font-normal mb-6">
            The LAIQ Engine
          </h1>
          <p className="text-white text-lg mb-6 max-w-2xl">
            An LLM-powered maintenance assistant trained on thousands of real
            industrial workflows.
          </p>
          <ul className="text-white text-base space-y-1 pl-5 list-disc">
            <li>Knowledge vectorization</li>
            <li>Failure physics and root cause indexing</li>
            <li>Lifetime modeling and prognostic insights</li>
            <li>Dynamic SOP generation</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Herosection;
