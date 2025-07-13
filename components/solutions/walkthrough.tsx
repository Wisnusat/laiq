import React from "react";
import { Button } from "../ui/button";
import Footer from "../layout/footer";

function Walkthrough() {
  return (
    <section
      className="relative min-h-[400px] flex items-center bg-cover bg-center"
      style={{ backgroundImage: "url(/images/alt-bg.jpg)" }}
    >
      {/* Blue overlay */}
      <div
        className="absolute inset-0 bg-[#054d90] opacity-50 z-0"
        aria-hidden="true"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col gap-12 z-10">
        <div className="max-w-3xl">
          <h2 className="text-white text-4xl font-normal mb-6">
            Scalable SaaS Model
          </h2>
          <ul className="text-white text-base space-y-1 pl-5 list-disc mb-8">
            <li>One-time setup</li>
            <li>Modular pricing (based on users and features)</li>
            <li>Seamless expansion across plants</li>
            <li>Optional customization for enterprise clients</li>
          </ul>
          <Button className="bg-white text-[#054d90] hover:bg-gray-100 font-bold rounded-full px-8 py-3 text-sm uppercase tracking-wide border-0">
            Schedule a Walkthrough
          </Button>
        </div>
        <Footer isTransparent={true} />
      </div>
    </section>
  );
}

export default Walkthrough;
