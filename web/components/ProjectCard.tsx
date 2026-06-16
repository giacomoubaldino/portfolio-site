'use client'

import { useRef, useCallback, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import ProjectCard from './ProjectCard'

const CATEGORIES = [
  { value: 'premium', label: 'Premium', color1: '#d10901', color2: '#6b0000', glow: '0 0 30px rgba(209,9,1,0.5)' },
  { value: 'pro', label: 'Pro', color1: '#c8a94f', color2: '#7a5f1a', glow: '0 0 30px rgba(200,169,79,0.45)' },
  { value: 'essential', label: 'Essential', color1: '#888888', color2: '#3a3a3a', glow: '0 0 20px rgba(136,136,136,0.3)' },
]

function CategorySection({ cat, projects }: { cat: typeof CATEGORIES[0]; projects: any[] }) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'center 55%'],
  })
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  const handleWheel = useCallback((e: WheelEvent) => {
    if (scrollRef.current) {
      e.preventDefault()
      scrollRef.current.scrollLeft += e.deltaY + e.deltaX
    }
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (el) el.addEventListener('wheel', handleWheel, { passive: false })
    return () => { if (el) el.removeEventListener('wheel', handleWheel) }
  }, [handleWheel])

  return (
    <motion.div
      ref={sectionRef}
      style={{
        marginBottom: '4rem',
        background: 'rgba(255,255,255,0.015)',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: '20px',
        padding: '2rem 1.5rem 1.75rem',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.7 }}
    >
      <div style={{ marginBottom: '1.5rem' }}>
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
              bottom: '4px', left: 0, right: 0,
              height: '30%',
              background: `linear-gradient(to right, ${cat.color1}, ${cat.color2})`,
              boxShadow: cat.glow,
              zIndex: -1,
              transformOrigin: 'left',
              scaleX,
            }}
          />
          {cat.label}
        </h2>
      </div>

      <div
        ref={scrollRef}
        className="no-scrollbar"
        style={{
          display: 'flex',
          gap: '0.75rem',
          overflowX: 'auto',
          overflowY: 'hidden',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          paddingBottom: '0.5rem',
        }}
      >
        {projects.map(project => (
          <div
            key={project._id}
            className="w-[46vw] sm:w-[30vw] md:w-[280px]"
            style={{ flexShrink: 0, scrollSnapAlign: 'start' }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default function ProjectsSection({ projects }: { projects: any[] }) {
  return (
    <section id="projects" style={{ padding: '0 1.5rem 6rem' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        {CATEGORIES.map(cat => {
          const catProjects = projects.filter(p => p.category === cat.value)
          if (catProjects.length === 0) return null
          return <CategorySection key={cat.value} cat={cat} projects={catProjects} />
        })}
      </div>
    </section>
  )
}