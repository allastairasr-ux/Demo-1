import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
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
      <head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(d, t) {
                  var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
                  v.onload = function() {
                    window.voiceflow.chat.load({
                      verify: { projectID: '6a44449f3cd8b5e7a16f4665' },
                      url: 'https://general-runtime.voiceflow.com',
                      voice: {
                        url: "https://runtime-api.voiceflow.com"
                      }
                    });
                  }
                  v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
              })(document, 'script');
            `,
          }}
        />
      </head>
      <body className={`${geist.className} antialiased bg-background text-foreground`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        {process.env.NODE_ENV === 'production' && <SpeedInsights />}
      </body>
    </html>
  )
}
