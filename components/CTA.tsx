'use client'

import { motion } from 'framer-motion'

interface CTAProps {
  title: string
  description: string
  buttonText: string
  onCtaClick?: () => void
  variant?: 'default' | 'accent'
}

export default function CTA({
  title,
  description,
  buttonText,
  onCtaClick,
  variant = 'default',
}: CTAProps) {
  const bgClass =
    variant === 'accent'
      ? 'bg-gradient-to-r from-primary/20 to-primary/10'
      : 'bg-secondary/30'

  return (
    <section className={`relative w-full py-16 md:py-24 px-4 md:px-6 lg:px-8 ${bgClass}`}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="card text-center"
        >
          <h2 className="font-serif text-2xl md:text-4xl font-bold mb-4 text-foreground">
            {title}
          </h2>

          <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-2xl mx-auto">
            {description}
          </p>

          <button onClick={onCtaClick} className="btn-primary">
            {buttonText}
          </button>
        </motion.div>
      </div>
    </section>
  )
}
