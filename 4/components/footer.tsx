import Link from 'next/link'
import { Mail, Heart, Zap } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const links = {
    Product: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Security', href: '#' },
      { label: 'Compliance', href: '#' },
    ],
    Company: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#' },
    ],
    Legal: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'HIPAA', href: '#' },
    ],
  }

  return (
    <footer className="relative bg-gradient-to-b from-background to-foreground/5 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* CTA Section */}
        <div className="mb-16 pb-16 border-b border-white/10">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to transform your practice?
            </h3>
            <p className="text-foreground/60 mb-8">
              Join hundreds of healthcare providers already using MediCloud to deliver better patient care.
            </p>
            <button className="rounded-full bg-gradient-to-r from-primary to-secondary px-8 py-3.5 text-base font-semibold text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105">
              Start Your Free Trial
            </button>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-white font-bold text-sm">
                M
              </div>
              <span className="font-bold text-foreground">MediCloud</span>
            </div>
            <p className="text-sm text-foreground/60 mb-6">
              Empowering healthcare providers with secure, compliant telehealth solutions.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Zap size={18} className="text-foreground" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Heart size={18} className="text-foreground" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Mail size={18} className="text-foreground" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-foreground/60 hover:text-primary transition-colors hover:translate-x-1 inline-block"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
          <p>&copy; {currentYear} MediCloud. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="inline-flex items-center gap-2">
              ✓ SOC 2 Type II Certified
            </span>
            <span className="inline-flex items-center gap-2">
              ✓ HIPAA Compliant
            </span>
            <span className="inline-flex items-center gap-2">
              ✓ GDPR Compliant
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
