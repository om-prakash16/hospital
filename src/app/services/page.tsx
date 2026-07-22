import PageHero from '@/components/PageHero';
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
    <div className="flex flex-col min-h-screen bg-[#f3f4fb] font-sans">
      <PageHero 
        title="Our Services" 
        description="Comprehensive healthcare services designed around your needs."
      />
      
      <div className="container mx-auto px-4 py-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="w-14 h-14 bg-[#e0f2fe] rounded-full flex items-center justify-center mb-6">
                <item.icon className="text-[#0284c7] w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
