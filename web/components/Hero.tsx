'use client'

import { motion, useMotionValue, useSpring, useScroll, animate } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })
  const highlightScaleX = useMotionValue(0)
  const [initialDone, setInitialDone] = useState(false)

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => { mouseX.set(e.clientX); mouseY.set(e.clientY) }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [mouseX, mouseY])

  // Animazione iniziale 0 → 1
  useEffect(() => {
    const controls = animate(highlightScaleX, 1, {
      duration: 0.9,
      delay: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
      onComplete: () => setInitialDone(true),
    })
    return controls.stop
  }, [highlightScaleX])

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  // Scroll-driven dopo animazione iniziale
  useEffect(() => {
    if (!initialDone) return
    const unsubscribe = scrollYProgress.on('change', (v) => {
      highlightScaleX.set(Math.max(0, 1 - v / 0.85))
    })
    return unsubscribe
  }, [initialDone, scrollYProgress, highlightScaleX])

  return (
    <section
      ref={heroRef}
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        paddingTop: '90px', paddingBottom: '4rem',
        paddingLeft: '1.5rem', paddingRight: '1.5rem',
        textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}
    >
      <motion.div
        className="pointer-events-none fixed inset-0"
        style={{ zIndex: 0, background: `radial-gradient(600px circle at ${springX}px ${springY}px, rgba(209,9,1,0.05), transparent 70%)` }}
      />

      <motion.div
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 10 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <motion.div
          style={{
            position: 'relative', width: '120px', height: '120px',
            borderRadius: '50%', overflow: 'hidden', marginBottom: '2.5rem',
            boxShadow: '0 0 40px rgba(209,9,1,0.3), 0 0 0 1.5px #d10901', flexShrink: 0,
          }}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <Image src="/bg.png" alt="Giacomo Ubaldino" fill style={{ objectFit: 'cover' }} priority />
        </motion.div>

        <h1 style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: 'clamp(2.8rem, 11vw, 6rem)',
          fontWeight: 700, lineHeight: 1.05,
          letterSpacing: '-0.01em', marginBottom: '1rem', color: 'white',
        }}>
          Giacomo{' '}
          <span style={{ position: 'relative', display: 'inline-block' }}>
            <motion.span
              style={{
                position: 'absolute', bottom: '3px', left: 0, right: 0,
                height: '33%',
                background: 'linear-gradient(to right, #d10901, #6b0000)',
                boxShadow: '0 0 20px rgba(209,9,1,0.45)',
                zIndex: -1, transformOrigin: 'left',
                scaleX: highlightScaleX,
              }}
            />
            Ubaldino
          </span>
        </h1>

        <p style={{
          fontFamily: 'var(--font-syne)', letterSpacing: '0.22em',
          color: '#d10901', fontSize: '0.62rem', fontWeight: 600, textTransform: 'uppercase',
        }}>
          Video Editor &amp; Content Marketing
        </p>
      </motion.div>
    </section>
  )
}