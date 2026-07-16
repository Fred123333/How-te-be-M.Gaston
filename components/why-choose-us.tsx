'use client'

import { motion } from 'framer-motion'
import { Leaf, Clock, Users, Award } from 'lucide-react'

const reasons = [
  {
    icon: Leaf,
    title: 'Produits Frais',
    description: 'Ingrédients sélectionnés quotidiennement auprès de producteurs locaux',
  },
  {
    icon: Award,
    title: 'Cuisine Artisanale',
    description: 'Chefs talentueux utilisant des techniques traditionnelles',
  },
  {
    icon: Clock,
    title: 'Service Rapide',
    description: 'Préparation soignée sans compromettre la qualité',
  },
  {
    icon: Users,
    title: 'Cadre Chaleureux',
    description: 'Atmosphère accueillante pour familles et clients',
  },
  {
    icon: Award,
    title: 'Qualité Premium',
    description: 'Chaque produit répond à nos standards élevés',
  },
  {
    icon: Leaf,
    title: 'Authenticité',
    description: 'Goûts authentiques du terroir africain et international',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="premium-section bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="premium-text mb-4">Pourquoi Choisir Moulin de France</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Six raisons qui font de nous le restaurant préféré de Douala
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={index}
                className="text-center group p-6 rounded-lg bg-card hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15, type: 'spring', stiffness: 100 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(238, 166, 55, 0.2)' }}
              >
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(238, 166, 55, 0.1)' }}
                  whileHover={{ scale: 1.2, rotate: 360, backgroundColor: 'rgba(238, 166, 55, 0.25)' }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon size={32} className="text-accent" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-serif font-semibold text-primary mb-2">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground">
                  {reason.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
