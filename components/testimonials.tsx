'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Marie Ndongo',
    role: 'Directrice Marketing',
    text: 'Moulin de France est devenu mon restaurant favori. Les pâtisseries sont absolument délicieuses et le service est impeccable.',
    rating: 5,
    initials: 'MN',
  },
  {
    id: 2,
    name: 'Jean-Claude Eyong',
    role: 'Entrepreneur',
    text: 'Un lieu de convivialité où la qualité est au rendez-vous. Les pizzas et burgers sont excellents. Je recommande vivement!',
    rating: 5,
    initials: 'JE',
  },
  {
    id: 3,
    name: 'Sophie Mukam',
    role: 'Architecte',
    text: 'L\'atmosphère est chaleureuse, les plats sont sophistiqués et les prix sont justes. C\'est vraiment un bijou à Douala.',
    rating: 5,
    initials: 'SM',
  },
  {
    id: 4,
    name: 'Paul Tanga',
    role: 'Professeur',
    text: 'Les croissants et pains frais du matin sont incomparables. Je viens ici chaque weekend en famille.',
    rating: 5,
    initials: 'PT',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [autoplay])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoplay(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setAutoplay(false)
  }

  return (
    <section className="premium-section bg-card">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="premium-text mb-4">Avis de Nos Clients</h2>
          <p className="text-lg text-muted-foreground">
            Découvrez ce que nos clients disent de leur expérience
          </p>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="bg-background p-8 md:p-12 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Avatar */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-primary font-serif font-bold text-lg">
                  {testimonials[currentIndex].initials}
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                  <Star key={i} size={20} className="fill-accent text-accent" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-xl text-center text-foreground mb-8 italic">
                &quot;{testimonials[currentIndex].text}&quot;
              </p>

              {/* Author */}
              <div className="text-center">
                <h3 className="text-lg font-serif font-semibold text-primary">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 p-2 rounded-full transition-colors hover:opacity-70"
            style={{ backgroundColor: 'rgba(238, 166, 55, 0.1)' }}
            aria-label="Précédent"
          >
            <ChevronLeft size={24} className="text-primary" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 p-2 rounded-full transition-colors hover:opacity-70"
            style={{ backgroundColor: 'rgba(238, 166, 55, 0.1)' }}
            aria-label="Suivant"
          >
            <ChevronRight size={24} className="text-primary" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setAutoplay(false)
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-primary w-8' : 'bg-muted'
                }`}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
