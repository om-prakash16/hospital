import PageHero from '@/components/PageHero';
import { Award, Users, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f3f4fb] font-sans">
      
      <PageHero 
        title="About Shubham Hospital" 
        description="A legacy of excellence in healthcare. We are committed to providing compassionate care using the most advanced medical technology available today."
      />
      
      {/* Vision & Mission */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Our Mission & Vision</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                <strong className="text-[#0284c7] block text-lg mb-1">Our Mission</strong>
                To deliver world-class healthcare with empathy, adhering to the highest standards of ethics and professionalism.
              </p>
              <p>
                <strong className="text-[#0284c7] block text-lg mb-1">Our Vision</strong>
                To be the most trusted healthcare partner, globally recognized for excellence in patient care and clinical outcomes.
              </p>
            </div>
          </div>
          <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80" 
              alt="Hospital Team" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Stats */}
      <div className="bg-white border-y border-gray-100 py-16 mb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-[#e0f2fe] rounded-full flex items-center justify-center mx-auto mb-4 text-[#0284c7]">
                <Users size={32} />
              </div>
              <p className="text-4xl font-extrabold text-gray-900 mb-2">2M+</p>
              <p className="text-gray-500 uppercase tracking-widest text-sm font-semibold">Patients Treated</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-[#e0f2fe] rounded-full flex items-center justify-center mx-auto mb-4 text-[#0284c7]">
                <Award size={32} />
              </div>
              <p className="text-4xl font-extrabold text-gray-900 mb-2">1,500+</p>
              <p className="text-gray-500 uppercase tracking-widest text-sm font-semibold">Expert Doctors</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-[#e0f2fe] rounded-full flex items-center justify-center mx-auto mb-4 text-[#0284c7]">
                <Heart size={32} />
              </div>
              <p className="text-4xl font-extrabold text-gray-900 mb-2">25+</p>
              <p className="text-gray-500 uppercase tracking-widest text-sm font-semibold">Years of Trust</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
