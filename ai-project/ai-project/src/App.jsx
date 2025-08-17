import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import AIFeatures from './components/AIFeatures'
import Contact from './components/Contact'
import OrganicBackground from './components/OrganicBackground'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading for smooth animations
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-soft-white">
        <div className="text-sage text-3xl font-semibold animate-pulse-slow">
          <span className="inline-block animate-float">N</span>
          <span className="inline-block animate-float" style={{ animationDelay: '0.2s' }}>a</span>
          <span className="inline-block animate-float" style={{ animationDelay: '0.4s' }}>t</span>
          <span className="inline-block animate-float" style={{ animationDelay: '0.6s' }}>u</span>
          <span className="inline-block animate-float" style={{ animationDelay: '0.8s' }}>r</span>
          <span className="inline-block animate-float" style={{ animationDelay: '1s' }}>e</span>
          <span className="inline-block mx-2 animate-float" style={{ animationDelay: '1.2s' }}>A</span>
          <span className="inline-block animate-float" style={{ animationDelay: '1.4s' }}>I</span>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-soft-white">
      <OrganicBackground />
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<AIFeatures />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App