'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="flex flex-col items-center px-6 pt-32 pb-24 text-center">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <motion.div
          className="relative w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden mb-8"
          style={{ boxShadow: '0 0 60px rgba(209,9,1,0.35), 0 0 0 2px #d10901' }}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Image src="/bg.png" alt="Giacomo Ubaldino" fill className="object-cover" priority />
        </motion.div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-3">
          <span className="text-white">Giacomo </span>
          <span className="text-[#d10901]">Ubaldino</span>
        </h1>

        <p style={{
          fontFamily: 'var(--font-syne)',
          letterSpacing: '0.22em',
          color: '#d10901',
          fontSize: '0.7rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          marginBottom: '2.5rem'
        }}>
          Video Editor & Content Marketing
        </p>

        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="https://www.instagram.com/giacomoubaldino/" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-syne)', color: '#444', fontSize: '0.875rem', textDecoration: 'none' }}>
            Instagram
          </a>
          <a href="https://www.tiktok.com/@giacomoubaldino" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-syne)', color: '#444', fontSize: '0.875rem', textDecoration: 'none' }}>
            TikTok
          </a>
          <a href="https://www.youtube.com/@giacomoubaldino" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-syne)', color: '#444', fontSize: '0.875rem', textDecoration: 'none' }}>
            YouTube
          </a>
        </div>
      </motion.div>
    </section>
  )
}