import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import CasesPage from './pages/CasesPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loader">
          <div className="loader-circle"></div>
          <div className="loader-text">NeuroAI</div>
        </div>
        <style jsx="true">{`
          .loading-screen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #020419;
            z-index: 9999;
          }
          
          .loader {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          
          .loader-circle {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            border: 3px solid transparent;
            border-top-color: #00f2ff;
            border-right-color: #00f2ff;
            animation: spin 1s linear infinite;
            position: relative;
          }
          
          .loader-circle::before {
            content: '';
            position: absolute;
            top: 5px;
            left: 5px;
            right: 5px;
            bottom: 5px;
            border-radius: 50%;
            border: 3px solid transparent;
            border-top-color: #ff00ff;
            animation: spin 1.5s linear infinite;
          }
          
          .loader-text {
            margin-top: 1.5rem;
            font-family: 'Orbitron', sans-serif;
            font-size: 1.5rem;
            font-weight: 700;
            color: #e0e6ff;
            letter-spacing: 2px;
            animation: glow 1.5s ease-in-out infinite alternate;
          }
          
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
          
          @keyframes glow {
            from {
              text-shadow: 0 0 5px #00f2ff, 0 0 10px #00f2ff;
            }
            to {
              text-shadow: 0 0 10px #00f2ff, 0 0 20px #00f2ff, 0 0 30px #00f2ff;
            }
          }
        `}</style>
      </div>
    );
  }
  
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/cases" element={<CasesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;