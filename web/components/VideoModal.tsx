'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'

function getEmbedUrl(url: string): string {
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/)
  if (vimeoMatch) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1&color=d10901&title=0&byline=0`
  }
  const ytMatch = url.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)([^&\s?]+)/)
  if (ytMatch) {
    return `https://www.youtube-nocookie.com/embed/${ytMatch[1]}?autoplay=1&controls=0&rel=0&modestbranding=1&hd=1&playsinline=1`
  }
  return url
}

export default function VideoModal({ videoUrl, title, onClose }: {
  videoUrl: string
  title: string
  onClose: () => void
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,0.93)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1.5rem',
      }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        style={{
          position: 'fixed', top: '1rem', right: '1rem', zIndex: 1001,
          background: 'rgba(0,0,0,0.75)',
          border: '2px solid rgba(255,255,255,0.3)',
          borderRadius: '50%', width: '48px', height: '48px',
          color: 'white', fontSize: '1.1rem', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >
        ✕
      </button>

      <motion.div
        style={{
          width: '100%', maxWidth: '720px',
          borderRadius: '16px', overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(0,0,0,0.9)',
          border: '1px solid rgba(255,255,255,0.07)',
          background: '#000',
        }}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        onClick={e => e.stopPropagation()}
      >
        <div style={{ aspectRatio: '16/9' }}>
          <iframe
            src={getEmbedUrl(videoUrl)}
            style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>
      </motion.div>
    </div>
  )
}