import { ShieldCheck, CalendarCheck, Search, Phone, Video, Pill, FlaskConical, ChevronRight, User, Award, Stethoscope, Users } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative w-full overflow-hidden bg-white pt-16 pb-28">
      {/* Background Curved Shape (Right Side) - Matches the huge sweeping light blue/grey curve */}
      <div className="absolute top-0 right-0 w-[55%] h-full overflow-hidden -z-20">
        <div className="absolute top-[-10%] right-[-10%] w-[120%] h-[120%] bg-[#F4F8FA] rounded-bl-[100px] transform skew-x-[-15deg]"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          
          {/* Left Content Area */}
          <div className="w-full lg:w-[45%] flex flex-col z-10 mt-8">
            
            {/* Trusted Pill */}
            <div className="inline-flex items-center gap-2 bg-[#F4F8FA] text-[#008B8B] px-4 py-1.5 rounded-full text-xs font-bold tracking-wide mb-10 border border-[#E0ECEE] self-start shadow-sm">
              <ShieldCheck size={14} strokeWidth={2.5} />
              <span>Trusted by 2M+ Patients</span>
            </div>

            {/* Headline */}
            <h1 className="text-[52px] lg:text-[64px] font-extrabold text-[#102A43] leading-[1.1] mb-6 tracking-tight">
              Compassionate <br/>
              Care <br/>
              For a <span className="text-[#008B8B]">Healthier You</span>
            </h1>

            {/* Subtext */}
            <p className="text-[17px] text-slate-500 mb-10 max-w-[420px] leading-[1.7]">
              We combine advanced technology with expert care to
              deliver the best treatment for you and your family.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-5 mb-20">
              <Link 
                href="#" 
                className="flex items-center justify-center gap-2 bg-[#009688] text-white px-7 py-3.5 rounded-[5px] text-[15px] font-semibold hover:bg-teal-700 transition-colors shadow-lg shadow-teal-900/10"
              >
                <CalendarCheck size={18} strokeWidth={2.5} />
                <span>Book Appointment</span>
              </Link>
              <Link 
                href="#" 
                className="flex items-center justify-center gap-2 bg-white text-[#009688] border-[1.5px] border-[#009688] px-7 py-3.5 rounded-[5px] text-[15px] font-semibold hover:bg-slate-50 transition-colors shadow-sm"
              >
                <Search size={18} strokeWidth={2.5} />
                <span>Find a Doctor</span>
              </Link>
            </div>

            {/* Stats Row */}
            <div className="flex items-center justify-between gap-4 max-w-[450px]">
              <div className="flex flex-col">
                <div className="flex items-center gap-2 text-[#008B8B] mb-0.5">
                  <Award size={18} strokeWidth={2.5} />
                  <span className="text-[22px] font-extrabold text-[#102A43]">25+</span>
                </div>
                <span className="text-[11px] text-slate-500 font-bold tracking-wide ml-[26px]">Years of Excellence</span>
              </div>
              
              <div className="flex flex-col">
                <div className="flex items-center gap-2 text-[#008B8B] mb-0.5">
                  <Stethoscope size={18} strokeWidth={2.5} />
                  <span className="text-[22px] font-extrabold text-[#102A43]">1500+</span>
                </div>
                <span className="text-[11px] text-slate-500 font-bold tracking-wide ml-[26px]">Expert Doctors</span>
              </div>
              
              <div className="flex flex-col">
                <div className="flex items-center gap-2 text-[#008B8B] mb-0.5">
                  <Phone size={18} strokeWidth={2.5} />
                  <span className="text-[22px] font-extrabold text-[#102A43]">20+</span>
                </div>
                <span className="text-[11px] text-slate-500 font-bold tracking-wide ml-[26px]">Specialties</span>
              </div>
              
              <div className="flex flex-col">
                <div className="flex items-center gap-2 text-[#008B8B] mb-0.5">
                  <Users size={18} strokeWidth={2.5} />
                  <span className="text-[22px] font-extrabold text-[#102A43]">2M+</span>
                </div>
                <span className="text-[11px] text-slate-500 font-bold tracking-wide ml-[26px]">Happy Patients</span>
              </div>
            </div>
            
          </div>

          {/* Center Doctor Image */}
          <div className="w-full lg:w-[25%] relative flex justify-center mt-12 lg:mt-0 z-10">
            {/* Exact Teal Organic Blob shape from CarePlus */}
            <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[480px] text-[#008B8B] -z-10">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full transform -rotate-12 scale-110">
                <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-46.1C87.4,-33.1,90,-16.5,88.4,-0.9C86.8,14.6,81,29.3,73.1,42.2C65.2,55.1,55.2,66.3,42.6,73.6C30,81,15,84.5,-0.2,84.9C-15.4,85.2,-30.8,82.4,-44.6,75.4C-58.4,68.4,-70.6,57.2,-78.9,43.7C-87.2,30.2,-91.6,15.1,-90.6,0.6C-89.6,-13.9,-83.2,-27.8,-74.6,-39.8C-66,-51.8,-55.2,-61.9,-42.6,-69.7C-30,-77.5,-15,-83.1,0.5,-83.9C16,-84.7,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
              </svg>
            </div>
            
            {/* Transparent Doctor PNG */}
            <img 
              src="https://pngimg.com/uploads/doctor/doctor_PNG16035.png" 
              alt="Doctor" 
              className="w-full max-w-[360px] h-auto object-contain z-10 mt-10"
            />
          </div>

          {/* Right Floating Services Panel */}
          <div className="w-full lg:w-[30%] flex justify-end mt-12 lg:mt-0 z-20">
            <div className="bg-white rounded-[10px] shadow-[0_20px_50px_rgba(0,0,0,0.06)] p-5 w-full max-w-[380px] border border-slate-50">
              
              <div className="flex items-center justify-between p-3.5 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer group mb-1">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-[#FFF0F0] text-[#FF6B6B] rounded-lg flex items-center justify-center transition-colors">
                    <Phone size={22} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-extrabold text-[#102A43]">24/7 Emergency</h3>
                    <p className="text-[12px] text-slate-500 mt-0.5">Always here for you</p>
                  </div>
                </div>
                <ChevronRight size={18} strokeWidth={2.5} className="text-slate-300 group-hover:text-[#008B8B] transition-colors" />
              </div>

              <div className="flex items-center justify-between p-3.5 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer group mb-1">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-[#E8F8F5] text-[#008B8B] rounded-lg flex items-center justify-center transition-colors">
                    <Video size={22} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-extrabold text-[#102A43]">Video Consultation</h3>
                    <p className="text-[12px] text-slate-500 mt-0.5">Talk to a Doctor</p>
                  </div>
                </div>
                <ChevronRight size={18} strokeWidth={2.5} className="text-slate-300 group-hover:text-[#008B8B] transition-colors" />
              </div>

              <div className="flex items-center justify-between p-3.5 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer group mb-1">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-[#F4F4FF] text-[#6366F1] rounded-lg flex items-center justify-center transition-colors">
                    <Pill size={22} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-extrabold text-[#102A43]">Online Pharmacy</h3>
                    <p className="text-[12px] text-slate-500 mt-0.5">Medicines at your door</p>
                  </div>
                </div>
                <ChevronRight size={18} strokeWidth={2.5} className="text-slate-300 group-hover:text-[#008B8B] transition-colors" />
              </div>

              <div className="flex items-center justify-between p-3.5 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-[#F0F7FF] text-[#3B82F6] rounded-lg flex items-center justify-center transition-colors">
                    <FlaskConical size={22} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-extrabold text-[#102A43]">Lab Test</h3>
                    <p className="text-[12px] text-slate-500 mt-0.5">Book Tests Online</p>
                  </div>
                </div>
                <ChevronRight size={18} strokeWidth={2.5} className="text-slate-300 group-hover:text-[#008B8B] transition-colors" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
