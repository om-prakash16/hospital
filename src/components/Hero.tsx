import { Calendar, Search, Video, Phone, Activity, Heart, Shield, Award, Users, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative w-full bg-[var(--color-surface)] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-16 pb-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Content */}
          <div className="lg:w-1/2 flex flex-col gap-6 z-10">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full w-fit shadow-sm border border-gray-100">
              <Shield className="text-[var(--color-secondary)] w-4 h-4" />
              <span className="text-sm font-medium text-[var(--color-text-dark)]">Trusted by 2M+ Patients</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-[var(--color-text-dark)] leading-[1.15] tracking-tight">
              Compassionate Care <br />
              <span className="text-[var(--color-primary)]">For a Healthier You</span>
            </h1>
            
            <p className="text-lg text-[var(--color-text-muted)] leading-relaxed max-w-lg">
              World-class healthcare with advanced technology and a team of expert doctors dedicated to your well-being.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <button className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white text-base font-medium px-8 py-3.5 rounded-md transition-colors shadow-lg shadow-blue-500/25">
                Book Appointment
              </button>
              <button className="bg-white hover:bg-gray-50 text-[var(--color-primary)] border border-gray-200 text-base font-medium px-8 py-3.5 rounded-md transition-colors shadow-sm flex items-center gap-2">
                <Search size={18} />
                Find a Doctor
              </button>
            </div>
          </div>
          
          {/* Right Image/Graphic area */}
          <div className="lg:w-1/2 relative h-[500px] flex justify-center items-end">
            <div className="absolute w-[450px] h-[450px] bg-[var(--color-primary)] opacity-5 rounded-full top-10" />
            <div className="absolute w-[350px] h-[350px] bg-[var(--color-primary)] opacity-10 rounded-full top-20" />
            
            {/* Using a placeholder div for the doctor image to avoid missing asset errors */}
            <div className="w-[400px] h-[480px] bg-slate-200 rounded-t-[200px] border-4 border-white shadow-xl relative overflow-hidden z-10 flex items-center justify-center text-slate-400">
              [Doctor Image Placeholder]
            </div>

            {/* Floating Card */}
            <div className="absolute top-32 -right-8 bg-white p-4 rounded-xl shadow-[var(--shadow-card)] border border-gray-100 flex items-center gap-4 z-20 animate-bounce" style={{animationDuration: '3s'}}>
              <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
                <Phone className="text-[var(--color-danger)] w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">24/7 Emergency Care</p>
                <p className="text-sm font-bold text-[var(--color-text-dark)]">+91 98765 43210</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Quick Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-10 mb-8">
        <div className="bg-white rounded-xl shadow-[var(--shadow-card)] p-2 border border-gray-100 flex flex-wrap lg:flex-nowrap items-center justify-between">
          {[
            { icon: Calendar, title: "Book Appointment", sub: "Easy & Fast", color: "text-blue-500" },
            { icon: Search, title: "Find a Doctor", sub: "Search & Connect", color: "text-teal-500" },
            { icon: Video, title: "Video Consultation", sub: "Talk to a Doctor", color: "text-purple-500" },
            { icon: Phone, title: "Emergency", sub: "24/7 Service", color: "text-red-500" },
            { icon: Activity, title: "Lab Test", sub: "Book Tests", color: "text-green-500" },
            { icon: Heart, title: "Health Packages", sub: "Best Offers", color: "text-orange-500" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 p-4 hover:bg-slate-50 cursor-pointer rounded-lg transition-colors flex-1 min-w-[150px]">
              <item.icon className={`${item.color} w-6 h-6`} />
              <div>
                <p className="text-sm font-bold text-[var(--color-text-dark)] leading-tight">{item.title}</p>
                <p className="text-xs text-[var(--color-text-muted)]">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-[var(--color-primary)] py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap md:flex-nowrap items-center justify-between text-white gap-8">
          <div className="flex flex-col items-center flex-1">
            <span className="text-4xl font-bold">25+</span>
            <span className="text-sm font-medium text-blue-100 mt-1">Years of Excellence</span>
          </div>
          <div className="w-px h-12 bg-white/20 hidden md:block" />
          <div className="flex flex-col items-center flex-1">
            <span className="text-4xl font-bold">1,500+</span>
            <span className="text-sm font-medium text-blue-100 mt-1">Expert Doctors</span>
          </div>
          <div className="w-px h-12 bg-white/20 hidden md:block" />
          <div className="flex flex-col items-center flex-1">
            <span className="text-4xl font-bold">2M+</span>
            <span className="text-sm font-medium text-blue-100 mt-1">Happy Patients</span>
          </div>
          <div className="w-px h-12 bg-white/20 hidden md:block" />
          <div className="flex flex-col items-center flex-1">
            <span className="text-4xl font-bold">15+</span>
            <span className="text-sm font-medium text-blue-100 mt-1">Hospitals</span>
          </div>
          <div className="w-px h-12 bg-white/20 hidden md:block" />
          <div className="flex flex-col items-center flex-1">
            <span className="text-4xl font-bold">50+</span>
            <span className="text-sm font-medium text-blue-100 mt-1">Awards & Honors</span>
          </div>
        </div>
      </div>
    </div>
  );
}
