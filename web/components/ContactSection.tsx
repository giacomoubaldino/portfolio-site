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
          <p className="text-[#888] text-lg mb-10 max-w-md mx-auto font-serif">
            Raccontami il tuo progetto, ti rispondo entro 24 ore.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdh-QUsDWjO90aHSzc_SqLkvPw5YKBGmI96p8_i8DzxrcHoHw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#d10901] text-white px-10 py-4 text-sm font-medium tracking-wide hover:bg-[#b50801] transition-colors duration-200"
              style={{ fontFamily: 'var(--font-syne)' }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Inizia un progetto
            </motion.a>
            <motion.a
              href="mailto:giacomo.ubaldino.work@gmail.com"
              className="inline-block border border-[#333] text-[#888] px-10 py-4 text-sm font-medium tracking-wide hover:border-white hover:text-white transition-colors duration-200"
              style={{ fontFamily: 'var(--font-syne)' }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Scrivimi una email
            </motion.a>
          </div>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-[#111] flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="text-[#333] text-sm">© 2025 Giacomo Ubaldino</span>
        <div className="flex gap-6">
          {[
            ['Instagram', 'https://www.instagram.com/giacomoubaldino/'],
            ['TikTok', 'https://www.tiktok.com/@giacomoubaldino'],
            ['YouTube', 'https://www.youtube.com/@giacomoubaldino'],
          ].map(([label, href]) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              className="text-[#444] hover:text-white text-sm transition-colors duration-200">
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}