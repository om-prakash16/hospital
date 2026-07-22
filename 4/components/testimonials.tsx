'use client'

import { Star } from 'lucide-react'
import { useState } from 'react'

const testimonials = [
  {
    name: 'Dr. Sarah Jenkins',
    role: 'Pediatric Specialist',
    clinic: 'Modern Pediatrics Clinic',
    content: 'MediCloud transformed how I manage my pediatric practice. The patient experience is seamless, and my no-show rates dropped by 40%.',
    rating: 5,
    image: '👩‍⚕️',
  },
  {
    name: 'Dr. Michael Chen',
    role: 'General Practitioner',
    clinic: 'Urban Health Center',
    content: 'The billing integration saved us 15 hours per week. It&apos;s rare to find software that&apos;s both powerful and genuinely user-friendly.',
    rating: 5,
    image: '👨‍⚕️',
  },
  {
    name: 'Dr. Emily Rodriguez',
    role: 'Telemedicine Director',
    clinic: 'Regional Medical Network',
    content: 'Our entire team adopted MediCloud within days. The HIPAA compliance gives us peace of mind, and patients love the ease of scheduling.',
    rating: 5,
    image: '👩‍⚕️',
  },
  {
    name: 'Dr. James Wilson',
    role: 'Practice Manager',
    clinic: 'Wellness Plus Medical Group',
    content: 'ROI was immediate. We&apos;ve increased patient capacity by 30% without adding staff. This is exactly what our practice needed.',
    rating: 5,
    image: '👨‍⚕️',
  },
]

export function Testimonials() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="testimonials" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold border border-secondary/20">
              Success Stories
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Trusted by leading{' '}
            <span className="gradient-text">healthcare providers</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Our clients don&apos;t just work with us, they grow with us. Here&apos;s what a few of our satisfied customers had to say.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative p-8 rounded-2xl border border-white/30 bg-white/30 backdrop-blur-xl transition-all duration-500 hover:shadow-2xl hover:border-primary/50 hover:bg-white/50 hover-lift"
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10" />

              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400 transition-transform duration-300 group-hover:scale-110"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                  <p className="text-xs text-foreground/50">{testimonial.clinic}</p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 text-4xl opacity-10 group-hover:opacity-20 transition-all">&quot;</div>
            </div>
          ))}
        </div>

        {/* Trusted By Section */}
        <div className="mt-20 pt-12 border-t border-white/20">
          <p className="text-center text-foreground/60 font-medium mb-8">Trusted by hospitals and clinics worldwide</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center opacity-60 hover:opacity-100 transition-opacity">
            {['Mercy Hospital', 'City Medical', 'Health Plus', 'Care Center', 'Wellness MD'].map((org) => (
              <div key={org} className="text-foreground/50 font-medium text-sm whitespace-nowrap">
                {org}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
