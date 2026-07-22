'use client'

import { VideoIcon, Calendar, FileText, Pill, CreditCard, Shield } from 'lucide-react'
import { useState } from 'react'

const features = [
  {
    icon: VideoIcon,
    title: 'Video Consultations',
    description: 'HD, peer-to-peer encrypted video calls with built-in waiting rooms and screen sharing.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    description: 'Automated booking, timezone detection, and calendar sync with Google and Outlook.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: FileText,
    title: 'Digital EHR',
    description: 'Structured clinical notes, ICD-10 coding, and longitudinal patient health records.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Pill,
    title: 'ePrescriptions',
    description: 'Securely send prescriptions directly to pharmacies with automated interactions check.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: CreditCard,
    title: 'Integrated Payments',
    description: 'Integrated billing, insurance claims processing, and direct patient payments.',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Shield,
    title: 'Secure & Compliant',
    description: 'SOC2 Type II, HIPAA, and GDPR compliant with data residency options.',
    color: 'from-red-500 to-rose-500',
  },
]

export function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="features" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
              Clinical Excellence Integrated
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Everything you need to provide{' '}
            <span className="gradient-text">top-tier care</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            From anywhere in the world. Comprehensive tools designed for modern healthcare practices.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isHovered = hoveredIndex === index

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative p-8 rounded-2xl border border-white/30 bg-white/30 backdrop-blur-xl transition-all duration-500 hover:shadow-2xl hover:border-primary/50 hover:bg-white/50 hover-lift"
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-all duration-500 -z-10`}
                />

                {/* Icon Container */}
                <div className="mb-6">
                  <div className={`inline-block p-3 rounded-xl bg-gradient-to-br ${feature.color} text-white shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}>
                    <Icon size={28} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{feature.description}</p>

                {/* Decorative Line */}
                <div className="mt-6 h-0.5 w-0 group-hover:w-12 bg-gradient-to-r from-primary/50 to-transparent transition-all duration-500" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
