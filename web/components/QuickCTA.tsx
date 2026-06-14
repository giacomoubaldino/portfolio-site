'use client'

import { motion } from 'framer-motion'

export default function QuickCTA() {
  return (
    <section className="py-14 px-6">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        style={{
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '16px',
          padding: '3rem 2rem',
          backdropFilter: 'blur(8px)',
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
          Lavoriamo insieme<span className="text-[#d10901]">.</span>
        </h2>
        <p className="text-[#666] mb-8 text-sm">
          Raccontami il tuo progetto. Ti rispondo entro 24 ore.
        </p>
        <motion.a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdh-QUsDWjO90aHSzc_SqLkvPw5YKBGmI96p8_i8DzxrcHoHw/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-white text-sm font-semibold tracking-wide px-8 py-4 rounded-full transition-all duration-300"
          style={{
            fontFamily: 'var(--font-syne)',
            background: '#d10901',
            boxShadow: '0 0 30px rgba(209,9,1,0.3)',
          }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(209,9,1,0.5)' }}
          whileTap={{ scale: 0.97 }}
        >
          Preventivo gratuito — 5 minuti
        </motion.a>
      </motion.div>
    </section>
  )
}