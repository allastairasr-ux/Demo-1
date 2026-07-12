'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

interface Result {
  id: number
  title: string
  age: number
  treatment: string
  downtime: string
  before: string
  after: string
}

const results: Result[] = [
  {
    id: 1,
    title: 'Radiant Glow',
    age: 42,
    treatment: 'The Rested Package',
    downtime: '24 hours',
    before: '/placeholder-before-1.png',
    after: '/placeholder-after-1.png',
  },
  {
    id: 2,
    title: 'Volume Restoration',
    age: 38,
    treatment: 'Volume Restore Plan',
    downtime: '48 hours',
    before: '/placeholder-before-2.png',
    after: '/placeholder-after-2.png',
  },
]

export default function BeforeAfter() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)
  const current = results[activeIndex]

  const updateSliderFromClientX = (container: HTMLDivElement, clientX: number) => {
    const rect = container.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, percentage)))
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    updateSliderFromClientX(e.currentTarget, e.clientX)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches[0]) {
      updateSliderFromClientX(e.currentTarget, e.touches[0].clientX)
    }
  }

  return (
    <section
      id="before-after"
      className="relative w-full py-20 md:py-32 px-4 md:px-6 lg:px-8 bg-secondary/50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Real Results
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            See the transformations our patients have achieved
          </p>
        </motion.div>

        {/* Comparison Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-12"
        >
          <div
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="card relative w-full max-w-4xl mx-auto overflow-hidden cursor-col-resize group touch-none"
          >
            {/* Before Image */}
            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] bg-black">
              <Image
                src={current.before}
                alt="Before treatment"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 glass px-3 py-1 rounded">
                <span className="text-xs font-medium text-foreground">Before</span>
              </div>
            </div>

            {/* After Image with Slider */}
            <div
              className="absolute inset-0 w-full h-full"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <Image
                src={current.after}
                alt="After treatment"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 glass px-3 py-1 rounded">
                <span className="text-xs font-medium text-foreground">After</span>
              </div>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-accent group-hover:w-2 transition-all"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg">
                <div className="flex gap-1">
                  <div className="w-0.5 h-4 bg-black/50" />
                  <div className="w-0.5 h-4 bg-black/50" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Details Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: '-100px' }}
          className="card max-w-2xl mx-auto mb-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-accent text-xl md:text-2xl font-bold">{current.age}</p>
              <p className="text-muted-foreground text-xs md:text-sm">Age</p>
            </div>
            <div>
              <p className="text-accent text-xl md:text-2xl font-bold">{current.treatment}</p>
              <p className="text-muted-foreground text-xs md:text-sm">Treatment</p>
            </div>
            <div>
              <p className="text-accent text-xl md:text-2xl font-bold">{current.downtime}</p>
              <p className="text-muted-foreground text-xs md:text-sm">Downtime</p>
            </div>
            <div>
              <p className="text-accent text-xl md:text-2xl font-bold">4.9★</p>
              <p className="text-muted-foreground text-xs md:text-sm">Rating</p>
            </div>
          </div>
        </motion.div>

        {/* Navigation Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: '-100px' }}
          className="flex justify-center gap-3"
        >
          {results.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeIndex
                  ? 'bg-accent w-8'
                  : 'bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to result ${index + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
