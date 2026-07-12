'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Check } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { useFocusTrap } from '@/hooks/useFocusTrap'

interface MembershipModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function MembershipModal({ isOpen, onClose }: MembershipModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useFocusTrap(modalRef, isOpen)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

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

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />

          {/* Modal */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="card relative w-full max-w-2xl max-h-[90vh] overflow-y-auto z-10"
            role="dialog"
            aria-modal="true"
            aria-labelledby="membership-title"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-1 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X size={24} className="text-foreground" />
            </button>

            {/* Header */}
            <div className="mb-8">
              <h2 id="membership-title" className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
                Join Our Elite Circle
              </h2>
              <p className="text-muted-foreground">
                Discover the exclusive advantages of membership at Aura
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <div className="flex-shrink-0 mt-1">
                    <Check size={20} className="text-accent" />
                  </div>
                  <p className="text-foreground text-sm md:text-base leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            {/* Pricing Info */}
            <div className="p-4 md:p-6 glass rounded-xl border border-white/10 mb-8">
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
            </div>

            {/* CTA Button */}
            <button className="w-full btn-primary">
              Reserve Your Membership Today
            </button>

            <p className="text-center text-muted-foreground text-xs mt-4">
              Click outside or press the X to close
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
