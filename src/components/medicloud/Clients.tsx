export default function Clients() {
  return (
    <section className="bg-[#f1f3f3] py-12 md:py-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col xl:flex-row items-center gap-10">
          
          {/* Left Content */}
          <div className="w-full xl:w-1/3 text-center xl:text-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by</h2>
            <p className="text-sm text-gray-600 mb-0">
              We safeguard your practice with full security and HIPAA compliance.
            </p>
          </div>

          {/* Logos */}
          <div className="w-full xl:w-2/3 flex flex-wrap justify-center xl:justify-between items-center gap-8">
            <div className="w-1/3 sm:w-1/4 xl:w-1/5 flex justify-center">
              <img src="/medicloud/images/client-logo/logo-1.svg" alt="Client Logo 1" className="max-w-full h-auto opacity-75 hover:opacity-100 transition-opacity" />
            </div>
            <div className="w-1/3 sm:w-1/4 xl:w-1/5 flex justify-center">
              <img src="/medicloud/images/client-logo/logo-2.svg" alt="Client Logo 2" className="max-w-full h-auto opacity-75 hover:opacity-100 transition-opacity" />
            </div>
            <div className="w-1/3 sm:w-1/4 xl:w-1/5 flex justify-center">
              <img src="/medicloud/images/client-logo/logo-3.svg" alt="Client Logo 3" className="max-w-full h-auto opacity-75 hover:opacity-100 transition-opacity" />
            </div>
            <div className="w-1/3 sm:w-1/4 xl:w-1/5 flex justify-center">
              <img src="/medicloud/images/client-logo/logo-4.svg" alt="Client Logo 4" className="max-w-full h-auto opacity-75 hover:opacity-100 transition-opacity" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
