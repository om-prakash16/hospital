'use client'

import { Badge } from '@/components/theme4/ui/badge'
import { Button } from '@/components/theme4/ui/button'
import { ArrowRight, CheckCircle, Play } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export function Hero() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20 -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20 translate-x-1/2" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <Badge 
                className="bg-primary/10 text-primary hover:bg-primary/20 border border-primary/30 px-3 py-1.5 rounded-full"
                variant="outline"
              >
                ✓ HIPAA Compliant & Secure
              </Badge>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
                <span className="block">Run Your Virtual</span>
                <span className="gradient-text">Clinic Effortlessly</span>
              </h1>
              
              <p className="text-lg text-foreground/70 max-w-lg leading-relaxed">
                All-in-one telehealth platform designed for modern practices. Manage patients, clinical notes, and secure HD video consultations in one unified workspace.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="rounded-full bg-gradient-to-r from-primary to-secondary px-8 py-3.5 text-base font-semibold text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:shadow-primary/50 inline-flex items-center justify-center gap-2 group">
                Get a Demo
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
              
              <button className="rounded-full border-2 border-primary/30 px-8 py-3.5 text-base font-semibold text-foreground hover:border-primary/60 transition-all duration-300 hover:bg-primary/5 inline-flex items-center justify-center gap-2 group backdrop-blur-sm">
                <Play size={18} className="fill-primary text-primary" />
                Take a Quick Tour
              </button>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 pt-6">
              {['Video Consultations', 'Secure EHR', 'Billing Integration'].map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 rounded-full bg-white/50 px-4 py-2 backdrop-blur-sm border border-white/30 hover:bg-white/70 transition-all"
                >
                  <CheckCircle size={16} className="text-primary" />
                  <span className="text-sm font-medium text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div 
            className="relative h-96 md:h-[500px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Animated Background Elements */}
            <div className={`absolute inset-0 rounded-3xl transition-all duration-700 ${isHovered ? 'scale-105' : 'scale-100'}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 rounded-3xl blur-2xl" />
            </div>

            {/* Floating Cards */}
            <div className="absolute top-8 right-8 glass rounded-2xl p-4 w-48 hover-lift shadow-xl">
              <div className="text-xs font-semibold text-primary mb-2">EHR System</div>
              <div className="text-sm text-foreground/70">Structured clinical notes & ICD-10 coding</div>
            </div>

            <div className="absolute bottom-12 left-4 glass rounded-2xl p-4 w-48 hover-lift shadow-xl">
              <div className="text-xs font-semibold text-accent mb-2">Billing</div>
              <div className="text-sm text-foreground/70">Integrated payments & claims processing</div>
            </div>

            <div className="absolute bottom-24 right-12 glass rounded-2xl p-4 w-48 hover-lift shadow-xl">
              <div className="text-xs font-semibold text-secondary mb-2">Patient Experience</div>
              <div className="text-sm text-foreground/70">Seamless booking & instant consultations</div>
            </div>

            {/* Hero Image */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <Image
                src="/medicloud/images/dr-img.png"
                alt="Telehealth Platform Dashboard"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
