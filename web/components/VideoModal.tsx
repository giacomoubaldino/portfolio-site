'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function getEmbedUrl(url: string): string {
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/)
  if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1&color=d10901`
  const youtubeMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/|youtu\.be\/shorts\/)([^&\s]+)/)
  if (youtubeMatch) return `https://www.youtube.com/embed/${youtubeMatch[1]}?autoplay=1`
  return url
}

interface Props {
  videoUrl: string
  title: string
  onClose: () => void
}

export default function VideoModal({ videoUrl, title, onClose }: Props) {
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
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-full max-w-4xl mx-4 aspect-video"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          onClick={e => e.stopPropagation()}
        >
          <iframe
            src={getEmbedUrl(videoUrl)}
            className="w-full h-full"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </motion.div>
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/60 hover:text-white text-sm tracking-widest uppercase"
        >
          Chiudi ✕
        </button>
      </motion.div>
    </AnimatePresence>
  )
}