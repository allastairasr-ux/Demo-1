'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface HeaderProps {
  onBookClick?: () => void
}

export default function Header({ onBookClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = ['services', 'before-after', 'pricing', 'faq', 'team', 'why-us']

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false)
    }
    if (isMenuOpen) {
      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMenuOpen])

  const menuItems = [
    { label: 'Treatments', href: '#services' },
    { label: 'Results', href: '#before-after' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Team', href: '#team' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '/contact' },
  ]

  const isActive = (href: string) => {
    if (href.startsWith('/')) return false
    return activeSection === href.slice(1)
  }

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass py-4 backdrop-blur-md bg-black/30 border-b border-white/10'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <div className="text-2xl md:text-3xl font-serif font-bold bg-gradient-to-r from-accent to-yellow-300 bg-clip-text text-transparent">
              AURA
            </div>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm transition-colors duration-200 relative ${
                isActive(item.href)
                  ? 'text-accent'
                  : 'text-foreground hover:text-accent'
              }`}
            >
              {item.label}
              {isActive(item.href) && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                />
              )}
            </a>
          ))}
        </nav>

        {/* CTA Button & Mobile Menu */}
        <div className="flex items-center gap-4">
          <button
            onClick={onBookClick}
            className="btn-primary hidden sm:inline-block text-sm"
          >
            Book Now
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground hover:text-accent transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden glass mt-4 mx-4 p-6 space-y-4"
        >
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`block py-2 transition-colors ${
                isActive(item.href)
                  ? 'text-accent'
                  : 'text-foreground hover:text-accent'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => {
              onBookClick?.()
              setIsMenuOpen(false)
            }}
            className="w-full btn-primary text-sm"
          >
            Book Appointment
          </button>
        </motion.div>
      )}
    </header>
  )
}
