'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { X, Eye } from 'lucide-react'

const galleryImages = [
  {
    id: 1,
    src: '/hero-bread.png',
    alt: 'Pains artisanaux',
    size: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 2,
    src: '/restaurant-ambiance.png',
    alt: 'Ambiance du restaurant',
    size: 'md:col-span-1',
  },
  {
    id: 3,
    src: '/pastry-dessert.png',
    alt: 'Pâtisseries fines',
    size: 'md:col-span-1',
  },
  {
    id: 4,
    src: '/gallery-1.png',
    alt: 'Clients heureux',
    size: 'md:col-span-1',
  },
  {
    id: 5,
    src: '/premium-coffee.png',
    alt: 'Café espresso',
    size: 'md:col-span-1',
  },
  {
    id: 6,
    src: '/specialty-pizza.png',
    alt: 'Pizza artisanale',
    size: 'md:col-span-2',
  },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)

  return (
    <section id="galerie" className="premium-section bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="premium-text mb-4">Galerie</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Immergez-vous dans l&apos;atmosphère chaleureuse et raffinée de Moulin de France
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[200px] md:auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className={`${image.size} relative group cursor-pointer overflow-hidden rounded-lg shadow-lg`}
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12, type: 'spring' }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, boxShadow: '0 30px 60px rgba(65, 20, 27, 0.3)' }}
              onClick={() => setSelectedImage(image)}
            >
              <motion.div className="w-full h-full" whileHover={{ scale: 1.2 }} transition={{ duration: 0.6 }}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  quality={85}
                />
              </motion.div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <Eye size={32} className="mb-2 mx-auto" />
                  <p className="text-sm font-medium">Voir détail</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="relative w-full h-full max-w-4xl"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              quality={95}
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-accent transition-colors"
            >
              <X size={32} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
