'use client'

import { motion } from 'framer-motion'

export default function QuickCTA() {
  return (
    <section className="px-6 pb-16 flex justify-center">
      <motion.div
        className="w-full max-w-xs md:max-w-sm text-center"
        style={{
          background: 'rgba(255,255,255,0.025)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '20px',
          padding: '2.5rem 2rem',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Lavoriamo insieme<span className="text-[#d10901]">.</span>
        </h2>
        <p className="text-[#555] mb-8 text-sm">
          Raccontami il tuo progetto. Ti rispondo entro 24 ore.
        </p>
        <motion.a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdh-QUsDWjO90aHSzc_SqLkvPw5YKBGmI96p8_i8DzxrcHoHw/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-white text-sm font-semibold tracking-wide px-8 py-4 rounded-full"
          style={{ fontFamily: 'var(--font-syne)', background: '#d10901' }}
          animate={{
            boxShadow: [
              '0 0 15px rgba(209,9,1,0.3)',
              '0 0 45px rgba(209,9,1,0.65)',
              '0 0 15px rgba(209,9,1,0.3)',
            ],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.97 }}
        >
          Preventivo gratuito — 5 minuti
        </motion.a>
      </motion.div>
    </section>
  )
}