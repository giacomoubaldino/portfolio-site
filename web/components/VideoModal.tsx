'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function getEmbedUrl(url: string): string {
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/)
  if (vimeoMatch) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1&color=d10901&title=0&byline=0&portrait=0`
  }
  const ytMatch = url.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)([^&\s?]+)/)
  if (ytMatch) {
    return `https://www.youtube-nocookie.com/embed/${ytMatch[1]}?autoplay=1&rel=0&modestbranding=1&hd=1&vq=hd1080`
  }
  return url
}

export default function VideoModal({ videoUrl, title, onClose }: { videoUrl: string; title: string; onClose: () => void }) {
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
    <AnimatePresence>
      <motion.div
        style={{
          position: 'fixed', inset: 0, zIndex: 100,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'rgba(0,0,0,0.92)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          padding: '1.5rem',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          style={{
            position: 'relative', width: '100%', maxWidth: '920px',
            borderRadius: '18px', overflow: 'hidden',
            boxShadow: '0 0 80px rgba(209,9,1,0.15), 0 30px 80px rgba(0,0,0,0.9)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
          initial={{ scale: 0.88, opacity: 0, y: 24 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.88, opacity: 0, y: 24 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          onClick={e => e.stopPropagation()}
        >
          <div style={{ aspectRatio: '16/9', background: '#000' }}>
            <iframe
              src={getEmbedUrl(videoUrl)}
              style={{ width: '100%', height: '100%', border: 'none' }}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>

        <motion.button
          onClick={onClose}
          style={{
            position: 'fixed', top: '1.25rem', right: '1.25rem',
            background: 'rgba(255,255,255,0.07)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '50%', width: '44px', height: '44px',
            color: 'white', cursor: 'pointer', fontSize: '1rem',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
          whileHover={{ background: 'rgba(209,9,1,0.3)', borderColor: '#d10901' }}
        >
          ✕
        </motion.button>
      </motion.div>
    </AnimatePresence>
  )
}