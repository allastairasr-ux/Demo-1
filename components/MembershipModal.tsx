'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Check } from 'lucide-react'

interface MembershipModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function MembershipModal({ isOpen, onClose }: MembershipModalProps) {
  const benefits = [
    'Priority booking - never wait for your preferred appointment time',
    'Exclusive member-only pricing on all treatments',
    'Monthly advanced skin treatment included with membership',
    'Access to VIP events and exclusive product launches',
    'Complimentary consultations for new treatments',
    'First access to limited-time promotions and special offers',
    'Free skincare assessments quarterly',
    'Referral rewards program with generous benefits',
  ]

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 20,
      transition: { duration: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.05 * i, duration: 0.3 },
    }),
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass rounded-2xl p-6 md:p-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X size={24} className="text-foreground" />
            </button>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="mb-8"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
                Join Our Elite Circle
              </h2>
              <p className="text-muted-foreground">
                Discover the exclusive advantages of membership at Aura
              </p>
            </motion.div>

            {/* Benefits Grid */}
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.05, delayChildren: 0.2 }}
              className="space-y-4 mb-8"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={itemVariants}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <div className="flex-shrink-0 mt-1">
                    <Check size={20} className="text-accent" />
                  </div>
                  <p className="text-foreground text-sm md:text-base leading-relaxed">
                    {benefit}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Pricing Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="p-4 md:p-6 glass rounded-xl border border-white/10 mb-8"
            >
              <div className="flex items-baseline justify-between mb-3">
                <span className="text-muted-foreground text-sm">Monthly Investment</span>
                <div className="text-right">
                  <span className="font-serif text-3xl md:text-4xl font-bold text-accent">$275</span>
                  <span className="text-muted-foreground text-sm md:text-base">/month</span>
                </div>
              </div>
              <p className="text-muted-foreground text-xs md:text-sm">
                Plus one advanced skin treatment worth up to $400 included monthly
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="w-full btn-primary"
            >
              Reserve Your Membership Today
            </motion.button>

            {/* Close hint for mobile */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="text-center text-muted-foreground text-xs mt-4"
            >
              Click outside or press the X to close
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
