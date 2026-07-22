export default function AppointmentBar() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-[50px]">
      <div className="bg-[#f5f6ff] rounded-[15px] p-5 md:p-6 shadow-[0_20px_35px_rgba(0,0,0,0.08)]">
        <form className="flex flex-wrap lg:flex-nowrap gap-4 items-end">
          
          <div className="w-full sm:w-[calc(50%-8px)] lg:w-auto lg:flex-1">
            <label className="block font-semibold text-gray-700 mb-2">Name</label>
            <input 
              type="text" 
              className="w-full h-10 rounded-xl border border-gray-300 px-3 focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9] transition-colors" 
              placeholder="Your Name" 
            />
          </div>

          <div className="w-full sm:w-[calc(50%-8px)] lg:w-auto lg:flex-1">
            <label className="block font-semibold text-gray-700 mb-2">Email</label>
            <input 
              type="email" 
              className="w-full h-10 rounded-xl border border-gray-300 px-3 focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9] transition-colors" 
              placeholder="Your Email" 
            />
          </div>

          <div className="w-full sm:w-[calc(50%-8px)] lg:w-auto lg:flex-1">
            <label className="block font-semibold text-gray-700 mb-2">Service</label>
            <select className="w-full h-10 rounded-xl border border-gray-300 px-3 bg-white focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9] transition-colors">
              <option>Select Service</option>
              <option>Dental Cleaning</option>
              <option>Dental Implants</option>
              <option>Orthodontics</option>
              <option>Cosmetic Dentistry</option>
            </select>
          </div>

          <div className="w-full sm:w-[calc(50%-8px)] lg:w-auto lg:flex-1">
            <label className="block font-semibold text-gray-700 mb-2">Date</label>
            <input 
              type="date" 
              className="w-full h-10 rounded-xl border border-gray-300 px-3 focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9] transition-colors" 
            />
          </div>

          <div className="w-full lg:w-1/5 flex items-end">
            <button 
              type="button" 
              className="w-full bg-[#0ea5e9] text-white font-semibold h-11 rounded-full hover:bg-opacity-90 hover:-translate-y-0.5 transition-all duration-200 shadow-md"
            >
              Book Appointment
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}
