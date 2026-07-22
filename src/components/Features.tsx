'use client';

import { FileText, Video, CreditCard, CalendarCheck, ShieldCheck, Users } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const features = [
  {
    icon: FileText,
    title: 'Electronic Health Records',
    desc: 'Securely manage patient records, clinical notes, and medical history in one place with our intuitive EHR system.'
  },
  {
    icon: Video,
    title: 'HD Telemedicine',
    desc: 'Conduct secure, high-quality video consultations with patients from anywhere. Built-in screen sharing and chat.'
  },
  {
    icon: CreditCard,
    title: 'Integrated Billing',
    desc: 'Automate invoicing, insurance claims, and process payments securely online with one click.'
  },
  {
    icon: CalendarCheck,
    title: 'Smart Scheduling',
    desc: 'Allow patients to book appointments online with automated SMS and email reminders to reduce no-shows.'
  },
  {
    icon: ShieldCheck,
    title: 'HIPAA Compliant',
    desc: 'Enterprise-grade security ensuring all patient data meets strict privacy standards. End-to-end encryption.'
  },
  {
    icon: Users,
    title: 'Patient Portal',
    desc: 'Give patients secure access to their records, test results, and direct messaging with their care team.'
  }
];

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 15 }
  }
};

export default function Features() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl -z-10 mix-blend-multiply"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-3xl -z-10 mix-blend-multiply"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#297AFF] font-semibold text-sm mb-6 tracking-wide uppercase">
            Core Platform
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F2D5E] mb-6 tracking-tight leading-tight">
            Everything you need to <br className="hidden md:block"/> manage your practice
          </h2>
          <p className="text-xl text-slate-500 font-light leading-relaxed">
            MediCloud provides a comprehensive suite of tools designed specifically for modern healthcare providers to streamline operations.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div 
              variants={cardVariants}
              key={idx} 
              className="group relative p-8 rounded-3xl bg-white/60 backdrop-blur-xl border border-slate-200/60 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Hover gradient background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#297AFF]/0 via-[#297AFF]/0 to-[#297AFF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-slate-50 text-[#297AFF] rounded-2xl flex items-center justify-center mb-8 border border-slate-100 group-hover:scale-110 group-hover:bg-[#297AFF] group-hover:text-white transition-all duration-500 shadow-sm">
                  <feature.icon size={26} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-[#0F2D5E] mb-4 tracking-tight group-hover:text-[#297AFF] transition-colors">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed font-light">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
