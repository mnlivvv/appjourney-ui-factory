import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Navigation from './components/Navigation';

// Pages
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navigation />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
