import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white pt-12 md:pt-16 pb-6 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap -mx-4 mb-10">
          
          {/* Brand & Intro */}
          <div className="w-full lg:w-1/4 px-4 mb-8 lg:mb-0">
            <div className="flex flex-col text-[#0284c7] mb-4">
              <span className="font-bold text-2xl leading-tight text-gray-900">SHUBHAM HOSPITAL</span>
              <span className="font-semibold text-xs tracking-wider uppercase text-[#38bdf8]">Dr. Ashok Gupta, Rohini</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 pr-4">
              Providing premium dental care and aesthetic solutions to help you smile with confidence.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-[#f5f6ff] text-[#0284c7] flex items-center justify-center hover:bg-[#0284c7] hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#f5f6ff] text-[#0284c7] flex items-center justify-center hover:bg-[#0284c7] hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#f5f6ff] text-[#0284c7] flex items-center justify-center hover:bg-[#0284c7] hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M16.5 7.5l0 .01" /></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-1/2 lg:w-1/4 px-4 mb-8 lg:mb-0">
            <h5 className="font-bold text-gray-900 mb-4 text-lg">Quick Links</h5>
            <ul className="list-none p-0 m-0 space-y-2">
              <li><Link href="#" className="text-gray-500 hover:text-[#0284c7] text-sm transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-[#0284c7] text-sm transition-colors">Our Doctors</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-[#0284c7] text-sm transition-colors">Appointments</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-[#0284c7] text-sm transition-colors">Pricing</Link></li>
              <li><Link href="#" className="text-gray-500 hover:text-[#0284c7] text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="w-1/2 lg:w-1/4 px-4 mb-8 lg:mb-0">
            <h5 className="font-bold text-gray-900 mb-4 text-lg">Contact</h5>
            <ul className="list-none p-0 m-0 space-y-3">
              <li className="flex items-start text-sm text-gray-600">
                <span className="text-[#0284c7] mr-2 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
                </span>
                +1 (555) 123-4567
              </li>
              <li className="flex items-start text-sm text-gray-600">
                <span className="text-[#0284c7] mr-2 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
                </span>
                info@primedental.com
              </li>
              <li className="flex items-start text-sm text-gray-600">
                <span className="text-[#0284c7] mr-2 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" /></svg>
                </span>
                123 Dental Ave, NY 10001
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="w-full lg:w-1/4 px-4">
            <h5 className="font-bold text-gray-900 mb-4 text-lg">Newsletter</h5>
            <p className="text-sm text-gray-500 mb-4">Subscribe to receive latest tips.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full h-10 px-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0284c7] text-sm transition-colors"
              />
              <button 
                type="button" 
                className="h-10 px-4 rounded-lg text-white font-medium text-sm transition-colors shrink-0"
                style={{ background: 'linear-gradient(135deg, #0284c7, #0284c7)' }}
              >
                Send
              </button>
            </form>
          </div>

        </div>

        {/* Copyright */}
        <div className="text-center pt-6 border-t border-gray-100 mt-6">
          <p className="text-sm text-gray-500 mb-0">
            &copy; 2024 Prime Dental. All rights reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
}
