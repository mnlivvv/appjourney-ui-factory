import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const OrganicBackground = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden opacity-30 pointer-events-none">
      {/* Top left blob */}
      <motion.div 
        className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-sage to-sage/50 rounded-full filter blur-3xl"
        animate={{
          scale: [1, 1.05, 1],
          x: [0, -5, 0],
          y: [0, -5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      />
      
      {/* Bottom right blob */}
      <motion.div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-sky-blue to-sky-blue/50 rounded-full filter blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 10, 0],
          y: [0, 10, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          transform: `translateY(${scrollY * -0.05}px)`,
        }}
      />
      
      {/* Middle blob */}
      <motion.div 
        className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-to-tr from-earth to-earth/50 rounded-full filter blur-3xl"
        animate={{
          scale: [1, 1.07, 1],
          x: [0, 8, 0],
          y: [0, -8, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          transform: `translateY(${scrollY * 0.02}px)`,
        }}
      />
    </div>
  )
}

export default OrganicBackground