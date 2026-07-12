'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import BookingModal from '@/components/BookingModal'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    })
  }

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      details: '(555) 000-0000',
      subtext: 'Mon-Fri: 9AM-6PM EST',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'hello@aura.com',
      subtext: 'We respond within 24 hours',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '123 Wellness Ave',
      subtext: 'New York, NY 10001',
    },
    {
      icon: Clock,
      title: 'Hours',
      details: 'Mon-Fri: 9AM-6PM',
      subtext: 'Sat: 10AM-4PM EST',
    },
  ]

  return (
    <main id="main-content" className="relative bg-background text-foreground min-h-screen">
      <Header onBookClick={() => setIsModalOpen(true)} />

      <div className="pt-32 pb-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-20"
          >
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Get in Touch
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have questions about our treatments? We&apos;d love to hear from you. Reach out using the form below or contact us directly.
            </p>
          </motion.div>

          {/* Contact Methods Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
          >
            {contactMethods.map((method, idx) => {
              const Icon = method.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + idx * 0.1 }}
                  className="card text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 mb-4">
                    <Icon className="text-accent" size={24} />
                  </div>
                  <h3 className="font-serif text-lg font-bold mb-1">{method.title}</h3>
                  <p className="text-foreground font-medium text-sm">{method.details}</p>
                  <p className="text-muted-foreground text-xs mt-1">{method.subtext}</p>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card"
          >
            <h2 className="font-serif text-2xl font-bold mb-6">Send us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                    className="w-full bg-secondary/50 border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                    className="w-full bg-secondary/50 border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-secondary/50 border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-secondary/50 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                >
                  <option className="bg-secondary" value="">
                    Select a subject
                  </option>
                  <option className="bg-secondary" value="general">
                    General Inquiry
                  </option>
                  <option className="bg-secondary" value="consultation">
                    Consultation Request
                  </option>
                  <option className="bg-secondary" value="pricing">
                    Pricing Information
                  </option>
                  <option className="bg-secondary" value="other">
                    Other
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us how we can help..."
                  rows={5}
                  required
                  className="w-full bg-secondary/50 border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                />
              </div>

              <div className="flex gap-4">
                <button type="submit" className="btn-primary flex-1">
                  Send Message
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="btn-secondary flex-1"
                >
                  Book Appointment
                </button>
              </div>
            </form>

            <p className="text-muted-foreground text-xs text-center mt-6">
              We respect your privacy. Your information will only be used to respond to your inquiry.
            </p>
          </motion.div>
        </div>
      </div>

      <Footer onBookClick={() => setIsModalOpen(true)} />
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <ScrollToTop />
    </main>
  )
}
