'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import Image from 'next/image'
import { useEffect } from 'react'

export default function Hero() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [mouseX, mouseY])

  return (
    <section className="flex flex-col items-center px-6 pt-28 pb-16 text-center relative overflow-hidden">
      <motion.div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(600px circle at ${springX}px ${springY}px, rgba(209,9,1,0.05), transparent 70%)`,
        }}
      />

      <motion.div
        className="flex flex-col items-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <motion.div
          className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden mb-8"
          style={{ boxShadow: '0 0 40px rgba(209,9,1,0.3), 0 0 0 1.5px #d10901' }}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <Image src="/bg.png" alt="Giacomo Ubaldino" fill className="object-cover" priority />
        </motion.div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-4">
          <span className="text-white">Giacomo </span>
          <span className="relative inline-block text-white">
            <span
              className="absolute bottom-0 left-0 right-0"
              style={{ height: '35%', background: 'rgba(209,9,1,0.35)', zIndex: -1 }}
            />
            Ubaldino
          </span>
        </h1>

        <p style={{
          fontFamily: 'var(--font-syne)',
          letterSpacing: '0.22em',
          color: '#d10901',
          fontSize: '0.65rem',
          fontWeight: 600,
          textTransform: 'uppercase',
        }}>
          Video Editor &amp; Content Marketing
        </p>
      </motion.div>
    </section>
  )
}