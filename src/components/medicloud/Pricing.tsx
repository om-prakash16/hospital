export default function Pricing() {
  return (
    <section className="py-16 md:py-24 overflow-hidden bg-white" id="pricing">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="flex justify-center mb-16">
          <div className="w-full xl:w-1/2 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Flexible Plans for Every Scale
            </h2>
            <p className="text-lg text-gray-600 mb-0">
              Everything you need to provide top-tier care from anywhere in the world.
            </p>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="flex justify-center">
          <div className="w-full xl:w-10/12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Starter Plan */}
              <div className="flex">
                <div className="bg-[#f1f3f3] rounded-2xl p-8 w-full">
                  <span className="text-sm font-medium tracking-widest text-gray-500 uppercase block mb-4">Starter</span>
                  <div className="mb-6 flex items-baseline text-gray-900">
                    <span className="text-5xl font-bold">$49</span>
                    <span className="text-lg text-gray-500 ml-1">/mo</span>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3">
                      <span className="text-[#006E2F]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M5 12l5 5l10 -10" />
                        </svg>
                      </span>
                      <span className="text-gray-700">1 Provider</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-[#006E2F]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M5 12l5 5l10 -10" />
                        </svg>
                      </span>
                      <span className="text-gray-700">Unlimited Consultations</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-[#006E2F]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M5 12l5 5l10 -10" />
                        </svg>
                      </span>
                      <span className="text-gray-700">Basic EHR</span>
                    </li>
                    <li className="flex items-center gap-3 opacity-50">
                      <span className="text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M18 6l-12 12" />
                          <path d="M6 6l12 12" />
                        </svg>
                      </span>
                      <span className="text-gray-500">AI Note Assistant</span>
                    </li>
                  </ul>
                  
                  <div className="mt-auto pt-6">
                    <a href="#" className="block w-full text-center bg-white text-gray-900 border-2 border-gray-200 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors">
                      Select Plan
                    </a>
                  </div>
                </div>
              </div>

              {/* Professional Plan (Popular) */}
              <div className="flex relative mt-4 md:mt-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-4 z-10">
                  <span className="bg-[#FF8D6D] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
                <div className="bg-white rounded-2xl p-8 w-full border-2 border-[#FF8D6D] shadow-xl relative z-0 flex flex-col">
                  <span className="text-sm font-medium tracking-widest text-[#FF8D6D] uppercase block mb-4">Professional</span>
                  <div className="mb-6 flex items-baseline text-gray-900">
                    <span className="text-5xl font-bold">$129</span>
                    <span className="text-lg text-gray-500 ml-1">/mo</span>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3">
                      <span className="text-[#FF8D6D]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M5 12l5 5l10 -10" />
                        </svg>
                      </span>
                      <span className="text-gray-700">Up to 5 Providers</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-[#FF8D6D]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M5 12l5 5l10 -10" />
                        </svg>
                      </span>
                      <span className="text-gray-700">Full EHR & ePrescriptions</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-[#FF8D6D]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M5 12l5 5l10 -10" />
                        </svg>
                      </span>
                      <span className="text-gray-700">Custom Branding</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-[#FF8D6D]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M5 12l5 5l10 -10" />
                        </svg>
                      </span>
                      <span className="text-gray-700">AI Clinical Assistant</span>
                    </li>
                  </ul>
                  
                  <div className="mt-auto pt-6">
                    <a href="#" className="block w-full text-center bg-[#FF8D6D] text-white px-6 py-3 rounded-full font-medium hover:bg-orange-500 transition-colors">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>

              {/* Enterprise Plan */}
              <div className="flex">
                <div className="bg-[#f1f3f3] rounded-2xl p-8 w-full flex flex-col">
                  <span className="text-sm font-medium tracking-widest text-gray-500 uppercase block mb-4">Enterprise</span>
                  <div className="mb-6 flex items-baseline text-gray-900">
                    <span className="text-5xl font-bold">Custom</span>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3">
                      <span className="text-[#006E2F]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M5 12l5 5l10 -10" />
                        </svg>
                      </span>
                      <span className="text-gray-700">Unlimited Providers</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-[#006E2F]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M5 12l5 5l10 -10" />
                        </svg>
                      </span>
                      <span className="text-gray-700">Dedicated Success Manager</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-[#006E2F]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M5 12l5 5l10 -10" />
                        </svg>
                      </span>
                      <span className="text-gray-700">API & Webhook Access</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-[#006E2F]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M5 12l5 5l10 -10" />
                        </svg>
                      </span>
                      <span className="text-gray-700">On-Prem Data Hosting</span>
                    </li>
                  </ul>
                  
                  <div className="mt-auto pt-6">
                    <a href="#" className="block w-full text-center bg-white text-gray-900 border-2 border-gray-200 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors">
                      Contact Sales
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
