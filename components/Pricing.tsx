'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

interface PricingPlan {
  id: number
  name: string
  price: string
  period: string
  description: string
  features: string[]
  highlight?: boolean
}

const plans: PricingPlan[] = [
  {
    id: 1,
    name: 'The Starter Plan',
    price: '$150',
    period: 'per session',
    description: 'Perfect for first-time visitors',
    features: [
      'Single treatment session',
      'Consultation included',
      'Flexible scheduling',
      'Professional aftercare guide',
    ],
  },
  {
    id: 2,
    name: 'The Rested Package',
    price: '$450',
    period: 'per month',
    description: 'Most popular choice',
    features: [
      'Two monthly treatments',
      'Priority booking',
      '10% loyalty discount',
      'Dedicated specialist',
      'Progress tracking included',
    ],
    highlight: true,
  },
  {
    id: 3,
    name: 'The Rejuvenation Membership',
    price: '$899',
    period: 'per month',
    description: 'Premium member benefits',
    features: [
      'Four monthly treatments',
      'VIP priority access',
      '20% member discount',
      'Exclusive member events',
      'Custom treatment plan',
      'Complimentary consultations',
    ],
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

interface PricingProps {
  onBookClick?: () => void
}

export default function Pricing({ onBookClick }: PricingProps) {
  return (
    <section
      id="pricing"
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
            Flexible Pricing Options
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Choose the plan that fits your aesthetic goals and budget
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={itemVariants}
              className={`card-hover relative flex flex-col ${
                plan.highlight
                  ? 'md:scale-105 ring-2 ring-accent'
                  : ''
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground text-xs font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-accent">{plan.price}</span>
                  <span className="text-muted-foreground text-sm">/{plan.period}</span>
                </div>
              </div>

              <button
                onClick={onBookClick}
                className="w-full btn-primary mb-8"
              >
                Join the Program
              </button>

              <ul className="space-y-4 flex-1 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="text-accent flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center text-muted-foreground text-sm mt-12"
        >
          All plans include complimentary consultation. Results vary by individual.
        </motion.p>
      </div>
    </section>
  )
}
