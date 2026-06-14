'use client'

import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

const CATEGORIES = [
  {
    value: 'premium',
    label: 'Premium',
    color1: '#d10901',
    color2: '#6b0000',
    glow: '0 0 30px rgba(209,9,1,0.5)',
  },
  {
    value: 'pro',
    label: 'Pro',
    color1: '#c8a94f',
    color2: '#7a5f1a',
    glow: '0 0 30px rgba(200,169,79,0.45)',
  },
  {
    value: 'essential',
    label: 'Essential',
    color1: '#888888',
    color2: '#3a3a3a',
    glow: '0 0 20px rgba(136,136,136,0.3)',
  },
]

export default function ProjectsSection({ projects }: { projects: any[] }) {
  return (
    <section id="projects" style={{ padding: '0 1.5rem 6rem' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        {CATEGORIES.map((cat, catIndex) => {
          const catProjects = projects.filter(p => p.category === cat.value)
          if (catProjects.length === 0) return null

          return (
            <motion.div
              key={cat.value}
              style={{
                marginBottom: '5rem',
                background: 'rgba(255,255,255,0.015)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '20px',
                padding: '2.5rem 2rem',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: catIndex * 0.1 }}
            >
              <div style={{ marginBottom: '2rem' }}>
                <h2 style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: 'clamp(3rem, 9vw, 5.5rem)',
                  fontWeight: 700,
                  color: 'white',
                  lineHeight: 1,
                  display: 'inline-block',
                  position: 'relative',
                }}>
                  <motion.span
                    style={{
                      position: 'absolute',
                      bottom: '4px',
                      left: 0,
                      right: 0,
                      height: '30%',
                      background: `linear-gradient(to right, ${cat.color1}, ${cat.color2})`,
                      boxShadow: cat.glow,
                      zIndex: -1,
                      transformOrigin: 'left',
                    }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                  />
                  {cat.label}
                </h2>
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