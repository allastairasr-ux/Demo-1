'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

interface FAQItem {
  id: number
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: 'Is the treatment safe?',
    answer:
      'Yes, all our treatments are FDA-approved and performed by licensed medical professionals with years of experience. We follow strict safety protocols and use only premium, medical-grade products.',
  },
  {
    id: 2,
    question: 'How much downtime should I expect?',
    answer:
      'Most treatments have minimal downtime. Depending on the procedure, you may experience mild redness or swelling for 24-48 hours. We provide detailed aftercare instructions to minimize any discomfort.',
  },
  {
    id: 3,
    question: 'When will I see results?',
    answer:
      'Some results are visible immediately, while others develop over 2-4 weeks as your body naturally responds to the treatment. Full results typically appear within 4-6 weeks.',
  },
  {
    id: 4,
    question: 'How long do results last?',
    answer:
      'Results vary depending on the treatment. Most aesthetic treatments last 3-6 months. Our membership plans are designed to help you maintain optimal results year-round.',
  },
  {
    id: 5,
    question: 'Do you offer financing options?',
    answer:
      'Yes, we offer flexible financing plans to make treatments more accessible. We work with several healthcare financing partners to provide payment options that fit your budget.',
  },
  {
    id: 6,
    question: 'Can I combine treatments?',
    answer:
      'Absolutely. Many patients combine treatments for enhanced results. Our specialists will create a personalized treatment plan tailored to your goals during your consultation.',
  },
]

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(0)

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section
      id="faq"
      className="relative w-full py-20 md:py-32 px-4 md:px-6 lg:px-8"
    >
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Everything you need to know about our treatments
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-4"
        >
          {faqItems.map((item) => (
            <motion.div
              key={item.id}
              initial={false}
              animate={{
                backgroundColor:
                  openId === item.id
                    ? 'rgba(212, 175, 55, 0.05)'
                    : 'transparent',
              }}
              transition={{ duration: 0.2 }}
              className="card group cursor-pointer"
              onClick={() => toggleFAQ(item.id)}
            >
              <button
                className="w-full flex items-center justify-between py-4"
                aria-expanded={openId === item.id}
              >
                <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground text-left">
                  {item.question}
                </h3>
                <motion.div
                  animate={{ rotate: openId === item.id ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 ml-4"
                >
                  <ChevronDown
                    size={20}
                    className="text-accent group-hover:text-yellow-300 transition-colors"
                  />
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openId === item.id ? 'auto' : 0,
                  opacity: openId === item.id ? 1 : 0,
                }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed pb-4 border-t border-white/10 pt-4">
                  {item.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center text-muted-foreground text-sm mt-12"
        >
          Have more questions?{' '}
          <a href="/contact" className="text-accent hover:text-yellow-300 transition-colors">
            Contact our team
          </a>
        </motion.p>
      </div>
    </section>
  )
}
