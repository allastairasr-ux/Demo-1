'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Star } from 'lucide-react'

interface MobileCTABarProps {
  onBookClick: () => void
}

export default function MobileCTABar({ onBookClick }: MobileCTABarProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        exit={{ y: 100 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
      >
        <div className="glass border-t border-white/10 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
          <div className="flex items-center gap-3">
            {/* Social proof */}
            <div className="flex flex-col items-center justify-center flex-shrink-0">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={10} className="fill-accent text-accent" />
                ))}
              </div>
              <span className="text-[10px] text-muted-foreground mt-0.5">4.9 · 412 reviews</span>
            </div>

            {/* CTA */}
            <button
              onClick={onBookClick}
              className="btn-primary flex-1 text-sm py-2.5"
            >
              Book Free Consultation
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
