'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section 
      className="pt-[120px] pb-[90px] text-white rounded-b-[35px]"
      style={{
        background: 'linear-gradient(180deg, #0284c7 0%, #38bdf8 20%, #7dd3fc 45%, #e0f2fe 70%, #ffffff 100%)'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          
          {/* Left Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2"
          >
            <h1 className="font-extrabold text-[38px] leading-[1.2] mb-3">
              Professional & Modern Medical Care
            </h1>
            
            <p className="mt-2.5 max-w-[420px] text-white/90 text-lg">
              High-quality medical treatments, advanced technology,
              and a caring
              medical team — helping you achieve a healthy life.
            </p>
            
            <div className="flex gap-3 mt-6">
              <button className="bg-white text-[#0284c7] px-6 py-3 rounded-xl font-semibold hover:-translate-y-0.5 transition-transform duration-300 shadow-md">
                View Services
              </button>
            </div>
            
            {/* Rating Box */}
            <div className="bg-[#0ea5e9] rounded-2xl px-4 py-2.5 w-max mt-6 flex items-center shadow-md">
              <span className="font-extrabold text-[20px]">4.9★</span>
              <span className="text-white/90 ml-2 font-medium">Patient Satisfaction Rating</span>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full md:w-1/2 relative mt-12 md:mt-0 flex justify-center"
          >
            <img 
              src="/theme3/images/heroimg.png" 
              alt="Medical Care Hero" 
              className="relative z-10 w-full max-w-[300px] md:max-w-[400px] h-auto object-contain md:translate-x-10 drop-shadow-2xl" 
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
