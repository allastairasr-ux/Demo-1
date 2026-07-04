'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

interface HeroProps {
  onBookClick?: () => void
}

export default function Hero({ onBookClick }: HeroProps) {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative w-full h-screen md:min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/placeholder-hero.png"
          alt="Medical aesthetic treatment"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Discover Your{' '}
            <span className="bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent">
              Best Self
            </span>
          </h1>

          <p className="text-base md:text-lg text-gray-300 max-w-2xl md:max-w-xl">
            Advanced medical aesthetics treatments designed to enhance your natural beauty. From subtle refinement to dramatic transformation, we&apos;re here to help you feel confident in your skin.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 md:pt-8 justify-center md:justify-start">
            <button
              onClick={onBookClick}
              className="btn-primary"
            >
              Book Your Consultation
            </button>
            <button
              onClick={scrollToServices}
              className="btn-secondary"
            >
              View Results
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <button
          onClick={scrollToServices}
          className="flex flex-col items-center gap-2 text-accent hover:text-yellow-300 transition-colors"
          aria-label="Scroll to services"
        >
          <span className="text-xs font-medium">Scroll to Explore</span>
          <ChevronDown size={20} />
        </button>
      </motion.div>
    </section>
  )
}
