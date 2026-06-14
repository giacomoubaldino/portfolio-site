'use client'

import { motion } from 'framer-motion'

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-[#111]">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Lavoriamo insieme<span className="text-[#d10901]">.</span>
          </h2>
          <p className="text-[#888] text-lg mb-10 max-w-md mx-auto">
            Raccontami il tuo progetto, ti rispondo entro 24 ore.
          </p>
          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdh-QUsDWjO90aHSzc_SqLkvPw5YKBGmI96p8_i8DzxrcHoHw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#d10901] text-white px-10 py-4 text-sm font-semibold tracking-wide hover:bg-[#b50801] transition-colors duration-200 rounded-sm"
            style={{ fontFamily: 'var(--font-syne)' }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Preventivo gratuito — 5 minuti
          </motion.a>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-[#111] flex flex-col sm:flex-row justify-between items-center gap-4">
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