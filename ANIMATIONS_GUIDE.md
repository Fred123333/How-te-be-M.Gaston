# Guide Complet des Animations - Moulin de France Website

## Animations Spectaculaires Ajoutées

### 1. Navigation Bar
- **Fade-in au chargement** avec translateY
- **Underline hover effect** sur les liens avec width animation
- **Stagger animation** des liens (delay de 0.1s chacun)
- **Bouton WhatsApp** avec scale et shadow au survol
- **Smooth transitions** au scroll

### 2. Hero Section
- **Spring animation** sur le titre (stiffness: 100) avec scale et opacity
- **Chevron animé** au bas de la page (bounce continu)
- **Subtitle et CTA** qui apparaissent avec delay

### 3. About Section
- **Icônes qui tournent** au survol (rotate 360°)
- **Cartes de valeurs** avec spring animation et scale
- **Elevation au survol** (y: -8px)

### 4. Specialties
- **RotateY 3D au scroll** (initial rotateY: -20)
- **Scale au survol** (1.15x)
- **Shadow box épais** au hover
- **Stagger avec delay** de 0.12s

### 5. Gallery Masonry
- **Scale et rotation** (scale: 0.8, rotate: -5deg)
- **Spring animation** au scroll
- **Scale 1.2x** au survol
- **Shadow dynamique** avec rgba colors

### 6. Why Choose Us
- **Scale et rotation combinées** (initial scale 0.8)
- **Icônes qui tournent 360°** au survol
- **Background color transition** smooth
- **Cartes avec backdrop color**

### 7. Menu
- **Catégories avec stagger** (delay: idx * 0.08s)
- **Items qui arrivent de la gauche** (translateX: -30px)
- **Smooth transitions** entre catégories (AnimatePresence)
- **Prix qui scale** au survol
- **Bord gauche qui se décale** au hover

### 8. Testimonials
- **Avatars circulaires** avec gradient background
- **Stars animations**
- **Carousel smooth transitions**

### 9. Events
- **Icônes avec rotation** (rotate 360°)
- **Chevron icons** animés
- **Bounce animations** sur les cartes

### 10. Footer
- **Fade-in avec delay**
- **Liens qui changent de couleur**
- **Social icons animés**

## Types d'Animations Utilisées

### 1. Entrance Animations
```tsx
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, delay: index * 0.1 }}
```

### 2. Scale Animations
```tsx
whileHover={{ scale: 1.1 }}
transition={{ duration: 0.3 }}
```

### 3. Spring Physics
```tsx
transition={{ 
  type: 'spring', 
  stiffness: 100, 
  damping: 10 
}}
```

### 4. Rotation Animations
```tsx
whileHover={{ rotate: 360 }}
transition={{ duration: 0.6 }}
```

### 5. Stagger Effects
```tsx
delay: index * 0.15  // 0.15s entre chaque élément
```

### 6. 3D Transforms
```tsx
initial={{ rotateY: -20 }}
animate={{ rotateY: 0 }}
transition={{ type: 'spring' }}
```

## Performance Optimizations

1. **Viewport Optimization**
   - Animations déclenchées avec `whileInView`
   - `viewport={{ once: true }}` pour une seule exécution

2. **Efficient Rendering**
   - Utilisation de `AnimatePresence` pour les transitions de contenu
   - Transitions GPU avec `transform` et `opacity`

3. **Smooth 60fps**
   - Pas d'animations sur position/size (utiliser transform)
   - Spring animations pour naturel feel

## Comment Modifier les Animations

### Changer la Durée
```tsx
transition={{ duration: 1.0 }}  // Plus long
```

### Changer le Délai
```tsx
transition={{ delay: 0.5 }}     // Commence plus tard
```

### Ajouter un Stagger Custom
```tsx
delay: index * 0.2              // 0.2s entre chaque
```

### Changer le Type
```tsx
transition={{ type: 'tween' }}  // ou 'spring'
```

## Animations par Section

### Navbar: Navigation fluide
- Links appear sequentially
- Button scales on hover
- Smooth color transitions

### Hero: Impactful entry
- Title springs in with scale
- Subtitle fades with delay
- Chevron bounces continuously

### About: Elegant reveal
- Icons rotate on interaction
- Cards elevate on hover
- Values cascade in

### Specialties: Product showcase
- 3D perspective on load
- Smooth image zoom on hover
- Shadow deepens on interaction

### Gallery: Visual storytelling
- Images scale and rotate
- Masonry reveals with stagger
- Overlay fades on hover

### Menu: Interactive browsing
- Categories animate in
- Items slide in left
- Smooth category transitions

### Events: Call to action
- Icons spin on hover
- Chevrons animate right
- Cards scale up

### Testimonials: Social proof
- Avatar circles highlight
- Stars twinkle
- Carousel transitions smooth

### Location: Map & info
- Information fades in
- Contact details scale
- Call buttons grow on hover

## Best Practices Applied

1. Use `whileInView` pour mobile performance
2. Apply `transition={{ type: 'spring' }}` pour naturel feel
3. Combine multiple transforms pour smooth 60fps
4. Use `opacity` et `transform` pour GPU acceleration
5. Stagger delays pour visual hierarchy

## Testing Animations

Pour tester les animations au développement:
1. Ouvrez http://localhost:3000
2. Scrollez lentement pour voir les animations
3. Survolez les éléments interactifs
4. Vérifiez que tout est fluide à 60fps

## Performance Metrics

Les animations ne doivent pas:
- Ralentir le FCP (First Contentful Paint)
- Créer de layout shifts (CLS)
- Bloquer l'interaction utilisateur

Utilisez DevTools Performance tab pour vérifier.

---

Site complet avec animations spectaculaires Framer Motion!
