'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Flame, Building2, Star, Globe } from 'lucide-react'

const values = [
  {
    title: 'Passion',
    description: 'Nous mettons du cœur dans chaque création culinaire',
    Icon: Flame,
  },
  {
    title: 'Tradition',
    description: 'Techniques artisanales transmises de générations',
    Icon: Building2,
  },
  {
    title: 'Qualité',
    description: 'Ingrédients premium sélectionnés avec soin',
    Icon: Star,
  },
  {
    title: 'Authenticité',
    description: 'Saveurs authentiques du terroir africain',
    Icon: Globe,
  },
]

export default function About() {
  return (
    <section id="histoire" className="premium-section bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            className="relative h-96 md:h-full md:min-h-96"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/bakery-display.png"
              alt="Nos créations artisanales"
              fill
              className="object-cover rounded-lg shadow-lg"
              quality={90}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="premium-text mb-6 text-primary">Notre Histoire</h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Moulin de France Douala est bien plus qu&apos;un restaurant. C&apos;est une célébration de l&apos;excellence culinaire, 
              où tradition et modernité se rencontrent pour créer une expérience inoubliable.
            </p>

            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Depuis notre création, nous nous engageons à offrir les meilleures pâtisseries, 
              pains artisanaux et plats gourmands, préparés avec passion par nos chefs talentueux.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="p-4 rounded-lg bg-card hover:shadow-lg transition-all cursor-pointer group"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ y: -8, boxShadow: '0 20px 25px rgba(238, 166, 55, 0.15)' }}
                  transition={{ duration: 0.5, delay: index * 0.15, type: 'spring' }}
                  viewport={{ once: true }}
                >
                  <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.6 }}>
                    <value.Icon size={32} className="text-accent mb-2" />
                  </motion.div>
                  <h3 className="font-serif font-semibold text-primary mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
