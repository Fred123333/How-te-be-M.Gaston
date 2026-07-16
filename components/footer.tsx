'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Share2, Heart, Send } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-serif font-bold mb-4">Moulin de France</h3>
            <p className="text-primary-foreground/80 text-sm">
              L&apos;excellence en chaque bouchée. Restaurant & pâtisserie haut de gamme à Douala.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-serif font-semibold mb-4">Navigation</h4>
            <nav className="space-y-2 text-sm">
              <Link href="#histoire" className="hover:text-accent transition-colors">
                Notre Histoire
              </Link>
              <Link href="#specialites" className="block hover:text-accent transition-colors">
                Spécialités
              </Link>
              <Link href="#menu" className="block hover:text-accent transition-colors">
                Menu
              </Link>
              <Link href="#galerie" className="block hover:text-accent transition-colors">
                Galerie
              </Link>
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-serif font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <a
                href="tel:+237123456789"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Phone size={16} />
                +237 123 456 789
              </a>
              <a
                href="mailto:info@moulindefrance.cm"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <Mail size={16} />
                info@moulindefrance.cm
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-1" />
                <span>123 Avenue Principale<br />Douala, Cameroun</span>
              </div>
            </div>
          </motion.div>

          {/* Horaires */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-serif font-semibold mb-4">Horaires</h4>
            <div className="space-y-2 text-sm">
              <p>Lundi - Dimanche</p>
              <p className="text-accent font-semibold">07:00 - 22:00</p>
              <p className="text-primary-foreground/70 text-xs">
                Ouvert tous les jours
              </p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8 mb-8" />

        {/* Social & Copyright */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full transition-colors hover:opacity-80"
              style={{ backgroundColor: 'rgba(238, 166, 55, 0.1)' }}
              aria-label="Facebook"
            >
              <Share2 size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full transition-colors hover:opacity-80"
              style={{ backgroundColor: 'rgba(238, 166, 55, 0.1)' }}
              aria-label="Instagram"
            >
              <Heart size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full transition-colors hover:opacity-80"
              style={{ backgroundColor: 'rgba(238, 166, 55, 0.1)' }}
              aria-label="Twitter"
            >
              <Send size={20} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-primary-foreground/60">
            © 2024 Moulin de France Douala. Tous droits réservés.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
