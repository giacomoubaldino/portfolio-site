'use client'

import { motion } from 'framer-motion'

const tools = ['Adobe Premiere Pro', 'After Effects', 'CapCut', 'Kling 3.0', 'Veo 3', 'Higgsfield', 'Artlist.io']

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 border-t border-[#111]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About</h2>
          <p className="text-[#888] leading-relaxed mb-4">
            Sono un video editor e content creator freelance specializzato in contenuti short-form
            per brand e creator italiani. Lavoro su TikTok, Instagram Reels e YouTube Shorts
            con un approccio che unisce estetica cinematografica e logica social-native.
          </p>
          <p className="text-[#888] leading-relaxed">
            Ogni progetto parte dalla comprensione del pubblico e dell'obiettivo, 
            e finisce con contenuti che convertono davvero.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <h3 className="text-white font-semibold mb-6 text-sm tracking-widest uppercase">Tool</h3>
          <div className="flex flex-wrap gap-2">
            {tools.map(tool => (
              <span
                key={tool}
                className="px-3 py-1.5 bg-[#111] border border-[#222] text-[#888] text-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}