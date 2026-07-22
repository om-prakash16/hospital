'use client';

import PageHero from '@/components/PageHero';

export default function BookAppointment() {
  return (
    <div className="min-h-screen bg-[#f3f4fb] font-sans flex flex-col">
      <PageHero 
        title="Book an Appointment" 
        description="Schedule your visit at Shubham Hospital - Dr. Ashok Gupta, Rohini"
      />

      <div className="flex-1 w-full max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white py-10 px-6 shadow-sm border border-gray-100 rounded-3xl sm:px-12">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <div className="mt-1">
                <input id="name" name="name" type="text" required className="appearance-none block w-full px-4 py-3 border border-gray-200 bg-[#f9fafb] rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] sm:text-sm transition-all" />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <div className="mt-1">
                <input id="phone" name="phone" type="tel" required className="appearance-none block w-full px-4 py-3 border border-gray-200 bg-[#f9fafb] rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] sm:text-sm transition-all" />
              </div>
            </div>
            
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                Preferred Date
              </label>
              <div className="mt-1">
                <input id="date" name="date" type="date" required className="appearance-none block w-full px-4 py-3 border border-gray-200 bg-[#f9fafb] rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] sm:text-sm transition-all" />
              </div>
            </div>

            <div>
              <label htmlFor="department" className="block text-sm font-medium text-gray-700">
                Department
              </label>
              <div className="mt-1">
                <select id="department" name="department" className="appearance-none block w-full px-4 py-3 border border-gray-200 bg-[#f9fafb] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] sm:text-sm transition-all">
                  <option>General Consultation</option>
                  <option>Cardiology</option>
                  <option>Pediatrics</option>
                  <option>Orthopedics</option>
                </select>
              </div>
            </div>

            <div className="pt-4">
              <button type="submit" className="w-full flex justify-center py-4 px-4 border border-transparent shadow-md text-sm font-bold rounded-xl text-white bg-[#0ea5e9] hover:bg-[#0284c7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0ea5e9] transition-colors">
                Confirm Appointment
              </button>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  );
}
