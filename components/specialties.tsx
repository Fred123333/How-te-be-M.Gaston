'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const specialties = [
  {
    id: 1,
    name: 'Pâtisseries',
    description: 'Créations délicates et raffinées',
    image: '/pastry-dessert.png',
    price: 'À partir de 3 000 FCFA',
  },
  {
    id: 2,
    name: 'Pizzas Artisanales',
    description: 'Pâte traditionnelle, ingrédients premium',
    image: '/specialty-pizza.png',
    price: 'À partir de 5 000 FCFA',
  },
  {
    id: 3,
    name: 'Burgers Gourmets',
    description: 'Viandes sélectionnées, pains faits maison',
    image: '/premium-burger.png',
    price: 'À partir de 4 500 FCFA',
  },
  {
    id: 4,
    name: 'Glaces Artisanales',
    description: 'Saveurs créatives et naturelles',
    image: '/gallery-2.png',
    price: 'À partir de 1 500 FCFA',
  },
]

export default function Specialties() {
  return (
    <section id="specialites" className="premium-section bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="premium-text mb-4">Nos Spécialités</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos créations iconiques, élaborées avec passion et raffinement
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((specialty, index) => (
            <motion.div
              key={specialty.id}
              className="bg-background rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 cursor-pointer group"
              initial={{ opacity: 0, y: 30, rotateY: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12, type: 'spring', stiffness: 80 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: '0 30px 60px rgba(65, 20, 27, 0.2)' }}
            >
              {/* Image Container */}
              <div className="relative h-48 md:h-56 overflow-hidden bg-muted">
                <motion.div whileHover={{ scale: 1.15 }} transition={{ duration: 0.6 }}>
                  <Image
                    src={specialty.image}
                    alt={specialty.name}
                    fill
                    className="object-cover"
                    quality={85}
                  />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-primary mb-2">
                  {specialty.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {specialty.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-accent font-semibold text-sm">
                    {specialty.price}
                  </span>
                  <button className="text-primary hover:text-accent transition-colors">
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
