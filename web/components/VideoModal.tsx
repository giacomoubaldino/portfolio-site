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

  const handleFullscreen = () => {
    iframeRef.current?.requestFullscreen?.()
  }

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,0.93)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
      }}
      onClick={onClose}
    >
      <motion.div
        style={{
          width: '100%',
          maxWidth: '720px',
          borderRadius: '16px',
          overflow: 'hidden',
          background: '#111',
          boxShadow: '0 20px 80px rgba(0,0,0,0.9)',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header con X e fullscreen */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.7rem 1rem',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          <span style={{
            color: 'rgba(255,255,255,0.5)',
            fontSize: '0.76rem',
            fontFamily: 'var(--font-syne)',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            maxWidth: 'calc(100% - 100px)',
          }}>
            {title}
          </span>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              onClick={handleFullscreen}
              title="Schermo intero"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '8px',
                width: '36px', height: '36px',
                color: 'white', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1rem',
              }}
            >
              ⛶
            </button>
            <button
              onClick={onClose}
              style={{
                background: 'rgba(209,9,1,0.15)',
                border: '1px solid rgba(209,9,1,0.4)',
                borderRadius: '8px',
                width: '36px', height: '36px',
                color: 'white', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1rem',
              }}
            >
              ✕
            </button>
          </div>
        </div>

        {/* Video con overlay che copre il titolo YouTube */}
        <div style={{ position: 'relative', aspectRatio: '16/9', background: '#000' }}>
          <iframe
            ref={iframeRef}
            src={getEmbedUrl(videoUrl)}
            style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
          {/* Copre il titolo YouTube in alto */}
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0,
            height: '72px',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, transparent 100%)',
            pointerEvents: 'none',
            zIndex: 1,
          }} />
        </div>
      </motion.div>
    </div>
  )
}