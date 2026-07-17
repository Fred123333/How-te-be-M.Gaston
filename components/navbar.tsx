'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#histoire', label: 'Notre Histoire' },
    { href: '#specialites', label: 'Spécialités' },
    { href: '#menu', label: 'Menu' },
    { href: '#galerie', label: 'Galerie' },
    { href: '#localisation', label: 'Contact' },
  ]

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 md:py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image src="/logo.jpg" alt="Moulin de France" width={70} height={70} className="rounded-full border-2 border-primary" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.div key={link.href} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors relative group ${
                  isScrolled
                    ? 'text-primary hover:text-accent'
                    : 'text-white hover:text-accent'
                }`}
              >
                {link.label}
                <motion.span
                  className={`absolute bottom-0 left-0 h-0.5 ${isScrolled ? 'bg-accent' : 'bg-white'}`}
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <motion.div className="hidden md:flex gap-4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
          <motion.a
            href="https://wa.me/237123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-accent text-primary font-medium rounded-lg transition-all"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 25px rgba(238, 166, 55, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            WhatsApp
          </motion.a>
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${isScrolled ? 'text-primary' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-white border-t border-border"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-primary hover:text-accent font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/237123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-6 py-2 bg-accent text-primary font-medium rounded-lg text-center"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
