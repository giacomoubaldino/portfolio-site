'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

function getEmbedUrl(url: string): string {
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/)
  if (vimeoMatch) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1&color=d10901&title=0&byline=0`
  }
  const ytMatch = url.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)([^&\s?]+)/)
  if (ytMatch) {
    return `https://www.youtube-nocookie.com/embed/${ytMatch[1]}?autoplay=1&rel=0&modestbranding=1&hd=1&playsinline=1`
  }
  return url
}

export default function VideoModal({ videoUrl, title, onClose }: {
  videoUrl: string
  title: string
  onClose: () => void
}) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100vw', height: '100vh',
        zIndex: 1000,
        background: 'rgba(0,0,0,0.93)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '72px 1rem 1rem',
      }}
      onClick={onClose}
    >
      {/* X button sempre visibile */}
      <motion.button
        onClick={(e) => { e.stopPropagation(); onClose() }}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.7 }}
        transition={{ delay: 0.15, duration: 0.2 }}
        whileHover={{ scale: 1.08, background: 'rgba(209,9,1,0.5)' }}
        whileTap={{ scale: 0.93 }}
        style={{
          position: 'absolute',
          top: '1rem', right: '1rem',
          zIndex: 1002,
          background: 'rgba(209,9,1,0.2)',
          border: '1.5px solid rgba(209,9,1,0.55)',
          borderRadius: '50%',
          width: '50px', height: '50px',
          color: 'white', cursor: 'pointer',
          fontSize: '1.1rem',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >
        ✕
      </motion.button>

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.86, y: 32 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.86, y: 32 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          width: '100%',
          maxWidth: '720px',
          borderRadius: '16px',
          overflow: 'hidden',
          background: '#111',
          boxShadow: '0 0 60px rgba(209,9,1,0.12), 0 24px 80px rgba(0,0,0,0.95)',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.65rem 1rem',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          <span style={{
            color: 'rgba(255,255,255,0.45)',
            fontSize: '0.74rem',
            fontFamily: 'var(--font-syne)',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            maxWidth: 'calc(100% - 52px)',
          }}>
            {title}
          </span>
          <button
            onClick={() => iframeRef.current?.requestFullscreen?.()}
            title="Schermo intero"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '7px',
              width: '32px', height: '32px',
              color: 'white', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.95rem', flexShrink: 0,
            }}
          >
            ⛶
          </button>
        </div>

        {/* Video */}
        <div style={{ position: 'relative', aspectRatio: '16/9', background: '#000' }}>
          <iframe
            ref={iframeRef}
            src={getEmbedUrl(videoUrl)}
            style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '56px',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)',
            pointerEvents: 'none', zIndex: 1,
          }} />
        </div>
      </motion.div>
    </motion.div>
  )
}