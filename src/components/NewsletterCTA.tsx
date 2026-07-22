import { ArrowRight } from 'lucide-react';

export default function NewsletterCTA() {
  return (
    <section className="py-20 bg-[var(--color-background)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-hover)] p-12 md:p-16 text-center relative overflow-hidden"
          style={{ borderRadius: 'var(--radius-xl)' }}
        >
          {/* Background Decorations */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated with Health Tips
            </h2>
            <p className="text-white/80 max-w-lg mx-auto mb-8 text-lg">
              Subscribe to our newsletter and receive expert health advice, new department launches, and special health package offers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-5 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 text-sm"
              />
              <button className="bg-white text-[var(--color-primary)] font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 whitespace-nowrap text-sm">
                Subscribe <ArrowRight size={16} />
              </button>
            </div>
            
            <p className="text-white/50 text-xs mt-4">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
