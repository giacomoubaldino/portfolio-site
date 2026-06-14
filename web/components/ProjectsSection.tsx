'use client'

import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

const CATEGORIES = [
  { value: 'premium', label: 'Premium', sub: 'Produzioni cinematografiche avanzate' },
  { value: 'pro', label: 'Pro', sub: 'AI, motion design e storytelling' },
  { value: 'essential', label: 'Essential', sub: 'Contenuti puliti e ad alto impatto' },
]

export default function ProjectsSection({ projects }: { projects: any[] }) {
  return (
    <section id="projects" className="px-6 pb-24">
      <div className="max-w-6xl mx-auto">
        {CATEGORIES.map((cat, catIndex) => {
          const catProjects = projects.filter(p => p.category === cat.value)
          if (catProjects.length === 0) return null

          return (
            <motion.div
              key={cat.value}
              className="mb-24"
              style={{
                background: 'rgba(255,255,255,0.015)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '20px',
                padding: '2.5rem',
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: catIndex * 0.1 }}
            >
              <div className="mb-8">
                <motion.h2
                  className="text-5xl md:text-6xl font-bold text-white mb-2"
                  style={{ fontFamily: 'var(--font-merriweather)' }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <span className="relative inline-block">
                    <span
                      className="absolute bottom-0 left-0 right-0"
                      style={{ height: '30%', background: 'rgba(209,9,1,0.3)', zIndex: -1 }}
                    />
                    {cat.label}
                  </span>
                </motion.h2>
                <p className="text-[#555] text-sm" style={{ fontFamily: 'var(--font-syne)', letterSpacing: '0.1em' }}>
                  {cat.sub}
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {catProjects.map((project, i) => (
                  <motion.div
                    key={project._id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}