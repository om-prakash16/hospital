export default function Features() {
  return (
    <section className="py-16 md:py-24 overflow-hidden bg-white" id="features">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="flex justify-center mb-16">
          <div className="w-full xl:w-1/2 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Clinical Excellence Integrated</h2>
            <p className="text-lg text-gray-600 mb-0">
              Everything you need to provide top-tier care from anywhere in the world.
            </p>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="flex">
            <div className="bg-[#f1f3f3] rounded-2xl p-10 w-full hover:-translate-y-2 transition-transform duration-300">
              <div className="mb-8 text-[#003A43]">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth=".75" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4" />
                  <path d="M3 8a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -8" />
                  <path d="M7 12l4 0" />
                  <path d="M9 10l0 4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Video Consultations</h3>
              <p className="text-gray-600">
                HD, peer-to-peer encrypted video calls with built-in waiting rooms and screen sharing.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex">
            <div className="bg-[#f1f3f3] rounded-2xl p-10 w-full hover:-translate-y-2 transition-transform duration-300">
              <div className="mb-8 text-[#003A43]">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth=".75" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M11.5 21h-5.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6" />
                  <path d="M16 3v4" />
                  <path d="M8 3v4" />
                  <path d="M4 11h16" />
                  <path d="M15 19l2 2l4 -4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Scheduling</h3>
              <p className="text-gray-600">
                Automated booking, timezone detection, and calendar sync with Google and Outlook.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex">
            <div className="bg-[#f1f3f3] rounded-2xl p-10 w-full hover:-translate-y-2 transition-transform duration-300">
              <div className="mb-8 text-[#003A43]">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth=".75" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                  <path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2" />
                  <path d="M11.993 16.75l2.747 -2.815a1.9 1.9 0 0 0 0 -2.632a1.775 1.775 0 0 0 -2.56 0l-.183 .188l-.183 -.189a1.775 1.775 0 0 0 -2.56 0a1.899 1.899 0 0 0 0 2.632l2.738 2.825l.001 -.009" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Digital EHR</h3>
              <p className="text-gray-600">
                Structured clinical notes, ICD-10 coding, and longitudinal patient health records.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex">
            <div className="bg-[#f1f3f3] rounded-2xl p-10 w-full hover:-translate-y-2 transition-transform duration-300">
              <div className="mb-8 text-[#003A43]">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 44.3333V7H24.5C27.2848 7 29.9555 8.10625 31.9246 10.0754C33.8938 12.0445 35 14.7152 35 17.5C35 20.2848 33.8938 22.9555 31.9246 24.9246C29.9555 26.8938 27.2848 28 24.5 28H14" stroke="#003A43" strokeWidth="4.66667" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M44.3334 49L23.3334 28" stroke="#003A43" strokeWidth="4.66667" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M30.3334 49L44.3334 35" stroke="#003A43" strokeWidth="4.66667" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">ePrescriptions</h3>
              <p className="text-gray-600">
                Securely send prescriptions directly to pharmacies with automated interactions check.
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="flex">
            <div className="bg-[#f1f3f3] rounded-2xl p-10 w-full hover:-translate-y-2 transition-transform duration-300">
              <div className="mb-8 text-[#003A43]">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth=".75" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 19h-6a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5" />
                  <path d="M3 10h18" />
                  <path d="M16 19h6" />
                  <path d="M19 16l3 3l-3 3" />
                  <path d="M7.005 15h.005" />
                  <path d="M11 15h2" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Payments</h3>
              <p className="text-gray-600">
                Integrated billing, insurance claims processing, and direct patient payments.
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="flex">
            <div className="bg-[#f1f3f3] rounded-2xl p-10 w-full hover:-translate-y-2 transition-transform duration-300">
              <div className="mb-8 text-[#003A43]">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth=".75" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
                  <path d="M11 11a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  <path d="M12 12l0 2.5" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Secure & Compliant</h3>
              <p className="text-gray-600">
                SOC2 Type II, HIPAA, and GDPR compliant with data residency options.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
