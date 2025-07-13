import Header from "@/components/layout/header";

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen">
      <Header />
      <section
        className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center md:p-0 p-8"
        style={{ backgroundImage: "url(/images/alt-bg.jpg)" }}
      >
        <div
          className="absolute inset-0 bg-[#054d90] opacity-50 z-0"
          aria-hidden="true"
        />
        <div className="flex flex-col items-center justify-center w-full h-full py-24 z-10">
          <div className="flex flex-col md:flex-row items-stretch justify-center w-full max-w-4xl rounded-sm overflow-hidden bg-transparent">
            {/* Where We Operate Card */}
            <div className="bg-white px-8 py-10 w-full md:w-1/2 flex flex-col flex-1 justify-center rounded-none">
              <h2 className="text-4xl md:text-5xl font-normal mb-6 leading-tight">Where We<br />Operate</h2>
              <div className="text-lg md:text-xl font-bold mb-4">HEADQUARTERS: SINGAPORE</div>
              <div className="text-lg md:text-xl font-normal">Core Markets: Malaysia, Indonesia, Philippines</div>
            </div>
            {/* Contact Us Card */}
            <div className="bg-[#054d90] px-8 py-10 w-full md:w-1/2 flex flex-col flex-1 justify-center rounded-none">
              <h2 className="text-4xl md:text-5xl font-normal text-white mb-6 leading-tight">Contact Us</h2>
              <div className="text-white text-lg md:text-xl font-medium uppercase mb-4 tracking-wide">INTERESTED IN PARTNERING OR PILOTING LAIQ?</div>
              <div className="text-white text-lg md:text-xl font-medium uppercase tracking-wide">EMAIL US AT HELLO@LAIQ.AI</div>
            </div>
          </div>
          {/* Buttons */}
          <div className="flex flex-col gap-6 mt-12 w-full max-w-md">
            <button className="w-full bg-white text-[#054d90] font-bold rounded-full py-4 text-base uppercase tracking-wide shadow-md hover:bg-gray-100 transition">
              Book a Demo
            </button>
            <button className="w-full bg-white text-[#054d90] font-bold rounded-full py-4 text-base uppercase tracking-wide shadow-md hover:bg-gray-100 transition">
              Download Investor Summary
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
