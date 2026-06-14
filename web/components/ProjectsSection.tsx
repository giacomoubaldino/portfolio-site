'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from './ProjectCard'

const filters = [
  { label: 'Tutti', value: 'all' },
  { label: 'Premium', value: 'premium' },
  { label: 'Pro', value: 'pro' },
  { label: 'Essential', value: 'essential' },
]

export default function ProjectsSection({ projects }: { projects: any[] }) {
  const [active, setActive] = useState('all')

  const filtered = active === 'all'
    ? projects
    : projects.filter(p => p.category === active)

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Lavori</h2>

        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map(f => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-4 py-2 text-sm transition-all duration-200 ${
                active === f.value
                  ? 'bg-[#d10901] text-white'
                  : 'bg-[#111] text-[#888] hover:text-white border border-[#222]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project._id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-[#444] text-center py-16">Nessun progetto in questa categoria.</p>
        )}
      </motion.div>
    </section>
  )
}