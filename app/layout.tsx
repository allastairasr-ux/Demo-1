import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Playfair_Display } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'] })
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: 'Aura Medical Aesthetics | Luxe Skin & Aesthetic Treatments',
  description: 'Discover advanced medical aesthetics treatments with Aura. From Botox to dermal fillers, achieve your best self with our signature treatments.',
  generator: 'v0.app',
  openGraph: {
    title: 'Aura Medical Aesthetics | Luxe Aesthetic Treatments',
    description: 'Experience luxe medical aesthetics with Aura. Advanced treatments for skin rejuvenation.',
    url: 'https://aura-aesthetics.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aura Medical Aesthetics',
    description: 'Luxe medical aesthetics treatments',
  },
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: [{ media: '(prefers-color-scheme: dark)', color: '#0f0f0f' }],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <body className={`${geist.className} antialiased bg-background text-foreground`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
