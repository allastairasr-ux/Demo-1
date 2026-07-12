'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Gift, Check } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

interface ExitIntentModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ExitIntentModal({ isOpen, onClose }: ExitIntentModalProps) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const benefits = [
    'Personalized treatment recommendations',
    'Exclusive pricing available only to subscribers',
    'No obligation — unsubscribe anytime',
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[60] flex items-center justify-center px-4 py-6"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" aria-hidden="true" />

          {/* Modal */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="card relative w-full max-w-md z-10 max-h-[90vh] overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="exit-intent-title"
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-1 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Close"
            >
              <X size={20} className="text-foreground" />
            </button>

            {submitted ? (
              /* Success state */
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-6">
                  <Check className="text-accent" size={28} />
                </div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
                  You&apos;re In!
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Check your inbox for your free skin assessment guide. We&apos;ll be in touch soon with exclusive offers.
                </p>
                <button onClick={onClose} className="btn-primary">
                  Continue Browsing
                </button>
              </div>
            ) : (
              /* Form state */
              <div className="space-y-6">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10">
                  <Gift className="text-accent" size={28} />
                </div>

                <div>
                  <h2 id="exit-intent-title" className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
                    Before You Go...
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Get your free personalized skin assessment guide and unlock exclusive subscriber-only pricing.
                  </p>
                </div>

                {/* Benefits */}
                <ul className="space-y-3">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <Check className="text-accent flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-foreground text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full bg-secondary/50 border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    aria-label="Email address"
                  />
                  <button type="submit" className="w-full btn-primary">
                    Get My Free Guide
                  </button>
                </form>

                <button
                  onClick={onClose}
                  className="block w-full text-center text-muted-foreground text-xs hover:text-foreground transition-colors"
                >
                  No thanks, I&apos;ll book later
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
