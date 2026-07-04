'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

interface Testimonial {
  id: number
  quote: string
  author: string
  age: number
  treatment: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      'The transformation has been subtle yet remarkable. I feel confident again and everyone says I look refreshed, not overdone. The team was incredibly professional and made me feel comfortable the entire time.',
    author: 'Sarah M.',
    age: 42,
    treatment: 'The Rested Package',
    rating: 5,
  },
  {
    id: 2,
    quote:
      'I&apos;ve been a member for 6 months now and the results have exceeded my expectations. The personalized approach and attention to detail really sets Aura apart from other clinics.',
    author: 'Jessica T.',
    age: 38,
    treatment: 'Rejuvenation Membership',
    rating: 5,
  },
  {
    id: 3,
    quote:
      'Worth every penny. The staff is knowledgeable, kind, and genuinely invested in achieving natural-looking results. My skin has never looked better.',
    author: 'Amanda L.',
    age: 45,
    treatment: 'Volume Restore Plan',
    rating: 5,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function Testimonials() {
  return (
    <section className="relative w-full py-20 md:py-32 px-4 md:px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Loved by Our Patients
          </h2>

          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-accent text-accent" />
              ))}
            </div>
            <span className="text-accent font-bold">4.9/5.0</span>
          </div>

          <p className="text-muted-foreground text-base md:text-lg">
            Based on 412 verified Google reviews
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="card-hover"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground leading-relaxed mb-6 text-sm">
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Author Info */}
              <div className="border-t border-white/10 pt-4">
                <p className="font-semibold text-foreground mb-1">
                  {testimonial.author}
                </p>
                <p className="text-muted-foreground text-xs">
                  Age {testimonial.age} • {testimonial.treatment}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
