'use client'

import { motion } from 'framer-motion'
import { Calendar, Users, Gift, Sparkles, ChevronRight } from 'lucide-react'

const events = [
  {
    icon: Gift,
    title: 'Anniversaires',
    description: 'Célébrez vos moments spéciaux dans une ambiance festive et raffinée',
  },
  {
    icon: Users,
    title: 'Mariages',
    description: 'Organisez votre mariage de rêve avec notre équipe professionnelle',
  },
  {
    icon: Calendar,
    title: 'Buffets',
    description: 'Repas de groupe avec sélection de nos meilleures créations',
  },
  {
    icon: Sparkles,
    title: 'Réceptions',
    description: 'Événements professionnels dans un cadre élégant et accueillant',
  },
]

export default function Events() {
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
          <h2 className="premium-text mb-4">Événements & Réceptions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Moulin de France est le lieu idéal pour vos moments importants
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => {
            const Icon = event.icon
            return (
              <motion.div
                key={index}
                className="bg-card p-8 rounded-lg text-center hover:shadow-lg transition-all group cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {/* Icon */}
                <div 
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center group-hover:opacity-80 transition-opacity"
                  style={{ backgroundColor: 'rgba(238, 166, 55, 0.1)' }}
                >
                  <Icon size={32} className="text-accent" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-serif font-semibold text-primary mb-3">
                  {event.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-6">
                  {event.description}
                </p>

                {/* CTA */}
                <motion.a
                  href="https://wa.me/237123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent font-semibold group-hover:text-primary transition-colors"
                  whileHover={{ x: 5 }}
                >
                  En savoir plus
                  <ChevronRight size={18} />
                </motion.a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
