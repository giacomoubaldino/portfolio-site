import type { Metadata } from 'next'
import { Cormorant_Garamond, Syne, Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['600', '700', '800'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Giacomo Ubaldino — Video Editor',
  description: 'Video editor e content creator specializzato in short-form content per brand italiani.',
  icons: {
    icon: [{ url: '/bg.png', type: 'image/png' }],
    shortcut: [{ url: '/bg.png' }],
    apple: [{ url: '/bg.png' }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${cormorant.variable} ${syne.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/bg.png" type="image/png" />
      </head>
      <body style={{ fontFamily: 'var(--font-inter)' }}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}