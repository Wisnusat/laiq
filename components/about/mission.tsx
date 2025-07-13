import React from "react";

function Mission() {
  return (
    <section className="bg-[#054d90] py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-white text-3xl font-normal mb-6">
              Our Mission
            </h2>
            <p className="text-white text-lg font-normal">
              To transform raw factory data into intelligent uptime, preserving
              knowledge, empowering engineers, and making every machine more
              reliable — without expensive sensors or heavy systems.
            </p>
          </div>
          <div>
            <h2 className="text-white text-3xl font-normal mb-6">
              Our Name: LAIQ
            </h2>
            <p className="text-white text-lg font-normal">
              LAIQ stands for Lan + Ali + Intelligence Quotient — a tribute to
              our founders and a symbol of clarity, continuous learning, and
              intelligent operations. In Arabic, &quot;Laiq&quot; (لائق) also
              means &quot;worthy&quot; — fitting for industrial operations that
              can’t afford to fail.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
