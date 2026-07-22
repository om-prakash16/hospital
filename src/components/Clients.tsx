'use client';

import { motion } from 'framer-motion';

const logos = [
  { name: 'HealthPlus', color: 'bg-blue-500', shape: 'rounded-lg' },
  { name: 'CareSync', color: 'bg-indigo-500', shape: 'rounded-full' },
  { name: 'Medify', color: 'bg-emerald-500', shape: 'rotate-45' },
  { name: 'ClinicPro', color: 'bg-purple-500', shape: 'rounded-tl-xl rounded-br-xl' },
  { name: 'Vitality', color: 'bg-orange-500', shape: 'rounded-tr-xl rounded-bl-xl' },
  { name: 'NexusHealth', color: 'bg-cyan-500', shape: 'rounded-md' },
];

export default function Clients() {
  return (
    <section className="bg-white py-12 border-y border-slate-100 overflow-hidden relative">
      {/* Gradient Fades for Marquee edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest">
          Trusted by innovative healthcare teams worldwide
        </p>
      </div>

      <div className="flex whitespace-nowrap relative">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex items-center gap-16 md:gap-24 px-8"
        >
          {/* Double the array for seamless infinite scroll */}
          {[...logos, ...logos, ...logos].map((logo, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-3 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default"
            >
              <div className={`w-8 h-8 ${logo.color} ${logo.shape}`}></div>
              <span className="text-xl font-bold text-slate-800 tracking-tight">{logo.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
