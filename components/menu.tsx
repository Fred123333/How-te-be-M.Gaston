'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const menuItems = [
  {
    category: 'petit-dejeuner',
    name: 'Croissant Beurre Pur',
    description: 'Croissant feuilleté avec beurre de qualité',
    price: '2 500 FCFA',
  },
  {
    category: 'petit-dejeuner',
    name: 'Omelette Spéciale',
    description: 'Oeufs frais, fromage artisanal, herbes fraîches',
    price: '4 500 FCFA',
  },
  {
    category: 'petit-dejeuner',
    name: 'Petit Déjeuner Complet',
    description: 'Pain, fromage, jambon, œufs, jus frais',
    price: '8 000 FCFA',
  },
  {
    category: 'dejeuner',
    name: 'Pizza Quatre Fromages',
    description: 'Mozzarella, chèvre, comté, ricotta',
    price: '6 500 FCFA',
  },
  {
    category: 'dejeuner',
    name: 'Burger Signature',
    description: 'Viande hachée artisanale, cheddar affiné',
    price: '5 500 FCFA',
  },
  {
    category: 'dejeuner',
    name: 'Salade Composée',
    description: 'Laitue, tomate, concombre, vinaigrette maison',
    price: '4 000 FCFA',
  },
  {
    category: 'diner',
    name: 'Filet Premium',
    description: 'Viande de qualité, sauce béarnaise',
    price: '12 000 FCFA',
  },
  {
    category: 'diner',
    name: 'Pâtes Fraîches',
    description: 'Pâtes artisanales, sauce bolognaise maison',
    price: '7 500 FCFA',
  },
  {
    category: 'diner',
    name: 'Plateau Gourmet',
    description: 'Sélection de charcuteries et fromages',
    price: '10 000 FCFA',
  },
  {
    category: 'boissons',
    name: 'Café Espresso',
    description: 'Grains sélectionnés, préparation parfaite',
    price: '1 500 FCFA',
  },
  {
    category: 'boissons',
    name: 'Chocolate Chaud',
    description: 'Chocolat premium, lait frais, mousse',
    price: '2 500 FCFA',
  },
  {
    category: 'boissons',
    name: 'Jus Naturel Frais',
    description: 'Fruits frais pressés du jour',
    price: '2 000 FCFA',
  },
  {
    category: 'desserts',
    name: 'Tarte au Citron',
    description: 'Pâte sablée, crème de citron, meringue',
    price: '3 500 FCFA',
  },
  {
    category: 'desserts',
    name: 'Mousse au Chocolat',
    description: 'Chocolat noir 70%, crème fouettée',
    price: '3 000 FCFA',
  },
  {
    category: 'desserts',
    name: 'Glace Artisanale',
    description: 'Parfums du jour, sauce caramel',
    price: '2 500 FCFA',
  },
]

const categories = [
  { id: 'petit-dejeuner', label: 'Petit Déjeuner' },
  { id: 'dejeuner', label: 'Déjeuner' },
  { id: 'diner', label: 'Dîner' },
  { id: 'boissons', label: 'Boissons' },
  { id: 'desserts', label: 'Desserts & Pâtisseries' },
]

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('petit-dejeuner')

  const filteredItems = menuItems.filter(item => item.category === activeCategory)

  return (
    <section id="menu" className="premium-section bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="premium-text mb-4">Notre Menu</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explorez nos créations culinaires à travers différentes catégories
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap gap-3 mb-12 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {categories.map((cat, idx) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="wait">
            {filteredItems.map((item, index) => (
              <motion.div
                key={`${activeCategory}-${index}`}
                className="border-l-4 border-accent pl-6 py-4 rounded-r-lg bg-card hover:shadow-lg group cursor-pointer"
                initial={{ opacity: 0, x: -30, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 30, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.08, type: 'spring' }}
                whileHover={{ x: 8, paddingLeft: '32px', boxShadow: '0 10px 30px rgba(238, 166, 55, 0.2)' }}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-serif font-semibold text-primary group-hover:text-accent transition-colors">
                    {item.name}
                  </h3>
                  <motion.span 
                    className="text-accent font-semibold ml-4"
                    whileHover={{ scale: 1.1 }}
                  >
                    {item.price}
                  </motion.span>
                </div>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
