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

export default function ProjectCard({ project }: { project: Project }) {
  const [showModal, setShowModal] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
      <motion.div
        style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.09)',
          borderRadius: '14px',
          overflow: 'hidden',
          cursor: project.videoUrl ? 'pointer' : 'default',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={() => project.videoUrl && setShowModal(true)}
      >
        <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
          {project.thumbnail && (
            <Image
              src={urlFor(project.thumbnail).width(600).height(340).url()}
              alt={project.title}
              fill
              style={{
                objectFit: 'cover',
                transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 0.5s ease',
              }}
            />
          )}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: isHovered ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0)',
            transition: 'background 0.3s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            {project.videoUrl && (
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                border: '2px solid white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: isHovered ? 1 : 0,
                transform: isHovered ? 'scale(1)' : 'scale(0.8)',
                transition: 'opacity 0.3s, transform 0.3s',
              }}>
                <div style={{
                  width: 0,
                  height: 0,
                  borderTop: '7px solid transparent',
                  borderLeft: '12px solid white',
                  borderBottom: '7px solid transparent',
                  marginLeft: '3px',
                }} />
              </div>
            )}
          </div>
        </div>

        <div style={{ padding: '0.75rem 0.875rem' }}>
          <h3 style={{
            color: 'white',
            fontWeight: 600,
            fontSize: '0.85rem',
            lineHeight: 1.3,
            marginBottom: project.client ? '0.25rem' : 0,
          }}>
            {project.title}
          </h3>
          {project.client && (
            <p style={{ color: '#555', fontSize: '0.75rem' }}>
              {project.client}
            </p>
          )}
        </div>
      </motion.div>

      {showModal && project.videoUrl && (
        <VideoModal
          videoUrl={project.videoUrl}
          title={project.title}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  )
}