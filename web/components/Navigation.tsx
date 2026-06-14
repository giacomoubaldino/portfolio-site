'use client'

import { useEffect, useState } from 'react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-[#222]' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-white font-bold text-lg tracking-tight">
          G<span className="text-[#d10901]">.</span>
        </span>
        <div className="flex gap-8">
          {[['Lavori', 'projects'], ['About', 'about'], ['Contatti', 'contact']].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-[#888] hover:text-white text-sm transition-colors duration-200"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}