'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center">
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
          <Image
            src="/bg.png"
            alt="Giacomo Ubaldino"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-3">
          Giacomo Ubaldino
        </h1>

        <p
          style={{ fontFamily: 'var(--font-syne)' }}
          className="text-[#666] text-xs md:text-sm font-medium tracking-widest uppercase mb-8"
        >
          Video Editor & Content Marketing
        </p>

        <p className="text-lg md:text-2xl font-bold text-white mb-10">
          <span className="bg-[#d10901] px-3 py-1.5">Fermo lo scroll.</span>
        </p>

        <motion.button
          onClick={scrollToProjects}
          style={{ fontFamily: 'var(--font-syne)' }}
          className="border border-white text-white px-8 py-4 text-sm font-medium tracking-wide hover:bg-white hover:text-black transition-colors duration-300 mb-12"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Guarda il mio lavoro
        </motion.button>

        <div className="flex gap-8">
          {[
            { label: 'Instagram', href: 'https://www.instagram.com/giacomoubaldino/' },
            { label: 'TikTok', href: 'https://www.tiktok.com/@giacomoubaldino' },
            { label: 'YouTube', href: 'https://www.youtube.com/@giacomoubaldino' },
          ].map(({ label, href }) => (
            
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: 'var(--font-syne)' }}
              className="text-[#444] hover:text-white text-sm transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}