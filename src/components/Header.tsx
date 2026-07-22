import Link from 'next/link';
import { Search, ChevronDown, PlusSquare } from 'lucide-react';
import ThemeSwitcher from './ThemeSwitcher';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-[var(--color-border)] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-white border-2 border-[var(--color-primary)] rounded-lg flex items-center justify-center text-[var(--color-primary)] font-bold">
            <PlusSquare size={22} className="fill-current text-[var(--color-primary)]" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-[#1E3A8A] tracking-tight leading-none">Medicare+</span>
            <span className="text-[10px] text-gray-500 font-medium tracking-widest mt-1 uppercase">Care That Cares</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 h-full">
          <Link href="/" className="text-sm font-bold text-[#1E3A8A]">Home</Link>
          <div className="relative h-full flex items-center">
            <Link href="/doctors" className="text-sm font-bold text-[var(--color-primary)]">Doctors</Link>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[var(--color-primary)] rounded-t-md"></div>
          </div>
          <Link href="/departments" className="text-sm font-bold text-[#1E3A8A] hover:text-[var(--color-primary)] transition-colors">Departments</Link>
          <Link href="/services" className="text-sm font-bold text-[#1E3A8A] hover:text-[var(--color-primary)] transition-colors">Services</Link>
          <Link href="/patients" className="text-sm font-bold text-[#1E3A8A] hover:text-[var(--color-primary)] transition-colors">Patients</Link>
          <Link href="/about" className="text-sm font-bold text-[#1E3A8A] hover:text-[var(--color-primary)] transition-colors">About Us</Link>
          <Link href="/contact" className="text-sm font-bold text-[#1E3A8A] hover:text-[var(--color-primary)] transition-colors">Contact</Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          <ThemeSwitcher />
          
          <button className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">
            <Search size={20} />
          </button>
          
          <div className="hidden sm:flex items-center gap-1 cursor-pointer text-[var(--color-text-dark)] font-medium text-sm">
            EN <ChevronDown size={16} />
          </div>

          <button className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white text-sm font-medium px-6 py-2.5 rounded-md transition-colors shadow-sm">
            Book Appointment
          </button>
        </div>
      </div>
    </header>
  );
}
