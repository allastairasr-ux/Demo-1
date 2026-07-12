'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const team = [
  {
    name: 'Dr. Vivian Chen',
    role: 'Medical Director',
    credentials: 'MD, FAAD',
    bio: 'Board-certified dermatologist with over 15 years specializing in injectables and laser resurfacing.',
    image: '/placeholder-user.jpg',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Lead Aesthetic Nurse',
    credentials: 'RN, CANS',
    bio: 'Certified aesthetic nurse specialist with advanced training in facial anatomy and contouring.',
    image: '/placeholder-user.jpg',
  },
  {
    name: 'Dr. James Park',
    role: 'Cosmetic Physician',
    credentials: 'MD, AAFP',
    bio: 'Pioneer in non-surgical rejuvenation techniques with a focus on natural, harmonious results.',
    image: '/placeholder-user.jpg',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function Team() {
  return (
    <section id="team" className="relative w-full py-20 md:py-32 px-4 md:px-6 lg:px-8 bg-secondary/50">
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
            Meet Your Specialists
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Expert hands you can trust with your aesthetic journey
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {team.map((member) => (
            <motion.div key={member.name} variants={itemVariants} className="card-hover group">
              {/* Photo */}
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 bg-secondary">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="glass px-3 py-1 rounded text-xs font-medium text-accent">
                    {member.credentials}
                  </span>
                </div>
              </div>

              {/* Info */}
              <h3 className="font-serif text-xl font-bold mb-1 text-foreground">
                {member.name}
              </h3>
              <p className="text-accent text-sm font-medium mb-3">{member.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
