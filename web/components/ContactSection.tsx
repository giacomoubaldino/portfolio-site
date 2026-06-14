'use client'

import { motion } from 'framer-motion'

export default function ContactSection() {
  return (
    <section id="contact" style={{ padding: '2.5rem 1.5rem 2.5rem', borderTop: '1px solid #111' }}>
      <div className="flex justify-center mb-20">
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
      </div>

      <div className="max-w-6xl mx-auto pt-8 border-t border-[#111] flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="text-[#333] text-sm">© 2025 Giacomo Ubaldino</span>
        <div className="flex gap-6 flex-wrap justify-center">
          <a href="https://www.instagram.com/giacomoubaldino/" target="_blank" rel="noopener noreferrer" className="text-[#444] hover:text-white text-sm transition-colors duration-200">Instagram</a>
          <a href="https://www.tiktok.com/@giacomoubaldino" target="_blank" rel="noopener noreferrer" className="text-[#444] hover:text-white text-sm transition-colors duration-200">TikTok</a>
          <a href="https://www.youtube.com/@giacomoubaldino" target="_blank" rel="noopener noreferrer" className="text-[#444] hover:text-white text-sm transition-colors duration-200">YouTube</a>
          <a href="mailto:giacomo.ubaldino.work@gmail.com" className="text-[#444] hover:text-white text-sm transition-colors duration-200">Email</a>
        </div>
      </div>
    </section>
  )
}