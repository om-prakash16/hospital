import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#003A43] pt-16 md:pt-24 text-white/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Links */}
        <div className="flex flex-wrap -mx-4">
          
          <div className="w-full lg:w-1/4 px-4 mb-10 lg:mb-0">
            <h2 className="text-2xl font-bold text-white mb-2 leading-tight">SHUBHAM HOSPITAL</h2>
            <p className="text-sm font-semibold text-[#FF8D6D] mb-4 tracking-wider uppercase">Dr. Ashok Gupta, Rohini</p>
            <p className="text-base text-gray-400">
              Empowering healthcare providers with modern, secure, and intuitive digital clinic tools.
            </p>
          </div>

          <div className="w-1/2 lg:w-1/4 px-4 mb-10 lg:mb-0">
            <h3 className="text-xl font-semibold text-white mb-6">Product</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Telehealth Video</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Patient Portal</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Smart Billing</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">ePrescriptions</Link></li>
            </ul>
          </div>

          <div className="w-1/2 lg:w-1/4 px-4 mb-10 lg:mb-0">
            <h3 className="text-xl font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Press Kit</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Security</Link></li>
            </ul>
          </div>

          <div className="w-1/2 lg:w-1/4 px-4 mb-10 lg:mb-0">
            <h3 className="text-xl font-semibold text-white mb-6">Legal</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">HIPAA Compliance</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">GDPR</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 md:mt-24 py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm gap-4 text-gray-400">
          <div className="text-center md:text-left">
            <p className="mb-2">© 2026 MediCloud. HIPAA Compliant & Secure.</p>
            <p className="mb-0">
              All rights reserved by <a href="#" className="font-bold text-white hover:underline">Codescandy</a> • Distributed by <a href="#" className="font-bold text-white hover:underline">ThemeWagon</a>
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="mb-0">
              System Status: <span className="text-white font-medium ml-1">Operational</span>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
