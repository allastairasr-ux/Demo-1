'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Check } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useFocusTrap } from '@/hooks/useFocusTrap'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false)
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

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleClose = () => {
    setSubmitted(false)
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
          onKeyDown={handleKeyDown}
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal Content */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="card relative w-full max-w-md z-50 max-h-[90vh] overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-title"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 p-1 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X size={24} className="text-foreground" />
            </button>

            {submitted ? (
              /* Success State */
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-6">
                  <Check className="text-accent" size={28} />
                </div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
                  Request Received
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Thank you for your interest. Our team will contact you within 24 hours to confirm your appointment.
                </p>
                <button onClick={handleClose} className="btn-primary">
                  Done
                </button>
              </div>
            ) : (
              /* Form State */
              <div className="space-y-6">
                <div>
                  <h2 id="booking-title" className="font-serif text-3xl font-bold text-foreground mb-2">
                    Book Your Appointment
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    Schedule your complimentary consultation with our expert team
                  </p>
                </div>

                {/* Form */}
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="booking-name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <input
                      id="booking-name"
                      type="text"
                      placeholder="Your name"
                      required
                      className="w-full bg-secondary/50 border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>

                  <div>
                    <label htmlFor="booking-email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      id="booking-email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="w-full bg-secondary/50 border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>

                  <div>
                    <label htmlFor="booking-phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      id="booking-phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      required
                      className="w-full bg-secondary/50 border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>

                  <div>
                    <label htmlFor="booking-treatment" className="block text-sm font-medium text-foreground mb-2">
                      Treatment Interest
                    </label>
                    <select
                      id="booking-treatment"
                      defaultValue=""
                      className="w-full bg-secondary/50 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option className="bg-secondary" value="">
                        Select a treatment
                      </option>
                      <option className="bg-secondary" value="botox">
                        Smooth Texture
                      </option>
                      <option className="bg-secondary" value="fillers">
                        Restore Volume
                      </option>
                      <option className="bg-secondary" value="laser">
                        Brighten Tone
                      </option>
                      <option className="bg-secondary" value="consultation">
                        General Consultation
                      </option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="booking-message" className="block text-sm font-medium text-foreground mb-2">
                      Message (Optional)
                    </label>
                    <textarea
                      id="booking-message"
                      placeholder="Tell us about your aesthetic goals..."
                      rows={3}
                      className="w-full bg-secondary/50 border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    />
                  </div>

                  <button type="submit" className="w-full btn-primary">
                    Confirm Appointment
                  </button>
                </form>

                <p className="text-muted-foreground text-xs text-center">
                  We&apos;ll contact you within 24 hours to confirm your appointment
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
