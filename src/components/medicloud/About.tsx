export default function About() {
  return (
    <section className="py-16 md:py-24 overflow-hidden bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col xl:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Image */}
          <div className="w-full xl:w-7/12">
            <div className="relative">
              <img 
                src="/medicloud/images/about-img.png" 
                alt="About MediCloud" 
                className="w-full h-auto object-cover rounded-2xl" 
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full xl:w-5/12 xl:pl-8 mt-8 xl:mt-0">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Crystal Clear Care
            </h2>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Experience zero-latency video consultations designed for clinical accuracy.
              Share medical records and record sessions with one click.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="text-[#006E2F]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
                  </svg>
                </span>
                <span className="text-lg text-gray-800">4K Resolution Video Support</span>
              </li>

              <li className="flex items-center gap-3">
                <span className="text-[#006E2F]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
                  </svg>
                </span>
                <span className="text-lg text-gray-800">Built-in AI Scribe for clinical notes</span>
              </li>

              <li className="flex items-center gap-3">
                <span className="text-[#006E2F]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
                  </svg>
                </span>
                <span className="text-lg text-gray-800">Integrated vitals monitoring</span>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </section>
  );
}
