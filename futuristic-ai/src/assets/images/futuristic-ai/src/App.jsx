import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// Components
import Navbar from './components/Navbar'
import BackgroundParticles from './components/BackgroundParticles'
import Footer from './components/Footer'

// Pages
import Home from './components/pages/Home'
import Features from './components/pages/Features'
import Dashboard from './components/pages/Dashboard'
import About from './components/pages/About'
import Contact from './components/pages/Contact'

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      {isLoading ? (
        <div className="loading-screen flex-center">
          <div className="loading-content">
            <div className="loading"></div>
            <h2 className="gradient-text">Initializing AI Interface</h2>
          </div>
        </div>
      ) : (
        <>
          <BackgroundParticles />
          <Navbar />
          <main className="main-content">
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/features" element={<Features />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}

export default App