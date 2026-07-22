import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-surface)]">
      <div className="bg-[var(--color-primary)]/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-[var(--color-text-dark)] mb-4">Contact Us</h1>
          <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
            We're here to help. Reach out to us for appointments, inquiries, or emergencies.
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Contact Form */}
        <div className="bg-[var(--color-background)] border border-[var(--color-border)] p-8 shadow-[var(--shadow-card)]" style={{ borderRadius: 'var(--radius-xl)' }}>
          <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mb-6">Send a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-muted)] mb-2">First Name</label>
                <input type="text" className="w-full px-4 py-3 border border-[var(--color-border)] bg-[var(--color-surface)] focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none" style={{ borderRadius: 'var(--radius-md)' }} placeholder="John" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--color-text-muted)] mb-2">Last Name</label>
                <input type="text" className="w-full px-4 py-3 border border-[var(--color-border)] bg-[var(--color-surface)] focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none" style={{ borderRadius: 'var(--radius-md)' }} placeholder="Doe" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--color-text-muted)] mb-2">Email Address</label>
              <input type="email" className="w-full px-4 py-3 border border-[var(--color-border)] bg-[var(--color-surface)] focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none" style={{ borderRadius: 'var(--radius-md)' }} placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--color-text-muted)] mb-2">Message</label>
              <textarea rows={5} className="w-full px-4 py-3 border border-[var(--color-border)] bg-[var(--color-surface)] focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none" style={{ borderRadius: 'var(--radius-md)' }} placeholder="How can we help you?"></textarea>
            </div>
            <button type="button" className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white py-4 font-medium transition-colors" style={{ borderRadius: 'var(--radius-md)' }}>
              Send Message
            </button>
          </form>
        </div>
        
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mb-6">Get In Touch</h2>
            <p className="text-[var(--color-text-muted)] mb-8 leading-relaxed">
              Our support team is available 24/7 to assist you. For emergencies, please call our toll-free emergency number directly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center text-[var(--color-primary)] shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-[var(--color-text-dark)]">Emergency Line</h4>
                <p className="text-[var(--color-text-muted)]">+1 (800) 123-4567</p>
                <p className="text-[var(--color-primary)] text-sm font-medium mt-1">Available 24/7</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center text-[var(--color-primary)] shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-[var(--color-text-dark)]">Email Us</h4>
                <p className="text-[var(--color-text-muted)]">contact@medicare.com</p>
                <p className="text-[var(--color-text-muted)]">support@medicare.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center text-[var(--color-primary)] shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-[var(--color-text-dark)]">Location</h4>
                <p className="text-[var(--color-text-muted)] leading-relaxed">123 Health Avenue, Medical District, NY 10001</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center text-[var(--color-primary)] shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-bold text-[var(--color-text-dark)]">OPD Hours</h4>
                <p className="text-[var(--color-text-muted)]">Mon - Sat: 8 AM to 8 PM</p>
                <p className="text-[var(--color-text-muted)]">Sunday: 8 AM to 1 PM</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
