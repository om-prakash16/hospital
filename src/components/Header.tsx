'use client';

import Link from 'next/link';
import { Search, ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[90px]">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <img src="/shubham_logo.png" alt="Logo" className="w-10 h-10 rounded-md object-contain" />
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-tight text-[#0F2D5E]">SHUBHAM HOSPITAL</span>
                <span className="font-semibold text-xs tracking-wider uppercase text-[#297AFF]">Dr. Ashok Gupta, Rohini</span>
              </div>
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
              href="/book" 
              className="bg-[#008B8B] text-white px-6 py-2.5 rounded-md text-[15px] font-semibold hover:bg-teal-700 transition-colors"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#102A43] hover:text-[#008B8B] focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-[90px] left-0 w-full bg-white border-t border-gray-100 shadow-xl">
          <div className="flex flex-col px-4 py-6 space-y-5">
            <Link href="/" onClick={() => setIsOpen(false)} className="text-[16px] font-bold text-[#008B8B]">Home</Link>
            <Link href="#doctors" onClick={() => setIsOpen(false)} className="text-[16px] font-semibold text-[#102A43]">Doctors</Link>
            <Link href="#departments" onClick={() => setIsOpen(false)} className="text-[16px] font-semibold text-[#102A43]">Departments</Link>
            <Link href="#services" onClick={() => setIsOpen(false)} className="text-[16px] font-semibold text-[#102A43]">Services</Link>
            <Link href="#patients" onClick={() => setIsOpen(false)} className="text-[16px] font-semibold text-[#102A43]">Patients</Link>
            <Link href="#about" onClick={() => setIsOpen(false)} className="text-[16px] font-semibold text-[#102A43]">About Us</Link>
            <Link href="#contact" onClick={() => setIsOpen(false)} className="text-[16px] font-semibold text-[#102A43]">Contact</Link>
            
            <div className="pt-4 border-t border-gray-100 flex flex-col gap-4">
              <Link 
                href="/book" 
                onClick={() => setIsOpen(false)}
                className="bg-[#008B8B] text-white px-6 py-3 rounded-md text-[16px] font-semibold text-center hover:bg-teal-700 transition-colors"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
