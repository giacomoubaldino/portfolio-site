import type { Metadata } from 'next'
import { Syne, Inter, Merriweather } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

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

const merriweather = Merriweather({
  subsets: ['latin'],
  variable: '--font-merriweather',
  weight: ['300', '400', '700'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Giacomo Ubaldino — Video Editor',
  description: 'Video editor e content creator specializzato in short-form content per brand italiani.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${syne.variable} ${inter.variable} ${merriweather.variable}`}>
      <body style={{ fontFamily: 'var(--font-inter)' }}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}