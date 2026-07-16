import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Moulin de France Douala | Restaurant & Pâtisserie Haut de Gamme',
  description: 'Découvrez Moulin de France Douala, un restaurant premium en Afrique centrale. Cuisine artisanale, pâtisseries raffinées et ambiance chaleureuse.',
  keywords: 'restaurant, pâtisserie, Douala, cuisine artisanale, luxe, gastronomie',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
  openGraph: {
    title: 'Moulin de France Douala',
    description: 'Restaurant & Pâtisserie Haut de Gamme',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#41141B' },
    { media: '(prefers-color-scheme: dark)', color: '#41141B' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="bg-background">
      <body className="antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
