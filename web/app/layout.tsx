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
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%23d10901'/><text x='50' y='72' font-size='68' font-family='Georgia,serif' fill='white' text-anchor='middle'>G</text></svg>" />
</head>
      <body style={{ fontFamily: 'var(--font-inter)' }}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}