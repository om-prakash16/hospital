import Link from 'next/link';
import { PlusSquare, Globe, MessageCircle, Share2, Rss, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & About */}
          <div className="md:col-span-1 pr-4">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <img src="/shubham_logo.png" alt="Logo" className="w-12 h-12 rounded-md object-contain bg-white" />
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl tracking-tight leading-none text-white">SHUBHAM HOSPITAL</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#297AFF] mt-1">Dr. Ashok Gupta, Rohini</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Providing world-class healthcare with advanced technology and a team of expert doctors dedicated to your well-being since 1998.
            </p>
            <div className="flex items-center gap-3">
              {[Globe, MessageCircle, Share2, Rss].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all shadow-sm">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold mb-6 relative pl-4 before:absolute before:left-0 before:top-0.5 before:bottom-0.5 before:w-1 before:bg-[var(--color-primary)] before:rounded-full">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Our Doctors', href: '/doctors' },
                { label: 'Departments', href: '/departments' },
                { label: 'Services', href: '/services' },
                { label: 'Contact Us', href: '/contact' },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white hover:pl-2 transition-all flex items-center gap-2 group">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-bold mb-6 relative pl-4 before:absolute before:left-0 before:top-0.5 before:bottom-0.5 before:w-1 before:bg-[var(--color-primary)] before:rounded-full">Our Services</h3>
            <ul className="space-y-3">
              {['Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Oncology', 'Dermatology'].map((link, idx) => (
                <li key={idx}>
                  <Link href="/departments" className="text-sm text-slate-400 hover:text-white hover:pl-2 transition-all flex items-center gap-2 group">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-bold mb-6 relative pl-4 before:absolute before:left-0 before:top-0.5 before:bottom-0.5 before:w-1 before:bg-[var(--color-primary)] before:rounded-full">Contact Info</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <div className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="text-[var(--color-primary)]" size={16} />
                </div>
                <span className="pt-1.5">123 Health Avenue, Medical District, New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <div className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="text-[var(--color-primary)]" size={16} />
                </div>
                <span>+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <div className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="text-[var(--color-primary)]" size={16} />
                </div>
                <span>contact@medicareplus.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Medicare+. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
