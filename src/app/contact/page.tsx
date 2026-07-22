import PageHero from '@/components/PageHero';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f3f4fb] font-sans">
      <PageHero 
        title="Contact Us" 
        description="We're here to help. Reach out to us for appointments, inquiries, or emergencies."
      />
      
      <div className="container mx-auto px-4 py-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Contact Form */}
        <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">First Name</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-200 bg-[#f9fafb] rounded-xl focus:ring-2 focus:ring-[#0ea5e9] focus:outline-none transition-all" placeholder="John" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">Last Name</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-200 bg-[#f9fafb] rounded-xl focus:ring-2 focus:ring-[#0ea5e9] focus:outline-none transition-all" placeholder="Doe" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Email Address</label>
              <input type="email" className="w-full px-4 py-3 border border-gray-200 bg-[#f9fafb] rounded-xl focus:ring-2 focus:ring-[#0ea5e9] focus:outline-none transition-all" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Message</label>
              <textarea rows={5} className="w-full px-4 py-3 border border-gray-200 bg-[#f9fafb] rounded-xl focus:ring-2 focus:ring-[#0ea5e9] focus:outline-none transition-all" placeholder="How can we help you?"></textarea>
            </div>
            <button type="button" className="w-full bg-[#0ea5e9] hover:bg-[#0284c7] text-white py-4 font-bold rounded-xl transition-colors shadow-md">
              Send Message
            </button>
          </form>
        </div>
        
        {/* Contact Info */}
        <div className="space-y-8 lg:mt-4">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Our support team is available 24/7 to assist you. For emergencies, please call our emergency number directly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#e0f2fe] rounded-full flex items-center justify-center text-[#0ea5e9] shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Emergency Line</h4>
                <p className="text-gray-600">+91 9811124446</p>
                <p className="text-[#0ea5e9] text-sm font-bold mt-1">Available 24/7</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#e0f2fe] rounded-full flex items-center justify-center text-[#0ea5e9] shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Email Us</h4>
                <p className="text-gray-600">info@shubhamhospital.com</p>
                <p className="text-gray-600">contact@shubhamhospital.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#e0f2fe] rounded-full flex items-center justify-center text-[#0ea5e9] shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Location</h4>
                <p className="text-gray-600 leading-relaxed max-w-[200px]">Rohini, Delhi</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#e0f2fe] rounded-full flex items-center justify-center text-[#0ea5e9] shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">OPD Hours</h4>
                <p className="text-gray-600">Mon - Sat: 8 AM to 8 PM</p>
                <p className="text-gray-600">Sunday: 8 AM to 1 PM</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
