'use client'

import { ArrowRight } from 'lucide-react'
import { useState } from 'react'

const steps = [
  {
    number: '01',
    title: 'Sign Up',
    description: 'Create your provider profile and customize your clinic branding in minutes.',
    details: [
      'Set up clinic information',
      'Configure branding',
      'Add payment methods',
    ],
  },
  {
    number: '02',
    title: 'Add Your Team',
    description: 'Invite your team of doctors, specialists, and front-desk administrators.',
    details: [
      'Manage staff roles',
      'Set permissions',
      'Team collaboration',
    ],
  },
  {
    number: '03',
    title: 'Start Consultations',
    description: 'Begin hosting secure consultations and managing patient care immediately.',
    details: [
      'First patient appointment',
      'Manage records',
      'Track analytics',
    ],
  },
]

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="how-it-works" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20">
              Simple Setup
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Get started with MediCloud{' '}
            <span className="gradient-text">in 3 easy steps</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Simple, supported, and designed to fit the way you work. From setup to go-live, we&apos;ll guide you every step so your practice sees value from day one.
          </p>
        </div>

        {/* Desktop Steps Layout */}
        <div className="hidden md:block">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {steps.map((step, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveStep(index)}
                className="group relative"
              >
                {/* Step Card */}
                <div className="relative p-8 rounded-2xl border border-white/30 bg-white/30 backdrop-blur-xl transition-all duration-500 hover:shadow-2xl hover:border-primary/50 hover:bg-white/50 hover-lift h-full">
                  {/* Gradient Background */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10" />

                  {/* Step Number */}
                  <div className="mb-6">
                    <span className="text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent opacity-20 group-hover:opacity-100 transition-all">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{step.title}</h3>
                  <p className="text-foreground/70 mb-6">{step.description}</p>

                  {/* Details List */}
                  <div className="space-y-2">
                    {step.details.map((detail, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent" />
                        <span className="text-sm text-foreground/70">{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <ArrowRight className="absolute -right-12 top-1/2 -translate-y-1/2 text-primary/20 group-hover:text-primary transition-all group-hover:translate-x-2" size={24} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Steps Carousel */}
        <div className="md:hidden">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                onClick={() => setActiveStep(index)}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  activeStep === index
                    ? 'bg-white/50 border-primary/50 shadow-lg'
                    : 'bg-white/30 border-white/30 hover:bg-white/40'
                }`}
              >
                <div className="mb-4">
                  <span className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent opacity-60">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{step.title}</h3>
                <p className="text-foreground/70 mb-4">{step.description}</p>

                {activeStep === index && (
                  <div className="space-y-2 animate-fade-in-up">
                    {step.details.map((detail, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent" />
                        <span className="text-sm text-foreground/70">{detail}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <button className="rounded-full bg-gradient-to-r from-primary to-secondary px-8 py-3.5 text-base font-semibold text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:shadow-primary/50 inline-flex items-center justify-center gap-2 group">
            Get Started
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
          <button className="rounded-full border-2 border-primary/30 px-8 py-3.5 text-base font-semibold text-foreground hover:border-primary/60 transition-all duration-300 hover:bg-primary/5">
            View Pricing
          </button>
        </div>
      </div>
    </section>
  )
}
