import Link from 'next/link';

export default function Header() {
  return (
    <header className="absolute top-0 w-full z-50">
      <nav className="py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          
          {/* Brand */}
        <Link href="/theme3" className="flex items-center gap-2 text-white">
          <div className="flex flex-col">
            <span className="font-bold text-xl leading-tight">SHUBHAM HOSPITAL</span>
            <span className="font-semibold text-xs tracking-wider uppercase text-blue-100">Dr. Ashok Gupta, Rohini</span>
          </div>
        </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-6 m-0 p-0 list-none">
            <li><Link href="/theme3" className="text-[#f5f6ff] hover:text-white font-medium transition-colors">Home</Link></li>
            <li><Link href="#" className="text-[#f5f6ff] hover:text-white font-medium transition-colors">Why Us</Link></li>
            <li><Link href="#" className="text-[#f5f6ff] hover:text-white font-medium transition-colors">Services</Link></li>
            <li><Link href="#" className="text-[#f5f6ff] hover:text-white font-medium transition-colors">Team</Link></li>
            <li><Link href="#" className="text-[#f5f6ff] hover:text-white font-medium transition-colors">Pricing</Link></li>
            <li><Link href="#" className="text-[#f5f6ff] hover:text-white font-medium transition-colors">Solutions</Link></li>
          </ul>

          <Link href="/book" className="hidden lg:block bg-[#f5f6ff] text-[#0ea5e9] px-6 py-2.5 rounded-lg font-medium hover:-translate-y-0.5 transition-transform duration-300">
            Book Now
          </Link>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 6l16 0" />
              <path d="M4 12l16 0" />
              <path d="M4 18l16 0" />
            </svg>
          </button>

        </div>
      </nav>
    </header>
  );
}
