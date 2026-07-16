'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, MessageSquare } from 'lucide-react'

export default function Location() {
  return (
    <section id="localisation" className="premium-section bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="premium-text mb-4">Nous Rendre Visite</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Moulin de France vous accueille dans une ambiance chaleureuse et raffinée
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Map Container */}
          <motion.div
            className="h-96 rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.7456789012347!2d9.767857!3d4.048920!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106212d1234567%3A0x1234567890abcdef!2sDouala%2C%20Cameroon!5e0!3m2!1sfr!2scm!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation Moulin de France Douala"
            />
          </motion.div>

          {/* Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Address */}
            <motion.div
              className="mb-8 p-6 bg-background rounded-lg hover:shadow-lg transition-all"
              whileHover={{ y: -5 }}
            >
              <div className="flex gap-4 items-start">
                <MapPin className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-serif font-semibold text-primary mb-2 text-lg">
                    Adresse
                  </h3>
                  <p className="text-muted-foreground">
                    123 Avenue Principale<br />
                    Douala, Littoral<br />
                    Cameroun
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              className="mb-8 p-6 bg-background rounded-lg hover:shadow-lg transition-all"
              whileHover={{ y: -5 }}
            >
              <div className="flex gap-4 items-start">
                <Phone className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-serif font-semibold text-primary mb-2 text-lg">
                    Téléphone
                  </h3>
                  <a
                    href="tel:+237123456789"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +237 123 456 789
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div
              className="mb-8 p-6 bg-background rounded-lg hover:shadow-lg transition-all"
              whileHover={{ y: -5 }}
            >
              <div className="flex gap-4 items-start">
                <Clock className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-serif font-semibold text-primary mb-2 text-lg">
                    Horaires
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Lun - Dim: 07:00 - 22:00<br />
                    <span className="text-xs text-accent">Ouvert tous les jours</span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/237123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageSquare size={20} />
              Contactez-nous sur WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
