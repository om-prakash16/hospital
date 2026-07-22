'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 w-full z-50">
      <nav className="py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          
          {/* Brand */}
          <Link href="/theme3" className="flex items-center gap-2 group">
            <img src="/shubham_logo.png" alt="Logo" className="w-10 h-10 rounded-md object-contain" />
            <div className="flex flex-col">
              <span className="font-bold text-xl leading-tight text-white">SHUBHAM HOSPITAL</span>
              <span className="font-semibold text-xs tracking-wider uppercase text-blue-100">Dr. Ashok Gupta, Rohini</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-6 m-0 p-0 list-none">
            <li><Link href="/theme3" className="text-[#f5f6ff] hover:text-white font-medium transition-colors">Home</Link></li>
            <li><Link href="#why-us" className="text-[#f5f6ff] hover:text-white font-medium transition-colors">Why Us</Link></li>
            <li><Link href="#services" className="text-[#f5f6ff] hover:text-white font-medium transition-colors">Services</Link></li>
            <li><Link href="#team" className="text-[#f5f6ff] hover:text-white font-medium transition-colors">Team</Link></li>
            <li><Link href="#pricing" className="text-[#f5f6ff] hover:text-white font-medium transition-colors">Pricing</Link></li>
          </ul>

          <Link href="/book" className="hidden lg:block bg-[#f5f6ff] text-[#0ea5e9] px-6 py-2.5 rounded-lg font-medium hover:-translate-y-0.5 transition-transform duration-300">
            Book Now
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white focus:outline-none p-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              {isOpen ? (
                <>
                  <path d="M18 6l-12 12" />
                  <path d="M6 6l12 12" />
                </>
              ) : (
                <>
                  <path d="M4 6l16 0" />
                  <path d="M4 12l16 0" />
                  <path d="M4 18l16 0" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-[#0ea5e9] border-t border-white/20 shadow-xl">
            <div className="flex flex-col px-4 py-4 space-y-4">
              <Link href="/theme3" onClick={() => setIsOpen(false)} className="text-white font-medium hover:text-blue-100">Home</Link>
              <Link href="#why-us" onClick={() => setIsOpen(false)} className="text-white font-medium hover:text-blue-100">Why Us</Link>
              <Link href="#services" onClick={() => setIsOpen(false)} className="text-white font-medium hover:text-blue-100">Services</Link>
              <Link href="#team" onClick={() => setIsOpen(false)} className="text-white font-medium hover:text-blue-100">Team</Link>
              <Link href="#pricing" onClick={() => setIsOpen(false)} className="text-white font-medium hover:text-blue-100">Pricing</Link>
              <Link href="/book" onClick={() => setIsOpen(false)} className="w-full text-center bg-white text-[#0ea5e9] px-6 py-3 rounded-lg font-bold shadow-md">
                Book Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
