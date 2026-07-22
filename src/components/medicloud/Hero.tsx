export default function Hero() {
  return (
    <section className="overflow-hidden bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <span className="inline-flex items-center gap-2 bg-[#003A43] text-white rounded-full px-4 py-1.5 text-sm font-medium">
              <span>
                <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.05417 7.90417L7.35 4.60833L6.51875 3.77708L4.05417 6.24167L2.82917 5.01667L1.99792 5.84792L4.05417 7.90417ZM4.66667 11.6667C3.31528 11.3264 2.19965 10.551 1.31979 9.34062C0.439931 8.13021 0 6.78611 0 5.30833V1.75L4.66667 0L9.33333 1.75V5.30833C9.33333 6.78611 8.8934 8.13021 8.01354 9.34062C7.13368 10.551 6.01806 11.3264 4.66667 11.6667ZM4.66667 10.4417C5.67778 10.1208 6.51389 9.47917 7.175 8.51667C7.83611 7.55417 8.16667 6.48472 8.16667 5.30833V2.55208L4.66667 1.23958L1.16667 2.55208V5.30833C1.16667 6.48472 1.49722 7.55417 2.15833 8.51667C2.81944 9.47917 3.65556 10.1208 4.66667 10.4417Z" fill="white" />
                </svg>
              </span>
              <span>HIPAA Compliant & Secure</span>
            </span>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mt-6 mb-6 leading-tight">
              Run Your Virtual Clinic Effortlessly
            </h1>

            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
              All-in-one telehealth platform designed for modern practices.
              Manage patients, clinical notes, and secure HD video consultations
              in one unified workspace.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#" className="bg-[#FF8D6D] text-white px-8 py-3.5 rounded-full font-medium hover:bg-orange-500 transition-colors text-lg">
                Get a Demo
              </a>
              <a href="#" className="bg-white text-[#003A43] border-2 border-[#003A43] px-8 py-3.5 rounded-full font-medium hover:bg-gray-50 transition-colors text-lg">
                Take a Quick tour
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative mt-12 lg:mt-0">
            <div className="relative inline-block">
              <img 
                src="/medicloud/images/dr-img.png" 
                alt="MediCloud Hero Image" 
                className="max-w-full h-auto relative z-10"
              />

              {/* Floating Badges */}
              <div className="absolute top-1/4 -left-8 md:left-4 z-20 animate-bounce" style={{ animationDuration: '3s' }}>
                <span className="bg-[#003A43] text-white px-6 py-3 rounded-full shadow-xl font-medium whitespace-nowrap">
                  EHR
                </span>
              </div>

              <div className="absolute top-1/2 -left-4 md:-left-8 z-20 animate-bounce" style={{ animationDuration: '4s' }}>
                <span className="bg-[#003A43] text-white px-6 py-3 rounded-full shadow-xl font-medium whitespace-nowrap">
                  Billing and Payments
                </span>
              </div>

              <div className="absolute top-1/4 -right-4 md:-right-8 z-20 animate-bounce" style={{ animationDuration: '3.5s' }}>
                <span className="bg-[#FF8D6D] text-white px-6 py-3 rounded-full shadow-xl font-medium whitespace-nowrap">
                  Patients Experience
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
