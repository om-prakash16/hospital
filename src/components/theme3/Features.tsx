export default function Features() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Feature 1 */}
        <div className="text-center group">
          <div className="text-[42px] text-[#0ea5e9] mb-2 group-hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 3l1.912 5.813a2 2 0 0 0 1.272 1.272l5.816 1.912l-5.816 1.912a2 2 0 0 0 -1.272 1.272l-1.912 5.813l-1.912 -5.813a2 2 0 0 0 -1.272 -1.272l-5.816 -1.912l5.816 -1.912a2 2 0 0 0 1.272 -1.272l1.912 -5.813z" />
            </svg>
          </div>
          <h5 className="font-bold text-xl mb-2 text-gray-900">Advanced Dental Cleaning</h5>
          <p className="text-gray-500">Comfortable & safe ultrasonic cleaning treatment.</p>
        </div>

        {/* Feature 2 */}
        <div className="text-center group">
          <div className="text-[42px] text-[#0ea5e9] mb-2 group-hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h3.5" />
              <path d="M16 21v-2a4 4 0 0 0 -4 -4" />
            </svg>
          </div>
          <h5 className="font-bold text-xl mb-2 text-gray-900">Free Consultation Visit</h5>
          <p className="text-gray-500">Initial check-up & treatment planning included.</p>
        </div>

        {/* Feature 3 */}
        <div className="text-center group">
          <div className="text-[42px] text-[#0ea5e9] mb-2 group-hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 20l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.96 6.053" />
              <path d="M21 21l-6 -6" />
            </svg>
          </div>
          <h5 className="font-bold text-xl mb-2 text-gray-900">Preventive Check-Up</h5>
          <p className="text-gray-500">Diagnostic exam + oral hygiene guidance.</p>
        </div>

      </div>
    </section>
  );
}
