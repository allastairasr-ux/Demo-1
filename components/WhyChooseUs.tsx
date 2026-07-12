'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Microscope, Sparkles, HeartHandshake } from 'lucide-react'

const stats = [
  { value: '12+', label: 'Years of Experience' },
  { value: '8,000+', label: 'Treatments Performed' },
  { value: '4.9★', label: 'Average Patient Rating' },
  { value: '98%', label: 'Patient Retention' },
]

const differentiators = [
  {
    icon: ShieldCheck,
    title: 'Board-Certified Safety',
    description: 'Every treatment is administered by licensed medical professionals following rigorous clinical protocols.',
  },
  {
    icon: Microscope,
    title: 'Advanced Technology',
    description: 'We invest in FDA-cleared, medical-grade equipment and premium products for superior, natural-looking results.',
  },
  {
    icon: Sparkles,
    title: 'Artistry & Precision',
    description: 'Our specialists blend medical expertise with an aesthetic eye to enhance your features, never overdone.',
  },
  {
    icon: HeartHandshake,
    title: 'Personalized Care',
    description: 'No two treatment plans are alike. We take the time to understand your goals and tailor every detail.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
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

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative w-full py-20 md:py-32 px-4 md:px-6 lg:px-8">
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
            The Aura Difference
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Why discerning clients trust us with their aesthetic journey
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-20"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={itemVariants} className="text-center">
              <p className="font-serif text-3xl md:text-4xl font-bold text-accent mb-2">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-xs md:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Differentiators Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {differentiators.map((item) => {
            const Icon = item.icon
            return (
              <motion.div key={item.title} variants={itemVariants} className="card-hover text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 mb-5">
                  <Icon className="text-accent" size={24} />
                </div>
                <h3 className="font-serif text-lg font-bold mb-3 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
