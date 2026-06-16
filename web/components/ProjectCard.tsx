'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { urlFor } from '@/sanity/image'
import VideoModal from './VideoModal'

interface Project {
  _id: string
  title: string
  client?: string
  category: string
  thumbnail: any
  videoUrl?: string
}

const CATEGORY_STYLES: Record<string, { border: string; glow: string; topGradient: string }> = {
  premium: { border: 'rgba(209,9,1,0.55)', glow: 'rgba(209,9,1,0.4)', topGradient: 'rgba(209,9,1,0.18)' },
  pro: { border: 'rgba(200,169,79,0.5)', glow: 'rgba(200,169,79,0.35)', topGradient: 'rgba(200,169,79,0.14)' },
  essential: { border: 'rgba(136,136,136,0.4)', glow: 'rgba(136,136,136,0.25)', topGradient: 'rgba(136,136,136,0.1)' },
}

function getYouTubeId(url: string): string | null {
  const match = url.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)([^&\s?]+)/)
  return match ? match[1] : null
}

export default function ProjectCard({ project }: { project: Project }) {
  const [showModal, setShowModal] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [useFallback, setUseFallback] = useState(false)

  const colors = CATEGORY_STYLES[project.category] || CATEGORY_STYLES.essential
  const ytId = project.videoUrl ? getYouTubeId(project.videoUrl) : null

  let thumbnailSrc = ''
  if (project.thumbnail) {
    thumbnailSrc = urlFor(project.thumbnail).width(800).height(450).url()
  } else if (ytId) {
    thumbnailSrc = useFallback
      ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`
      : `https://img.youtube.com/vi/${ytId}/maxresdefault.jpg`
  }

  return (
    <>
      <motion.div
        onClick={() => project.videoUrl && setShowModal(true)}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        style={{
          position: 'relative',
          borderRadius: '16px',
          overflow: 'hidden',
          cursor: project.videoUrl ? 'pointer' : 'default',
          aspectRatio: '4/5',
          background: '#0f0f0f',
          border: `1px solid ${colors.border}`,
          boxShadow: isHovered
            ? `0 0 45px ${colors.glow}, 0 8px 30px rgba(0,0,0,0.6)`
            : `0 0 12px ${colors.glow}`,
          transition: 'box-shadow 0.4s ease',
        }}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        {thumbnailSrc && (
          <Image
            src={thumbnailSrc}
            alt={project.title}
            fill
            unoptimized={!project.thumbnail}
            style={{
              objectFit: 'cover',
              transform: isHovered ? 'scale(1.07)' : 'scale(1)',
              transition: 'transform 0.6s ease',
            }}
            onError={() => { if (!useFallback && ytId) setUseFallback(true) }}
          />
        )}

        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(to bottom, ${colors.topGradient} 0%, transparent 38%, rgba(5,5,5,0.97) 100%)`,
        }} />

        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: isHovered ? 1 : 0.55,
          transition: 'opacity 0.3s',
        }}>
          <div style={{
            width: '52px', height: '52px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #d10901, #6b0000)',
            boxShadow: '0 0 40px rgba(209,9,1,0.7)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transform: isHovered ? 'scale(1)' : 'scale(0.75)',
            transition: 'transform 0.3s',
          }}>
            <div style={{
              width: 0, height: 0,
              borderTop: '9px solid transparent',
              borderLeft: '15px solid white',
              borderBottom: '9px solid transparent',
              marginLeft: '3px',
            }} />
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0.875rem' }}>
          <h3 style={{ color: 'white', fontWeight: 600, fontSize: '0.85rem', lineHeight: 1.3, marginBottom: project.client ? '0.2rem' : 0 }}>
            {project.title}
          </h3>
          {project.client && (
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.72rem' }}>{project.client}</p>
          )}
        </div>
      </motion.div>

      {showModal && project.videoUrl && (
        <VideoModal videoUrl={project.videoUrl} title={project.title} onClose={() => setShowModal(false)} />
      )}
    </>
  )
}