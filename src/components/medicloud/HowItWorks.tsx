export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-[#003A43] text-white overflow-hidden" id="howItWork">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="flex justify-center text-center mb-16">
          <div className="w-full xl:w-2/3">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get started with MediCloud in 3 easy steps
            </h2>
            <p className="text-lg text-gray-200 xl:px-12 mb-0">
              Simple, supported, and designed to fit the way you work.
              From setup to go-live, we'll guide you every step so your
              practice sees value from day one.
            </p>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          
          {/* Step 1 */}
          <div className="flex flex-col text-center items-center">
            <div className="w-20 h-20 rounded-full bg-white text-gray-900 border-[6px] border-[#FF8D6D] border-opacity-25 flex items-center justify-center font-bold text-2xl mb-8 relative z-10">
              1
            </div>
            <div className="px-6">
              <h3 className="text-3xl font-bold text-white mb-4">Sign Up</h3>
              <p className="text-gray-200">
                Create your provider profile and customize your clinic branding.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col text-center items-center">
            <div className="w-20 h-20 rounded-full bg-white text-gray-900 border-[6px] border-[#FF8D6D] border-opacity-25 flex items-center justify-center font-bold text-2xl mb-8 relative z-10">
              2
            </div>
            <div className="px-6">
              <h3 className="text-3xl font-bold text-white mb-4">Add Staff</h3>
              <p className="text-gray-200">
                Invite your team of doctors, specialists, and front-desk admins.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col text-center items-center">
            <div className="w-20 h-20 rounded-full bg-[#FF8D6D] text-white border-[6px] border-white flex items-center justify-center font-bold text-2xl mb-8 relative z-10 shadow-lg shadow-[#FF8D6D]/20">
              3
            </div>
            <div className="px-6">
              <h3 className="text-3xl font-bold text-white mb-4">Start Consults</h3>
              <p className="text-gray-200">
                Begin hosting secure consultations and managing patient care.
              </p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <a href="#" className="bg-[#FF8D6D] text-white px-8 py-3.5 rounded-full font-medium hover:bg-orange-500 transition-colors text-lg">
            Get a Demo
          </a>
          <a href="#" className="bg-white text-gray-900 px-8 py-3.5 rounded-full font-medium hover:bg-gray-50 transition-colors text-lg">
            Take a Quick tour
          </a>
        </div>
        
      </div>
    </section>
  );
}
