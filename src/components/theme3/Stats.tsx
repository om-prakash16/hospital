export default function Stats() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="rounded-[18px] text-white p-8 md:p-12"
          style={{ background: 'linear-gradient(135deg, #0284c7, #38bdf8)' }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            
            {/* Stat 1 */}
            <div>
              <div className="text-[36px] text-[#f5f6ff] mb-2 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                  <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                </svg>
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-amber-50/90 mb-1">1452</h3>
              <p className="text-sm text-amber-50/80 mb-0">Happy Patients</p>
            </div>

            {/* Stat 2 */}
            <div>
              <div className="text-[36px] text-[#f5f6ff] mb-2 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                  <path d="M9 17h6" />
                  <path d="M9 13h6" />
                </svg>
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-amber-50/90 mb-1">342</h3>
              <p className="text-sm text-amber-50/80 mb-0">Online Appointments</p>
            </div>

            {/* Stat 3 */}
            <div>
              <div className="text-[36px] text-[#f5f6ff] mb-2 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 9m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
                  <path d="M12 15l3.4 5.89l1.598 -3.233l3.598 .232l-3.4 -5.889" />
                  <path d="M6.802 12l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889" />
                </svg>
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-amber-50/90 mb-1">15</h3>
              <p className="text-sm text-amber-50/80 mb-0">Years of Experience</p>
            </div>

            {/* Stat 4 */}
            <div>
              <div className="text-[36px] text-[#f5f6ff] mb-2 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 11v-4a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4" />
                  <path d="M4 11h16a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-5a1 1 0 0 1 1 -1z" />
                  <path d="M10 11v5" />
                  <path d="M14 11v5" />
                  <path d="M8 7v4" />
                  <path d="M16 7v4" />
                </svg>
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-amber-50/90 mb-1">20</h3>
              <p className="text-sm text-amber-50/80 mb-0">Doctors & Staff</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
