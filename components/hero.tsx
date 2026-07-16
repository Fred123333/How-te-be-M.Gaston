'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/hero-bread.png"
        alt="Moulin de France - Pain artisanal"
        fill
        className="object-cover"
        priority
        quality={90}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        {/* Animated Title */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-4 text-balance"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, type: 'spring', stiffness: 100 }}
        >
          Moulin de France
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl font-light mb-8 text-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          L&apos;excellence en chaque bouchée
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#menu" className="premium-button bg-white text-primary hover:shadow-xl">
            Découvrir le Menu
          </a>
          <a href="#localisation" className="premium-button-secondary border-2 border-white text-white hover:bg-white hover:text-primary">
            Nous Rendre Visite
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} className="text-white" />
      </motion.div>
    </section>
  )
}
