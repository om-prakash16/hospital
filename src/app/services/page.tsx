import { Calendar, Search, Video, Phone, Activity, Heart, Shield, FileText } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    { icon: Calendar, title: "Online Appointment", desc: "Book appointments instantly online without any hassle." },
    { icon: Search, title: "Find a Doctor", desc: "Search through our extensive network of top specialists." },
    { icon: Video, title: "Teleconsultation", desc: "Consult doctors from the comfort of your home." },
    { icon: Phone, title: "Emergency Care", desc: "24/7 dedicated emergency response team." },
    { icon: Activity, title: "Diagnostic Services", desc: "Advanced labs and imaging for accurate diagnosis." },
    { icon: Heart, title: "Health Checkups", desc: "Comprehensive preventive health packages." },
    { icon: Shield, title: "Patient Safety", desc: "International standard protocols for safety." },
    { icon: FileText, title: "E-Records", desc: "Access your medical records securely anytime." }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-surface)]">
      <div className="bg-[var(--color-primary)]/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-[var(--color-text-dark)] mb-4">Our Services</h1>
          <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Comprehensive healthcare services designed around your needs.
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, idx) => (
            <div key={idx} className="bg-[var(--color-background)] p-8 border border-[var(--color-border)] transition-all hover:-translate-y-1" style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-card)' }}>
              <div className="w-14 h-14 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center mb-6">
                <item.icon className="text-[var(--color-primary)] w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-3">{item.title}</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
