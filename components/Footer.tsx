'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Heart, Globe } from 'lucide-react'

interface FooterProps {
  onBookClick?: () => void
}

export default function Footer({ onBookClick }: FooterProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer className="relative w-full bg-gradient-to-br from-primary/30 to-primary/10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 py-16 md:py-20"
        >
          {/* Left Column - Company Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="mb-6">
              <h3 className="text-xl font-serif font-bold bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent mb-2">
                AURA
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Luxury medical aesthetics for the discerning individual. Transforming lives through science and artistry.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href="tel:+15550000000"
                className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group"
              >
                <Phone size={18} className="text-accent flex-shrink-0" />
                <span className="text-sm">(555) 000-0000</span>
              </a>
              <a
                href="mailto:hello@aura.com"
                className="flex items-center gap-3 text-foreground hover:text-accent transition-colors"
              >
                <Mail size={18} className="text-accent flex-shrink-0" />
                <span className="text-sm">hello@aura.com</span>
              </a>
              <div className="flex items-center gap-3 text-foreground">
                <MapPin size={18} className="text-accent flex-shrink-0" />
                <span className="text-sm">123 Wellness Ave, NY 10001</span>
              </div>
            </div>
          </motion.div>

          {/* Center Column - Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-foreground mb-6">
              Services
            </h4>

            <nav className="space-y-3">
              {[
                { label: 'Smooth Texture', href: '#services' },
                { label: 'Restore Volume', href: '#services' },
                { label: 'Brighten Tone', href: '#services' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'FAQ', href: '#faq' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-accent transition-colors text-sm block"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Right Column - Contact CTA & Social */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h4 className="font-serif text-lg font-bold text-foreground mb-4">
                Ready to Begin?
              </h4>
              <button
                onClick={onBookClick}
                className="w-full btn-primary text-sm"
              >
                Secure Your Slot Now
              </button>
            </div>

            <div className="pt-4 border-t border-white/10">
              <p className="text-muted-foreground text-xs mb-4">Follow Our Journey</p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-2 glass rounded-lg hover:bg-white/10 transition-colors text-accent hover:text-yellow-300"
                  aria-label="Our Values"
                >
                  <Heart size={18} />
                </a>
                <a
                  href="#"
                  className="p-2 glass rounded-lg hover:bg-white/10 transition-colors text-accent hover:text-yellow-300"
                  aria-label="Website"
                >
                  <Globe size={18} />
                </a>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="p-3 glass rounded-lg border border-white/10 text-center">
              <p className="text-accent text-xs font-semibold mb-1">HIPAA Compliant</p>
              <p className="text-muted-foreground text-xs">Your privacy is protected</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: '-100px' }}
          className="border-t border-white/10 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground"
        >
          <p>&copy; 2026 Aura Medical Aesthetics. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
            <a href="/contact" className="hover:text-accent transition-colors">
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
