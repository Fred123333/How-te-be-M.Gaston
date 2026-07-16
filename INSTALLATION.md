# Guide d'Installation - Moulin de France Douala Website

## Installation Locale en 5 Minutes

### 1. Prérequis
Avant de commencer, assurez-vous d'avoir installé:
- **Node.js** (version 18+) - https://nodejs.org
- **Git** - https://git-scm.com
- Un éditeur de code (VS Code recommandé) - https://code.visualstudio.com

Vérifiez les versions installées:
```bash
node --version
npm --version
```

### 2. Télécharger le Projet

Option A: Via GitHub (si connecté)
```bash
git clone https://github.com/votre-repo/moulin-de-france.git
cd moulin-de-france
```

Option B: Via ZIP
- Téléchargez le fichier ZIP depuis v0.app
- Décompressez-le dans un dossier
- Ouvrez le terminal dans ce dossier

### 3. Installer les Dépendances
```bash
npm install
```
ou avec pnpm (plus rapide):
```bash
npm install -g pnpm
pnpm install
```

### 4. Lancer le Serveur de Développement
```bash
npm run dev
```
ou:
```bash
pnpm dev
```

Le site sera disponible à: **http://localhost:3000**

### 5. Développement

#### Modifier le contenu
Tous les fichiers React se trouvent dans `components/` et `app/`

Exemples de fichiers clés:
- `app/page.tsx` - Page principale
- `components/navbar.tsx` - Barre de navigation
- `components/hero.tsx` - Section héro
- `components/menu.tsx` - Menu interactif
- `app/globals.css` - Styles globaux

#### Éditer les textes
Les textes français sont dans les composants. Modifiez-les directement:
```tsx
<h1>Moulin de France</h1>  // Changez le titre ici
<p>Votre texte ici</p>     // Changez la description
```

#### Changer les couleurs
Les couleurs se trouvent dans `app/globals.css`:
```css
--primary: #41141B;        /* Couleur principale (Burgundy) */
--accent: #EEA637;         /* Couleur d'accent (Or) */
--background: #FFFFFF;     /* Fond */
```

#### Ajouter des images
1. Mettez vos images dans le dossier `public/`
2. Importez-les dans vos composants:
```tsx
<Image src="/ma-image.jpg" alt="Description" width={400} height={300} />
```

### 6. Build pour Production
```bash
npm run build
npm run start
```

Le site sera prêt pour le déploiement.

### 7. Déployer sur Vercel (Gratuit & Facile)

#### Option 1: Depuis v0.app
1. Cliquez sur le bouton "Publish" en haut à droite
2. Connectez-vous avec GitHub
3. Le site sera déployé automatiquement

#### Option 2: Depuis Vercel directement
1. Allez sur https://vercel.com
2. Connectez-vous avec GitHub
3. Cliquez "Import Project"
4. Sélectionnez le repo du projet
5. Cliquez "Deploy"

#### Option 3: Via CLI
```bash
npm install -g vercel
vercel
```

### 8. Dépannage

**Problème: Port 3000 déjà utilisé**
```bash
npm run dev -- -p 3001
```

**Problème: Modules manquants**
```bash
rm -rf node_modules
npm install
```

**Problème: Images ne s'affichent pas**
- Vérifiez que les fichiers sont dans le dossier `public/`
- Vérifiez les noms de fichiers (sensibles à la casse)

**Problème: Styles cassés**
- Videz le cache: `rm -rf .next`
- Relancez le serveur: `npm run dev`

## Structure du Projet

```
moulin-de-france/
├── app/
│   ├── layout.tsx        # Layout principal
│   ├── page.tsx          # Page d'accueil
│   └── globals.css       # Styles globaux
├── components/
│   ├── navbar.tsx        # Navigation
│   ├── hero.tsx          # Section héro
│   ├── about.tsx         # Notre histoire
│   ├── menu.tsx          # Menu filtré
│   ├── gallery.tsx       # Galerie d'images
│   ├── events.tsx        # Événements
│   ├── testimonials.tsx  # Avis clients
│   └── ...
├── public/
│   ├── hero-bread.png
│   ├── pastry-dessert.png
│   └── ...
├── package.json          # Dépendances
└── next.config.mjs       # Config Next.js
```

## Technologies Utilisées

- **Next.js 16** - Framework React moderne
- **Tailwind CSS v4** - Styling ultra-rapide
- **Framer Motion** - Animations fluides
- **Lucide React** - Icônes professionnelles
- **TypeScript** - Typage statique

## Commandes Utiles

```bash
npm run dev        # Démarrer en développement
npm run build      # Compiler pour production
npm run start      # Lancer la version production
npm run lint       # Vérifier la qualité du code
```

## Personnalisation Avancée

### Ajouter une nouvelle page
1. Créez `app/nouveau/page.tsx`
2. Ajoutez le lien dans la navbar
3. Importez les composants réutilisables

### Modifier les animations
Les animations Framer Motion se trouvent dans chaque composant:
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}      // État initial
  animate={{ opacity: 1, y: 0 }}       // État animé
  transition={{ duration: 0.6 }}       // Durée
  whileHover={{ scale: 1.05 }}         // Au survol
>
  Contenu animé
</motion.div>
```

### Intégrer un formulaire de contact
```tsx
import { useState } from 'react'

export default function Contact() {
  const [email, setEmail] = useState('')
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    // Envoyez l'email via un service (Vercel Mail, etc.)
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <button type="submit">Envoyer</button>
    </form>
  )
}
```

## Support & Ressources

- **Documentation Next.js**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/
- **Lucide Icons**: https://lucide.dev

---

**Besoin d'aide?** Contactez le support v0 sur https://vercel.com/help
