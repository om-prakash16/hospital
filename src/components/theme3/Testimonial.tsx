export default function Testimonial() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 my-12 md:my-20">
      <div className="bg-white rounded-[18px] overflow-hidden flex flex-col md:flex-row items-center shadow-sm border border-gray-100">
        
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img 
            src="/medicloud/images/about-img.png" 
            alt="Testimonial" 
            className="w-full h-[350px] object-cover"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 p-8 md:p-12 text-center">
          <span className="text-[#0ea5e9] font-semibold tracking-wide uppercase text-sm block mb-2">
            Testimonial
          </span>
          <h3 className="font-bold text-2xl md:text-3xl mb-4 text-gray-900">
            What Customer Says
          </h3>
          
          <div className="text-4xl text-[#0ea5e9] mb-2 leading-none">❝</div>
          
          <p className="text-gray-500 italic max-w-[420px] mx-auto text-lg mb-6">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua."
          </p>

          <div className="flex justify-center items-center gap-3">
            <img 
              src="/theme3/images/pro.jpg" 
              alt="Farah abuassi" 
              className="w-12 h-12 rounded-full object-cover shadow-sm"
            />
            <div className="text-left">
              <h6 className="m-0 font-bold text-gray-900 text-base">Farah abuassi</h6>
              <small className="text-gray-500">Entrepreneur</small>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
