'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import BeforeAfter from '@/components/BeforeAfter'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import BookingModal from '@/components/BookingModal'
import ScrollToTop from '@/components/ScrollToTop'
import CTA from '@/components/CTA'
import { useState } from 'react'

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <main className="relative bg-background text-foreground">
      <Header onBookClick={openModal} />
      <Hero onBookClick={openModal} />
      <Services />
      <CTA 
        title="Ready to Transform Your Skin?"
        description="Book a complimentary consultation with our expert team to discuss your aesthetic goals."
        buttonText="Book Your Consultation"
        onCtaClick={openModal}
      />
      <BeforeAfter />
      <Pricing onBookClick={openModal} />
      <Testimonials />
      <FAQ />
      <CTA 
        title="Join Our Loyalty Program"
        description="Become a member and enjoy exclusive benefits, priority booking, and special member-only pricing."
        buttonText="Reserve Your Membership Today"
        onCtaClick={openModal}
        variant="accent"
      />
      <Footer onBookClick={openModal} />
      <BookingModal isOpen={isModalOpen} onClose={closeModal} />
      <ScrollToTop />
    </main>
  )
}
