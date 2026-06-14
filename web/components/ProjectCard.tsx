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
  description?: string
  featured?: boolean
}

export default function ProjectCard({ project }: { project: Project }) {
  const [showModal, setShowModal] = useState(false)

  const categoryLabels: Record<string, string> = {
    'personal-brand': 'Personal Brand',
    'brand-advertising': 'Brand & Advertising',
    'social-content': 'Social Content',
  }

  return (
    <>
      <motion.div
        className="group relative bg-[#111] overflow-hidden cursor-pointer"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        onClick={() => project.videoUrl && setShowModal(true)}
      >
        <div className="relative aspect-video overflow-hidden">
          {project.thumbnail && (
            <Image
              src={urlFor(project.thumbnail).width(800).height(450).url()}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
            {project.videoUrl && (
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-14 h-14 rounded-full border-2 border-white flex items-center justify-center">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1" />
              </div>
            )}
          </div>
        </div>
        <div className="p-4">
          <span className="text-[#d10901] text-xs font-medium tracking-wider uppercase">
            {categoryLabels[project.category] || project.category}
          </span>
          <h3 className="text-white font-semibold mt-1 leading-tight">{project.title}</h3>
          {project.client && (
            <p className="text-[#666] text-sm mt-1">{project.client}</p>
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