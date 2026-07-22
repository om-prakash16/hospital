'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/medicloud" className="flex items-center gap-2">
            <div className="flex flex-col">
              <span className="font-bold text-xl text-[#003A43] leading-tight">SHUBHAM HOSPITAL</span>
              <span className="font-semibold text-xs text-[#FF8D6D] tracking-wider uppercase">Dr. Ashok Gupta, Rohini</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-900 font-semibold hover:text-[#FF8D6D] transition-colors">Features</Link>
            <Link href="#howItWork" className="text-gray-900 font-semibold hover:text-[#FF8D6D] transition-colors">How It Work</Link>
            <Link href="#testimonials" className="text-gray-900 font-semibold hover:text-[#FF8D6D] transition-colors">Testimonials</Link>
            <Link href="#pricing" className="text-gray-900 font-semibold hover:text-[#FF8D6D] transition-colors">Pricing</Link>
            <Link href="#faq" className="text-gray-900 font-semibold hover:text-[#FF8D6D] transition-colors">Faq</Link>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button className="bg-[#FF8D6D] text-white px-6 py-2.5 rounded-full font-medium hover:bg-orange-500 transition-colors">
              Get a Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 p-2"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <Link href="#features" className="block px-3 py-2 text-gray-900 font-semibold">Features</Link>
            <Link href="#howItWork" className="block px-3 py-2 text-gray-900 font-semibold">How It Work</Link>
            <Link href="#testimonials" className="block px-3 py-2 text-gray-900 font-semibold">Testimonials</Link>
            <Link href="#pricing" className="block px-3 py-2 text-gray-900 font-semibold">Pricing</Link>
            <Link href="#faq" className="block px-3 py-2 text-gray-900 font-semibold">Faq</Link>
            <div className="mt-4 px-3">
              <button className="w-full bg-[#FF8D6D] text-white px-6 py-2.5 rounded-full font-medium">
                Get a Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
