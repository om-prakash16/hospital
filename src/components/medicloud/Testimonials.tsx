export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-[#f1f3f3] overflow-hidden" id="testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="flex justify-center mb-16">
          <div className="w-full xl:w-1/2 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What success looks like with Tebra
            </h2>
            <p className="text-lg text-gray-600 mb-0">
              Our clients don't just work with us, they grow with us. Here's what a few of our satisfied customers had
              to say about their experience with MediCloud.
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="flex">
            <div className="bg-white rounded-2xl p-8 w-full shadow-sm">
              <div className="mb-6 text-[#0EA5E9] opacity-20">
                <svg width="43" height="30" viewBox="0 0 43 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.25 30L10 20C7.25 20 4.89583 19.0208 2.9375 17.0625C0.979167 15.1042 0 12.75 0 10C0 7.25 0.979167 4.89583 2.9375 2.9375C4.89583 0.979167 7.25 0 10 0C12.75 0 15.1042 0.979167 17.0625 2.9375C19.0208 4.89583 20 7.25 20 10C20 10.9583 19.8854 11.8438 19.6562 12.6562C19.4271 13.4688 19.0833 14.25 18.625 15L10 30H4.25ZM26.75 30L32.5 20C29.75 20 27.3958 19.0208 25.4375 17.0625C23.4792 15.1042 22.5 12.75 22.5 10C22.5 7.25 23.4792 4.89583 25.4375 2.9375C27.3958 0.979167 29.75 0 32.5 0C35.25 0 37.6042 0.979167 39.5625 2.9375C41.5208 4.89583 42.5 7.25 42.5 10C42.5 10.9583 42.3854 11.8438 42.1562 12.6562C41.9271 13.4688 41.5833 14.25 41.125 15L32.5 30H26.75Z" />
                </svg>
              </div>
              <p className="text-xl italic font-medium text-gray-800 mb-8 leading-relaxed">
                "MediCloud transformed how I manage my pediatric practice. The patient
                experience is seamless, and my no-show rates dropped by 40%."
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img src="/medicloud/images/avatar/avatar-1.jpg" alt="Dr. Sarah Jenkins" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-0">Dr. Sarah Jenkins</h3>
                  <p className="text-sm text-gray-500 mb-0">Pediatrician</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex">
            <div className="bg-white rounded-2xl p-8 w-full shadow-sm">
              <div className="mb-6 text-[#0EA5E9] opacity-20">
                <svg width="43" height="30" viewBox="0 0 43 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.25 30L10 20C7.25 20 4.89583 19.0208 2.9375 17.0625C0.979167 15.1042 0 12.75 0 10C0 7.25 0.979167 4.89583 2.9375 2.9375C4.89583 0.979167 7.25 0 10 0C12.75 0 15.1042 0.979167 17.0625 2.9375C19.0208 4.89583 20 7.25 20 10C20 10.9583 19.8854 11.8438 19.6562 12.6562C19.4271 13.4688 19.0833 14.25 18.625 15L10 30H4.25ZM26.75 30L32.5 20C29.75 20 27.3958 19.0208 25.4375 17.0625C23.4792 15.1042 22.5 12.75 22.5 10C22.5 7.25 23.4792 4.89583 25.4375 2.9375C27.3958 0.979167 29.75 0 32.5 0C35.25 0 37.6042 0.979167 39.5625 2.9375C41.5208 4.89583 42.5 7.25 42.5 10C42.5 10.9583 42.3854 11.8438 42.1562 12.6562C41.9271 13.4688 41.5833 14.25 41.125 15L32.5 30H26.75Z" />
                </svg>
              </div>
              <p className="text-xl italic font-medium text-gray-800 mb-8 leading-relaxed">
                "The HIPAA compliance and security were non-negotiable for my clinic. MediCloud
                delivered peace of mind and excellent UX."
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img src="/medicloud/images/avatar/avatar-2.jpg" alt="Dr. Mark Thompson" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-0">Dr. Mark Thompson</h3>
                  <p className="text-sm text-gray-500 mb-0">Cardiologist</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex">
            <div className="bg-white rounded-2xl p-8 w-full shadow-sm">
              <div className="mb-6 text-[#0EA5E9] opacity-20">
                <svg width="43" height="30" viewBox="0 0 43 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.25 30L10 20C7.25 20 4.89583 19.0208 2.9375 17.0625C0.979167 15.1042 0 12.75 0 10C0 7.25 0.979167 4.89583 2.9375 2.9375C4.89583 0.979167 7.25 0 10 0C12.75 0 15.1042 0.979167 17.0625 2.9375C19.0208 4.89583 20 7.25 20 10C20 10.9583 19.8854 11.8438 19.6562 12.6562C19.4271 13.4688 19.0833 14.25 18.625 15L10 30H4.25ZM26.75 30L32.5 20C29.75 20 27.3958 19.0208 25.4375 17.0625C23.4792 15.1042 22.5 12.75 22.5 10C22.5 7.25 23.4792 4.89583 25.4375 2.9375C27.3958 0.979167 29.75 0 32.5 0C35.25 0 37.6042 0.979167 39.5625 2.9375C41.5208 4.89583 42.5 7.25 42.5 10C42.5 10.9583 42.3854 11.8438 42.1562 12.6562C41.9271 13.4688 41.5833 14.25 41.125 15L32.5 30H26.75Z" />
                </svg>
              </div>
              <p className="text-xl italic font-medium text-gray-800 mb-8 leading-relaxed">
                "Scaling my mental health practice across state lines was only possible because of
                their robust licensing and scheduling tools."
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img src="/medicloud/images/avatar/avatar-3.jpg" alt="Dr. Elena Rodriguez" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-0">Dr. Elena Rodriguez</h3>
                  <p className="text-sm text-gray-500 mb-0">Psychiatrist</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
