'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <p
          style={{ fontFamily: 'var(--font-syne)' }}
          className="text-[#d10901] text-sm font-medium tracking-widest uppercase mb-6"
        >
          Video Editor & Content Marketing
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-8">
          Giacomo<br />
          <span className="text-[#333]">Ubaldino</span>
        </h1>
        <p className="text-[#888] text-lg md:text-xl max-w-lg mb-12 leading-relaxed">
          Creo contenuti video che convertono, per brand e creator italiani.
          Short-form, reel, campagne social.
        </p>
        <motion.button
          onClick={scrollToProjects}
          style={{ fontFamily: 'var(--font-syne)' }}
          className="bg-[#d10901] text-white px-8 py-4 text-sm font-medium tracking-wide hover:bg-[#b50801] transition-colors duration-200"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Guarda il mio lavoro
        </motion.button>
      </motion.div>
    </section>
  )
}