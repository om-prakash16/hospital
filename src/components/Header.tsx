import Link from 'next/link';
import { Search, ChevronDown } from 'lucide-react';

export default function Header() {
  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[90px]">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="font-bold text-xl leading-tight text-[#0F2D5E]">SHUBHAM HOSPITAL</span>
              <span className="font-semibold text-xs tracking-wider uppercase text-[#297AFF]">Dr. Ashok Gupta, Rohini</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center justify-center flex-1 space-x-10 pl-8">
            <Link href="/" className="text-[15px] font-bold text-[#008B8B]">Home</Link>
            <Link href="#doctors" className="text-[15px] font-semibold text-[#102A43] hover:text-[#008B8B] transition-colors">Doctors</Link>
            <Link href="#departments" className="text-[15px] font-semibold text-[#102A43] hover:text-[#008B8B] transition-colors">Departments</Link>
            <Link href="#services" className="text-[15px] font-semibold text-[#102A43] hover:text-[#008B8B] transition-colors">Services</Link>
            <Link href="#patients" className="text-[15px] font-semibold text-[#102A43] hover:text-[#008B8B] transition-colors">Patients</Link>
            <Link href="#about" className="text-[15px] font-semibold text-[#102A43] hover:text-[#008B8B] transition-colors">About Us</Link>
            <Link href="#contact" className="text-[15px] font-semibold text-[#102A43] hover:text-[#008B8B] transition-colors">Contact</Link>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-[#102A43] hover:text-[#008B8B] transition-colors">
              <Search size={18} strokeWidth={2.5} />
            </button>
            <div className="flex items-center gap-1 cursor-pointer text-[#102A43] hover:text-[#008B8B] font-bold text-[15px]">
              <span>EN</span>
              <ChevronDown size={14} strokeWidth={3} />
            </div>
            <Link 
              href="#" 
              className="bg-[#008B8B] text-white px-6 py-2.5 rounded-md text-[15px] font-semibold hover:bg-teal-700 transition-colors"
            >
              Book Appointment
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}
