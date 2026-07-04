'use client'

import { motion } from 'framer-motion'
import { Zap, Droplets, Sun } from 'lucide-react'

const services = [
  {
    id: 1,
    title: 'Smooth Texture',
    description: 'Reduce fine lines and wrinkles with advanced neurotoxin and filler treatments for a refreshed appearance.',
    icon: Zap,
    color: 'from-accent/20 to-accent/5',
  },
  {
    id: 2,
    title: 'Restore Volume',
    description: 'Restore lost volume and enhance facial contours with premium dermal fillers and sculpturing techniques.',
    icon: Droplets,
    color: 'from-blue-500/20 to-blue-500/5',
  },
  {
    id: 3,
    title: 'Brighten Tone',
    description: 'Achieve a radiant, even complexion with laser resurfacing and advanced chemical peels.',
    icon: Sun,
    color: 'from-yellow-500/20 to-yellow-500/5',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export default function Services() {
  return (
    <section
      id="services"
      className="relative w-full py-20 md:py-32 px-4 md:px-6 lg:px-8"
    >
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
            Our Signature Treatments
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Tailored solutions for your unique aesthetic goals
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`card-hover group bg-gradient-to-br ${service.color} border border-white/10`}
              >
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon className="text-accent" size={24} />
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-bold mb-3 text-foreground">
                  {service.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <a
                  href="#"
                  className="text-accent text-sm font-medium hover:text-yellow-300 transition-colors inline-flex items-center gap-2"
                >
                  Learn More →
                </a>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
